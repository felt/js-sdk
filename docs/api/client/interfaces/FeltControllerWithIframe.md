## Properties

### iframe

> **iframe**: `HTMLIFrameElement`

The iframe element containing the Felt map.

## Methods

### getLayer()

> **getLayer**(`id`): `Promise`\<`null` \| [`LayersGetLayerResponse`](../../types/interfaces/LayersGetLayerResponse.md)\>

Get a single layer from the map by its id.

#### Parameters

• **id**: `string`

The id of the layer you want to get.

#### Returns

`Promise`\<`null` \| [`LayersGetLayerResponse`](../../types/interfaces/LayersGetLayerResponse.md)\>

The requested layer.

#### Example

```typescript
const layers = await felt.getLayer({ ids: ["layer-1", "layer-2"] });
```

***

### getLayers()

> **getLayers**(`filter`?): `Promise`\<(`null` \| `object`)[]\>

Gets layers from the map, accoridng to the filters supplied. If no
filters are supplied, all layers will be returned.

#### Parameters

• **filter?**: [`LayersGetLayersFilter`](../../types/interfaces/LayersGetLayersFilter.md)

The filters to apply to the layers returned from the map.

#### Returns

`Promise`\<(`null` \| `object`)[]\>

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

> **setLayerVisibility**(`visibility`): `Promise`\<`void`\>

Hide or show layers with the given ids.

#### Parameters

• **visibility**: [`LayersSetVisibilityRequest`](../../types/interfaces/LayersSetVisibilityRequest.md)

#### Returns

`Promise`\<`void`\>

#### Example

```typescript
felt.setLayerVisibility({ show: ["layer-1", "layer-2"], hide: ["layer-3"] });
```

***

### getLayerGroup()

> **getLayerGroup**(`id`): `Promise`\<`null` \| [`LayersGetLayerGroupResponse`](../../types/interfaces/LayersGetLayerGroupResponse.md)\>

Get a layer group from the map by its id.

#### Parameters

• **id**: `string`

#### Returns

`Promise`\<`null` \| [`LayersGetLayerGroupResponse`](../../types/interfaces/LayersGetLayerGroupResponse.md)\>

The requested layer group.

#### Example

```typescript
felt.getLayerGroup("layer-group-1");
```

***

### getLayerGroups()

> **getLayerGroups**(`filter`?): `Promise`\<(`null` \| `object`)[]\>

Gets layer groups from the map, according to the filters supplied. If no
filters are supplied, all layer groups will be returned in rendering order.

#### Parameters

• **filter?**: [`LayersGetGroupsFilter`](../../types/interfaces/LayersGetGroupsFilter.md)

The filters to apply to the layer groups returned from the map.

#### Returns

`Promise`\<(`null` \| `object`)[]\>

The requested layer groups.

#### Example

```typescript
const layerGroups = await felt.getLayerGroups({ ids: ["layer-group-1", "layer-group-2"] });
```

***

### setLayerGroupVisibility()

> **setLayerGroupVisibility**(`visibility`): `Promise`\<`void`\>

Hide or show layer groups with the given ids.

#### Parameters

• **visibility**: [`LayersSetVisibilityRequest`](../../types/interfaces/LayersSetVisibilityRequest.md)

#### Returns

`Promise`\<`void`\>

#### Example

```typescript
felt.setLayerGroupVisibility({ show: ["layer-group-1", "layer-group-2"], hide: ["layer-group-3"] });
```

***

### onLayerChange()

> **onLayerChange**(`args`): `VoidFunction`

Adds a listener for when a layer changes.

#### Parameters

• **args**

• **args.options**

• **args.options.id**: `string`

The id of the layer to listen for changes to.

• **args.handler**

The handler that is called when the layer changes.

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

### updateUiControls()

> **updateUiControls**(`controls`): `void`

Updates the UI controls on the embedded map.

#### Parameters

• **controls**: [`UiControlsOptions`](../../types/interfaces/UiControlsOptions.md)

The controls to update.

#### Returns

`void`

***

### getViewport()

> **getViewport**(): `Promise`\<[`ViewportState`](../../types/interfaces/ViewportState.md)\>

Gets the current state of the viewport.

#### Returns

`Promise`\<[`ViewportState`](../../types/interfaces/ViewportState.md)\>

***

### gotoViewport()

> **gotoViewport**(`viewport`): `void`

Moves the map to the specified location.

#### Parameters

• **viewport**: [`ViewportSetCenterZoomParams`](../../types/interfaces/ViewportSetCenterZoomParams.md)

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

• **bounds**: [`ViewportFitBoundsParams`](../../types/interfaces/ViewportFitBoundsParams.md)

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

### onViewportMove()

> **onViewportMove**(`args`): `VoidFunction`

Adds a listener for when the viewport changes.

#### Parameters

• **args**

• **args.handler**

This callback is called with the current viewport state whenever
the viewport changes.

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
