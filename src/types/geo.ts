import * as z from "zod";

const Longitude = z.number();
const Latitude = z.number();
export const LatLng = z.object({
  latitude: Latitude,
  longitude: Longitude,
});
export type LatLng = z.infer<typeof LatLng>;
export const FeltZoom = z.number().min(1).max(23);
export type FeltZoom = z.infer<typeof FeltZoom>;

export const FeltBoundary = z.tuple([Longitude, Latitude, Longitude, Latitude]);
export type FeltBoundary = z.infer<typeof FeltBoundary>;
