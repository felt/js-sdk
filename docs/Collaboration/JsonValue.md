***

> **JsonValue**: `string` | `number` | `boolean` | `null` | [`JsonValue`](JsonValue.md)\[] | \{}

A JSON-serializable value. Broadcast messages must be composed entirely of
these types so that they survive both the worker `MessageChannel` transport
and the server-side JSON serializer used to fan the message out to peers.
