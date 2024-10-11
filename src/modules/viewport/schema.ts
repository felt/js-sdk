import * as z from "zod";
import type { ModuleSchema } from "../../lib/schema";
import {
  listenerMessageNoParams,
  methodMessage,
  type Listener,
  type Method,
} from "../../types/builders";
import {
  ViewportFitBoundsParamsSchema,
  ViewportSetCenterZoomParamsSchema,
  type ViewportState,
} from "./types";

const ViewportGetMessage = methodMessage("getViewport", z.undefined());
const ViewportGotoMessage = methodMessage(
  "gotoViewport",
  ViewportSetCenterZoomParamsSchema,
);
const ViewportFitBoundsMessage = methodMessage(
  "fitBounds",
  ViewportFitBoundsParamsSchema,
);
const ViewportOnMoveMessage = listenerMessageNoParams("onViewportMove");

export const viewportSchema = {
  methods: [ViewportGotoMessage, ViewportGetMessage, ViewportFitBoundsMessage],
  listeners: [ViewportOnMoveMessage],
} satisfies ModuleSchema;

export type ViewportSchema = {
  methods: {
    getViewport: Method<z.infer<typeof ViewportGetMessage>, ViewportState>;
    gotoViewport: Method<z.infer<typeof ViewportGotoMessage>, void>;
    fitBounds: Method<z.infer<typeof ViewportFitBoundsMessage>, void>;
  };
  listeners: {
    onViewportMove: Listener<void, ViewportState>;
  };
};
