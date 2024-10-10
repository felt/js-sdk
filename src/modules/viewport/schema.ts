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

const ViewportGetMessage = methodMessage("viewport.get", z.undefined());
const ViewportGotoMessage = methodMessage(
  "viewport.goto",
  ViewportSetCenterZoomParamsSchema,
);
const ViewportFitBoundsMessage = methodMessage(
  "viewport.fitBounds",
  ViewportFitBoundsParamsSchema,
);
const ViewportOnMoveMessage = listenerMessageNoParams("viewport.move");

export const viewportSchema = {
  methods: [ViewportGotoMessage, ViewportGetMessage, ViewportFitBoundsMessage],
  listeners: [ViewportOnMoveMessage],
} satisfies ModuleSchema;

export type ViewportSchema = {
  methods: {
    "viewport.get": Method<z.infer<typeof ViewportGetMessage>, ViewportState>;
    "viewport.goto": Method<z.infer<typeof ViewportGotoMessage>, void>;
    "viewport.fitBounds": Method<
      z.infer<typeof ViewportFitBoundsMessage>,
      void
    >;
  };
  listeners: {
    "viewport.move": Listener<void, ViewportState>;
  };
};
