import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import {
  uiElementBaseClonableSchema,
  uiElementBaseInputSchema,
  uiElementBaseSchema,
  type UIElementLifecycle,
} from "./base";

export const uiDividerElementSchemas = {
  public: uiElementBaseSchema.extend({ type: z.literal("Divider") }),
  input: uiElementBaseInputSchema.extend({ type: z.literal("Divider") }),
  clonable: uiElementBaseClonableSchema.extend({ type: z.literal("Divider") }),
};

/**
 * Represents a divider element in a panel.
 *
 * @remarks
 * This element is used to separate other elements in a panel.
 *
 * @public
 */
export interface UIDividerElementInput
  extends UIElementLifecycle,
    Omit<
      zInfer<typeof uiDividerElementSchemas.input>,
      "onCreate" | "onDestroy"
    > {}
