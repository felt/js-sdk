import { z } from "zod";
import type { UiController } from "../controller";

export const placementForUiElementSchema = z.union([
  z.object({ after: z.string() }),
  z.object({ before: z.string() }),
  z.object({ at: z.enum(["start", "end"]) }),
]);

/**
 * Used in {@link UiController.addPanel} to specify the position of a panel in the stack
 * and in {@link UiController.addPanelElements} to specify the position of an element in a panel.
 *
 * In both cases, the default value is `{ at: "end" }`.
 *
 * @public
 */
export type PlacementForUIElement = z.infer<typeof placementForUiElementSchema>;
