import { z } from "zod";
import type { ModuleSchema } from "~/lib/schema";
import {
  listenerMessageNoParams,
  methodMessage,
  type Listener,
  type Method,
} from "~/lib/types/builders";
import type { EntityNode } from "./types";

const GetSelectionMessage = methodMessage("getSelection", z.undefined());
const OnSelectionChangeMessage = listenerMessageNoParams("onSelectionChange");

export const selectionSchema = {
  methods: [GetSelectionMessage],
  listeners: [OnSelectionChangeMessage],
} satisfies ModuleSchema;

export type SelectionSchema = {
  methods: {
    getSelection: Method<
      z.infer<typeof GetSelectionMessage>,
      Array<EntityNode>
    >;
  };
  listeners: {
    onSelectionChange: Listener<void, { selection: Array<EntityNode> }>;
  };
};
