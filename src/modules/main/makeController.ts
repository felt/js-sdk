import type { FeltController } from ".";
import { elementsController } from "../elements/controller";
import { interactionsController } from "../interactions/controller";
import { layersController } from "../layers/controller";
import { selectionController } from "../selection/controller";
import { uiController } from "../ui/controller";
import { viewportController } from "../viewport/controller";

export function makeController(feltWindow: Window): FeltController {
  return {
    iframe: null,
    ...viewportController(feltWindow),
    ...uiController(feltWindow),
    ...layersController(feltWindow),
    ...elementsController(feltWindow),
    ...selectionController(feltWindow),
    ...interactionsController(feltWindow),
  };
}
