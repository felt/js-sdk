/**
 * This is the doc comment for the viewport module
 *
 * @module Viewport
 */
import * as z from "zod";
import {
  FeltBoundarySchema,
  FeltZoomSchema,
  LatLngSchema,
} from "../../types/geo";

// export interface ViewportCenterZoom
//   extends z.infer<typeof ViewportCenterZoomSchema> {}
/**
 * @ignore
 */
export const ViewportCenterZoomSchema = z.object({
  /**
   * The center of the viewport in latitude and longitude.
   */
  center: LatLngSchema,

  /**
   * The zoom level of the viewport.
   */
  zoom: FeltZoomSchema,
});

export interface ViewportState extends z.infer<typeof ViewportStateSchema> {}
const ViewportStateSchema = z.object({
  center: LatLngSchema,
  zoom: FeltZoomSchema,
  bounds: FeltBoundarySchema,
});

/**
 * The parameters for the `setViewport` method.
 * *
 */
export interface SetViewportCenterZoomParams
  extends z.infer<typeof SetViewportCenterZoomParamsSchema> {}
/**
 * @ignore
 */
export const SetViewportCenterZoomParamsSchema = z.object({
  center: ViewportCenterZoomSchema.shape.center.optional(),
  zoom: ViewportCenterZoomSchema.shape.zoom.optional(),
});

/**
 * The parameters for the `fitViewportToBounds` method.
 * *
 */
export interface ViewportFitBoundsParams
  extends z.infer<typeof ViewportFitBoundsParamsSchema> {}
/**
 * @ignore
 * @internal
 */
export const ViewportFitBoundsParamsSchema = z.object({
  bounds: FeltBoundarySchema,
});
