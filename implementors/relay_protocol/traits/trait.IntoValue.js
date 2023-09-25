(function() {var implementors = {
"relay_base_schema":[["impl IntoValue for <a class=\"enum\" href=\"relay_base_schema/spans/enum.SpanStatus.html\" title=\"enum relay_base_schema::spans::SpanStatus\">SpanStatus</a>"],["impl IntoValue for <a class=\"enum\" href=\"relay_base_schema/events/enum.EventType.html\" title=\"enum relay_base_schema::events::EventType\">EventType</a>"],["impl IntoValue for <a class=\"enum\" href=\"relay_base_schema/metrics/enum.MetricUnit.html\" title=\"enum relay_base_schema::metrics::MetricUnit\">MetricUnit</a>"]],
"relay_event_schema":[["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.GroupingConfig.html\" title=\"struct relay_event_schema::protocol::GroupingConfig\">GroupingConfig</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.EventProcessingError.html\" title=\"struct relay_event_schema::protocol::EventProcessingError\">EventProcessingError</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.NsError.html\" title=\"struct relay_event_schema::protocol::NsError\">NsError</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.TraceContext.html\" title=\"struct relay_event_schema::protocol::TraceContext\">TraceContext</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.OtelContext.html\" title=\"struct relay_event_schema::protocol::OtelContext\">OtelContext</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.Csp.html\" title=\"struct relay_event_schema::protocol::Csp\">Csp</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.ExpectStaple.html\" title=\"struct relay_event_schema::protocol::ExpectStaple\">ExpectStaple</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.IpAddr.html\" title=\"struct relay_event_schema::protocol::IpAddr\">IpAddr</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.ReprocessingContext.html\" title=\"struct relay_event_schema::protocol::ReprocessingContext\">ReprocessingContext</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.ReplayContext.html\" title=\"struct relay_event_schema::protocol::ReplayContext\">ReplayContext</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.MechanismMeta.html\" title=\"struct relay_event_schema::protocol::MechanismMeta\">MechanismMeta</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.Stacktrace.html\" title=\"struct relay_event_schema::protocol::Stacktrace\">Stacktrace</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.ClientSdkInfo.html\" title=\"struct relay_event_schema::protocol::ClientSdkInfo\">ClientSdkInfo</a>"],["impl IntoValue for <a class=\"enum\" href=\"relay_event_schema/protocol/enum.Level.html\" title=\"enum relay_event_schema::protocol::Level\">Level</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.ProfileContext.html\" title=\"struct relay_event_schema::protocol::ProfileContext\">ProfileContext</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.CError.html\" title=\"struct relay_event_schema::protocol::CError\">CError</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.DeviceClass.html\" title=\"struct relay_event_schema::protocol::DeviceClass\">DeviceClass</a>"],["impl&lt;T&gt; IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.PairList.html\" title=\"struct relay_event_schema::protocol::PairList\">PairList</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    Array&lt;T&gt;: IntoValue,\n    T: IntoValue,</span>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.Measurement.html\" title=\"struct relay_event_schema::protocol::Measurement\">Measurement</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.TagEntry.html\" title=\"struct relay_event_schema::protocol::TagEntry\">TagEntry</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.ProguardDebugImage.html\" title=\"struct relay_event_schema::protocol::ProguardDebugImage\">ProguardDebugImage</a>"],["impl IntoValue for <a class=\"enum\" href=\"relay_event_schema/protocol/enum.LockReasonType.html\" title=\"enum relay_event_schema::protocol::LockReasonType\">LockReasonType</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.CloudResourceContext.html\" title=\"struct relay_event_schema::protocol::CloudResourceContext\">CloudResourceContext</a>"],["impl IntoValue for <a class=\"enum\" href=\"relay_event_schema/protocol/enum.DebugImage.html\" title=\"enum relay_event_schema::protocol::DebugImage\">DebugImage</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.OsContext.html\" title=\"struct relay_event_schema::protocol::OsContext\">OsContext</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.RegVal.html\" title=\"struct relay_event_schema::protocol::RegVal\">RegVal</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.CodeId.html\" title=\"struct relay_event_schema::protocol::CodeId\">CodeId</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.MonitorContext.html\" title=\"struct relay_event_schema::protocol::MonitorContext\">MonitorContext</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.ExtraValue.html\" title=\"struct relay_event_schema::protocol::ExtraValue\">ExtraValue</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.SystemSdkInfo.html\" title=\"struct relay_event_schema::protocol::SystemSdkInfo\">SystemSdkInfo</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.SpanId.html\" title=\"struct relay_event_schema::protocol::SpanId\">SpanId</a>"],["impl&lt;T&gt; IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.Values.html\" title=\"struct relay_event_schema::protocol::Values\">Values</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: IntoValue,</span>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.Metrics.html\" title=\"struct relay_event_schema::protocol::Metrics\">Metrics</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.EventId.html\" title=\"struct relay_event_schema::protocol::EventId\">EventId</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.Mechanism.html\" title=\"struct relay_event_schema::protocol::Mechanism\">Mechanism</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.NativeDebugImage.html\" title=\"struct relay_event_schema::protocol::NativeDebugImage\">NativeDebugImage</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.Event.html\" title=\"struct relay_event_schema::protocol::Event\">Event</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.JvmDebugImage.html\" title=\"struct relay_event_schema::protocol::JvmDebugImage\">JvmDebugImage</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.Query.html\" title=\"struct relay_event_schema::protocol::Query\">Query</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.Timestamp.html\" title=\"struct relay_event_schema::protocol::Timestamp\">Timestamp</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.SourceMapDebugImage.html\" title=\"struct relay_event_schema::protocol::SourceMapDebugImage\">SourceMapDebugImage</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.Cookies.html\" title=\"struct relay_event_schema::protocol::Cookies\">Cookies</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.SampleRate.html\" title=\"struct relay_event_schema::protocol::SampleRate\">SampleRate</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.PosixSignal.html\" title=\"struct relay_event_schema::protocol::PosixSignal\">PosixSignal</a>"],["impl IntoValue for <a class=\"enum\" href=\"relay_event_schema/protocol/enum.TransactionSource.html\" title=\"enum relay_event_schema::protocol::TransactionSource\">TransactionSource</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.FrameData.html\" title=\"struct relay_event_schema::protocol::FrameData\">FrameData</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.HeaderName.html\" title=\"struct relay_event_schema::protocol::HeaderName\">HeaderName</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.Addr.html\" title=\"struct relay_event_schema::protocol::Addr\">Addr</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.Measurements.html\" title=\"struct relay_event_schema::protocol::Measurements\">Measurements</a>"],["impl IntoValue for <a class=\"enum\" href=\"relay_event_schema/protocol/enum.InstructionAddrAdjustment.html\" title=\"enum relay_event_schema::protocol::InstructionAddrAdjustment\">InstructionAddrAdjustment</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.JsonLenientString.html\" title=\"struct relay_event_schema::protocol::JsonLenientString\">JsonLenientString</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.TraceId.html\" title=\"struct relay_event_schema::protocol::TraceId\">TraceId</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.RawStacktrace.html\" title=\"struct relay_event_schema::protocol::RawStacktrace\">RawStacktrace</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.TransactionInfo.html\" title=\"struct relay_event_schema::protocol::TransactionInfo\">TransactionInfo</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.Frame.html\" title=\"struct relay_event_schema::protocol::Frame\">Frame</a>"],["impl IntoValue for <a class=\"enum\" href=\"relay_event_schema/protocol/enum.Context.html\" title=\"enum relay_event_schema::protocol::Context\">Context</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.Fingerprint.html\" title=\"struct relay_event_schema::protocol::Fingerprint\">Fingerprint</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.NativeImagePath.html\" title=\"struct relay_event_schema::protocol::NativeImagePath\">NativeImagePath</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.ResponseContext.html\" title=\"struct relay_event_schema::protocol::ResponseContext\">ResponseContext</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.RelayInfo.html\" title=\"struct relay_event_schema::protocol::RelayInfo\">RelayInfo</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.DebugMeta.html\" title=\"struct relay_event_schema::protocol::DebugMeta\">DebugMeta</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.Headers.html\" title=\"struct relay_event_schema::protocol::Headers\">Headers</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.LenientString.html\" title=\"struct relay_event_schema::protocol::LenientString\">LenientString</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.GpuContext.html\" title=\"struct relay_event_schema::protocol::GpuContext\">GpuContext</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.LogEntry.html\" title=\"struct relay_event_schema::protocol::LogEntry\">LogEntry</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.Geo.html\" title=\"struct relay_event_schema::protocol::Geo\">Geo</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.Request.html\" title=\"struct relay_event_schema::protocol::Request\">Request</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.BrowserContext.html\" title=\"struct relay_event_schema::protocol::BrowserContext\">BrowserContext</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.LockReason.html\" title=\"struct relay_event_schema::protocol::LockReason\">LockReason</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.Tags.html\" title=\"struct relay_event_schema::protocol::Tags\">Tags</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.Replay.html\" title=\"struct relay_event_schema::protocol::Replay\">Replay</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.AppleDebugImage.html\" title=\"struct relay_event_schema::protocol::AppleDebugImage\">AppleDebugImage</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.TemplateInfo.html\" title=\"struct relay_event_schema::protocol::TemplateInfo\">TemplateInfo</a>"],["impl IntoValue for <a class=\"enum\" href=\"relay_event_schema/protocol/enum.ThreadId.html\" title=\"enum relay_event_schema::protocol::ThreadId\">ThreadId</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.ClientSdkPackage.html\" title=\"struct relay_event_schema::protocol::ClientSdkPackage\">ClientSdkPackage</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.RuntimeContext.html\" title=\"struct relay_event_schema::protocol::RuntimeContext\">RuntimeContext</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.ContextInner.html\" title=\"struct relay_event_schema::protocol::ContextInner\">ContextInner</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.AppContext.html\" title=\"struct relay_event_schema::protocol::AppContext\">AppContext</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.HeaderValue.html\" title=\"struct relay_event_schema::protocol::HeaderValue\">HeaderValue</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.FrameVars.html\" title=\"struct relay_event_schema::protocol::FrameVars\">FrameVars</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.Span.html\" title=\"struct relay_event_schema::protocol::Span\">Span</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.Message.html\" title=\"struct relay_event_schema::protocol::Message\">Message</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.SingleCertificateTimestamp.html\" title=\"struct relay_event_schema::protocol::SingleCertificateTimestamp\">SingleCertificateTimestamp</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.Breadcrumb.html\" title=\"struct relay_event_schema::protocol::Breadcrumb\">Breadcrumb</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.Thread.html\" title=\"struct relay_event_schema::protocol::Thread\">Thread</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.Breakdowns.html\" title=\"struct relay_event_schema::protocol::Breakdowns\">Breakdowns</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.Hpkp.html\" title=\"struct relay_event_schema::protocol::Hpkp\">Hpkp</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.MachException.html\" title=\"struct relay_event_schema::protocol::MachException\">MachException</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.DeviceContext.html\" title=\"struct relay_event_schema::protocol::DeviceContext\">DeviceContext</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.User.html\" title=\"struct relay_event_schema::protocol::User\">User</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.Exception.html\" title=\"struct relay_event_schema::protocol::Exception\">Exception</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.DebugId.html\" title=\"struct relay_event_schema::protocol::DebugId\">DebugId</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.ExpectCt.html\" title=\"struct relay_event_schema::protocol::ExpectCt\">ExpectCt</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.Contexts.html\" title=\"struct relay_event_schema::protocol::Contexts\">Contexts</a>"],["impl IntoValue for <a class=\"struct\" href=\"relay_event_schema/protocol/struct.TransactionNameChange.html\" title=\"struct relay_event_schema::protocol::TransactionNameChange\">TransactionNameChange</a>"]],
"relay_protocol":[]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()