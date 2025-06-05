import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import {
  uiElementBaseClonableSchema,
  uiElementBaseCreateSchema,
  uiElementBaseSchema,
  type UIElementLifecycle,
} from "./base";

const uiTextElementBaseSchema = z.object({
  type: z.literal("Text"),

  /**
   * The text to display in the element.
   */
  content: z.string(),
});

export const uiTextElementSchemas = {
  read: uiElementBaseSchema.extend(uiTextElementBaseSchema.shape),
  create: uiElementBaseCreateSchema.extend(uiTextElementBaseSchema.shape),
  clonable: uiElementBaseClonableSchema.extend(uiTextElementBaseSchema.shape),
};

/**
 * Represents a text element in a panel.
 *
 * @public
 */
export interface UITextElementCreate
  extends UIElementLifecycle,
    Omit<
      zInfer<typeof uiTextElementSchemas.create>,
      "onCreate" | "onDestroy"
    > {}
