import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import {
  makeUpdateSchema,
  uiElementBaseCreateSchema,
  uiElementBaseSchema,
  type MakeUpdateSchema,
  type UIElementBase,
  type UIElementBaseCreateParams,
} from "./base";
import {
  uiPanelElementCreateSchema,
  uiPanelElementSchema,
  type UIPanelElement,
  type UIPanelElementCreate,
} from "./uiPanelElementSchemas";

export const uiGridContainerElementSchema = uiElementBaseSchema.extend({
  type: z.literal("grid"),

  /**
   * The grid to use for the container.
   */
  grid: z.string().optional(),

  items: z.array(uiPanelElementSchema),
});

/**
 * Represents a grid container element in a panel.
 * A grid container is a container that displays its children in a grid layout.
 *
 * @example
 * ```typescript
 * {
 *   type: "grid",
 * }
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

const uiGridContainerElementCreateSchm = uiGridContainerElementSchema
  .extend(uiElementBaseCreateSchema.params.shape)
  .omit({ items: true })
  .extend({ items: z.array(uiPanelElementCreateSchema.params) });

export const uiGridContainerElementCreateSchema = {
  params: uiGridContainerElementCreateSchm,
  clonable: uiGridContainerElementCreateSchm
    .extend(uiElementBaseCreateSchema.clonable.shape)
    .extend({ items: z.array(uiPanelElementCreateSchema.clonable) }),
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
