import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import {
  uiElementBaseClonableSchema,
  uiElementBaseCreateSchema,
  uiElementBaseSchema,
  type UIElementLifecycle,
} from "./base";
import type { UIButtonGroupElementCreate } from "./UIButtonGroupElement";

export const uiFlexibleSpaceElementSchemas = {
  read: uiElementBaseSchema.extend({ type: z.literal("FlexibleSpace") }),
  create: uiElementBaseCreateSchema.extend({
    type: z.literal("FlexibleSpace"),
  }),
  clonable: uiElementBaseClonableSchema.extend({
    type: z.literal("FlexibleSpace"),
  }),
};

/**
 * Only accepted for {@link UIButtonGroupElementCreate} elements.
 */
export interface UIFlexibleSpaceElementCreate
  extends UIElementLifecycle,
    Omit<
      zInfer<typeof uiFlexibleSpaceElementSchemas.create>,
      "onCreate" | "onDestroy"
    > {}
