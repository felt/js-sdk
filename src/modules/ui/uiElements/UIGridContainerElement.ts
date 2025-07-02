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
  uiPanelElementCreateSchema,
  uiPanelElementSchema,
  type UIPanelElement,
  type UIPanelElementCreate,
  type UIPanelElementCreateClonable,
} from "./uiPanelElementSchemas";

const itemsSchema = z.lazy(() =>
  z.array(uiPanelElementSchema.refine((data) => data.type !== "Grid")),
) as z.ZodType<Array<Exclude<UIPanelElement, { type: "Grid" }>>>;

const itemsCreateSchema = z.lazy(() =>
  z.array(
    uiPanelElementCreateSchema.params.refine((data) => data.type !== "Grid"),
  ),
) as z.ZodType<Array<Exclude<UIPanelElementCreate, { type: "Grid" }>>>;

type ItemCreateClonableType = Exclude<
  UIPanelElementCreateClonable,
  { type: "Grid" }
>;
const itemsCreateClonableSchema = z.lazy(() =>
  z.array(
    uiPanelElementCreateSchema.clonable.refine((data) => data.type !== "Grid"),
  ),
) as z.ZodType<Array<ItemCreateClonableType>>;

export const uiGridContainerElementSchema = uiElementBaseSchema.extend({
  type: z.literal("Grid"),

  grid: z.string().optional(),

  verticalAlignment: z.enum(["top", "center", "bottom"]).optional(),
  horizontalDistribution: z
    .enum([
      "start",
      "center",
      "end",
      "space-between",
      "space-around",
      "space-evenly",
    ])
    .optional(),

  items: itemsSchema,
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
 * You can understand {@link UIPanel} `body` and `footer` properties
 * as grid containers using default vertical stack layout.
 *
 * ### Horizontal stack
 *
 * As part of CSS Grid Layout capabilities it is possible to create a horizontal stack.
 *
 * #### Alignment & Distribution
 * 
 * On horizontal stacks, it is possible to align and distribute the items.
 * 
 * `verticalAlignment` is used to align the items vertically. By default, items are aligned to the top of the container.
 * It follows the same values as CSS's `align-items` property. See [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) for more details.
 * 
 * `horizontalDistribution` is used to justify the items horizontally. By default, items are justified to the start of the container.
 * It follows the same values as CSS's `justify-content` property. See [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) for more details.
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
 */
export interface UIGridContainerElement extends UIElementBase {
  type: "Grid";

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
  grid?: string;

  /**
   * The alignment of the items in the grid.
   * Only takes effect on horizontal stacks.
   *
   * @defaultValue `"top"`
   */
  verticalAlignment?: "top" | "center" | "bottom";

  /**
   * The distribution of the items in the grid.
   * Only takes effect on horizontal stacks.
   *
   * @defaultValue `"start"`
   */
  horizontalDistribution?:
    | "start"
    | "center"
    | "end"
    | "space-between"
    | "space-around"
    | "space-evenly";

  /**
   * The items to add to the grid container.
   */
  items: Array<Exclude<UIPanelElement, { type: "Grid" }>>;
}

const uiGridContainerElementCreateSchm = uiGridContainerElementSchema
  .extend(uiElementBaseCreateSchema.params.shape)
  .omit({ items: true })
  .extend({ items: itemsCreateSchema });

const uiGridContainerElementCreateClonableSchema =
  uiGridContainerElementCreateSchm
    .extend(uiElementBaseCreateSchema.clonable.shape)
    .extend({ items: itemsCreateClonableSchema });

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
  items: Array<Exclude<UIPanelElementCreate, { type: "Grid" }>>;
}

export type UIGridContainerElementCreateClonable = Omit<
  MakeClonableSchema<UIGridContainerElementCreate>,
  "items"
> & {
  items: Array<ItemCreateClonableType>;
};

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
