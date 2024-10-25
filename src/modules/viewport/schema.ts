import { z } from "zod";
import type { ModuleSchema } from "~/lib/schema";
import {
  listenerMessageNoParams,
  methodMessage,
  type Listener,
  type Method,
} from "~/lib/types/builders";
import {
  SetViewportCenterZoomParamsSchema,
  ViewportFitBoundsParamsSchema,
  type ViewportState,
} from "./types";

const GetViewportMessage = methodMessage("getViewport", z.undefined());
const GotoViewportMessage = methodMessage(
  "setViewport",
  SetViewportCenterZoomParamsSchema,
);
const ViewportFitBoundsMessage = methodMessage(
  "fitViewportToBounds",
  ViewportFitBoundsParamsSchema,
);
const OnViewportMoveMessage = listenerMessageNoParams("onViewportMove");

export const viewportSchema = {
  methods: [GotoViewportMessage, GetViewportMessage, ViewportFitBoundsMessage],
  listeners: [OnViewportMoveMessage],
} satisfies ModuleSchema;

export type ViewportSchema = {
  methods: {
    getViewport: Method<z.infer<typeof GetViewportMessage>, ViewportState>;
    setViewport: Method<z.infer<typeof GotoViewportMessage>, void>;
    fitViewportToBounds: Method<z.infer<typeof ViewportFitBoundsMessage>, void>;
  };
  listeners: {
    onViewportMove: Listener<void, ViewportState>;
  };
};
