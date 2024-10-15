## Main

### Felt

> `const` **Felt**: `object`

The Felt SDK is a library for embedding Felt maps into your website,
allowing you to control and inspect the map programmatically.

#### Type declaration

| Name        | Type                                                     | Description                                    |
| ----------- | -------------------------------------------------------- | ---------------------------------------------- |
| `embed()`   | `Promise`\<[`FeltController`](README.md#feltcontroller)> | Embeds a Felt map into the provided container. |
| `connect()` | `Promise`\<[`FeltController`](README.md#feltcontroller)> | Binds to an existing Felt map iframe.          |

## Controller

### FeltController

The FeltController allows you to control, inspect and observe a Felt map.
The various ways to interact with the map are namespaced for clarity.

#### Properties

##### iframe

> **iframe**: `null` | `HTMLIFrameElement`

The iframe element containing the Felt map, if it is an embedded map.

#### Methods

##### getElement()

> **getElement**(`id`): `Promise`\<`null` | [`Element`](README.md#element)>

Get a single element from the map by its id.

###### Parameters

| Parameter | Type     | Description                            |
| --------- | -------- | -------------------------------------- |
| `id`      | `string` | The id of the element you want to get. |

###### Returns

`Promise`\<`null` | [`Element`](README.md#element)>

The requested element.

###### Example

```typescript
const element = await felt.getElement("element-1");
```

##### getElements()

> **getElements**(`filter`?): `Promise`\<(`null` | [`Element`](README.md#element))\[]>

Gets elements from the map, according to the filters supplied. If no
filters are supplied, all elements will be returned.

###### Parameters

| Parameter | Type                                               | Description                                                 |
| --------- | -------------------------------------------------- | ----------------------------------------------------------- |
| `filter`? | [`GetElementsFilter`](README.md#getelementsfilter) | The filters to apply to the elements returned from the map. |

###### Returns

`Promise`\<(`null` | [`Element`](README.md#element))\[]>

All elements on the map.

###### Remarks

The elements in the map, ordered by the order specified in Felt. This is not
necessarily the order that they are drawn in, as Felt draws points above
lines and lines above polygons, for instance.

###### Example

```typescript
const elements = await felt.getElements();
```

##### getElementGroup()

> **getElementGroup**(`id`): `Promise`\<`null` | [`ElementGroup`](README.md#elementgroup-1)>

Get an element group from the map by its id.

###### Parameters

| Parameter | Type     |
| --------- | -------- |
| `id`      | `string` |

###### Returns

`Promise`\<`null` | [`ElementGroup`](README.md#elementgroup-1)>

The requested element group.

###### Example

```typescript
felt.getElementGroup("element-group-1");
```

##### getElementGroups()

> **getElementGroups**(`filter`?): `Promise`\<(`null` | [`ElementGroup`](README.md#elementgroup-1))\[]>

Gets element groups from the map, according to the filters supplied. If no
filters are supplied, all element groups will be returned in rendering order.

###### Parameters

| Parameter | Type                                                         | Description                                                       |
| --------- | ------------------------------------------------------------ | ----------------------------------------------------------------- |
| `filter`? | [`GetElementGroupsFilter`](README.md#getelementgroupsfilter) | The filters to apply to the element groups returned from the map. |

###### Returns

`Promise`\<(`null` | [`ElementGroup`](README.md#elementgroup-1))\[]>

The requested element groups.

###### Example

```typescript
const elementGroups = await felt.getElementGroups({ ids: ["element-group-1", "element-group-2"] });
```

##### setElementGroupVisibility()

> **setElementGroupVisibility**(`visibility`): `Promise`\<`void`>

Hide or show element groups with the given ids.

###### Parameters

| Parameter    | Type                                                     |
| ------------ | -------------------------------------------------------- |
| `visibility` | [`SetVisibilityRequest`](README.md#setvisibilityrequest) |

###### Returns

`Promise`\<`void`>

###### Example

```typescript
felt.setElementGroupVisibility({ show: ["element-group-1", "element-group-2"], hide: ["element-group-3"] });
```

##### getLayer()

> **getLayer**(`id`): `Promise`\<`null` | [`Layer`](README.md#layer-1)>

Get a single layer from the map by its id.

###### Parameters

| Parameter | Type     | Description                          |
| --------- | -------- | ------------------------------------ |
| `id`      | `string` | The id of the layer you want to get. |

###### Returns

`Promise`\<`null` | [`Layer`](README.md#layer-1)>

The requested layer.

###### Example

```typescript
const layers = await felt.getLayer({ ids: ["layer-1", "layer-2"] });
```

##### getLayers()

> **getLayers**(`filter`?): `Promise`\<(`null` | [`Layer`](README.md#layer-1))\[]>

Gets layers from the map, according to the filters supplied. If no
filters are supplied, all layers will be returned.

###### Parameters

| Parameter | Type                                           | Description                                               |
| --------- | ---------------------------------------------- | --------------------------------------------------------- |
| `filter`? | [`GetLayersFilter`](README.md#getlayersfilter) | The filters to apply to the layers returned from the map. |

###### Returns

`Promise`\<(`null` | [`Layer`](README.md#layer-1))\[]>

All layers on the map.

###### Remarks

The layers in the map, ordered by the order specified in Felt. This is not
necessarily the order that they are drawn in, as Felt draws points above
lines and lines above polygons, for instance.

###### Example

```typescript
const layers = await felt.getLayers();
```

##### setLayerVisibility()

> **setLayerVisibility**(`visibility`): `Promise`\<`void`>

Hide or show layers with the given ids.

###### Parameters

| Parameter    | Type                                                     |
| ------------ | -------------------------------------------------------- |
| `visibility` | [`SetVisibilityRequest`](README.md#setvisibilityrequest) |

###### Returns

`Promise`\<`void`>

###### Example

```typescript
felt.setLayerVisibility({ show: ["layer-1", "layer-2"], hide: ["layer-3"] });
```

##### getLayerGroup()

> **getLayerGroup**(`id`): `Promise`\<`null` | [`LayerGroup`](README.md#layergroup-1)>

Get a layer group from the map by its id.

###### Parameters

| Parameter | Type     |
| --------- | -------- |
| `id`      | `string` |

###### Returns

`Promise`\<`null` | [`LayerGroup`](README.md#layergroup-1)>

The requested layer group.

###### Example

```typescript
felt.getLayerGroup("layer-group-1");
```

##### getLayerGroups()

> **getLayerGroups**(`filter`?): `Promise`\<(`null` | [`LayerGroup`](README.md#layergroup-1))\[]>

Gets layer groups from the map, according to the filters supplied. If no
filters are supplied, all layer groups will be returned in rendering order.

###### Parameters

| Parameter | Type                                                     | Description                                                     |
| --------- | -------------------------------------------------------- | --------------------------------------------------------------- |
| `filter`? | [`GetLayerGroupsFilter`](README.md#getlayergroupsfilter) | The filters to apply to the layer groups returned from the map. |

###### Returns

`Promise`\<(`null` | [`LayerGroup`](README.md#layergroup-1))\[]>

The requested layer groups.

###### Example

```typescript
const layerGroups = await felt.getLayerGroups({ ids: ["layer-group-1", "layer-group-2"] });
```

##### setLayerGroupVisibility()

> **setLayerGroupVisibility**(`visibility`): `Promise`\<`void`>

Hide or show layer groups with the given ids.

###### Parameters

| Parameter    | Type                                                     |
| ------------ | -------------------------------------------------------- |
| `visibility` | [`SetVisibilityRequest`](README.md#setvisibilityrequest) |

###### Returns

`Promise`\<`void`>

###### Example

```typescript
felt.setLayerGroupVisibility({ show: ["layer-group-1", "layer-group-2"], hide: ["layer-group-3"] });
```

##### updateUiControls()

> **updateUiControls**(`controls`): `void`

Updates the UI controls on the embedded map.

###### Parameters

| Parameter  | Type                                               | Description             |
| ---------- | -------------------------------------------------- | ----------------------- |
| `controls` | [`UiControlsOptions`](README.md#uicontrolsoptions) | The controls to update. |

###### Returns

`void`

##### getViewport()

> **getViewport**(): `Promise`\<[`ViewportState`](README.md#viewportstate)>

Gets the current state of the viewport.

###### Returns

`Promise`\<[`ViewportState`](README.md#viewportstate)>

##### gotoViewport()

> **gotoViewport**(`viewport`): `void`

Moves the map to the specified location.

###### Parameters

| Parameter  | Type                                                                   |
| ---------- | ---------------------------------------------------------------------- |
| `viewport` | [`SetViewportCenterZoomParams`](README.md#setviewportcenterzoomparams) |

###### Returns

`void`

###### Example

```typescript
felt.gotoViewport({ center: { lat: 0, lng: 0 }, zoom: 10 });
```

##### fitBounds()

> **fitBounds**(`bounds`): `void`

Fits the map to the specified bounds.

###### Parameters

| Parameter | Type                                                           |
| --------- | -------------------------------------------------------------- |
| `bounds`  | [`ViewportFitBoundsParams`](README.md#viewportfitboundsparams) |

###### Returns

`void`

###### Example

```typescript
const west = -122.4194;
const south = 37.7749;
const east = -122.4194;
const north = 37.7749;
felt.fitBounds({ bounds: [west, south, east, north] });
```

#### Events

##### onElementChange()

> **onElementChange**(`args`): `VoidFunction`

Adds a listener for when an element changes.

###### Parameters

| Parameter         | Type                 | Description                                          |
| ----------------- | -------------------- | ---------------------------------------------------- |
| `args`            | `object`             | -                                                    |
| `args.options`    | `object`             | -                                                    |
| `args.options.id` | `string`             | The id of the element to listen for changes to.      |
| `args.handler`    | (`change`) => `void` | The handler that is called when the element changes. |

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
const unsubscribe = felt.onElementChange({
  options: { id: "element-1" },
  handler: element => console.log(element.id),
});

// later on...
unsubscribe();
```

##### onElementGroupChange()

> **onElementGroupChange**(`args`): `VoidFunction`

Adds a listener for when an element group changes.

###### Parameters

| Parameter         | Type                 |
| ----------------- | -------------------- |
| `args`            | `object`             |
| `args.options`    | `object`             |
| `args.options.id` | `string`             |
| `args.handler`    | (`change`) => `void` |

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
const unsubscribe = felt.onElementGroupChange({
  options: { id: "element-group-1" },
  handler: elementGroup => console.log(elementGroup.id),
});

// later on...
unsubscribe();
```

##### onLayerChange()

> **onLayerChange**(`args`): `VoidFunction`

Adds a listener for when a layer changes.

###### Parameters

| Parameter         | Type                 | Description                                        |
| ----------------- | -------------------- | -------------------------------------------------- |
| `args`            | `object`             | -                                                  |
| `args.options`    | `object`             | -                                                  |
| `args.options.id` | `string`             | The id of the layer to listen for changes to.      |
| `args.handler`    | (`change`) => `void` | The handler that is called when the layer changes. |

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
const unsubscribe = felt.onLayerChange({
  options: { id: "layer-1" },
  handler: layer => console.log(layer.bounds),
});

// later on...
unsubscribe();
```

##### onLayerGroupChange()

> **onLayerGroupChange**(`args`): `VoidFunction`

Adds a listener for when a layer group changes.

###### Parameters

| Parameter         | Type                 |
| ----------------- | -------------------- |
| `args`            | `object`             |
| `args.options`    | `object`             |
| `args.options.id` | `string`             |
| `args.handler`    | (`change`) => `void` |

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
const unsubscribe = felt.onLayerGroupChange({
  options: { id: "layer-group-1" },
  handler: layerGroup => console.log(layerGroup.id),
});

// later on...
unsubscribe();
```

##### onViewportMove()

> **onViewportMove**(`args`): `VoidFunction`

Adds a listener for when the viewport changes.

###### Parameters

| Parameter      | Type                   | Description                                                                            |
| -------------- | ---------------------- | -------------------------------------------------------------------------------------- |
| `args`         | `object`               | -                                                                                      |
| `args.handler` | (`viewport`) => `void` | This callback is called with the current viewport state whenever the viewport changes. |

###### Returns

`VoidFunction`

A function to unsubscribe from the listener

###### Example

```typescript
const unsubscribe = felt.onViewportMove({
  handler: viewport => console.log(viewport.center.latitude),
});

// later on...
unsubscribe();
```

***

### FeltEmbedOptions

#### Extends

* `TypeOf`\<*typeof* `FeltEmbedOptionsSchema`>

#### Properties

##### uiControls

> **uiControls**: `object` = `UiControlsOptionsSchema`

[UiControlsOptions](README.md#uicontrolsoptions)

| Name                   | Type      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `showLegend`?          | `boolean` | Whether or not the legend is shown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `cooperativeGestures`? | `boolean` | When co-operative gestures are enabled, the pan and zoom gestures are adjusted to work better when the map is embedded in another page. **Remarks** On mobile devices, enabling co-operative gestures will allow the user to pan past the embedded map with a single finger drag. To pan the map, they must use two fingers. On desktop devices, enabling co-operative gestures allows the user to scroll past the embedded map using their scroll wheel or trackpad. To zoom the map, they must hold the Ctrl (Windows) or Command key (Mac) while scrolling. |
| `fullScreenButton`?    | `boolean` | Whether or not the full screen button is shown in an embedded map. **Remarks** When clicked, this will open the map in a new tab or window.                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `geolocation`?         | `boolean` | Whether or not the geolocation button is shown in an embedded map. **Remarks** The geolocation feature will plot your position on the map. If you click the button again, it will start tracking your position.                                                                                                                                                                                                                                                                                                                                                |
| `zoomControls`?        | `boolean` | Whether or not the zoom controls are shown in an embedded map. **Remarks** This does not affect whether or not the map can be zoomed, just the display of the zoom controls in the bottom right corner of the map.                                                                                                                                                                                                                                                                                                                                             |
| `scaleBar`?            | `boolean` | Whether or not the scale bar is shown in an embedded map.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

###### Inherited from

`z.infer.uiControls`

##### initialViewport?

> `optional` **initialViewport**: `object`

[ViewportCenterZoom](README.md#viewportcenterzoom)

| Name               | Type     | Default value | Description                                           |
| ------------------ | -------- | ------------- | ----------------------------------------------------- |
| `center`           | `object` | LatLngSchema  | The center of the viewport in latitude and longitude. |
| `center.latitude`  | `number` | Latitude      | -                                                     |
| `center.longitude` | `number` | Longitude     | -                                                     |
| `zoom`             | `number` | FeltZoom      | The zoom level of the viewport.                       |

###### Inherited from

`z.infer.initialViewport`

## Elements

### ElementGroup

#### Extends

* `TypeOf`\<*typeof* `ElementGroupSchema`>

#### Properties

##### id

> **id**: `string`

A string identifying the element group.

###### Inherited from

`z.infer.id`

##### name

> **name**: `string`

The name of the element group. This is shown in the legend.

###### Inherited from

`z.infer.name`

##### caption

> **caption**: `null` | `string`

The caption of the element group. This is shown in the legend.

###### Inherited from

`z.infer.caption`

##### elementIds

> **elementIds**: `string`\[]

The ids of the elements in the element group.

###### Remarks

You can use these ids to get the full element objects via the `getElements` method.

###### Inherited from

`z.infer.elementIds`

##### visible

> **visible**: `boolean`

Whether the element group is visible or not.

###### Inherited from

`z.infer.visible`

##### shownInLegend

> **shownInLegend**: `boolean`

Whether the element group is shown in the legend or not.

###### Inherited from

`z.infer.shownInLegend`

***

### GetElementResponse

The response from the `getElement` method. If the element doesn't exist, the
response will be `null`.

#### Extends

* `TypeOf`\<*typeof* `GetElementResponseSchema`>

#### Properties

##### id

> **id**: `string`

The string identifying the element

###### Inherited from

`z.infer.id`

##### type

> **type**: `string`

The type of element, such as a Place, Polygon, Line, Route, etc.

###### Inherited from

`z.infer.type`

##### groupId

> **groupId**: `null` | `string`

The ID of the element group that the element belongs to, or null
if the element is not inside an element group.

###### Inherited from

`z.infer.groupId`

##### name

> **name**: `null` | `string`

The name of the element can be displayed in the Legend, depending
on how the element's legend is configured in its style.

###### Inherited from

`z.infer.name`

##### description

> **description**: `null` | `string`

The element description forms part of the element's metadata. This is visible
to users via the element info button in the legend.

###### Inherited from

`z.infer.description`

***

### GetElementGroupResponse

The response from the `getElementGroup` method. If the element doesn't exist, the
response will be `null`.

#### Extends

* `TypeOf`\<*typeof* `GetElementGroupResponseSchema`>

#### Properties

##### id

> **id**: `string`

A string identifying the element group.

###### Inherited from

`z.infer.id`

##### name

> **name**: `string`

The name of the element group. This is shown in the legend.

###### Inherited from

`z.infer.name`

##### caption

> **caption**: `null` | `string`

The caption of the element group. This is shown in the legend.

###### Inherited from

`z.infer.caption`

##### elementIds

> **elementIds**: `string`\[]

The ids of the elements in the element group.

###### Remarks

You can use these ids to get the full element objects via the `getElements` method.

###### Inherited from

`z.infer.elementIds`

##### visible

> **visible**: `boolean`

Whether the element group is visible or not.

###### Inherited from

`z.infer.visible`

##### shownInLegend

> **shownInLegend**: `boolean`

Whether the element group is shown in the legend or not.

###### Inherited from

`z.infer.shownInLegend`

***

### GetElementsFilter

The filter to apply to the elements. If this is not passed, all elements will be returned.

#### Extends

* `TypeOf`\<*typeof* [`GetElementsFilterSchema`](README.md#getelementsfilterschema)>

#### Properties

##### ids?

> `optional` **ids**: `string`\[]

The ids of the elements to get.

###### Inherited from

`z.infer.ids`

***

### GetElementGroupsFilter

The filter to apply to the element groups. If this is not passed, all element groups will be returned.

#### Extends

* `TypeOf`\<*typeof* [`GetElementGroupsFilterSchema`](README.md#getelementgroupsfilterschema)>

#### Properties

##### ids?

> `optional` **ids**: `string`\[]

The ids of the element groups to get.

###### Inherited from

`z.infer.ids`

***

### ElementChangeCallbackParams

The parameters for the `onElementChange` listener.

#### Properties

##### element

> **element**: `null` | [`Element`](README.md#element)

The new data for the element or null if the element was removed.

***

### ElementGroupChangeCallbackParams

The parameters for the `onElementGroupChange` listener.

#### Properties

##### elementGroup

> **elementGroup**: `null` | [`ElementGroup`](README.md#elementgroup-1)

***

### GetElementsResponse

> **GetElementsResponse**: (`null` | `object`)\[]

The response from the `getElements` method.

#### Remarks

The elements in the map, ordered by the order specified in Felt. This is not
necessarily the order that they are drawn in, as Felt draws points above
lines and lines above polygons, for instance.

See [Element](README.md#element) for the structure of the element object.

***

### GetElementGroupsResponse

> **GetElementGroupsResponse**: (`null` | `object`)\[]

The response from the `getElementGroups` method.

## Layers

### Layer

#### Extends

* `TypeOf`\<*typeof* `LayerSchema`>

#### Properties

##### id

> **id**: `string`

The string identifying the layer

###### Inherited from

`z.infer.id`

##### groupId

> **groupId**: `null` | `string`

The ID of the layer group that the layer belongs to.

Layers that appear at the root level in Felt will not have a group ID.

###### Inherited from

`z.infer.groupId`

##### name

> **name**: `string`

The name of the layer can be displayed in the Legend, depending
on how the layer's legend is configured in its style.

###### Inherited from

`z.infer.name`

##### caption

> **caption**: `null` | `string`

The layer's caption is shown in the legend.

###### Inherited from

`z.infer.caption`

##### description

> **description**: `null` | `string`

The layer description forms part of the layer's metadata. This is visible
to users via the layer info button in the legend.

###### Inherited from

`z.infer.description`

##### visible

> **visible**: `boolean`

Whether the layer is visible or not.

###### Inherited from

`z.infer.visible`

##### shownInLegend

> **shownInLegend**: `boolean`

Whether the layer is shown in the legend or not.

###### Inherited from

`z.infer.shownInLegend`

##### status

> **status**: `"processing"` | `"completed"` | `"failed"` | `"incomplete"` = `LayerProcessingStatus`

The current processing status of the layer.

###### Inherited from

`z.infer.status`

##### geometryType

> **geometryType**: `null` | `string`

The geometry type of the layer.

###### Remarks

This will generally be one of:

* `"Point"`
* `"Line"`
* `"Polygon"`
* `"Raster"`
* `null`

When the layer is processing, or it is a data-only layer, it will be null. You should
expect this to be able to be any string, however, as more geometry types can be added
in the future.

###### Inherited from

`z.infer.geometryType`

##### bounds

> **bounds**: `null` | \[`number`, `number`, `number`, `number`]

The bounding box of the layer. If the layer is processing, or the bounds have otherwise
not been calculated or are not available, this will be `null`.

###### Inherited from

`z.infer.bounds`

***

### LayerGroup

#### Extends

* `TypeOf`\<*typeof* `LayerGroupSchema`>

#### Properties

##### id

> **id**: `string`

A string identifying the layer group.

###### Inherited from

`z.infer.id`

##### name

> **name**: `string`

The name of the layer group. This is shown in the legend.

###### Inherited from

`z.infer.name`

##### caption

> **caption**: `null` | `string`

The caption of the layer group. This is shown in the legend.

###### Inherited from

`z.infer.caption`

##### layerIds

> **layerIds**: `string`\[]

The ids of the layers in the layer group.

###### Remarks

You can use these ids to get the full layer objects via the `getLayers` method.

###### Inherited from

`z.infer.layerIds`

##### visible

> **visible**: `boolean`

Whether the layer group is visible or not.

###### Inherited from

`z.infer.visible`

##### shownInLegend

> **shownInLegend**: `boolean`

Whether the layer group is shown in the legend or not.

###### Inherited from

`z.infer.shownInLegend`

##### bounds

> **bounds**: `null` | \[`number`, `number`, `number`, `number`]

The bounding box of the layer group.

###### Inherited from

`z.infer.bounds`

***

### GetLayerResponse

The response from the `getLayer` method. If the layer doesn't exist, the
response will be `null`.

#### Extends

* `TypeOf`\<*typeof* `GetLayerResponseSchema`>

#### Properties

##### id

> **id**: `string`

The string identifying the layer

###### Inherited from

`z.infer.id`

##### groupId

> **groupId**: `null` | `string`

The ID of the layer group that the layer belongs to.

Layers that appear at the root level in Felt will not have a group ID.

###### Inherited from

`z.infer.groupId`

##### name

> **name**: `string`

The name of the layer can be displayed in the Legend, depending
on how the layer's legend is configured in its style.

###### Inherited from

`z.infer.name`

##### caption

> **caption**: `null` | `string`

The layer's caption is shown in the legend.

###### Inherited from

`z.infer.caption`

##### description

> **description**: `null` | `string`

The layer description forms part of the layer's metadata. This is visible
to users via the layer info button in the legend.

###### Inherited from

`z.infer.description`

##### visible

> **visible**: `boolean`

Whether the layer is visible or not.

###### Inherited from

`z.infer.visible`

##### shownInLegend

> **shownInLegend**: `boolean`

Whether the layer is shown in the legend or not.

###### Inherited from

`z.infer.shownInLegend`

##### status

> **status**: `"processing"` | `"completed"` | `"failed"` | `"incomplete"` = `LayerProcessingStatus`

The current processing status of the layer.

###### Inherited from

`z.infer.status`

##### geometryType

> **geometryType**: `null` | `string`

The geometry type of the layer.

###### Remarks

This will generally be one of:

* `"Point"`
* `"Line"`
* `"Polygon"`
* `"Raster"`
* `null`

When the layer is processing, or it is a data-only layer, it will be null. You should
expect this to be able to be any string, however, as more geometry types can be added
in the future.

###### Inherited from

`z.infer.geometryType`

##### bounds

> **bounds**: `null` | \[`number`, `number`, `number`, `number`]

The bounding box of the layer. If the layer is processing, or the bounds have otherwise
not been calculated or are not available, this will be `null`.

###### Inherited from

`z.infer.bounds`

***

### GetLayerGroupResponse

The response from the `getLayerGroup` method. If the layer doesn't exist, the
response will be `null`.

#### Extends

* `TypeOf`\<*typeof* `GetLayerGroupResponseSchema`>

#### Properties

##### id

> **id**: `string`

A string identifying the layer group.

###### Inherited from

`z.infer.id`

##### name

> **name**: `string`

The name of the layer group. This is shown in the legend.

###### Inherited from

`z.infer.name`

##### caption

> **caption**: `null` | `string`

The caption of the layer group. This is shown in the legend.

###### Inherited from

`z.infer.caption`

##### layerIds

> **layerIds**: `string`\[]

The ids of the layers in the layer group.

###### Remarks

You can use these ids to get the full layer objects via the `getLayers` method.

###### Inherited from

`z.infer.layerIds`

##### visible

> **visible**: `boolean`

Whether the layer group is visible or not.

###### Inherited from

`z.infer.visible`

##### shownInLegend

> **shownInLegend**: `boolean`

Whether the layer group is shown in the legend or not.

###### Inherited from

`z.infer.shownInLegend`

##### bounds

> **bounds**: `null` | \[`number`, `number`, `number`, `number`]

The bounding box of the layer group.

###### Inherited from

`z.infer.bounds`

***

### GetLayersFilter

The filter to apply to the layers. If this is not passed, all layers will be returned.

#### Extends

* `TypeOf`\<*typeof* [`GetLayersFilterSchema`](README.md#getlayersfilterschema)>

#### Properties

##### ids?

> `optional` **ids**: `string`\[]

The ids of the layers to get.

###### Inherited from

`z.infer.ids`

***

### GetLayerGroupsFilter

The filter to apply to the layer groups. If this is not passed, all layer groups will be returned.

#### Extends

* `TypeOf`\<*typeof* [`GetLayerGroupsFilterSchema`](README.md#getlayergroupsfilterschema)>

#### Properties

##### ids?

> `optional` **ids**: `string`\[]

The ids of the layer groups to get.

###### Inherited from

`z.infer.ids`

***

### LayerChangeCallbackParams

The parameters for the `onLayerChange` listener.

#### Properties

##### layer

> **layer**: `null` | [`Layer`](README.md#layer-1)

The new data for the layer or null if the layer was removed.

***

### LayerGroupChangeCallbackParams

The parameters for the `onLayerGroupChange` listener.

#### Properties

##### layerGroup

> **layerGroup**: `null` | [`LayerGroup`](README.md#layergroup-1)

***

### LayerProcessingStatus

> **LayerProcessingStatus**: `"processing"` | `"completed"` | `"failed"` | `"incomplete"`

This describes the processing status of a layer.

The various values are:

* `processing`: The layer has been uploaded or updated and is still processing.
* `completed`: The layer has been processed and can be viewed on the map.
* `failed`: The layer failed to process and cannot be viewed on the map.
* `incomplete`: The layer has not been processed.

***

### GetLayersResponse

> **GetLayersResponse**: (`null` | `object`)\[]

The response from the `getLayers` method.

#### Remarks

The layers in the map, ordered by the order specified in Felt. This is not
necessarily the order that they are drawn in, as Felt draws points above
lines and lines above polygons, for instance.

See [Layer](README.md#layer-1) for the structure of the layer object.

***

### GetLayerGroupsResponse

> **GetLayerGroupsResponse**: (`null` | `object`)\[]

The response from the `getLayerGroups` method.

## Other

### Element

#### Extends

* `TypeOf`\<*typeof* `ElementSchema`>

#### Properties

##### id

> **id**: `string`

The string identifying the element

###### Inherited from

`z.infer.id`

##### type

> **type**: `string`

The type of element, such as a Place, Polygon, Line, Route, etc.

###### Inherited from

`z.infer.type`

##### groupId

> **groupId**: `null` | `string`

The ID of the element group that the element belongs to, or null
if the element is not inside an element group.

###### Inherited from

`z.infer.groupId`

##### name

> **name**: `null` | `string`

The name of the element can be displayed in the Legend, depending
on how the element's legend is configured in its style.

###### Inherited from

`z.infer.name`

##### description

> **description**: `null` | `string`

The element description forms part of the element's metadata. This is visible
to users via the element info button in the legend.

###### Inherited from

`z.infer.description`

***

### GetElementsFilterSchema

> `const` **GetElementsFilterSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`>

#### Type declaration

| Name  | Type                                               | Description                     |
| ----- | -------------------------------------------------- | ------------------------------- |
| `ids` | `ZodOptional`\<`ZodArray`\<`ZodString`, `"many"`>> | The ids of the elements to get. |

***

### GetElementGroupsFilterSchema

> `const` **GetElementGroupsFilterSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`>

#### Type declaration

| Name  | Type                                               | Description                           |
| ----- | -------------------------------------------------- | ------------------------------------- |
| `ids` | `ZodOptional`\<`ZodArray`\<`ZodString`, `"many"`>> | The ids of the element groups to get. |

***

### GetLayersFilterSchema

> `const` **GetLayersFilterSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`>

#### Type declaration

| Name  | Type                                               | Description                   |
| ----- | -------------------------------------------------- | ----------------------------- |
| `ids` | `ZodOptional`\<`ZodArray`\<`ZodString`, `"many"`>> | The ids of the layers to get. |

***

### GetLayerGroupsFilterSchema

> `const` **GetLayerGroupsFilterSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`>

#### Type declaration

| Name  | Type                                               | Description                         |
| ----- | -------------------------------------------------- | ----------------------------------- |
| `ids` | `ZodOptional`\<`ZodArray`\<`ZodString`, `"many"`>> | The ids of the layer groups to get. |

***

### UiControlsOptionsSchema

> `const` **UiControlsOptionsSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`>

**`Internal`**

#### Type declaration

| Name                  | Type                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `showLegend`          | `ZodOptional`\<`ZodBoolean`> | Whether or not the legend is shown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `cooperativeGestures` | `ZodOptional`\<`ZodBoolean`> | When co-operative gestures are enabled, the pan and zoom gestures are adjusted to work better when the map is embedded in another page. **Remarks** On mobile devices, enabling co-operative gestures will allow the user to pan past the embedded map with a single finger drag. To pan the map, they must use two fingers. On desktop devices, enabling co-operative gestures allows the user to scroll past the embedded map using their scroll wheel or trackpad. To zoom the map, they must hold the Ctrl (Windows) or Command key (Mac) while scrolling. |
| `fullScreenButton`    | `ZodOptional`\<`ZodBoolean`> | Whether or not the full screen button is shown in an embedded map. **Remarks** When clicked, this will open the map in a new tab or window.                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `geolocation`         | `ZodOptional`\<`ZodBoolean`> | Whether or not the geolocation button is shown in an embedded map. **Remarks** The geolocation feature will plot your position on the map. If you click the button again, it will start tracking your position.                                                                                                                                                                                                                                                                                                                                                |
| `zoomControls`        | `ZodOptional`\<`ZodBoolean`> | Whether or not the zoom controls are shown in an embedded map. **Remarks** This does not affect whether or not the map can be zoomed, just the display of the zoom controls in the bottom right corner of the map.                                                                                                                                                                                                                                                                                                                                             |
| `scaleBar`            | `ZodOptional`\<`ZodBoolean`> | Whether or not the scale bar is shown in an embedded map.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

***

### ViewportCenterZoomSchema

> `const` **ViewportCenterZoomSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`>

#### Type declaration

| Name     | Type                                                                | Default value | Description                                           |
| -------- | ------------------------------------------------------------------- | ------------- | ----------------------------------------------------- |
| `center` | `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`> | LatLngSchema  | The center of the viewport in latitude and longitude. |
| `zoom`   | `ZodNumber`                                                         | FeltZoom      | The zoom level of the viewport.                       |

***

### SetViewportCenterZoomParamsSchema

> `const` **SetViewportCenterZoomParamsSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`>

#### Type declaration

| Name       | Type                                                                |
| ---------- | ------------------------------------------------------------------- |
| `type`     | `ZodLiteral`\<`"center"`>                                           |
| `location` | `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`> |

***

### ViewportFitBoundsParamsSchema

> `const` **ViewportFitBoundsParamsSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`>

#### Type declaration

| Name     | Type                                                                       | Default value      |
| -------- | -------------------------------------------------------------------------- | ------------------ |
| `bounds` | `ZodTuple`\<\[`ZodNumber`, `ZodNumber`, `ZodNumber`, `ZodNumber`], `null`> | FeltBoundarySchema |

## Types

### FeltZoom

> **FeltZoom**: `number`

The zoom level of the map.

It is a floating-point number between 1 and 23, where 1 is the most
zoomed out and 23 is the most zoomed in.

***

### FeltBoundary

> **FeltBoundary**: \[`number`, `number`, `number`, `number`]

The edges of the map in the form of a bounding box.

The boundary is a tuple of the form `[west, south, east, north]`.

## UI Controls

### UiControlsOptions

#### Extends

* `TypeOf`\<*typeof* [`UiControlsOptionsSchema`](README.md#uicontrolsoptionsschema)>

#### Properties

##### showLegend?

> `optional` **showLegend**: `boolean`

Whether or not the legend is shown.

###### Default Value

```ts
true
```

###### Inherited from

`z.infer.showLegend`

##### cooperativeGestures?

> `optional` **cooperativeGestures**: `boolean`

When co-operative gestures are enabled, the pan and zoom gestures are
adjusted to work better when the map is embedded in another page.

###### Remarks

On mobile devices, enabling co-operative gestures will allow the user to
pan past the embedded map with a single finger drag. To pan the map, they
must use two fingers.

On desktop devices, enabling co-operative gestures allows the user to
scroll past the embedded map using their scroll wheel or trackpad. To
zoom the map, they must hold the Ctrl (Windows) or Command key (Mac) while
scrolling.

###### Default Value

```ts
true
```

###### Inherited from

`z.infer.cooperativeGestures`

##### fullScreenButton?

> `optional` **fullScreenButton**: `boolean`

Whether or not the full screen button is shown in an embedded map.

###### Remarks

When clicked, this will open the map in a new tab or window.

###### Default Value

```ts
true
```

###### Inherited from

`z.infer.fullScreenButton`

##### geolocation?

> `optional` **geolocation**: `boolean`

Whether or not the geolocation button is shown in an embedded map.

###### Remarks

The geolocation feature will plot your position on the map. If you
click the button again, it will start tracking your position.

###### Default Value

```ts
false
```

###### Inherited from

`z.infer.geolocation`

##### zoomControls?

> `optional` **zoomControls**: `boolean`

Whether or not the zoom controls are shown in an embedded map.

###### Remarks

This does not affect whether or not the map can be zoomed, just
the display of the zoom controls in the bottom right corner of the map.

###### Default Value

```ts
true
```

###### Inherited from

`z.infer.zoomControls`

##### scaleBar?

> `optional` **scaleBar**: `boolean`

Whether or not the scale bar is shown in an embedded map.

###### Default Value

```ts
true
```

###### Inherited from

`z.infer.scaleBar`

## Viewport

### ViewportCenterZoom

#### Extends

* `TypeOf`\<*typeof* [`ViewportCenterZoomSchema`](README.md#viewportcenterzoomschema)>

#### Properties

##### center

> **center**: `object` = `LatLngSchema`

The center of the viewport in latitude and longitude.

| Name        | Type     | Default value |
| ----------- | -------- | ------------- |
| `latitude`  | `number` | Latitude      |
| `longitude` | `number` | Longitude     |

###### Inherited from

`z.infer.center`

##### zoom

> **zoom**: `number` = `FeltZoom`

The zoom level of the viewport.

###### Inherited from

`z.infer.zoom`

***

### ViewportState

#### Extends

* `TypeOf`\<*typeof* `ViewportStateSchema`>

#### Properties

##### center

> **center**: `object` = `LatLngSchema`

| Name        | Type     | Default value |
| ----------- | -------- | ------------- |
| `latitude`  | `number` | Latitude      |
| `longitude` | `number` | Longitude     |

###### Inherited from

`z.infer.center`

##### zoom

> **zoom**: `number` = `FeltZoom`

###### Inherited from

`z.infer.zoom`

##### bounds

> **bounds**: \[`number`, `number`, `number`, `number`] = `FeltBoundarySchema`

###### Inherited from

`z.infer.bounds`

***

### SetViewportCenterZoomParams

The parameters for the `gotoViewport` method.

[FeltController.gotoViewport](README.md#gotoviewport)

#### Extends

* `TypeOf`\<*typeof* [`SetViewportCenterZoomParamsSchema`](README.md#setviewportcenterzoomparamsschema)>

#### Properties

##### type

> **type**: `"center"`

###### Inherited from

`z.infer.type`

##### location

> **location**: `object`

| Name               | Type     | Default value | Description                                           |
| ------------------ | -------- | ------------- | ----------------------------------------------------- |
| `center`?          | `object` | LatLngSchema  | The center of the viewport in latitude and longitude. |
| `center.latitude`  | `number` | Latitude      | -                                                     |
| `center.longitude` | `number` | Longitude     | -                                                     |
| `zoom`?            | `number` | FeltZoom      | The zoom level of the viewport.                       |

###### Inherited from

`z.infer.location`

***

### ViewportFitBoundsParams

The parameters for the `fitBounds` method.

[FeltController.fitBounds](README.md#fitbounds)

#### Extends

* `TypeOf`\<*typeof* [`ViewportFitBoundsParamsSchema`](README.md#viewportfitboundsparamsschema)>

#### Properties

##### bounds

> **bounds**: \[`number`, `number`, `number`, `number`] = `FeltBoundarySchema`

###### Inherited from

`z.infer.bounds`

## Visibility

### SetVisibilityRequest

The parameters for the methods that change the visibility of entities.

#### Extends

* `TypeOf`\<*typeof* `SetVisibilityRequestSchema`>

#### Properties

##### show?

> `optional` **show**: `string`\[]

The ids of the entities you want to change the visibility of.

###### Inherited from

`z.infer.show`

##### hide?

> `optional` **hide**: `string`\[]

###### Inherited from

`z.infer.hide`
