import * as z from "zod";
import type { ModuleSchema } from "../../lib/schema";
import {
  listenerMessageWithParams,
  methodMessage,
  type Listener,
  type Method,
} from "../../types/builders";
import { SetVisibilityRequestSchema } from "../../types/visibility";
import {
  GetLayerGroupsFilterSchema,
  GetLayersFilterSchema,
  type GetLayerGroupResponse,
  type GetLayerGroupsResponse,
  type GetLayerResponse,
  type GetLayersResponse,
  type LayerChangeCallbackParams,
  type LayerGroupChangeCallbackParams,
} from "./types";

const GetLayerMessage = methodMessage("getLayer", z.string());
const GetLayersMessage = methodMessage(
  "getLayers",
  GetLayersFilterSchema.optional(),
);
const SetLayerVisibilityMessage = methodMessage(
  "setLayerVisibility",
  SetVisibilityRequestSchema,
);
const GetGroupMessage = methodMessage("getLayerGroup", z.string());
const GetGroupsMessage = methodMessage(
  "getLayerGroups",
  GetLayerGroupsFilterSchema.optional(),
);
const SetLayerGroupVisibilityMessage = methodMessage(
  "setLayerGroupVisibility",
  SetVisibilityRequestSchema,
);

const OnLayerChangeMessage = listenerMessageWithParams(
  "onLayerChange",
  z.object({ id: z.string() }),
);

const OnLayerGroupChangeMessage = listenerMessageWithParams(
  "onLayerGroupChange",
  z.object({ id: z.string() }),
);

export const layersSchema = {
  methods: [
    GetLayerMessage,
    GetLayersMessage,
    SetLayerVisibilityMessage,
    GetGroupMessage,
    GetGroupsMessage,
    SetLayerGroupVisibilityMessage,
  ],
  listeners: [OnLayerChangeMessage, OnLayerGroupChangeMessage],
} satisfies ModuleSchema;

export type LayersSchema = {
  methods: {
    getLayer: Method<z.infer<typeof GetLayerMessage>, GetLayerResponse | null>;
    getLayers: Method<z.infer<typeof GetLayersMessage>, GetLayersResponse>;
    setLayerVisibility: Method<z.infer<typeof SetLayerVisibilityMessage>, void>;
    getLayerGroup: Method<
      z.infer<typeof GetGroupMessage>,
      GetLayerGroupResponse | null
    >;
    getLayerGroups: Method<
      z.infer<typeof GetGroupsMessage>,
      GetLayerGroupsResponse
    >;
    setLayerGroupVisibility: Method<
      z.infer<typeof SetLayerGroupVisibilityMessage>,
      void
    >;
  };
  listeners: {
    onLayerChange: Listener<
      z.infer<typeof OnLayerChangeMessage.shape.options>,
      LayerChangeCallbackParams
    >;
    onLayerGroupChange: Listener<
      z.infer<typeof OnLayerGroupChangeMessage.shape.options>,
      LayerGroupChangeCallbackParams
    >;
  };
};
