***

The Layers controller allows you to get information about the layers on the
map, and make changes to their visibility.

Layers can be organised into groups, and their groups can also have their
visibility toggled.

## Extended by

* [`FeltController`](../Main/FeltController.md)

## Methods

### getLayer()

> **getLayer**(`id`: `string`): `Promise`\<`null` | [`Layer`](Layer.md)>

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

> **getLayers**(`constraint`?: [`GetLayersConstraint`](GetLayersConstraint.md)): `Promise`\<(`null` | [`Layer`](Layer.md))\[]>

Gets layers from the map, according to the constraints supplied. If no
constraints are supplied, all layers will be returned.

#### Parameters

| Parameter     | Type                                            | Description                                                   |
| ------------- | ----------------------------------------------- | ------------------------------------------------------------- |
| `constraint`? | [`GetLayersConstraint`](GetLayersConstraint.md) | The constraints to apply to the layers returned from the map. |

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

> **getLayerGroup**(`id`: `string`): `Promise`\<`null` | [`LayerGroup`](LayerGroup.md)>

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

> **getLayerGroups**(`constraint`?: [`GetLayerGroupsConstraint`](GetLayerGroupsConstraint.md)): `Promise`\<(`null` | [`LayerGroup`](LayerGroup.md))\[]>

Gets layer groups from the map, according to the constraints supplied. If no
constraints are supplied, all layer groups will be returned in rendering order.

#### Parameters

| Parameter     | Type                                                      | Description                                                         |
| ------------- | --------------------------------------------------------- | ------------------------------------------------------------------- |
| `constraint`? | [`GetLayerGroupsConstraint`](GetLayerGroupsConstraint.md) | The constraints to apply to the layer groups returned from the map. |

#### Returns

`Promise`\<(`null` | [`LayerGroup`](LayerGroup.md))\[]>

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

> **getLegendItem**(`id`: [`LegendItemIdentifier`](LegendItemIdentifier.md)): `Promise`\<`null` | [`LegendItem`](LegendItem.md)>

Allows you to get the state of a single legend item.

#### Parameters

| Parameter | Type                                              |
| --------- | ------------------------------------------------- |
| `id`      | [`LegendItemIdentifier`](LegendItemIdentifier.md) |

#### Returns

`Promise`\<`null` | [`LegendItem`](LegendItem.md)>

#### Example

```typescript
const legendItem = await felt.getLegendItem({
  id: "legend-item-1",
  layerId: "layer-1",
})
```

***

### getLegendItems()

> **getLegendItems**(`constraint`?: [`LegendItemsConstraint`](LegendItemsConstraint.md)): `Promise`\<(`null` | [`LegendItem`](LegendItem.md))\[]>

Allows you to obtain the state of several legend items, by passing in
constraints describing which legend items you want.

If you do not pass any constraints, you will receive all legend items.

#### Parameters

| Parameter     | Type                                                |
| ------------- | --------------------------------------------------- |
| `constraint`? | [`LegendItemsConstraint`](LegendItemsConstraint.md) |

#### Returns

`Promise`\<(`null` | [`LegendItem`](LegendItem.md))\[]>

#### Example

```typescript
const legendItems = await felt.getLegendItems({layerId: "layer-1"});
```

***

### setLegendItemVisibility()

> **setLegendItemVisibility**(`visibility`: \{`show`: [`LegendItemIdentifier`](LegendItemIdentifier.md)\[];`hide`: [`LegendItemIdentifier`](LegendItemIdentifier.md)\[]; }): `Promise`\<`void`>

Hide or show legend items with the given identifiers.

#### Parameters

| Parameter          | Type                                                 |
| ------------------ | ---------------------------------------------------- |
| `visibility`       | `object`                                             |
| `visibility.show`? | [`LegendItemIdentifier`](LegendItemIdentifier.md)\[] |
| `visibility.hide`? | [`LegendItemIdentifier`](LegendItemIdentifier.md)\[] |

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

> **getLayerFilters**(`layerId`: `string`): `Promise`\<`null` | [`LayerFilters`](LayerFilters.md)>

Get the filters for a layer.

#### Parameters

| Parameter | Type     |
| --------- | -------- |
| `layerId` | `string` |

#### Returns

`Promise`\<`null` | [`LayerFilters`](LayerFilters.md)>

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

> **setLayerFilters**(`params`: \{`layerId`: `string`;`filters`: [`Filters`](Filters.md); }): `Promise`\<`void`>

Sets the **ephemeral** filters for a layer.

#### Parameters

| Parameter        | Type                    | Description                                                                                                     |
| ---------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------- |
| `params`         | `object`                | -                                                                                                               |
| `params.layerId` | `string`                | The layer that you want to set the filters for.                                                                 |
| `params.filters` | [`Filters`](Filters.md) | The filters to set for the layer. This will replace any ephemeral filters that are currently set for the layer. |

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

> **getRenderedFeatures**(`params`?: [`GetRenderedFeaturesConstraint`](GetRenderedFeaturesConstraint.md)): `Promise`\<[`Feature`](Feature.md)\[]>

Get the features that are currently **rendered** on the map in the viewport.

Note that this is explicitly about the features that are rendered, which isn't
necessarily a complete list of all the features in the viewport. This is because
of the way features are tiled: at low zoom levels or high feature densities, many
features are omitted from what is rendered on the screen.

#### Parameters

| Parameter | Type                                                                | Description                                                     |
| --------- | ------------------------------------------------------------------- | --------------------------------------------------------------- |
| `params`? | [`GetRenderedFeaturesConstraint`](GetRenderedFeaturesConstraint.md) | The constraints to apply to the features returned from the map. |

#### Returns

`Promise`\<[`Feature`](Feature.md)\[]>

#### Example

```typescript
const features = await felt.getRenderedFeatures();
```

## Events

### onLayerChange()

> **onLayerChange**(`args`: \{`options`: \{`id`: `string`; };`handler`: (`change`: [`LayerChangeCallbackParams`](LayerChangeCallbackParams.md)) => `void`; }): `VoidFunction`

Adds a listener for when a layer changes.

#### Parameters

| Parameter         | Type                                                                              | Description                                        |
| ----------------- | --------------------------------------------------------------------------------- | -------------------------------------------------- |
| `args`            | `object`                                                                          | -                                                  |
| `args.options`    | `object`                                                                          | -                                                  |
| `args.options.id` | `string`                                                                          | The id of the layer to listen for changes to.      |
| `args.handler`    | (`change`: [`LayerChangeCallbackParams`](LayerChangeCallbackParams.md)) => `void` | The handler that is called when the layer changes. |

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

> **onLayerGroupChange**(`args`: \{`options`: \{`id`: `string`; };`handler`: (`change`: [`LayerGroupChangeCallbackParams`](LayerGroupChangeCallbackParams.md)) => `void`; }): `VoidFunction`

Adds a listener for when a layer group changes.

#### Parameters

| Parameter         | Type                                                                                        |
| ----------------- | ------------------------------------------------------------------------------------------- |
| `args`            | `object`                                                                                    |
| `args.options`    | `object`                                                                                    |
| `args.options.id` | `string`                                                                                    |
| `args.handler`    | (`change`: [`LayerGroupChangeCallbackParams`](LayerGroupChangeCallbackParams.md)) => `void` |

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

> **onLegendItemChange**(`args`: \{`options`: [`LegendItemIdentifier`](LegendItemIdentifier.md);`handler`: (`change`: [`LegendItemChangeCallbackParams`](LegendItemChangeCallbackParams.md)) => `void`; }): `VoidFunction`

Adds a listener for when a legend item changes.

#### Parameters

| Parameter      | Type                                                                                        |
| -------------- | ------------------------------------------------------------------------------------------- |
| `args`         | `object`                                                                                    |
| `args.options` | [`LegendItemIdentifier`](LegendItemIdentifier.md)                                           |
| `args.handler` | (`change`: [`LegendItemChangeCallbackParams`](LegendItemChangeCallbackParams.md)) => `void` |

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
