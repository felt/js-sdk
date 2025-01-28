import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import {
  type FeltBoundary,
  FeltBoundarySchema,
  type FeltZoom,
  FeltZoomSchema,
  type LatLng,
  LatLngSchema,
} from "~/modules/shared/types";

/**
 * The input type for setting the viewport to a particular center and zoom.
 *
 * @group Types
 */
export interface ViewportCenterZoom
  extends zInfer<typeof ViewportCenterZoomSchema> {
  /**
   * The center of the viewport in latitude and longitude.
   */
  center: LatLng;

  /**
   * The zoom level of the viewport.
   */

  zoom: FeltZoom;
}
export const ViewportCenterZoomSchema = z.object({
  center: LatLngSchema,

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
  extends zInfer<typeof SetViewportCenterZoomParamsSchema> {}
export const SetViewportCenterZoomParamsSchema = z.object({
  center: ViewportCenterZoomSchema.shape.center.optional(),
  zoom: ViewportCenterZoomSchema.shape.zoom.optional(),
});

/**
 * @group Types
 *
 * The constraints for the viewport. Used to ensure that the viewport stays
 * within certain bounds and zoom levels.
 */
export interface ViewportConstraints {
  /**
   * The minimum zoom level for the viewport.
   *
   * {@link FeltZoom}
   */
  minZoom: FeltZoom | null;

  /**
   * The maximum zoom level for the viewport.
   *
   * {@link FeltZoom}
   */
  maxZoom: FeltZoom | null;

  /**
   * The bounds for the viewport.
   *
   * {@link FeltBoundary}
   */
  bounds: FeltBoundary | null;
}

/**
 * The parameters for the `setViewportConstraints` method.
 */
export const SetViewportConstraintsParamsSchema = z
  .object({
    minZoom: ViewportCenterZoomSchema.shape.zoom.nullish(),
    maxZoom: ViewportCenterZoomSchema.shape.zoom.nullish(),
    bounds: FeltBoundarySchema.nullish(),
  })
  .nullable();

/**
 * The parameters for the `fitViewportToBounds` method.
 *
 * @group Types
 */
export interface ViewportFitBoundsParams
  extends zInfer<typeof ViewportFitBoundsParamsSchema> {
  /**
   * The bounds to fit the viewport to.
   *
   * {@link FeltBoundary}
   */
  bounds: FeltBoundary;
}
export const ViewportFitBoundsParamsSchema = z.object({
  bounds: FeltBoundarySchema,
});
