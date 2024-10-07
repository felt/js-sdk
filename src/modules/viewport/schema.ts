import type { ModuleSchema } from "../../lib/schema";
import {
  ViewportGetMessage,
  ViewportGotoMessage,
  ViewportOnMoveEvent,
  ViewportOnMoveMessage,
  type ViewportState,
} from "./types";

export const viewportSchema = {
  methods: [ViewportGotoMessage, ViewportGetMessage],
  listeners: [ViewportOnMoveMessage],
} satisfies ModuleSchema;

export type ViewportSchema = {
  methods: {
    ["viewport.goto"]: {
      request: ViewportGotoMessage;
      response: void;
    };
    ["viewport.get"]: {
      request: ViewportGetMessage;
      response: ViewportState;
    };
  };
  listeners: {
    ["viewport.move"]: ViewportOnMoveEvent;
  };
};
