import type { z } from "zod";
import type { ModuleSchema } from "~/lib/schema";
import { type Method, methodMessage } from "~/lib/types/builders";
import { UiControlsOptionsSchema } from "./types";

const UiControlsMessage = methodMessage(
  "updateUiControls",
  UiControlsOptionsSchema,
);

export const uiSchema = {
  methods: [UiControlsMessage],
  listeners: null,
} satisfies ModuleSchema;

export type UiSchema = {
  methods: {
    updateUiControls: Method<z.infer<typeof UiControlsMessage>, void>;
  };
  listeners: {};
};
