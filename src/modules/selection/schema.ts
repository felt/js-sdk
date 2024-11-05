import { z } from "zod";
import type { ModuleSchema } from "~/lib/ModuleSchema";
import {
  type Listener,
  type Method,
  listenerMessageNoParams,
  methodMessage,
} from "~/lib/builders";
import type { zInfer } from "~/lib/utils";
import type { EntityNode } from "./types";

const GetSelectionMessage = methodMessage("getSelection", z.undefined());
const OnSelectionChangeMessage = listenerMessageNoParams("onSelectionChange");

export const selectionSchema = {
  methods: [GetSelectionMessage],
  listeners: [OnSelectionChangeMessage],
} satisfies ModuleSchema;

export type SelectionSchema = {
  methods: {
    getSelection: Method<zInfer<typeof GetSelectionMessage>, Array<EntityNode>>;
  };
  listeners: {
    onSelectionChange: Listener<void, { selection: Array<EntityNode> }>;
  };
};
