import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import type { UiController } from "../controller";
import {
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

export const uiActionTriggerSchema = {
  read: uiElementBaseSchema.extend(uiActionTriggerBaseSchema.shape).extend({
    onTrigger: z
      .function()
      .args(z.object({ id: z.string() }))
      .returns(z.void()),
  }),
  create: uiElementBaseCreateSchema.params
    .extend(uiActionTriggerBaseSchema.shape)
    .extend({ type: z.undefined() }) // using partial() causes JSDoc to not appear
    .extend({
      onTrigger: z
        .function()
        .args(z.object({ id: z.string() }))
        .returns(z.void()),
    }),
  clonable: uiElementBaseCreateSchema.clonable
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
      zInfer<typeof uiActionTriggerSchema.create>,
      "onCreate" | "onDestroy"
    > {
  /**
   * The function to call when the action trigger is triggered.
   *
   * @param args - The arguments passed to the function.
   * @param args.id - The id of the action trigger.
   */
  onTrigger: (args: { id: string }) => void;
}
