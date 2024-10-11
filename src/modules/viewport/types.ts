import * as z from "zod";
import { FeltBoundarySchema, FeltZoom, LatLngSchema } from "../../types/geo";
import type { FeltController } from "../controller";

/**
 * @category Viewport
 */
export interface ViewportCenterZoom
  extends z.infer<typeof ViewportCenterZoomSchema> {}
export const ViewportCenterZoomSchema = z.object({
  /**
   * The center of the viewport in latitude and longitude.
   */
  center: LatLngSchema,

  /**
   * The zoom level of the viewport.
   */
  zoom: FeltZoom,
});

/**
 * @category Viewport
 */
export interface ViewportState extends z.infer<typeof ViewportStateSchema> {}
const ViewportStateSchema = z.object({
  center: LatLngSchema,
  zoom: FeltZoom,
  bounds: FeltBoundarySchema,
});

/**
 * The parameters for the `gotoViewport` method.
 *
 * {@link FeltController.gotoViewport}
 *
 * @category Viewport
 */
export interface ViewportSetCenterZoomParams
  extends z.infer<typeof ViewportSetCenterZoomParamsSchema> {}
export const ViewportSetCenterZoomParamsSchema = z.object({
  type: z.literal("center"),
  location: ViewportCenterZoomSchema.partial(),
});

/**
 * The parameters for the `fitBounds` method.
 *
 * {@link FeltController.fitBounds}
 *
 * @category Viewport
 */
export interface ViewportFitBoundsParams
  extends z.infer<typeof ViewportFitBoundsParamsSchema> {}
export const ViewportFitBoundsParamsSchema = z.object({
  bounds: FeltBoundarySchema,
});
