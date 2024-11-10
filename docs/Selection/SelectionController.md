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
