The FeltController allows you to control, inspect and observe a Felt map.
The various ways to interact with the map are namespaced for clarity.

## Table of Contents

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
  * [updateUiControls()](#updateuicontrols)
  * [getViewport()](#getviewport)
  * [gotoViewport()](#gotoviewport)
  * [fitBounds()](#fitbounds)
* [Events](#events)
  * [onElementChange()](#onelementchange)
  * [onElementGroupChange()](#onelementgroupchange)
  * [onLayerChange()](#onlayerchange)
  * [onLayerGroupChange()](#onlayergroupchange)
  * [onViewportMove()](#onviewportmove)

## Properties

### iframe

> **iframe**: `null` | `HTMLIFrameElement`

The iframe element containing the Felt map, if it is an embedded map.

## Methods

### getElement()

> **getElement**(`id`): `Promise`\<`null` | [`Element`](Element.md)>

Get a single element from the map by its id.

#### Parameters

| Parameter | Type     | Description                            |
| --------- | -------- | -------------------------------------- |
| `id`      | `string` | The id of the element you want to get. |

#### Returns

`Promise`\<`null` | [`Element`](Element.md)>

The requested element.

#### Example

```typescript
const element = await felt.getElement("element-1");
```

***

### getElements()

> **getElements**(`filter`?): `Promise`\<(`null` | [`Element`](Element.md))\[]>

Gets elements from the map, according to the filters supplied. If no
filters are supplied, all elements will be returned.

#### Parameters

| Parameter | Type                                                               | Description                                                 |
| --------- | ------------------------------------------------------------------ | ----------------------------------------------------------- |
| `filter`? | [`GetElementsFilter`](../../types/interfaces/GetElementsFilter.md) | The filters to apply to the elements returned from the map. |

#### Returns

`Promise`\<(`null` | [`Element`](Element.md))\[]>

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

> **getElementGroup**(`id`): `Promise`\<`null` | [`ElementGroup`](ElementGroup.md)>

Get an element group from the map by its id.

#### Parameters

| Parameter | Type     |
| --------- | -------- |
| `id`      | `string` |

#### Returns

`Promise`\<`null` | [`ElementGroup`](ElementGroup.md)>

The requested element group.

#### Example

```typescript
felt.getElementGroup("element-group-1");
```

***

### getElementGroups()

> **getElementGroups**(`filter`?): `Promise`\<(`null` | [`ElementGroup`](ElementGroup.md))\[]>

Gets element groups from the map, according to the filters supplied. If no
filters are supplied, all element groups will be returned in rendering order.

#### Parameters

| Parameter | Type                                                                         | Description                                                       |
| --------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `filter`? | [`GetElementGroupsFilter`](../../types/interfaces/GetElementGroupsFilter.md) | The filters to apply to the element groups returned from the map. |

#### Returns

`Promise`\<(`null` | [`ElementGroup`](ElementGroup.md))\[]>

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

| Parameter    | Type                                                                     |
| ------------ | ------------------------------------------------------------------------ |
| `visibility` | [`SetVisibilityRequest`](../../types/interfaces/SetVisibilityRequest.md) |

#### Returns

`Promise`\<`void`>

#### Example

```typescript
felt.setElementGroupVisibility({ show: ["element-group-1", "element-group-2"], hide: ["element-group-3"] });
```

***

### getLayer()

> **getLayer**(`id`): `Promise`\<`null` | [`Layer`](Layer.md)>

Get a single layer from the map by its id.

#### Parameters

| Parameter | Type     | Description                          |
| --------- | -------- | ------------------------------------ |
| `id`      | `string` | The id of the layer you want to get. |

#### Returns

`Promise`\<`null` | [`Layer`](Layer.md)>

The requested layer.

#### Example

```typescript
const layers = await felt.getLayer({ ids: ["layer-1", "layer-2"] });
```

***

### getLayers()

> **getLayers**(`filter`?): `Promise`\<(`null` | [`Layer`](Layer.md))\[]>

Gets layers from the map, according to the filters supplied. If no
filters are supplied, all layers will be returned.

#### Parameters

| Parameter | Type                                                           | Description                                               |
| --------- | -------------------------------------------------------------- | --------------------------------------------------------- |
| `filter`? | [`GetLayersFilter`](../../types/interfaces/GetLayersFilter.md) | The filters to apply to the layers returned from the map. |

#### Returns

`Promise`\<(`null` | [`Layer`](Layer.md))\[]>

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

| Parameter    | Type                                                                     |
| ------------ | ------------------------------------------------------------------------ |
| `visibility` | [`SetVisibilityRequest`](../../types/interfaces/SetVisibilityRequest.md) |

#### Returns

`Promise`\<`void`>

#### Example

```typescript
felt.setLayerVisibility({ show: ["layer-1", "layer-2"], hide: ["layer-3"] });
```

***

### getLayerGroup()

> **getLayerGroup**(`id`): `Promise`\<`null` | [`LayerGroup`](LayerGroup.md)>

Get a layer group from the map by its id.

#### Parameters

| Parameter | Type     |
| --------- | -------- |
| `id`      | `string` |

#### Returns

`Promise`\<`null` | [`LayerGroup`](LayerGroup.md)>

The requested layer group.

#### Example

```typescript
felt.getLayerGroup("layer-group-1");
```

***

### getLayerGroups()

> **getLayerGroups**(`filter`?): `Promise`\<(`null` | [`LayerGroup`](LayerGroup.md))\[]>

Gets layer groups from the map, according to the filters supplied. If no
filters are supplied, all layer groups will be returned in rendering order.

#### Parameters

| Parameter | Type                                                                     | Description                                                     |
| --------- | ------------------------------------------------------------------------ | --------------------------------------------------------------- |
| `filter`? | [`GetLayerGroupsFilter`](../../types/interfaces/GetLayerGroupsFilter.md) | The filters to apply to the layer groups returned from the map. |

#### Returns

`Promise`\<(`null` | [`LayerGroup`](LayerGroup.md))\[]>

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

| Parameter    | Type                                                                     |
| ------------ | ------------------------------------------------------------------------ |
| `visibility` | [`SetVisibilityRequest`](../../types/interfaces/SetVisibilityRequest.md) |

#### Returns

`Promise`\<`void`>

#### Example

```typescript
felt.setLayerGroupVisibility({ show: ["layer-group-1", "layer-group-2"], hide: ["layer-group-3"] });
```

***

### updateUiControls()

> **updateUiControls**(`controls`): `void`

Updates the UI controls on the embedded map.

#### Parameters

| Parameter  | Type                                                               | Description             |
| ---------- | ------------------------------------------------------------------ | ----------------------- |
| `controls` | [`UiControlsOptions`](../../types/interfaces/UiControlsOptions.md) | The controls to update. |

#### Returns

`void`

***

### getViewport()

> **getViewport**(): `Promise`\<[`ViewportState`](../../types/interfaces/ViewportState.md)>

Gets the current state of the viewport.

#### Returns

`Promise`\<[`ViewportState`](../../types/interfaces/ViewportState.md)>

***

### gotoViewport()

> **gotoViewport**(`viewport`): `void`

Moves the map to the specified location.

#### Parameters

| Parameter  | Type                                                                                   |
| ---------- | -------------------------------------------------------------------------------------- |
| `viewport` | [`SetViewportCenterZoomParams`](../../types/interfaces/SetViewportCenterZoomParams.md) |

#### Returns

`void`

#### Example

```typescript
felt.gotoViewport({ center: { lat: 0, lng: 0 }, zoom: 10 });
```

***

### fitBounds()

> **fitBounds**(`bounds`): `void`

Fits the map to the specified bounds.

#### Parameters

| Parameter | Type                                                                           |
| --------- | ------------------------------------------------------------------------------ |
| `bounds`  | [`ViewportFitBoundsParams`](../../types/interfaces/ViewportFitBoundsParams.md) |

#### Returns

`void`

#### Example

```typescript
const west = -122.4194;
const south = 37.7749;
const east = -122.4194;
const north = 37.7749;
felt.fitBounds({ bounds: [west, south, east, north] });
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
  handler: element => console.log(element.id),
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
  handler: layer => console.log(layer.bounds),
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
  handler: layerGroup => console.log(layerGroup.id),
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
