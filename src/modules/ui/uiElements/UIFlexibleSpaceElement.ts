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

export const uiFlexibleSpaceElementSchema = uiElementBaseSchema.extend({
  type: z.literal("FlexibleSpace"),
});

/**
 * Represents a flexible space element in a container.
 *
 * When rendered...
 *
 * - inside {@link UIGridContainerElement}, it will add extra gap between items. It can be controlled by `grid` property.
 * - inside {@link UIPanelElement} `body` or `footer`, since they work as vertically stacks, it will add extra gap between items.
 *
 * @example
 * Paragraphs with a flexible space between makes them more visually separated.
 * ```typescript
 * {
 *   type: "Panel",
 *   body: [
 *     { type: "Paragraph", text: "Paragraph 1" },
 *     { type: "FlexibleSpace" },
 *     { type: "Paragraph", text: "Paragraph 2" },
 *   ],
 * }
 * ```
 *
 * @example
 * Horizontal stack of buttons with a flexible space between makes them more visually separated.
 * ```typescript
 * {
 *   type: "Grid",
 *   grid: "auto-flow / auto 1fr auto",
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

export type UIFlexibleSpaceElementCreateClonable =
  MakeClonableSchema<UIFlexibleSpaceElementCreate>;

export const uiFlexibleSpaceElementUpdateSchema = {
  params: makeUpdateSchema(uiFlexibleSpaceElementCreateSchema.params),
  clonable: makeUpdateSchema(uiFlexibleSpaceElementCreateSchema.clonable),
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
  extends MakeUpdateSchema<
    UIFlexibleSpaceElement,
    UIFlexibleSpaceElementCreate
  > {}
