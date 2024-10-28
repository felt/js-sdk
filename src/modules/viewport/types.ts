import { z } from "zod";
import {
  type FeltBoundary,
  type FeltZoom,
  type LatLng,
  FeltBoundarySchema,
  FeltZoomSchema,
  LatLngSchema,
} from "~/modules/shared/types";

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
 * @group Types
 *
 * The current state of the viewport, including the derived bounds.
 */
export interface ViewportState {
  /**
   * The center of the viewport in latitude and longitude.
   *
   * {@link LatLng}
   */
  center: LatLng;

  /**
   * The zoom level of the viewport.
   *
   * {@link FeltZoom}
   */
  zoom: FeltZoom;

  /**
   * The bounding box of the viewport.
   *
   * This is derived, and depends on the center and zoom of the viewport, as
   * well as its size.
   *
   * {@link FeltBoundary}
   */
  bounds: FeltBoundary;
}

/**
 * The parameters for the `setViewport` method.
 *
 * @group Types
 */
export interface SetViewportCenterZoomParams
  extends z.infer<typeof SetViewportCenterZoomParamsSchema> {}
export const SetViewportCenterZoomParamsSchema = z.object({
  center: ViewportCenterZoomSchema.shape.center.optional(),
  zoom: ViewportCenterZoomSchema.shape.zoom.optional(),
});

/**
 * The parameters for the `fitViewportToBounds` method.
 *
 * @group Types
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
