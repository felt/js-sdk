import { elementsSchema, type ElementsSchema } from "./elements/schema";
import { layersSchema, type LayersSchema } from "./layers/schema";
import { uiSchema, type UiSchema } from "./ui/schema";
import { viewportSchema, type ViewportSchema } from "./viewport/schema";

export const allModules = [
  uiSchema,
  viewportSchema,
  layersSchema,
  elementsSchema,
];

export type AllModules =
  | UiSchema
  | ViewportSchema
  | LayersSchema
  | ElementsSchema;
