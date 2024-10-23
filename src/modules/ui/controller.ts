import { method } from "../../types/interface";
import type { UiControlsOptions } from "./types";

/**
 * @ignore
 */
export const uiController = (feltWindow: Window): UiController => ({
  updateUiControls: method(feltWindow, "updateUiControls"),
});

/**
 * The UI controller allows you to enable and disable UI controls on the
 * embedded map.
 *
 * @group UI Controls
 * @public
 */
export interface UiController {
  /**
   * Updates the UI controls on the embedded map.
   *
   * @param controls - The controls to update.
   */
  updateUiControls(controls: UiControlsOptions): void;
}
