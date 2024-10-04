import type { ModuleSchema } from "../../lib/schema";
import {
  ViewportGetMessage,
  ViewportGotoMessage,
  ViewportOnMoveEvent,
  ViewportOnMoveMessage,
  type ViewportState,
} from "./types";

export const viewportSchema = {
  commands: [ViewportGotoMessage],
  queries: [ViewportGetMessage],
  listeners: [ViewportOnMoveMessage],
} satisfies ModuleSchema;

export type ViewportSchema = {
  commands: {
    ["viewport.goto"]: ViewportGotoMessage;
  };
  queries: {
    ["viewport.get"]: {
      request: ViewportGetMessage;
      response: ViewportState;
    };
  };
  listeners: {
    ["viewport.move"]: ViewportOnMoveEvent;
  };
};
