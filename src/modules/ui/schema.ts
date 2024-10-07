import type { ModuleSchema } from "../../lib/schema";
import { UiControlsMessage } from "./types";

export const uiSchema = {
  methods: [UiControlsMessage],
  listeners: null,
} satisfies ModuleSchema;

export type UiSchema = {
  methods: {
    ["ui_controls.update"]: {
      request: UiControlsMessage;
      response: void;
    };
  };
  listeners: {};
};
