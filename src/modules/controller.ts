import { type UiController, uiController } from "./ui/controller";
import {
  type ViewportController,
  viewportController,
} from "./viewport/controller";

/**
 * This pieces together the controller for the Felt SDK from the various namespaced
 * controllers.
 */
export function makeController(feltWindow: Window): FeltController {
  return {
    viewport: viewportController(feltWindow),
    ui: uiController(feltWindow),
  };
}

/**
 * The FeltController allows you to control, inspect and observe a Felt map.
 * The various ways to interact with the map are namespaced for clarity.
 *
 * @interface
 */
export type FeltController = {
  /**
   * The viewport controller allows you to control the viewport of the map.
   */
  viewport: ViewportController;

  /**
   * The UI controllers allows you to enable and disable UI controls on the
   * embedded map.
   */
  ui: UiController;
};

export interface FeltControllerWithIframe extends FeltController {
  /**
   * The iframe element containing the Felt map.
   */
  iframe: HTMLIFrameElement;
}
