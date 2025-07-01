import { z } from "zod";
import {
  makeUpdateSchema,
  uiElementBaseCreateSchema,
  uiElementBaseSchema,
  type MakeClonableSchema,
  type MakeUpdateSchema,
  type UIElementBase,
  type UIElementBaseCreateParams,
} from "./base";
import {
  uiButtonElementCreateSchema,
  uiButtonElementSchema,
  type UIButtonElement,
  type UIButtonElementCreate,
  type UIButtonElementCreateClonable,
} from "./UIButtonElement";

export const uiButtonRowElementSchema = uiElementBaseSchema.extend({
  type: z.literal("ButtonRow"),

  align: z.enum(["start", "end"]).optional(),

  items: z.array(uiButtonElementSchema),
});

/**
 * Represents a row of buttons.
 *
 * It is useful to group buttons together and align them.
 *
 * Unlike on {@link UIGridContainerElement}, buttons do not expand to fill the container.
 * Instead, they use the space they need and are wrapped to the next line when they overflow.
 *
 * ### Alignment
 *
 * It is possible to align the button row to the start or end of the container.
 *
 * #### Start alignment
 *
 * ```typescript
 * {
 *   type: "ButtonRow",
 *   align: "start", // default value
 *   items: [
 *     { type: "Button", label: "Button 1" },
 *     { type: "Button", label: "Button 2" },
 *   ],
 * }
 * ```
 *
 * #### End alignment
 *
 *
 * ```typescript
 * {
 *   type: "ButtonRow",
 *   align: "end",
 *   items: [
 *     { type: "Button", label: "Button 1" },
 *     { type: "Button", label: "Button 2" },
 *   ],
 * }
 * ```
 *
 * #### Overflow
 *
 * When buttons overflow the container, they are wrapped to the next line.
 *
 * ```typescript
 * {
 *   type: "ButtonRow",
 *   items: [
 *     { type: "Button", label: "Button with a very long text" },
 *     { type: "Button", label: "Button 2" },
 *     { type: "Button", label: "Button 3" },
 *   ],
 * }
 * ```
 *
 * #### With Grid container
 *
 * ```typescript
 * {
 *   type: "Grid",
 *   rowItemsJustify: "space-between",
 *   items: [
 *     {
 *       type: "Text",
 *       context: "Do you want to save the changes?",
 *     },
 *     {
 *       type: "ButtonRow",
 *       items: [
 *         { type: "Button", variant: "transparent", label: "Cancel" },
 *         { type: "Button", variant: "filled", tint: "primary", label: "Save" },
 *       ],
 *     },
 *   ],
 * }
 *
 */
export interface UIButtonRowElement extends UIElementBase {
  type: "ButtonRow";

  /**
   * The alignment of the button row.
   *
   * @defaultValue `"start"`
   */
  align?: "start" | "end";

  /**
   * The items to add to the button row.
   */
  items: Array<UIButtonElement>;
}

const uiButtonRowElementCreateSchm = uiButtonRowElementSchema
  .extend(uiElementBaseCreateSchema.params.shape)
  .omit({ items: true })
  .extend({ items: z.array(uiButtonElementCreateSchema.params) });

const uiButtonRowElementCreateClonableSchema = uiButtonRowElementCreateSchm
  .extend(uiElementBaseCreateSchema.clonable.shape)
  .extend({ items: z.array(uiButtonElementCreateSchema.clonable) });

export const uiButtonRowElementCreateSchema = {
  params: uiButtonRowElementCreateSchm,
  clonable: uiButtonRowElementCreateClonableSchema,
};

/**
 * The parameters for creating a button row element.
 *
 * See {@link UIButtonRowElement} for more details.
 */
export interface UIButtonRowElementCreate
  extends Omit<UIButtonRowElement, "id" | "items">,
    UIElementBaseCreateParams {
  /**
   * The items to add to the button row.
   */
  items: Array<UIButtonElementCreate>;
}

export type UIButtonRowElementCreateClonable = Omit<
  MakeClonableSchema<UIButtonRowElementCreate>,
  "items"
> & { items: Array<UIButtonElementCreateClonable> };

export const uiButtonRowElementUpdateSchema = {
  params: makeUpdateSchema(uiButtonRowElementCreateSchema.params),
  clonable: makeUpdateSchema(uiButtonRowElementCreateSchema.clonable),
};

/**
 * The parameters for updating a button row element.
 *
 * See {@link UIButtonRowElement} for more details.
 */
export interface UIButtonRowElementUpdate
  extends MakeUpdateSchema<UIButtonRowElement, UIButtonRowElementCreate> {}
