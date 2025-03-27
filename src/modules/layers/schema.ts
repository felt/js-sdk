import { z } from "zod";
import type { ModuleSchema } from "~/lib/ModuleSchema";
import {
  type Listener,
  type Method,
  listenerMessageWithParams,
  methodMessage,
} from "~/lib/builders";
import type { zInfer } from "~/lib/utils";
import {
  type GeoJsonFeature,
  SetVisibilityRequestSchema,
} from "~/modules/shared/types";
import { FiltersSchema, type LayerFilters } from "./filters/types";
import {
  type AggregationMethod,
  GetLayerCalculationParamsSchema,
  type GetLayerCategoriesGroup,
  GetLayerCategoriesParamsSchema,
  type GetLayerHistogramBin,
  GetLayerHistogramParamsSchema,
} from "./stats/types";
import {
  CreateEphemeralLayerSourcesSchema,
  GetLayerGroupsFilterSchema,
  GetLayersConstraintSchema,
  GetRenderedFeaturesConstraintSchema,
  type Layer,
  type LayerChangeCallbackParams,
  type LayerFeature,
  type LayerGroup,
  type LayerGroupChangeCallbackParams,
  type LayerSchema,
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

const CreateEphemeralLayersMessage = methodMessage(
  "createEphemeralLayers",
  z.object({ sources: CreateEphemeralLayerSourcesSchema }),
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
const OnLayerFiltersChangeMessage = listenerMessageWithParams(
  "onLayerFiltersChange",
  z.object({ layerId: z.string() }),
);

// RENDERED FEATURES
const GetRenderedFeaturesMessage = methodMessage(
  "getRenderedFeatures",
  GetRenderedFeaturesConstraintSchema.optional(),
);

const GetFeatureMessage = methodMessage(
  "getFeature",
  z.object({
    id: z.string().or(z.number()),
    layerId: z.string(),
  }),
);

const GetGeoJsonFeatureMessage = methodMessage(
  "getGeoJsonFeature",
  z.object({
    id: z.string().or(z.number()),
    layerId: z.string(),
  }),
);

// STATS
const GetLayerCategoriesMessage = methodMessage(
  "getCategoryData",
  GetLayerCategoriesParamsSchema,
);

const GetLayerHistogramMessage = methodMessage(
  "getHistogramData",
  GetLayerHistogramParamsSchema,
);

const GetLayerCalculationMessage = methodMessage(
  "getAggregates",
  GetLayerCalculationParamsSchema,
);

// SCHEMA
const GetLayerSchemaMessage = methodMessage("getLayerSchema", z.string());

export const layersSchema = {
  methods: [
    GetLayerMessage,
    GetLayersMessage,
    SetLayerVisibilityMessage,
    SetLayerStyleMessage,
    SetLayerLegendVisibilityMessage,

    CreateEphemeralLayersMessage,

    GetGroupMessage,
    GetGroupsMessage,
    SetLayerGroupVisibilityMessage,
    SetLayerGroupLegendVisibilityMessage,

    GetLegendItemMessage,
    GetLegendItemsMessage,
    SetLegendItemVisibilityMessage,

    GetFiltersMessage,
    SetFiltersMessage,

    GetRenderedFeaturesMessage,
    GetFeatureMessage,
    GetGeoJsonFeatureMessage,

    GetLayerCategoriesMessage,
    GetLayerHistogramMessage,
    GetLayerCalculationMessage,

    GetLayerSchemaMessage,
  ],
  listeners: [
    OnLayerChangeMessage,
    OnLayerGroupChangeMessage,
    OnLegendItemChangeMessage,
    OnLayerFiltersChangeMessage,
  ],
} satisfies ModuleSchema;

export type LayersSchema = {
  methods: {
    getLayer: Method<zInfer<typeof GetLayerMessage>, Layer | null>;
    getLayers: Method<zInfer<typeof GetLayersMessage>, Array<Layer | null>>;
    setLayerVisibility: Method<zInfer<typeof SetLayerVisibilityMessage>, void>;
    setLayerStyle: Method<zInfer<typeof SetLayerStyleMessage>, void>;
    setLayerLegendVisibility: Method<
      zInfer<typeof SetLayerLegendVisibilityMessage>,
      void
    >;
    createEphemeralLayers: Method<
      zInfer<typeof CreateEphemeralLayersMessage>,
      Array<LayerGroup | null>
    >;

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
      Array<LayerFeature>
    >;
    getFeature: Method<zInfer<typeof GetFeatureMessage>, LayerFeature | null>;
    getGeoJsonFeature: Method<
      zInfer<typeof GetGeoJsonFeatureMessage>,
      GeoJsonFeature | null
    >;

    getCategoryData: Method<
      zInfer<typeof GetLayerCategoriesMessage>,
      Array<GetLayerCategoriesGroup>
    >;
    getHistogramData: Method<
      zInfer<typeof GetLayerHistogramMessage>,
      Array<GetLayerHistogramBin>
    >;
    getAggregates: Method<
      zInfer<typeof GetLayerCalculationMessage>,
      Record<AggregationMethod | "count", number | null>
    >;

    getLayerSchema: Method<zInfer<typeof GetLayerSchemaMessage>, LayerSchema>;
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
    onLayerFiltersChange: Listener<
      zInfer<typeof OnLayerFiltersChangeMessage.shape.options>,
      LayerFilters
    >;
  };
};
