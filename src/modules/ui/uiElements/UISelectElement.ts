import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import { uiLabelReadyElementSchemas, type UIElementLifecycle } from "./base";

const uiSelectElementBaseSchema = z.object({
  type: z.literal("Select"),
  options: z.array(z.object({ label: z.string(), value: z.string() })),
  value: z.string().optional(),
  search: z.boolean().optional(),
  placeholder: z.string().optional(),
});

export const uiSelectElementSchemas = {
  public: uiLabelReadyElementSchemas.public
    .extend(uiSelectElementBaseSchema.shape)
    .extend({
      onChange: z
        .function()
        .args(z.object({ value: z.string() }))
        .returns(z.void()),
    }),
  input: uiLabelReadyElementSchemas.input
    .extend(uiSelectElementBaseSchema.shape)
    .extend({
      onChange: z
        .function()
        .args(z.object({ value: z.string() }))
        .returns(z.void()),
    }),
  clonable: uiLabelReadyElementSchemas.clonable
    .extend(uiSelectElementBaseSchema.shape)
    .extend({ onChange: z.string() }),
};

/**
 * Represents a selector element in a panel.
 *
 * @remarks
 * This element is used to select a single option from a list of options.
 *
 * @public
 */
export interface UISelectElementInput
  extends UIElementLifecycle,
    Omit<
      zInfer<typeof uiSelectElementSchemas.input>,
      "onCreate" | "onDestroy"
    > {
  /**
   * Event handler for when the value of the select changes.
   *
   * @param args
   * @param args.value - The new value of the select.
   */
  onChange: (args: { value: string }) => void;
}
