import { z } from "zod";
import type { ModuleSchema } from "~/lib/ModuleSchema";
import {
  type Listener,
  type Method,
  listenerMessageWithParams,
  methodMessage,
} from "~/lib/builders";
import type { zInfer } from "~/lib/utils";
import { SetVisibilityRequestSchema } from "~/modules/shared/types";
import { FiltersSchema, type LayerFilters } from "./filter.types";
import {
  type Feature,
  GetLayerGroupsFilterSchema,
  GetLayersConstraintSchema,
  GetRenderedFeaturesConstraintSchema,
  type Layer,
  type LayerChangeCallbackParams,
  type LayerGroup,
  type LayerGroupChangeCallbackParams,
  type LegendItem,
  type LegendItemChangeCallbackParams,
  LegendItemIdentifierSchema,
  LegendItemsConstraintSchema,
} from "./types";

// LAYERS
const GetLayerMessage = methodMessage("getLayer", z.string());
const GetLayersMessage = methodMessage(
  "getLayers",
  GetLayersConstraintSchema.optional(),
);
const SetLayerVisibilityMessage = methodMessage(
  "setLayerVisibility",
  SetVisibilityRequestSchema,
);
const OnLayerChangeMessage = listenerMessageWithParams(
  "onLayerChange",
  z.object({ id: z.string() }),
);
const SetLayerStyleMessage = methodMessage(
  "setLayerStyle",
  z.object({ id: z.string(), style: z.object({}).passthrough() }),
);
const SetLayerLegendVisibilityMessage = methodMessage(
  "setLayerLegendVisibility",
  SetVisibilityRequestSchema,
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
const SetLayerGroupLegendVisibilityMessage = methodMessage(
  "setLayerGroupLegendVisibility",
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
  LegendItemsConstraintSchema.optional(),
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
    note: z.string().optional(),
  }),
);

// RENDERED FEATURES
const GetRenderedFeaturesMessage = methodMessage(
  "getRenderedFeatures",
  GetRenderedFeaturesConstraintSchema.optional(),
);

export const layersSchema = {
  methods: [
    GetLayerMessage,
    GetLayersMessage,
    SetLayerVisibilityMessage,
    SetLayerStyleMessage,
    SetLayerLegendVisibilityMessage,

    GetGroupMessage,
    GetGroupsMessage,
    SetLayerGroupVisibilityMessage,

    GetLegendItemMessage,
    GetLegendItemsMessage,
    SetLegendItemVisibilityMessage,

    GetFiltersMessage,
    SetFiltersMessage,

    GetRenderedFeaturesMessage,
  ],
  listeners: [
    OnLayerChangeMessage,
    OnLayerGroupChangeMessage,
    OnLegendItemChangeMessage,
  ],
} satisfies ModuleSchema;

export type LayersSchema = {
  methods: {
    getLayer: Method<zInfer<typeof GetLayerMessage>, Layer | null>;
    getLayers: Method<zInfer<typeof GetLayersMessage>, Array<Layer | null>>;
    setLayerVisibility: Method<zInfer<typeof SetLayerVisibilityMessage>, void>;
    setLayerStyle: Method<zInfer<typeof SetLayerStyleMessage>, void>;
    setLayerLegendVisibility: Method<zInfer<typeof SetLayerLegendVisibilityMessage>, void>;

    getLayerGroup: Method<zInfer<typeof GetGroupMessage>, LayerGroup | null>;
    getLayerGroups: Method<
      zInfer<typeof GetGroupsMessage>,
      Array<LayerGroup | null>
    >;
    setLayerGroupVisibility: Method<
      zInfer<typeof SetLayerGroupVisibilityMessage>,
      void
    >;
    setLayerGroupLegendVisibility: Method<
      zInfer<typeof SetLayerGroupLegendVisibilityMessage>,
      void
    >;

    getLegendItem: Method<
      zInfer<typeof GetLegendItemMessage>,
      LegendItem | null
    >;
    getLegendItems: Method<
      zInfer<typeof GetLegendItemsMessage>,
      Array<LegendItem | null>
    >;
    setLegendItemVisibility: Method<
      zInfer<typeof SetLegendItemVisibilityMessage>,
      void
    >;

    getLayerFilters: Method<
      zInfer<typeof GetFiltersMessage>,
      LayerFilters | null
    >;

    setLayerFilters: Method<zInfer<typeof SetFiltersMessage>, void>;

    getRenderedFeatures: Method<
      zInfer<typeof GetRenderedFeaturesMessage>,
      Array<Feature>
    >;
  };
  listeners: {
    onLayerChange: Listener<
      zInfer<typeof OnLayerChangeMessage.shape.options>,
      LayerChangeCallbackParams
    >;
    onLayerGroupChange: Listener<
      zInfer<typeof OnLayerGroupChangeMessage.shape.options>,
      LayerGroupChangeCallbackParams
    >;
    onLegendItemChange: Listener<
      zInfer<typeof OnLegendItemChangeMessage.shape.options>,
      LegendItemChangeCallbackParams
    >;
  };
};
