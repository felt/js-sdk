import * as z from "zod";

// DATA TYPES
export const UiControlsOptions = z.object({
  showLegend: z.boolean().optional(),
  cooperativeGestures: z.boolean().optional(),
  fullScreenButton: z.boolean().optional(),
  geolocation: z.boolean().optional(),
  zoomControls: z.boolean().optional(),
  scaleBar: z.boolean().optional(),
});
export type UiControlsOptions = z.infer<typeof UiControlsOptions>;

// MESSAGE TYPES
export const UiControlsMessage = z.object({
  type: z.literal("ui_controls.update"),
  params: UiControlsOptions,
});
export type UiControlsMessage = z.infer<typeof UiControlsMessage>;
