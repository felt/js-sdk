import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import {
  uiElementBaseCreateSchema,
  uiElementBaseSchema,
  type UIElementBase,
  type UIElementBaseCreateParams,
} from "./base";

export const uiTextElementSchema = uiElementBaseSchema.extend({
  type: z.literal("Text"),

  /**
   * The text to display in the element.
   */
  content: z.string(),
});

/**
 * Represents a text element in a panel.
 * Markdown is supported.
 *
 * @example Simple
 * ```typescript
 * {
 *   type: "Text",
 *   content: "Hello, world!",
 * }
 * ```
 *
 * @example With links
 * ```typescript
 * {
 *   type: "Text",
 *   content: "Fill the form https://www.google.com.",
 * }
 * ```
 *
 * @example Markdown
 * ```typescript
 * {
 *   type: "Text",
 *   content: "**Hello**, _world_!",
 * }
 * ```
 *
 * @example Markdown
 * Complex markdown syntax is supported like tables, images, quotes, etc.
 * ```typescript
 * {
 *   type: "Text",
 *   content: `
 *
 * ## Heading
 *
 * This is a paragraph.
 *
 * ### Subheading
 *
 * This is a paragraph.
 *
 * | Name | Age |
 * | ---- | --- |
 * | John | 25 |
 * | Jane | 30 |
 *
 * ![Image](https://via.placeholder.com/150)
 *
 * > This is a quote.
 *
 * [Link](https://www.google.com)
 * `,
 * }
 * ```
 */
export interface UITextElement
  extends UIElementBase,
    Omit<zInfer<typeof uiTextElementSchema>, "onCreate" | "onDestroy"> {}

const uiTextElementCreateSchm = uiTextElementSchema.extend(
  uiElementBaseCreateSchema.params.shape,
);

export const uiTextElementCreateSchema = {
  params: uiTextElementCreateSchm,
  clonable: uiTextElementCreateSchm.extend(
    uiElementBaseCreateSchema.clonable.shape,
  ),
};

/**
 * The parameters for creating a text element.
 *
 * See {@link UITextElement} for more details.
 *
 * @remarks
 * `id` is optional but recommended if you want to be able to perform updates.
 */
export interface UITextElementCreate
  extends Omit<UITextElement, "id">,
    UIElementBaseCreateParams {}

export interface UITextElementCreateClonableParams
  extends zInfer<typeof uiTextElementCreateSchema.clonable> {}

const uiTextElementUpdateSchm = uiTextElementCreateSchema.params
  .partial()
  .required({ id: true, type: true });

export const uiTextElementUpdateSchema = {
  params: uiTextElementUpdateSchm,
  clonable: uiTextElementUpdateSchm.extend(
    uiElementBaseCreateSchema.clonable.required({ id: true }).shape,
  ),
};

/**
 * The parameters for updating a text element.
 *
 * See {@link UITextElement} for more details.
 *
 * @remarks
 * `id` and `type` are required to identify the element to update.
 */
export interface UITextElementUpdate
  extends Omit<Partial<UITextElementCreate>, "type" | "id">,
    Pick<UITextElement, "type" | "id"> {}
