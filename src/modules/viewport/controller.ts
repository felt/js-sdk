import { command, listener, query } from "../../types/interface";
import type { ViewportSetCenterZoomMessage, ViewportState } from "./types";

export const viewportController = (feltWindow: Window): ViewportController => ({
  goto: command(feltWindow, "viewport.goto"),
  get: query(feltWindow, "viewport.get"),
  onMove: listener(feltWindow, "viewport.move"),
});

/**
 * The viewport controller allows you to control the viewport of the map.
 *
 * You can get the current viewport, move the viewport, and be notified when
 * the viewport changes.
 *
 * @interface
 */
export type ViewportController = {
  /**
   * Moves the map to the specified location.
   *
   * @example
   * ```typescript
   * Felt.viewport.goto({ center: { lat: 0, lng: 0 }, zoom: 10 });
   * ```
   */
  goto(viewport: ViewportSetCenterZoomMessage): void;

  /**
   * Gets the current state of the viewport.
   *
   * @returns {@link ViewportState}
   */
  get(): Promise<ViewportState>;

  /**
   * Adds a listener for when the viewport changes.
   *
   * @param callback - The callback that is called when the viewport changes.
   * It is called with the current viewport state.
   *
   * @returns A function to unsubscribe from the listener
   *
   * @example
   * ```typescript
   * const unsubscribe =Felt.viewport.onMove(viewport => console.log(viewport.center.latitude));
   *
   * // later on...
   * unsubscribe();
   * ```
   */
  onMove(callback: (event: ViewportState) => void): VoidFunction;
};
