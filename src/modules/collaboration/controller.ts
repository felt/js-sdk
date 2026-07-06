import { listener, method } from "~/lib/interface";
import type { BroadcastEvent, BroadcastStateEvent, JsonValue } from "./types";

/**
 * @ignore
 */
export const collaborationController = (
  feltWindow: Pick<Window, "postMessage">,
): CollaborationController => ({
  broadcast: method(feltWindow, "broadcast"),
  setBroadcastState: method(feltWindow, "setBroadcastState"),
  onBroadcast: listener(feltWindow, "onBroadcast"),
  onBroadcastStateChange: listener(feltWindow, "onBroadcastStateChange"),
});

/**
 * The Collaboration controller lets an extension send and receive ephemeral
 * broadcast messages between viewers running the same extension on the same
 * map.
 *
 * This enables multiplayer functionality for any use case: presence, shared
 * state, live annotations, games, and so on. Messages are peer-to-peer among
 * viewers, fire-and-forget, and are never persisted or replayed to late
 * joiners.
 *
 * @group Controller
 * @public
 */
export interface CollaborationController {
  /**
   * Sends an ephemeral broadcast message to every other viewer that is running
   * the same extension on the same map.
   *
   * The message is not echoed back to the sender, is not persisted, and is not
   * replayed to viewers who join later. Messages are scoped automatically to
   * the emitting extension, so an extension only ever receives broadcasts from
   * other instances of itself.
   *
   * The `message` must be JSON-serializable and is subject to a size limit
   * (32KB when serialized); oversized or non-serializable messages are
   * rejected.
   *
   * @returns A promise that resolves once the message has been dispatched.
   *
   * @example
   * ```typescript
   * await felt.broadcast({
   *   message: { type: "ping", at: Date.now() },
   * });
   * ```
   */
  broadcast(params: {
    /**
     * The opaque, JSON-serializable message to send to peers.
     */
    message: JsonValue;
  }): Promise<void>;

  /**
   * Subscribes to broadcast messages sent by other viewers running the same
   * extension on the same map.
   *
   * The handler receives the peer's `message` along with an opaque `sender`
   * identifier. Messages are untrusted, extension-defined data from other
   * clients, so validate them before acting on them and never treat them as
   * executable code.
   *
   * @returns A function to unsubscribe from the listener.
   *
   * @event
   * @example
   * ```typescript
   * const unsubscribe = felt.onBroadcast({
   *   handler: ({ message, sender }) => {
   *     console.log("received", message, "from", sender);
   *   },
   * });
   *
   * // later on...
   * unsubscribe();
   * ```
   */
  onBroadcast(params: {
    /**
     * The handler function called with each broadcast received from a peer.
     */
    handler: (event: BroadcastEvent) => void;
  }): VoidFunction;

  /**
   * Publishes this client's current shared state for this extension so that
   * peers — including viewers who join *later* — can inherit it.
   *
   * Unlike {@link CollaborationController.broadcast}, which sends a one-off
   * ephemeral message, this sets a durable-for-the-session value that is
   * replayed to every viewer who is currently connected and to any viewer who
   * joins afterwards, via {@link CollaborationController.onBroadcastStateChange}.
   * Calling it again replaces this client's state for this extension. The state
   * is per-peer (there is no single merged document) and is automatically
   * cleared when this client disconnects.
   *
   * The `state` must be JSON-serializable and is subject to the same size limit
   * as {@link CollaborationController.broadcast} (32KB when serialized). Because
   * the state is replayed to peers, keep it small and use `broadcast` for
   * high-frequency deltas.
   *
   * @returns A promise that resolves once the state has been published.
   *
   * @example
   * ```typescript
   * await felt.setBroadcastState({
   *   state: { cursor: { x: 10, y: 20 }, color: "#f00" },
   * });
   * ```
   */
  setBroadcastState(params: {
    /**
     * The opaque, JSON-serializable state to publish for this extension.
     */
    state: JsonValue;
  }): Promise<void>;

  /**
   * Subscribes to the current shared state of every peer running the same
   * extension on the same map.
   *
   * When you subscribe, the handler is called once for each peer that currently
   * has state published (so a late joiner inherits everyone's state), and again
   * whenever a peer updates or clears its state. Use this — rather than
   * {@link CollaborationController.onBroadcast} — when you care about the
   * *current* state of peers rather than one-off live messages.
   *
   * State values are untrusted, extension-defined data from other clients, so
   * validate them before acting on them and never treat them as executable
   * code.
   *
   * @returns A function to unsubscribe from the listener.
   *
   * @event
   * @example
   * ```typescript
   * const unsubscribe = felt.onBroadcastStateChange({
   *   handler: ({ state, sender }) => {
   *     console.log("peer", sender, "state is now", state);
   *   },
   * });
   *
   * // later on...
   * unsubscribe();
   * ```
   */
  onBroadcastStateChange(params: {
    /**
     * The handler function called with each peer's current and updated state.
     */
    handler: (event: BroadcastStateEvent) => void;
  }): VoidFunction;
}
