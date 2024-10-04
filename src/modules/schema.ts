import { uiSchema, type UiSchema } from "./ui/schema";
import { viewportSchema, type ViewportSchema } from "./viewport/schema";

export const allModules = [uiSchema, viewportSchema];

export type AllModules = UiSchema | ViewportSchema;
