import * as z from "zod";
import type { ModuleSchema } from "../../lib/schema";
import { methodMessage, type Method } from "../../types/builders";
import {
  LayersGetLayerGroupsFilterSchema,
  LayersGetLayersFilterSchema,
  LayersSetVisibilityRequestSchema,
  type LayersGetLayerGroupResponse,
  type LayersGetLayerGroupsResponse,
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
  LayersSetVisibilityRequestSchema,
);
const LayersGetLayerGroupMessage = methodMessage("layers.getGroup", z.string());
const LayersGetLayerGroupsMessage = methodMessage(
  "layers.getLayerGroups",
  LayersGetLayerGroupsFilterSchema,
);
const LayersSetLayerGroupVisibilityMessage = methodMessage(
  "layers.setGroupVisibility",
  LayersSetVisibilityRequestSchema,
);

export const layersSchema = {
  methods: [
    LayersGetLayerMessage,
    LayersGetLayersMessage,
    LayersSetLayerVisibilityMessage,
    LayersGetLayerGroupMessage,
    LayersGetLayerGroupsMessage,
    LayersSetLayerGroupVisibilityMessage,
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
    "layers.getGroup": Method<
      z.infer<typeof LayersGetLayerGroupMessage>,
      LayersGetLayerGroupResponse
    >;
    "layers.getLayerGroups": Method<
      z.infer<typeof LayersGetLayerGroupsMessage>,
      LayersGetLayerGroupsResponse
    >;
    "layers.setGroupVisibility": Method<
      z.infer<typeof LayersSetLayerGroupVisibilityMessage>,
      void
    >;
  };
  listeners: {};
};
