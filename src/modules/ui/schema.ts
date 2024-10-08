import * as z from "zod";
import type { ModuleSchema } from "../../lib/schema";
import { methodMessage, type Method } from "../../types/builders";
import { UiControlsOptionsSchema } from "./types";

const UiControlsMessage = methodMessage(
  "ui_controls.update",
  UiControlsOptionsSchema,
);

export const uiSchema = {
  methods: [UiControlsMessage],
  listeners: null,
} satisfies ModuleSchema;

export type UiSchema = {
  methods: {
    "ui_controls.update": Method<z.infer<typeof UiControlsMessage>, void>;
  };
  listeners: {};
};
