import { method } from "../../types/interface";
import type { UiControlsOptions } from "./types";

export const uiController = (feltWindow: Window) => ({
  update: method(feltWindow, "ui_controls.update"),
});

/**
 * The UI controller allows you to enable and disable UI controls on the
 * embedded map.
 *
 * @category UI Controls
 * @public
 */
export interface UiController {
  /**
   * Updates the UI controls on the embedded map.
   *
   * @param controls - The controls to update.
   */
  update(controls: UiControlsOptions): void;
}
