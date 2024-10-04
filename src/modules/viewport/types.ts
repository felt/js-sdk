import * as z from "zod";
import { FeltBoundary, FeltZoom, LatLng } from "../../types/geo";

// DATA TYPES
export const ViewportCenterZoom = z.object({
  /**
   * The center of the viewport in latitude and longitude.
   */
  center: LatLng,

  /**
   * The zoom level of the viewport.
   */
  zoom: FeltZoom,
});

/**
 * @category Viewport
 */
export type ViewportCenterZoomType = z.infer<typeof ViewportCenterZoom>;

const ViewportStateSchema = z.object({
  center: LatLng,
  zoom: FeltZoom,
  bounds: FeltBoundary,
});
/**
 * @category Viewport
 */
export type ViewportState = z.infer<typeof ViewportStateSchema>;

// MESSAGE TYPES
// viewport.get
export const ViewportGetMessage = z.object({
  type: z.literal("viewport.get"),
  params: z.undefined(),
});

/**
 * @category Viewport
 */
export type ViewportGetMessage = z.infer<typeof ViewportGetMessage>;

// viewport.goto
const ViewportSetCenterZoomMessage = z.object({
  type: z.literal("center"),
  location: ViewportCenterZoom.partial(),
});

/**
 * @category Viewport
 */
export type ViewportSetCenterZoomMessage = z.infer<
  typeof ViewportSetCenterZoomMessage
>;

export const ViewportGotoMessage = z.object({
  type: z.literal("viewport.goto"),
  params: ViewportSetCenterZoomMessage,
});

/**
 * @category Viewport
 */
export type ViewportGotoMessage = z.infer<typeof ViewportGotoMessage>;

// viewport.move
export const ViewportOnMoveMessage = z.object({
  eventName: z.literal("viewport.move"),
  id: z.string(),
});

/**
 * @category Viewport
 */
export type ViewportOnMoveMessage = z.infer<typeof ViewportOnMoveMessage>;

export const ViewportOnMoveEvent = ViewportStateSchema;

/**
 * @category Viewport
 */
export type ViewportOnMoveEvent = z.infer<typeof ViewportOnMoveEvent>;
