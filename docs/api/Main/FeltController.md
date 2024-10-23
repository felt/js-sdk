***

## Contents

* [Properties](#properties)
  * [iframe](#iframe)
* [Methods](#methods)
  * [getElement()](#getelement)
    * [Parameters](#parameters)
    * [Returns](#returns)
    * [Example](#example)
  * [getElements()](#getelements)
    * [Parameters](#parameters-1)
    * [Returns](#returns-1)
    * [Remarks](#remarks)
    * [Example](#example-1)
  * [getElementGroup()](#getelementgroup)
    * [Parameters](#parameters-2)
    * [Returns](#returns-2)
    * [Example](#example-2)
  * [getElementGroups()](#getelementgroups)
    * [Parameters](#parameters-3)
    * [Returns](#returns-3)
    * [Example](#example-3)
  * [setElementGroupVisibility()](#setelementgroupvisibility)
    * [Parameters](#parameters-4)
    * [Returns](#returns-4)
    * [Example](#example-4)
  * [getLayer()](#getlayer)
    * [Parameters](#parameters-5)
    * [Returns](#returns-5)
    * [Example](#example-5)
  * [getLayers()](#getlayers)
    * [Parameters](#parameters-6)
    * [Returns](#returns-6)
    * [Remarks](#remarks-1)
    * [Example](#example-6)
  * [setLayerVisibility()](#setlayervisibility)
    * [Parameters](#parameters-7)
    * [Returns](#returns-7)
    * [Example](#example-7)
  * [getLayerGroup()](#getlayergroup)
    * [Parameters](#parameters-8)
    * [Returns](#returns-8)
    * [Example](#example-8)
  * [getLayerGroups()](#getlayergroups)
    * [Parameters](#parameters-9)
    * [Returns](#returns-9)
    * [Example](#example-9)
  * [setLayerGroupVisibility()](#setlayergroupvisibility)
    * [Parameters](#parameters-10)
    * [Returns](#returns-10)
    * [Example](#example-10)
  * [getLegendItem()](#getlegenditem)
    * [Parameters](#parameters-11)
    * [Returns](#returns-11)
    * [Example](#example-11)
  * [getLegendItems()](#getlegenditems)
    * [Parameters](#parameters-12)
    * [Returns](#returns-12)
    * [Example](#example-12)
  * [setLegendItemVisibility()](#setlegenditemvisibility)
    * [Parameters](#parameters-13)
    * [Returns](#returns-13)
    * [Example](#example-13)
  * [getLayerFilters()](#getlayerfilters)
    * [Parameters](#parameters-14)
    * [Returns](#returns-14)
    * [Remarks](#remarks-2)
    * [Example](#example-14)
  * [setLayerFilters()](#setlayerfilters)
    * [Parameters](#parameters-15)
    * [Returns](#returns-15)
    * [Example](#example-15)
  * [getSelection()](#getselection)
    * [Returns](#returns-16)
    * [Example](#example-16)
  * [updateUiControls()](#updateuicontrols)
    * [Parameters](#parameters-16)
    * [Returns](#returns-17)
  * [getViewport()](#getviewport)
    * [Returns](#returns-18)
  * [setViewport()](#setviewport)
    * [Parameters](#parameters-17)
    * [Returns](#returns-19)
    * [Example](#example-17)
  * [fitViewportToBounds()](#fitviewporttobounds)
    * [Parameters](#parameters-18)
    * [Returns](#returns-20)
    * [Example](#example-18)
* [Events](#events)
  * [onElementChange()](#onelementchange)
    * [Parameters](#parameters-19)
    * [Returns](#returns-21)
    * [Example](#example-19)
  * [onElementGroupChange()](#onelementgroupchange)
    * [Parameters](#parameters-20)
    * [Returns](#returns-22)
    * [Example](#example-20)
  * [onLayerChange()](#onlayerchange)
    * [Parameters](#parameters-21)
    * [Returns](#returns-23)
    * [Example](#example-21)
  * [onLayerGroupChange()](#onlayergroupchange)
    * [Parameters](#parameters-22)
    * [Returns](#returns-24)
    * [Example](#example-22)
  * [onLegendItemChange()](#onlegenditemchange)
    * [Parameters](#parameters-23)
    * [Returns](#returns-25)
    * [Example](#example-23)
  * [onSelectionChange()](#onselectionchange)
    * [Parameters](#parameters-24)
    * [Returns](#returns-26)
    * [Example](#example-24)
  * [onViewportMove()](#onviewportmove)
    * [Parameters](#parameters-25)
    * [Returns](#returns-27)
    * [Example](#example-25)

## Properties

### iframe

> `readonly` **iframe**: `null` | `HTMLIFrameElement`

The iframe element containing the Felt map, if it is an embedded map.

## Methods

### getElement()

> **getElement**(`id`): `Promise`\<`null` | [`Element`](../Elements/Element.md)>

Get a single element from the map by its id.

#### Parameters

| Parameter | Type     | Description                            |
| --------- | -------- | -------------------------------------- |
| `id`      | `string` | The id of the element you want to get. |

#### Returns

`Promise`\<`null` | [`Element`](../Elements/Element.md)>

The requested element.

#### Example

```typescript
const element = await felt.getElement("element-1");
```

***

### getElements()

> **getElements**(`filter`?): `Promise`\<(`null` | [`Element`](../Elements/Element.md))\[]>

Gets elements from the map, according to the filters supplied. If no
filters are supplied, all elements will be returned.

#### Parameters

| Parameter | Type                                                    | Description                                                 |
| --------- | ------------------------------------------------------- | ----------------------------------------------------------- |
| `filter`? | [`GetElementsFilter`](../Elements/GetElementsFilter.md) | The filters to apply to the elements returned from the map. |

#### Returns

`Promise`\<(`null` | [`Element`](../Elements/Element.md))\[]>

All elements on the map.

#### Remarks

The elements in the map, ordered by the order specified in Felt. This is not
necessarily the order that they are drawn in, as Felt draws points above
lines and lines above polygons, for instance.

#### Example

```typescript
const elements = await felt.getElements();
```

***

### getElementGroup()

> **getElementGroup**(`id`): `Promise`\<`null` | [`ElementGroup`](../Elements/ElementGroup.md)>

Get an element group from the map by its id.

#### Parameters

| Parameter | Type     |
| --------- | -------- |
| `id`      | `string` |

#### Returns

`Promise`\<`null` | [`ElementGroup`](../Elements/ElementGroup.md)>

The requested element group.

#### Example

```typescript
felt.getElementGroup("element-group-1");
```

***

### getElementGroups()

> **getElementGroups**(`filter`?): `Promise`\<(`null` | [`ElementGroup`](../Elements/ElementGroup.md))\[]>

Gets element groups from the map, according to the filters supplied. If no
filters are supplied, all element groups will be returned in rendering order.

#### Parameters

| Parameter | Type                                                              | Description                                                       |
| --------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `filter`? | [`GetElementGroupsFilter`](../Elements/GetElementGroupsFilter.md) | The filters to apply to the element groups returned from the map. |

#### Returns

`Promise`\<(`null` | [`ElementGroup`](../Elements/ElementGroup.md))\[]>

The requested element groups.

#### Example

```typescript
const elementGroups = await felt.getElementGroups({ ids: ["element-group-1", "element-group-2"] });
```

***

### setElementGroupVisibility()

> **setElementGroupVisibility**(`visibility`): `Promise`\<`void`>

Hide or show element groups with the given ids.

#### Parameters

| Parameter    | Type                                                        |
| ------------ | ----------------------------------------------------------- |
| `visibility` | [`SetVisibilityRequest`](../Shared/SetVisibilityRequest.md) |

#### Returns

`Promise`\<`void`>

#### Example

```typescript
felt.setElementGroupVisibility({ show: ["element-group-1", "element-group-2"], hide: ["element-group-3"] });
```

***

### getLayer()

> **getLayer**(`id`): `Promise`\<`null` | [`Layer`](../Layers/Layer.md)>

Get a single layer from the map by its id.

#### Parameters

| Parameter | Type     | Description                          |
| --------- | -------- | ------------------------------------ |
| `id`      | `string` | The id of the layer you want to get. |

#### Returns

`Promise`\<`null` | [`Layer`](../Layers/Layer.md)>

The requested layer.

#### Example

```typescript
const layers = await felt.getLayer({ ids: ["layer-1", "layer-2"] });
```

***

### getLayers()

> **getLayers**(`filter`?): `Promise`\<(`null` | [`Layer`](../Layers/Layer.md))\[]>

Gets layers from the map, according to the filters supplied. If no
filters are supplied, all layers will be returned.

#### Parameters

| Parameter | Type                                              | Description                                               |
| --------- | ------------------------------------------------- | --------------------------------------------------------- |
| `filter`? | [`GetLayersFilter`](../Layers/GetLayersFilter.md) | The filters to apply to the layers returned from the map. |

#### Returns

`Promise`\<(`null` | [`Layer`](../Layers/Layer.md))\[]>

All layers on the map.

#### Remarks

The layers in the map, ordered by the order specified in Felt. This is not
necessarily the order that they are drawn in, as Felt draws points above
lines and lines above polygons, for instance.

#### Example

```typescript
const layers = await felt.getLayers();
```

***

### setLayerVisibility()

> **setLayerVisibility**(`visibility`): `Promise`\<`void`>

Hide or show layers with the given ids.

#### Parameters

| Parameter    | Type                                                        |
| ------------ | ----------------------------------------------------------- |
| `visibility` | [`SetVisibilityRequest`](../Shared/SetVisibilityRequest.md) |

#### Returns

`Promise`\<`void`>

#### Example

```typescript
felt.setLayerVisibility({ show: ["layer-1", "layer-2"], hide: ["layer-3"] });
```

***

### getLayerGroup()

> **getLayerGroup**(`id`): `Promise`\<`null` | [`LayerGroup`](../Layers/LayerGroup.md)>

Get a layer group from the map by its id.

#### Parameters

| Parameter | Type     |
| --------- | -------- |
| `id`      | `string` |

#### Returns

`Promise`\<`null` | [`LayerGroup`](../Layers/LayerGroup.md)>

The requested layer group.

#### Example

```typescript
felt.getLayerGroup("layer-group-1");
```

***

### getLayerGroups()

> **getLayerGroups**(`filter`?): `Promise`\<(`null` | [`LayerGroup`](../Layers/LayerGroup.md))\[]>

Gets layer groups from the map, according to the filters supplied. If no
filters are supplied, all layer groups will be returned in rendering order.

#### Parameters

| Parameter | Type                                                        | Description                                                     |
| --------- | ----------------------------------------------------------- | --------------------------------------------------------------- |
| `filter`? | [`GetLayerGroupsFilter`](../Layers/GetLayerGroupsFilter.md) | The filters to apply to the layer groups returned from the map. |

#### Returns

`Promise`\<(`null` | [`LayerGroup`](../Layers/LayerGroup.md))\[]>

The requested layer groups.

#### Example

```typescript
const layerGroups = await felt.getLayerGroups({ ids: ["layer-group-1", "layer-group-2"] });
```

***

### setLayerGroupVisibility()

> **setLayerGroupVisibility**(`visibility`): `Promise`\<`void`>

Hide or show layer groups with the given ids.

#### Parameters

| Parameter    | Type                                                        |
| ------------ | ----------------------------------------------------------- |
| `visibility` | [`SetVisibilityRequest`](../Shared/SetVisibilityRequest.md) |

#### Returns

`Promise`\<`void`>

#### Example

```typescript
felt.setLayerGroupVisibility({ show: ["layer-group-1", "layer-group-2"], hide: ["layer-group-3"] });
```

***

### getLegendItem()

> **getLegendItem**(`id`): `Promise`\<`null` | [`LegendItem`](../Layers/LegendItem.md)>

Allows you to get the state of a single legend item.

#### Parameters

| Parameter | Type                                                        |
| --------- | ----------------------------------------------------------- |
| `id`      | [`LegendItemIdentifier`](../Layers/LegendItemIdentifier.md) |

#### Returns

`Promise`\<`null` | [`LegendItem`](../Layers/LegendItem.md)>

#### Example

```typescript
const legendItem = await felt.getLegendItem({
  id: "legend-item-1",
  layerId: "layer-1",
})
```

***

### getLegendItems()

> **getLegendItems**(`filter`?): `Promise`\<(`null` | [`LegendItem`](../Layers/LegendItem.md))\[]>

Allows you to obtain the state of several legend items, by passing in
filters describing which legend items you want.

If you do not pass any filters, you will receive all legend items.

#### Parameters

| Parameter | Type                                                  |
| --------- | ----------------------------------------------------- |
| `filter`? | [`LegendItemsFilter`](../Layers/LegendItemsFilter.md) |

#### Returns

`Promise`\<(`null` | [`LegendItem`](../Layers/LegendItem.md))\[]>

#### Example

```typescript
const legendItems = await felt.getLegendItems({layerId: "layer-1"});
```

***

### setLegendItemVisibility()

> **setLegendItemVisibility**(`visibility`): `Promise`\<`void`>

Hide or show legend items with the given identifiers.

#### Parameters

| Parameter          | Type                                                           |
| ------------------ | -------------------------------------------------------------- |
| `visibility`       | `object`                                                       |
| `visibility.show`? | [`LegendItemIdentifier`](../Layers/LegendItemIdentifier.md)\[] |
| `visibility.hide`? | [`LegendItemIdentifier`](../Layers/LegendItemIdentifier.md)\[] |

#### Returns

`Promise`\<`void`>

#### Example

```typescript
felt.setLegendItemVisibility({
  show: [{layerId: "layer-group-1", id: "item-1-0"}],
  hide: [{layerId: "layer-group-2", id: "item-2-0"}],
})
```

***

### getLayerFilters()

> **getLayerFilters**(`layerId`): `Promise`\<`null` | [`LayerFilters`](../Layers/LayerFilters.md)>

Get the filters for a layer.

#### Parameters

| Parameter | Type     |
| --------- | -------- |
| `layerId` | `string` |

#### Returns

`Promise`\<`null` | [`LayerFilters`](../Layers/LayerFilters.md)>

#### Remarks

The return type gives you the filters split up into the various sources
that make up the overall filters for a layer.

#### Example

```typescript
const filters = await felt.getLayerFilters("layer-1");
console.log(filters.combined, filters.style, filters.ephemeral, filters.components);
```

***

### setLayerFilters()

> **setLayerFilters**(`params`): `Promise`\<`void`>

Sets the **ephemeral** filters for a layer.

#### Parameters

| Parameter        | Type                              | Description                                                                                                     |
| ---------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `params`         | `object`                          | -                                                                                                               |
| `params.layerId` | `string`                          | The layer that you want to set the filters for.                                                                 |
| `params.filters` | [`Filters`](../Layers/Filters.md) | The filters to set for the layer. This will replace any ephemeral filters that are currently set for the layer. |

#### Returns

`Promise`\<`void`>

#### Example

```typescript
felt.setLayerFilters({
  layerId: "layer-1",
  filters: ["AREA", "gt", 30_000],
});
```

***

### getSelection()

> **getSelection**(): `Promise`\<[`EntityIdentifier`](../Selection/EntityIdentifier.md)\[]>

Gets the current selection as a list of entity identifiers.

#### Returns

`Promise`\<[`EntityIdentifier`](../Selection/EntityIdentifier.md)\[]>

#### Example

```typescript
const selection = await felt.getSelection();
```

***

### updateUiControls()

> **updateUiControls**(`controls`): `void`

Updates the UI controls on the embedded map.

#### Parameters

| Parameter  | Type                                              | Description             |
| ---------- | ------------------------------------------------- | ----------------------- |
| `controls` | [`UiControlsOptions`](../UI/UiControlsOptions.md) | The controls to update. |

#### Returns

`void`

***

### getViewport()

> **getViewport**(): `Promise`\<[`ViewportState`](../Viewport/ViewportState.md)>

Gets the current state of the viewport.

#### Returns

`Promise`\<[`ViewportState`](../Viewport/ViewportState.md)>

***

### setViewport()

> **setViewport**(`viewport`): `void`

Moves the map to the specified location.

#### Parameters

| Parameter  | Type                                                                        |
| ---------- | --------------------------------------------------------------------------- |
| `viewport` | [`SetViewportCenterZoomParams`](../Viewport/SetViewportCenterZoomParams.md) |

#### Returns

`void`

#### Example

```typescript
felt.setViewport({
  center: { latitude: 0, longitude: 0 },
  zoom: 10,
});
```

***

### fitViewportToBounds()

> **fitViewportToBounds**(`bounds`): `void`

Fits the map to the specified bounds.

#### Parameters

| Parameter | Type                                                                |
| --------- | ------------------------------------------------------------------- |
| `bounds`  | [`ViewportFitBoundsParams`](../Viewport/ViewportFitBoundsParams.md) |

#### Returns

`void`

#### Example

```typescript
const west = -122.4194;
const south = 37.7749;
const east = -122.4194;
const north = 37.7749;
felt.fitViewportToBounds({ bounds: [west, south, east, north] });
```

## Events

### onElementChange()

> **onElementChange**(`args`): `VoidFunction`

Adds a listener for when an element changes.

#### Parameters

| Parameter         | Type                 | Description                                          |
| ----------------- | -------------------- | ---------------------------------------------------- |
| `args`            | `object`             | -                                                    |
| `args.options`    | `object`             | -                                                    |
| `args.options.id` | `string`             | The id of the element to listen for changes to.      |
| `args.handler`    | (`change`) => `void` | The handler that is called when the element changes. |

#### Returns

`VoidFunction`

A function to unsubscribe from the listener

#### Example

```typescript
const unsubscribe = felt.onElementChange({
  options: { id: "element-1" },
  handler: ({element}) => console.log(element.id),
});

// later on...
unsubscribe();
```

***

### onElementGroupChange()

> **onElementGroupChange**(`args`): `VoidFunction`

Adds a listener for when an element group changes.

#### Parameters

| Parameter         | Type                 |
| ----------------- | -------------------- |
| `args`            | `object`             |
| `args.options`    | `object`             |
| `args.options.id` | `string`             |
| `args.handler`    | (`change`) => `void` |

#### Returns

`VoidFunction`

A function to unsubscribe from the listener

#### Example

```typescript
const unsubscribe = felt.onElementGroupChange({
  options: { id: "element-group-1" },
  handler: elementGroup => console.log(elementGroup.id),
});

// later on...
unsubscribe();
```

***

### onLayerChange()

> **onLayerChange**(`args`): `VoidFunction`

Adds a listener for when a layer changes.

#### Parameters

| Parameter         | Type                 | Description                                        |
| ----------------- | -------------------- | -------------------------------------------------- |
| `args`            | `object`             | -                                                  |
| `args.options`    | `object`             | -                                                  |
| `args.options.id` | `string`             | The id of the layer to listen for changes to.      |
| `args.handler`    | (`change`) => `void` | The handler that is called when the layer changes. |

#### Returns

`VoidFunction`

A function to unsubscribe from the listener

#### Example

```typescript
const unsubscribe = felt.onLayerChange({
  options: { id: "layer-1" },
  handler: ({layer}) => console.log(layer.bounds),
});

// later on...
unsubscribe();
```

***

### onLayerGroupChange()

> **onLayerGroupChange**(`args`): `VoidFunction`

Adds a listener for when a layer group changes.

#### Parameters

| Parameter         | Type                 |
| ----------------- | -------------------- |
| `args`            | `object`             |
| `args.options`    | `object`             |
| `args.options.id` | `string`             |
| `args.handler`    | (`change`) => `void` |

#### Returns

`VoidFunction`

A function to unsubscribe from the listener

#### Example

```typescript
const unsubscribe = felt.onLayerGroupChange({
  options: { id: "layer-group-1" },
  handler: ({layerGroup}) => console.log(layerGroup.id),
});

// later on...
unsubscribe();
```

***

### onLegendItemChange()

> **onLegendItemChange**(`args`): `VoidFunction`

Adds a listener for when a legend item changes.

#### Parameters

| Parameter      | Type                                                        |
| -------------- | ----------------------------------------------------------- |
| `args`         | `object`                                                    |
| `args.options` | [`LegendItemIdentifier`](../Layers/LegendItemIdentifier.md) |
| `args.handler` | (`change`) => `void`                                        |

#### Returns

`VoidFunction`

A function to unsubscribe from the listener

#### Example

```typescript
const unsubscribe = felt.onLegendItemChange({
  options: { layerId: "layer-1", id: "item-1-0" },
  handler: ({legendItem}) => console.log(legendItem.visible),
});

// later on...
unsubscribe();
```

***

### onSelectionChange()

> **onSelectionChange**(`params`): `VoidFunction`

Adds a listener for when the selection changes.

#### Parameters

| Parameter | Type                                                             |
| --------- | ---------------------------------------------------------------- |
| `params`  | [`SelectionChangeParams`](../Selection/SelectionChangeParams.md) |

#### Returns

`VoidFunction`

A function to unsubscribe from the listener

#### Example

```typescript
const unsubscribe = felt.onSelectionChange({
  handler: ({selection}) => console.log(selection),
});

// later on...
unsubscribe();
```

***

### onViewportMove()

> **onViewportMove**(`args`): `VoidFunction`

Adds a listener for when the viewport changes.

#### Parameters

| Parameter      | Type                   | Description                                                                            |
| -------------- | ---------------------- | -------------------------------------------------------------------------------------- |
| `args`         | `object`               | -                                                                                      |
| `args.handler` | (`viewport`) => `void` | This callback is called with the current viewport state whenever the viewport changes. |

#### Returns

`VoidFunction`

A function to unsubscribe from the listener

#### Example

```typescript
const unsubscribe = felt.onViewportMove({
  handler: viewport => console.log(viewport.center.latitude),
});

// later on...
unsubscribe();
```
