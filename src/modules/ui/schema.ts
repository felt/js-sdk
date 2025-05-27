import { z } from "zod";
import type { ModuleSchema } from "~/lib/ModuleSchema";
import { type Method, methodMessage } from "~/lib/builders";
import type { zInfer } from "~/lib/utils";
import { SortConfigSchema } from "../shared/types";
import {
  AddElementToPanelClonableSchema,
  PanelClonableSchema,
  UiControlsOptionsSchema,
  UiOnMapInteractionsOptionsSchema,
  UpdateElementInPanelClonableSchema,
  UpdatePanelClonableSchema,
} from "./types";

const AddPanelMessage = methodMessage("addPanel", PanelClonableSchema);
const UpdatePanelMessage = methodMessage(
  "updatePanel",
  UpdatePanelClonableSchema,
);
const DeletePanelMessage = methodMessage("deletePanel", z.string());

const AddElementToPanelMessage = methodMessage(
  "addElementToPanel",
  AddElementToPanelClonableSchema,
);

const UpdateElementInPanelMessage = methodMessage(
  "updateElementInPanel",
  UpdateElementInPanelClonableSchema,
);

const UiControlsMessage = methodMessage(
  "updateUiControls",
  UiControlsOptionsSchema,
);

const OnMapInteractionsMessage = methodMessage(
  "setOnMapInteractionsUi",
  UiOnMapInteractionsOptionsSchema,
);

const ShowLayerDataTableMessage = methodMessage(
  "showLayerDataTable",
  z
    .object({
      layerId: z.string(),
      sorting: SortConfigSchema.optional(),
    })
    .optional(),
);

const HideLayerDataTableMessage = methodMessage(
  "hideLayerDataTable",
  z.undefined(),
);

export const uiSchema = {
  methods: [
    AddPanelMessage,
    UpdatePanelMessage,
    DeletePanelMessage,

    AddElementToPanelMessage,
    UpdateElementInPanelMessage,

    UiControlsMessage,
    OnMapInteractionsMessage,

    ShowLayerDataTableMessage,
    HideLayerDataTableMessage,
  ],
  listeners: null,
} satisfies ModuleSchema;

export type UiSchema = {
  methods: {
    addPanel: Method<zInfer<typeof AddPanelMessage>>;
    updatePanel: Method<zInfer<typeof UpdatePanelMessage>>;
    deletePanel: Method<zInfer<typeof DeletePanelMessage>>;

    addElementToPanel: Method<zInfer<typeof AddElementToPanelMessage>>;
    updateElementInPanel: Method<zInfer<typeof UpdateElementInPanelMessage>>;

    updateUiControls: Method<zInfer<typeof UiControlsMessage>>;
    setOnMapInteractionsUi: Method<zInfer<typeof OnMapInteractionsMessage>>;

    showLayerDataTable: Method<zInfer<typeof ShowLayerDataTableMessage>>;
    hideLayerDataTable: Method<zInfer<typeof HideLayerDataTableMessage>>;
  };
  listeners: {};
};
