import { listener, method } from "../../types/interface";
import type {
  SetViewportCenterZoomParams,
  ViewportFitBoundsParams,
  ViewportState,
} from "./types";

/**
 * @ignore
 */
export const viewportController = (feltWindow: Window): ViewportController => ({
  getViewport: method(feltWindow, "getViewport"),
  setViewport: method(feltWindow, "setViewport"),
  fitViewportToBounds: method(feltWindow, "fitViewportToBounds"),
  onViewportMove: listener(feltWindow, "onViewportMove"),
});

/**
 * The viewport controller allows you to control the viewport of the map.
 *
 * You can get the current viewport, move the viewport, and be notified when
 * the viewport changes.
 *
 * @group Viewport
 * @public
 * @interface
 */
export type ViewportController = {
  /**
   * Gets the current state of the viewport.
   */
  getViewport(): Promise<ViewportState>;

  /**
   * Moves the map to the specified location.
   *
   * @example
   * ```typescript
   * felt.setViewport({
   *   center: { latitude: 0, longitude: 0 },
   *   zoom: 10,
   * });
   * ```
   */
  setViewport(viewport: SetViewportCenterZoomParams): void;

  /**
   * Fits the map to the specified bounds.
   *
   * @example
   * ```typescript
   * const west = -122.4194;
   * const south = 37.7749;
   * const east = -122.4194;
   * const north = 37.7749;
   * felt.fitViewportToBounds({ bounds: [west, south, east, north] });
   * ```
   */
  fitViewportToBounds(bounds: ViewportFitBoundsParams): void;

  /**
   * Adds a listener for when the viewport changes.
   *
   * @returns A function to unsubscribe from the listener
   *
   * @event
   * @example
   * ```typescript
   * const unsubscribe = felt.onViewportMove({
   *   handler: viewport => console.log(viewport.center.latitude),
   * });
   *
   * // later on...
   * unsubscribe();
   * ```
   */
  onViewportMove(args: {
    /**
     * This callback is called with the current viewport state whenever
     * the viewport changes.
     *
     * @param viewport - The current viewport state.
     */
    handler: (viewport: ViewportState) => void;
  }): VoidFunction;
};
