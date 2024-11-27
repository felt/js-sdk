import { listener, method } from "~/lib/interface";
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
  onViewportMoveEnd: listener(feltWindow, "onViewportMoveEnd"),
  onMapIdle: listener(feltWindow, "onMapIdle"),
});

/**
 * The viewport controller allows you to control the viewport of the map.
 *
 * You can get the current viewport, move the viewport, and be notified when
 * the viewport changes.
 *
 * @group Controller
 * @public
 */
export interface ViewportController {
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

  /**
   * Adds a listener for when the viewport move ends, which is when the user
   * stops dragging or zooming the map, animations have finished, or inertial
   * dragging ends.
   *
   * @returns A function to unsubscribe from the listener
   *
   * @event
   * @example
   * ```typescript
   * const unsubscribe = felt.onViewportMoveEnd({
   *   handler: viewport => console.log(viewport.center.latitude),
   * });
   *
   * // later on...
   * unsubscribe();
   * ```
   */
  onViewportMoveEnd(args: {
    handler: (viewport: ViewportState) => void;
  }): VoidFunction;

  /**
   * Adds a listener for when the map is idle, which is defined as:
   * - No transitions are in progress
   * - The user is not interacting with the map, e.g. by panning or zooming
   * - All tiles for the current viewport have been loaded
   * - Any fade transitions (e.g. for labels) have completed
   *
   * @returns A function to unsubscribe from the listener
   *
   * @event
   * @example
   * ```typescript
   * const unsubscribe = felt.onMapIdle({ handler: () => console.log("map is idle") });
   *
   * // later on...
   * unsubscribe();
   * ```
   */
  onMapIdle(args: { handler: () => void }): VoidFunction;
}
