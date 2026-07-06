/**
 * A JSON-serializable value. Broadcast messages must be composed entirely of
 * these types so that they survive both the worker `MessageChannel` transport
 * and the server-side JSON serializer used to fan the message out to peers.
 *
 * @public
 */
export type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

/**
 * The event delivered to an {@link CollaborationController.onBroadcast} handler
 * when another viewer running the same extension on the same map emits a
 * broadcast.
 *
 * @public
 */
export interface BroadcastEvent {
  /**
   * The message that was broadcast by the peer.
   *
   * This is opaque, extension-defined JSON. It is untrusted data coming from
   * another client, so you should validate it before acting on it, and you must
   * never treat it as executable code.
   */
  message: JsonValue;

  /**
   * An opaque identifier for the peer that sent the broadcast.
   *
   * This is stable for the duration of a peer's connection to the map, but it
   * can change if that peer reconnects, so it should not be persisted or
   * treated as a durable user identity.
   */
  sender: string;
}

/**
 * The event delivered to an
 * {@link CollaborationController.onBroadcastStateChange} handler.
 *
 * Unlike {@link BroadcastEvent}, which represents a one-off live message, this
 * represents the *current shared state* a peer has published for this
 * extension. It is delivered once per peer when you first subscribe (so a late
 * joiner inherits everyone's current state), and again whenever a peer updates
 * or clears its state.
 *
 * @public
 */
export interface BroadcastStateEvent {
  /**
   * The current state the peer has published for this extension, or `null` if
   * the peer has cleared its state (or never set any).
   *
   * This is opaque, extension-defined JSON. It is untrusted data coming from
   * another client, so you should validate it before acting on it, and you must
   * never treat it as executable code.
   */
  state: JsonValue | null;

  /**
   * An opaque identifier for the peer whose state this is.
   *
   * This is stable for the duration of a peer's connection to the map, but it
   * can change if that peer reconnects, so it should not be persisted or
   * treated as a durable user identity.
   */
  sender: string;
}
