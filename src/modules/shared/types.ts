import { z } from "zod";
import type { zInfer } from "~/lib/utils";

const Longitude = z.number();
const Latitude = z.number();
/**
 * Represents a point in world coordinates.
 */
export interface LatLng {
  latitude: number;
  longitude: number;
}
export const LatLngSchema = z.object({
  latitude: Latitude,
  longitude: Longitude,
});

/**
 * A tuple representing a longitude and latitude coordinate.
 *
 * This is used hen serializing geometry because that's the standard used in
 * GeoJSON.
 */
export type LngLatTuple = [longitude: number, latitude: number];

/**
 * A GeoJSON-like point geometry.
 */
export type PointGeometry = {
  type: "Point";
  coordinates: LngLatTuple;
};

/**
 * A GeoJSON-like polygon geometry.
 */
export type PolygonGeometry = {
  type: "Polygon";
  coordinates: LngLatTuple[][];
};

/**
 * A GeoJSON-like multi-polygon geometry.
 */
export type MultiPolygonGeometry = {
  type: "MultiPolygon";
  coordinates: PolygonGeometry["coordinates"][];
};

/**
 * A GeoJSON-like line string geometry.
 */
export type LineStringGeometry = {
  type: "LineString";
  coordinates: LngLatTuple[];
};

/**
 * A GeoJSON-like multi-line string geometry.
 */
export type MultiLineStringGeometry = {
  type: "MultiLineString";
  coordinates: LineStringGeometry["coordinates"][];
};

/**
 * A GeoJSON-like geometry of any type
 */
export type Geometry =
  | PointGeometry
  | PolygonGeometry
  | LineStringGeometry
  | MultiLineStringGeometry
  | MultiPolygonGeometry;

/**
 * @ignore
 * @internal
 */
export const FeltZoomSchema = z.number().min(1).max(23);

/**
 * The zoom level of the map.
 *
 * It is a floating-point number between 1 and 23, where 1 is the most
 * zoomed out and 23 is the most zoomed in.
 *
 * @group Types
 * @public
 */
export type FeltZoom = z.infer<typeof FeltZoomSchema>;

/**
 * @ignore
 * @internal
 */
export const FeltBoundarySchema = z.tuple([
  Longitude,
  Latitude,
  Longitude,
  Latitude,
]);

/**
 * The edges of the map in the form of a bounding box.
 *
 * The boundary is a tuple of the form `[west, south, east, north]`.
 *
 * @group Types
 * @public
 */
export type FeltBoundary = z.infer<typeof FeltBoundarySchema>;

/**
 * The parameters for the methods that change the visibility of entities.
 *
 * @public
 * @category Visibility
 */
export interface SetVisibilityRequest
  extends zInfer<typeof SetVisibilityRequestSchema> {}
/**
 * @internal
 */
export const SetVisibilityRequestSchema = z.object({
  /**
   * The ids of the entities you want to change the visibility of.
   */
  show: z.array(z.string()).optional(),
  hide: z.array(z.string()).optional(),
});
