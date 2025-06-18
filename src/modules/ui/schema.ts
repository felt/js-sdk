import { z } from "zod";
import type { ModuleSchema } from "~/lib/ModuleSchema";
import { type Method, methodMessage } from "~/lib/builders";
import type { zInfer } from "~/lib/utils";
import { SortConfigSchema } from "../shared/types";
import {
  CreateActionTriggerParamsClonableSchema,
  CreatePanelElementsClonableSchema,
  CreatePanelParamsClonableSchema,
  DeletePanelElementsParamsSchema,
  UiControlsOptionsSchema,
  UiOnMapInteractionsOptionsSchema,
  UpdateActionTriggerParamsClonableSchema,
  UpdatePanelClonableSchema,
  UpdatePanelElementsParamsClonableSchema,
} from "./types";
import type { uiPanelCreateSchema } from "./uiElements/UIPanel";

const CreateActionTriggerMessage = methodMessage(
  "createActionTrigger",
  CreateActionTriggerParamsClonableSchema,
);

const UpdateActionTriggerMessage = methodMessage(
  "updateActionTrigger",
  UpdateActionTriggerParamsClonableSchema,
);

const DeleteActionTriggerMessage = methodMessage(
  "deleteActionTrigger",
  z.string(),
);

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
    CreateActionTriggerMessage,
    UpdateActionTriggerMessage,
    DeleteActionTriggerMessage,

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
    createActionTrigger: Method<zInfer<typeof CreateActionTriggerMessage>>;
    updateActionTrigger: Method<zInfer<typeof UpdateActionTriggerMessage>>;
    deleteActionTrigger: Method<zInfer<typeof DeleteActionTriggerMessage>>;

    createPanel: Method<
      zInfer<typeof CreatePanelMessage>,
      zInfer<typeof uiPanelCreateSchema.clonable>
    >;
    updatePanel: Method<
      zInfer<typeof UpdatePanelMessage>,
      zInfer<typeof uiPanelCreateSchema.clonable>
    >;
    deletePanel: Method<zInfer<typeof DeletePanelMessage>>;

    createPanelElements: Method<
      zInfer<typeof CreatePanelElementsMessage>,
      zInfer<typeof uiPanelCreateSchema.clonable>
    >;
    updatePanelElements: Method<
      zInfer<typeof UpdatePanelElementsMessage>,
      zInfer<typeof uiPanelCreateSchema.clonable>
    >;
    deletePanelElements: Method<zInfer<typeof DeletePanelElementsMessage>>;

    updateUiControls: Method<zInfer<typeof UiControlsMessage>>;
    setOnMapInteractionsUi: Method<zInfer<typeof OnMapInteractionsMessage>>;

    showLayerDataTable: Method<zInfer<typeof ShowLayerDataTableMessage>>;
    hideLayerDataTable: Method<zInfer<typeof HideLayerDataTableMessage>>;
  };
  listeners: {};
};
