The Layers controller allows you to get information about the layers on the
map, and make changes to their visibility.

## Methods

### getLayer()

> **getLayer**(`id`): `Promise`\<`undefined` \| `object`\>

Get a single layer from the map by its id.

#### Parameters

• **id**: `string`

The id of the layer you want to get.

#### Returns

`Promise`\<`undefined` \| `object`\>

The requested layer.

#### Example

```typescript
const layers = await layers.get({ ids: ["layer-1", "layer-2"] });
```

***

### getLayers()

> **getLayers**(`filter`?): `Promise`\<`object`[]\>

Returns layers from the map, accoridng to the filters supplied. If no
filters are supplied, all layers will be returned.

#### Parameters

• **filter?**: `void` \| [`LayersGetLayersFilter`](../type-aliases/LayersGetLayersFilter.md)

The filters to apply to the layers returned from the map.

#### Returns

`Promise`\<`object`[]\>

All layers on the map.

#### Remarks

The layers in the map, ordered by the order specified in Felt. This is not
necessarily the order that they are drawn in, as Felt draws points above
lines and lines above polygons, for instance.

#### Example

```typescript
const layers = await layers.getAll();
```

***

### setLayerVisibility()

> **setLayerVisibility**(`request`): `Promise`\<`void`\>

Hide or show layers with the given ids.

#### Parameters

• **request**

• **request.show?**: `string`[] = `...`

The ids of the layers you want to change the visibility of.

• **request.hide?**: `string`[] = `...`

#### Returns

`Promise`\<`void`\>

#### Example

```typescript
layers.setLayerVisibility({ show: ["layer-1", "layer-2"], hide: ["layer-3"] });
```
