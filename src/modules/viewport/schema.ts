import type { ModuleSchema } from "../../lib/schema";
import {
  ViewportGetMessage,
  ViewportGetResponse,
  ViewportGotoMessage,
  ViewportOnMoveEvent,
  ViewportOnMoveMessage,
} from "./types";

export const viewportModule = {
  commands: [ViewportGotoMessage],
  queries: [ViewportGetMessage],
  listeners: [ViewportOnMoveMessage],
} satisfies ModuleSchema;

export type ViewportModule = {
  commands: {
    ["viewport.goto"]: ViewportGotoMessage;
  };
  queries: {
    ["viewport.get"]: {
      request: ViewportGetMessage;
      response: ViewportGetResponse;
    };
  };
  listeners: {
    ["viewport.move"]: ViewportOnMoveEvent;
  };
};
