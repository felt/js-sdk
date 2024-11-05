import { elementsSchema, type ElementsSchema } from "../elements/schema";
import {
  interactionsSchema,
  type InteractionsSchema,
} from "../interactions/schema";
import { layersSchema, type LayersSchema } from "../layers/schema";
import { selectionSchema, type SelectionSchema } from "../selection/schema";
import { uiSchema, type UiSchema } from "../ui/schema";
import { viewportSchema, type ViewportSchema } from "../viewport/schema";

export const allModules = [
  uiSchema,
  viewportSchema,
  layersSchema,
  elementsSchema,
  selectionSchema,
  interactionsSchema,
];

export type AllModules =
  | UiSchema
  | ViewportSchema
  | LayersSchema
  | ElementsSchema
  | SelectionSchema
  | InteractionsSchema;
