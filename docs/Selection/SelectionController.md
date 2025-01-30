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
felt.selectFeature({
  id: 123,
  layerId: "my-layer",
  showPopup: true,
  fitViewport: { maxZoom: 15 },
});
```

***

### clearSelection()

> **clearSelection**(`params`?: \{ `features`: `boolean`; `elements`: `boolean`; }): `Promise`\<`void`>

Clears the current selection. This clears the selection of

#### Parameters

| Parameter          | Type                                               | Description                                                                                                 |
| ------------------ | -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `params`?          | \{ `features`: `boolean`; `elements`: `boolean`; } | The parameters to clear the selection. If this is not provided, both features and elements will be cleared. |
| `params.features`? | `boolean`                                          | Whether to clear the features from the selection.                                                           |
| `params.elements`? | `boolean`                                          | Whether to clear the elements from the selection.                                                           |

#### Returns

`Promise`\<`void`>

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

> **onSelectionChange**(`params`: \{ `handler`: (`change`: \{ `selection`: [`EntityNode`](EntityNode.md)\[]; }) => `void`; }): `VoidFunction`

Adds a listener for when the selection changes.

#### Parameters

| Parameter        | Type                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------ |
| `params`         | \{ `handler`: (`change`: \{ `selection`: [`EntityNode`](EntityNode.md)\[]; }) => `void`; } |
| `params.handler` | (`change`: \{ `selection`: [`EntityNode`](EntityNode.md)\[]; }) => `void`                  |

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
