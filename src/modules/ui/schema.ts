import { z } from "zod";
import type { ModuleSchema } from "~/lib/ModuleSchema";
import { type Method, methodMessage } from "~/lib/builders";
import type { zInfer } from "~/lib/utils";
import { SortConfigSchema } from "../shared/types";
import {
  AddPanelParamsClonableSchema,
  AddPanelElementsClonableSchema,
  DeletePanelElementsParamsSchema,
  UiControlsOptionsSchema,
  UiOnMapInteractionsOptionsSchema,
  UpdatePanelClonableSchema,
  UpdatePanelElementsParamsClonableSchema,
} from "./types";

const AddPanelMessage = methodMessage("addPanel", AddPanelParamsClonableSchema);
const UpdatePanelMessage = methodMessage(
  "updatePanel",
  UpdatePanelClonableSchema,
);
const DeletePanelMessage = methodMessage("deletePanel", z.string());

const AddPanelElementsMessage = methodMessage(
  "addPanelElements",
  AddPanelElementsClonableSchema,
);

const UpdatePanelElementsMessage = methodMessage(
  "updatePanelElements",
  UpdatePanelElementsParamsClonableSchema,
);

const DeletePanelElementsMessage = methodMessage(
  "deletePanelElements",
  DeletePanelElementsParamsSchema,
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

    AddPanelElementsMessage,
    UpdatePanelElementsMessage,
    DeletePanelElementsMessage,

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

    addPanelElements: Method<zInfer<typeof AddPanelElementsMessage>>;
    updatePanelElements: Method<zInfer<typeof UpdatePanelElementsMessage>>;
    deletePanelElements: Method<zInfer<typeof DeletePanelElementsMessage>>;

    updateUiControls: Method<zInfer<typeof UiControlsMessage>>;
    setOnMapInteractionsUi: Method<zInfer<typeof OnMapInteractionsMessage>>;

    showLayerDataTable: Method<zInfer<typeof ShowLayerDataTableMessage>>;
    hideLayerDataTable: Method<zInfer<typeof HideLayerDataTableMessage>>;
  };
  listeners: {};
};
