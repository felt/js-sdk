***

The Layers controller allows you to get information about the layers on the
map, and make changes to their visibility.

Layers can be organised into groups, and their groups can also have their
visibility toggled.

# Extended by

* [`FeltController`](../Main/FeltController.md)

# Methods

## getLayer()

> **getLayer**(`id`: `string`): `Promise`\<`null` | [`Layer`](Layer.md)>

Get a single layer from the map by its id.

### Parameters

| Parameter | Type     | Description                          |
| --------- | -------- | ------------------------------------ |
| `id`      | `string` | The id of the layer you want to get. |

### Returns

`Promise`\<`null` | [`Layer`](Layer.md)>

The requested layer.

### Example

```typescript
const layer = await felt.getLayer("layer-1");
```

***

## getLayers()

> **getLayers**(`constraint`?: [`GetLayersConstraint`](GetLayersConstraint.md)): `Promise`\<(`null` | [`Layer`](Layer.md))\[]>

Gets layers from the map, according to the constraints supplied. If no
constraints are supplied, all layers will be returned.

### Parameters

| Parameter     | Type                                            | Description                                                   |
| ------------- | ----------------------------------------------- | ------------------------------------------------------------- |
| `constraint`? | [`GetLayersConstraint`](GetLayersConstraint.md) | The constraints to apply to the layers returned from the map. |

### Returns

`Promise`\<(`null` | [`Layer`](Layer.md))\[]>

All layers on the map.

### Remarks

The layers in the map, ordered by the order specified in Felt. This is not
necessarily the order that they are drawn in, as Felt draws points above
lines and lines above polygons, for instance.

### Example

```typescript
const layers = await felt.getLayers();
```

***

## setLayerVisibility()

> **setLayerVisibility**(`visibility`: [`SetVisibilityRequest`](../Shared/SetVisibilityRequest.md)): `Promise`\<`void`>

Hide or show layers with the given ids.

### Parameters

| Parameter    | Type                                                        |
| ------------ | ----------------------------------------------------------- |
| `visibility` | [`SetVisibilityRequest`](../Shared/SetVisibilityRequest.md) |

### Returns

`Promise`\<`void`>

### Example

```typescript
felt.setLayerVisibility({ show: ["layer-1", "layer-2"], hide: ["layer-3"] });
```

***

## setLayerStyle()

> **setLayerStyle**(`params`: \{ `id`: `string`; `style`: `object`; }): `Promise`\<`void`>

Set the style for a layer using FSL, the Felt Style Language.

Changes are only for this session, and not persisted. This is useful to make
temporary changes to a layer's style, such as to highlight a particular layer
or feature.

See the [FSL documentation](https://developers.felt.com/felt-style-language) for details
on how to read and write styles.

If the style you set is invalid, you will receive an error explaining the problem
in the rejected promise value.

### Parameters

| Parameter      | Type                                    | Description                               |
| -------------- | --------------------------------------- | ----------------------------------------- |
| `params`       | \{ `id`: `string`; `style`: `object`; } | -                                         |
| `params.id`    | `string`                                | The id of the layer to set the style for. |
| `params.style` | `object`                                | The style to set for the layer.           |

### Returns

`Promise`\<`void`>

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

***

## setLayerLegendVisibility()

> **setLayerLegendVisibility**(`params`: [`SetVisibilityRequest`](../Shared/SetVisibilityRequest.md)): `Promise`\<`void`>

Hide or show layers with the given ids from the legend.

### Parameters

| Parameter | Type                                                        |
| --------- | ----------------------------------------------------------- |
| `params`  | [`SetVisibilityRequest`](../Shared/SetVisibilityRequest.md) |

### Returns

`Promise`\<`void`>

### Example

```typescript
felt.setLayerLegendVisibility({ show: ["layer-1", "layer-2"], hide: ["layer-3"] });
```

***

## getLayerGroup()

> **getLayerGroup**(`id`: `string`): `Promise`\<`null` | [`LayerGroup`](LayerGroup.md)>

Get a layer group from the map by its id.

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `id`      | `string` |

### Returns

`Promise`\<`null` | [`LayerGroup`](LayerGroup.md)>

The requested layer group.

### Example

```typescript
const layerGroup = await felt.getLayerGroup("layer-group-1");
```

***

## getLayerGroups()

> **getLayerGroups**(`constraint`?: [`GetLayerGroupsConstraint`](GetLayerGroupsConstraint.md)): `Promise`\<(`null` | [`LayerGroup`](LayerGroup.md))\[]>

Gets layer groups from the map, according to the constraints supplied. If no
constraints are supplied, all layer groups will be returned in rendering order.

### Parameters

| Parameter     | Type                                                      | Description                                                         |
| ------------- | --------------------------------------------------------- | ------------------------------------------------------------------- |
| `constraint`? | [`GetLayerGroupsConstraint`](GetLayerGroupsConstraint.md) | The constraints to apply to the layer groups returned from the map. |

### Returns

`Promise`\<(`null` | [`LayerGroup`](LayerGroup.md))\[]>

The requested layer groups.

### Example

```typescript
const layerGroups = await felt.getLayerGroups({ ids: ["layer-group-1", "layer-group-2"] });
```

***

## setLayerGroupVisibility()

> **setLayerGroupVisibility**(`visibility`: [`SetVisibilityRequest`](../Shared/SetVisibilityRequest.md)): `Promise`\<`void`>

Hide or show layer groups with the given ids.

### Parameters

| Parameter    | Type                                                        |
| ------------ | ----------------------------------------------------------- |
| `visibility` | [`SetVisibilityRequest`](../Shared/SetVisibilityRequest.md) |

### Returns

`Promise`\<`void`>

### Example

```typescript
felt.setLayerGroupVisibility({ show: ["layer-group-1", "layer-group-2"], hide: ["layer-group-3"] });
```

***

## setLayerGroupLegendVisibility()

> **setLayerGroupLegendVisibility**(`params`: [`SetVisibilityRequest`](../Shared/SetVisibilityRequest.md)): `Promise`\<`void`>

Hide or show layer groups with the given ids from the legend.

### Parameters

| Parameter | Type                                                        |
| --------- | ----------------------------------------------------------- |
| `params`  | [`SetVisibilityRequest`](../Shared/SetVisibilityRequest.md) |

### Returns

`Promise`\<`void`>

### Example

```typescript
felt.setLayerGroupLegendVisibility({ show: ["layer-1", "layer-2"], hide: ["layer-3"] });
```

***

## getLegendItem()

> **getLegendItem**(`id`: [`LegendItemIdentifier`](LegendItemIdentifier.md)): `Promise`\<`null` | [`LegendItem`](LegendItem.md)>

Allows you to get the state of a single legend item.

### Parameters

| Parameter | Type                                              |
| --------- | ------------------------------------------------- |
| `id`      | [`LegendItemIdentifier`](LegendItemIdentifier.md) |

### Returns

`Promise`\<`null` | [`LegendItem`](LegendItem.md)>

### Example

```typescript
const legendItem = await felt.getLegendItem({
  id: "legend-item-1",
  layerId: "layer-1",
})
```

***

## getLegendItems()

> **getLegendItems**(`constraint`?: [`LegendItemsConstraint`](LegendItemsConstraint.md)): `Promise`\<(`null` | [`LegendItem`](LegendItem.md))\[]>

Allows you to obtain the state of several legend items, by passing in
constraints describing which legend items you want.

If you do not pass any constraints, you will receive all legend items.

### Parameters

| Parameter     | Type                                                |
| ------------- | --------------------------------------------------- |
| `constraint`? | [`LegendItemsConstraint`](LegendItemsConstraint.md) |

### Returns

`Promise`\<(`null` | [`LegendItem`](LegendItem.md))\[]>

### Example

```typescript
const legendItems = await felt.getLegendItems({layerId: "layer-1"});
```

***

## setLegendItemVisibility()

> **setLegendItemVisibility**(`visibility`: \{ `show`: [`LegendItemIdentifier`](LegendItemIdentifier.md)\[]; `hide`: [`LegendItemIdentifier`](LegendItemIdentifier.md)\[]; }): `Promise`\<`void`>

Hide or show legend items with the given identifiers.

### Parameters

| Parameter          | Type                                                                                                                             |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| `visibility`       | \{ `show`: [`LegendItemIdentifier`](LegendItemIdentifier.md)\[]; `hide`: [`LegendItemIdentifier`](LegendItemIdentifier.md)\[]; } |
| `visibility.show`? | [`LegendItemIdentifier`](LegendItemIdentifier.md)\[]                                                                             |
| `visibility.hide`? | [`LegendItemIdentifier`](LegendItemIdentifier.md)\[]                                                                             |

### Returns

`Promise`\<`void`>

### Example

```typescript
felt.setLegendItemVisibility({
  show: [{layerId: "layer-group-1", id: "item-1-0"}],
  hide: [{layerId: "layer-group-2", id: "item-2-0"}],
})
```

***

## getLayerFilters()

> **getLayerFilters**(`layerId`: `string`): `Promise`\<`null` | [`LayerFilters`](LayerFilters.md)>

Get the filters for a layer.

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `layerId` | `string` |

### Returns

`Promise`\<`null` | [`LayerFilters`](LayerFilters.md)>

### Remarks

The return type gives you the filters split up into the various sources
that make up the overall filters for a layer.

### Example

```typescript
const filters = await felt.getLayerFilters("layer-1");
console.log(filters.combined, filters.style, filters.ephemeral, filters.components);
```

***

## setLayerFilters()

> **setLayerFilters**(`params`: \{ `layerId`: `string`; `filters`: [`Filters`](Filters.md); `note`: `string`; }): `Promise`\<`void`>

Sets the **ephemeral** filters for a layer.

### Parameters

| Parameter        | Type                                                                            | Description                                                                                                                                                          |
| ---------------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `params`         | \{ `layerId`: `string`; `filters`: [`Filters`](Filters.md); `note`: `string`; } | -                                                                                                                                                                    |
| `params.layerId` | `string`                                                                        | The layer that you want to set the filters for.                                                                                                                      |
| `params.filters` | [`Filters`](Filters.md)                                                         | The filters to set for the layer. This will replace any ephemeral filters that are currently set for the layer.                                                      |
| `params.note`?   | `string`                                                                        | A note to display on the layer legend when this filter is applied. When the note is shown, a reset button will also be shown, allowing the user to clear the filter. |

### Returns

`Promise`\<`void`>

### Example

```typescript
await felt.setLayerFilters({
  layerId: "layer-1",
  filters: ["AREA", "gt", 30_000],
});
```

***

## getRenderedFeatures()

> **getRenderedFeatures**(`params`?: [`GetRenderedFeaturesConstraint`](GetRenderedFeaturesConstraint.md)): `Promise`\<[`Feature`](Feature.md)\[]>

Get the features that are currently **rendered** on the map in the viewport.

Note that this is explicitly about the features that are rendered, which isn't
necessarily a complete list of all the features in the viewport. This is because
of the way features are tiled: at low zoom levels or high feature densities, many
features are omitted from what is rendered on the screen.

### Parameters

| Parameter | Type                                                                | Description                                                     |
| --------- | ------------------------------------------------------------------- | --------------------------------------------------------------- |
| `params`? | [`GetRenderedFeaturesConstraint`](GetRenderedFeaturesConstraint.md) | The constraints to apply to the features returned from the map. |

### Returns

`Promise`\<[`Feature`](Feature.md)\[]>

### Example

```typescript
const features = await felt.getRenderedFeatures();
```

***

## getCategoryData()

> **getCategoryData**(`params`: [`GetLayerCategoriesParams`](GetLayerCategoriesParams.md)): `Promise`\<[`GetLayerCategoriesGroup`](GetLayerCategoriesGroup.md)\[]>

Gets values from a layer grouped by a given attribute.

### Parameters

| Parameter | Type                                                      |
| --------- | --------------------------------------------------------- |
| `params`  | [`GetLayerCategoriesParams`](GetLayerCategoriesParams.md) |

### Returns

`Promise`\<[`GetLayerCategoriesGroup`](GetLayerCategoriesGroup.md)\[]>

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

***

## getHistogramData()

> **getHistogramData**(`params`: [`GetLayerHistogramParams`](GetLayerHistogramParams.md)): `Promise`\<[`GetLayerHistogramBin`](GetLayerHistogramBin.md)\[]>

Gets a histogram of values from a layer for a given attribute.

### Parameters

| Parameter | Type                                                    |
| --------- | ------------------------------------------------------- |
| `params`  | [`GetLayerHistogramParams`](GetLayerHistogramParams.md) |

### Returns

`Promise`\<[`GetLayerHistogramBin`](GetLayerHistogramBin.md)\[]>

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

***

## getAggregates()

> **getAggregates**\<`T`>(`params`: [`GetLayerCalculationParams`](GetLayerCalculationParams.md)\<`T`>): `Promise`\<`Record`\<`T`, `null` | `number`>>

Calculates a single aggregate value for a layer based on the provided configuration.

### Type Parameters

| Type Parameter                                                                    |
| --------------------------------------------------------------------------------- |
| `T` *extends* `"avg"` \| `"max"` \| `"min"` \| `"sum"` \| `"median"` \| `"count"` |

### Parameters

| Parameter | Type                                                              |
| --------- | ----------------------------------------------------------------- |
| `params`  | [`GetLayerCalculationParams`](GetLayerCalculationParams.md)\<`T`> |

### Returns

`Promise`\<`Record`\<`T`, `null` | `number`>>

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

> **onLayerChange**(`args`: \{ `options`: \{ `id`: `string`; }; `handler`: (`change`: [`LayerChangeCallbackParams`](LayerChangeCallbackParams.md)) => `void`; }): `VoidFunction`

Adds a listener for when a layer changes.

### Parameters

| Parameter         | Type                                                                                                                                | Description                                        |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| `args`            | \{ `options`: \{ `id`: `string`; }; `handler`: (`change`: [`LayerChangeCallbackParams`](LayerChangeCallbackParams.md)) => `void`; } | -                                                  |
| `args.options`    | \{ `id`: `string`; }                                                                                                                | -                                                  |
| `args.options.id` | `string`                                                                                                                            | The id of the layer to listen for changes to.      |
| `args.handler`    | (`change`: [`LayerChangeCallbackParams`](LayerChangeCallbackParams.md)) => `void`                                                   | The handler that is called when the layer changes. |

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

***

## onLayerGroupChange()

> **onLayerGroupChange**(`args`: \{ `options`: \{ `id`: `string`; }; `handler`: (`change`: [`LayerGroupChangeCallbackParams`](LayerGroupChangeCallbackParams.md)) => `void`; }): `VoidFunction`

Adds a listener for when a layer group changes.

### Parameters

| Parameter         | Type                                                                                                                                          |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `args`            | \{ `options`: \{ `id`: `string`; }; `handler`: (`change`: [`LayerGroupChangeCallbackParams`](LayerGroupChangeCallbackParams.md)) => `void`; } |
| `args.options`    | \{ `id`: `string`; }                                                                                                                          |
| `args.options.id` | `string`                                                                                                                                      |
| `args.handler`    | (`change`: [`LayerGroupChangeCallbackParams`](LayerGroupChangeCallbackParams.md)) => `void`                                                   |

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

***

## onLegendItemChange()

> **onLegendItemChange**(`args`: \{ `options`: [`LegendItemIdentifier`](LegendItemIdentifier.md); `handler`: (`change`: [`LegendItemChangeCallbackParams`](LegendItemChangeCallbackParams.md)) => `void`; }): `VoidFunction`

Adds a listener for when a legend item changes.

### Parameters

| Parameter      | Type                                                                                                                                                                       |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `args`         | \{ `options`: [`LegendItemIdentifier`](LegendItemIdentifier.md); `handler`: (`change`: [`LegendItemChangeCallbackParams`](LegendItemChangeCallbackParams.md)) => `void`; } |
| `args.options` | [`LegendItemIdentifier`](LegendItemIdentifier.md)                                                                                                                          |
| `args.handler` | (`change`: [`LegendItemChangeCallbackParams`](LegendItemChangeCallbackParams.md)) => `void`                                                                                |

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

## onLayerFiltersChange()

> **onLayerFiltersChange**(`params`: \{ `options`: \{ `layerId`: `string`; }; `handler`: (`change`: [`LayerFilters`](LayerFilters.md)) => `void`; }): `VoidFunction`

Adds a listener for when a layer's filters change.

### Parameters

| Parameter                | Type                                                                                                           |
| ------------------------ | -------------------------------------------------------------------------------------------------------------- |
| `params`                 | \{ `options`: \{ `layerId`: `string`; }; `handler`: (`change`: [`LayerFilters`](LayerFilters.md)) => `void`; } |
| `params.options`         | \{ `layerId`: `string`; }                                                                                      |
| `params.options.layerId` | `string`                                                                                                       |
| `params.handler`         | (`change`: [`LayerFilters`](LayerFilters.md)) => `void`                                                        |

### Returns

`VoidFunction`

A function to unsubscribe from the listener

### Remarks

This event fires whenever any type of filter changes on the layer, including
ephemeral filters set via the SDK, style-based filters, or filters set through
the Felt UI via Components.

### Example

```typescript
const unsubscribe = felt.onLayerFiltersChange({
  options: { layerId: "layer-1" },
  handler: ({combined, ephemeral, style, components}) => {
    console.log("Layer filters updated:", {
      combined,  // All filters combined
      ephemeral, // Filters set via SDK
      style,     // Filters from layer style
      components // Filters from UI components
    });
  },
});

// later on...
unsubscribe();
```
