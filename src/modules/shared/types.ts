import { z } from "zod";

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
  extends z.infer<typeof SetVisibilityRequestSchema> {}
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
