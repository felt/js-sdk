import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import {
  uiElementBaseCreateSchema,
  uiElementBaseSchema,
  type UIElementBase,
  type UIElementBaseCreateParams,
} from "./base";

export const uiFlexibleSpaceElementSchema = uiElementBaseSchema.extend({
  type: z.literal("FlexibleSpace"),
});

/**
 * Represents a flexible space element in a button group.
 * Useful to customize the spacing between button group items.
 *
 * @example
 * Buttons with a flexible space between makes them more visually separated.
 * ```typescript
 * {
 *   type: "ButtonGroup",
 *   items: [
 *     { type: "Button", label: "Button 1", onClick: () => {} },
 *     { type: "FlexibleSpace" },
 *     { type: "Button", label: "Button 2", onClick: () => {} },
 *   ],
 * }
 * ```
 */
export interface UIFlexibleSpaceElement
  extends UIElementBase,
    Omit<
      zInfer<typeof uiFlexibleSpaceElementSchema>,
      "onCreate" | "onDestroy"
    > {}

const uiFlexibleSpaceElementCreateSchm = uiFlexibleSpaceElementSchema.partial({
  id: true,
});

export const uiFlexibleSpaceElementCreateSchema = {
  params: uiFlexibleSpaceElementCreateSchm,
  clonable: uiFlexibleSpaceElementCreateSchm.extend(
    uiElementBaseCreateSchema.clonable.shape,
  ),
};

/**
 * The parameters for creating a flexible space element.
 *
 * @remarks
 * `id` is optional but recommended if you want to be able to perform updates.
 */
export interface UIFlexibleSpaceElementCreate
  extends Omit<UIFlexibleSpaceElement, "id">,
    UIElementBaseCreateParams {}

const uiFlexibleSpaceElementUpdateSchm =
  uiFlexibleSpaceElementCreateSchema.params
    .partial()
    .required({ id: true, type: true });

export const uiFlexibleSpaceElementUpdateSchema = {
  params: uiFlexibleSpaceElementUpdateSchm,
  clonable: uiFlexibleSpaceElementUpdateSchm.extend(
    uiElementBaseCreateSchema.clonable.required({ id: true }).shape,
  ),
};

/**
 * The parameters for updating a flexible space element.
 *
 * See {@link UIFlexibleSpaceElement} for more details.
 *
 * @remarks
 * `id` and `type` are required to identify the element to update.
 */
export interface UIFlexibleSpaceElementUpdate
  extends Omit<Partial<UIFlexibleSpaceElementCreate>, "type" | "id">,
    Pick<UIFlexibleSpaceElement, "type" | "id"> {}
