import * as z from "zod";
import { FeltBoundary, FeltZoom, LatLng } from "../../types/geo";

// DATA TYPES
export const ViewportCenterZoom = z.object({
  center: LatLng,
  zoom: FeltZoom,
});
export type ViewportCenterZoom = z.infer<typeof ViewportCenterZoom>;

const ViewportReadValue = z.intersection(
  ViewportCenterZoom,
  z.object({
    bounds: FeltBoundary,
  }),
);

// MESSAGE TYPES
// viewport.get
export const ViewportGetMessage = z.object({
  type: z.literal("viewport.get"),
  params: z.undefined(),
});
export type ViewportGetMessage = z.infer<typeof ViewportGetMessage>;

export const ViewportGetResponse = ViewportReadValue;
export type ViewportGetResponse = z.infer<typeof ViewportGetResponse>;

// viewport.goto
const ViewportSetCenterZoomMessage = z.intersection(
  z.object({
    type: z.literal("center"),
  }),

  z.union([
    ViewportCenterZoom,
    z.object({
      center: ViewportCenterZoom.shape.center,
      zoom: ViewportCenterZoom.shape.zoom.optional(),
    }),
    z.object({
      center: ViewportCenterZoom.shape.center.optional(),
      zoom: ViewportCenterZoom.shape.zoom,
    }),
  ]),
);

export const ViewportGotoMessage = z.object({
  type: z.literal("viewport.goto"),
  params: ViewportSetCenterZoomMessage,
});
export type ViewportGotoMessage = z.infer<typeof ViewportGotoMessage>;

// viewport.move
export const ViewportOnMoveMessage = z.object({
  eventName: z.literal("viewport.move"),
  id: z.string(),
});
export type ViewportOnMoveMessage = z.infer<typeof ViewportOnMoveMessage>;

export const ViewportOnMoveEvent = ViewportReadValue;
export type ViewportOnMoveEvent = z.infer<typeof ViewportOnMoveEvent>;
