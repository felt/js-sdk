***

Use the [Felt](#felt) object to embed a new iframe, or connect to an existing embedded
iframe.

Once you have connected to a Felt map (either by embedding or connecting to an existing
iframe), you can use the [FeltController](#feltcontroller) object to control the map.

To see what you can do with the map, see the documentation for the [FeltController](#feltcontroller)
interface and its constituent controllers.

# Example

```typescript
// embed the map
const map = await Felt.embed(container, "felt-map-abc-123");

// now the map is loaded and connected, you can use the FeltController interface
// to control the map. For instance, to get information about the layers
const layers = await map.getLayers();

// Or to set the viewport to a specific location and zoom level
await map.setViewport({
  center: { latitude: 37.8113, longitude: -122.2682 },
  zoom: 10,
});
```

# FeltController

This is the main interface for interacting with a Felt map.

This interface is composed of the various controllers, each having a
different area of responsibility.

All the methods are listed here, but each controller is documented on its
own to make it easier to find related methods and events.

# Extends

- [`ViewportController`](Viewport.md#viewportcontroller).[`UiController`](UI.md#uicontroller).[`LayersController`](Layers.md#layerscontroller).[`ElementsController`](Elements.md#elementscontroller).[`SelectionController`](Selection.md#selectioncontroller).[`InteractionsController`](Interactions.md#interactionscontroller).[`ToolsController`](Tools.md#toolscontroller).[`MiscController`](Misc.md#misccontroller)

# Properties

## iframe

> `readonly` **iframe**: `null` \| `HTMLIFrameElement`

The iframe element containing the Felt map, if it is an embedded map.

# Methods

## getElement()

> **getElement**(`id`: `string`): `Promise`\<`null` \| [`Element`](Elements.md#element-1)\>

Get a single element from the map by its id.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The id of the element you want to get. |

### Returns

`Promise`\<`null` \| [`Element`](Elements.md#element-1)\>

The requested element.

### Example

```typescript
const element = await felt.getElement("element-1");
```

## getElementGeometry()

> **getElementGeometry**(`id`: `string`): `Promise`\<`null` \| [`Geometry`](Shared.md#geometry)\>

Get the geometry of an element.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The id of the element you want to get the geometry of. |

### Returns

`Promise`\<`null` \| [`Geometry`](Shared.md#geometry)\>

### Example

```typescript
const geometry = await felt.getElementGeometry("element-1");
console.log(geometry?.type, geometry?.coordinates);
```

## getElements()

> **getElements**(`constraint`?: [`GetElementsConstraint`](Elements.md#getelementsconstraint)): `Promise`\<(`null` \| [`Element`](Elements.md#element-1))[]\>

Gets elements from the map, according to the constraints supplied. If no
constraints are supplied, all elements will be returned.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `constraint`? | [`GetElementsConstraint`](Elements.md#getelementsconstraint) | The constraints to apply to the elements returned from the map. |

### Returns

`Promise`\<(`null` \| [`Element`](Elements.md#element-1))[]\>

All elements on the map.

### Remarks

The elements in the map, ordered by the order specified in Felt. This is not
necessarily the order that they are drawn in, as Felt draws points above
lines and lines above polygons, for instance.

### Example

```typescript
const elements = await felt.getElements();
```

## getElementGroup()

> **getElementGroup**(`id`: `string`): `Promise`\<`null` \| [`ElementGroup`](Elements.md#elementgroup)\>

Get an element group from the map by its id.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

### Returns

`Promise`\<`null` \| [`ElementGroup`](Elements.md#elementgroup)\>

The requested element group.

### Example

```typescript
const elementGroup = await felt.getElementGroup("element-group-1");
```

## getElementGroups()

> **getElementGroups**(`constraint`?: [`GetElementGroupsConstraint`](Elements.md#getelementgroupsconstraint)): `Promise`\<(`null` \| [`ElementGroup`](Elements.md#elementgroup))[]\>

Gets element groups from the map, according to the filters supplied. If no
constraints are supplied, all element groups will be returned in rendering order.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `constraint`? | [`GetElementGroupsConstraint`](Elements.md#getelementgroupsconstraint) | The constraints to apply to the element groups returned from the map. |

### Returns

`Promise`\<(`null` \| [`ElementGroup`](Elements.md#elementgroup))[]\>

The requested element groups.

### Example

```typescript
const elementGroups = await felt.getElementGroups({ ids: ["element-group-1", "element-group-2"] });
```

## setElementGroupVisibility()

> **setElementGroupVisibility**(`visibility`: [`SetVisibilityRequest`](Shared.md#setvisibilityrequest)): `Promise`\<`void`\>

Hide or show element groups with the given ids.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `visibility` | [`SetVisibilityRequest`](Shared.md#setvisibilityrequest) |

### Returns

`Promise`\<`void`\>

### Example

```typescript
felt.setElementGroupVisibility({ show: ["element-group-1", "element-group-2"], hide: ["element-group-3"] });
```

## createElement()

> **createElement**(`element`: [`ElementCreate`](Elements.md#elementcreate)): `Promise`\<[`Element`](Elements.md#element-1)\>

Create a new element on the map.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `element` | [`ElementCreate`](Elements.md#elementcreate) |

### Returns

`Promise`\<[`Element`](Elements.md#element-1)\>

### Example

```typescript
const element = await felt.createElement({ type: "Place", coordinates: [10, 10] });
```

## updateElement()

> **updateElement**(`element`: [`ElementUpdate`](Elements.md#elementupdate)): `Promise`\<[`Element`](Elements.md#element-1)\>

Update an element on the map.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `element` | [`ElementUpdate`](Elements.md#elementupdate) |

### Returns

`Promise`\<[`Element`](Elements.md#element-1)\>

## deleteElement()

> **deleteElement**(`id`: `string`): `Promise`\<`void`\>

Delete an element from the map.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

### Returns

`Promise`\<`void`\>

## getLayer()

> **getLayer**(`id`: `string`): `Promise`\<`null` \| [`Layer`](Layers.md#layer)\>

Get a single layer from the map by its id.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The id of the layer you want to get. |

### Returns

`Promise`\<`null` \| [`Layer`](Layers.md#layer)\>

The requested layer.

### Example

```typescript
const layer = await felt.getLayer("layer-1");
```

## getLayers()

> **getLayers**(`constraint`?: [`GetLayersConstraint`](Layers.md#getlayersconstraint)): `Promise`\<(`null` \| [`Layer`](Layers.md#layer))[]\>

Gets layers from the map, according to the constraints supplied. If no
constraints are supplied, all layers will be returned.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `constraint`? | [`GetLayersConstraint`](Layers.md#getlayersconstraint) | The constraints to apply to the layers returned from the map. |

### Returns

`Promise`\<(`null` \| [`Layer`](Layers.md#layer))[]\>

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

> **getLayerGroup**(`id`: `string`): `Promise`\<`null` \| [`LayerGroup`](Layers.md#layergroup)\>

Get a layer group from the map by its id.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

### Returns

`Promise`\<`null` \| [`LayerGroup`](Layers.md#layergroup)\>

The requested layer group.

### Example

```typescript
const layerGroup = await felt.getLayerGroup("layer-group-1");
```

## getLayerGroups()

> **getLayerGroups**(`constraint`?: [`GetLayerGroupsConstraint`](Layers.md#getlayergroupsconstraint)): `Promise`\<(`null` \| [`LayerGroup`](Layers.md#layergroup))[]\>

Gets layer groups from the map, according to the constraints supplied. If no
constraints are supplied, all layer groups will be returned in rendering order.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `constraint`? | [`GetLayerGroupsConstraint`](Layers.md#getlayergroupsconstraint) | The constraints to apply to the layer groups returned from the map. |

### Returns

`Promise`\<(`null` \| [`LayerGroup`](Layers.md#layergroup))[]\>

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

> **getLegendItem**(`id`: [`LegendItemIdentifier`](Layers.md#legenditemidentifier)): `Promise`\<`null` \| [`LegendItem`](Layers.md#legenditem)\>

Allows you to get the state of a single legend item.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | [`LegendItemIdentifier`](Layers.md#legenditemidentifier) |

### Returns

`Promise`\<`null` \| [`LegendItem`](Layers.md#legenditem)\>

### Example

```typescript
const legendItem = await felt.getLegendItem({
  id: "legend-item-1",
  layerId: "layer-1",
})
```

## getLegendItems()

> **getLegendItems**(`constraint`?: [`LegendItemsConstraint`](Layers.md#legenditemsconstraint)): `Promise`\<(`null` \| [`LegendItem`](Layers.md#legenditem))[]\>

Allows you to obtain the state of several legend items, by passing in
constraints describing which legend items you want.

If you do not pass any constraints, you will receive all legend items.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `constraint`? | [`LegendItemsConstraint`](Layers.md#legenditemsconstraint) |

### Returns

`Promise`\<(`null` \| [`LegendItem`](Layers.md#legenditem))[]\>

### Example

```typescript
const legendItems = await felt.getLegendItems({layerId: "layer-1"});
```

## setLegendItemVisibility()

> **setLegendItemVisibility**(`visibility`: \{ `show`: [`LegendItemIdentifier`](Layers.md#legenditemidentifier)[]; `hide`: [`LegendItemIdentifier`](Layers.md#legenditemidentifier)[]; \}): `Promise`\<`void`\>

Hide or show legend items with the given identifiers.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `visibility` | \{ `show`: [`LegendItemIdentifier`](Layers.md#legenditemidentifier)[]; `hide`: [`LegendItemIdentifier`](Layers.md#legenditemidentifier)[]; \} |
| `visibility.show`? | [`LegendItemIdentifier`](Layers.md#legenditemidentifier)[] |
| `visibility.hide`? | [`LegendItemIdentifier`](Layers.md#legenditemidentifier)[] |

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

> **getLayerFilters**(`layerId`: `string`): `Promise`\<`null` \| [`LayerFilters`](Layers.md#layerfilters)\>

Get the filters for a layer.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `layerId` | `string` |

### Returns

`Promise`\<`null` \| [`LayerFilters`](Layers.md#layerfilters)\>

### Remarks

The return type gives you the filters split up into the various sources
that make up the overall filters for a layer.

### Example

```typescript
const filters = await felt.getLayerFilters("layer-1");
console.log(filters.combined, filters.style, filters.ephemeral, filters.components);
```

## setLayerFilters()

> **setLayerFilters**(`params`: \{ `layerId`: `string`; `filters`: [`Filters`](Layers.md#filters-4); `note`: `string`; \}): `Promise`\<`void`\>

Sets the **ephemeral** filters for a layer.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `layerId`: `string`; `filters`: [`Filters`](Layers.md#filters-4); `note`: `string`; \} | - |
| `params.layerId` | `string` | The layer that you want to set the filters for. |
| `params.filters` | [`Filters`](Layers.md#filters-4) | The filters to set for the layer. This will replace any ephemeral filters that are currently set for the layer. |
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

> **getRenderedFeatures**(`params`?: [`GetRenderedFeaturesConstraint`](Layers.md#getrenderedfeaturesconstraint)): `Promise`\<[`Feature`](Layers.md#feature)[]\>

Get the features that are currently **rendered** on the map in the viewport.

Note that this is explicitly about the features that are rendered, which isn't
necessarily a complete list of all the features in the viewport. This is because
of the way features are tiled: at low zoom levels or high feature densities, many
features are omitted from what is rendered on the screen.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params`? | [`GetRenderedFeaturesConstraint`](Layers.md#getrenderedfeaturesconstraint) | The constraints to apply to the features returned from the map. |

### Returns

`Promise`\<[`Feature`](Layers.md#feature)[]\>

### Example

```typescript
const features = await felt.getRenderedFeatures();
```

## getCategoryData()

> **getCategoryData**(`params`: [`GetLayerCategoriesParams`](Layers.md#getlayercategoriesparams)): `Promise`\<[`GetLayerCategoriesGroup`](Layers.md#getlayercategoriesgroup)[]\>

Gets values from a layer grouped by a given attribute.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`GetLayerCategoriesParams`](Layers.md#getlayercategoriesparams) |

### Returns

`Promise`\<[`GetLayerCategoriesGroup`](Layers.md#getlayercategoriesgroup)[]\>

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

> **getHistogramData**(`params`: [`GetLayerHistogramParams`](Layers.md#getlayerhistogramparams)): `Promise`\<[`GetLayerHistogramBin`](Layers.md#getlayerhistogrambin)[]\>

Gets a histogram of values from a layer for a given attribute.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`GetLayerHistogramParams`](Layers.md#getlayerhistogramparams) |

### Returns

`Promise`\<[`GetLayerHistogramBin`](Layers.md#getlayerhistogrambin)[]\>

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

> **getAggregates**\<`T`\>(`params`: [`GetLayerCalculationParams`](Layers.md#getlayercalculationparams)\<`T`\>): `Promise`\<`Record`\<`T`, `null` \| `number`\>\>

Calculates a single aggregate value for a layer based on the provided configuration.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `"avg"` \| `"max"` \| `"min"` \| `"sum"` \| `"median"` \| `"count"` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`GetLayerCalculationParams`](Layers.md#getlayercalculationparams)\<`T`\> |

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

## getMapDetails()

> **getMapDetails**(): `Promise`\<[`MapDetails`](Misc.md#mapdetails)\>

Gets the details of the map.

### Returns

`Promise`\<[`MapDetails`](Misc.md#mapdetails)\>

## getSelection()

> **getSelection**(): `Promise`\<[`EntityNode`](Selection.md#entitynode)[]\>

Gets the current selection as a list of entity identifiers.

### Returns

`Promise`\<[`EntityNode`](Selection.md#entitynode)[]\>

### Example

```typescript
const selection = await felt.getSelection();
```

## selectFeature()

> **selectFeature**(`params`: [`FeatureSelection`](Selection.md#featureselection)): `Promise`\<`void`\>

Selects a feature on a layer. This will show the feature's popup, modal or
sidebar (if configured) and highlight the feature.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`FeatureSelection`](Selection.md#featureselection) |

### Returns

`Promise`\<`void`\>

### Example

```typescript
felt.selectFeature({
  id: 123,
  layerId: "my-layer",
  showPopup: true,
  fitViewport: { maxZoom: 15 },
});
```

## clearSelection()

> **clearSelection**(`params`?: \{ `features`: `boolean`; `elements`: `boolean`; \}): `Promise`\<`void`\>

Clears the current selection. This clears the selection of

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params`? | \{ `features`: `boolean`; `elements`: `boolean`; \} | The parameters to clear the selection. If this is not provided, both features and elements will be cleared. |
| `params.features`? | `boolean` | Whether to clear the features from the selection. |
| `params.elements`? | `boolean` | Whether to clear the elements from the selection. |

### Returns

`Promise`\<`void`\>

### Example

```typescript

// Removes all features and elements from the selection
felt.clearSelection();

// Removes only features from the selection
felt.clearSelection({ features: true });

// Removes only elements from the selection
felt.clearSelection({ elements: true });
```

### Default

```typescript
{ features: true, elements: true }
```

## setTool()

> **setTool**(`tool`: `null` \| `"text"` \| `"note"` \| `"pin"` \| `"line"` \| `"route"` \| `"polygon"` \| `"circle"` \| `"marker"` \| `"highlighter"` \| `"link"`): `void`

Sets the tool to use for drawing elements on the map.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tool` | `null` \| `"text"` \| `"note"` \| `"pin"` \| `"line"` \| `"route"` \| `"polygon"` \| `"circle"` \| `"marker"` \| `"highlighter"` \| `"link"` | The tool to set. |

### Returns

`void`

### Example

```typescript
// Set the tool to "marker"
felt.setTool("marker");

// put down the tool
felt.setTool(null);
```

## getTool()

> **getTool**(): `Promise`\<`null` \| `"text"` \| `"note"` \| `"pin"` \| `"line"` \| `"route"` \| `"polygon"` \| `"circle"` \| `"marker"` \| `"highlighter"` \| `"link"`\>

Gets the current tool, if any is in use.

### Returns

`Promise`\<`null` \| `"text"` \| `"note"` \| `"pin"` \| `"line"` \| `"route"` \| `"polygon"` \| `"circle"` \| `"marker"` \| `"highlighter"` \| `"link"`\>

The current tool, or `null` if no tool is in use.

### Example

```typescript
const tool = await felt.getTool(); // "marker", "polygon", etc.
```

## onToolChange()

> **onToolChange**(`args`: \{ `handler`: (`tool`: `null` \| `"text"` \| `"note"` \| `"pin"` \| `"line"` \| `"route"` \| `"polygon"` \| `"circle"` \| `"marker"` \| `"highlighter"` \| `"link"`) => `void`; \}): `VoidFunction`

Listens for changes to the current tool.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `args` | \{ `handler`: (`tool`: `null` \| `"text"` \| `"note"` \| `"pin"` \| `"line"` \| `"route"` \| `"polygon"` \| `"circle"` \| `"marker"` \| `"highlighter"` \| `"link"`) => `void`; \} | - |
| `args.handler` | (`tool`: `null` \| `"text"` \| `"note"` \| `"pin"` \| `"line"` \| `"route"` \| `"polygon"` \| `"circle"` \| `"marker"` \| `"highlighter"` \| `"link"`) => `void` | This callback is called with the current tool whenever the tool changes. |

### Returns

`VoidFunction`

A function to unsubscribe from the listener

### Example

```typescript
const unsubscribe = felt.onToolChange({
  handler: tool => console.log(tool),
});

// later on...
unsubscribe();
```

## setToolSettings()

> **setToolSettings**(`settings`: [`InputToolSettings`](Tools.md#inputtoolsettings)): `void`

Sets the settings for the current tool.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `settings` | [`InputToolSettings`](Tools.md#inputtoolsettings) | The settings to set. |

### Returns

`void`

## getToolSettings()

> **getToolSettings**\<`T`\>(`tool`: `T`): `Promise`\<[`ToolSettingsMap`](Tools.md#toolsettingsmap)\[`T`\]\>

Gets the settings for the current tool.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* keyof [`ToolSettingsMap`](Tools.md#toolsettingsmap) |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `tool` | `T` |

### Returns

`Promise`\<[`ToolSettingsMap`](Tools.md#toolsettingsmap)\[`T`\]\>

The settings for the current tool.

## onToolSettingsChange()

> **onToolSettingsChange**(`args`: \{ `handler`: (`settings`: [`ToolSettingsChangeEvent`](Tools.md#toolsettingschangeevent)) => `void`; \}): `VoidFunction`

Listens for changes to the settings on all tools.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `handler`: (`settings`: [`ToolSettingsChangeEvent`](Tools.md#toolsettingschangeevent)) => `void`; \} |
| `args.handler` | (`settings`: [`ToolSettingsChangeEvent`](Tools.md#toolsettingschangeevent)) => `void` |

### Returns

`VoidFunction`

A function to unsubscribe from the listener

## updateUiControls()

> **updateUiControls**(`controls`: [`UiControlsOptions`](UI.md#uicontrolsoptions)): `void`

Updates the UI controls on the embedded map.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `controls` | [`UiControlsOptions`](UI.md#uicontrolsoptions) | The controls to update. |

### Returns

`void`

## setOnMapInteractionsUi()

> **setOnMapInteractionsUi**(`options`: [`OnMapInteractionsOptions`](UI.md#onmapinteractionsoptions)): `void`

Control the on-map UI shown when interacting with features and elements.

If you add your own click, selection or hover handlers you may want to disable
various parts of the Felt UI. This method allows you to control the visibility of
various parts of the UI that might otherwise be shown when people click or hover
on things.

This does not affect selection. That means that selectable features and elements
will still be selected when clicked.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`OnMapInteractionsOptions`](UI.md#onmapinteractionsoptions) |

### Returns

`void`

## getViewport()

> **getViewport**(): `Promise`\<[`ViewportState`](Viewport.md#viewportstate)\>

Gets the current state of the viewport.

### Returns

`Promise`\<[`ViewportState`](Viewport.md#viewportstate)\>

## setViewport()

> **setViewport**(`viewport`: [`SetViewportCenterZoomParams`](Viewport.md#setviewportcenterzoomparams)): `void`

Moves the map to the specified location.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `viewport` | [`SetViewportCenterZoomParams`](Viewport.md#setviewportcenterzoomparams) |

### Returns

`void`

### Example

```typescript
felt.setViewport({
  center: { latitude: 0, longitude: 0 },
  zoom: 10,
});
```

## getViewportConstraints()

> **getViewportConstraints**(): `Promise`\<`null` \| [`ViewportConstraints`](Viewport.md#viewportconstraints)\>

Gets the current state of the viewport constraints.

### Returns

`Promise`\<`null` \| [`ViewportConstraints`](Viewport.md#viewportconstraints)\>

## setViewportConstraints()

> **setViewportConstraints**(`constraints`: `null` \| `Partial`\<[`ViewportConstraints`](Viewport.md#viewportconstraints)\>): `void`

Constrains the map viewport so it stays inside certain bounds and/or certain zoom levels.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `constraints` | `null` \| `Partial`\<[`ViewportConstraints`](Viewport.md#viewportconstraints)\> |

### Returns

`void`

### Examples

```typescript
felt.setViewportConstraints({
  bounds: [-122.5372532, 37.6652478, -122.1927016, 37.881707],
  minZoom: 1,
  maxZoom: 23,
});
```

every constraint is optional
```typescript
felt.setViewportConstraints({
  bounds: [-122.5372532, 37.6652478, -122.1927016, 37.881707],
});
```

if a constraint is null, it will be removed but keeping the others
```typescript
felt.setViewportConstraints({ bounds: null });
```

if method receives null, it will remove the constraints
```typescript
felt.setViewportConstraints(null);
```

## fitViewportToBounds()

> **fitViewportToBounds**(`bounds`: [`ViewportFitBoundsParams`](Viewport.md#viewportfitboundsparams)): `void`

Fits the map to the specified bounds.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `bounds` | [`ViewportFitBoundsParams`](Viewport.md#viewportfitboundsparams) |

### Returns

`void`

### Example

```typescript
const west = -122.4194;
const south = 37.7749;
const east = -122.4194;
const north = 37.7749;
felt.fitViewportToBounds({ bounds: [west, south, east, north] });
```

# Events

## onElementCreate()

> **onElementCreate**(`args`: \{ `handler`: (`change`: [`ElementChangeCallbackParams`](Elements.md#elementchangecallbackparams)) => `void`; \}): `VoidFunction`

Adds a listener for when an element is created.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `args` | \{ `handler`: (`change`: [`ElementChangeCallbackParams`](Elements.md#elementchangecallbackparams)) => `void`; \} | - |
| `args.handler` | (`change`: [`ElementChangeCallbackParams`](Elements.md#elementchangecallbackparams)) => `void` | The handler that is called when an element is created. |

### Returns

`VoidFunction`

A function to unsubscribe from the listener

### Example

```typescript
const unsubscribe = felt.onElementCreate({
  handler: (element) => console.log(element.id),
});

// later on...
unsubscribe();
```

## onElementChange()

> **onElementChange**(`args`: \{ `options`: \{ `id`: `string`; \}; `handler`: (`change`: [`ElementChangeCallbackParams`](Elements.md#elementchangecallbackparams)) => `void`; \}): `VoidFunction`

Adds a listener for when an element changes.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `args` | \{ `options`: \{ `id`: `string`; \}; `handler`: (`change`: [`ElementChangeCallbackParams`](Elements.md#elementchangecallbackparams)) => `void`; \} | - |
| `args.options` | \{ `id`: `string`; \} | - |
| `args.options.id` | `string` | The id of the element to listen for changes to. |
| `args.handler` | (`change`: [`ElementChangeCallbackParams`](Elements.md#elementchangecallbackparams)) => `void` | The handler that is called when the element changes. |

### Returns

`VoidFunction`

A function to unsubscribe from the listener

### Example

```typescript
const unsubscribe = felt.onElementChange({
  options: { id: "element-1" },
  handler: ({element}) => console.log(element.id),
});

// later on...
unsubscribe();
```

## onElementDelete()

> **onElementDelete**(`args`: \{ `options`: \{ `id`: `string`; \}; `handler`: () => `void`; \}): `VoidFunction`

Adds a listener for when an element is deleted.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `args` | \{ `options`: \{ `id`: `string`; \}; `handler`: () => `void`; \} | - |
| `args.options` | \{ `id`: `string`; \} | - |
| `args.options.id` | `string` | The id of the element to listen for deletions of. |
| `args.handler` | () => `void` | The handler that is called when the element is deleted. |

### Returns

`VoidFunction`

A function to unsubscribe from the listener

### Example

```typescript
const unsubscribe = felt.onElementDelete({
  options: { id: "element-1" },
  handler: (element) => console.log(element.id),
});

// later on...
unsubscribe();
```

## onElementGroupChange()

> **onElementGroupChange**(`args`: \{ `options`: \{ `id`: `string`; \}; `handler`: (`change`: [`ElementGroupChangeCallbackParams`](Elements.md#elementgroupchangecallbackparams)) => `void`; \}): `VoidFunction`

Adds a listener for when an element group changes.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `options`: \{ `id`: `string`; \}; `handler`: (`change`: [`ElementGroupChangeCallbackParams`](Elements.md#elementgroupchangecallbackparams)) => `void`; \} |
| `args.options` | \{ `id`: `string`; \} |
| `args.options.id` | `string` |
| `args.handler` | (`change`: [`ElementGroupChangeCallbackParams`](Elements.md#elementgroupchangecallbackparams)) => `void` |

### Returns

`VoidFunction`

A function to unsubscribe from the listener

### Example

```typescript
const unsubscribe = felt.onElementGroupChange({
  options: { id: "element-group-1" },
  handler: elementGroup => console.log(elementGroup.id),
});

// later on...
unsubscribe();
```

## onPointerClick()

> **onPointerClick**(`params`: \{ `handler`: (`event`: [`MapInteractionEvent`](Interactions.md#mapinteractionevent)) => `void`; \}): `VoidFunction`

Allows you to be notified the user clicks on the map.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `handler`: (`event`: [`MapInteractionEvent`](Interactions.md#mapinteractionevent)) => `void`; \} |
| `params.handler` | (`event`: [`MapInteractionEvent`](Interactions.md#mapinteractionevent)) => `void` |

### Returns

`VoidFunction`

A function to unsubscribe from the listener

### Example

```typescript
const unsubscribe = felt.onPointerClick({
  handler: (event) => console.log(event.center, event.features),
});

// later on...
unsubscribe();
```

## onPointerMove()

> **onPointerMove**(`params`: \{ `handler`: (`event`: [`MapInteractionEvent`](Interactions.md#mapinteractionevent)) => `void`; \}): `VoidFunction`

Allows you to be notified the user moves the mouse over the map.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `handler`: (`event`: [`MapInteractionEvent`](Interactions.md#mapinteractionevent)) => `void`; \} | Params for the listener |
| `params.handler` | (`event`: [`MapInteractionEvent`](Interactions.md#mapinteractionevent)) => `void` | The handler function |

### Returns

`VoidFunction`

A function to unsubscribe from the listener

### Example

```typescript
const unsubscribe = felt.onPointerMove({
  handler: (event) => console.log(event.center, event.features),
});

// later on...
unsubscribe();
```

## onLayerChange()

> **onLayerChange**(`args`: \{ `options`: \{ `id`: `string`; \}; `handler`: (`change`: [`LayerChangeCallbackParams`](Layers.md#layerchangecallbackparams)) => `void`; \}): `VoidFunction`

Adds a listener for when a layer changes.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `args` | \{ `options`: \{ `id`: `string`; \}; `handler`: (`change`: [`LayerChangeCallbackParams`](Layers.md#layerchangecallbackparams)) => `void`; \} | - |
| `args.options` | \{ `id`: `string`; \} | - |
| `args.options.id` | `string` | The id of the layer to listen for changes to. |
| `args.handler` | (`change`: [`LayerChangeCallbackParams`](Layers.md#layerchangecallbackparams)) => `void` | The handler that is called when the layer changes. |

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

> **onLayerGroupChange**(`args`: \{ `options`: \{ `id`: `string`; \}; `handler`: (`change`: [`LayerGroupChangeCallbackParams`](Layers.md#layergroupchangecallbackparams)) => `void`; \}): `VoidFunction`

Adds a listener for when a layer group changes.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `options`: \{ `id`: `string`; \}; `handler`: (`change`: [`LayerGroupChangeCallbackParams`](Layers.md#layergroupchangecallbackparams)) => `void`; \} |
| `args.options` | \{ `id`: `string`; \} |
| `args.options.id` | `string` |
| `args.handler` | (`change`: [`LayerGroupChangeCallbackParams`](Layers.md#layergroupchangecallbackparams)) => `void` |

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

> **onLegendItemChange**(`args`: \{ `options`: [`LegendItemIdentifier`](Layers.md#legenditemidentifier); `handler`: (`change`: [`LegendItemChangeCallbackParams`](Layers.md#legenditemchangecallbackparams)) => `void`; \}): `VoidFunction`

Adds a listener for when a legend item changes.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `options`: [`LegendItemIdentifier`](Layers.md#legenditemidentifier); `handler`: (`change`: [`LegendItemChangeCallbackParams`](Layers.md#legenditemchangecallbackparams)) => `void`; \} |
| `args.options` | [`LegendItemIdentifier`](Layers.md#legenditemidentifier) |
| `args.handler` | (`change`: [`LegendItemChangeCallbackParams`](Layers.md#legenditemchangecallbackparams)) => `void` |

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

## onSelectionChange()

> **onSelectionChange**(`params`: \{ `handler`: (`change`: \{ `selection`: [`EntityNode`](Selection.md#entitynode)[]; \}) => `void`; \}): `VoidFunction`

Adds a listener for when the selection changes.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `handler`: (`change`: \{ `selection`: [`EntityNode`](Selection.md#entitynode)[]; \}) => `void`; \} |
| `params.handler` | (`change`: \{ `selection`: [`EntityNode`](Selection.md#entitynode)[]; \}) => `void` |

### Returns

`VoidFunction`

A function to unsubscribe from the listener

### Example

```typescript
const unsubscribe = felt.onSelectionChange({
  handler: ({selection}) => console.log(selection),
});

// later on...
unsubscribe();
```

## onViewportMove()

> **onViewportMove**(`args`: \{ `handler`: (`viewport`: [`ViewportState`](Viewport.md#viewportstate)) => `void`; \}): `VoidFunction`

Adds a listener for when the viewport changes.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `args` | \{ `handler`: (`viewport`: [`ViewportState`](Viewport.md#viewportstate)) => `void`; \} | - |
| `args.handler` | (`viewport`: [`ViewportState`](Viewport.md#viewportstate)) => `void` | This callback is called with the current viewport state whenever the viewport changes. |

### Returns

`VoidFunction`

A function to unsubscribe from the listener

### Example

```typescript
const unsubscribe = felt.onViewportMove({
  handler: viewport => console.log(viewport.center.latitude),
});

// later on...
unsubscribe();
```

## onViewportMoveEnd()

> **onViewportMoveEnd**(`args`: \{ `handler`: (`viewport`: [`ViewportState`](Viewport.md#viewportstate)) => `void`; \}): `VoidFunction`

Adds a listener for when the viewport move ends, which is when the user
stops dragging or zooming the map, animations have finished, or inertial
dragging ends.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `handler`: (`viewport`: [`ViewportState`](Viewport.md#viewportstate)) => `void`; \} |
| `args.handler` | (`viewport`: [`ViewportState`](Viewport.md#viewportstate)) => `void` |

### Returns

`VoidFunction`

A function to unsubscribe from the listener

### Example

```typescript
const unsubscribe = felt.onViewportMoveEnd({
  handler: viewport => console.log(viewport.center.latitude),
});

// later on...
unsubscribe();
```

## onMapIdle()

> **onMapIdle**(`args`: \{ `handler`: () => `void`; \}): `VoidFunction`

Adds a listener for when the map is idle, which is defined as:
- No transitions are in progress
- The user is not interacting with the map, e.g. by panning or zooming
- All tiles for the current viewport have been loaded
- Any fade transitions (e.g. for labels) have completed

### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `handler`: () => `void`; \} |
| `args.handler` | () => `void` |

### Returns

`VoidFunction`

A function to unsubscribe from the listener

### Example

```typescript
const unsubscribe = felt.onMapIdle({ handler: () => console.log("map is idle") });

// later on...
unsubscribe();
```

***

# FeltEmbedOptions

# Properties

## uiControls?

> `optional` **uiControls**: [`UiControlsOptions`](UI.md#uicontrolsoptions)

## initialViewport?

> `optional` **initialViewport**: [`ViewportCenterZoom`](Viewport.md#viewportcenterzoom)

## token?

> `optional` **token**: `string`

A short-lived (15 minutes) authentication token to use for showing embeds that are configured to be
private.

***

# Felt

> `const` **Felt**: \{ `embed`: `Promise`\<[`FeltController`](#feltcontroller)\>; `connect`: `Promise`\<[`FeltController`](#feltcontroller)\>; \}

The Felt SDK is a library for embedding Felt maps into your website,
allowing you to control and inspect the map programmatically.

# Type declaration

## embed()

Embeds a Felt map into the provided container.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `container` | `HTMLElement` | The container element to embed the map into. |
| `mapId` | `string` | The ID of the map to embed. |
| `options`? | [`FeltEmbedOptions`](#feltembedoptions) | The options to configure the map. |

### Returns

`Promise`\<[`FeltController`](#feltcontroller)\>

## connect()

Binds to an existing Felt map iframe.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `feltWindow` | `Window` | The iframe element containing the Felt map. |

### Returns

`Promise`\<[`FeltController`](#feltcontroller)\>
