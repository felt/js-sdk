import { z } from "zod";
import type { ModuleSchema } from "~/lib/ModuleSchema";
import {
  listenerMessageNoParams,
  methodMessage,
  type ListenerNoOptions,
  type Method,
} from "~/lib/builders";
import type { zInfer } from "~/lib/utils";
import {
  SetViewportCenterZoomParamsSchema,
  SetViewportConstraintsParamsSchema,
  ViewportFitBoundsParamsSchema,
  type ViewportConstraints,
  type ViewportState,
} from "./types";

const GetViewportMessage = methodMessage("getViewport", z.undefined());
const GotoViewportMessage = methodMessage(
  "setViewport",
  SetViewportCenterZoomParamsSchema,
);

const GetViewportConstraintsMessage = methodMessage(
  "getViewportConstraints",
  z.undefined(),
);
const SetViewportConstraintsMessage = methodMessage(
  "setViewportConstraints",
  SetViewportConstraintsParamsSchema,
);

const ViewportFitBoundsMessage = methodMessage(
  "fitViewportToBounds",
  ViewportFitBoundsParamsSchema,
);
const OnViewportMoveMessage = listenerMessageNoParams("onViewportMove");
const OnViewportMoveEndMessage = listenerMessageNoParams("onViewportMoveEnd");
const OnMapIdleMessage = listenerMessageNoParams("onMapIdle");

export const viewportSchema = {
  methods: [
    GotoViewportMessage,
    GetViewportMessage,
    GetViewportConstraintsMessage,
    SetViewportConstraintsMessage,
    ViewportFitBoundsMessage,
  ],
  listeners: [
    OnViewportMoveMessage,
    OnViewportMoveEndMessage,
    OnMapIdleMessage,
  ],
} satisfies ModuleSchema;

export type ViewportSchema = {
  methods: {
    getViewport: Method<zInfer<typeof GetViewportMessage>, ViewportState>;
    setViewport: Method<zInfer<typeof GotoViewportMessage>, void>;

    getViewportConstraints: Method<
      zInfer<typeof GetViewportConstraintsMessage>,
      ViewportConstraints | null
    >;
    setViewportConstraints: Method<
      zInfer<typeof SetViewportConstraintsMessage>,
      void
    >;

    fitViewportToBounds: Method<zInfer<typeof ViewportFitBoundsMessage>, void>;
  };
  listeners: {
    onViewportMove: ListenerNoOptions<ViewportState>;
    onViewportMoveEnd: ListenerNoOptions<ViewportState>;
    onMapIdle: ListenerNoOptions<void>;
  };
};
