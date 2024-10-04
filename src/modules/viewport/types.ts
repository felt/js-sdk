import * as z from "zod";
import { FeltBoundarySchema, FeltZoom, LatLngSchema } from "../../types/geo";

// DATA TYPES
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
export interface ViewportCenterZoom
  extends z.infer<typeof ViewportCenterZoomSchema> {}

const ViewportStateSchema = z.object({
  center: LatLngSchema,
  zoom: FeltZoom,
  bounds: FeltBoundarySchema,
});
/**
 * @category Viewport
 */
export interface ViewportState extends z.infer<typeof ViewportStateSchema> {}

// MESSAGE TYPES
// viewport.get
export const ViewportGetMessage = z.object({
  type: z.literal("viewport.get"),
  params: z.undefined(),
});

/**
 * @category Viewport
 */
export interface ViewportGetMessage
  extends z.infer<typeof ViewportGetMessage> {}

// viewport.goto
const ViewportSetCenterZoomMessage = z.object({
  type: z.literal("center"),
  location: ViewportCenterZoomSchema.partial(),
});

/**
 * @category Viewport
 */
export interface ViewportSetCenterZoomMessage
  extends z.infer<typeof ViewportSetCenterZoomMessage> {}

export const ViewportGotoMessage = z.object({
  type: z.literal("viewport.goto"),
  params: ViewportSetCenterZoomMessage,
});

/**
 * @category Viewport
 */
export interface ViewportGotoMessage
  extends z.infer<typeof ViewportGotoMessage> {}

// viewport.move
export const ViewportOnMoveMessage = z.object({
  eventName: z.literal("viewport.move"),
  id: z.string(),
});

/**
 * @category Viewport
 */
export interface ViewportOnMoveMessage
  extends z.infer<typeof ViewportOnMoveMessage> {}

export const ViewportOnMoveEvent = ViewportStateSchema;

/**
 * @category Viewport
 */
export interface ViewportOnMoveEvent
  extends z.infer<typeof ViewportOnMoveEvent> {}
