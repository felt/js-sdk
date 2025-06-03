import { z } from "zod";
import type { ModuleSchema } from "~/lib/ModuleSchema";
import { type Method, methodMessage } from "~/lib/builders";
import type { zInfer } from "~/lib/utils";
import { SortConfigSchema } from "../shared/types";
import {
  AddElementsToPanelClonableSchema,
  AddPanelElementClonableSchema,
  DeleteElementsFromPanelSchema,
  UiControlsOptionsSchema,
  UiOnMapInteractionsOptionsSchema,
  UpdateElementsInPanelClonableSchema,
  UpdatePanelElementClonableSchema,
} from "./types";

const AddPanelElementMessage = methodMessage(
  "addPanelElement",
  AddPanelElementClonableSchema,
);
const UpdatePanelElementMessage = methodMessage(
  "updatePanelElement",
  UpdatePanelElementClonableSchema,
);
const DeletePanelElementMessage = methodMessage(
  "deletePanelElement",
  z.string(),
);

const AddElementsToPanelMessage = methodMessage(
  "addElementsToPanel",
  AddElementsToPanelClonableSchema,
);

const UpdateElementsInPanelMessage = methodMessage(
  "updateElementsInPanel",
  UpdateElementsInPanelClonableSchema,
);

const DeleteElementsFromPanelMessage = methodMessage(
  "deleteElementsFromPanel",
  DeleteElementsFromPanelSchema,
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
    AddPanelElementMessage,
    UpdatePanelElementMessage,
    DeletePanelElementMessage,

    AddElementsToPanelMessage,
    UpdateElementsInPanelMessage,
    DeleteElementsFromPanelMessage,

    UiControlsMessage,
    OnMapInteractionsMessage,

    ShowLayerDataTableMessage,
    HideLayerDataTableMessage,
  ],
  listeners: null,
} satisfies ModuleSchema;

export type UiSchema = {
  methods: {
    addPanelElement: Method<zInfer<typeof AddPanelElementMessage>>;
    updatePanelElement: Method<zInfer<typeof UpdatePanelElementMessage>>;
    deletePanelElement: Method<zInfer<typeof DeletePanelElementMessage>>;

    addElementsToPanel: Method<zInfer<typeof AddElementsToPanelMessage>>;
    updateElementsInPanel: Method<zInfer<typeof UpdateElementsInPanelMessage>>;
    deleteElementsFromPanel: Method<
      zInfer<typeof DeleteElementsFromPanelMessage>
    >;

    updateUiControls: Method<zInfer<typeof UiControlsMessage>>;
    setOnMapInteractionsUi: Method<zInfer<typeof OnMapInteractionsMessage>>;

    showLayerDataTable: Method<zInfer<typeof ShowLayerDataTableMessage>>;
    hideLayerDataTable: Method<zInfer<typeof HideLayerDataTableMessage>>;
  };
  listeners: {};
};
