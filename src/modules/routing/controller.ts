import { method } from "~/lib/interface";
import type {
  GetIsochroneParams,
  GetIsochroneResult,
  GetRouteParams,
  GetRouteResult,
} from "./types";

/**
 * @ignore
 */
export const routingController = (
  feltWindow: Pick<Window, "postMessage">,
): RoutingController => ({
  getRoute: method(feltWindow, "getRoute"),
  getIsochrone: method(feltWindow, "getIsochrone"),
});

/**
 * The Routing controller asks Felt's routing service for routes and
 * isochrones, returning their geometry without drawing anything on the map.
 *
 * @group Controller
 * @public
 */
export interface RoutingController {
  /**
   * Plans a route through a list of waypoints and returns its line, length and
   * travel time.
   *
   * @remarks
   * - The route follows the road and path network for the given `routingMode`;
   *   it does not route by air.
   * - Nothing is drawn on the map. To show the route, create a Path element
   *   from `geometry.coordinates` with {@link Elements.ElementsController.createElement | createElement}.
   * - The promise rejects with the routing service's message when no route can
   *   be found between the waypoints, or when routing is unavailable.
   *
   * @returns A promise for the route's geometry, distance in metres and
   * duration in seconds.
   *
   * @example
   * ```typescript
   * const route = await felt.getRoute({
   *   waypoints: [
   *     { latitude: 37.8, longitude: -122.27 },
   *     { latitude: 37.81, longitude: -122.26 },
   *   ],
   *   routingMode: "driving",
   * });
   *
   * console.log(`${route.distance} m, ${route.duration} s`);
   *
   * await felt.createElement({
   *   type: "Path",
   *   coordinates: [route.geometry.coordinates],
   *   routingMode: "driving",
   * });
   * ```
   */
  getRoute(params: GetRouteParams): Promise<GetRouteResult>;

  /**
   * Finds the area reachable from a point within a travel time.
   *
   * @remarks
   * - The reachable area is measured along the road and path network for the
   *   given `routingMode`; it does not route by air.
   * - Nothing is drawn on the map. To show the area, create a Polygon element
   *   from `geometry.coordinates` with {@link Elements.ElementsController.createElement | createElement}.
   * - Isochrones are only available on workspace plans that include them; the
   *   promise rejects with the routing service's message when the map's
   *   workspace is not entitled, when no reachable area can be found, or when
   *   routing is unavailable.
   *
   * @returns A promise for the reachable area as a MultiPolygon.
   *
   * @example
   * ```typescript
   * const isochrone = await felt.getIsochrone({
   *   origin: { latitude: 37.8, longitude: -122.27 },
   *   routingMode: "walking",
   *   minutes: 15,
   * });
   *
   * await felt.createElement({
   *   type: "Polygon",
   *   coordinates: isochrone.geometry.coordinates,
   * });
   * ```
   */
  getIsochrone(params: GetIsochroneParams): Promise<GetIsochroneResult>;
}
