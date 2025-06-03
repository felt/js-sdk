import { z } from "zod";

export const placementForUiElementSchema = z.union([
  z.object({ after: z.string() }),
  z.object({ before: z.string() }),
  z.object({ at: z.enum(["start", "end"]) }),
]);

/**
 * The placement of an element in a panel.
 *
 * @remarks
 * This is used to specify the position of an element in a panel when adding it.
 *
 * @defaultValue `"end"`
 *
 * @public
 */
export type PlacementForUIElement = z.infer<typeof placementForUiElementSchema>;
