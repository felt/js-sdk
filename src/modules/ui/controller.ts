import { command } from "../../types/interface";
import type { UiControlsOptionsType } from "./types";

export const uiController = (feltWindow: Window) => ({
  update: command(feltWindow, "ui_controls.update"),
});

/**
 * The UI controller allows you to enable and disable UI controls on the
 * embedded map.
 *
 * @public
 */
export interface UiController {
  /**
   * Updates the UI controls on the embedded map.
   *
   * @param controls - The controls to update.
   */
  update(controls: UiControlsOptionsType): void;
}
