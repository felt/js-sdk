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
  type LayerChangeCallbackParams,
  type LayersGetGroupsResponse,
  type LayersGetLayerGroupResponse,
  type LayersGetLayerResponse,
  type LayersGetLayersResponse,
} from "./types";

const LayersGetLayerMessage = methodMessage("getLayer", z.string());
const LayersGetLayersMessage = methodMessage(
  "getLayers",
  LayersGetLayersFilterSchema.optional(),
);
const LayersSetLayerVisibilityMessage = methodMessage(
  "setLayerVisibility",
  LayersSetVisibilityRequestSchema,
);
const LayersGetGroupMessage = methodMessage("getLayerGroup", z.string());
const LayersGetGroupsMessage = methodMessage(
  "getLayerGroups",
  LayersGetGroupsFilterSchema.optional(),
);
const LayersSetLayerGroupVisibilityMessage = methodMessage(
  "setLayerGroupVisibility",
  LayersSetVisibilityRequestSchema,
);

const LayersOnLayerChangeMessage = listenerMessageWithParams(
  "onLayerChange",
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
    getLayer: Method<
      z.infer<typeof LayersGetLayerMessage>,
      LayersGetLayerResponse | null
    >;
    getLayers: Method<
      z.infer<typeof LayersGetLayersMessage>,
      LayersGetLayersResponse
    >;
    setLayerVisibility: Method<
      z.infer<typeof LayersSetLayerVisibilityMessage>,
      void
    >;
    getLayerGroup: Method<
      z.infer<typeof LayersGetGroupMessage>,
      LayersGetLayerGroupResponse | null
    >;
    getLayerGroups: Method<
      z.infer<typeof LayersGetGroupsMessage>,
      LayersGetGroupsResponse
    >;
    setLayerGroupVisibility: Method<
      z.infer<typeof LayersSetLayerGroupVisibilityMessage>,
      void
    >;
  };
  listeners: {
    onLayerChange: Listener<
      z.infer<typeof LayersOnLayerChangeMessage.shape.options>,
      LayerChangeCallbackParams
    >;
  };
};
