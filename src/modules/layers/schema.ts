import * as z from "zod";
import type { ModuleSchema } from "../../lib/schema";
import { methodMessage, type Method } from "../../types/builders";
import {
  LayersGetLayersFilterSchema,
  LayersSetLayerVisibilityRequestSchema,
  type LayersGetLayerResponse,
  type LayersGetLayersResponse,
} from "./types";

const LayersGetLayerMessage = methodMessage("layers.getLayer", z.string());
const LayersGetLayersMessage = methodMessage(
  "layers.getLayers",
  LayersGetLayersFilterSchema,
);
const LayersSetLayerVisibilityMessage = methodMessage(
  "layers.setLayerVisibility",
  LayersSetLayerVisibilityRequestSchema,
);

export const layersSchema = {
  methods: [
    LayersGetLayerMessage,
    LayersGetLayersMessage,
    LayersSetLayerVisibilityMessage,
  ],
  listeners: null,
} satisfies ModuleSchema;

export type LayersSchema = {
  methods: {
    "layers.getLayer": Method<
      z.infer<typeof LayersGetLayerMessage>,
      LayersGetLayerResponse
    >;
    "layers.getLayers": Method<
      z.infer<typeof LayersGetLayersMessage>,
      LayersGetLayersResponse
    >;
    "layers.setLayerVisibility": Method<
      z.infer<typeof LayersSetLayerVisibilityMessage>,
      void
    >;
  };
  listeners: {};
};
