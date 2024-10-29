import type { ModuleSchema } from "~/lib/schema";
import { type Method, methodMessage } from "~/lib/types/builders";
import type { zInfer } from "~/lib/types/utils";
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
    updateUiControls: Method<zInfer<typeof UiControlsMessage>, void>;
  };
  listeners: {};
};
