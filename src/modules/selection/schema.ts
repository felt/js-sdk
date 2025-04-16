import { z } from "zod";
import type { ModuleSchema } from "~/lib/ModuleSchema";
import {
  listenerMessageNoParams,
  methodMessage,
  type ListenerNoOptions,
  type Method,
} from "~/lib/builders";
import type { zInfer } from "~/lib/utils";
import { FeatureSelectionSchema, type EntityNode } from "./types";

const GetSelectionMessage = methodMessage("getSelection", z.undefined());
const OnSelectionChangeMessage = listenerMessageNoParams("onSelectionChange");

const SelectFeatureMessage = methodMessage(
  "selectFeature",
  FeatureSelectionSchema,
);

const ClearSelectionMessage = methodMessage(
  "clearSelection",
  z
    .object({
      features: z.boolean().optional(),
      elements: z.boolean().optional(),
    })
    .optional(),
);

export const selectionSchema = {
  methods: [GetSelectionMessage, SelectFeatureMessage, ClearSelectionMessage],
  listeners: [OnSelectionChangeMessage],
} satisfies ModuleSchema;

export type SelectionSchema = {
  methods: {
    getSelection: Method<zInfer<typeof GetSelectionMessage>>;
    selectFeature: Method<zInfer<typeof SelectFeatureMessage>>;
    clearSelection: Method<zInfer<typeof ClearSelectionMessage>>;
  };
  listeners: {
    onSelectionChange: ListenerNoOptions<{ selection: Array<EntityNode> }>;
  };
};
