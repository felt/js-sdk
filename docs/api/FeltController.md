This is the doc comment for the controller module
The FeltController allows you to control, inspect and observe a Felt map.
The various ways to interact with the map are namespaced for clarity.

## Contents

* [FeltController](#feltcontroller)
  * [Properties](#properties)
    * [iframe](#iframe)
  * [Methods](#methods)
    * [getElement()](#getelement)
    * [getElements()](#getelements)
    * [getElementGroup()](#getelementgroup)
    * [getElementGroups()](#getelementgroups)
    * [setElementGroupVisibility()](#setelementgroupvisibility)
    * [getLayer()](#getlayer)
    * [getLayers()](#getlayers)
    * [setLayerVisibility()](#setlayervisibility)
    * [getLayerGroup()](#getlayergroup)
    * [getLayerGroups()](#getlayergroups)
    * [setLayerGroupVisibility()](#setlayergroupvisibility)
    * [getLegendItem()](#getlegenditem)
    * [getLegendItems()](#getlegenditems)
    * [setLegendItemVisibility()](#setlegenditemvisibility)
    * [getSelection()](#getselection)
    * [updateUiControls()](#updateuicontrols)
    * [getViewport()](#getviewport)
    * [setViewport()](#setviewport)
    * [fitViewportToBounds()](#fitviewporttobounds)
  * [Events](#events)
    * [onElementChange()](#onelementchange)
    * [onElementGroupChange()](#onelementgroupchange)
    * [onLayerChange()](#onlayerchange)
    * [onLayerGroupChange()](#onlayergroupchange)
    * [onLegendItemChange()](#onlegenditemchange)
    * [onSelectionChange()](#onselectionchange)
    * [onViewportMove()](#onviewportmove)
* [Testingtesting](#testingtesting)

## FeltController

### Properties

#### iframe

> **iframe**: `null` | `HTMLIFrameElement`

The iframe element containing the Felt map, if it is an embedded map.

### Methods

#### getElement()

> **getElement**(`id`): `Promise`\<`null` | [`Element`](Elements.md#element-1)>

Get a single element from the map by its id.

##### Parameters

| Parameter | Type     | Description                            |
| --------- | -------- | -------------------------------------- |
| `id`      | `string` | The id of the element you want to get. |

##### Returns

`Promise`\<`null` | [`Element`](Elements.md#element-1)>

The requested element.

##### Example

```typescript
const element = await felt.getElement("element-1");
```

#### getElements()

> **getElements**(`filter`?): `Promise`\<(`null` | [`Element`](Elements.md#element-1))\[]>

Gets elements from the map, according to the filters supplied. If no
filters are supplied, all elements will be returned.

##### Parameters

| Parameter | Type                                                 | Description                                                 |
| --------- | ---------------------------------------------------- | ----------------------------------------------------------- |
| `filter`? | [`GetElementsFilter`](Elements.md#getelementsfilter) | The filters to apply to the elements returned from the map. |

##### Returns

`Promise`\<(`null` | [`Element`](Elements.md#element-1))\[]>

All elements on the map.

##### Remarks

The elements in the map, ordered by the order specified in Felt. This is not
necessarily the order that they are drawn in, as Felt draws points above
lines and lines above polygons, for instance.

##### Example

```typescript
const elements = await felt.getElements();
```

#### getElementGroup()

> **getElementGroup**(`id`): `Promise`\<`null` | [`ElementGroup`](Elements.md#elementgroup-1)>

Get an element group from the map by its id.

##### Parameters

| Parameter | Type     |
| --------- | -------- |
| `id`      | `string` |

##### Returns

`Promise`\<`null` | [`ElementGroup`](Elements.md#elementgroup-1)>

The requested element group.

##### Example

```typescript
felt.getElementGroup("element-group-1");
```

#### getElementGroups()

> **getElementGroups**(`filter`?): `Promise`\<(`null` | [`ElementGroup`](Elements.md#elementgroup-1))\[]>

Gets element groups from the map, according to the filters supplied. If no
filters are supplied, all element groups will be returned in rendering order.

##### Parameters

| Parameter | Type                                                           | Description                                                       |
| --------- | -------------------------------------------------------------- | ----------------------------------------------------------------- |
| `filter`? | [`GetElementGroupsFilter`](Elements.md#getelementgroupsfilter) | The filters to apply to the element groups returned from the map. |

##### Returns

`Promise`\<(`null` | [`ElementGroup`](Elements.md#elementgroup-1))\[]>

The requested element groups.

##### Example

```typescript
const elementGroups = await felt.getElementGroups({ ids: ["element-group-1", "element-group-2"] });
```

#### setElementGroupVisibility()

> **setElementGroupVisibility**(`visibility`): `Promise`\<`void`>

Hide or show element groups with the given ids.

##### Parameters

| Parameter    | Type                                                     |
| ------------ | -------------------------------------------------------- |
| `visibility` | [`SetVisibilityRequest`](Shared.md#setvisibilityrequest) |

##### Returns

`Promise`\<`void`>

##### Example

```typescript
felt.setElementGroupVisibility({ show: ["element-group-1", "element-group-2"], hide: ["element-group-3"] });
```

#### getLayer()

> **getLayer**(`id`): `Promise`\<`null` | [`Layer`](Layers.md#layer-1)>

Get a single layer from the map by its id.

##### Parameters

| Parameter | Type     | Description                          |
| --------- | -------- | ------------------------------------ |
| `id`      | `string` | The id of the layer you want to get. |

##### Returns

`Promise`\<`null` | [`Layer`](Layers.md#layer-1)>

The requested layer.

##### Example

```typescript
const layers = await felt.getLayer({ ids: ["layer-1", "layer-2"] });
```

#### getLayers()

> **getLayers**(`filter`?): `Promise`\<(`null` | [`Layer`](Layers.md#layer-1))\[]>

Gets layers from the map, according to the filters supplied. If no
filters are supplied, all layers will be returned.

##### Parameters

| Parameter | Type                                           | Description                                               |
| --------- | ---------------------------------------------- | --------------------------------------------------------- |
| `filter`? | [`GetLayersFilter`](Layers.md#getlayersfilter) | The filters to apply to the layers returned from the map. |

##### Returns

`Promise`\<(`null` | [`Layer`](Layers.md#layer-1))\[]>

All layers on the map.

##### Remarks

The layers in the map, ordered by the order specified in Felt. This is not
necessarily the order that they are drawn in, as Felt draws points above
lines and lines above polygons, for instance.

##### Example

```typescript
const layers = await felt.getLayers();
```

#### setLayerVisibility()

> **setLayerVisibility**(`visibility`): `Promise`\<`void`>

Hide or show layers with the given ids.

##### Parameters

| Parameter    | Type                                                     |
| ------------ | -------------------------------------------------------- |
| `visibility` | [`SetVisibilityRequest`](Shared.md#setvisibilityrequest) |

##### Returns

`Promise`\<`void`>

##### Example

```typescript
felt.setLayerVisibility({ show: ["layer-1", "layer-2"], hide: ["layer-3"] });
```

#### getLayerGroup()

> **getLayerGroup**(`id`): `Promise`\<`null` | [`LayerGroup`](Layers.md#layergroup-1)>

Get a layer group from the map by its id.

##### Parameters

| Parameter | Type     |
| --------- | -------- |
| `id`      | `string` |

##### Returns

`Promise`\<`null` | [`LayerGroup`](Layers.md#layergroup-1)>

The requested layer group.

##### Example

```typescript
felt.getLayerGroup("layer-group-1");
```

#### getLayerGroups()

> **getLayerGroups**(`filter`?): `Promise`\<(`null` | [`LayerGroup`](Layers.md#layergroup-1))\[]>

Gets layer groups from the map, according to the filters supplied. If no
filters are supplied, all layer groups will be returned in rendering order.

##### Parameters

| Parameter | Type                                                     | Description                                                     |
| --------- | -------------------------------------------------------- | --------------------------------------------------------------- |
| `filter`? | [`GetLayerGroupsFilter`](Layers.md#getlayergroupsfilter) | The filters to apply to the layer groups returned from the map. |

##### Returns

`Promise`\<(`null` | [`LayerGroup`](Layers.md#layergroup-1))\[]>

The requested layer groups.

##### Example

```typescript
const layerGroups = await felt.getLayerGroups({ ids: ["layer-group-1", "layer-group-2"] });
```

#### setLayerGroupVisibility()

> **setLayerGroupVisibility**(`visibility`): `Promise`\<`void`>

Hide or show layer groups with the given ids.

##### Parameters

| Parameter    | Type                                                     |
| ------------ | -------------------------------------------------------- |
| `visibility` | [`SetVisibilityRequest`](Shared.md#setvisibilityrequest) |

##### Returns

`Promise`\<`void`>

##### Example

```typescript
felt.setLayerGroupVisibility({ show: ["layer-group-1", "layer-group-2"], hide: ["layer-group-3"] });
```

#### getLegendItem()

> **getLegendItem**(`id`): `Promise`\<`null` | [`LegendItem`](Layers.md#legenditem)>

Allows you to get the state of a single legend item.

##### Parameters

| Parameter | Type                                                     |
| --------- | -------------------------------------------------------- |
| `id`      | [`LegendItemIdentifier`](Layers.md#legenditemidentifier) |

##### Returns

`Promise`\<`null` | [`LegendItem`](Layers.md#legenditem)>

##### Example

```typescript
const legendItem = await felt.getLegendItem({
  id: "legend-item-1",
  layerId: "layer-1",
})
```

#### getLegendItems()

> **getLegendItems**(`filter`?): `Promise`\<(`null` | [`LegendItem`](Layers.md#legenditem))\[]>

Allows you to obtain the state of several legend items, by passing in
filters describing which legend items you want.

If you do not pass any filters, you will receive all legend items.

##### Parameters

| Parameter | Type                                               |
| --------- | -------------------------------------------------- |
| `filter`? | [`LegendItemsFilter`](Layers.md#legenditemsfilter) |

##### Returns

`Promise`\<(`null` | [`LegendItem`](Layers.md#legenditem))\[]>

##### Example

```typescript
const legendItems = await felt.getLegendItems({layerId: "layer-1"});
```

#### setLegendItemVisibility()

> **setLegendItemVisibility**(`visibility`): `Promise`\<`void`>

Hide or show legend items with the given identifiers.

##### Parameters

| Parameter          | Type                                                        |
| ------------------ | ----------------------------------------------------------- |
| `visibility`       | `object`                                                    |
| `visibility.show`? | [`LegendItemIdentifier`](Layers.md#legenditemidentifier)\[] |
| `visibility.hide`? | [`LegendItemIdentifier`](Layers.md#legenditemidentifier)\[] |

##### Returns

`Promise`\<`void`>

##### Example

```typescript
felt.setLegendItemVisibility({
  show: [{layerId: "layer-group-1", id: "item-1-0"}],
  hide: [{layerId: "layer-group-2", id: "item-2-0"}],
})
```

#### getSelection()

> **getSelection**(): `Promise`\<[`EntityIdentifier`](Selection.md#entityidentifier)\[]>

Gets the current selection as a list of entity identifiers.

##### Returns

`Promise`\<[`EntityIdentifier`](Selection.md#entityidentifier)\[]>

##### Example

```typescript
const selection = await felt.getSelection();
```

#### updateUiControls()

> **updateUiControls**(`controls`): `void`

Updates the UI controls on the embedded map.

##### Parameters

| Parameter  | Type                                           | Description             |
| ---------- | ---------------------------------------------- | ----------------------- |
| `controls` | [`UiControlsOptions`](UI.md#uicontrolsoptions) | The controls to update. |

##### Returns

`void`

#### getViewport()

> **getViewport**(): `Promise`\<[`ViewportState`](Viewport.md#viewportstate)>

Gets the current state of the viewport.

##### Returns

`Promise`\<[`ViewportState`](Viewport.md#viewportstate)>

#### setViewport()

> **setViewport**(`viewport`): `void`

Moves the map to the specified location.

##### Parameters

| Parameter  | Type                                                                     |
| ---------- | ------------------------------------------------------------------------ |
| `viewport` | [`SetViewportCenterZoomParams`](Viewport.md#setviewportcenterzoomparams) |

##### Returns

`void`

##### Example

```typescript
felt.setViewport({
  center: { latitude: 0, longitude: 0 },
  zoom: 10,
});
```

#### fitViewportToBounds()

> **fitViewportToBounds**(`bounds`): `void`

Fits the map to the specified bounds.

##### Parameters

| Parameter | Type                                                             |
| --------- | ---------------------------------------------------------------- |
| `bounds`  | [`ViewportFitBoundsParams`](Viewport.md#viewportfitboundsparams) |

##### Returns

`void`

##### Example

```typescript
const west = -122.4194;
const south = 37.7749;
const east = -122.4194;
const north = 37.7749;
felt.fitViewportToBounds({ bounds: [west, south, east, north] });
```

### Events

#### onElementChange()

> **onElementChange**(`args`): `VoidFunction`

Adds a listener for when an element changes.

##### Parameters

| Parameter         | Type                 | Description                                          |
| ----------------- | -------------------- | ---------------------------------------------------- |
| `args`            | `object`             | -                                                    |
| `args.options`    | `object`             | -                                                    |
| `args.options.id` | `string`             | The id of the element to listen for changes to.      |
| `args.handler`    | (`change`) => `void` | The handler that is called when the element changes. |

##### Returns

`VoidFunction`

A function to unsubscribe from the listener

##### Example

```typescript
const unsubscribe = felt.onElementChange({
  options: { id: "element-1" },
  handler: ({element}) => console.log(element.id),
});

// later on...
unsubscribe();
```

#### onElementGroupChange()

> **onElementGroupChange**(`args`): `VoidFunction`

Adds a listener for when an element group changes.

##### Parameters

| Parameter         | Type                 |
| ----------------- | -------------------- |
| `args`            | `object`             |
| `args.options`    | `object`             |
| `args.options.id` | `string`             |
| `args.handler`    | (`change`) => `void` |

##### Returns

`VoidFunction`

A function to unsubscribe from the listener

##### Example

```typescript
const unsubscribe = felt.onElementGroupChange({
  options: { id: "element-group-1" },
  handler: elementGroup => console.log(elementGroup.id),
});

// later on...
unsubscribe();
```

#### onLayerChange()

> **onLayerChange**(`args`): `VoidFunction`

Adds a listener for when a layer changes.

##### Parameters

| Parameter         | Type                 | Description                                        |
| ----------------- | -------------------- | -------------------------------------------------- |
| `args`            | `object`             | -                                                  |
| `args.options`    | `object`             | -                                                  |
| `args.options.id` | `string`             | The id of the layer to listen for changes to.      |
| `args.handler`    | (`change`) => `void` | The handler that is called when the layer changes. |

##### Returns

`VoidFunction`

A function to unsubscribe from the listener

##### Example

```typescript
const unsubscribe = felt.onLayerChange({
  options: { id: "layer-1" },
  handler: ({layer}) => console.log(layer.bounds),
});

// later on...
unsubscribe();
```

#### onLayerGroupChange()

> **onLayerGroupChange**(`args`): `VoidFunction`

Adds a listener for when a layer group changes.

##### Parameters

| Parameter         | Type                 |
| ----------------- | -------------------- |
| `args`            | `object`             |
| `args.options`    | `object`             |
| `args.options.id` | `string`             |
| `args.handler`    | (`change`) => `void` |

##### Returns

`VoidFunction`

A function to unsubscribe from the listener

##### Example

```typescript
const unsubscribe = felt.onLayerGroupChange({
  options: { id: "layer-group-1" },
  handler: ({layerGroup}) => console.log(layerGroup.id),
});

// later on...
unsubscribe();
```

#### onLegendItemChange()

> **onLegendItemChange**(`args`): `VoidFunction`

Adds a listener for when a legend item changes.

##### Parameters

| Parameter      | Type                                                     |
| -------------- | -------------------------------------------------------- |
| `args`         | `object`                                                 |
| `args.options` | [`LegendItemIdentifier`](Layers.md#legenditemidentifier) |
| `args.handler` | (`change`) => `void`                                     |

##### Returns

`VoidFunction`

A function to unsubscribe from the listener

##### Example

```typescript
const unsubscribe = felt.onLegendItemChange({
  options: { layerId: "layer-1", id: "item-1-0" },
  handler: ({legendItem}) => console.log(legendItem.visible),
});

// later on...
unsubscribe();
```

#### onSelectionChange()

> **onSelectionChange**(`params`): `VoidFunction`

Adds a listener for when the selection changes.

##### Parameters

| Parameter | Type                                                          |
| --------- | ------------------------------------------------------------- |
| `params`  | [`SelectionChangeParams`](Selection.md#selectionchangeparams) |

##### Returns

`VoidFunction`

A function to unsubscribe from the listener

##### Example

```typescript
const unsubscribe = felt.onSelectionChange({
  handler: ({selection}) => console.log(selection),
});

// later on...
unsubscribe();
```

#### onViewportMove()

> **onViewportMove**(`args`): `VoidFunction`

Adds a listener for when the viewport changes.

##### Parameters

| Parameter      | Type                   | Description                                                                            |
| -------------- | ---------------------- | -------------------------------------------------------------------------------------- |
| `args`         | `object`               | -                                                                                      |
| `args.handler` | (`viewport`) => `void` | This callback is called with the current viewport state whenever the viewport changes. |

##### Returns

`VoidFunction`

A function to unsubscribe from the listener

##### Example

```typescript
const unsubscribe = felt.onViewportMove({
  handler: viewport => console.log(viewport.center.latitude),
});

// later on...
unsubscribe();
```

***

## Testingtesting

Without this we don't get a Table of Contents for FeltController
