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

export const uiIframeElementSchema = uiElementBaseSchema.extend({
  type: z.literal("Iframe"),

  /**
   * The height of the iframe.
   *
   * If not provided, the height will be automatically calculated following a 16:9 ratio.
   */
  height: z.number().or(z.string()).optional(),

  /**
   * The URL of the iframe.
   */
  url: z.string(),
});

/**
 * Represents an iframe element in a panel.
 *
 * The height of the iframe can be set by using the `height` property
 * either as a number (measured in pixels) or a string (e.g. “100px” or “50%“).
 *
 * By default, the height is calculated following a 16:9 ratio.
 *
 * <figure>
 * <img src="./img/iframe-basic.png" alt="Iframe showing an example website" />
 * <figcaption>
 * Iframe with default height (16:9)
 * </figcaption>
 * </figure>
 *
 * ```typescript
 * { type: "Iframe", url: "https://www.example.com" }
 * ```
 *
 * <figure>
 * <img src="./img/iframe-custom-height.png" alt="Iframe showing an example website with a custom height" />
 * <figcaption>
 * Iframe with custom height
 * </figcaption>
 * </figure>
 *
 * ```typescript
 * { type: "Iframe", url: "https://www.example.com", height: 300 }
 * ```
 */
export interface UIIframeElement
  extends UIElementBase,
    Omit<zInfer<typeof uiIframeElementSchema>, "onCreate" | "onDestroy"> {}

const uiIframeElementCreateSchm = uiIframeElementSchema.extend(
  uiElementBaseCreateSchema.params.shape,
);

export const uiIframeElementCreateSchema = {
  params: uiIframeElementCreateSchm,
  clonable: uiIframeElementCreateSchm.extend(
    uiElementBaseCreateSchema.clonable.shape,
  ),
};

/**
 * The parameters for creating an iframe element.
 *
 * See {@link UIIframeElement} for more details.
 *
 * @remarks
 * `id` is optional but recommended if you want to be able to perform updates.
 */
export interface UIIframeElementCreate
  extends Omit<UIIframeElement, "id">,
    UIElementBaseCreateParams {}

export type UIIframeElementCreateClonable =
  MakeClonableSchema<UIIframeElementCreate>;

export const uiIframeElementUpdateSchema = {
  params: makeUpdateSchema(uiIframeElementCreateSchema.params),
  clonable: makeUpdateSchema(uiIframeElementCreateSchema.clonable),
};

/**
 * The parameters for updating an iframe element.
 *
 * See {@link UIIframeElement} for more details.
 *
 * @remarks
 * `id` and `type` are required to identify the element to update.
 */
export interface UIIframeElementUpdate
  extends MakeUpdateSchema<UIIframeElement, UIIframeElementCreate> {}
