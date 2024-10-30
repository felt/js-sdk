import { z } from "zod";
import type { ModuleSchema } from "~/lib/schema";
import {
  type Listener,
  type Method,
  listenerMessageNoParams,
  methodMessage,
} from "~/lib/types/builders";
import type { zInfer } from "~/lib/types/utils";
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
const OnViewportMoveEndMessage = listenerMessageNoParams("onViewportMoveEnd");

export const viewportSchema = {
  methods: [GotoViewportMessage, GetViewportMessage, ViewportFitBoundsMessage],
  listeners: [OnViewportMoveMessage, OnViewportMoveEndMessage],
} satisfies ModuleSchema;

export type ViewportSchema = {
  methods: {
    getViewport: Method<zInfer<typeof GetViewportMessage>, ViewportState>;
    setViewport: Method<zInfer<typeof GotoViewportMessage>, void>;
    fitViewportToBounds: Method<zInfer<typeof ViewportFitBoundsMessage>, void>;
  };
  listeners: {
    onViewportMove: Listener<void, ViewportState>;
    onViewportMoveEnd: Listener<void, ViewportState>;
  };
};
