import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import {
  LatLngSchema,
  RoutingModeSchema,
  type LatLng,
  type LineStringGeometry,
  type MultiPolygonGeometry,
  type RoutingMode,
} from "../shared/types";

// Matches the routing endpoint's limit on the number of points in one route.
const MAX_WAYPOINTS = 50;

// The routing service accepts travel times up to two hours.
const MAX_MINUTES = 120;

// The routing service cannot route by air.
const RoutableModeSchema = RoutingModeSchema.exclude(["flying"]);

export const GetRouteParamsSchema = z.object({
  waypoints: z.array(LatLngSchema).min(2).max(MAX_WAYPOINTS),
  routingMode: RoutableModeSchema,
});

/**
 * The parameters for planning a route, passed to the
 * {@link RoutingController.getRoute} method.
 *
 * @group Routing
 */
export interface GetRouteParams extends zInfer<typeof GetRouteParamsSchema> {
  /**
   * The places the route passes through, in order, from start to end.
   *
   * @remarks
   * Between 2 and 50 waypoints.
   */
  waypoints: LatLng[];

  /**
   * The mode of transport the route is planned for, which decides which roads
   * and paths it can use.
   *
   * @remarks
   * `"flying"` is not accepted; the routing service only follows the road and
   * path network.
   */
  routingMode: Exclude<RoutingMode, "flying">;
}

/**
 * The response from the {@link RoutingController.getRoute} method.
 *
 * @group Routing
 */
export interface GetRouteResult {
  /**
   * The route's line, following the road and path network through every
   * waypoint.
   *
   * @remarks
   * GeoJSON, so it can be passed straight to methods that take a line, such as
   * {@link Layers.LayersController.getRasterProfile | getRasterProfile}.
   */
  geometry: LineStringGeometry;

  /**
   * The length of the route along the roads and paths it follows, in metres.
   */
  distance: number;

  /**
   * The travel time along the route, in seconds.
   */
  duration: number;
}

export const GetIsochroneParamsSchema = z.object({
  origin: LatLngSchema,
  routingMode: RoutableModeSchema,
  minutes: z.number().positive().max(MAX_MINUTES),
});

/**
 * The parameters for finding the area reachable from a point, passed to the
 * {@link RoutingController.getIsochrone} method.
 *
 * @group Routing
 */
export interface GetIsochroneParams
  extends zInfer<typeof GetIsochroneParamsSchema> {
  /**
   * The place to measure travel time from.
   */
  origin: LatLng;

  /**
   * The mode of transport to measure travel time for.
   *
   * @remarks
   * `"flying"` is not accepted; the routing service only follows the road and
   * path network.
   */
  routingMode: Exclude<RoutingMode, "flying">;

  /**
   * The travel time, in minutes, that bounds the reachable area.
   *
   * @remarks
   * Greater than 0 and at most 120.
   */
  minutes: number;
}

/**
 * The response from the {@link RoutingController.getIsochrone} method.
 *
 * @group Routing
 */
export interface GetIsochroneResult {
  /**
   * The area reachable from the origin within the travel time.
   *
   * @remarks
   * Always a MultiPolygon, so a reachable area that is split into disconnected
   * parts keeps every part.
   */
  geometry: MultiPolygonGeometry;
}
