# Felt SDK API Reference

Generated from the SDK's TypeScript definitions. Sections follow the SDK's module structure; every type and every `FeltController` member appears exactly once.

## Entry Point

```typescript
type FeltEmbedOptions = {
  uiControls?: UiControlsOptions;
  initialViewport?: ViewportCenterZoom;
  // A short-lived (15 minutes) authentication token to use for showing embeds that are configured to be private.
  token?: string;
};

// The Felt SDK is a library for embedding Felt maps into your website, allowing you to control and inspect the map programmatically.
const Felt: {
  embed: (container: HTMLElement, mapId: string, options?: FeltEmbedOptions) => Promise<FeltController>;
  connect: (feltWindow: Pick<Window, "postMessage">) => Promise<FeltController>;
};
```

### Methods

```typescript
// The iframe element containing the Felt map, if it is an embedded map.
const iframe: null | HTMLIFrameElement;
```

## Core Types

```typescript
// Represents a point in world coordinates.
type LatLng = { latitude: number; longitude: number };

// A GeoJSON feature object, compliant with: https://datatracker.ietf.org/doc/html/rfc7946#section-3.2
type GeoJsonFeature = {
  type: "Feature";
  geometry: GeoJsonGeometry;
  properties: GeoJsonProperties;
  // The bounding box of the feature in [west, south, east, north] order.
  bbox?: [number, number, number, number];
  // A value that uniquely identifies this feature in a https://tools.ietf.org/html/rfc7946#section-3.2.
  id?: string | number;
};

type PointGeometry = { type: "Point"; coordinates: LngLatTuple };

// A GeoJSON multi-point geometry.
type MultiPointGeometry = { type: "MultiPoint"; coordinates: LngLatTuple[] };

type PolygonGeometry = { type: "Polygon"; coordinates: [number, number][][] };

// A GeoJSON multi-polygon geometry.
type MultiPolygonGeometry = { type: "MultiPolygon"; coordinates: [number, number][][][] };

// A GeoJSON line string geometry.
type LineStringGeometry = { type: "LineString"; coordinates: LngLatTuple[] };

// A GeoJSON multi-line string geometry.
type MultiLineStringGeometry = { type: "MultiLineString"; coordinates: LngLatTuple[][] };

// The parameters for the methods that change the visibility of entities.
type SetVisibilityRequest = {
  // The ids of the entities you want to change the visibility of.
  show?: string[];
  hide?: string[];
};

// Configuration for sorting data by a specific attribute
type SortConfig = { direction: "asc" | "desc"; attribute: string };

// A tuple representing a longitude and latitude coordinate.
type LngLatTuple = [longitude, latitude];

// A GeoJSON properties object.
type GeoJsonProperties = Record<string, unknown>;

// A GeoJSON geometry of any type
type GeoJsonGeometry = PointGeometry | PolygonGeometry | LineStringGeometry | MultiLineStringGeometry | MultiPolygonGeometry | MultiPointGeometry;

// The zoom level of the map.
type FeltZoom = number;

// The edges of the map in the form of a bounding box.
type FeltBoundary = [number, number, number, number];

// Specifies the direction to sort data in
type SortDirection = "asc" | "desc";
```

## Layers

```typescript
// The common properties for all layers.
type LayerCommon = {
  id: string;
  groupId: null | string;
  // The name of the layer can be displayed in the Legend, depending on how the layer's legend is configured in its style.
  name: string;
  caption: null | string;
  description: null | string; // The layer description forms part of the layer's metadata.
  visible: boolean;
  shownInLegend: boolean;
  legendDisplay: "default" | "nameOnly";
  style: object;
  status: "processing" | "completed" | "failed" | "incomplete";
  // The bounding box of the layer in [west, south, east, north] order There are cases where the bounds are not available, such as for layers added to the map from URL sources, as these are not (depending on their type) processed and analyzed by Felt.
  bounds: null | [number, number, number, number];
};

// A raster layer is a layer that contains raster data that can be rendered on the map
type RasterLayer = {
  id: string;
  groupId: null | string;
  // The name of the layer can be displayed in the Legend, depending on how the layer's legend is configured in its style.
  name: string;
  caption: null | string;
  description: null | string; // The layer description forms part of the layer's metadata.
  visible: boolean;
  shownInLegend: boolean;
  legendDisplay: "default" | "nameOnly";
  style: object;
  status: "processing" | "completed" | "failed" | "incomplete";
  // The bounding box of the layer in [west, south, east, north] order There are cases where the bounds are not available, such as for layers added to the map from URL sources, as these are not (depending on their type) processed and analyzed by Felt.
  bounds: null | [number, number, number, number];
  geometryType: "Raster";
  source: RasterLayerSource;
};

// The source of a raster layer's data.
type RasterLayerSource = {
  imageTileTemplateUrl: string;
  // A URL template for fetching encoded tiles for the raster, or `null` for TileService layers (WMS, WMTS, ArcGIS) that serve pre-rendered image tiles without per-pixel encoding.
  encodedTileTemplateUrl: null | string;
  bands: RasterBand[];
};

// The RasterBand interface describes one band of a raster: how to identify it when asking for statistics, what to call it, and the values needed to calculate the encoded raster value from the red, green, and blue values of a pixel.
type RasterBand = {
  id: string;
  displayName: string; // The name of the band, such as "Red" or "Elevation".
  base: number; // Encoding base value as a floating point number
  interval: number; // Encoding interval as a floating point number
  bandIndex: number;
};

// A vector layer is a layer that contains vector data that can be rendered on the map
type VectorLayer = {
  id: string;
  groupId: null | string;
  // The name of the layer can be displayed in the Legend, depending on how the layer's legend is configured in its style.
  name: string;
  caption: null | string;
  description: null | string; // The layer description forms part of the layer's metadata.
  visible: boolean;
  shownInLegend: boolean;
  legendDisplay: "default" | "nameOnly";
  style: object;
  status: "processing" | "completed" | "failed" | "incomplete";
  // The bounding box of the layer in [west, south, east, north] order There are cases where the bounds are not available, such as for layers added to the map from URL sources, as these are not (depending on their type) processed and analyzed by Felt.
  bounds: null | [number, number, number, number];
  geometryType: "Polygon" | "Point" | "Line";
  source: GeoJsonUrlVectorSource | FeltTiledVectorSource | Omit<GeoJsonDataVectorSource, "data">;
};

// A GeoJSON URL source is a layer that is populated from a GeoJSON file at a remote URL.
type GeoJsonUrlVectorSource = {
  type: "geoJsonUrl";
  // The remote URL of the GeoJSON file used to populate the layer.
  url: string;
  // The interval in milliseconds between automatic refreshes of the GeoJSON.
  refreshInterval?: null | number;
};

// A GeoJSON data source is a layer that is populated from GeoJSON data, such as from a local file, or programmatically-created data.
type GeoJsonDataVectorSource = { type: "geoJsonData"; data: object };

// A GeoJSON file source is a layer that is populated from a GeoJSON file on your local machine.
type GeoJsonFileVectorSource = { type: "geoJsonFile"; file: File };

// The value you need to pass to LayersController.updateLayer
type UpdateLayerParams = {
  id: string;
  shownInLegend?: boolean;
  legendDisplay?: "default" | "nameOnly";
  name?: string;
  caption?: string;
  description?: string;
  bounds?: [number, number, number, number];
  style?: object;
  source?: GeoJsonUrlVectorSource | GeoJsonDataVectorSource | GeoJsonFileVectorSource;
};

// A data-only layer doesn't have any geometry, but can be used to join with other layers
type DataOnlyLayer = {
  id: string;
  groupId: null | string;
  // The name of the layer can be displayed in the Legend, depending on how the layer's legend is configured in its style.
  name: string;
  caption: null | string;
  description: null | string; // The layer description forms part of the layer's metadata.
  visible: boolean;
  shownInLegend: boolean;
  legendDisplay: "default" | "nameOnly";
  style: object;
  status: "processing" | "completed" | "failed" | "incomplete";
  geometryType: null;
  bounds: null;
};

type LayerGroup = {
  id: string;
  name: string;
  caption: null | string;
  layerIds: string[];
  visible: boolean;
  shownInLegend: boolean;
  // The bounding box of the layer group in [west, south, east, north] order.
  bounds: null | [number, number, number, number];
};

// The constraints to apply when getting layers.
type GetLayersConstraint = { ids?: string[] };

// The constraints to apply when getting layer groups.
type GetLayerGroupsConstraint = { ids?: string[] };

// The parameters for the `onLayerChange` listener.
type LayerChangeCallbackParams = {
  layer: null | Layer; // The new data for the layer or null if the layer was removed.
};

// The parameters for the `onLayerGroupChange` listener.
type LayerGroupChangeCallbackParams = { layerGroup: null | LayerGroup };

// A legend item, which often represents a sub-class of features in a layer in the case of categorical or classed layers.
type LegendItem = {
  title: string | string[];
  titleDependsOnZoom: boolean; // Whether the title depends on the zoom level or not.
  visible: boolean;
  id: string;
  layerId: string;
};

// The identifier for a legend item.
type LegendItemIdentifier = { id: string; layerId: string };

// Constraints for legend items.
type LegendItemsConstraint = {
  ids?: { id: string; layerId: string }[]; // Array of legend item identifiers to constrain by.
  layerIds?: string[];
};

// The parameters for the `onLegendItemChange` listener.
type LegendItemChangeCallbackParams = {
  // The new data for the legend item or null if the legend item was removed.
  legendItem: null | LegendItem;
};

// Constraints for the `getRenderedFeatures` method.
type GetRenderedFeaturesConstraint = {
  areaQuery?: { coordinates: LatLng } | { boundary: [number, number, number, number] };
  layerIds?: string[];
};

// The schema that describes the structure of the features in a layer.
type LayerSchema = {
  featureCount: number;
  // Array of attribute schemas describing the properties available on features in this layer.
  attributes: LayerSchemaAttribute[];
};

// The common schema for all attributes.
type LayerSchemaCommonAttribute = {
  id: string;
  displayName: string;
  // The specific data type of this attribute, providing more detail than the basic type.
  detailedType: string;
  // The number of distinct values present for this attribute across all features.
  distinctCount: number;
};

// The schema for a numeric attribute on a layer.
type LayerSchemaNumericAttribute = {
  id: string;
  displayName: string;
  // The specific data type of this attribute, providing more detail than the basic type.
  detailedType: string;
  // The number of distinct values present for this attribute across all features.
  distinctCount: number;
  type: "numeric";
  // A small sample of values for this attribute and their frequency.
  sampleValues: { value: number; count: number }[];
  // The minimum value present for this attribute across all features.
  min: number;
  // The maximum value present for this attribute across all features.
  max: number;
};

// The schema for a text attribute on a layer.
type LayerSchemaTextAttribute = {
  id: string;
  displayName: string;
  // The specific data type of this attribute, providing more detail than the basic type.
  detailedType: string;
  // The number of distinct values present for this attribute across all features.
  distinctCount: number;
  type: "text";
  // A small sample of string values for this attribute and their frequency.
  sampleValues: { value: string; count: number }[];
};

// The schema for a boolean attribute on a layer.
type LayerSchemaBooleanAttribute = {
  id: string;
  displayName: string;
  // The specific data type of this attribute, providing more detail than the basic type.
  detailedType: string;
  // The number of distinct values present for this attribute across all features.
  distinctCount: number;
  type: "boolean";
  // A representative sample of boolean values for this attribute and their frequency.
  sampleValues: { value: boolean; count: number }[];
};

// The schema for a date attribute on a layer.
type LayerSchemaDateAttribute = {
  id: string;
  displayName: string;
  // The specific data type of this attribute, providing more detail than the basic type.
  detailedType: string;
  // The number of distinct values present for this attribute across all features.
  distinctCount: number;
  type: "date";
  // The earliest date present for this attribute in truncated ISO8601 format (YYYY-MM-DD).
  min: string;
  // The latest date present for this attribute in truncated ISO8601 format (YYYY-MM-DD).
  max: string;
  // A representative sample of date values for this attribute and their frequency.
  sampleValues: { value: string; count: number }[];
};

// The schema for a datetime attribute on a layer.
type LayerSchemaDateTimeAttribute = {
  id: string;
  displayName: string;
  // The specific data type of this attribute, providing more detail than the basic type.
  detailedType: string;
  // The number of distinct values present for this attribute across all features.
  distinctCount: number;
  type: "datetime";
  // The earliest datetime present for this attribute in ISO8601 format.
  min: string;
  // The latest datetime present for this attribute in ISO8601 format.
  max: string;
  // A representative sample of datetime values for this attribute and their frequency.
  sampleValues: { value: string; count: number }[];
};

// The parameters for the LayersController.createLayersFromGeoJson method.
type CreateLayersFromGeoJsonParams = {
  name: string;
  source: GeoJsonUrlVectorSource | GeoJsonDataVectorSource | GeoJsonFileVectorSource;
  bounds?: [number, number, number, number];
  caption?: string;
  description?: string;
  geometryStyles?: { Point?: object; Line?: object; Polygon?: object };
};

// This describes the processing status of a layer.
type LayerProcessingStatus = "processing" | "completed" | "failed" | "incomplete";

type Layer = RasterLayer | VectorLayer | DataOnlyLayer;

// A tiled vector source is a layer that is populated from data the has been uploaded to Felt, and processed into vector tiles.
type FeltTiledVectorSource = { type: "felt"; tileTemplateUrl: string };

// Describes how the layer is displayed in the legend.
type LegendDisplay = "default" | "nameOnly";

// A single attribute from the layer schema.
type LayerSchemaAttribute = LayerSchemaNumericAttribute | LayerSchemaTextAttribute | LayerSchemaBooleanAttribute | LayerSchemaDateAttribute | LayerSchemaDateTimeAttribute;
```

### Features

```typescript
// A LayerFeature is a single geographical item in a layer.
type LayerFeature = {
  id: string | number; // The identifier of the feature, unique within the layer.
  isDeterministicId: boolean;
  layerId: string;
  geometryType: "Polygon" | "MultiPolygon" | "LineString" | "MultiLineString" | "Point" | "MultiPoint" | string & {};
  bbox: undefined | [number, number, number, number];
  properties: GeoJsonProperties;
};

// A raster pixel value for a specific layer.
type RasterValue = {
  value: number;
  layerId: string;
  categoryName: null | string;
  color: null | { r: number; g: number; b: number; a: number };
};
```

### Filters

```typescript
// The filters that are currently set on a layer.
type LayerFilters = {
  style: Filters;
  // Filters that are set in the layer's components, which are interactive elements in the legend.
  components: Filters;
  // Filters that are set ephemerally by viewers in their own session.
  ephemeral: Filters;
  combined: Filters;
};

// All the different sources for boundaries for a layer, including their combined result.
type LayerBoundaries = {
  spatialFilters: null | MultiPolygonGeometry;
  // Boundaries that are set ephemerally by viewers in their own session.
  ephemeral: null | GeometryFilter;
  combined: null | MultiPolygonGeometry;
};

type FilterLogicGate = "and" | "or";

type FilterExpression = [null | string, "in" | "ni", null | (null | string | number | boolean)[]] | [null | string, "lt" | "gt" | "le" | "ge" | "eq" | "ne" | "cn" | "nc" | "is" | "isnt", null | string | number | boolean];

// A `FilterTernary` is a tree structure for combining expressions with logical operators.
type FilterTernary = [FilterTernary | FilterExpression | null | boolean, FilterLogicGate, FilterTernary | FilterExpression | null | boolean];

// Filters can be used to change which features in a layer are rendered.
type Filters = FilterTernary | FilterExpression | null | boolean;

// The common type for filtering data by a spatial boundary.
type GeometryFilter = FeltBoundary | PolygonGeometry | MultiPolygonGeometry | LngLatTuple[];
```

### Raster

```typescript
// The parameters for calculating statistics for a raster band, passed to the LayersController.getRasterAggregates method.
type GetRasterAggregatesParams<T extends RasterAggregationMethod> = {
  layerId: string;
  // The ID of the band to calculate statistics for, such as `"band:1"`.
  band: string;
  aggregation: {
    methods: T[]; // The statistics to calculate for the band.
    // Percentile ranks between 0 and 100 to calculate, such as `[10, 50, 90]`.
    percentiles?: number[];
  };
  boundary?: RasterGeometryFilter; // The spatial boundary for the pixels to include.
  // Filters on band values for the pixels to include, such as `["band:1", "gt", 100]`.
  filters?: Filters;
};

// One percentile from the response to the LayersController.getRasterAggregates method.
type RasterPercentile = { rank: number; value: null | number };

// The response from the LayersController.getRasterAggregates method.
type GetRasterAggregatesResult<T extends RasterAggregationMethod> = {
  stats: Record<T, null | number>; // The value calculated for each requested statistic.
  percentiles?: RasterPercentile[]; // The requested percentiles, in the order they were requested.
};

// The parameters for requesting a histogram of a raster band's values, passed to the LayersController.getRasterHistogramData method.
type GetRasterHistogramParams = {
  layerId: string;
  band: string;
  // How to divide the band's values into bins, either as a number of equal intervals or as the bin edges themselves.
  steps: number[] | { type: "equal-intervals"; count: number };
  boundary?: RasterGeometryFilter; // The spatial boundary for the pixels to include.
  filters?: Filters; // Filters on band values for the pixels to include.
};

// One bin from the response to the LayersController.getRasterHistogramData method.
type RasterHistogramBin = { min: number; max: number; value: number };

// The response from the LayersController.getRasterHistogramData method.
type GetRasterHistogramResult = { bins: RasterHistogramBin[] };

// The parameters for counting the distinct values of a raster band, passed to the LayersController.getRasterCategoryData method.
type GetRasterCategoriesParams = {
  layerId: string;
  band: string;
  boundary?: RasterGeometryFilter; // The spatial boundary for the pixels to include.
  filters?: Filters; // Filters on band values for the pixels to include.
  limit?: number;
};

// One category from the response to the LayersController.getRasterCategoryData method.
type RasterCategory = {
  key: number;
  value: number;
  areaM2?: number; // The ground area of this category's pixels, in square metres.
};

// The response from the LayersController.getRasterCategoryData method.
type GetRasterCategoriesResult = {
  categories: RasterCategory[]; // The categories, most frequent first.
  // How many distinct values the band holds within the scope, which is larger than the number of categories returned when `limit` drops some.
  total: number;
};

// The parameters for sampling a raster band along a line, passed to the LayersController.getRasterProfile method.
type GetRasterProfileParams = {
  layerId: string;
  band: string;
  boundary: LineStringGeometry | MultiLineStringGeometry; // The line to sample the band along.
};

// One sample from the response to the LayersController.getRasterProfile method.
type RasterProfileSample = {
  // How far along the line this sample was taken, in ground metres from the line's start.
  distanceM: number;
  // The band's value at this sample, or `null` where the raster holds no data or the line runs outside the raster.
  value: null | number;
};

// The response from the LayersController.getRasterProfile method.
type GetRasterProfileResult = {
  samples: RasterProfileSample[]; // The samples, ordered from the line's start.
  // The mean distance between consecutive samples, in ground metres.
  spacingM?: number;
};

// The spatial boundary for a raster statistic.
type RasterGeometryFilter = GeometryFilter | LineStringGeometry | MultiLineStringGeometry;

// A statistic that can be calculated for a raster band.
type RasterAggregationMethod = "min" | "max" | "avg" | "sum" | "median" | "stddev" | "majority" | "area";
```

### Stats

```typescript
// Defines how to aggregate a value across features in a layer.
type AggregationConfig = { attribute: string; method: "min" | "max" | "avg" | "sum" | "median" };

// Defines how to aggregate a value across features in a layer with multiple aggregations returned at once.
type MultiAggregationConfig<T extends AggregationMethod | "count"> = {
  // The operations to use on the values from the features in the layer
  methods: T[];
  // The attribute ID to use for the aggregation when aggregations other than "count" are used.
  attribute?: string;
};

// Configuration for filtering and aggregating values across features.
type ValueConfiguration = {
  boundary?: GeometryFilter; // The spatial boundary for what to count or aggregate.
  // Attribute filters to determine what gets counted or aggregated.
  filters?: Filters;
  // Specifies how to aggregate values within each category or bin.
  aggregation?: AggregationConfig;
};

// The parameters for getting categories from a layer, passed to the LayersController.getCategoryData method.
type GetLayerCategoriesParams = {
  layerId: string;
  attribute: string;
  limit?: number;
  // Attribute filters for the features to include when calculating the categories.
  filters?: Filters;
  // The spatial boundary for the features to include when calculating the categories.
  boundary?: GeometryFilter;
  // Configuration for filtering and aggregating values while preserving the full set of categories in the results.
  values?: ValueConfiguration;
};

// A single category from the response from the LayersController.getCategoryData method.
type GetLayerCategoriesGroup = {
  key: string | number | boolean; // The category for which the value was calculated.
  // The value calculated for the category, whether a count, sum, average, etc.
  value: null | number;
};

// The params used to request a histogram of values from a layer, passed to the LayersController.getHistogramData method.
type GetLayerHistogramParams = {
  layerId: string;
  attribute: string;
  steps: number[] | { type: "equal-intervals"; count: number } | {
    type: "time-interval";
    interval: "hour" | "day" | "week" | "month" | "year";
  };
  // Configuration for filtering and aggregating values while preserving the full set of bin ranges in the results.
  values?: {
    boundary?: [number, number][] | [number, number, number, number] | { type: "Polygon"; coordinates: [number, number][][] } | { type: "MultiPolygon"; coordinates: [number, number][][][] };
    filters?: null | boolean | [null | string, "in" | "ni", null | (null | string | number | boolean)[]] | [null | string, "lt" | "gt" | "le" | "ge" | "eq" | "ne" | "cn" | "nc" | "is" | "isnt", null | string | number | boolean] | FilterTernary;
    aggregation?: {
      // The operation to use on the values from the features in the layer
      method: "min" | "max" | "avg" | "sum" | "median";
      attribute: string;
    };
  };
  // Attribute filters for the features to include when calculating the histogram bins.
  filters?: Filters;
  // The spatial boundary for the features to include when calculating the histogram bins.
  boundary?: GeometryFilter;
};

// One bin from the response from the LayersController.getHistogramData method.
type GetLayerHistogramBin = { min: number; max: number; value: number };

// The parameters for calculating a single aggregate value for a layer, passed to the LayersController.getAggregates method.
type GetLayerCalculationParams<T extends AggregationMethod | "count"> = {
  layerId: string;
  // Specifies how to aggregate values within each category or bin.
  aggregation: MultiAggregationConfig<T>;
  // Attribute filters for the features to include when calculating the aggregate value.
  filters?: Filters;
  // The spatial boundary for the features to include when calculating the aggregate value.
  boundary?: GeometryFilter;
};

// The grid configuration for a count-based precomputed aggregate value.
type CountGridConfig = {
  resolution: number;
  type: "h3";
  // The method to use for the precomputed calculation, which in this case is always "count".
  method: "count";
};

// The grid configuration for an aggregated precomputed aggregate value.
type AggregatedGridConfig = {
  resolution: number;
  attribute: string;
  type: "h3";
  method: "min" | "max" | "avg" | "sum";
};

// The parameters for calculating a single aggregate value for a layer, passed to the LayersController.getPrecomputedAggregates method.
type GetLayerPrecomputedCalculationParams = {
  layerId: string;
  gridConfig: GridConfig;
  // Attribute filters for the features to include when calculating the aggregate value.
  filters?: Filters;
  // The spatial boundary for the features to include when calculating the aggregate value.
  boundary?: GeometryFilter;
};

// The method to use for the aggregation.
type AggregationMethod = "min" | "max" | "avg" | "sum" | "median";

// The method to use for the precomputed aggregation.
type PrecomputedAggregationMethod = "min" | "max" | "avg" | "sum" | "count";

// The type of grid to use for precomputed aggregate values.
type GridType = "h3";

// Describes the type of grid to use for precomputed aggregate values.
type GridConfig = CountGridConfig | AggregatedGridConfig;
```

### Methods

```typescript
// Get a single layer from the map by its id.
async function getLayer(id: string): Promise<null | Layer>;

// Gets layers from the map, according to the constraints supplied.
async function getLayers(constraint?: GetLayersConstraint): Promise<(null | Layer)[]>;

// Hide or show layers with the given ids.
async function setLayerVisibility(visibility: SetVisibilityRequest): Promise<void>;

// Set the style for a layer using FSL, the Felt Style Language.
async function setLayerStyle(params: { id: string; style: object }): Promise<void>;

// Hide or show layers with the given ids from the legend.
async function setLayerLegendVisibility(params: SetVisibilityRequest): Promise<void>;

// Adds layers to the map from file or URL sources.
async function createLayersFromGeoJson(params: CreateLayersFromGeoJsonParams): Promise<null | {
  // The layer group that was created containing the created layers.
  layerGroup: LayerGroup;
  layers: Layer[]; // The layers that were created from the source.
}>;

// Update a layer by passing a subset of the layer's properties.
async function updateLayer(params: UpdateLayerParams): Promise<Layer>;

// Delete a layer from the map by its id.
async function deleteLayer(id: string): Promise<void>;

// Duplicate a layer from the map by its id.
async function duplicateLayer(id: string): Promise<Layer>;

// Get a layer group from the map by its id.
async function getLayerGroup(id: string): Promise<null | LayerGroup>;

// Gets layer groups from the map, according to the constraints supplied.
async function getLayerGroups(constraint?: GetLayerGroupsConstraint): Promise<(null | LayerGroup)[]>;

// Hide or show layer groups with the given ids.
async function setLayerGroupVisibility(visibility: SetVisibilityRequest): Promise<void>;

// Hide or show layer groups with the given ids from the legend.
async function setLayerGroupLegendVisibility(params: SetVisibilityRequest): Promise<void>;

// Allows you to get the state of a single legend item.
async function getLegendItem(id: LegendItemIdentifier): Promise<null | LegendItem>;

// Allows you to obtain the state of several legend items, by passing in constraints describing which legend items you want.
async function getLegendItems(constraint?: LegendItemsConstraint): Promise<(null | LegendItem)[]>;

// Hide or show legend items with the given identifiers.
async function setLegendItemVisibility(visibility: { show?: LegendItemIdentifier[]; hide?: LegendItemIdentifier[] }): Promise<void>;

// Get the filters for a layer.
async function getLayerFilters(layerId: string): Promise<null | LayerFilters>;

// Sets the **ephemeral** filters for a layer.
async function setLayerFilters(params: {
  layerId: string;
  filters: Filters;
  // A note to display on the layer legend when this filter is applied.
  note?: string;
}): Promise<void>;

// Get the spatial boundaries that are filtering a layer.
async function getLayerBoundaries(layerId: string): Promise<null | LayerBoundaries>;

// Set the `ephemeral` boundary for one or more layers.
async function setLayerBoundary(params: { layerIds: string[]; boundary: null | GeometryFilter }): Promise<void>;

// Get the features that are currently **rendered** on the map in the viewport.
async function getRenderedFeatures(params?: GetRenderedFeaturesConstraint): Promise<LayerFeature[]>;

// Get a feature from the map by its ID and layer ID.
async function getFeature(params: { id: string | number; layerId: string }): Promise<null | LayerFeature>;

// Get a list of layer features.
async function getFeatures(params: {
  layerId: string;
  filters?: Filters;
  sorting?: SortConfig;
  boundary?: GeometryFilter;
  search?: string;
  pagination?: null | string;
  pageSize?: number; // The number of features to return per page.
  select?: string[]; // The attributes to select from the features.
}): Promise<{
  features: LayerFeature[]; // The list of features returned from the query.
  count: number; // The total number of features that match the query.
  previousPage: null | string; // The pagination token to get the previous page of features.
  nextPage: null | string; // The pagination token to get the next page of features.
}>;

// Get a feature in GeoJSON format from the map by its ID and layer ID.
async function getGeoJsonFeature(params: { id: string | number; layerId: string }): Promise<null | GeoJsonFeature>;

// Gets values from a layer grouped by a given attribute.
async function getCategoryData(params: GetLayerCategoriesParams): Promise<GetLayerCategoriesGroup[]>;

// Gets a histogram of values from a layer for a given attribute.
async function getHistogramData(params: GetLayerHistogramParams): Promise<GetLayerHistogramBin[]>;

// Calculates a single aggregate value for a layer based on the provided configuration.
async function getAggregates<T extends "min" | "max" | "avg" | "sum" | "median" | "count">(params: GetLayerCalculationParams<T>): Promise<Record<T, null | number>>;

// Calculates aggregates for spatial cells of a layer.
async function getPrecomputedAggregates(params: GetLayerPrecomputedCalculationParams): Promise<{
  avg: null | number;
  max: null | number;
  min: null | number;
  sum: null | number;
  count: null | number;
}>;

// Calculates statistics for a raster band.
async function getRasterAggregates<T extends "min" | "max" | "avg" | "sum" | "median" | "stddev" | "majority" | "area">(params: GetRasterAggregatesParams<T>): Promise<GetRasterAggregatesResult<T>>;

// Calculates a histogram of a raster band's values.
async function getRasterHistogramData(params: GetRasterHistogramParams): Promise<GetRasterHistogramResult>;

// Counts the pixels holding each distinct value of a raster band.
async function getRasterCategoryData(params: GetRasterCategoriesParams): Promise<GetRasterCategoriesResult>;

// Samples a raster band's values along a line.
async function getRasterProfile(params: GetRasterProfileParams): Promise<GetRasterProfileResult>;

// Get the schema for a layer.
async function getLayerSchema(layerId: string): Promise<LayerSchema>;
```

### Events

```typescript
// Adds a listener for when a layer changes.
function onLayerChange(args: {
  options: {
    id: string; // The id of the layer to listen for changes to.
  };
  handler: (change: LayerChangeCallbackParams) => void;
}): VoidFunction;

// Adds a listener for when a layer group changes.
function onLayerGroupChange(args: {
  options: { id: string };
  handler: (change: LayerGroupChangeCallbackParams) => void;
}): VoidFunction;

// Adds a listener for when a legend item changes.
function onLegendItemChange(args: {
  options: LegendItemIdentifier;
  handler: (change: LegendItemChangeCallbackParams) => void;
}): VoidFunction;

// Adds a listener for when a layer's filters change.
function onLayerFiltersChange(params: { options: { layerId: string }; handler: (change: LayerFilters) => void }): VoidFunction;

// Adds a listener for when a layer's spatial boundaries change.
function onLayerBoundariesChange(params: {
  options: {
    layerId: string; // The id of the layer to listen for boundary changes on.
  };
  handler: (boundaries: null | LayerBoundaries) => void; // A function that is called when the boundaries change.
}): VoidFunction;
```

## Elements

```typescript
type PlaceElementCreate = {
  type: "Place";
  coordinates: LngLatTuple;
  groupId?: null | string;
  color?: string; // The color of the element in some CSS-like format.
  name?: null | string;
  // Text describing the element, which is shown in an element's popup when it is selected.
  description?: null | string;
  // A set of key-value pairs that can be used to store arbitrary data about the element.
  attributes?: Record<string, unknown>;
  interaction?: "default" | "locked";
  imageUrl?: null | string; // The URL of an image that has been added to the element.
  symbol?: string;
  frame?: null | "frame-circle" | "frame-square"; // The frame that is rendered around the Place's symbol.
  hideLabel?: boolean; // Whether the element's label is hidden on the map.
};

type PathElementCreate = {
  type: "Path";
  coordinates: LngLatTuple[][];
  groupId?: null | string;
  color?: string; // The color of the element in some CSS-like format.
  name?: null | string;
  // Text describing the element, which is shown in an element's popup when it is selected.
  description?: null | string;
  // A set of key-value pairs that can be used to store arbitrary data about the element.
  attributes?: Record<string, unknown>;
  interaction?: "default" | "locked";
  imageUrl?: null | string; // The URL of an image that has been added to the element.
  strokeOpacity?: number;
  strokeWidth?: number;
  strokeStyle?: "solid" | "dashed" | "dotted";
  // Whether a distance marker is shown at the midpoint of the path.
  distanceMarker?: boolean;
  // Whether this represents a route, and if so, what mode of transport is used.
  routingMode?: null | "driving" | "cycling" | "walking" | "flying";
  endCaps?: boolean; // Whether or not to show Start and End caps on the path.
};

type PolygonElementCreate = {
  type: "Polygon";
  coordinates: LngLatTuple[][];
  groupId?: null | string;
  color?: string; // The color of the element in some CSS-like format.
  name?: null | string;
  // Text describing the element, which is shown in an element's popup when it is selected.
  description?: null | string;
  // A set of key-value pairs that can be used to store arbitrary data about the element.
  attributes?: Record<string, unknown>;
  interaction?: "default" | "locked";
  imageUrl?: null | string; // The URL of an image that has been added to the element.
  strokeOpacity?: number;
  strokeWidth?: number;
  strokeStyle?: "solid" | "dashed" | "dotted";
  fillOpacity?: number;
  areaMarker?: boolean;
};

type CircleElementCreate = {
  type: "Circle";
  radius: number;
  center: LngLatTuple;
  groupId?: null | string;
  color?: string; // The color of the element in some CSS-like format.
  name?: null | string;
  // Text describing the element, which is shown in an element's popup when it is selected.
  description?: null | string;
  // A set of key-value pairs that can be used to store arbitrary data about the element.
  attributes?: Record<string, unknown>;
  interaction?: "default" | "locked";
  imageUrl?: null | string; // The URL of an image that has been added to the element.
  strokeOpacity?: number;
  strokeWidth?: number;
  strokeStyle?: "solid" | "dashed" | "dotted";
  // Whether to show a marker on the circle that indicates the radius
  radiusMarker?: boolean;
  // The angle at which the control point for setting the radius is displayed, in degrees.
  radiusDisplayAngle?: number;
  radiusDisplayUnit?: null | "meter" | "kilometer" | "foot" | "mile";
  fillOpacity?: number;
};

type MarkerElementCreate = {
  type: "Marker";
  coordinates: LngLatTuple[][];
  groupId?: null | string;
  color?: string; // The color of the element in some CSS-like format.
  name?: null | string;
  // Text describing the element, which is shown in an element's popup when it is selected.
  description?: null | string;
  // A set of key-value pairs that can be used to store arbitrary data about the element.
  attributes?: Record<string, unknown>;
  interaction?: "default" | "locked";
  opacity?: number;
  // The size of the marker, used in conjunction with the `zoom` to determine the actual size of the marker.
  size?: number;
  zoom?: number; // The zoom level at which the marker was created.
};

type HighlighterElementCreate = {
  type: "Highlighter";
  coordinates: LngLatTuple[][][]; // A multipolygon describing the area that is highlighted.
  groupId?: null | string;
  color?: string; // The color of the element in some CSS-like format.
  name?: null | string;
  // Text describing the element, which is shown in an element's popup when it is selected.
  description?: null | string;
  // A set of key-value pairs that can be used to store arbitrary data about the element.
  attributes?: Record<string, unknown>;
  interaction?: "default" | "locked";
  renderHoles?: boolean; // Whether to render the holes of the highlighted area.
  opacity?: number;
};

type TextElementCreate = {
  type: "Text";
  text: string;
  groupId?: null | string;
  color?: string; // The color of the element in some CSS-like format.
  // Text describing the element, which is shown in an element's popup when it is selected.
  description?: null | string;
  // A set of key-value pairs that can be used to store arbitrary data about the element.
  attributes?: Record<string, unknown>;
  interaction?: "default" | "locked";
  rotation?: number;
  scale?: number; // The relative scale of the element from the default size.
  zoom?: number; // The zoom level at which the element was created.
  align?: "center" | "left" | "right";
  style?: "light" | "italic" | "regular" | "caps";
  position?: LngLatTuple;
};

type NoteElementCreate = {
  type: "Note";
  text: string;
  groupId?: null | string;
  color?: string; // The color of the element in some CSS-like format.
  // Text describing the element, which is shown in an element's popup when it is selected.
  description?: null | string;
  // A set of key-value pairs that can be used to store arbitrary data about the element.
  attributes?: Record<string, unknown>;
  interaction?: "default" | "locked";
  rotation?: number;
  scale?: number; // The relative scale of the element from the default size.
  zoom?: number; // The zoom level at which the element was created.
  // The alignment of the text, either `left`, `center` or `right`.
  align?: "center" | "left" | "right";
  style?: "light" | "italic" | "regular" | "caps";
  widthScale?: number;
  position?: LngLatTuple;
};

type ImageElementCreate = {
  type: "Image";
  coordinates: [number, number][][];
  imageUrl: string;
  groupId?: null | string;
  name?: null | string;
  // Text describing the element, which is shown in an element's popup when it is selected.
  description?: null | string;
  // A set of key-value pairs that can be used to store arbitrary data about the element.
  attributes?: Record<string, unknown>;
  interaction?: "default" | "locked";
  opacity?: number;
};

type PlaceElementRead = {
  id: string;
  groupId: null | string;
  color: string; // The color of the element in some CSS-like format.
  name: null | string;
  // Text describing the element, which is shown in an element's popup when it is selected.
  description: null | string;
  // A set of key-value pairs that can be used to store arbitrary data about the element.
  attributes: Record<string, unknown>;
  imageUrl: null | string; // The URL of an image that has been added to the element.
  type: "Place";
  symbol: string;
  frame: null | "frame-circle" | "frame-square"; // The frame that is rendered around the Place's symbol.
  hideLabel: boolean; // Whether the element's label is hidden on the map.
  coordinates: LngLatTuple;
  interaction?: "default" | "locked";
};

type PathElementRead = {
  id: string;
  groupId: null | string;
  color: string; // The color of the element in some CSS-like format.
  name: null | string;
  // Text describing the element, which is shown in an element's popup when it is selected.
  description: null | string;
  // A set of key-value pairs that can be used to store arbitrary data about the element.
  attributes: Record<string, unknown>;
  imageUrl: null | string; // The URL of an image that has been added to the element.
  strokeOpacity: number;
  strokeWidth: number;
  strokeStyle: "solid" | "dashed" | "dotted";
  type: "Path";
  // Whether a distance marker is shown at the midpoint of the path.
  distanceMarker: boolean;
  // Whether this represents a route, and if so, what mode of transport is used.
  routingMode: null | "driving" | "cycling" | "walking" | "flying";
  endCaps: boolean; // Whether or not to show Start and End caps on the path.
  interaction?: "default" | "locked";
};

type PolygonElementRead = {
  id: string;
  groupId: null | string;
  color: string; // The color of the element in some CSS-like format.
  name: null | string;
  // Text describing the element, which is shown in an element's popup when it is selected.
  description: null | string;
  // A set of key-value pairs that can be used to store arbitrary data about the element.
  attributes: Record<string, unknown>;
  imageUrl: null | string; // The URL of an image that has been added to the element.
  strokeOpacity: number;
  strokeWidth: number;
  strokeStyle: "solid" | "dashed" | "dotted";
  type: "Polygon";
  fillOpacity: number;
  areaMarker: boolean;
  interaction?: "default" | "locked";
};

type CircleElementRead = {
  id: string;
  groupId: null | string;
  color: string; // The color of the element in some CSS-like format.
  name: null | string;
  // Text describing the element, which is shown in an element's popup when it is selected.
  description: null | string;
  // A set of key-value pairs that can be used to store arbitrary data about the element.
  attributes: Record<string, unknown>;
  imageUrl: null | string; // The URL of an image that has been added to the element.
  strokeOpacity: number;
  strokeWidth: number;
  strokeStyle: "solid" | "dashed" | "dotted";
  type: "Circle";
  radius: number;
  // Whether to show a marker on the circle that indicates the radius
  radiusMarker: boolean;
  // The angle at which the control point for setting the radius is displayed, in degrees.
  radiusDisplayAngle: number;
  radiusDisplayUnit: null | "meter" | "kilometer" | "foot" | "mile";
  fillOpacity: number;
  center: LngLatTuple;
  interaction?: "default" | "locked";
};

type MarkerElementRead = {
  id: string;
  groupId: null | string;
  color: string; // The color of the element in some CSS-like format.
  name: null | string;
  // Text describing the element, which is shown in an element's popup when it is selected.
  description: null | string;
  // A set of key-value pairs that can be used to store arbitrary data about the element.
  attributes: Record<string, unknown>;
  type: "Marker";
  opacity: number;
  // The size of the marker, used in conjunction with the `zoom` to determine the actual size of the marker.
  size: number;
  zoom: number; // The zoom level at which the marker was created.
  interaction?: "default" | "locked";
};

type HighlighterElementRead = {
  id: string;
  groupId: null | string;
  color: string; // The color of the element in some CSS-like format.
  name: null | string;
  // Text describing the element, which is shown in an element's popup when it is selected.
  description: null | string;
  // A set of key-value pairs that can be used to store arbitrary data about the element.
  attributes: Record<string, unknown>;
  type: "Highlighter";
  renderHoles: boolean; // Whether to render the holes of the highlighted area.
  opacity: number;
  interaction?: "default" | "locked";
};

type TextElementRead = {
  id: string;
  groupId: null | string;
  color: string; // The color of the element in some CSS-like format.
  // Text describing the element, which is shown in an element's popup when it is selected.
  description: null | string;
  // A set of key-value pairs that can be used to store arbitrary data about the element.
  attributes: Record<string, unknown>;
  rotation: number;
  scale: number; // The relative scale of the element from the default size.
  zoom: number; // The zoom level at which the element was created.
  text: string;
  align: "center" | "left" | "right";
  style: "light" | "italic" | "regular" | "caps";
  // The text shown in the element, which is identical to the `text` property.
  name: string;
  type: "Text";
  position: LngLatTuple;
  interaction?: "default" | "locked";
};

type NoteElementRead = {
  id: string;
  groupId: null | string;
  color: string; // The color of the element in some CSS-like format.
  // Text describing the element, which is shown in an element's popup when it is selected.
  description: null | string;
  // A set of key-value pairs that can be used to store arbitrary data about the element.
  attributes: Record<string, unknown>;
  rotation: number;
  scale: number; // The relative scale of the element from the default size.
  zoom: number; // The zoom level at which the element was created.
  text: string;
  // The alignment of the text, either `left`, `center` or `right`.
  align: "center" | "left" | "right";
  style: "light" | "italic" | "regular" | "caps";
  // The text shown in the element, which is identical to the `text` property.
  name: string;
  type: "Note";
  widthScale: number;
  position: LngLatTuple;
  interaction?: "default" | "locked";
};

type ImageElementRead = {
  id: string;
  groupId: null | string;
  name: null | string;
  // Text describing the element, which is shown in an element's popup when it is selected.
  description: null | string;
  // A set of key-value pairs that can be used to store arbitrary data about the element.
  attributes: Record<string, unknown>;
  type: "Image";
  imageUrl: string;
  opacity: number;
  interaction?: "default" | "locked";
};

type LinkElementRead = {
  id: string;
  groupId: null | string;
  color: string; // The color of the element in some CSS-like format.
  name: null | string;
  // Text describing the element, which is shown in an element's popup when it is selected.
  description: null | string;
  // A set of key-value pairs that can be used to store arbitrary data about the element.
  attributes: Record<string, unknown>;
  type: "Link";
  url: string;
  interaction?: "default" | "locked";
};

type PlaceElementUpdate = {
  id: string;
  type: "Place";
  groupId?: null | string;
  color?: string; // The color of the element in some CSS-like format.
  name?: null | string;
  // Text describing the element, which is shown in an element's popup when it is selected.
  description?: null | string;
  // A set of key-value pairs that can be used to store arbitrary data about the element.
  attributes?: Record<string, unknown>;
  interaction?: "default" | "locked";
  imageUrl?: null | string; // The URL of an image that has been added to the element.
  symbol?: string;
  frame?: null | "frame-circle" | "frame-square"; // The frame that is rendered around the Place's symbol.
  hideLabel?: boolean; // Whether the element's label is hidden on the map.
  coordinates?: LngLatTuple;
};

type PathElementUpdate = {
  id: string;
  type: "Path";
  groupId?: null | string;
  color?: string; // The color of the element in some CSS-like format.
  name?: null | string;
  // Text describing the element, which is shown in an element's popup when it is selected.
  description?: null | string;
  // A set of key-value pairs that can be used to store arbitrary data about the element.
  attributes?: Record<string, unknown>;
  interaction?: "default" | "locked";
  imageUrl?: null | string; // The URL of an image that has been added to the element.
  strokeOpacity?: number;
  strokeWidth?: number;
  strokeStyle?: "solid" | "dashed" | "dotted";
  // Whether a distance marker is shown at the midpoint of the path.
  distanceMarker?: boolean;
  // Whether this represents a route, and if so, what mode of transport is used.
  routingMode?: null | "driving" | "cycling" | "walking" | "flying";
  endCaps?: boolean; // Whether or not to show Start and End caps on the path.
  coordinates?: LngLatTuple[][];
};

type PolygonElementUpdate = {
  id: string;
  type: "Polygon";
  groupId?: null | string;
  color?: string; // The color of the element in some CSS-like format.
  name?: null | string;
  // Text describing the element, which is shown in an element's popup when it is selected.
  description?: null | string;
  // A set of key-value pairs that can be used to store arbitrary data about the element.
  attributes?: Record<string, unknown>;
  interaction?: "default" | "locked";
  imageUrl?: null | string; // The URL of an image that has been added to the element.
  strokeOpacity?: number;
  strokeWidth?: number;
  strokeStyle?: "solid" | "dashed" | "dotted";
  fillOpacity?: number;
  areaMarker?: boolean;
  coordinates?: LngLatTuple[][];
};

type CircleElementUpdate = {
  id: string;
  type: "Circle";
  groupId?: null | string;
  color?: string; // The color of the element in some CSS-like format.
  name?: null | string;
  // Text describing the element, which is shown in an element's popup when it is selected.
  description?: null | string;
  // A set of key-value pairs that can be used to store arbitrary data about the element.
  attributes?: Record<string, unknown>;
  interaction?: "default" | "locked";
  imageUrl?: null | string; // The URL of an image that has been added to the element.
  strokeOpacity?: number;
  strokeWidth?: number;
  strokeStyle?: "solid" | "dashed" | "dotted";
  radius?: number;
  // Whether to show a marker on the circle that indicates the radius
  radiusMarker?: boolean;
  // The angle at which the control point for setting the radius is displayed, in degrees.
  radiusDisplayAngle?: number;
  radiusDisplayUnit?: null | "meter" | "kilometer" | "foot" | "mile";
  fillOpacity?: number;
  center?: LngLatTuple;
};

type MarkerElementUpdate = {
  id: string;
  type: "Marker";
  groupId?: null | string;
  color?: string; // The color of the element in some CSS-like format.
  name?: null | string;
  // Text describing the element, which is shown in an element's popup when it is selected.
  description?: null | string;
  // A set of key-value pairs that can be used to store arbitrary data about the element.
  attributes?: Record<string, unknown>;
  interaction?: "default" | "locked";
  opacity?: number;
  // The size of the marker, used in conjunction with the `zoom` to determine the actual size of the marker.
  size?: number;
  zoom?: number; // The zoom level at which the marker was created.
  coordinates?: LngLatTuple[][];
};

type HighlighterElementUpdate = {
  id: string;
  type: "Highlighter";
  groupId?: null | string;
  color?: string; // The color of the element in some CSS-like format.
  name?: null | string;
  // Text describing the element, which is shown in an element's popup when it is selected.
  description?: null | string;
  // A set of key-value pairs that can be used to store arbitrary data about the element.
  attributes?: Record<string, unknown>;
  interaction?: "default" | "locked";
  renderHoles?: boolean; // Whether to render the holes of the highlighted area.
  opacity?: number;
  coordinates?: LngLatTuple[][][]; // A multipolygon describing the area that is highlighted.
};

type TextElementUpdate = {
  id: string;
  type: "Text";
  groupId?: null | string;
  color?: string; // The color of the element in some CSS-like format.
  // Text describing the element, which is shown in an element's popup when it is selected.
  description?: null | string;
  // A set of key-value pairs that can be used to store arbitrary data about the element.
  attributes?: Record<string, unknown>;
  interaction?: "default" | "locked";
  rotation?: number;
  scale?: number; // The relative scale of the element from the default size.
  zoom?: number; // The zoom level at which the element was created.
  text?: string;
  align?: "center" | "left" | "right";
  style?: "light" | "italic" | "regular" | "caps";
  position?: LngLatTuple;
};

type NoteElementUpdate = {
  id: string;
  type: "Note";
  groupId?: null | string;
  color?: string; // The color of the element in some CSS-like format.
  // Text describing the element, which is shown in an element's popup when it is selected.
  description?: null | string;
  // A set of key-value pairs that can be used to store arbitrary data about the element.
  attributes?: Record<string, unknown>;
  interaction?: "default" | "locked";
  rotation?: number;
  scale?: number; // The relative scale of the element from the default size.
  zoom?: number; // The zoom level at which the element was created.
  text?: string;
  // The alignment of the text, either `left`, `center` or `right`.
  align?: "center" | "left" | "right";
  style?: "light" | "italic" | "regular" | "caps";
  widthScale?: number;
  position?: LngLatTuple;
};

type ImageElementUpdate = {
  id: string;
  type: "Image";
  groupId?: null | string;
  name?: null | string;
  // Text describing the element, which is shown in an element's popup when it is selected.
  description?: null | string;
  // A set of key-value pairs that can be used to store arbitrary data about the element.
  attributes?: Record<string, unknown>;
  interaction?: "default" | "locked";
  coordinates?: [number, number][][];
  imageUrl?: string;
  opacity?: number;
};

type ElementGroup = {
  id: string;
  name: string;
  caption: null | string;
  elementIds: string[];
  visible: boolean;
  shownInLegend: boolean;
};

// The constraints to apply when getting elements.
type GetElementsConstraint = { ids?: string[] };

// The constraints to apply when getting element groups.
type GetElementGroupsConstraint = { ids?: string[] };

// The parameters for the `onElementChange` and the `onElementCreate` listeners.
type ElementChangeCallbackParams = {
  // The new data for the element or null if the element was removed.
  element: null | Element;
  // Whether or not this element is still being created by a drawing tool.
  isBeingCreated: boolean;
};

// The parameters for the `onElementGroupChange` listener.
type ElementGroupChangeCallbackParams = { elementGroup: null | ElementGroup };

type ElementCreate = PlaceElementCreate | PathElementCreate | PolygonElementCreate | CircleElementCreate | MarkerElementCreate | HighlighterElementCreate | ImageElementCreate | TextElementCreate | NoteElementCreate;

type ElementUpdate = PlaceElementUpdate | PathElementUpdate | PolygonElementUpdate | CircleElementUpdate | MarkerElementUpdate | HighlighterElementUpdate | TextElementUpdate | NoteElementUpdate | ImageElementUpdate;

type Element = PlaceElementRead | PathElementRead | PolygonElementRead | CircleElementRead | MarkerElementRead | HighlighterElementRead | TextElementRead | NoteElementRead | ImageElementRead | LinkElementRead;
```

### Methods

```typescript
// Get a single element from the map by its id.
async function getElement(id: string): Promise<null | Element>;

// Get the geometry of an element in GeoJSON geometry format.
async function getElementGeometry(id: string): Promise<null | GeoJsonGeometry>;

// Gets elements from the map, according to the constraints supplied.
async function getElements(constraint?: GetElementsConstraint): Promise<(null | Element)[]>;

// Get an element group from the map by its id.
async function getElementGroup(id: string): Promise<null | ElementGroup>;

// Gets element groups from the map, according to the filters supplied.
async function getElementGroups(constraint?: GetElementGroupsConstraint): Promise<(null | ElementGroup)[]>;

// Hide or show element groups with the given ids.
async function setElementGroupVisibility(visibility: SetVisibilityRequest): Promise<void>;

// Create a new element on the map.
async function createElement(element: ElementCreate): Promise<Element>;

// Update an element on the map.
async function updateElement(element: ElementUpdate): Promise<Element>;

// Delete an element from the map.
async function deleteElement(id: string): Promise<void>;
```

### Events

```typescript
// Adds a listener for when an element is created.
function onElementCreate(args: { handler: (change: ElementChangeCallbackParams) => void }): VoidFunction;

// Listens for when a new element is finished being created by a drawing tool.
function onElementCreateEnd(args: {
  handler: (params: { element: Element }) => void; // The handler to call whenever this event fires.
}): VoidFunction;

// Adds a listener for when an element changes.
function onElementChange(args: {
  options: { id: string };
  handler: (change: ElementChangeCallbackParams) => void;
}): VoidFunction;

// Adds a listener for when an element is deleted.
function onElementDelete(args: { options: { id: string }; handler: () => void }): VoidFunction;

// Adds a listener for when an element group changes.
function onElementGroupChange(args: {
  options: { id: string };
  handler: (change: ElementGroupChangeCallbackParams) => void;
}): VoidFunction;
```

## Selection

```typescript
// References an element on the map.
type ElementNode = { type: "element"; entity: Element };

// References an element group.
type ElementGroupNode = { type: "elementGroup"; entity: ElementGroup };

// References a layer on the map.
type LayerNode = { type: "layer"; entity: Layer };

// References a layer group on the map.
type LayerGroupNode = { type: "layerGroup"; entity: LayerGroup };

// References a feature on the map.
type FeatureNode = { type: "feature"; entity: LayerFeature };

// The options for selecting a feature in a layer.
type FeatureSelection = {
  id: string | number;
  layerId: string;
  // Whether to show the feature's popup, if it is configured in the layer's style.
  showPopup?: boolean;
  // Whether to center the view on the feature after selecting it.
  fitViewport?: boolean | { maxZoom: number };
};

// A reference to any kind of entity in the map.
type EntityNode = ElementNode | ElementGroupNode | LayerNode | LayerGroupNode | FeatureNode;
```

### Methods

```typescript
// Gets the current selection as a list of entity identifiers.
async function getSelection(): Promise<EntityNode[]>;

// Selects a feature on a layer.
async function selectFeature(params: FeatureSelection): Promise<void>;

// Clears the current selection (elements, features or both).
async function clearSelection(params?: {
  features?: boolean; // Whether to clear the features from the selection.
  elements?: boolean; // Whether to clear the elements from the selection.
}): Promise<void>;
```

### Events

```typescript
// Adds a listener for when the selection changes.
function onSelectionChange(params: { handler: (change: { selection: EntityNode[] }) => void }): VoidFunction;
```

## Interactions

```typescript
// The event object passed to the interaction listeners.
type MapInteractionEvent = {
  coordinate: LatLng; // The cursor position in world coordinates.
  // The pixel coordinates of the mouse cursor, relative to the map and measured from the top left corner.
  point: { x: number; y: number };
  features: LayerFeature[]; // The vector features that are under the cursor.
  rasterValues: RasterValue[]; // The raster pixel values that are under the cursor.
};
```

### Events

```typescript
// Allows you to be notified when the user clicks on the map.
function onPointerClick(params: { handler: (event: MapInteractionEvent) => void }): VoidFunction;

// Allows you to be notified when the user moves the mouse over the map.
function onPointerMove(params: { handler: (event: MapInteractionEvent) => void }): VoidFunction;
```

## Basemaps

```typescript
type FeltBasemap = {
  id: string;
  name: string;
  uiColorScheme: "light" | "dark";
  type: "felt";
  theme: "color_light" | "monochrome_dark" | "monochrome_light" | "satellite";
  attribution?: string;
};

type ColorBasemap = {
  id: string;
  name: string;
  uiColorScheme: "light" | "dark";
  type: "color";
  color: string;
  attribution?: string;
};

type CustomTileBasemap = {
  id: string;
  name: string;
  uiColorScheme: "light" | "dark";
  type: "xyz_tile";
  tileUrl: string;
  attribution?: string;
};

type ColorBasemapInput = Omit<ColorBasemap, "id">;

type CustomTileBasemapInput = Omit<CustomTileBasemap, "id">;

type Basemap = FeltBasemap | ColorBasemap | CustomTileBasemap;
```

### Methods

```typescript
// Gets the currently active basemap.
async function getCurrentBasemap(): Promise<Basemap>;

// Gets all basemaps available on the map.
async function getBasemaps(): Promise<Basemap[]>;

// Chooses the basemap to use for the map.
function chooseBasemap(id: string): void;

// Adds a custom basemap to the map.
async function addCustomBasemap(args: {
  basemap: ColorBasemapInput | CustomTileBasemapInput;
  select?: boolean; // Whether to select the basemap after adding it.
}): Promise<Basemap>;

// Removes a basemap from the list of available basemaps.
async function removeBasemap(id: string): Promise<void>;
```

### Events

```typescript
// Adds a listener for when the basemap changes.
function onBasemapChange(args: { handler: (basemap: Basemap) => void }): VoidFunction;
```

## Tools

```typescript
type PinToolSettings = {
  color: string; // The color of the element in some CSS-like format.
  frame: null | "frame-circle" | "frame-square"; // The frame that is rendered around the Place's symbol.
  showInspector: boolean;
  symbol: PlaceSymbol;
  afterCreation: "select" | "enter name" | "add another"; // What to do after creating the Place element.
};

type LineToolSettings = {
  color: string; // The color of the element in some CSS-like format.
  // A value between 0 and 1 that describes the opacity of the element's stroke.
  strokeOpacity: number;
  strokeWidth: number;
  strokeStyle: "solid" | "dashed" | "dotted";
  // Whether a distance marker is shown at the midpoint of the path.
  distanceMarker: boolean;
  showInspector: boolean;
};

type RouteToolSettings = {
  color: string; // The color of the element in some CSS-like format.
  // A value between 0 and 1 that describes the opacity of the element's stroke.
  strokeOpacity: number;
  strokeWidth: number;
  strokeStyle: "solid" | "dashed" | "dotted";
  // Whether a distance marker is shown at the midpoint of the path.
  distanceMarker: boolean;
  // Whether this represents a route, and if so, what mode of transport is used.
  routingMode: null | "driving" | "cycling" | "walking" | "flying";
  endCaps: boolean; // Whether or not to show Start and End caps on the path.
  showInspector: boolean;
};

type PolygonToolSettings = {
  color: string; // The color of the element in some CSS-like format.
  // A value between 0 and 1 that describes the opacity of the element's stroke.
  strokeOpacity: number;
  strokeWidth: number;
  strokeStyle: "solid" | "dashed" | "dotted";
  fillOpacity: number;
  areaMarker: boolean;
  showInspector: boolean;
};

type CircleToolSettings = {
  color: string; // The color of the element in some CSS-like format.
  // A value between 0 and 1 that describes the opacity of the element's stroke.
  strokeOpacity: number;
  strokeWidth: number;
  strokeStyle: "solid" | "dashed" | "dotted";
  // Whether to show a marker on the circle that indicates the radius
  radiusMarker: boolean;
  fillOpacity: number;
  showInspector: boolean;
};

type MarkerToolSettings = {
  color: string; // The color of the element in some CSS-like format.
  opacity: number;
  // The size of the marker, used in conjunction with the `zoom` to determine the actual size of the marker.
  size: number;
  showInspector: boolean;
};

type HighlighterToolSettings = {
  color: string; // The color of the element in some CSS-like format.
  renderHoles: boolean; // Whether to render the holes of the highlighted area.
  opacity: number;
  showInspector: boolean;
  size: number;
};

type TextToolSettings = {
  color: string; // The color of the element in some CSS-like format.
  align: "center" | "left" | "right";
  style: "light" | "italic" | "regular" | "caps";
  showInspector: boolean;
};

type NoteToolSettings = {
  color: string; // The color of the element in some CSS-like format.
  // The alignment of the text, either `left`, `center` or `right`.
  align: "center" | "left" | "right";
  style: "light" | "italic" | "regular" | "caps";
  showInspector: boolean;
};

type ToolType = "circle" | "highlighter" | "line" | "link" | "marker" | "note" | "pin" | "polygon" | "route" | "text";

type ConfigurableToolType = Exclude<ToolType, "link">;

// The parameters for changing the settings of each tool.
type InputToolSettings = { tool: "pin" } & Partial<PinToolSettings> | { tool: "line" } & Partial<LineToolSettings> | { tool: "route" } & Partial<RouteToolSettings> | { tool: "polygon" } & Partial<PolygonToolSettings> | { tool: "circle" } & Partial<CircleToolSettings> | { tool: "marker" } & Partial<MarkerToolSettings> | { tool: "highlighter" } & Partial<HighlighterToolSettings> | { tool: "text" } & Partial<TextToolSettings> | { tool: "note" } & Partial<NoteToolSettings>;

// The result of listening for changes to the settings of each tool.
type ToolSettingsChangeEvent = { tool: "pin" } & PinToolSettings | { tool: "line" } & LineToolSettings | { tool: "route" } & RouteToolSettings | { tool: "polygon" } & PolygonToolSettings | { tool: "circle" } & CircleToolSettings | { tool: "marker" } & MarkerToolSettings | { tool: "highlighter" } & HighlighterToolSettings | { tool: "text" } & TextToolSettings | { tool: "note" } & NoteToolSettings;

type ToolSettingsMap = {
  pin: PinToolSettings;
  line: LineToolSettings;
  route: RouteToolSettings;
  polygon: PolygonToolSettings;
  circle: CircleToolSettings;
  marker: MarkerToolSettings;
  highlighter: HighlighterToolSettings;
  text: TextToolSettings;
  note: NoteToolSettings;
};

type PlaceFrame = "frame-circle" | "frame-square" | null;

type PlaceSymbol = "dot" | "square" | "diamond" | "triangle" | "x" | "plus" | "circle-line" | "circle-slash" | "star" | "heart" | "hexagon" | "octagon" | "pedestrian" | "bicycle" | "wheelchair" | "airport" | "car" | "bus" | "train" | "truck" | "ferry" | "sailboat" | "electric-service" | "gas-service" | "blood-clinic" | "badge" | "traffic-light" | "traffic-cone" | "road-sign-caution" | "person" | "restroom" | "house" | "work" | "letter" | "hotel" | "factory" | "hospital" | "religious-facility" | "school" | "government" | "university" | "bank" | "landmark" | "museum" | "clothing" | "shopping" | "store" | "bar" | "pub" | "cafe" | "food" | "park" | "amusement-park" | "camping-tent" | "cabin" | "picnic" | "water-refill" | "trailhead" | "guidepost" | "viewpoint" | "camera" | "us-football" | "football" | "tennis" | "binoculars" | "swimming" | "zap" | "battery-full" | "battery-half" | "battery-low" | "boom" | "radar" | "wind-turbine" | "solar-panel" | "antenna" | "telephone-pole" | "oil-well" | "oil-barrel" | "railroad-track" | "bridge" | "lighthouse" | "lock-closed" | "lock-open" | "wifi" | "trash" | "recycle" | "tree" | "flower" | "leaf" | "fire" | "mountain" | "snowy-mountain" | "volcano" | "island" | "wave" | "hot-springs" | "water" | "lake" | "ocean" | "animal" | "bird" | "duck" | "dog" | "fish" | "beach" | "wetland" | "sun" | "moon" | "cloud" | "partial-sun" | "rain" | "lightning" | "snowflake" | "wind" | "snow" | "fog" | "sleet" | "hurricane" | "warning" | "parking" | "info" | "circle-exclamation" | "circle-triangle" | "circle-x" | "circle-plus" | `:${string}:` & {};
```

### Methods

```typescript
// Sets the tool to use for drawing elements on the map.
function setTool(tool: null | ToolType): void;

// Gets the current tool, if any is in use.
async function getTool(): Promise<null | ToolType>;

// Sets the settings for the current tool.
function setToolSettings(settings: InputToolSettings): void;

// Gets the settings for the chosen tool.
async function getToolSettings<T extends ConfigurableToolType>(tool: T): Promise<ToolSettingsMap[T]>;
```

### Events

```typescript
// Listens for changes to the current tool.
function onToolChange(args: {
  // This callback is called with the current tool whenever the tool changes.
  handler: (tool: null | ToolType) => void;
}): VoidFunction;

// Listens for changes to the settings on all tools.
function onToolSettingsChange(args: { handler: (settings: ToolSettingsChangeEvent) => void }): VoidFunction;
```

## UI

```typescript
type CreateActionTriggerParams = {
  actionTrigger: UIActionTriggerCreate;
  placement?: { after: string } | { before: string } | { at: "start" | "end" };
};

type UpdateActionTriggerParams = {
  id: string;
  label?: string;
  disabled?: boolean;
  type?: undefined;
  onTrigger?: (args: { id: string }) => void;
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void; // A function to call when the element is destroyed.
};

type CreateFeatureActionParams = {
  action: UIFeatureActionCreate;
  placement?: { after: string } | { before: string } | { at: "start" | "end" };
};

type UpdateFeatureActionParams = {
  id: string;
  label?: string;
  layerIds?: string[];
  geometryTypes?: ("Polygon" | "Point" | "Line" | "Raster")[]; // The geometry type of the features to add the action to.
  type?: undefined;
  onTrigger?: (args: { feature: LayerFeature }) => void;
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void; // A function to call when the element is destroyed.
};

// The parameters for creating or updating a panel by using UiController.createOrUpdatePanel.
type CreateOrUpdatePanelParams = {
  panel: UIPanelCreateOrUpdate;
  placement?: { after: string } | { before: string } | { at: "start" | "end" };
  initialPlacement?: { after: string } | { before: string } | { at: "start" | "end" }; // The placement of the panel on the right sidebar stack.
};

type CreatePanelElementsParams = {
  panelId: string;
  elements: {
    element: UIPanelElementCreate;
    container?: "footer" | "body" | { id: string };
    // The placement of the element in the target container (based on the `container` property).
    placement?: { after: string } | { before: string } | { at: "start" | "end" };
  }[];
};

type UpdatePanelElementsParams = { panelId: string; elements: { element: UIPanelElementUpdate }[] };

type DeletePanelElementsParams = { panelId: string; elements: string[] };

type UiControlsOptions = {
  showLegend?: boolean; // Whether or not the legend is shown.
  // When co-operative gestures are enabled, the pan and zoom gestures are adjusted to work better when the map is embedded in another page.
  cooperativeGestures?: boolean;
  // Whether or not the full screen button is shown in an embedded map.
  fullScreenButton?: boolean;
  // Whether or not the geolocation button is shown in an embedded map.
  geolocation?: boolean;
  // Whether or not the zoom controls are shown in an embedded map.
  zoomControls?: boolean;
  scaleBar?: boolean; // Whether or not the scale bar is shown in an embedded map.
  rotation?: boolean; // Whether or not the map can be rotated.
  // Whether or not the right-click context menu is available on the map.
  contextMenu?: boolean;
};

// The options for which parts of the Felt UI can be shown when interacting with features and elements on the map.
type OnMapInteractionsOptions = {
  // Set this to `false` to prevent the panel that shows information about a selected feature from being shown.
  featureSelectPanel?: boolean;
  // Set this to `false` to prevent the panel that shows information about a hovered feature from being shown.
  featureHoverPanel?: boolean;
  // Set this to `false` to prevent the panel that shows information about a selected element from being shown.
  elementSelectPanel?: boolean;
  // Set this to `false` to prevent clicking on a map link element from opening that link in a new tab or window.
  linkClickOpen?: boolean;
  // Set this to `false` to prevent clicking on an image element from opening the image in a lightbox.
  imageLightboxOpen?: boolean;
};
```

### Placement For Ui Element

```typescript
// Used in UiController.createOrUpdatePanel to specify the position of a panel in the stack and in UiController.createPanelElements to specify the position of an element in a panel.
type PlacementForUIElement = { after: string } | { before: string } | { at: "start" | "end" };
```

### Ui Elements

```typescript
// An option to display in a control element.
type UIControlElementOption = { label: string; value: string; disabled?: boolean };
```

### Ui Panel Element Schemas

```typescript
type UIPanelElement = UIButtonElement | UITextElement | UIDividerElement | UITextInputElement | UISelectElement | UIFlexibleSpaceElement | UIButtonRowElement | UICheckboxGroupElement | UIRadioGroupElement | UIToggleGroupElement | UIIframeElement | UIGridContainerElement;

// This is a union of all the possible elements that can be created inside panel's body or footer.
type UIPanelElementCreate = UIButtonElementCreate | UITextElementCreate | UIDividerElementCreate | UITextInputElementCreate | UISelectElementCreate | UIFlexibleSpaceElementCreate | UIButtonRowElementCreate | UICheckboxGroupElementCreate | UIRadioGroupElementCreate | UIToggleGroupElementCreate | UIIframeElementCreate | UIGridContainerElementCreate;

// This is a union of all the possible elements that can be updated inside panel's body or footer (excluding Divider and FlexibleSpace elements because they cannot be updated).
type UIPanelElementUpdate = UIButtonElementUpdate | UITextElementUpdate | UITextInputElementUpdate | UISelectElementUpdate | UIDividerElementUpdate | UIButtonRowElementUpdate | UICheckboxGroupElementUpdate | UIRadioGroupElementUpdate | UIToggleGroupElementUpdate | UIGridContainerElementUpdate | UIFlexibleSpaceElementUpdate | UIIframeElementUpdate;
```

### UIActionTrigger

```typescript
// Represents an action trigger.
type UIActionTriggerCreate = {
  label: string;
  onTrigger: (args: { id: string }) => void; // The function to call when the action trigger is triggered.
  id?: string;
  disabled?: boolean; // Whether the action trigger is disabled or not.
  type?: undefined;
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void; // A function to call when the element is destroyed.
};
```

### UIButtonElement

```typescript
// Represents a button element in a panel.
type UIButtonElement = {
  type: "Button";
  label: string;
  onClick: (args: { id: string }) => void; // The action to perform when the button is clicked.
  id: string;
  variant?: "filled" | "transparent" | "outlined";
  tint?: "default" | "primary" | "accent" | "danger";
  disabled?: boolean;
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
};

// The parameters for creating a button element.
type UIButtonElementCreate = {
  type: "Button";
  label: string;
  onClick: (args: { id: string }) => void; // The action to perform when the button is clicked.
  variant?: "filled" | "transparent" | "outlined";
  tint?: "default" | "primary" | "accent" | "danger";
  disabled?: boolean;
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
  id?: string;
};

// The parameters for updating a button element.
type UIButtonElementUpdate = {
  type: "Button";
  id: string;
  label?: string;
  variant?: "filled" | "transparent" | "outlined";
  tint?: "default" | "primary" | "accent" | "danger";
  disabled?: boolean;
  onClick?: (args: { id: string }) => void; // The action to perform when the button is clicked.
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
};
```

### UIButtonRowElement

```typescript
// Represents a row of buttons.
type UIButtonRowElement = {
  type: "ButtonRow";
  items: UIButtonElement[];
  id: string;
  align?: "start" | "end";
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
  // Label text to display above the element and used for screen readers.
  label?: string;
};

// The parameters for creating a button row element.
type UIButtonRowElementCreate = {
  type: "ButtonRow";
  items: UIButtonElementCreate[];
  align?: "start" | "end";
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
  id?: string;
  // Label text to display above the element and used for screen readers.
  label?: string;
};

// The parameters for updating a button row element.
type UIButtonRowElementUpdate = {
  type: "ButtonRow";
  id: string;
  align?: "start" | "end";
  items?: UIButtonElementCreate[];
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
  // Label text to display above the element and used for screen readers.
  label?: string;
};
```

### UICheckboxGroupElement

```typescript
// The parameters for creating a checkbox group element.
type UICheckboxGroupElement = {
  type: "CheckboxGroup";
  value: string[];
  options: UIControlElementOption[];
  // The function to call when the value of the checkbox group changes.
  onChange: (args: { value: string[]; id: string }) => void;
  id: string;
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
  // Label text to display above the element and used for screen readers.
  label?: string;
};

// The parameters for creating a checkbox group element.
type UICheckboxGroupElementCreate = {
  type: "CheckboxGroup";
  value: string[];
  options: UIControlElementOption[];
  // The function to call when the value of the checkbox group changes.
  onChange: (args: { value: string[]; id: string }) => void;
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
  id?: string;
  // Label text to display above the element and used for screen readers.
  label?: string;
};

// The parameters for updating a checkbox group element.
type UICheckboxGroupElementUpdate = {
  type: "CheckboxGroup";
  id: string;
  value?: string[];
  options?: UIControlElementOption[];
  // The function to call when the value of the checkbox group changes.
  onChange?: (args: { value: string[]; id: string }) => void;
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
  // Label text to display above the element and used for screen readers.
  label?: string;
};
```

### UIDividerElement

```typescript
// Represents a divider element in a panel.
type UIDividerElement = {
  type: "Divider";
  id: string;
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
};

// The parameters for creating a divider element.
type UIDividerElementCreate = {
  type: "Divider";
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
  id?: string;
};

// The parameters for updating a divider element.
type UIDividerElementUpdate = {
  type: "Divider";
  id: string;
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
};
```

### UIFeatureAction

```typescript
// Represents a feature action for creation.
type UIFeatureActionCreate = {
  label: string;
  onTrigger: (args: { feature: LayerFeature }) => void;
  layerIds?: string[];
  geometryTypes?: ("Polygon" | "Point" | "Line" | "Raster")[]; // The geometry type of the features to add the action to.
  type?: undefined;
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void; // A function to call when the element is destroyed.
};

// Represents a feature action after creation (with generated id).
type UIFeatureAction = {
  label: string;
  onTrigger: (args: { feature: LayerFeature }) => void;
  id: string;
  layerIds?: string[];
  geometryTypes?: ("Polygon" | "Point" | "Line" | "Raster")[]; // The geometry type of the features to add the action to.
  type?: undefined;
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void; // A function to call when the element is destroyed.
};
```

### UIFlexibleSpaceElement

```typescript
// Represents a flexible space element in a container.
type UIFlexibleSpaceElement = {
  type: "FlexibleSpace";
  id: string;
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
};

// The parameters for creating a flexible space element.
type UIFlexibleSpaceElementCreate = {
  type: "FlexibleSpace";
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
  id?: string;
};

// The parameters for updating a flexible space element.
type UIFlexibleSpaceElementUpdate = {
  type: "FlexibleSpace";
  id: string;
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
};
```

### UIGridContainerElement

```typescript
// Represents a container with a grid layout in a panel.
type UIGridContainerElement = {
  type: "Grid";
  items: (UIButtonElement | UITextElement | UIDividerElement | UITextInputElement | UISelectElement | UIFlexibleSpaceElement | UIButtonRowElement | UICheckboxGroupElement | UIRadioGroupElement | UIToggleGroupElement | UIIframeElement)[];
  id: string;
  grid?: string;
  verticalAlignment?: "center" | "top" | "bottom";
  horizontalDistribution?: "center" | "start" | "end" | "space-between" | "space-around" | "space-evenly";
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
};

// The parameters for creating a grid container element.
type UIGridContainerElementCreate = {
  type: "Grid";
  items: (UIButtonElementCreate | UITextElementCreate | UIDividerElementCreate | UITextInputElementCreate | UISelectElementCreate | UIFlexibleSpaceElementCreate | UIButtonRowElementCreate | UICheckboxGroupElementCreate | UIRadioGroupElementCreate | UIToggleGroupElementCreate | UIIframeElementCreate)[];
  grid?: string;
  verticalAlignment?: "center" | "top" | "bottom";
  horizontalDistribution?: "center" | "start" | "end" | "space-between" | "space-around" | "space-evenly";
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
  id?: string;
};

// The parameters for updating a grid container element.
type UIGridContainerElementUpdate = {
  type: "Grid";
  id: string;
  grid?: string;
  verticalAlignment?: "center" | "top" | "bottom";
  horizontalDistribution?: "center" | "start" | "end" | "space-between" | "space-around" | "space-evenly";
  items?: (UIButtonElementCreate | UITextElementCreate | UIDividerElementCreate | UITextInputElementCreate | UISelectElementCreate | UIFlexibleSpaceElementCreate | UIButtonRowElementCreate | UICheckboxGroupElementCreate | UIRadioGroupElementCreate | UIToggleGroupElementCreate | UIIframeElementCreate)[];
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
};
```

### UIIframeElement

```typescript
// Represents an iframe element in a panel.
type UIIframeElement = {
  type: "Iframe";
  url: string;
  id: string;
  height?: string | number;
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
};

// The parameters for creating an iframe element.
type UIIframeElementCreate = {
  type: "Iframe";
  url: string;
  height?: string | number;
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
  id?: string;
};

// The parameters for updating an iframe element.
type UIIframeElementUpdate = {
  type: "Iframe";
  id: string;
  height?: string | number;
  url?: string;
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
};
```

### UIPanel

```typescript
// A UI panel that can be added to the map using UiController.createOrUpdatePanel.
type UIPanel = {
  type: "Panel";
  // The ID of the panel obtained from UiController.createPanelId.
  id: string;
  title?: string; // The title to display in the panel header.
  body?: UIPanelElement[];
  footer?: UIPanelElement[];
  onClickClose?: (args: { id: string }) => void; // A function to call when panel's close button is clicked.
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void; // A function to call when the element is destroyed.
};

// The parameters for creating a panel by using UiController.createOrUpdatePanel.
type UIPanelCreateOrUpdate = {
  // The ID of the panel obtained from UiController.createPanelId.
  id: string;
  title?: string; // The title to display in the panel header.
  onClickClose?: (args: { id: string }) => void; // A function to call when panel's close button is clicked.
  type?: "Panel";
  body?: UIPanelElementCreate[];
  footer?: UIPanelElementCreate[];
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void; // A function to call when the element is destroyed.
};
```

### UIRadioGroupElement

```typescript
// The parameters for creating a radio group element.
type UIRadioGroupElement = {
  type: "RadioGroup";
  options: UIControlElementOption[];
  // The function to call when the value of the radio group changes.
  onChange: (args: { value: undefined | string; id: string }) => void;
  id: string;
  value?: string;
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
  // Label text to display above the element and used for screen readers.
  label?: string;
};

// The parameters for creating a radio group element.
type UIRadioGroupElementCreate = {
  type: "RadioGroup";
  options: UIControlElementOption[];
  // The function to call when the value of the radio group changes.
  onChange: (args: { value: undefined | string; id: string }) => void;
  value?: string;
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
  id?: string;
  // Label text to display above the element and used for screen readers.
  label?: string;
};

// The parameters for updating a radio group element.
type UIRadioGroupElementUpdate = {
  type: "RadioGroup";
  id: string;
  value?: string;
  options?: UIControlElementOption[];
  // The function to call when the value of the radio group changes.
  onChange?: (args: { value: undefined | string; id: string }) => void;
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
  // Label text to display above the element and used for screen readers.
  label?: string;
};
```

### UISelectElement

```typescript
// Represents a select element in a panel.
type UISelectElement = {
  type: "Select";
  options: UIControlElementOption[];
  onChange: (args: { value: string; id: string }) => void; // The function to call when the value of the select changes.
  id: string;
  value?: string;
  placeholder?: string; // The placeholder text to display in the select.
  // Whether the select should allow searching through the options.
  search?: boolean;
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
  // Label text to display above the element and used for screen readers.
  label?: string;
};

// The parameters for creating a select element.
type UISelectElementCreate = {
  type: "Select";
  options: UIControlElementOption[];
  onChange: (args: { value: string; id: string }) => void; // The function to call when the value of the select changes.
  value?: string;
  placeholder?: string; // The placeholder text to display in the select.
  // Whether the select should allow searching through the options.
  search?: boolean;
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
  id?: string;
  // Label text to display above the element and used for screen readers.
  label?: string;
};

// The parameters for updating a select element.
type UISelectElementUpdate = {
  type: "Select";
  id: string;
  value?: string;
  placeholder?: string; // The placeholder text to display in the select.
  // Whether the select should allow searching through the options.
  search?: boolean;
  options?: UIControlElementOption[];
  onChange?: (args: { value: string; id: string }) => void; // The function to call when the value of the select changes.
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
  // Label text to display above the element and used for screen readers.
  label?: string;
};
```

### UITextElement

```typescript
// Represents a text element in a panel.
type UITextElement = {
  type: "Text";
  content: string;
  id: string;
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
};

// The parameters for creating a text element.
type UITextElementCreate = {
  type: "Text";
  content: string;
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
  id?: string;
};

// The parameters for updating a text element.
type UITextElementUpdate = {
  type: "Text";
  id: string;
  content?: string;
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
};
```

### UITextInputElement

```typescript
// Represents a text input element in a panel.
type UITextInputElement = {
  type: "TextInput";
  value: string;
  id: string;
  placeholder?: string;
  onChange?: (args: { value: string; id: string }) => void; // The function to call when the value of the input changes.
  onBlur?: (args: { value: string; id: string }) => void; // The function to call when the input is blurred.
  onFocus?: (args: { value: string; id: string }) => void; // The function to call when the input is focused.
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
  // Label text to display above the element and used for screen readers.
  label?: string;
};

// The parameters for creating a text input element.
type UITextInputElementCreate = {
  type: "TextInput";
  value: string;
  placeholder?: string;
  onChange?: (args: { value: string; id: string }) => void; // The function to call when the value of the input changes.
  onBlur?: (args: { value: string; id: string }) => void; // The function to call when the input is blurred.
  onFocus?: (args: { value: string; id: string }) => void; // The function to call when the input is focused.
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
  id?: string;
  // Label text to display above the element and used for screen readers.
  label?: string;
};

// The parameters for updating a text input element.
type UITextInputElementUpdate = {
  type: "TextInput";
  id: string;
  value?: string;
  placeholder?: string;
  onChange?: (args: { value: string; id: string }) => void; // The function to call when the value of the input changes.
  onBlur?: (args: { value: string; id: string }) => void; // The function to call when the input is blurred.
  onFocus?: (args: { value: string; id: string }) => void; // The function to call when the input is focused.
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
  // Label text to display above the element and used for screen readers.
  label?: string;
};
```

### UIToggleGroupElement

```typescript
// The parameters for creating a toggle group element.
type UIToggleGroupElement = {
  type: "ToggleGroup";
  value: string[];
  options: UIControlElementOption[];
  // The function to call when the value of the toggle group changes.
  onChange: (args: { value: string[]; id: string }) => void;
  id: string;
  alignment?: "start" | "end";
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
  // Label text to display above the element and used for screen readers.
  label?: string;
};

// The parameters for creating a toggle group element.
type UIToggleGroupElementCreate = {
  type: "ToggleGroup";
  value: string[];
  options: UIControlElementOption[];
  // The function to call when the value of the toggle group changes.
  onChange: (args: { value: string[]; id: string }) => void;
  alignment?: "start" | "end";
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
  id?: string;
  // Label text to display above the element and used for screen readers.
  label?: string;
};

// The parameters for updating a toggle group element.
type UIToggleGroupElementUpdate = {
  type: "ToggleGroup";
  id: string;
  alignment?: "start" | "end";
  value?: string[];
  options?: UIControlElementOption[];
  // The function to call when the value of the toggle group changes.
  onChange?: (args: { value: string[]; id: string }) => void;
  onCreate?: (args: { id: string }) => void; // A function to call when the element is created.
  onDestroy?: (args: { id: string }) => void;
  // Label text to display above the element and used for screen readers.
  label?: string;
};
```

### Methods

```typescript
// Creates an action trigger.
async function createActionTrigger(args: CreateActionTriggerParams): Promise<UIActionTriggerCreate>;

// Updates an action trigger.
async function updateActionTrigger(args: UpdateActionTriggerParams): Promise<UIActionTriggerCreate>;

// Deletes an action trigger.
function deleteActionTrigger(id: string): void;

// Creates a feature contextual action.
async function createFeatureAction(args: CreateFeatureActionParams): Promise<UIFeatureAction>;

// Updates a feature contextual action.
async function updateFeatureAction(args: UpdateFeatureActionParams): Promise<UIFeatureAction>;

// Deletes a feature contextual action.
function deleteFeatureAction(id: string): void;

// Creates a panel ID.
async function createPanelId(): Promise<string>;

// Creates or updates a panel.
async function createOrUpdatePanel(args: CreateOrUpdatePanelParams): Promise<UIPanel>;

// Deletes a panel.
function deletePanel(id: string): void;

// Creates elements in a panel.
async function createPanelElements(args: CreatePanelElementsParams): Promise<UIPanel>;

// Updates an existing element in a panel.
async function updatePanelElements(args: UpdatePanelElementsParams): Promise<UIPanel>;

// Deletes elements from a panel.
function deletePanelElements(args: DeletePanelElementsParams): void;

// Updates the UI controls on the embedded map.
function updateUiControls(controls: UiControlsOptions): void;

// Control the on-map UI shown when interacting with features and elements.
function setOnMapInteractionsUi(options: UiOnMapInteractionsOptions): void;

// Shows a data table view for the specified layer, optionally sorted by a given attribute.
async function showLayerDataTable(params?: {
  layerId: string;
  sorting?: SortConfig; // Optional sorting configuration for the table.
}): Promise<void>;

// Hides the data table.
async function hideLayerDataTable(): Promise<void>;
```

## Viewport

```typescript
// The input type for setting the viewport to a particular center and zoom.
type ViewportCenterZoom = { center: LatLng; zoom: number };

// The current state of the viewport, including the derived bounds.
type ViewportState = {
  center: LatLng;
  zoom: number;
  // The bounding box of the viewport in [west, south, east, north] order.
  bounds: [number, number, number, number];
};

// The parameters for the `setViewport` method.
type SetViewportCenterZoomParams = { center?: { latitude: number; longitude: number }; zoom?: number };

// The constraints for the viewport.
type ViewportConstraints = {
  minZoom: null | number;
  maxZoom: null | number;
  bounds: null | [number, number, number, number];
};

// The parameters for the `fitViewportToBounds` method.
type ViewportFitBoundsParams = { bounds: [number, number, number, number] };
```

### Methods

```typescript
// Gets the current state of the viewport.
async function getViewport(): Promise<ViewportState>;

// Moves the map to the specified location.
function setViewport(viewport: SetViewportCenterZoomParams): void;

// Gets the current state of the viewport constraints.
async function getViewportConstraints(): Promise<null | ViewportConstraints>;

// Constrains the map viewport so it stays inside certain bounds and/or certain zoom levels.
function setViewportConstraints(constraints: null | Partial<ViewportConstraints>): void;

// Fits the map to the specified bounds.
function fitViewportToBounds(bounds: ViewportFitBoundsParams): void;
```

### Events

```typescript
// Adds a listener for when the viewport changes.
function onViewportMove(args: {
  // This callback is called with the current viewport state whenever the viewport changes.
  handler: (viewport: ViewportState) => void;
}): VoidFunction;

// Adds a listener for when the viewport move ends, which is when the user stops dragging or zooming the map, animations have finished, or inertial dragging ends.
function onViewportMoveEnd(args: { handler: (viewport: ViewportState) => void }): VoidFunction;

// Adds a listener for when the map is idle, which is defined as: - No transitions are in progress - The user is not interacting with the map, e.g.
function onMapIdle(args: { handler: () => void }): VoidFunction;
```

## Map Details

```typescript
// The details of a map.
type MapDetails = { id: string; title: string; description: string | null };
```

### Methods

```typescript
// Gets the details of the map.
async function getMapDetails(): Promise<MapDetails>;
```
