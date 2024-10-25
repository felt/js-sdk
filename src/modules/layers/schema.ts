import { z } from "zod";
import type { ModuleSchema } from "~/lib/schema";
import {
  listenerMessageWithParams,
  methodMessage,
  type Listener,
  type Method,
} from "~/lib/types/builders";
import { SetVisibilityRequestSchema } from "~/modules/shared";
import { FiltersSchema, type LayerFilters } from "./filter.types";
import {
  GetLayerGroupsFilterSchema,
  GetLayersFilterSchema,
  LegendItemIdentifierSchema,
  LegendItemsFilterSchema,
  type GetLayerGroupResponse,
  type GetLayerGroupsResponse,
  type GetLayerResponse,
  type GetLayersResponse,
  type LayerChangeCallbackParams,
  type LayerGroupChangeCallbackParams,
  type LegendItem,
  type LegendItemChangeCallbackParams,
} from "./types";

// LAYERS
const GetLayerMessage = methodMessage("getLayer", z.string());
const GetLayersMessage = methodMessage(
  "getLayers",
  GetLayersFilterSchema.optional(),
);
const SetLayerVisibilityMessage = methodMessage(
  "setLayerVisibility",
  SetVisibilityRequestSchema,
);
const OnLayerChangeMessage = listenerMessageWithParams(
  "onLayerChange",
  z.object({ id: z.string() }),
);

// LAYER GROUPS
const GetGroupMessage = methodMessage("getLayerGroup", z.string());
const GetGroupsMessage = methodMessage(
  "getLayerGroups",
  GetLayerGroupsFilterSchema.optional(),
);
const SetLayerGroupVisibilityMessage = methodMessage(
  "setLayerGroupVisibility",
  SetVisibilityRequestSchema,
);
const OnLayerGroupChangeMessage = listenerMessageWithParams(
  "onLayerGroupChange",
  z.object({ id: z.string() }),
);

// LEGEND ITEMS
const GetLegendItemMessage = methodMessage(
  "getLegendItem",
  LegendItemIdentifierSchema,
);
const GetLegendItemsMessage = methodMessage(
  "getLegendItems",
  LegendItemsFilterSchema.optional(),
);
const OnLegendItemChangeMessage = listenerMessageWithParams(
  "onLegendItemChange",
  LegendItemIdentifierSchema,
);
const SetLegendItemVisibilityMessage = methodMessage(
  "setLegendItemVisibility",
  z.object({
    show: LegendItemIdentifierSchema.array().optional(),
    hide: LegendItemIdentifierSchema.array().optional(),
  }),
);

// FILTERS
const GetFiltersMessage = methodMessage("getLayerFilters", z.string());
const SetFiltersMessage = methodMessage(
  "setLayerFilters",
  z.object({
    layerId: z.string(),
    filters: FiltersSchema,
  }),
);

export const layersSchema = {
  methods: [
    GetLayerMessage,
    GetLayersMessage,
    SetLayerVisibilityMessage,

    GetGroupMessage,
    GetGroupsMessage,
    SetLayerGroupVisibilityMessage,

    GetLegendItemMessage,
    GetLegendItemsMessage,
    SetLegendItemVisibilityMessage,

    GetFiltersMessage,
    SetFiltersMessage,
  ],
  listeners: [
    OnLayerChangeMessage,
    OnLayerGroupChangeMessage,
    OnLegendItemChangeMessage,
  ],
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

    getLegendItem: Method<
      z.infer<typeof GetLegendItemMessage>,
      LegendItem | null
    >;
    getLegendItems: Method<
      z.infer<typeof GetLegendItemsMessage>,
      Array<LegendItem | null>
    >;
    setLegendItemVisibility: Method<
      z.infer<typeof SetLegendItemVisibilityMessage>,
      void
    >;

    getLayerFilters: Method<
      z.infer<typeof GetFiltersMessage>,
      LayerFilters | null
    >;

    setLayerFilters: Method<z.infer<typeof SetFiltersMessage>, void>;
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
    onLegendItemChange: Listener<
      z.infer<typeof OnLegendItemChangeMessage.shape.options>,
      LegendItemChangeCallbackParams
    >;
  };
};
