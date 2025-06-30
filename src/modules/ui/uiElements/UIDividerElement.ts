import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import {
  type MakeClonableSchema,
  type MakeUpdateSchema,
  makeUpdateSchema,
  type UIElementBase,
  type UIElementBaseCreateParams,
  uiElementBaseCreateSchema,
  uiElementBaseSchema,
} from "./base";

export const uiDividerElementSchema = uiElementBaseSchema.extend({
  type: z.literal("Divider"),
});

/**
 * Represents a divider element in a panel.
 * This element is used to separate other elements in a panel.
 * It is rendered as a gray horizontal line of 1px height.
 *
 * @example
 * Divider element is useful to separate sections of a panel.
 * ```typescript
 * {
 *   body: [
 *     { type: "Text", content: "Contact" },
 *     { type: "TextInput", placeholder: "Enter your name", ... },
 *     { type: "TextInput", placeholder: "Enter your email", ... },
 *     { type: "Divider" },
 *     { type: "Text", content: "Address" },
 *     { type: "TextInput", placeholder: "Enter your address", ... },
 *   ],
 * }
 * ```
 */
export interface UIDividerElement
  extends UIElementBase,
    Omit<zInfer<typeof uiDividerElementSchema>, "onCreate" | "onDestroy"> {}

const uiDividerElementCreateSchm = uiDividerElementSchema.partial({ id: true });

export const uiDividerElementCreateSchema = {
  params: uiDividerElementCreateSchm,
  clonable: uiDividerElementCreateSchm.extend(
    uiElementBaseCreateSchema.clonable.shape,
  ),
};

/**
 * The parameters for creating a divider element.
 *
 * See {@link UIDividerElement} for more details.
 *
 * @remarks
 * `id` is optional but recommended if you want to be able to delete the element.
 */
export interface UIDividerElementCreate
  extends Omit<UIDividerElement, "id">,
    UIElementBaseCreateParams {}

export type UIDividerElementCreateClonable =
  MakeClonableSchema<UIDividerElementCreate>;

export const uiDividerElementUpdateSchema = {
  params: makeUpdateSchema(uiDividerElementCreateSchema.params),
  clonable: makeUpdateSchema(uiDividerElementCreateSchema.clonable),
};

/**
 * The parameters for updating a divider element.
 *
 * See {@link UIDividerElement} for more details.
 *
 * @remarks
 * `id` and `type` are required to identify the element to update.
 */
export interface UIDividerElementUpdate
  extends MakeUpdateSchema<UIDividerElement, UIDividerElementCreate> {}
