import * as z from "zod";
import type { ModuleSchema } from "../../lib/schema";
import {
  listenerMessage,
  methodMessage,
  type Method,
} from "../../types/builders";
import { ViewportSetCenterZoomParamsSchema, type ViewportState } from "./types";

const ViewportGetMessage = methodMessage("viewport.get", z.undefined());
const ViewportGotoMessage = methodMessage(
  "viewport.goto",
  ViewportSetCenterZoomParamsSchema,
);
const ViewportOnMoveMessage = listenerMessage("viewport.move");

export const viewportSchema = {
  methods: [ViewportGotoMessage, ViewportGetMessage],
  listeners: [ViewportOnMoveMessage],
} satisfies ModuleSchema;

export type ViewportSchema = {
  methods: {
    "viewport.goto": Method<z.infer<typeof ViewportGotoMessage>, void>;
    "viewport.get": Method<z.infer<typeof ViewportGetMessage>, ViewportState>;
  };
  listeners: {
    "viewport.move": Listener<void, ViewportState>;
  };
};

type Listener<TOptions, TParams> = {
  options: TOptions;
  eventParams: TParams;
};
