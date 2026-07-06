***

The event delivered to an
[CollaborationController.onBroadcastStateChange](CollaborationController.md#onbroadcaststatechange) handler.

Unlike [BroadcastEvent](BroadcastEvent.md), which represents a one-off live message, this
represents the *current shared state* a peer has published for this
extension. It is delivered once per peer when you first subscribe (so a late
joiner inherits everyone's current state), and again whenever a peer updates
or clears its state.

# Properties

## state

> **state**: [`JsonValue`](JsonValue.md)

The current state the peer has published for this extension, or `null` if
the peer has cleared its state (or never set any).

This is opaque, extension-defined JSON. It is untrusted data coming from
another client, so you should validate it before acting on it, and you must
never treat it as executable code.

***

## sender

> **sender**: `string`

An opaque identifier for the peer whose state this is.

This is stable for the duration of a peer's connection to the map, but it
can change if that peer reconnects, so it should not be persisted or
treated as a durable user identity.
