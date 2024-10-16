/**
 * This is the doc comment for the viewport module
 *
 * @module Viewport
 */
import * as z from "zod";
import { FeltBoundarySchema, FeltZoom, LatLngSchema } from "../../types/geo";
import type { FeltController } from "../controller";

export interface ViewportCenterZoom
  extends z.infer<typeof ViewportCenterZoomSchema> {}
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
  zoom: FeltZoom,
});

export interface ViewportState extends z.infer<typeof ViewportStateSchema> {}
const ViewportStateSchema = z.object({
  center: LatLngSchema,
  zoom: FeltZoom,
  bounds: FeltBoundarySchema,
});

/**
 * The parameters for the `gotoViewport` method.
 * *
 */
export interface SetViewportCenterZoomParams
  extends z.infer<typeof SetViewportCenterZoomParamsSchema> {}
/**
 * @ignore
 */
export const SetViewportCenterZoomParamsSchema = z.object({
  type: z.literal("center"),
  location: ViewportCenterZoomSchema.partial(),
});

/**
 * The parameters for the `fitBounds` method.
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
