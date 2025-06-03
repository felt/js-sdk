import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import {
  uiElementBaseClonableSchema,
  uiElementBaseInputSchema,
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
  public: uiElementBaseSchema.extend(uiTextElementBaseSchema.shape),
  input: uiElementBaseInputSchema.extend(uiTextElementBaseSchema.shape),
  clonable: uiElementBaseClonableSchema.extend(uiTextElementBaseSchema.shape),
};

/**
 * Represents a text element in a panel.
 *
 * @public
 */
export interface UITextElementInput
  extends UIElementLifecycle,
    Omit<zInfer<typeof uiTextElementSchemas.input>, "onCreate" | "onDestroy"> {}
