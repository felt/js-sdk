/**
 * Layers in a Felt map hold geospatial data, but also configure how the data is rendered
 * both on the map and in the legend. The data can be vector data such as Points, Lines, or Polygons,
 * or raster data such as satellite images.
 *
 * Each Layer can be grouped under a LayerGroup, and has associated LegendItems that represent
 * how the layer is rendered in the legend.
 *
 * You can control the visibility of layers, layer groups, and legend items using the
 * {@link LayersController.setLayerVisibility | `setLayerVisibility`}, {@link LayersController.setLayerGroupVisibility | `setLayerGroupVisibility`}, and {@link LayersController.setLegendItemVisibility |  `setLegendItemVisibility`} methods.
 *
 * When a Layer is styled to as categorical data or "classed" numeric data, there will be
 * a `LegendItem` for each category or class. Each `LegendItem` can be controlled for visibility
 * independently of the Layer, so you can turn on and off each category or class individually.
 *
 * @module Layers
 */
export type {
  CreateLayersFromGeoJsonParams,
  DataOnlyLayer,
  FeltTiledVectorSource,
  GeoJsonDataVectorSource,
  GeoJsonUrlVectorSource,
  GetLayerGroupsConstraint,
  GetLayersConstraint,
  GetRenderedFeaturesConstraint,
  Layer,
  LayerChangeCallbackParams,
  LayerCommon,
  LayerFeature,
  LayerGroup,
  LayerGroupChangeCallbackParams,
  LayerProcessingStatus,
  LegendItem,
  LegendItemChangeCallbackParams,
  LegendItemIdentifier,
  LegendItemsConstraint,
  RasterBand,
  RasterLayer,
  RasterLayerSource,
  RasterValue,
  VectorLayer,
} from "./types";

export type {
  LayerSchema,
  LayerSchemaAttribute,
  LayerSchemaBooleanAttribute,
  LayerSchemaCommonAttribute,
  LayerSchemaDateAttribute,
  LayerSchemaDateTimeAttribute,
  LayerSchemaNumericAttribute,
  LayerSchemaTextAttribute,
} from "./types";

export type {
  FilterExpression,
  FilterLogicGate,
  FilterTernary,
  Filters,
  LayerFilters,
} from "./filters/types";

export type {
  AggregationConfig,
  AggregationMethod,
  GeometryFilter,
  GetLayerCalculationParams,
  GetLayerCategoriesGroup,
  GetLayerCategoriesParams,
  GetLayerHistogramBin,
  GetLayerHistogramParams,
  MultiAggregationConfig,
  ValueConfiguration,
} from "./stats/types";

export type { LayersController } from "./controller";
