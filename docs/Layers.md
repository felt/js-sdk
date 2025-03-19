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

# Feature

A feature is a single geographical item in a layer.
The unique ID for a feature is a compound key made up of the layer ID and the feature ID.

# Properties

## id

> **id**: `string` \| `number`

The identifier of the feature, unique within the layer.

## layerId

> **layerId**: `string`

The identifier of the layer that the feature belongs to.

## geometryType

> **geometryType**: `"Point"` \| `"Polygon"` \| `"LineString"` \| `"MultiPolygon"` \| `string` & \{\}

The type of geometry of the feature.

## properties

> **properties**: `Record`\<`string`, `unknown`\>

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
the [LayersController.getCategoryData](#getcategorydata) method.

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

A single category from the response from the [LayersController.getCategoryData](#getcategorydata) method.

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
the [LayersController.getHistogramData](#gethistogramdata) method.

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
| `boundary?` | \[`number`, `number`\][] \| \[`number`, `number`, `number`, `number`\] \| \{ `type`: `"Polygon"`; `coordinates`: \[`number`, `number`\][][]; \} | - | - |
| `filters?` | `null` \| `boolean` \| \[`null` \| `string`, `"in"` \| `"ni"`, `null` \| (`null` \| `string` \| `number` \| `boolean`)[]\] \| \[`null` \| `string`, `"lt"` \| `"gt"` \| `"le"` \| `"ge"` \| `"eq"` \| `"ne"` \| `"cn"` \| `"nc"` \| `"is"` \| `"isnt"`, `null` \| `string` \| `number` \| `boolean`\] \| [`FilterTernary`](#filterternary) | - | - |
| `aggregation?` | \{ `method`: `"avg"` \| `"max"` \| `"min"` \| `"sum"` \| `"median"`; `attribute`: `string`; \} | - | - |
| `aggregation.method` | `"avg"` \| `"max"` \| `"min"` \| `"sum"` \| `"median"` | AggregateMethodSchema | The operation to use on the values from the features in the layer |
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

One bin from the response from the [LayersController.getHistogramData](#gethistogramdata) method.

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
the [LayersController.getAggregates](#getaggregates) method.

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

# AggregationMethod

> **AggregationMethod** = `z.infer`\<*typeof* `AggregateMethodSchema`\>

The method to use for the aggregation.

***

# LayersController

The Layers controller allows you to get information about the layers on the
map, and make changes to their visibility.

Layers can be organised into groups, and their groups can also have their
visibility toggled.

# Extended by

- [`FeltController`](Main.md#feltcontroller)

# Methods

## getLayer()

> **getLayer**(`id`: `string`): `Promise`\<`null` \| [`Layer`](#layer)\>

Get a single layer from the map by its id.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The id of the layer you want to get. |

### Returns

`Promise`\<`null` \| [`Layer`](#layer)\>

The requested layer.

### Example

```typescript
const layers = await felt.getLayer({ ids: ["layer-1", "layer-2"] });
```

## getLayers()

> **getLayers**(`constraint`?: [`GetLayersConstraint`](#getlayersconstraint)): `Promise`\<(`null` \| [`Layer`](#layer))[]\>

Gets layers from the map, according to the constraints supplied. If no
constraints are supplied, all layers will be returned.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `constraint`? | [`GetLayersConstraint`](#getlayersconstraint) | The constraints to apply to the layers returned from the map. |

### Returns

`Promise`\<(`null` \| [`Layer`](#layer))[]\>

All layers on the map.

### Remarks

The layers in the map, ordered by the order specified in Felt. This is not
necessarily the order that they are drawn in, as Felt draws points above
lines and lines above polygons, for instance.

### Example

```typescript
const layers = await felt.getLayers();
```

## setLayerVisibility()

> **setLayerVisibility**(`visibility`: [`SetVisibilityRequest`](Shared.md#setvisibilityrequest)): `Promise`\<`void`\>

Hide or show layers with the given ids.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `visibility` | [`SetVisibilityRequest`](Shared.md#setvisibilityrequest) |

### Returns

`Promise`\<`void`\>

### Example

```typescript
felt.setLayerVisibility({ show: ["layer-1", "layer-2"], hide: ["layer-3"] });
```

## setLayerStyle()

> **setLayerStyle**(`params`: \{ `id`: `string`; `style`: `object`; \}): `Promise`\<`void`\>

Set the style for a layer using FSL, the Felt Style Language.

Changes are only for this session, and not persisted. This is useful to make
temporary changes to a layer's style, such as to highlight a particular layer
or feature.

See the [FSL documentation](https://developers.felt.com/felt-style-language) for details
on how to read and write styles.

If the style you set is invalid, you will receive an error explaining the problem
in the rejected promise value.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `id`: `string`; `style`: `object`; \} | - |
| `params.id` | `string` | The id of the layer to set the style for. |
| `params.style` | `object` | The style to set for the layer. |

### Returns

`Promise`\<`void`\>

### Example

```typescript
// first get the current style
const oldStyle = (await felt.getLayer("layer-1")).style;

felt.setLayerStyle({ id: "layer-1", style: {
  ...oldStyle,
  paint: {
    ...oldStyle.paint,
    color: "red",
  },
} });
```

## setLayerLegendVisibility()

> **setLayerLegendVisibility**(`params`: [`SetVisibilityRequest`](Shared.md#setvisibilityrequest)): `Promise`\<`void`\>

Hide or show layers with the given ids from the legend.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`SetVisibilityRequest`](Shared.md#setvisibilityrequest) |

### Returns

`Promise`\<`void`\>

### Example

```typescript
felt.setLayerLegendVisibility({ show: ["layer-1", "layer-2"], hide: ["layer-3"] });
```

## getLayerGroup()

> **getLayerGroup**(`id`: `string`): `Promise`\<`null` \| [`LayerGroup`](#layergroup)\>

Get a layer group from the map by its id.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

### Returns

`Promise`\<`null` \| [`LayerGroup`](#layergroup)\>

The requested layer group.

### Example

```typescript
felt.getLayerGroup("layer-group-1");
```

## getLayerGroups()

> **getLayerGroups**(`constraint`?: [`GetLayerGroupsConstraint`](#getlayergroupsconstraint)): `Promise`\<(`null` \| [`LayerGroup`](#layergroup))[]\>

Gets layer groups from the map, according to the constraints supplied. If no
constraints are supplied, all layer groups will be returned in rendering order.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `constraint`? | [`GetLayerGroupsConstraint`](#getlayergroupsconstraint) | The constraints to apply to the layer groups returned from the map. |

### Returns

`Promise`\<(`null` \| [`LayerGroup`](#layergroup))[]\>

The requested layer groups.

### Example

```typescript
const layerGroups = await felt.getLayerGroups({ ids: ["layer-group-1", "layer-group-2"] });
```

## setLayerGroupVisibility()

> **setLayerGroupVisibility**(`visibility`: [`SetVisibilityRequest`](Shared.md#setvisibilityrequest)): `Promise`\<`void`\>

Hide or show layer groups with the given ids.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `visibility` | [`SetVisibilityRequest`](Shared.md#setvisibilityrequest) |

### Returns

`Promise`\<`void`\>

### Example

```typescript
felt.setLayerGroupVisibility({ show: ["layer-group-1", "layer-group-2"], hide: ["layer-group-3"] });
```

## setLayerGroupLegendVisibility()

> **setLayerGroupLegendVisibility**(`params`: [`SetVisibilityRequest`](Shared.md#setvisibilityrequest)): `Promise`\<`void`\>

Hide or show layer groups with the given ids from the legend.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`SetVisibilityRequest`](Shared.md#setvisibilityrequest) |

### Returns

`Promise`\<`void`\>

### Example

```typescript
felt.setLayerGroupLegendVisibility({ show: ["layer-1", "layer-2"], hide: ["layer-3"] });
```

## getLegendItem()

> **getLegendItem**(`id`: [`LegendItemIdentifier`](#legenditemidentifier)): `Promise`\<`null` \| [`LegendItem`](#legenditem)\>

Allows you to get the state of a single legend item.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | [`LegendItemIdentifier`](#legenditemidentifier) |

### Returns

`Promise`\<`null` \| [`LegendItem`](#legenditem)\>

### Example

```typescript
const legendItem = await felt.getLegendItem({
  id: "legend-item-1",
  layerId: "layer-1",
})
```

## getLegendItems()

> **getLegendItems**(`constraint`?: [`LegendItemsConstraint`](#legenditemsconstraint)): `Promise`\<(`null` \| [`LegendItem`](#legenditem))[]\>

Allows you to obtain the state of several legend items, by passing in
constraints describing which legend items you want.

If you do not pass any constraints, you will receive all legend items.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `constraint`? | [`LegendItemsConstraint`](#legenditemsconstraint) |

### Returns

`Promise`\<(`null` \| [`LegendItem`](#legenditem))[]\>

### Example

```typescript
const legendItems = await felt.getLegendItems({layerId: "layer-1"});
```

## setLegendItemVisibility()

> **setLegendItemVisibility**(`visibility`: \{ `show`: [`LegendItemIdentifier`](#legenditemidentifier)[]; `hide`: [`LegendItemIdentifier`](#legenditemidentifier)[]; \}): `Promise`\<`void`\>

Hide or show legend items with the given identifiers.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `visibility` | \{ `show`: [`LegendItemIdentifier`](#legenditemidentifier)[]; `hide`: [`LegendItemIdentifier`](#legenditemidentifier)[]; \} |
| `visibility.show`? | [`LegendItemIdentifier`](#legenditemidentifier)[] |
| `visibility.hide`? | [`LegendItemIdentifier`](#legenditemidentifier)[] |

### Returns

`Promise`\<`void`\>

### Example

```typescript
felt.setLegendItemVisibility({
  show: [{layerId: "layer-group-1", id: "item-1-0"}],
  hide: [{layerId: "layer-group-2", id: "item-2-0"}],
})
```

## getLayerFilters()

> **getLayerFilters**(`layerId`: `string`): `Promise`\<`null` \| [`LayerFilters`](#layerfilters)\>

Get the filters for a layer.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `layerId` | `string` |

### Returns

`Promise`\<`null` \| [`LayerFilters`](#layerfilters)\>

### Remarks

The return type gives you the filters split up into the various sources
that make up the overall filters for a layer.

### Example

```typescript
const filters = await felt.getLayerFilters("layer-1");
console.log(filters.combined, filters.style, filters.ephemeral, filters.components);
```

## setLayerFilters()

> **setLayerFilters**(`params`: \{ `layerId`: `string`; `filters`: [`Filters`](#filters-4); `note`: `string`; \}): `Promise`\<`void`\>

Sets the **ephemeral** filters for a layer.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `layerId`: `string`; `filters`: [`Filters`](#filters-4); `note`: `string`; \} | - |
| `params.layerId` | `string` | The layer that you want to set the filters for. |
| `params.filters` | [`Filters`](#filters-4) | The filters to set for the layer. This will replace any ephemeral filters that are currently set for the layer. |
| `params.note`? | `string` | A note to display on the layer legend when this filter is applied. When the note is shown, a reset button will also be shown, allowing the user to clear the filter. |

### Returns

`Promise`\<`void`\>

### Example

```typescript
felt.setLayerFilters({
  layerId: "layer-1",
  filters: ["AREA", "gt", 30_000],
});
```

## getRenderedFeatures()

> **getRenderedFeatures**(`params`?: [`GetRenderedFeaturesConstraint`](#getrenderedfeaturesconstraint)): `Promise`\<[`Feature`](#feature)[]\>

Get the features that are currently **rendered** on the map in the viewport.

Note that this is explicitly about the features that are rendered, which isn't
necessarily a complete list of all the features in the viewport. This is because
of the way features are tiled: at low zoom levels or high feature densities, many
features are omitted from what is rendered on the screen.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params`? | [`GetRenderedFeaturesConstraint`](#getrenderedfeaturesconstraint) | The constraints to apply to the features returned from the map. |

### Returns

`Promise`\<[`Feature`](#feature)[]\>

### Example

```typescript
const features = await felt.getRenderedFeatures();
```

## getCategoryData()

> **getCategoryData**(`params`: [`GetLayerCategoriesParams`](#getlayercategoriesparams)): `Promise`\<[`GetLayerCategoriesGroup`](#getlayercategoriesgroup)[]\>

Gets values from a layer grouped by a given attribute.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`GetLayerCategoriesParams`](#getlayercategoriesparams) |

### Returns

`Promise`\<[`GetLayerCategoriesGroup`](#getlayercategoriesgroup)[]\>

### Remarks

Groups features in your layer by unique values in the specified attribute and calculates
a value for each group. By default, this value is the count of features in each group.

You can apply filters in two ways:
1. At the top level (using `boundary` and `filters`), which affects both what categories
   are included and how values are calculated
2. In the `values` configuration, which only affects the values but keeps all categories

This two-level filtering is particularly useful when you want to compare subsets of data
while maintaining consistent categories. For example, you might want to show the distribution
of all building types in a city, but only count buildings built after 2000 in each category.

### Example

```typescript
// Basic grouping: Count of buildings by type
const buildingsByType = await felt.getCategoryData({
  layerId: "buildings",
  attribute: "type"
});

// Filtered grouping: Only count buildings in downtown
const downtownBuildingsByType = await felt.getCategoryData({
  layerId: "buildings",
  attribute: "type",
  boundary: [-122.43, 47.60, -122.33, 47.62]  // downtown boundary
});

// Advanced: Show all building types, but only sum floor area of recent buildings
const recentBuildingAreaByType = await felt.getCategoryData({
  layerId: "buildings",
  attribute: "type",
  values: {
    filters: ["year_built", "gte", 2000],
    aggregation: {
      method: "sum",
      attribute: "floor_area"
    }
  }
});

// Compare residential density across neighborhoods while only counting recent buildings
const newBuildingDensityByNeighborhood = await felt.getCategoryData({
  layerId: "buildings",
  attribute: "neighborhood",
  values: {
    filters: ["year_built", "gte", 2000],
    aggregation: {
      method: "avg",
      attribute: "units_per_acre"
    }
  }
});
```

## getHistogramData()

> **getHistogramData**(`params`: [`GetLayerHistogramParams`](#getlayerhistogramparams)): `Promise`\<[`GetLayerHistogramBin`](#getlayerhistogrambin)[]\>

Gets a histogram of values from a layer for a given attribute.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`GetLayerHistogramParams`](#getlayerhistogramparams) |

### Returns

`Promise`\<[`GetLayerHistogramBin`](#getlayerhistogrambin)[]\>

### Remarks

Creates bins (ranges) for numeric data and counts how many features fall into each bin,
or returns aggregated values for each bin.

You can control how the bins are created using the `steps` parameter, choosing from
several methods like equal intervals, quantiles, or natural breaks (Jenks), or passing
in the step values directly if you know how you want to bin the data.

Like getCategoryData, you can apply filters in two ways:
1. At the top level (using `boundary` and `filters`), which affects both how the bins
   are calculated and what features are counted in each bin
2. In the `values` configuration, which only affects what gets counted but keeps the
   bin ranges the same

This is particularly useful when you want to compare distributions while keeping
consistent bin ranges. For example, you might want to compare the distribution of
building heights in different years while using the same height ranges.

### Example

```typescript
// Basic histogram: Building heights in 5 natural break bins
const buildingHeights = await felt.getHistogramData({
  layerId: "buildings",
  attribute: "height",
  steps: { type: "jenks", count: 5 }
});

// Compare old vs new buildings using the same height ranges
const oldBuildingHeights = await felt.getHistogramData({
  layerId: "buildings",
  attribute: "height",
  steps: [0, 20, 50, 100, 200, 500],
  values: {
    filters: ["year_built", "lt", 1950]
  }
});

const newBuildingHeights = await felt.getHistogramData({
  layerId: "buildings",
  attribute: "height",
  steps: [0, 20, 50, 100, 200, 500],  // Same ranges as above
  values: {
    filters: ["year_built", "gte", 1950]
  }
});
```

## getAggregates()

> **getAggregates**\<`T`\>(`params`: [`GetLayerCalculationParams`](#getlayercalculationparams)\<`T`\>): `Promise`\<`Record`\<`T`, `null` \| `number`\>\>

Calculates a single aggregate value for a layer based on the provided configuration.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `"avg"` \| `"max"` \| `"min"` \| `"sum"` \| `"median"` \| `"count"` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`GetLayerCalculationParams`](#getlayercalculationparams)\<`T`\> |

### Returns

`Promise`\<`Record`\<`T`, `null` \| `number`\>\>

### Remarks

Performs statistical calculations on your data, like counting features or computing
averages, sums, etc. You can focus your calculation on specific areas or subsets
of your data using boundaries and filters.

When no aggregation is specified, it counts features. When an aggregation is provided,
it performs that calculation (average, sum, etc.) on the specified attribute.

### Example

```typescript
// Count all residential buildings
const residentialCount = await felt.getAggregates({
  layerId: "buildings",
  filters: ["type", "eq", "residential"]
});

// Calculate average home value in a specific neighborhood
const avgHomeValue = await felt.getAggregates({
  layerId: "buildings",
  boundary: [-122.43, 47.60, -122.33, 47.62],  // neighborhood boundary
  aggregation: {
    method: "avg",
    attribute: "assessed_value"
  }
});

// Find the maximum building height for buildings built after 2000
const maxNewBuildingHeight = await felt.getAggregates({
  layerId: "buildings",
  filters: ["year_built", "gte", 2000],
  aggregation: {
    method: "max",
    attribute: "height"
  }
});
```

# Events

## onLayerChange()

> **onLayerChange**(`args`: \{ `options`: \{ `id`: `string`; \}; `handler`: (`change`: [`LayerChangeCallbackParams`](#layerchangecallbackparams)) => `void`; \}): `VoidFunction`

Adds a listener for when a layer changes.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `args` | \{ `options`: \{ `id`: `string`; \}; `handler`: (`change`: [`LayerChangeCallbackParams`](#layerchangecallbackparams)) => `void`; \} | - |
| `args.options` | \{ `id`: `string`; \} | - |
| `args.options.id` | `string` | The id of the layer to listen for changes to. |
| `args.handler` | (`change`: [`LayerChangeCallbackParams`](#layerchangecallbackparams)) => `void` | The handler that is called when the layer changes. |

### Returns

`VoidFunction`

A function to unsubscribe from the listener

### Example

```typescript
const unsubscribe = felt.onLayerChange({
  options: { id: "layer-1" },
  handler: ({layer}) => console.log(layer.bounds),
});

// later on...
unsubscribe();
```

## onLayerGroupChange()

> **onLayerGroupChange**(`args`: \{ `options`: \{ `id`: `string`; \}; `handler`: (`change`: [`LayerGroupChangeCallbackParams`](#layergroupchangecallbackparams)) => `void`; \}): `VoidFunction`

Adds a listener for when a layer group changes.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `options`: \{ `id`: `string`; \}; `handler`: (`change`: [`LayerGroupChangeCallbackParams`](#layergroupchangecallbackparams)) => `void`; \} |
| `args.options` | \{ `id`: `string`; \} |
| `args.options.id` | `string` |
| `args.handler` | (`change`: [`LayerGroupChangeCallbackParams`](#layergroupchangecallbackparams)) => `void` |

### Returns

`VoidFunction`

A function to unsubscribe from the listener

### Example

```typescript
const unsubscribe = felt.onLayerGroupChange({
  options: { id: "layer-group-1" },
  handler: ({layerGroup}) => console.log(layerGroup.id),
});

// later on...
unsubscribe();
```

## onLegendItemChange()

> **onLegendItemChange**(`args`: \{ `options`: [`LegendItemIdentifier`](#legenditemidentifier); `handler`: (`change`: [`LegendItemChangeCallbackParams`](#legenditemchangecallbackparams)) => `void`; \}): `VoidFunction`

Adds a listener for when a legend item changes.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `options`: [`LegendItemIdentifier`](#legenditemidentifier); `handler`: (`change`: [`LegendItemChangeCallbackParams`](#legenditemchangecallbackparams)) => `void`; \} |
| `args.options` | [`LegendItemIdentifier`](#legenditemidentifier) |
| `args.handler` | (`change`: [`LegendItemChangeCallbackParams`](#legenditemchangecallbackparams)) => `void` |

### Returns

`VoidFunction`

A function to unsubscribe from the listener

### Example

```typescript
const unsubscribe = felt.onLegendItemChange({
  options: { layerId: "layer-1", id: "item-1-0" },
  handler: ({legendItem}) => console.log(legendItem.visible),
});

// later on...
unsubscribe();
```

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

***

# Filters

> **Filters** = [`FilterTernary`](#filterternary) \| [`FilterExpression`](#filterexpression) \| `null` \| `boolean`

Filters can be used to change which features in a layer are rendered. Filters can be
applied to a layer by the `setLayerFilters` method on the Felt controller.

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
// a simple filter
felt.setLayerFilters({
  layerId: "layer-1",
  filters: ["AREA", "gt", 30_000],
});

// compound filters can be constructed using boolean logic:
felt.setLayerFilters({
  layerId: "layer-1",
  filters: [["AREA", "gt", 30_000], "and", ["COLOR", "eq", "red"]]
})
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

You can use these ids to get the full layer objects via the `getLayers` method.

## visible

> **visible**: `boolean`

Whether the layer group is visible or not.

## shownInLegend

> **shownInLegend**: `boolean`

Whether the layer group is shown in the legend or not.

## bounds

> **bounds**: `null` \| \[`number`, `number`, `number`, `number`\]

The bounding box of the layer group.

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

The parameters for the `onLayerGroupChange` listener.

# Properties

## layerGroup

> **layerGroup**: `null` \| [`LayerGroup`](#layergroup)

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

The bounding box of the layer. If the layer is processing, or the bounds have otherwise
not been calculated or are not available, this will be `null`.

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

The parameters for the `onLayerChange` listener.

# Properties

## layer

> **layer**: `null` \| [`Layer`](#layer)

The new data for the layer or null if the layer was removed.

***

# GetRenderedFeaturesConstraint

Constraints for the `getRenderedFeatures` method. This can include layer constriants, spatial constraints, or both. If no constraints are
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
need to call `getLegendItem` when the zoom level changes.

Note that as the zoom level changes, the `onLegendItemChange` handler
will not be called, so you need to call `getLegendItem` yourself.

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

The parameters for the `onLegendItemChange` listener.

# Properties

## legendItem

> **legendItem**: `null` \| [`LegendItem`](#legenditem)

The new data for the legend item or null if the legend item was removed.
