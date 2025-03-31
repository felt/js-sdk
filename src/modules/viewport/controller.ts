import { listener, method } from "~/lib/interface";
import type {
  SetViewportCenterZoomParams,
  ViewportConstraints,
  ViewportFitBoundsParams,
  ViewportState,
} from "./types";

/**
 * @ignore
 */
export const viewportController = (
  feltWindow: Pick<Window, "postMessage">,
): ViewportController => ({
  getViewport: method(feltWindow, "getViewport"),
  setViewport: method(feltWindow, "setViewport"),
  getViewportConstraints: method(feltWindow, "getViewportConstraints"),
  setViewportConstraints: method(feltWindow, "setViewportConstraints"),
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
   *
   * @example
   * ```typescript
   * // Get current viewport state
   * const viewport = await felt.getViewport();
   * console.log({
   *   center: viewport.center,
   *   zoom: viewport.zoom,
   * });
   * ```
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
   * Gets the current state of the viewport constraints.
   *
   * @example
   * ```typescript
   * // Get current viewport constraints
   * const constraints = await felt.getViewportConstraints();
   * if (constraints) {
   *   console.log({
   *     bounds: constraints.bounds,
   *     minZoom: constraints.minZoom,
   *     maxZoom: constraints.maxZoom
   *   });
   * } else {
   *   console.log("No viewport constraints set");
   * }
   * ```
   */
  getViewportConstraints(): Promise<ViewportConstraints | null>;

  /**
   * Constrains the map viewport so it stays inside certain bounds and/or certain zoom levels.
   *
   * @example
   * ```typescript
   * felt.setViewportConstraints({
   *   bounds: [-122.5372532, 37.6652478, -122.1927016, 37.881707],
   *   minZoom: 1,
   *   maxZoom: 23,
   * });
   * ```
   *
   * @example
   * every constraint is optional
   * ```typescript
   * felt.setViewportConstraints({
   *   bounds: [-122.5372532, 37.6652478, -122.1927016, 37.881707],
   * });
   * ```
   *
   * @example
   * if a constraint is null, it will be removed but keeping the others
   * ```typescript
   * felt.setViewportConstraints({ bounds: null });
   * ```
   *
   * @example
   * if method receives null, it will remove the constraints
   * ```typescript
   * felt.setViewportConstraints(null);
   * ```
   */
  setViewportConstraints(
    constraints: Partial<ViewportConstraints> | null,
  ): void;

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
