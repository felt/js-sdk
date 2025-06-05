import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import {
  uiElementBaseClonableSchema,
  uiElementBaseCreateSchema,
  uiElementBaseSchema,
  type UIElementLifecycle,
} from "./base";

export const uiDividerElementSchemas = {
  read: uiElementBaseSchema.extend({ type: z.literal("Divider") }),
  create: uiElementBaseCreateSchema.extend({ type: z.literal("Divider") }),
  clonable: uiElementBaseClonableSchema.extend({ type: z.literal("Divider") }),
};

/**
 * Represents a divider element in a panel.
 *
 * @remarks
 * This element is used to separate other elements in a panel.
 */
export interface UIDividerElementCreate
  extends UIElementLifecycle,
    Omit<
      zInfer<typeof uiDividerElementSchemas.create>,
      "onCreate" | "onDestroy"
    > {}
