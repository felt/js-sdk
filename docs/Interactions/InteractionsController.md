***

The Interactions controller allows you to observe interactions with the map

## Extended by

* [`FeltController`](../Main/FeltController.md)

## Events

### onPointerClick()

> **onPointerClick**(`params`: \{`handler`: (`event`: [`MapInteractionEvent`](MapInteractionEvent.md)) => `void`; }): `VoidFunction`

Allows you to be notified the user clicks on the map.

#### Parameters

| Parameter        | Type                                                                 |
| ---------------- | -------------------------------------------------------------------- |
| `params`         | `object`                                                             |
| `params.handler` | (`event`: [`MapInteractionEvent`](MapInteractionEvent.md)) => `void` |

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

> **onPointerMove**(`params`: \{`handler`: (`event`: [`MapInteractionEvent`](MapInteractionEvent.md)) => `void`; }): `VoidFunction`

Allows you to be notified the user moves the mouse over the map.

#### Parameters

| Parameter        | Type                                                                 | Description             |
| ---------------- | -------------------------------------------------------------------- | ----------------------- |
| `params`         | `object`                                                             | Params for the listener |
| `params.handler` | (`event`: [`MapInteractionEvent`](MapInteractionEvent.md)) => `void` | The handler function    |

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
