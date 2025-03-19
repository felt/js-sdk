***

# FeatureSelection

The options for selecting a feature in a layer.

## Properties

### id

> **id**: `string` \| `number`

The id of the feature to select.

### layerId

> **layerId**: `string`

The id of the layer that the feature belongs to.

### showPopup?

> `optional` **showPopup**: `boolean`

Whether to show the feature's popup, if it is configured in the layer's style.

#### Default

```ts
true
```

### fitViewport?

> `optional` **fitViewport**: `boolean` \| \{ `maxZoom`: `number`; \}

Whether to center the view on the feature after selecting it.

When true, the viewport will be centered on the feature and zoomed to fit the feature
in the viewport. If you need to control the zoom level to prevent it zooming in too
far, you can pass an object with a `maxZoom` property.

This is useful for avoiding zooming in too far on point features, or if you want
to maintain the current zoom level.

#### Default

```ts
true
```

***

# SelectionController

The Selection controller allows you to listen for changes to the selection on the map.

## Extended by

- [`FeltController`](Main.md#feltcontroller)

## Methods

### getSelection()

> **getSelection**(): `Promise`\<[`EntityNode`](#entitynode)[]\>

Gets the current selection as a list of entity identifiers.

#### Returns

`Promise`\<[`EntityNode`](#entitynode)[]\>

#### Example

```typescript
const selection = await felt.getSelection();
```

### selectFeature()

> **selectFeature**(`params`: [`FeatureSelection`](#featureselection)): `Promise`\<`void`\>

Selects a feature on a layer. This will show the feature's popup, modal or
sidebar (if configured) and highlight the feature.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`FeatureSelection`](#featureselection) |

#### Returns

`Promise`\<`void`\>

#### Example

```typescript
felt.selectFeature({
  id: 123,
  layerId: "my-layer",
  showPopup: true,
  fitViewport: { maxZoom: 15 },
});
```

### clearSelection()

> **clearSelection**(`params`?: \{ `features`: `boolean`; `elements`: `boolean`; \}): `Promise`\<`void`\>

Clears the current selection. This clears the selection of

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params`? | \{ `features`: `boolean`; `elements`: `boolean`; \} | The parameters to clear the selection. If this is not provided, both features and elements will be cleared. |
| `params.features`? | `boolean` | Whether to clear the features from the selection. |
| `params.elements`? | `boolean` | Whether to clear the elements from the selection. |

#### Returns

`Promise`\<`void`\>

#### Example

```typescript

// Removes all features and elements from the selection
felt.clearSelection();

// Removes only features from the selection
felt.clearSelection({ features: true });

// Removes only elements from the selection
felt.clearSelection({ elements: true });
```

#### Default

```typescript
{ features: true, elements: true }
```

## Events

### onSelectionChange()

> **onSelectionChange**(`params`: \{ `handler`: (`change`: \{ `selection`: [`EntityNode`](#entitynode)[]; \}) => `void`; \}): `VoidFunction`

Adds a listener for when the selection changes.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `handler`: (`change`: \{ `selection`: [`EntityNode`](#entitynode)[]; \}) => `void`; \} |
| `params.handler` | (`change`: \{ `selection`: [`EntityNode`](#entitynode)[]; \}) => `void` |

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

# EntityNode

> **EntityNode** = [`ElementNode`](#elementnode) \| [`ElementGroupNode`](#elementgroupnode) \| [`LayerNode`](#layernode) \| [`LayerGroupNode`](#layergroupnode) \| [`FeatureNode`](#featurenode)

A reference to any kind of entity in the map.

## Remarks

EntityNodes are used when you have some collection of entities and you need to

***

# ElementNode

References an element on the map.

## Properties

### type

> **type**: `"element"`

### entity

> **entity**: [`Element`](Elements.md#element-1)

***

# ElementGroupNode

References an element group.

## Properties

### type

> **type**: `"elementGroup"`

### entity

> **entity**: [`ElementGroup`](Elements.md#elementgroup)

***

# LayerNode

References a layer on the map.

## Properties

### type

> **type**: `"layer"`

### entity

> **entity**: [`Layer`](Layers.md#layer)

***

# LayerGroupNode

References a layer group on the map.

## Properties

### type

> **type**: `"layerGroup"`

### entity

> **entity**: [`LayerGroup`](Layers.md#layergroup)

***

# FeatureNode

References a feature on the map.

## Properties

### type

> **type**: `"feature"`

### entity

> **entity**: [`Feature`](Layers.md#feature)
