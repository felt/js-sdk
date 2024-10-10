import * as z from "zod";
import type { ModuleSchema } from "../../lib/schema";
import {
  listenerMessageWithParams,
  methodMessage,
  type Listener,
  type Method,
} from "../../types/builders";
import {
  LayersGetGroupsFilterSchema,
  LayersGetLayersFilterSchema,
  LayersSetVisibilityRequestSchema,
  type Layer,
  type LayersGetGroupsResponse,
  type LayersGetLayerGroupResponse,
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
const LayersGetGroupMessage = methodMessage("layers.getGroup", z.string());
const LayersGetGroupsMessage = methodMessage(
  "layers.getGroups",
  LayersGetGroupsFilterSchema,
);
const LayersSetLayerGroupVisibilityMessage = methodMessage(
  "layers.setGroupVisibility",
  LayersSetVisibilityRequestSchema,
);

const LayersOnLayerChangeMessage = listenerMessageWithParams(
  "layers.onLayerChange",
  z.object({ id: z.string() }),
);

export const layersSchema = {
  methods: [
    LayersGetLayerMessage,
    LayersGetLayersMessage,
    LayersSetLayerVisibilityMessage,
    LayersGetGroupMessage,
    LayersGetGroupsMessage,
    LayersSetLayerGroupVisibilityMessage,
  ],
  listeners: [LayersOnLayerChangeMessage],
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
      z.infer<typeof LayersGetGroupMessage>,
      LayersGetLayerGroupResponse
    >;
    "layers.getGroups": Method<
      z.infer<typeof LayersGetGroupsMessage>,
      LayersGetGroupsResponse
    >;
    "layers.setGroupVisibility": Method<
      z.infer<typeof LayersSetLayerGroupVisibilityMessage>,
      void
    >;
  };
  listeners: {
    "layers.onLayerChange": Listener<
      z.infer<typeof LayersOnLayerChangeMessage.shape.options>,
      { layer: Layer | null }
    >;
  };
};
