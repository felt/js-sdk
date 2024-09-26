import * as z from "zod";
import type { FeltCommand } from "../../types/interface.js";

export const UiControlsOptions = z.object({
  showLegend: z.boolean().optional(),
  cooperativeGestures: z.boolean().optional(),
  fullScreenButton: z.boolean().optional(),
  geolocation: z.boolean().optional(),
  zoomControls: z.boolean().optional(),
  scaleBar: z.boolean().optional(),
});
export type UiControlsOptions = z.infer<typeof UiControlsOptions>;

export const UiControlsMessage = z.object({
  type: z.literal("ui_controls.update"),
  params: UiControlsOptions,
});
export type UiControlsMessage = z.infer<typeof UiControlsMessage>;

export type UiController = {
  update: FeltCommand<"ui_controls.update">;
};

export type UiMessages = UiControlsMessage;
