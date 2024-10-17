import * as z from "zod";

const Longitude = z.number();
const Latitude = z.number();
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
 * @category Types
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
 * @category Types
 * @public
 */
export type FeltBoundary = z.infer<typeof FeltBoundarySchema>;
