/**
 * The Routing module gives you access to Felt's routing service: plan a route
 * through a list of waypoints, or find the area reachable from a point within
 * a travel time.
 *
 * These methods return geometry and do not draw anything on the map. To put a
 * route on the map, create a Path element with a `routingMode` using the
 * {@link ElementsController}, or let the user draw one with the route tool via
 * the {@link ToolsController}.
 *
 * @example
 * ```ts
 * const route = await felt.getRoute({
 *   waypoints: [
 *     { latitude: 37.8, longitude: -122.27 },
 *     { latitude: 37.81, longitude: -122.26 },
 *   ],
 *   routingMode: "cycling",
 * });
 *
 * const reachable = await felt.getIsochrone({
 *   origin: { latitude: 37.8, longitude: -122.27 },
 *   routingMode: "walking",
 *   minutes: 15,
 * });
 * ```
 *
 * @module Routing
 */
export type {
  GetIsochroneParams,
  GetIsochroneResult,
  GetRouteParams,
  GetRouteResult,
} from "./types";

export type { RoutingController } from "./controller";

import type { ElementsController } from "../elements";
import type { ToolsController } from "../tools";
