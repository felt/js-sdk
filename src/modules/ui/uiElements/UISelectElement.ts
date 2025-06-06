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
  read: uiLabelReadyElementSchemas.read
    .extend(uiSelectElementBaseSchema.shape)
    .extend({
      onChange: z
        .function()
        .args(z.object({ value: z.string() }))
        .returns(z.void()),
    }),
  create: uiLabelReadyElementSchemas.create
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
 */
export interface UISelectElementCreate
  extends UIElementLifecycle,
    Omit<
      zInfer<typeof uiSelectElementSchemas.create>,
      "onCreate" | "onDestroy"
    > {
  /**
   * Event handler for when the value of the select changes.
   */
  onChange: (
    /**/
    args: {
      /**
       * The new value of the select.
       */
      value: string;
    },
  ) => void;
}
