import { z } from "zod";
import type { zInfer } from "~/lib/utils";

const uiElementLifecycleSchema = z.object({
  /**
   * A function to call when the element is created.
   *
   * @param args - This function doesn't receive any parameters
   */
  onCreate: z
    .function()
    .args(z.object({ id: z.string() }))
    .returns(z.void())
    .optional(),

  /**
   * A function to call when the element is destroyed.
   *
   * @param args - This function doesn't receive any parameters
   */
  onDestroy: z
    .function()
    .args(z.object({ id: z.string() }))
    .returns(z.void())
    .optional(),
});

export interface UIElementLifecycle
  extends zInfer<typeof uiElementLifecycleSchema> {
  /**
   * A function to call when the element is created.
   *
   * @param args - The arguments passed to the function.
   * @param args.id - The id of the element.
   */
  onCreate?: (args: { id: string }) => void;

  /**
   * A function to call when the element is destroyed.
   *
   * @param args - The arguments passed to the function.
   * @param args.id - The id of the element.
   */
  onDestroy?: (args: { id: string }) => void;
}

const uiElementLifecycleClonableSchema = z.object({
  onCreate: z.string().optional(),
  onDestroy: z.string().optional(),
});

export interface UIElementLifecycleClonable
  extends zInfer<typeof uiElementLifecycleClonableSchema> {
  onCreate?: string;
  onDestroy?: string;
}

export const uiElementBaseSchema = uiElementLifecycleSchema.extend({
  id: z.string(),
});

export interface UIElementBase
  extends Omit<zInfer<typeof uiElementBaseSchema>, "onCreate" | "onDestroy">,
    UIElementLifecycle {
  /**
   * The ID of the element.
   */
  id: string;
}

const uiElementBaseCreateSchm = uiElementBaseSchema.partial({ id: true });
export const uiElementBaseCreateSchema = {
  params: uiElementBaseCreateSchm,
  clonable: uiElementBaseCreateSchm.extend(
    uiElementLifecycleClonableSchema.shape,
  ),
};

export interface UIElementBaseCreateParams extends Omit<UIElementBase, "id"> {
  /**
   * The ID of the element.
   *
   * @remarks
   * If not provided, the element will be assigned a random ID, but it is recommended to provide it
   * to perform further updates on the element.
   *
   * If provided, it must be unique within the UI.
   *
   * @defaultValue `undefined`
   */
  id?: string;
}

export const uiLabelReadyElementSchema = uiElementBaseSchema.extend({
  /**
   * Label text to display above the element and used for screen readers.
   */
  label: z.string().optional(),
});

export interface UILabelReadyElement
  extends UIElementBase,
    Omit<zInfer<typeof uiLabelReadyElementSchema>, "onCreate" | "onDestroy"> {}

export const uiLabelReadyElementCreateSchema = {
  params: uiLabelReadyElementSchema.extend(
    uiElementBaseCreateSchema.params.shape,
  ),
  clonable: uiLabelReadyElementSchema.extend(
    uiElementBaseCreateSchema.clonable.shape,
  ),
};

export interface UILabelReadyElementCreateParams
  extends Omit<UILabelReadyElement, "id">,
    UIElementBaseCreateParams {}

// turn every function value into a string
export type MakeClonableSchema<
  TElementCreate extends { id?: string; type: string },
> = {
  [K in keyof TElementCreate]: TElementCreate[K] extends Function
    ? string
    : TElementCreate[K] extends Function | undefined
      ? string | undefined
      : TElementCreate[K];
};

export function makeUpdateSchema<
  TShape extends z.ZodRawShape & {
    id: z.ZodOptional<z.ZodString>;
    type: z.ZodType;
  },
>(schema: z.ZodObject<TShape>) {
  return schema.partial().extend({
    id: z.string(),
    type: schema.shape.type,
  }) as z.ZodObject<{
    [K in keyof TShape]: K extends "id"
      ? z.ZodString
      : K extends "type"
        ? TShape["type"]
        : z.ZodOptional<TShape[K]>;
  }>;
}

export type MakeUpdateSchema<
  TElement extends { id: string; type: string },
  TElementCreate extends { id?: string; type: string },
> = Omit<Partial<TElementCreate>, "id" | "type"> &
  Pick<TElement, "id" | "type">;
