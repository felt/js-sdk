import { z } from "zod";
import {
  makeUpdateSchema,
  uiLabelReadyElementCreateSchema,
  uiLabelReadyElementSchema,
  type MakeClonableSchema,
  type MakeUpdateSchema,
  type UILabelReadyElement,
  type UILabelReadyElementCreateParams,
} from "./base";
import {
  uiButtonElementCreateSchema,
  uiButtonElementSchema,
  type UIButtonElement,
  type UIButtonElementCreate,
  type UIButtonElementCreateClonable,
} from "./UIButtonElement";

export const uiButtonRowElementSchema = uiLabelReadyElementSchema.extend({
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
 * ### Label
 *
 * A label can be added to the button row using the `label` property.
 *
 * <figure>
 * <img src="./img/button-row-label.png" alt="Label" />
 * <figcaption>Label</figcaption>
 * </figure>
 *
 * ```typescript
 * {
 *   type: "ButtonRow",
 *   label: "Zoom control",
 *   items: [
 *     { type: "Button", label: "Increase", onClick: () => {} },
 *     { type: "Button", label: "Decrease", onClick: () => {} },
 *   ],
 * }
 * ```
 *
 * ### Alignment
 *
 * It is possible to align the button row to the start or end of the container using the `align` property.
 *
 * #### Start alignment
 *
 * <figure>
 * <img src="./img/button-row-start-alignment.png" alt="Start alignment" />
 * <figcaption>Start alignment</figcaption>
 * </figure>
 *
 * ```typescript
 * {
 *   type: "ButtonRow",
 *   align: "start", // default value
 *   items: [
 *     { type: "Button", label: "Button 1", onClick: () => {} },
 *     { type: "Button", label: "Button 2", onClick: () => {} },
 *   ],
 * }
 * ```
 *
 * #### End alignment
 *
 * <figure>
 * <img src="./img/button-row-end-alignment.png" alt="End alignment" />
 * <figcaption>End alignment</figcaption>
 * </figure>
 *
 * ```typescript
 * {
 *   type: "ButtonRow",
 *   align: "end",
 *   items: [
 *     { type: "Button", label: "Button 1", onClick: () => {} },
 *     { type: "Button", label: "Button 2", onClick: () => {} },
 *   ],
 * }
 * ```
 *
 * ### Overflow
 *
 * When buttons overflow the container, they are wrapped to the next line.
 *
 * <figure>
 * <img src="./img/button-row-overflow.png" alt="Overflow" />
 * <figcaption>Overflow</figcaption>
 * </figure>
 *
 * ```typescript
 * {
 *   type: "ButtonRow",
 *   items: [
 *     { type: "Button", label: "Button with a very long text", onClick: () => {} },
 *     { type: "Button", label: "Button 2", onClick: () => {} },
 *     { type: "Button", label: "Button 3", onClick: () => {} },
 *   ],
 * }
 * ```
 *
 * ### With Grid container
 *
 * {@link UIGridContainerElement}, as a generic container, can render {@link UIButtonRowElement} as well.
 *
 * In this example, the combination of {@link UIGridContainerElement} and {@link UIButtonRowElement} is used to layout a footer
 * where the buttons are aligned to the end of the container and the text is at the start.
 *
 * <figure>
 * <img src="./img/button-row-with-grid-container.png" alt="With Grid container" />
 * <figcaption>With Grid container</figcaption>
 * </figure>
 *
 * ```typescript
 * {
 *   type: "Grid",
 *   grid: "auto-flow / 1fr auto",
 *   rowItemsJustify: "space-between",
 *   rowItemsAlign: "center",
 *   items: [
 *     { type: "Text", content: "Continue?" },
 *     {
 *       type: "ButtonRow",
 *       align: "end",
 *       items: [
 *         { type: "Button", variant: "transparent", label: "Cancel", onClick: () => {} },
 *         { type: "Button", variant: "filled", tint: "primary", label: "Continue", onClick: () => {} },
 *       ]
 *     },
 *   ],
 * }
 * ```
 */
export interface UIButtonRowElement extends UILabelReadyElement {
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
  .extend(uiLabelReadyElementCreateSchema.params.shape)
  .omit({ items: true })
  .extend({ items: z.array(uiButtonElementCreateSchema.params) });

const uiButtonRowElementCreateClonableSchema = uiButtonRowElementCreateSchm
  .extend(uiLabelReadyElementCreateSchema.clonable.shape)
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
    UILabelReadyElementCreateParams {
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
