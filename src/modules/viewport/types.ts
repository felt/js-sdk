import * as z from "zod";
import {
  type FeltBoundary,
  type FeltZoom,
  type LatLng,
  FeltBoundarySchema,
  FeltZoomSchema,
  LatLngSchema,
} from "../shared";

export const ViewportCenterZoomSchema = z.object({
  /**
   * The center of the viewport in latitude and longitude.
   */
  center: LatLngSchema,

  /**
   * The zoom level of the viewport.
   *
   * {@link FeltZoom}
   */
  zoom: FeltZoomSchema,
});

/**
 *
 */
export interface ViewportState {
  center: LatLng;
  zoom: FeltZoom;
  bounds: FeltBoundary;
}
const ViewportStateSchema = z.object({
  center: LatLngSchema,
  zoom: FeltZoomSchema,
  bounds: FeltBoundarySchema,
});

/**
 * The parameters for the `setViewport` method.
 */
export interface SetViewportCenterZoomParams
  extends z.infer<typeof SetViewportCenterZoomParamsSchema> {}
export const SetViewportCenterZoomParamsSchema = z.object({
  center: ViewportCenterZoomSchema.shape.center.optional(),
  zoom: ViewportCenterZoomSchema.shape.zoom.optional(),
});

/**
 * The parameters for the `fitViewportToBounds` method.
 */
export interface ViewportFitBoundsParams
  extends z.infer<typeof ViewportFitBoundsParamsSchema> {}
export const ViewportFitBoundsParamsSchema = z.object({
  /**
   * The bounds to fit the viewport to.
   *
   * {@link FeltBoundary}
   */
  bounds: FeltBoundarySchema,
});
