import type { ModuleSchema } from "~/lib/schema";
import { type Method, methodMessage } from "~/lib/types/builders";
import type { zInfer } from "~/lib/types/utils";
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

export const uiSchema = {
  methods: [UiControlsMessage, OnMapInteractionsMessage],
  listeners: null,
} satisfies ModuleSchema;

export type UiSchema = {
  methods: {
    updateUiControls: Method<zInfer<typeof UiControlsMessage>, void>;
    setOnMapInteractionsUi: Method<
      zInfer<typeof OnMapInteractionsMessage>,
      void
    >;
  };
  listeners: {};
};
