import type { ModuleSchema } from "../../schema";
import { UiControlsMessage } from "./types";

export const uiModule = {
  commands: [UiControlsMessage],
  queries: null,
  listeners: null,
} satisfies ModuleSchema;

export type UiModule = {
  commands: {
    ["ui_controls.update"]: UiControlsMessage;
  };
  queries: {};
  listeners: {};
};
