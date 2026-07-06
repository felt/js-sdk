***

The event delivered to an [CollaborationController.onBroadcast](CollaborationController.md#onbroadcast) handler
when another viewer running the same extension on the same map emits a
broadcast.

# Properties

## message

> **message**: [`JsonValue`](JsonValue.md)

The message that was broadcast by the peer.

This is opaque, extension-defined JSON. It is untrusted data coming from
another client, so you should validate it before acting on it, and you must
never treat it as executable code.

***

## sender

> **sender**: `string`

An opaque identifier for the peer that sent the broadcast.

This is stable for the duration of a peer's connection to the map, but it
can change if that peer reconnects, so it should not be persisted or
treated as a durable user identity.
