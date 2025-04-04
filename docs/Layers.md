***

Layers in a Felt map hold geospatial data, but also configure how the data is rendered
both on the map and in the legend. The data can be vector data such as Points, Lines, or Polygons,
or raster data such as satellite images.

Each Layer can be grouped under a LayerGroup, and has associated LegendItems that represent
how the layer is rendered in the legend.

You can control the visibility of layers, layer groups, and legend items using the
`setLayerVisibility`, `setLayerGroupVisibility`, and `setLegendItemVisibility` methods.

When a Layer is styled to as categorical data or "classed" numeric data, there will be
a LegendItem for each category or class. Each LegendItem can be controlled for visibility
independently of the Layer, so you can turn on and off each category or class individually.

# LayerFeature

A LayerFeature is a single geographical item in a layer.

It is intended to be a lightweight object that contains the properties of a
feature, but not the geometry. It is returned by methods like
[FeltController.getRenderedFeatures](API.md#feltcontroller#getrenderedfeatures) and [FeltController.getFeature](API.md#feltcontroller#getfeature),
and as part of the methods in the [SelectionController](Selection.md#selectioncontroller)

The geometry can be obtained via the [FeltController.getGeoJsonFeature](API.md#feltcontroller#getgeojsonfeature)
method, which returns a [GeoJsonFeature](Shared.md#geojsonfeature) object.

# Properties

## id

> **id**: `string` \| `number`

The identifier of the feature, unique within the layer.

## layerId

> **layerId**: `string`

The identifier of the layer that the feature belongs to.

## geometryType

> **geometryType**: `"Point"` \| `"Polygon"` \| `"LineString"` \| `"MultiLineString"` \| `"MultiPoint"` \| `"MultiPolygon"` \| `string` & \{ \}

The type of geometry of the feature.

### Remarks

Because LayerFeatures are read from tiled features, it's
possible that this `geometryType` won't match the `geometry.type` of the
[GeoJsonFeature](Shared.md#geojsonfeature) returned by [FeltController.getGeoJsonFeature](API.md#feltcontroller#getgeojsonfeature).

For example, this may return `LineString` but the full feature is a `MultiLineString`,
or, similarly `Polygon` here may be a `MultiPolygon` in the full feature.

As a result, you should treat this property as being indicative only.

## properties

> **properties**: [`GeoJsonProperties`](Shared.md#geojsonproperties)

The properties of the feature, as a bag of attributes.

***

# RasterValue

A raster pixel value for a specific layer.

# Properties

## value

> **value**: `number`

The value of the pixel.

## layerId

> **layerId**: `string`

The ID of the layer that the pixel belongs to.

## categoryName

> **categoryName**: `null` \| `string`

The name of the category that the pixel belongs to.

## color

> **color**: `null` \| \{ `r`: `number`; `g`: `number`; `b`: `number`; `a`: `number`; \}

The color of the pixel. Each value is between 0 and 255.

***

# AggregationConfig

Defines how to aggregate a value across features in a layer.

# Properties

## attribute

> **attribute**: `string`

The attribute to use for the aggregation. This must be a numeric attribute.

## method

> **method**: `"avg"` \| `"max"` \| `"min"` \| `"sum"` \| `"median"`

The method to use for the aggregation.

***

# MultiAggregationConfig\<T\>

Defines how to aggregate a value across features in a layer with multiple aggregations
returned at once.

# Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`AggregationMethod`](#aggregationmethod) \| `"count"` |

# Properties

## methods

> **methods**: `T`[]

The operations to use on the values from the features in the layer

## attribute?

> `optional` **attribute**: `string`

The attribute to use for the aggregation when aggregations other than "count" are used.

This can be omitted if the only aggregation is "count", but must be a numeric attribute
otherwise.

***

# ValueConfiguration

Configuration for filtering and aggregating values across features.

This can be used to restrict the features considered for aggregation via the `boundary`
and `filters` properties.

It can also be used to specify how to aggregate the values via the `aggregation` property.

# Properties

## boundary?

> `optional` **boundary**: \[`number`, `number`, `number`, `number`\] \| [`PolygonGeometry`](Shared.md#polygongeometry) \| [`LngLatTuple`](Shared.md#lnglattuple)[]

A spatial boundary to filter what gets counted or aggregated, while still including
all possible categories or bin ranges in the results.

## filters?

> `optional` **filters**: [`Filters`](#filters-4)

Attribute filters to determine what gets counted or aggregated, while still including
all possible categories or bin ranges in the results.

## aggregation?

> `optional` **aggregation**: [`AggregationConfig`](#aggregationconfig)

Specifies how to aggregate values within each category or bin. When omitted,
features are counted. When specified, the chosen calculation (avg, sum, etc.)
is performed on the specified attribute.

For example, instead of counting buildings in each category, you might want
to sum their square footage or average their assessed values.

***

# GetLayerCategoriesParams

The parameters for getting categories from a layer, passed to
the [LayersController.getCategoryData](API.md#feltcontroller#getcategorydata) method.

# Properties

## layerId

> **layerId**: `string`

The ID of the layer to get categories from.

## attribute

> **attribute**: `string`

The attribute to use for categorization.

## limit?

> `optional` **limit**: `number`

The maximum number of categories to return.

## filters?

> `optional` **filters**: [`Filters`](#filters-4)

Attribute filters to determine what gets counted or aggregated.

## boundary?

> `optional` **boundary**: \[`number`, `number`, `number`, `number`\] \| [`PolygonGeometry`](Shared.md#polygongeometry) \| [`LngLatTuple`](Shared.md#lnglattuple)[]

A spatial boundary to filter what gets counted or aggregated. This can be either
a [w, s, e, n] bounding box, a GeoJSON Polygon geometry, or a list of coordinates
that form a polyline.

## values?

> `optional` **values**: [`ValueConfiguration`](#valueconfiguration)

Configuration for filtering and aggregating values while preserving the full set of
categories in the results.

This is particularly useful when you want to compare different subsets of data while
maintaining consistent categories. For example:

- Show all building types in a city, but only count recent buildings in each type
- Keep all neighborhood categories but only sum up residential square footage

Unlike top-level filters which affect both what categories appear AND their values,
filters in this configuration only affect the values while keeping all possible
categories in the results.

***

# GetLayerCategoriesGroup

A single category from the response from the [LayersController.getCategoryData](API.md#feltcontroller#getcategorydata) method.

# Properties

## key

> **key**: `string` \| `number` \| `boolean`

The category for which the value was calculated.

## value

> **value**: `null` \| `number`

The value calculated for the category, whether a count, sum, average, etc.

`null` is returned if there are no features in the category as opposed to zero,
so as not to confuse with a real zero value from some aggregation.

***

# GetLayerHistogramParams

The params used to request a histogram of values from a layer, passed to
the [LayersController.getHistogramData](API.md#feltcontroller#gethistogramdata) method.

# Properties

## layerId

> **layerId**: `string`

## attribute

> **attribute**: `string`

## steps

> **steps**: `number`[] \| \{ `type`: `"equal-intervals"`; `count`: `number`; \} \| \{ `type`: `"time-interval"`; `interval`: `"hour"` \| `"day"` \| `"week"` \| `"month"` \| `"year"`; \}

## values?

> `optional` **values**: \{ `boundary`: \[`number`, `number`\][] \| \[`number`, `number`, `number`, `number`\] \| \{ `type`: `"Polygon"`; `coordinates`: \[`number`, `number`\][][]; \}; `filters`: `null` \| `boolean` \| \[`null` \| `string`, `"in"` \| `"ni"`, `null` \| (`null` \| `string` \| `number` \| `boolean`)[]\] \| \[`null` \| `string`, `"lt"` \| `"gt"` \| `"le"` \| `"ge"` \| `"eq"` \| `"ne"` \| `"cn"` \| `"nc"` \| `"is"` \| `"isnt"`, `null` \| `string` \| `number` \| `boolean`\] \| [`FilterTernary`](#filterternary); `aggregation`: \{ `method`: `"avg"` \| `"max"` \| `"min"` \| `"sum"` \| `"median"`; `attribute`: `string`; \}; \}

Configuration for filtering and aggregating values while preserving the full set of
bin ranges in the results.

This is particularly useful when you want to compare different subsets of data while
maintaining consistent ranges. For example:

- Use the same height ranges for comparing old vs new buildings

Unlike top-level filters which affect both what ranges appear AND their values,
filters in this configuration only affect the values while keeping all possible
ranges in the results.

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `boundary`? | \[`number`, `number`\][] \| \[`number`, `number`, `number`, `number`\] \| \{ `type`: `"Polygon"`; `coordinates`: \[`number`, `number`\][][]; \} | - | - |
| `filters`? | `null` \| `boolean` \| \[`null` \| `string`, `"in"` \| `"ni"`, `null` \| (`null` \| `string` \| `number` \| `boolean`)[]\] \| \[`null` \| `string`, `"lt"` \| `"gt"` \| `"le"` \| `"ge"` \| `"eq"` \| `"ne"` \| `"cn"` \| `"nc"` \| `"is"` \| `"isnt"`, `null` \| `string` \| `number` \| `boolean`\] \| [`FilterTernary`](#filterternary) | - | - |
| `aggregation`? | \{ `method`: `"avg"` \| `"max"` \| `"min"` \| `"sum"` \| `"median"`; `attribute`: `string`; \} | - | - |
| `aggregation.method` | `"avg"` \| `"max"` \| `"min"` \| `"sum"` \| `"median"` | `AggregateMethodSchema` | The operation to use on the values from the features in the layer |
| `aggregation.attribute` | `string` | - | The attribute to use for the aggregation. This must be a numeric attribute. |

## filters?

> `optional` **filters**: [`Filters`](#filters-4)

Attribute filters to determine what gets counted or aggregated.

## boundary?

> `optional` **boundary**: \[`number`, `number`, `number`, `number`\] \| [`PolygonGeometry`](Shared.md#polygongeometry) \| [`LngLatTuple`](Shared.md#lnglattuple)[]

A spatial boundary to filter what gets counted or aggregated. This can be either
a [w, s, e, n] bounding box, a GeoJSON Polygon geometry, or a list of coordinates
that form a polyline.

***

# GetLayerHistogramBin

One bin from the response from the [LayersController.getHistogramData](API.md#feltcontroller#gethistogramdata) method.

# Properties

## min

> **min**: `number`

The left edge of the bin.

## max

> **max**: `number`

The right edge of the bin.

## value

> **value**: `number`

The number of features in the bin.

***

# GetLayerCalculationParams\<T\>

The parameters for calculating a single aggregate value for a layer, passed to
the [LayersController.getAggregates](API.md#feltcontroller#getaggregates) method.

# Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`AggregationMethod`](#aggregationmethod) \| `"count"` |

# Properties

## layerId

> **layerId**: `string`

The ID of the layer to calculate an aggregate value for.

## filters?

> `optional` **filters**: [`Filters`](#filters-4)

Attribute filters to determine what gets counted or aggregated.

## boundary?

> `optional` **boundary**: \[`number`, `number`, `number`, `number`\] \| [`PolygonGeometry`](Shared.md#polygongeometry) \| [`LngLatTuple`](Shared.md#lnglattuple)[]

A spatial boundary to filter what gets counted or aggregated. This can be either
a [w, s, e, n] bounding box, a GeoJSON Polygon geometry, or a list of coordinates
that form a polyline.

## aggregation

> **aggregation**: [`MultiAggregationConfig`](#multiaggregationconfig)\<`T`\>

Specifies how to aggregate values within each category or bin. When omitted,
features are counted. When specified, the chosen calculation (avg, sum, etc.)
is performed on the specified attribute.

***

# EphemeralLayerSource

# Properties

## type

> **type**: `"application/geo+json"`

## name

> **name**: `string`

## geometryStyles?

> `optional` **geometryStyles**: \{ `Point`: `objectOutputType`\<\{ \}, `ZodTypeAny`, `"passthrough"`\>; `Line`: `objectOutputType`\<\{ \}, `ZodTypeAny`, `"passthrough"`\>; `Polygon`: `objectOutputType`\<\{ \}, `ZodTypeAny`, `"passthrough"`\>; \}

| Name | Type |
| ------ | ------ |
| `Point`? | `objectOutputType`\<\{ \}, `ZodTypeAny`, `"passthrough"`\> |
| `Line`? | `objectOutputType`\<\{ \}, `ZodTypeAny`, `"passthrough"`\> |
| `Polygon`? | `objectOutputType`\<\{ \}, `ZodTypeAny`, `"passthrough"`\> |

***

# GeoJsonFileSource

# Properties

## type

> **type**: `"application/geo+json"`

## name

> **name**: `string`

## geometryStyles?

> `optional` **geometryStyles**: \{ `Point`: `objectOutputType`\<\{ \}, `ZodTypeAny`, `"passthrough"`\>; `Line`: `objectOutputType`\<\{ \}, `ZodTypeAny`, `"passthrough"`\>; `Polygon`: `objectOutputType`\<\{ \}, `ZodTypeAny`, `"passthrough"`\>; \}

| Name | Type |
| ------ | ------ |
| `Point`? | `objectOutputType`\<\{ \}, `ZodTypeAny`, `"passthrough"`\> |
| `Line`? | `objectOutputType`\<\{ \}, `ZodTypeAny`, `"passthrough"`\> |
| `Polygon`? | `objectOutputType`\<\{ \}, `ZodTypeAny`, `"passthrough"`\> |

## file

> **file**: `File`

***

# GeoJsonUrlSource

# Properties

## type

> **type**: `"application/geo+json"`

## name

> **name**: `string`

## geometryStyles?

> `optional` **geometryStyles**: \{ `Point`: `objectOutputType`\<\{ \}, `ZodTypeAny`, `"passthrough"`\>; `Line`: `objectOutputType`\<\{ \}, `ZodTypeAny`, `"passthrough"`\>; `Polygon`: `objectOutputType`\<\{ \}, `ZodTypeAny`, `"passthrough"`\>; \}

| Name | Type |
| ------ | ------ |
| `Point`? | `objectOutputType`\<\{ \}, `ZodTypeAny`, `"passthrough"`\> |
| `Line`? | `objectOutputType`\<\{ \}, `ZodTypeAny`, `"passthrough"`\> |
| `Polygon`? | `objectOutputType`\<\{ \}, `ZodTypeAny`, `"passthrough"`\> |

## url

> **url**: `string`

***

# GeoJsonArrayBufferSource

# Properties

## type

> **type**: `"application/geo+json"`

## name

> **name**: `string`

## geometryStyles?

> `optional` **geometryStyles**: \{ `Point`: `objectOutputType`\<\{ \}, `ZodTypeAny`, `"passthrough"`\>; `Line`: `objectOutputType`\<\{ \}, `ZodTypeAny`, `"passthrough"`\>; `Polygon`: `objectOutputType`\<\{ \}, `ZodTypeAny`, `"passthrough"`\>; \}

| Name | Type |
| ------ | ------ |
| `Point`? | `objectOutputType`\<\{ \}, `ZodTypeAny`, `"passthrough"`\> |
| `Line`? | `objectOutputType`\<\{ \}, `ZodTypeAny`, `"passthrough"`\> |
| `Polygon`? | `objectOutputType`\<\{ \}, `ZodTypeAny`, `"passthrough"`\> |

## arrayBuffer

> **arrayBuffer**: `ArrayBuffer`

***

# AggregationMethod

> **AggregationMethod** = `z.infer`\<*typeof* `AggregateMethodSchema`\>

The method to use for the aggregation.

***

# LayerFilters

The filters that are currently set on a layer.

A layer's filters are the combination of various different places
in which filters can be applied.

# Properties

## style

> **style**: [`Filters`](#filters-4)

Filters that are set in the layer's style. These are the lowest level
of filters, and can only be set by editing the map.

## components

> **components**: [`Filters`](#filters-4)

Filters that are set in the layer's components, which are interactive
elements in the legend. These can be set by viewers for their own session,
but their default value can be set by the map creator.

## ephemeral

> **ephemeral**: [`Filters`](#filters-4)

Filters that are set ephemerally by viewers in their own session.

These are the filters that are set when the `setLayerFilters` method is
called. There is no way to set these in the Felt UI - they can only be
set using the SDK.

## combined

> **combined**: [`Filters`](#filters-4)

The combined result of all the filters set on the layer.

***

# FilterLogicGate

> **FilterLogicGate** = `z.infer`\<*typeof* `FilterLogicGateSchema`\>

***

# FilterExpression

> **FilterExpression** = `z.infer`\<*typeof* `FilterExpressionSchema`\>

***

# FilterTernary

> **FilterTernary** = \[[`FilterTernary`](#filterternary) \| [`FilterExpression`](#filterexpression) \| `null` \| `boolean`, [`FilterLogicGate`](#filterlogicgate), [`FilterTernary`](#filterternary) \| [`FilterExpression`](#filterexpression) \| `null` \| `boolean`\]

A `FilterTernary` is a tree structure for combining expressions with logical operators.

When combining three or more conditions, you must use proper nesting rather than a flat list.

# Example

```typescript
// A simple filter with a single condition
const filter = [
  ["AREA", "gt", 30_000],
  "and",
  ["COLOR", "eq", "red"]
]

// A complex filter with multiple conditions
const filter = [
  ["AREA", "gt", 30_000],
  "and",
  [
    ["COLOR", "eq", "red"],
    "or",
    ["TYPE", "eq", "residential"]
  ]
]
```

***

# Filters

> **Filters** = [`FilterTernary`](#filterternary) \| [`FilterExpression`](#filterexpression) \| `null` \| `boolean`

Filters can be used to change which features in a layer are rendered. Filters can be
applied to a layer by the `setLayerFilters` method on the Felt controller.

Filters use a tree structure for combining expressions with logical operators, called a
[FilterTernary](#filterternary). When combining three or more conditions, you must use proper nesting
rather than a flat list.

See the examples below for the correct structure to use when building complex filters.

# Remarks

The possible operators are:
- `lt`: Less than
- `gt`: Greater than
- `le`: Less than or equal to
- `ge`: Greater than or equal to
- `eq`: Equal to
- `ne`: Not equal to
- `cn`: Contains
- `nc`: Does not contain

The allowed boolean operators are:
- `and`: Logical AND
- `or`: Logical OR

# Example

```typescript
// 1. Simple filter: single condition
felt.setLayerFilters({
  layerId: "layer-1",
  filters: ["AREA", "gt", 30_000],
});

// 2. Basic compound filter: two conditions with AND
felt.setLayerFilters({
  layerId: "layer-1",
  filters: [
    ["AREA", "gt", 30_000],  // First condition
    "and",                   // Logic operator
    ["COLOR", "eq", "red"]   // Second condition
  ]
});

// 3. Complex filter: three or more conditions require nesting
// ⚠️ IMPORTANT: Filters use a tree structure, not a flat list
felt.setLayerFilters({
  layerId: "layer-1",
  filters: [
    ["AREA", "gt", 30_000],                // First condition
    "and",                                 // First logic operator
    [                                      // Nested group starts
      ["COLOR", "eq", "red"],              //   Second condition
      "and",                               //   Second logic operator
      ["TYPE", "eq", "residential"]        //   Third condition
    ]                                      // Nested group ends
  ]
});

// 4. Even more complex: four conditions with proper nesting
// Visual structure:
//          AND
//         /   \
//    condition  AND
//              /   \
//        condition  AND
//                  /   \
//            condition  condition
felt.setLayerFilters({
  layerId: "layer-1",
  filters: [
    ["AREA", "gt", 30_000],                // First condition
    "and",
    [
      ["COLOR", "eq", "red"],              // Second condition
      "and",
      [
        ["TYPE", "eq", "residential"],     // Third condition
        "and",
        ["YEAR", "gt", 2000]               // Fourth condition
      ]
    ]
  ]
});

// 5. Mixed operators: combining AND and OR
// Visual structure:
//          AND
//         /   \
//    condition  OR
//              /  \
//        condition condition
felt.setLayerFilters({
  layerId: "layer-1",
  filters: [
    ["AREA", "gt", 30_000],                // Must have large area
    "and",
    [
      ["COLOR", "eq", "red"],              // Must be either red
      "or",
      ["TYPE", "eq", "residential"]        // OR residential type
    ]
  ]
});
```

***

# LayerGroup

# Properties

## id

> **id**: `string`

A string identifying the layer group.

## name

> **name**: `string`

The name of the layer group. This is shown in the legend.

## caption

> **caption**: `null` \| `string`

The caption of the layer group. This is shown in the legend.

## layerIds

> **layerIds**: `string`[]

The ids of the layers in the layer group.

### Remarks

You can use these ids to get the full layer objects via the [\`getLayers\`](API.md#feltcontroller#getlayers) method.

## visible

> **visible**: `boolean`

Whether the layer group is visible or not.

## shownInLegend

> **shownInLegend**: `boolean`

Whether the layer group is shown in the legend or not.

## bounds

> **bounds**: `null` \| \[`number`, `number`, `number`, `number`\]

The bounding box of the layer group in [west, south, east, north] order.

[FeltBoundary](Shared.md#feltboundary)

***

# GetLayerGroupsConstraint

The constraints to apply when getting layer groups.

# Properties

## ids?

> `optional` **ids**: `string`[]

The ids of the layer groups to get.

***

# LayerGroupChangeCallbackParams

The parameters for the [\`onLayerGroupChange\`](API.md#feltcontroller#onlayergroupchange) listener.

# Properties

## layerGroup

> **layerGroup**: `null` \| [`LayerGroup`](#layergroup)

***

# LayerSchema

The schema that describes the structure of the features in a layer.

# Remarks

This can be useful to build generic UIs that need to know the structure of the data in
a layer, such as a dropdown to choose an attribute.

# Properties

## featureCount

> **featureCount**: `number`

The total number of features in the layer.

## attributes

> **attributes**: [`LayerSchemaAttribute`](#layerschemaattribute)[]

Array of attribute schemas describing the properties available on features in this layer.

***

# LayerSchemaCommonAttribute

The common schema for all attributes.

# Properties

## id

> **id**: `string`

The unique identifier for this attribute.

This can be used to fetch statistics, categories, histograms etc. for this attribute
via the [LayersController.getCategoryData](API.md#feltcontroller#getcategorydata), [LayersController.getHistogramData](API.md#feltcontroller#gethistogramdata),
and [LayersController.getAggregates](API.md#feltcontroller#getaggregates) methods.

## displayName

> **displayName**: `string`

The human-readable name of this attribute.

## detailedType

> **detailedType**: `string`

The specific data type of this attribute, providing more detail than the basic type.

For instance, a numeric attribute might be "INTEGER", "FLOAT, etc.

## distinctCount

> **distinctCount**: `number`

The number of distinct values present for this attribute across all features.

***

# LayerSchemaNumericAttribute

The schema for a numeric attribute on a layer.

# Properties

## id

> **id**: `string`

The unique identifier for this attribute.

This can be used to fetch statistics, categories, histograms etc. for this attribute
via the [LayersController.getCategoryData](API.md#feltcontroller#getcategorydata), [LayersController.getHistogramData](API.md#feltcontroller#gethistogramdata),
and [LayersController.getAggregates](API.md#feltcontroller#getaggregates) methods.

## displayName

> **displayName**: `string`

The human-readable name of this attribute.

## detailedType

> **detailedType**: `string`

The specific data type of this attribute, providing more detail than the basic type.

For instance, a numeric attribute might be "INTEGER", "FLOAT, etc.

## distinctCount

> **distinctCount**: `number`

The number of distinct values present for this attribute across all features.

## type

> **type**: `"numeric"`

Indicates this is a numeric attribute.

## sampleValues

> **sampleValues**: \{ `value`: `number`; `count`: `number`; \}[]

A small sample of values for this attribute and their frequency.

| Name | Type |
| ------ | ------ |
| `value` | `number` |
| `count` | `number` |

## min

> **min**: `number`

The minimum value present for this attribute across all features.

## max

> **max**: `number`

The maximum value present for this attribute across all features.

***

# LayerSchemaTextAttribute

The schema for a text attribute on a layer.

# Properties

## id

> **id**: `string`

The unique identifier for this attribute.

This can be used to fetch statistics, categories, histograms etc. for this attribute
via the [LayersController.getCategoryData](API.md#feltcontroller#getcategorydata), [LayersController.getHistogramData](API.md#feltcontroller#gethistogramdata),
and [LayersController.getAggregates](API.md#feltcontroller#getaggregates) methods.

## displayName

> **displayName**: `string`

The human-readable name of this attribute.

## detailedType

> **detailedType**: `string`

The specific data type of this attribute, providing more detail than the basic type.

For instance, a numeric attribute might be "INTEGER", "FLOAT, etc.

## distinctCount

> **distinctCount**: `number`

The number of distinct values present for this attribute across all features.

## type

> **type**: `"text"`

Indicates this is a text attribute.

## sampleValues

> **sampleValues**: \{ `value`: `string`; `count`: `number`; \}[]

A small sample of string values for this attribute and their frequency.

| Name | Type |
| ------ | ------ |
| `value` | `string` |
| `count` | `number` |

***

# LayerSchemaBooleanAttribute

The schema for a boolean attribute on a layer.

# Properties

## id

> **id**: `string`

The unique identifier for this attribute.

This can be used to fetch statistics, categories, histograms etc. for this attribute
via the [LayersController.getCategoryData](API.md#feltcontroller#getcategorydata), [LayersController.getHistogramData](API.md#feltcontroller#gethistogramdata),
and [LayersController.getAggregates](API.md#feltcontroller#getaggregates) methods.

## displayName

> **displayName**: `string`

The human-readable name of this attribute.

## detailedType

> **detailedType**: `string`

The specific data type of this attribute, providing more detail than the basic type.

For instance, a numeric attribute might be "INTEGER", "FLOAT, etc.

## distinctCount

> **distinctCount**: `number`

The number of distinct values present for this attribute across all features.

## type

> **type**: `"boolean"`

Indicates this is a boolean attribute.

## sampleValues

> **sampleValues**: \{ `value`: `boolean`; `count`: `number`; \}[]

A representative sample of boolean values for this attribute and their frequency.

| Name | Type |
| ------ | ------ |
| `value` | `boolean` |
| `count` | `number` |

***

# LayerSchemaDateAttribute

The schema for a date attribute on a layer.

# Properties

## id

> **id**: `string`

The unique identifier for this attribute.

This can be used to fetch statistics, categories, histograms etc. for this attribute
via the [LayersController.getCategoryData](API.md#feltcontroller#getcategorydata), [LayersController.getHistogramData](API.md#feltcontroller#gethistogramdata),
and [LayersController.getAggregates](API.md#feltcontroller#getaggregates) methods.

## displayName

> **displayName**: `string`

The human-readable name of this attribute.

## detailedType

> **detailedType**: `string`

The specific data type of this attribute, providing more detail than the basic type.

For instance, a numeric attribute might be "INTEGER", "FLOAT, etc.

## distinctCount

> **distinctCount**: `number`

The number of distinct values present for this attribute across all features.

## type

> **type**: `"date"`

Indicates this is a date attribute.

## min

> **min**: `string`

The earliest date present for this attribute in truncated ISO8601 format (YYYY-MM-DD).

## max

> **max**: `string`

The latest date present for this attribute in truncated ISO8601 format (YYYY-MM-DD).

## sampleValues

> **sampleValues**: \{ `value`: `string`; `count`: `number`; \}[]

A representative sample of date values for this attribute and their frequency.

| Name | Type |
| ------ | ------ |
| `value` | `string` |
| `count` | `number` |

***

# LayerSchemaDateTimeAttribute

The schema for a datetime attribute on a layer.

# Properties

## id

> **id**: `string`

The unique identifier for this attribute.

This can be used to fetch statistics, categories, histograms etc. for this attribute
via the [LayersController.getCategoryData](API.md#feltcontroller#getcategorydata), [LayersController.getHistogramData](API.md#feltcontroller#gethistogramdata),
and [LayersController.getAggregates](API.md#feltcontroller#getaggregates) methods.

## displayName

> **displayName**: `string`

The human-readable name of this attribute.

## detailedType

> **detailedType**: `string`

The specific data type of this attribute, providing more detail than the basic type.

For instance, a numeric attribute might be "INTEGER", "FLOAT, etc.

## distinctCount

> **distinctCount**: `number`

The number of distinct values present for this attribute across all features.

## type

> **type**: `"datetime"`

Indicates this is a datetime attribute.

## min

> **min**: `string`

The earliest datetime present for this attribute in ISO8601 format.

## max

> **max**: `string`

The latest datetime present for this attribute in ISO8601 format.

## sampleValues

> **sampleValues**: \{ `value`: `string`; `count`: `number`; \}[]

A representative sample of datetime values for this attribute and their frequency.

| Name | Type |
| ------ | ------ |
| `value` | `string` |
| `count` | `number` |

***

# LayerSchemaAttribute

> **LayerSchemaAttribute** = [`LayerSchemaNumericAttribute`](#layerschemanumericattribute) \| [`LayerSchemaTextAttribute`](#layerschematextattribute) \| [`LayerSchemaBooleanAttribute`](#layerschemabooleanattribute) \| [`LayerSchemaDateAttribute`](#layerschemadateattribute) \| [`LayerSchemaDateTimeAttribute`](#layerschemadatetimeattribute)

A single attribute from the layer schema.

# Remarks

Each feature in a layer has a set of attributes, and these types describe the
structure of a single attribute, including things like id, display name, type, and sample values.

***

# Layer

# Properties

## id

> **id**: `string`

The string identifying the layer

## groupId

> **groupId**: `null` \| `string`

The ID of the layer group that the layer belongs to.

Layers that appear at the root level in Felt will not have a group ID.

## name

> **name**: `string`

The name of the layer can be displayed in the Legend, depending
on how the layer's legend is configured in its style.

## caption

> **caption**: `null` \| `string`

The layer's caption is shown in the legend.

## description

> **description**: `null` \| `string`

The layer description forms part of the layer's metadata. This is visible
to users via the layer info button in the legend.

## visible

> **visible**: `boolean`

Whether the layer is visible or not.

## shownInLegend

> **shownInLegend**: `boolean`

Whether the layer is shown in the legend or not.

## style

> **style**: `object`

The FSL style for the layer.

See the [FSL documentation](https://developers.felt.com/felt-style-language) for details
on how to read and write styles.

As the types of the styles are very complex, we return `object` here and advise that you
program defensively while reading the styles.

## status

> **status**: `"processing"` \| `"completed"` \| `"failed"` \| `"incomplete"`

The current processing status of the layer.

## geometryType

> **geometryType**: `null` \| `string`

The geometry type of the layer.

### Remarks

This will generally be one of:
- `"Point"`
- `"Line"`
- `"Polygon"`
- `"Raster"`
- `null`

When the layer is processing, or it is a data-only layer, it will be null. You should
expect this to be able to be any string, however, as more geometry types can be added
in the future.

## bounds

> **bounds**: `null` \| \[`number`, `number`, `number`, `number`\]

The bounding box of the layer in [west, south, east, north] order

There are cases where the bounds are not available, such as for layers added to the map
from URL sources, as these are not (depending on their type) processed and analyzed by
Felt.

[FeltBoundary](Shared.md#feltboundary)

***

# GetLayersConstraint

The constraints to apply when getting layers.

# Properties

## ids?

> `optional` **ids**: `string`[]

The ids of the layers to get.

***

# LayerChangeCallbackParams

The parameters for the [\`onLayerChange\`](API.md#feltcontroller#onlayerchange) listener.

# Properties

## layer

> **layer**: `null` \| [`Layer`](#layer)

The new data for the layer or null if the layer was removed.

***

# GetRenderedFeaturesConstraint

Constraints for the [\`getRenderedFeatures\`](API.md#feltcontroller#getrenderedfeatures) method. This can include layer constriants, spatial constraints, or both. If no constraints are
provided, all rendered features will be returned.

# Properties

## areaQuery?

> `optional` **areaQuery**: \{ `coordinates`: [`LatLng`](Shared.md#latlng); \} \| \{ `boundary`: \[`number`, `number`, `number`, `number`\]; \}

The area to query for rendered features. This can be specific coordinates or a [FeltBoundary](Shared.md#feltboundary). If omitted, the entire viewport will be queried.

## layerIds?

> `optional` **layerIds**: `string`[]

The ids of the layers to get rendered features for.

***

# LayerProcessingStatus

> **LayerProcessingStatus** = `z.infer`\<*typeof* `LayerProcessingStatusSchema`\>

This describes the processing status of a layer.

The various values are:
- `processing`: The layer has been uploaded or updated and is still processing.
- `completed`: The layer has been processed and can be viewed on the map.
- `failed`: The layer failed to process and cannot be viewed on the map.
- `incomplete`: The layer has not been processed.

***

# LegendItem

A legend item, which often represents a sub-class of features in a
layer in the case of categorical or classed layers.

# Properties

## title

> **title**: `string` \| `string`[]

The title of the legend item.

## titleDependsOnZoom

> **titleDependsOnZoom**: `boolean`

Whether the title depends on the zoom level or not. If it does, you
need to call [\`getLegendItem\`](API.md#feltcontroller#getlegenditem) when the zoom level changes.

Note that as the zoom level changes, the [\`onLegendItemChange\`](API.md#feltcontroller#onlegenditemchange) handler
will not be called, so you need to call [\`getLegendItem\`](API.md#feltcontroller#getlegenditem) yourself.

## visible

> **visible**: `boolean`

Whether the legend item is visible or not.

## id

> **id**: `string`

The id of the legend item.

## layerId

> **layerId**: `string`

The id of the layer the legend item belongs to.

***

# LegendItemIdentifier

The identifier for a legend item. It is a compound key of the layer to
which the legend item belongs and the legend item's own id.

# Properties

## id

> **id**: `string`

The id of the legend item.

## layerId

> **layerId**: `string`

The id of the layer the legend item belongs to.

***

# LegendItemsConstraint

Constraints for legend items. If nothing is passed, all legend items will be returned.

# Properties

## ids?

> `optional` **ids**: \{ `id`: `string`; `layerId`: `string`; \}[]

Array of legend item identifiers to constrain by.

| Name | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The id of the legend item. |
| `layerId` | `string` | The id of the layer the legend item belongs to. |

## layerIds?

> `optional` **layerIds**: `string`[]

Array of layer ids to constrain legend items by.

***

# LegendItemChangeCallbackParams

The parameters for the [\`onLegendItemChange\`](API.md#feltcontroller#onlegenditemchange) listener.

# Properties

## legendItem

> **legendItem**: `null` \| [`LegendItem`](#legenditem)

The new data for the legend item or null if the legend item was removed.
