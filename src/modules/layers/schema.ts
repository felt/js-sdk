import { z } from "zod";
import type { ModuleSchema } from "~/lib/ModuleSchema";
import {
  type Listener,
  listenerMessageWithParams,
  type Method,
  methodMessage,
} from "~/lib/builders";
import type { zInfer } from "~/lib/utils";
import {
  SetVisibilityRequestSchema,
  SortConfigSchema,
} from "~/modules/shared/types";
import type { LayerBoundaries } from "./filters/types";
import {
  FiltersSchema,
  GeometryFilterSchema,
  type LayerFilters,
} from "./filters/types";
import {
  GetLayerCalculationParamsSchema,
  GetLayerCategoriesParamsSchema,
  GetLayerHistogramParamsSchema,
  GetLayerPrecomputedCalculationParamsSchema,
} from "./stats/types";
import {
  CreateLayersFromGeoJsonSchema,
  GetLayerGroupsFilterSchema,
  GetLayersConstraintSchema,
  GetRenderedFeaturesConstraintSchema,
  type LayerChangeCallbackParams,
  type LayerGroupChangeCallbackParams,
  type LegendItemChangeCallbackParams,
  LegendItemIdentifierSchema,
  LegendItemsConstraintSchema,
  UpdateLayerSchema,
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

const CreateLayersFromGeoJsonMessage = methodMessage(
  "createLayersFromGeoJson",
  CreateLayersFromGeoJsonSchema,
);

const UpdateLayerMessage = methodMessage("updateLayer", UpdateLayerSchema);

const DeleteLayerMessage = methodMessage("deleteLayer", z.string());

const DuplicateLayerMessage = methodMessage("duplicateLayer", z.string());

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

// BOUNDARY
const GetLayerBoundariesMessage = methodMessage(
  "getLayerBoundaries",
  z.string(),
);
const SetLayerBoundaryMessage = methodMessage(
  "setLayerBoundary",
  z.object({
    layerIds: z.array(z.string()),
    boundary: GeometryFilterSchema.nullable(),
  }),
);
const OnLayerBoundariesChangeMessage = listenerMessageWithParams(
  "onLayerBoundariesChange",
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

const GetFeaturesMessage = methodMessage(
  "getFeatures",
  z.object({
    layerId: z.string(),
    filters: FiltersSchema.optional(),
    sorting: SortConfigSchema.optional(),
    boundary: GeometryFilterSchema.optional(),
    search: z.string().optional(),
    pagination: z.string().optional().nullish(),
    pageSize: z.number().optional(),
    select: z.array(z.string()).optional(),
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

const GetLayerPrecomputedCalculationMessage = methodMessage(
  "getPrecomputedAggregates",
  GetLayerPrecomputedCalculationParamsSchema,
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

    CreateLayersFromGeoJsonMessage,
    DeleteLayerMessage,
    UpdateLayerMessage,
    DuplicateLayerMessage,
    GetGroupMessage,
    GetGroupsMessage,
    SetLayerGroupVisibilityMessage,
    SetLayerGroupLegendVisibilityMessage,

    GetLegendItemMessage,
    GetLegendItemsMessage,
    SetLegendItemVisibilityMessage,

    GetFiltersMessage,
    SetFiltersMessage,

    GetLayerBoundariesMessage,
    SetLayerBoundaryMessage,

    GetRenderedFeaturesMessage,
    GetFeatureMessage,
    GetFeaturesMessage,
    GetGeoJsonFeatureMessage,

    GetLayerCategoriesMessage,
    GetLayerHistogramMessage,
    GetLayerCalculationMessage,
    GetLayerPrecomputedCalculationMessage,

    GetLayerSchemaMessage,
  ],
  listeners: [
    OnLayerChangeMessage,
    OnLayerGroupChangeMessage,
    OnLegendItemChangeMessage,
    OnLayerFiltersChangeMessage,
    OnLayerBoundariesChangeMessage,
  ],
} satisfies ModuleSchema;

export type LayersSchema = {
  methods: {
    getLayer: Method<zInfer<typeof GetLayerMessage>>;
    getLayers: Method<zInfer<typeof GetLayersMessage>>;
    setLayerVisibility: Method<zInfer<typeof SetLayerVisibilityMessage>>;
    setLayerStyle: Method<zInfer<typeof SetLayerStyleMessage>>;
    setLayerLegendVisibility: Method<
      zInfer<typeof SetLayerLegendVisibilityMessage>
    >;

    createLayersFromGeoJson: Method<
      zInfer<typeof CreateLayersFromGeoJsonMessage>
    >;
    updateLayer: Method<zInfer<typeof UpdateLayerMessage>>;
    deleteLayer: Method<zInfer<typeof DeleteLayerMessage>>;
    duplicateLayer: Method<zInfer<typeof DuplicateLayerMessage>>;
    getLayerGroup: Method<zInfer<typeof GetGroupMessage>>;
    getLayerGroups: Method<zInfer<typeof GetGroupsMessage>>;
    setLayerGroupVisibility: Method<
      zInfer<typeof SetLayerGroupVisibilityMessage>
    >;
    setLayerGroupLegendVisibility: Method<
      zInfer<typeof SetLayerGroupLegendVisibilityMessage>
    >;

    getLegendItem: Method<zInfer<typeof GetLegendItemMessage>>;
    getLegendItems: Method<zInfer<typeof GetLegendItemsMessage>>;
    setLegendItemVisibility: Method<
      zInfer<typeof SetLegendItemVisibilityMessage>
    >;

    getLayerFilters: Method<zInfer<typeof GetFiltersMessage>>;
    setLayerFilters: Method<zInfer<typeof SetFiltersMessage>>;

    getRenderedFeatures: Method<zInfer<typeof GetRenderedFeaturesMessage>>;
    getFeature: Method<zInfer<typeof GetFeatureMessage>>;
    getGeoJsonFeature: Method<zInfer<typeof GetGeoJsonFeatureMessage>>;

    getLayerBoundaries: Method<zInfer<typeof GetLayerBoundariesMessage>>;
    setLayerBoundary: Method<zInfer<typeof SetLayerBoundaryMessage>>;
    getFeatures: Method<zInfer<typeof GetFeaturesMessage>>;
    getCategoryData: Method<zInfer<typeof GetLayerCategoriesMessage>>;
    getHistogramData: Method<zInfer<typeof GetLayerHistogramMessage>>;
    getAggregates: Method<zInfer<typeof GetLayerCalculationMessage>>;
    getPrecomputedAggregates: Method<
      zInfer<typeof GetLayerPrecomputedCalculationMessage>
    >;

    getLayerSchema: Method<zInfer<typeof GetLayerSchemaMessage>>;
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
    onLayerBoundariesChange: Listener<
      zInfer<typeof OnLayerBoundariesChangeMessage.shape.options>,
      LayerBoundaries | null
    >;
  };
};
