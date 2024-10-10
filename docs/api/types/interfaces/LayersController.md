The Layers controller allows you to get information about the layers on the
map, and make changes to their visibility.

Layers can be organised into groups, and their groups can also have their
visibility toggled.

## Methods

### getLayer()

> **getLayer**(`id`): `Promise`\<`null` \| `object`\>

Get a single layer from the map by its id.

#### Parameters

• **id**: `string`

The id of the layer you want to get.

#### Returns

`Promise`\<`null` \| `object`\>

The requested layer.

#### Example

```typescript
const layers = await layers.get({ ids: ["layer-1", "layer-2"] });
```

***

### getLayers()

> **getLayers**(`filter`?): `Promise`\<(`null` \| `object`)[]\>

Gets layers from the map, accoridng to the filters supplied. If no
filters are supplied, all layers will be returned.

#### Parameters

• **filter?**

The filters to apply to the layers returned from the map.

• **filter.ids?**: `string`[] = `...`

The ids of the layers to get.

#### Returns

`Promise`\<(`null` \| `object`)[]\>

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

> **setLayerVisibility**(`visibility`): `Promise`\<`void`\>

Hide or show layers with the given ids.

#### Parameters

• **visibility**

• **visibility.show?**: `string`[] = `...`

The ids of the layers you want to change the visibility of.

• **visibility.hide?**: `string`[] = `...`

#### Returns

`Promise`\<`void`\>

#### Example

```typescript
layers.setLayerVisibility({ show: ["layer-1", "layer-2"], hide: ["layer-3"] });
```

***

### getGroup()

> **getGroup**(`id`): `Promise`\<`null` \| `object`\>

Get a layer group from the map by its id.

#### Parameters

• **id**: `string`

#### Returns

`Promise`\<`null` \| `object`\>

The requested layer group.

#### Example

```typescript
const layerGroup = await layers.getGroup("layer-group-1");
```

***

### getGroups()

> **getGroups**(`filter`?): `Promise`\<(`null` \| `object`)[]\>

Gets layer groups from the map, according to the filters supplied. If no
filters are supplied, all layer groups will be returned in rendering order.

#### Parameters

• **filter?**

The filters to apply to the layer groups returned from the map.

• **filter.ids?**: `string`[] = `...`

The ids of the layer groups to get.

#### Returns

`Promise`\<(`null` \| `object`)[]\>

The requested layer groups.

#### Example

```typescript
const layerGroups = await layers.getGroups({ ids: ["layer-group-1", "layer-group-2"] });
```

***

### setGroupVisibility()

> **setGroupVisibility**(`visibility`): `Promise`\<`void`\>

Hide or show layer groups with the given ids.

#### Parameters

• **visibility**

• **visibility.show?**: `string`[] = `...`

The ids of the layers you want to change the visibility of.

• **visibility.hide?**: `string`[] = `...`

#### Returns

`Promise`\<`void`\>

#### Example

```typescript
layers.setGroupVisibility({ show: ["layer-group-1", "layer-group-2"], hide: ["layer-group-3"] });
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
const unsubscribe = layers.onLayerChange({
  options: { id: "layer-1" },
  handler: layer => console.log(layer.bounds),
});

// later on...
unsubscribe();
```
