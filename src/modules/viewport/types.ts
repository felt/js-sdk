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
export interface ViewportCenterZoomType
  extends z.infer<typeof ViewportCenterZoom> {}

const ViewportState = z.intersection(
  ViewportCenterZoom,
  z.object({
    bounds: FeltBoundary,
  }),
);

export interface ViewportState extends z.infer<typeof ViewportState> {}

// MESSAGE TYPES
// viewport.get
export const ViewportGetMessage = z.object({
  type: z.literal("viewport.get"),
  params: z.undefined(),
});
export interface ViewportGetMessage
  extends z.infer<typeof ViewportGetMessage> {}

// viewport.goto
const ViewportSetCenterZoomMessage = z.object({
  type: z.literal("center"),
  location: ViewportCenterZoom.partial(),
});

export interface ViewportSetCenterZoomMessage
  extends z.infer<typeof ViewportSetCenterZoomMessage> {}

export const ViewportGotoMessage = z.object({
  type: z.literal("viewport.goto"),
  params: ViewportSetCenterZoomMessage,
});
export interface ViewportGotoMessage
  extends z.infer<typeof ViewportGotoMessage> {}

// viewport.move
export const ViewportOnMoveMessage = z.object({
  eventName: z.literal("viewport.move"),
  id: z.string(),
});
export interface ViewportOnMoveMessage
  extends z.infer<typeof ViewportOnMoveMessage> {}

export const ViewportOnMoveEvent = ViewportState;
export interface ViewportOnMoveEvent
  extends z.infer<typeof ViewportOnMoveEvent> {}
