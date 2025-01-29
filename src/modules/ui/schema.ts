import { z } from "zod";
import type { ModuleSchema } from "~/lib/ModuleSchema";
import { type Method, methodMessage } from "~/lib/builders";
import type { zInfer } from "~/lib/utils";
import {
  UiControlsOptionsSchema,
  UiOnMapInteractionsOptionsSchema,
} from "./types";

const UiControlsMessage = methodMessage(
  "updateUiControls",
  UiControlsOptionsSchema,
);

const OnMapInteractionsMessage = methodMessage(
  "setOnMapInteractionsUi",
  UiOnMapInteractionsOptionsSchema,
);

const EnableToolSettingsUiMessage = methodMessage(
  "enableToolSettingsUi",
  z.boolean(),
);

export const uiSchema = {
  methods: [
    UiControlsMessage,
    OnMapInteractionsMessage,
    EnableToolSettingsUiMessage,
  ],
  listeners: null,
} satisfies ModuleSchema;

export type UiSchema = {
  methods: {
    updateUiControls: Method<zInfer<typeof UiControlsMessage>, void>;
    setOnMapInteractionsUi: Method<
      zInfer<typeof OnMapInteractionsMessage>,
      void
    >;
    enableToolSettingsUi: Method<
      zInfer<typeof EnableToolSettingsUiMessage>,
      void
    >;
  };
  listeners: {};
};
