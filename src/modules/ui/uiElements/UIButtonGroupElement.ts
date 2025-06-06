import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import {
  uiElementBaseCreateSchema,
  uiElementBaseSchema,
  type UIElementBase,
  type UIElementBaseCreateParams,
} from "./base";
import {
  uiButtonElementCreateSchema,
  uiButtonElementSchema,
  type UIButtonElement,
  type UIButtonElementCreate,
} from "./UIButtonElement";
import {
  uiFlexibleSpaceElementCreateSchema,
  uiFlexibleSpaceElementSchema,
  type UIFlexibleSpaceElement,
  type UIFlexibleSpaceElementCreate,
} from "./UIFlexibleSpaceElement";
import {
  uiTextElementCreateSchema,
  uiTextElementSchema,
  type UITextElement,
  type UITextElementCreate,
} from "./UITextElement";

export const uiButtonGroupElementSchema = uiElementBaseSchema.extend({
  type: z.literal("ButtonGroup"),

  /**
   * The alignment of the button group.
   *
   * @defaultValue `"end"`
   */
  align: z.enum(["start", "end"]).optional(),

  items: z.array(
    z.union([
      uiButtonElementSchema,
      uiTextElementSchema,
      uiFlexibleSpaceElementSchema,
    ]),
  ),
});

/**
 * Represents a button group element in a panel.
 * A button group is an horizontal container of buttons and text elements.
 *
 * @example
 * Thanks to the FlexibleSpace element, button 1 and text 1 are aligned to the start of the panel,
 * while button 2 is aligned to the end.
 *
 * ```typescript
 * {
 *   type: "ButtonGroup",
 *   items: [
 *     { type: "Button", label: "Button 1", onClick: () => {} },
 *     { type: "Text", content: "Text 1" },
 *     { type: "FlexibleSpace" },
 *     { type: "Button", label: "Button 2", onClick: () => {} },
 *   ],
 * }
 */
export interface UIButtonGroupElement
  extends UIElementBase,
    Omit<zInfer<typeof uiButtonGroupElementSchema>, "onCreate" | "onDestroy"> {
  /**
   * The items to add to the button group.
   */
  items: Array<UIButtonElement | UITextElement | UIFlexibleSpaceElement>;
}

const uiButtonGroupElementCreateSchm = uiButtonGroupElementSchema
  .extend(uiElementBaseCreateSchema.params.shape)
  .omit({ items: true })
  .extend({
    items: z.array(
      z.union([
        uiButtonElementCreateSchema.params,
        uiTextElementCreateSchema.params,
        uiFlexibleSpaceElementCreateSchema.params,
      ]),
    ),
  });

export const uiButtonGroupElementCreateSchema = {
  params: uiButtonGroupElementCreateSchm,
  clonable: uiButtonGroupElementCreateSchm
    .extend(uiElementBaseCreateSchema.clonable.shape)
    .extend({
      items: z.array(
        z.union([
          uiButtonElementCreateSchema.clonable,
          uiTextElementCreateSchema.clonable,
          uiFlexibleSpaceElementCreateSchema.clonable,
        ]),
      ),
    }),
};

/**
 * The parameters for creating a button group element.
 *
 * See {@link UIButtonGroupElement} for more details.
 *
 * @remarks
 * `id` is optional but recommended if you want to be able to perform updates.
 */
export interface UIButtonGroupElementCreate
  extends Omit<UIButtonGroupElement, "id" | "items">,
    UIElementBaseCreateParams {
  /**
   * The items to add to the button group.
   */
  items: Array<
    UIButtonElementCreate | UITextElementCreate | UIFlexibleSpaceElementCreate
  >;
}

const uiButtonGroupElementUpdateSchm = uiButtonGroupElementCreateSchema.params
  .partial()
  .required({ id: true, type: true });

export const uiButtonGroupElementUpdateSchema = {
  params: uiButtonGroupElementUpdateSchm,
  clonable: uiButtonGroupElementUpdateSchm
    .extend(uiElementBaseCreateSchema.clonable.required({ id: true }).shape)
    .extend({
      items: z.array(
        z.union([
          uiButtonElementCreateSchema.clonable,
          uiTextElementCreateSchema.clonable,
          uiFlexibleSpaceElementCreateSchema.clonable,
        ]),
      ),
    }),
};

/**
 * The parameters for updating a button group element.
 *
 * See {@link UIButtonGroupElement} for more details.
 *
 * @remarks
 * `id` and `type` are required to update the button group element.
 */
export interface UIButtonGroupElementUpdate
  extends Omit<Partial<UIButtonGroupElementCreate>, "type" | "id">,
    Pick<UIButtonGroupElement, "type" | "id"> {}

export type UIButtonGroupElementUpdateClonable = zInfer<
  typeof uiButtonGroupElementUpdateSchema.clonable
>;
