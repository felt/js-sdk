***

The Selection controller allows you to listen for changes to the selection on the map.

## Extended by

* [`FeltController`](../Main/FeltController.md)

## Methods

### getSelection()

> **getSelection**(): `Promise`\<[`EntityNode`](EntityNode.md)\[]>

Gets the current selection as a list of entity identifiers.

#### Returns

`Promise`\<[`EntityNode`](EntityNode.md)\[]>

#### Example

```typescript
const selection = await felt.getSelection();
```

***

### selectFeature()

> **selectFeature**(`params`: [`FeatureSelection`](FeatureSelection.md)): `Promise`\<`void`>

Selects a feature on a layer. This will show the feature's popup, modal or
sidebar (if configured) and highlight the feature.

#### Parameters

| Parameter | Type                                      |
| --------- | ----------------------------------------- |
| `params`  | [`FeatureSelection`](FeatureSelection.md) |

#### Returns

`Promise`\<`void`>

#### Example

```typescript
await felt.selectFeature({
  id: 123,
  layerId: "my-layer",
  showPopup: true,
  fitViewport: { maxZoom: 15 },
});
```

## Events

### onSelectionChange()

> **onSelectionChange**(`params`: \{`handler`: (`change`: \{`selection`: [`EntityNode`](EntityNode.md)\[]; }) => `void`; }): `VoidFunction`

Adds a listener for when the selection changes.

#### Parameters

| Parameter        | Type                                                                     |
| ---------------- | ------------------------------------------------------------------------ |
| `params`         | `object`                                                                 |
| `params.handler` | (`change`: \{`selection`: [`EntityNode`](EntityNode.md)\[]; }) => `void` |

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
