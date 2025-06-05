import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import type { UiController } from "../controller";
import {
  uiElementBaseClonableSchema,
  uiElementBaseCreateSchema,
  uiElementBaseSchema,
  type UIElementLifecycle,
} from "./base";

const uiActionTriggerBaseSchema = z.object({
  type: z.literal("ActionTrigger"),

  /**
   * The label of the action trigger.
   */
  label: z.string(),

  /**
   * Whether the action trigger is disabled or not.
   */
  disabled: z.boolean().optional(),
});

export const uiActionTriggerSchemas = {
  read: uiElementBaseSchema
    .extend(uiActionTriggerBaseSchema.shape)
    .extend({ onTrigger: z.function().returns(z.void()) }),
  create: uiElementBaseCreateSchema
    .extend(uiActionTriggerBaseSchema.shape)
    .extend({ type: z.undefined() }) // using partial() causes JSDoc to not appear
    .extend({ onTrigger: z.function().returns(z.void()) }),
  clonable: uiElementBaseClonableSchema
    .extend(uiActionTriggerBaseSchema.shape)
    .extend({ type: z.undefined() })
    .extend({ onTrigger: z.string() }),
};

/**
 * Represents an action trigger.
 * It can be added to the map by using the {@link UiController.createActionTrigger} method.
 */
export interface UIActionTriggerCreate
  extends UIElementLifecycle,
    Omit<
      zInfer<typeof uiActionTriggerSchemas.create>,
      "onCreate" | "onDestroy"
    > {
  /**
   * The function to call when the action trigger is triggered.
   */
  onTrigger: () => void;
}
