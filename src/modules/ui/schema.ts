import { z } from "zod";
import type { ModuleSchema } from "~/lib/ModuleSchema";
import { type Method, methodMessage } from "~/lib/builders";
import type { zInfer } from "~/lib/utils";
import { SortConfigSchema } from "../shared/types";
import {
  CreatePanelElementsClonableSchema,
  CreatePanelParamsClonableSchema,
  DeletePanelElementsParamsSchema,
  UiControlsOptionsSchema,
  UiOnMapInteractionsOptionsSchema,
  UpdatePanelClonableSchema,
  UpdatePanelElementsParamsClonableSchema,
} from "./types";

const CreatePanelMessage = methodMessage(
  "createPanel",
  CreatePanelParamsClonableSchema,
);
const UpdatePanelMessage = methodMessage(
  "updatePanel",
  UpdatePanelClonableSchema,
);
const DeletePanelMessage = methodMessage("deletePanel", z.string());

const CreatePanelElementsMessage = methodMessage(
  "createPanelElements",
  CreatePanelElementsClonableSchema,
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
    CreatePanelMessage,
    UpdatePanelMessage,
    DeletePanelMessage,

    CreatePanelElementsMessage,
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
    createPanel: Method<zInfer<typeof CreatePanelMessage>>;
    updatePanel: Method<zInfer<typeof UpdatePanelMessage>>;
    deletePanel: Method<zInfer<typeof DeletePanelMessage>>;

    createPanelElements: Method<zInfer<typeof CreatePanelElementsMessage>>;
    updatePanelElements: Method<zInfer<typeof UpdatePanelElementsMessage>>;
    deletePanelElements: Method<zInfer<typeof DeletePanelElementsMessage>>;

    updateUiControls: Method<zInfer<typeof UiControlsMessage>>;
    setOnMapInteractionsUi: Method<zInfer<typeof OnMapInteractionsMessage>>;

    showLayerDataTable: Method<zInfer<typeof ShowLayerDataTableMessage>>;
    hideLayerDataTable: Method<zInfer<typeof HideLayerDataTableMessage>>;
  };
  listeners: {};
};
