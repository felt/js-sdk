import { listener, method } from "../../types/interface";
import type {
  ViewportFitBoundsParams,
  ViewportSetCenterZoomParams,
  ViewportState,
} from "./types";

/**
 * @ignore
 */
export const viewportController = (feltWindow: Window): ViewportController => ({
  get: method(feltWindow, "viewport.get"),
  goto: method(feltWindow, "viewport.goto"),
  fitBounds: method(feltWindow, "viewport.fitBounds"),
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
   * Gets the current state of the viewport.
   */
  get(): Promise<ViewportState>;

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
   * Fits the map to the specified bounds.
   *
   * @example
   * ```typescript
   * const west = -122.4194;
   * const south = 37.7749;
   * const east = -122.4194;
   * const north = 37.7749;
   * Felt.viewport.fitBounds({ bounds: [west, south, east, north] });
   * ```
   */
  fitBounds(bounds: ViewportFitBoundsParams): void;

  /**
   * Adds a listener for when the viewport changes.
   *
   * @returns A function to unsubscribe from the listener
   *
   * @event
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
