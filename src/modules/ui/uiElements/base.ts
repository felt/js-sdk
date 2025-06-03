import { z } from "zod";
import type { zInfer } from "~/lib/utils";

const uiElementLifecycleSchema = z.object({
  /**
   * A function to call when the element is created.
   *
   * @param args - This function doesn't receive any parameters
   */
  onCreate: z.function().args().returns(z.void()).optional(),

  /**
   * A function to call when the element is destroyed.
   *
   * @param args - This function doesn't receive any parameters
   */
  onDestroy: z.function().args().returns(z.void()).optional(),
});

export interface UIElementLifecycle
  extends zInfer<typeof uiElementLifecycleSchema> {
  /**
   * A function to call when the element is created.
   */
  onCreate?: () => void;

  /**
   * A function to call when the element is destroyed.
   */
  onDestroy?: () => void;
}

const uiElementLifecycleClonableSchema = z.object({
  onCreate: z.string().optional(),
  onDestroy: z.string().optional(),
});

export const uiElementBaseSchema = uiElementLifecycleSchema.extend({
  id: z.string(),
});

export const uiElementBaseInputSchema = uiElementLifecycleSchema.extend({
  id: z.string().optional(),
});

export const uiElementBaseClonableSchema =
  uiElementLifecycleClonableSchema.extend({
    id: z.string().optional(),
  });

const uiLabelReadyElementBaseSchema = z.object({
  /**
   * Label text to display above the element and used for screen readers.
   */
  label: z.string().optional(),
});

export const uiLabelReadyElementSchemas = {
  public: uiElementBaseSchema.extend(uiLabelReadyElementBaseSchema.shape),
  input: uiElementBaseInputSchema.extend(uiLabelReadyElementBaseSchema.shape),
  clonable: uiElementBaseClonableSchema.extend(
    uiLabelReadyElementBaseSchema.shape,
  ),
};
