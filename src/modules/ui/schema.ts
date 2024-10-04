import type { ModuleSchema } from "../../lib/schema";
import { UiControlsMessage } from "./types";

export const uiSchema = {
  commands: [UiControlsMessage],
  queries: null,
  listeners: null,
} satisfies ModuleSchema;

export type UiSchema = {
  commands: {
    ["ui_controls.update"]: UiControlsMessage;
  };
  queries: {};
  listeners: {};
};
