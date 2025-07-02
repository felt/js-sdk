import { z } from "zod";
import type { ModuleSchema } from "~/lib/ModuleSchema";
import { type Method, methodMessage } from "~/lib/builders";
import type { zInfer } from "~/lib/utils";
import { SortConfigSchema } from "../shared/types";
import {
  CreateActionTriggerParamsClonableSchema,
  CreateOrUpdatePanelParamsClonableSchema,
  CreatePanelElementsClonableSchema,
  DeletePanelElementsParamsSchema,
  UiControlsOptionsSchema,
  UiOnMapInteractionsOptionsSchema,
  UpdateActionTriggerParamsClonableSchema,
  UpdatePanelElementsParamsClonableSchema,
} from "./types";
import type { uiActionTriggerSchema } from "./uiElements/UIActionTrigger";
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

const CreatePanelIdMessage = methodMessage("createPanelId", z.void());

const CreateOrUpdatePanelMessage = methodMessage(
  "createOrUpdatePanel",
  CreateOrUpdatePanelParamsClonableSchema,
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

    CreatePanelIdMessage,
    CreateOrUpdatePanelMessage,
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
    createActionTrigger: Method<
      zInfer<typeof CreateActionTriggerMessage>,
      zInfer<typeof uiActionTriggerSchema.clonable>
    >;
    updateActionTrigger: Method<
      zInfer<typeof UpdateActionTriggerMessage>,
      zInfer<typeof uiActionTriggerSchema.clonable>
    >;
    deleteActionTrigger: Method<zInfer<typeof DeleteActionTriggerMessage>>;

    createPanelId: Method<zInfer<typeof CreatePanelIdMessage>>;
    createOrUpdatePanel: Method<
      zInfer<typeof CreateOrUpdatePanelMessage>,
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
