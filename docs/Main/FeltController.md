***

This is the main interface for interacting with a Felt map.

This interface is composed of the various controllers, each having a
different area of responsibility.

All the methods are listed here, but each controller is documented on its
own to make it easier to find related methods and events.

## Extends

* [`ViewportController`](../Viewport/ViewportController.md).[`UiController`](../UI/UiController.md).[`LayersController`](../Layers/LayersController.md).[`ElementsController`](../Elements/ElementsController.md).[`SelectionController`](../Selection/SelectionController.md).[`InteractionsController`](../Interactions/InteractionsController.md)

## Properties

### iframe

> `readonly` **iframe**: `null` | `HTMLIFrameElement`

The iframe element containing the Felt map, if it is an embedded map.

## Methods

### getElement()

> **getElement**(`id`: `string`): `Promise`\<`null` | [`Element`](../Elements/Element.md)>

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

### getElementGeometry()

> **getElementGeometry**(`id`: `string`): `Promise`\<`null` | [`Geometry`](../Shared/Geometry.md)>

Get the geometry of an element.

#### Parameters

| Parameter | Type     | Description                                            |
| --------- | -------- | ------------------------------------------------------ |
| `id`      | `string` | The id of the element you want to get the geometry of. |

#### Returns

`Promise`\<`null` | [`Geometry`](../Shared/Geometry.md)>

#### Example

```typescript
const geometry = await felt.getElementGeometry("element-1");
console.log(geometry?.type, geometry?.coordinates);
```

***

### getElements()

> **getElements**(`constraint`?: [`GetElementsConstraint`](../Elements/GetElementsConstraint.md)): `Promise`\<(`null` | [`Element`](../Elements/Element.md))\[]>

Gets elements from the map, according to the constraints supplied. If no
constraints are supplied, all elements will be returned.

#### Parameters

| Parameter     | Type                                                            | Description                                                     |
| ------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `constraint`? | [`GetElementsConstraint`](../Elements/GetElementsConstraint.md) | The constraints to apply to the elements returned from the map. |

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

> **getElementGroup**(`id`: `string`): `Promise`\<`null` | [`ElementGroup`](../Elements/ElementGroup.md)>

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

> **getElementGroups**(`constraint`?: [`GetElementGroupsConstraint`](../Elements/GetElementGroupsConstraint.md)): `Promise`\<(`null` | [`ElementGroup`](../Elements/ElementGroup.md))\[]>

Gets element groups from the map, according to the filters supplied. If no
constraints are supplied, all element groups will be returned in rendering order.

#### Parameters

| Parameter     | Type                                                                      | Description                                                           |
| ------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `constraint`? | [`GetElementGroupsConstraint`](../Elements/GetElementGroupsConstraint.md) | The constraints to apply to the element groups returned from the map. |

#### Returns

`Promise`\<(`null` | [`ElementGroup`](../Elements/ElementGroup.md))\[]>

The requested element groups.

#### Example

```typescript
const elementGroups = await felt.getElementGroups({ ids: ["element-group-1", "element-group-2"] });
```

***

### setElementGroupVisibility()

> **setElementGroupVisibility**(`visibility`: [`SetVisibilityRequest`](../Shared/SetVisibilityRequest.md)): `Promise`\<`void`>

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

> **getLayer**(`id`: `string`): `Promise`\<`null` | [`Layer`](../Layers/Layer.md)>

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

> **getLayers**(`constraint`?: [`GetLayersConstraint`](../Layers/GetLayersConstraint.md)): `Promise`\<(`null` | [`Layer`](../Layers/Layer.md))\[]>

Gets layers from the map, according to the constraints supplied. If no
constraints are supplied, all layers will be returned.

#### Parameters

| Parameter     | Type                                                      | Description                                                   |
| ------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| `constraint`? | [`GetLayersConstraint`](../Layers/GetLayersConstraint.md) | The constraints to apply to the layers returned from the map. |

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

> **setLayerVisibility**(`visibility`: [`SetVisibilityRequest`](../Shared/SetVisibilityRequest.md)): `Promise`\<`void`>

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

### setLayerStyle()

> **setLayerStyle**(`params`: \{`id`: `string`;`style`: `object`; }): `Promise`\<`void`>

Set the style for a layer using FSL, the Felt Style Language.

Changes are only for this session, and not persisted. This is useful to make
temporary changes to a layer's style, such as to highlight a particular layer
or feature.

See the [FSL documentation](https://developers.felt.com/felt-style-language) for details
on how to read and write styles.

If the style you set is invalid, you will receive an error explaining the problem
in the rejected promise value.

#### Parameters

| Parameter      | Type     | Description                               |
| -------------- | -------- | ----------------------------------------- |
| `params`       | `object` | -                                         |
| `params.id`    | `string` | The id of the layer to set the style for. |
| `params.style` | `object` | The style to set for the layer.           |

#### Returns

`Promise`\<`void`>

#### Example

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

### getLayerGroup()

> **getLayerGroup**(`id`: `string`): `Promise`\<`null` | [`LayerGroup`](../Layers/LayerGroup.md)>

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

> **getLayerGroups**(`constraint`?: [`GetLayerGroupsConstraint`](../Layers/GetLayerGroupsConstraint.md)): `Promise`\<(`null` | [`LayerGroup`](../Layers/LayerGroup.md))\[]>

Gets layer groups from the map, according to the constraints supplied. If no
constraints are supplied, all layer groups will be returned in rendering order.

#### Parameters

| Parameter     | Type                                                                | Description                                                         |
| ------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `constraint`? | [`GetLayerGroupsConstraint`](../Layers/GetLayerGroupsConstraint.md) | The constraints to apply to the layer groups returned from the map. |

#### Returns

`Promise`\<(`null` | [`LayerGroup`](../Layers/LayerGroup.md))\[]>

The requested layer groups.

#### Example

```typescript
const layerGroups = await felt.getLayerGroups({ ids: ["layer-group-1", "layer-group-2"] });
```

***

### setLayerGroupVisibility()

> **setLayerGroupVisibility**(`visibility`: [`SetVisibilityRequest`](../Shared/SetVisibilityRequest.md)): `Promise`\<`void`>

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

> **getLegendItem**(`id`: [`LegendItemIdentifier`](../Layers/LegendItemIdentifier.md)): `Promise`\<`null` | [`LegendItem`](../Layers/LegendItem.md)>

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

> **getLegendItems**(`constraint`?: [`LegendItemsConstraint`](../Layers/LegendItemsConstraint.md)): `Promise`\<(`null` | [`LegendItem`](../Layers/LegendItem.md))\[]>

Allows you to obtain the state of several legend items, by passing in
constraints describing which legend items you want.

If you do not pass any constraints, you will receive all legend items.

#### Parameters

| Parameter     | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| `constraint`? | [`LegendItemsConstraint`](../Layers/LegendItemsConstraint.md) |

#### Returns

`Promise`\<(`null` | [`LegendItem`](../Layers/LegendItem.md))\[]>

#### Example

```typescript
const legendItems = await felt.getLegendItems({layerId: "layer-1"});
```

***

### setLegendItemVisibility()

> **setLegendItemVisibility**(`visibility`: \{`show`: [`LegendItemIdentifier`](../Layers/LegendItemIdentifier.md)\[];`hide`: [`LegendItemIdentifier`](../Layers/LegendItemIdentifier.md)\[]; }): `Promise`\<`void`>

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

> **getLayerFilters**(`layerId`: `string`): `Promise`\<`null` | [`LayerFilters`](../Layers/LayerFilters.md)>

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

> **setLayerFilters**(`params`: \{`layerId`: `string`;`filters`: [`Filters`](../Layers/Filters.md); }): `Promise`\<`void`>

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

### getRenderedFeatures()

> **getRenderedFeatures**(`params`?: [`GetRenderedFeaturesConstraint`](../Layers/GetRenderedFeaturesConstraint.md)): `Promise`\<[`Feature`](../Layers/Feature.md)\[]>

Get the features that are currently **rendered** on the map in the viewport.

Note that this is explicitly about the features that are rendered, which isn't
necessarily a complete list of all the features in the viewport. This is because
of the way features are tiled: at low zoom levels or high feature densities, many
features are omitted from what is rendered on the screen.

#### Parameters

| Parameter | Type                                                                          | Description                                                     |
| --------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `params`? | [`GetRenderedFeaturesConstraint`](../Layers/GetRenderedFeaturesConstraint.md) | The constraints to apply to the features returned from the map. |

#### Returns

`Promise`\<[`Feature`](../Layers/Feature.md)\[]>

#### Example

```typescript
const features = await felt.getRenderedFeatures();
```

***

### getSelection()

> **getSelection**(): `Promise`\<[`EntityNode`](../Selection/EntityNode.md)\[]>

Gets the current selection as a list of entity identifiers.

#### Returns

`Promise`\<[`EntityNode`](../Selection/EntityNode.md)\[]>

#### Example

```typescript
const selection = await felt.getSelection();
```

***

### updateUiControls()

> **updateUiControls**(`controls`: [`UiControlsOptions`](../UI/UiControlsOptions.md)): `void`

Updates the UI controls on the embedded map.

#### Parameters

| Parameter  | Type                                              | Description             |
| ---------- | ------------------------------------------------- | ----------------------- |
| `controls` | [`UiControlsOptions`](../UI/UiControlsOptions.md) | The controls to update. |

#### Returns

`void`

***

### setOnMapInteractionsUi()

> **setOnMapInteractionsUi**(`options`: [`OnMapInteractionsOptions`](../UI/OnMapInteractionsOptions.md)): `void`

Control the on-map UI shown when interacting with features and elements.

If you add your own click, selection or hover handlers you may want to disable
various parts of the Felt UI. This method allows you to control the visibility of
various parts of the UI that might otherwise be shown when people click or hover
on things.

This does not affect selection. That means that selectable features and elements
will still be selected when clicked.

#### Parameters

| Parameter | Type                                                            |
| --------- | --------------------------------------------------------------- |
| `options` | [`OnMapInteractionsOptions`](../UI/OnMapInteractionsOptions.md) |

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

> **setViewport**(`viewport`: [`SetViewportCenterZoomParams`](../Viewport/SetViewportCenterZoomParams.md)): `void`

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

> **fitViewportToBounds**(`bounds`: [`ViewportFitBoundsParams`](../Viewport/ViewportFitBoundsParams.md)): `void`

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

> **onElementChange**(`args`: \{`options`: \{`id`: `string`; };`handler`: (`change`: [`ElementChangeCallbackParams`](../Elements/ElementChangeCallbackParams.md)) => `void`; }): `VoidFunction`

Adds a listener for when an element changes.

#### Parameters

| Parameter         | Type                                                                                              | Description                                          |
| ----------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `args`            | `object`                                                                                          | -                                                    |
| `args.options`    | `object`                                                                                          | -                                                    |
| `args.options.id` | `string`                                                                                          | The id of the element to listen for changes to.      |
| `args.handler`    | (`change`: [`ElementChangeCallbackParams`](../Elements/ElementChangeCallbackParams.md)) => `void` | The handler that is called when the element changes. |

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

> **onElementGroupChange**(`args`: \{`options`: \{`id`: `string`; };`handler`: (`change`: [`ElementGroupChangeCallbackParams`](../Elements/ElementGroupChangeCallbackParams.md)) => `void`; }): `VoidFunction`

Adds a listener for when an element group changes.

#### Parameters

| Parameter         | Type                                                                                                        |
| ----------------- | ----------------------------------------------------------------------------------------------------------- |
| `args`            | `object`                                                                                                    |
| `args.options`    | `object`                                                                                                    |
| `args.options.id` | `string`                                                                                                    |
| `args.handler`    | (`change`: [`ElementGroupChangeCallbackParams`](../Elements/ElementGroupChangeCallbackParams.md)) => `void` |

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

### onPointerClick()

> **onPointerClick**(`params`: \{`handler`: (`event`: [`MapInteractionEvent`](../Interactions/MapInteractionEvent.md)) => `void`; }): `VoidFunction`

Allows you to be notified the user clicks on the map.

#### Parameters

| Parameter        | Type                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------ |
| `params`         | `object`                                                                             |
| `params.handler` | (`event`: [`MapInteractionEvent`](../Interactions/MapInteractionEvent.md)) => `void` |

#### Returns

`VoidFunction`

A function to unsubscribe from the listener

#### Example

```typescript
const unsubscribe = felt.onPointerClick({
  handler: (event) => console.log(event.center, event.features),
});

// later on...
unsubscribe();
```

***

### onPointerMove()

> **onPointerMove**(`params`: \{`handler`: (`event`: [`MapInteractionEvent`](../Interactions/MapInteractionEvent.md)) => `void`; }): `VoidFunction`

Allows you to be notified the user moves the mouse over the map.

#### Parameters

| Parameter        | Type                                                                                 | Description             |
| ---------------- | ------------------------------------------------------------------------------------ | ----------------------- |
| `params`         | `object`                                                                             | Params for the listener |
| `params.handler` | (`event`: [`MapInteractionEvent`](../Interactions/MapInteractionEvent.md)) => `void` | The handler function    |

#### Returns

`VoidFunction`

A function to unsubscribe from the listener

#### Example

```typescript
const unsubscribe = felt.onPointerMove({
  handler: (event) => console.log(event.center, event.features),
});

// later on...
unsubscribe();
```

***

### onLayerChange()

> **onLayerChange**(`args`: \{`options`: \{`id`: `string`; };`handler`: (`change`: [`LayerChangeCallbackParams`](../Layers/LayerChangeCallbackParams.md)) => `void`; }): `VoidFunction`

Adds a listener for when a layer changes.

#### Parameters

| Parameter         | Type                                                                                        | Description                                        |
| ----------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| `args`            | `object`                                                                                    | -                                                  |
| `args.options`    | `object`                                                                                    | -                                                  |
| `args.options.id` | `string`                                                                                    | The id of the layer to listen for changes to.      |
| `args.handler`    | (`change`: [`LayerChangeCallbackParams`](../Layers/LayerChangeCallbackParams.md)) => `void` | The handler that is called when the layer changes. |

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

> **onLayerGroupChange**(`args`: \{`options`: \{`id`: `string`; };`handler`: (`change`: [`LayerGroupChangeCallbackParams`](../Layers/LayerGroupChangeCallbackParams.md)) => `void`; }): `VoidFunction`

Adds a listener for when a layer group changes.

#### Parameters

| Parameter         | Type                                                                                                  |
| ----------------- | ----------------------------------------------------------------------------------------------------- |
| `args`            | `object`                                                                                              |
| `args.options`    | `object`                                                                                              |
| `args.options.id` | `string`                                                                                              |
| `args.handler`    | (`change`: [`LayerGroupChangeCallbackParams`](../Layers/LayerGroupChangeCallbackParams.md)) => `void` |

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

> **onLegendItemChange**(`args`: \{`options`: [`LegendItemIdentifier`](../Layers/LegendItemIdentifier.md);`handler`: (`change`: [`LegendItemChangeCallbackParams`](../Layers/LegendItemChangeCallbackParams.md)) => `void`; }): `VoidFunction`

Adds a listener for when a legend item changes.

#### Parameters

| Parameter      | Type                                                                                                  |
| -------------- | ----------------------------------------------------------------------------------------------------- |
| `args`         | `object`                                                                                              |
| `args.options` | [`LegendItemIdentifier`](../Layers/LegendItemIdentifier.md)                                           |
| `args.handler` | (`change`: [`LegendItemChangeCallbackParams`](../Layers/LegendItemChangeCallbackParams.md)) => `void` |

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

> **onSelectionChange**(`params`: \{`handler`: (`change`: \{`selection`: [`EntityNode`](../Selection/EntityNode.md)\[]; }) => `void`; }): `VoidFunction`

Adds a listener for when the selection changes.

#### Parameters

| Parameter        | Type                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------- |
| `params`         | `object`                                                                              |
| `params.handler` | (`change`: \{`selection`: [`EntityNode`](../Selection/EntityNode.md)\[]; }) => `void` |

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

> **onViewportMove**(`args`: \{`handler`: (`viewport`: [`ViewportState`](../Viewport/ViewportState.md)) => `void`; }): `VoidFunction`

Adds a listener for when the viewport changes.

#### Parameters

| Parameter      | Type                                                                    | Description                                                                            |
| -------------- | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `args`         | `object`                                                                | -                                                                                      |
| `args.handler` | (`viewport`: [`ViewportState`](../Viewport/ViewportState.md)) => `void` | This callback is called with the current viewport state whenever the viewport changes. |

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

***

### onViewportMoveEnd()

> **onViewportMoveEnd**(`args`: \{`handler`: (`viewport`: [`ViewportState`](../Viewport/ViewportState.md)) => `void`; }): `VoidFunction`

Adds a listener for when the viewport move ends, which is when the user
stops dragging or zooming the map, animations have finished, or inertial
dragging ends.

#### Parameters

| Parameter      | Type                                                                    |
| -------------- | ----------------------------------------------------------------------- |
| `args`         | `object`                                                                |
| `args.handler` | (`viewport`: [`ViewportState`](../Viewport/ViewportState.md)) => `void` |

#### Returns

`VoidFunction`

A function to unsubscribe from the listener

#### Example

```typescript
const unsubscribe = felt.onViewportMoveEnd({
  handler: viewport => console.log(viewport.center.latitude),
});

// later on...
unsubscribe();
```

***

### onMapIdle()

> **onMapIdle**(`args`: \{`handler`: () => `void`; }): `VoidFunction`

Adds a listener for when the map is idle, which is defined as:

* No transitions are in progress
* The user is not interacting with the map, e.g. by panning or zooming
* All tiles for the current viewport have been loaded
* Any fade transitions (e.g. for labels) have completed

#### Parameters

| Parameter      | Type         |
| -------------- | ------------ |
| `args`         | `object`     |
| `args.handler` | () => `void` |

#### Returns

`VoidFunction`

A function to unsubscribe from the listener

#### Example

```typescript
const unsubscribe = felt.onMapIdle({ handler: () => console.log("map is idle") });

// later on...
unsubscribe();
```
