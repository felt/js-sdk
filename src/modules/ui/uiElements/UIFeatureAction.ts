import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import type { LayerFeature } from "~/modules/layers/features/types";
import type { UiController } from "../controller";
import { uiElementBaseCreateSchema, uiElementBaseSchema } from "./base";

const uiFeatureActionBaseSchema = z.object({
  type: z.literal("FeatureAction"),

  /**
   * The label of the feature action.
   */
  label: z.string(),

  /**
   * The function to call when the feature action is triggered.
   */
  onTrigger: z
    .function()
    .args(z.object({ feature: z.custom<LayerFeature>() }))
    .returns(z.void()),

  /**
   * The layers to add the action to. Optional. Defaults to all layers.
   */
  layerIds: z.array(z.string()).optional(),

  /**
   * The geometry type of the features to add the action to. Optional. Defaults to all geometry types.
   */
  geometryTypes: z
    .array(z.enum(["Polygon", "Line", "Point", "Raster"]))
    .optional(),
});

export const uiFeatureActionSchema = {
  read: uiElementBaseSchema
    .extend(uiFeatureActionBaseSchema.shape)
    .extend({ id: z.string() }),
  create: uiElementBaseCreateSchema.params
    .extend(uiFeatureActionBaseSchema.shape)
    .extend({ type: z.undefined() }),
  clonable: uiElementBaseCreateSchema.clonable
    .extend(uiFeatureActionBaseSchema.shape)
    .extend({ type: z.undefined() }),
};

/**
 * Represents a feature action for creation.
 * It can be added to the map by using the {@link UiController.createFeatureAction} method.
 */
export type UIFeatureActionCreate = zInfer<
  typeof uiFeatureActionSchema.clonable
>;

/**
 * Represents a feature action after creation (with generated id).
 * @public
 */
export type UIFeatureAction = UIFeatureActionCreate & {
  id: string;
};

/**
 * Represents a feature action after creation (with generated id).
 * @public
 */
export type UIFeatureActionUpdate = Partial<UIFeatureActionCreate> & {
  id: string;
};
