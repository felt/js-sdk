import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import type { UiController } from "../controller";
import {
  uiElementBaseCreateSchema,
  uiElementBaseSchema,
  type UIElementLifecycle,
} from "./base";

const uiFeatureActionBaseSchema = z.object({
  type: z.literal("FeatureContextualAction"),

  /**
   * The label of the contextual action.
   */
  label: z.string(),

  /**
   * The function to call when the contextual action is triggered.
   */
  onTrigger: z
    .function()
    .args(z.object({ featureId: z.string(), layerId: z.string() }))
    .returns(z.void()),
});

export const uiFeatureActionSchema = {
  read: uiElementBaseSchema
    .extend(uiFeatureActionBaseSchema.shape)
    .extend({
      onTrigger: z
        .function()
        .args(z.object({ featureId: z.string(), layerId: z.string() }))
        .returns(z.void()),
    }),
  create: uiElementBaseCreateSchema.params
    .extend(uiFeatureActionBaseSchema.shape)
    .extend({ type: z.undefined() }) // using partial() causes JSDoc to not appear
    .extend({
      onTrigger: z
        .function()
        .args(z.object({ featureId: z.string(), layerId: z.string() }))
        .returns(z.void()),
    }),
  clonable: uiElementBaseCreateSchema.clonable
    .extend(uiFeatureActionBaseSchema.shape)
    .extend({ type: z.undefined() })
    .extend({ onTrigger: z.string() }),
};

/**
 * Represents a feature contextual action for creation.
 * It can be added to the map by using the {@link UiController.createFeatureContextualAction} method.
 * @public
 */
export interface UIFeatureActionCreate
  extends UIElementLifecycle,
    Omit<
      zInfer<typeof uiFeatureActionSchema.create>,
      "onCreate" | "onDestroy" | "id"
    > {
  /**
   * The function to call when the contextual action is triggered.
   *
   * @param args - The arguments passed to the function.
   * @param args.featureId - The id of the feature.
   * @param args.layerId - The id of the layer.
   */
  onTrigger: (args: { featureId: string; layerId: string }) => void;
}

/**
 * Represents a feature contextual action after creation (with generated id).
 * @public
 */
export interface UIFeatureAction
  extends UIFeatureActionCreate {
  /**
   * The unique identifier of the contextual action.
   */
  id: string;
}
