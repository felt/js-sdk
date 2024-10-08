import { listener, method } from "../../types/interface";
import type { ViewportSetCenterZoomParams, ViewportState } from "./types";

/**
 * @ignore
 */
export const viewportController = (feltWindow: Window): ViewportController => ({
  goto: method(feltWindow, "viewport.goto"),
  get: method(feltWindow, "viewport.get"),
  onMove: listener(feltWindow, "viewport.move"),
});

/**
 * The viewport controller allows you to control the viewport of the map.
 *
 * You can get the current viewport, move the viewport, and be notified when
 * the viewport changes.
 *
 * @category Viewport
 * @public
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
  goto(viewport: ViewportSetCenterZoomParams): void;

  /**
   * Gets the current state of the viewport.
   */
  get(): Promise<ViewportState>;

  /**
   * Adds a listener for when the viewport changes.
   *
   * @returns A function to unsubscribe from the listener
   *
   * @example
   * ```typescript
   * const unsubscribe = Felt.viewport.onMove({
   *   handler: viewport => console.log(viewport.center.latitude),
   * });
   *
   * // later on...
   * unsubscribe();
   * ```
   */
  onMove(args: {
    /**
     * This callback is called with the current viewport state whenever
     * the viewport changes.
     *
     * @param viewport - The current viewport state.
     */
    handler: (viewport: ViewportState) => void;
  }): VoidFunction;
};
