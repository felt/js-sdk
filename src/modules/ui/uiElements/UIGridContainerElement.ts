import { z } from "zod";
import type { zInfer } from "~/lib/utils";
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
  uiPanelElementCreateSchema,
  uiPanelElementSchema,
  type UIPanelElement,
  type UIPanelElementCreate,
  type UIPanelElementCreateClonable,
} from "./uiPanelElementSchemas";

export const uiGridContainerElementSchema = uiElementBaseSchema.extend({
  type: z.literal("Grid"),

  /**
   * The grid to use for the container.
   * It is the exact same as CSS's shorthand property `grid`.
   *
   * @example
   * #### horizontal stack
   *
   * two columns, the first column is 50px wide, the second column takes the remaining space
   * ```typescript
   * {
   *   type: "Grid",
   *   grid: "auto-flow / 50px 1fr",
   *   items: [...]
   * }
   * ```
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid} for more details.
   *
   */
  grid: z.string().optional(),

  items: z.array(uiPanelElementSchema),
});

/**
 * Represents a container with a grid layout in a panel.
 *
 * By default, the grid items are vertically stacked,
 * but you can change the grid to use a different layout by
 * setting the `grid` property to a different value.
 *
 * `grid` property is the exact same as CSS's shorthand property `grid`.
 * [See the MDN documentation for more details](https://developer.mozilla.org/en-US/docs/Web/CSS/grid).
 *
 * You can understand {@link UIPanelElement} `body` and `footer` properties
 * as grid containers using default vertical stack layout.
 *
 * ### Horizontal stack
 *
 * As part of CSS Grid Layout capabilities it is possible to create a horizontal stack.
 *
 * #### Equal width columns
 *
 * <figure>
 * <img src="./img/grid-horizontal-stack.png" alt="Horizontal stack" />
 * <figcaption>Two columns, each sharing 50% of the container width</figcaption>
 * </figure>
 *
 * ```typescript
 * {
 *   type: "Grid",
 *   grid: "auto-flow / 1fr 1fr",
 *   items: [
 *     { type: "TextInput", label: "Name", value: "" },
 *     { type: "TextInput", label: "Last name", value: "" },
 *   ],
 * }
 * ```
 *
 * ### FlexibleSpace element
 *
 * `FlexibleSpace` element is a handy solution to allow more control over grid layout.
 * 
 * If `grid` is not set, `FlexibleSpace` will add some space between the items.
 * By using `grid` property it is possible to control FlexibleSpace's size.

 * #### to right align the input
 *
 * <figure>
 * <img src="./img/grid-flexible-space.png" alt="Flexible space to right align the input" />
 * <figcaption>Flexible space takes 50% of the container width</figcaption>
 * </figure>
 *
 * ```typescript
 * {
 *   type: "Grid",
 *   grid: "auto-flow / 1fr 1fr",
 *   items: [
 *     { type: "FlexibleSpace" },
 *     { type: "TextInput", label: "An input" , value: "" },
 *   ],
 * }
 * ```
 * 
 * #### two columns of buttons with space between them
 * 
 * <figure>
 * <img src="./img/grid-two-groups-of-buttons.png" alt="Two groups of buttons" />
 * <figcaption>Two groups of buttons</figcaption>
 * </figure>
 * 
 * 
 * ```typescript
 * {
 *   type: "Grid",
 *   grid: "auto-flow / auto auto 1fr auto auto",
 *   items: [
 *     { type: "Button", label: "A" , onClick: () => {} },
 *     { type: "Button", label: "B" , onClick: () => {} },
 *     { type: "FlexibleSpace" },
 *     { type: "Button", label: "C" , onClick: () => {} },
 *     { type: "Button", label: "D" , onClick: () => {} },
 *   ],
 * }
 * ```
 *
 * ### Nested grid containers
 *
 * Grid containers can be nested to create more complex layouts.
 *
 * <figure>
 * <img src="./img/grid-nested.png" alt="Nested grid containers" />
 * <figcaption>Nested grid containers</figcaption>
 * </figure>
 *
 * ```typescript
 * {
 *   type: "Grid",
 *   grid: "auto-flow / 1fr 1fr",
 *   items: [
 *     { type: "Button", label: "Top left", onClick: () => {} },
 *     {
 *       type: "Grid",
 *       items: [
 *         { type: "Button", label: "Top left", onClick: () => {} },
 *         { type: "Button", label: "Bottom right", onClick: () => {} },
 *       ],
 *     },
 *   ],
 * }
 * ```
 */
export interface UIGridContainerElement
  extends UIElementBase,
    Omit<
      zInfer<typeof uiGridContainerElementSchema>,
      "onCreate" | "onDestroy" | "items"
    > {
  /**
   * The items to add to the grid container.
   * Multiple grid containers can be nested to create more complex layouts.
   */
  items: Array<UIPanelElement>;
}

const itemsCreateSchema: z.ZodType<Array<UIPanelElementCreate>> = z.lazy(() =>
  z.array(uiPanelElementCreateSchema.params),
);

const uiGridContainerElementCreateSchm = uiGridContainerElementSchema
  .extend(uiElementBaseCreateSchema.params.shape)
  .omit({ items: true })
  .extend({ items: itemsCreateSchema });

const itemsClonableSchema: z.ZodType<Array<UIPanelElementCreateClonable>> =
  z.lazy(() => z.array(uiPanelElementCreateSchema.clonable));

const uiGridContainerElementCreateClonableSchema =
  uiGridContainerElementCreateSchm
    .extend(uiElementBaseCreateSchema.clonable.shape)
    .extend({ items: itemsClonableSchema });

export const uiGridContainerElementCreateSchema = {
  params: uiGridContainerElementCreateSchm,
  clonable: uiGridContainerElementCreateClonableSchema,
};

/**
 * The parameters for creating a grid container element.
 *
 * See {@link UIGridContainerElement} for more details.
 */
export interface UIGridContainerElementCreate
  extends Omit<UIGridContainerElement, "id" | "items">,
    UIElementBaseCreateParams {
  /**
   * The items to add to the grid container.
   */
  items: Array<UIPanelElementCreate>;
}

export type UIGridContainerElementCreateClonable = Omit<
  MakeClonableSchema<UIGridContainerElementCreate>,
  "items"
> & { items: Array<UIPanelElementCreateClonable> };

export const uiGridContainerElementUpdateSchema = {
  params: makeUpdateSchema(uiGridContainerElementCreateSchema.params),
  clonable: makeUpdateSchema(uiGridContainerElementCreateSchema.clonable),
};

/**
 * The parameters for updating a grid container element.
 *
 * See {@link UIGridContainerElement} for more details.
 *
 * @remarks
 * `id` and `type` are required to identify the element to update.
 */
export interface UIGridContainerElementUpdate
  extends MakeUpdateSchema<
    UIGridContainerElement,
    UIGridContainerElementCreate
  > {}
