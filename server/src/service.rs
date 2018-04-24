use std::sync::Arc;

use actix_web::{http, server, App, Json};
use failure::ResultExt;
use sentry_types::protocol::latest::Event;
use uuid::Uuid;

use smith_aorta::{AortaChangeset, PublicKeyEventAction};
use smith_config::Config;
use smith_trove::Trove;

use errors::{Error, ErrorKind};
use extractors::{BadStoreRequest, StoreRequest};

#[derive(Serialize)]
struct StoreResponse {
    /// The ID of the stored event
    id: Uuid,
}

#[derive(Serialize)]
struct StoreChangeset {
    event: Event<'static>,
}

impl AortaChangeset for StoreChangeset {
    fn aorta_changeset_type(&self) -> &str {
        "store"
    }
}

fn store(request: StoreRequest) -> Result<Json<StoreResponse>, BadStoreRequest> {
    let trove_state = request.trove_state();
    let project_id = request.project_id();
    let project_state = trove_state.get_or_create_project_state(project_id);
    let event_action = project_state.get_public_key_event_action(request.auth().public_key());

    let mut event = request.into_event();
    let event_id = *event.id.get_or_insert_with(|| Uuid::new_v4());

    match event_action {
        PublicKeyEventAction::Send => trove_state
            .request_manager()
            .add_changeset(StoreChangeset { event }),
        // TODO: Implement an event queue in `TroveState`
        PublicKeyEventAction::Queue => trove_state
            .request_manager()
            .add_changeset(StoreChangeset { event }),
        PublicKeyEventAction::Discard => {
            debug!("Discarded event {} for project {}", event_id, project_id)
        }
    }

    Ok(Json(StoreResponse { id: event_id }))
}

/// Given a relay config spawns the server and lets it run until it stops.
///
/// This not only spawning the server but also a governed trove in the
/// background.  Effectively this boots the server.
pub fn run(config: Config) -> Result<(), Error> {
    let trove = Arc::new(Trove::new(config.make_aorta_config()));
    let state = trove.state();
    trove.govern().context(ErrorKind::TroveGovernSpawnFailed)?;

    info!("spawning http listener");
    server::new(move || {
        App::with_state(state.clone()).route("/api/{project}/store/", http::Method::POST, store)
    }).bind(config.listen_addr())
        .context(ErrorKind::BindFailed)?
        .run();

    trove.abdicate().context(ErrorKind::TroveGovernSpawnFailed)?;
    info!("relay shutdown complete");

    Ok(())
}
