***

The Interactions controller allows you to observe interactions with the map

# Extended by

* [`FeltController`](../Main/FeltController.md)

# Events

## onPointerClick()

> **onPointerClick**(`params`: \{ `handler`: (`event`: [`MapInteractionEvent`](MapInteractionEvent.md)) => `void`; }): `VoidFunction`

Allows you to be notified when the user clicks on the map.

Use this to react to user clicks on the map, such as triggering custom
actions or collecting interaction data.

### Parameters

| Parameter        | Type                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------- |
| `params`         | \{ `handler`: (`event`: [`MapInteractionEvent`](MapInteractionEvent.md)) => `void`; } |
| `params.handler` | (`event`: [`MapInteractionEvent`](MapInteractionEvent.md)) => `void`                  |

### Returns

`VoidFunction`

A function to unsubscribe from the listener.

### Example

```typescript
const unsubscribe = felt.onPointerClick({
  handler: (event) => console.log(event.center, event.features),
});

// later on...
unsubscribe();
```

***

## onPointerMove()

> **onPointerMove**(`params`: \{ `handler`: (`event`: [`MapInteractionEvent`](MapInteractionEvent.md)) => `void`; }): `VoidFunction`

Allows you to be notified when the user moves the mouse over the map.

Use this to track mouse movement and detect features under the cursor,
such as for hover effects or real-time data display.

### Parameters

| Parameter        | Type                                                                                  | Description             |
| ---------------- | ------------------------------------------------------------------------------------- | ----------------------- |
| `params`         | \{ `handler`: (`event`: [`MapInteractionEvent`](MapInteractionEvent.md)) => `void`; } | Params for the listener |
| `params.handler` | (`event`: [`MapInteractionEvent`](MapInteractionEvent.md)) => `void`                  | The handler function    |

### Returns

`VoidFunction`

A function to unsubscribe from the listener.

### Example

```typescript
// Track mouse movement and features under cursor
const unsubscribe = felt.onPointerMove({
  handler: (event) => {
    console.log("Mouse position:", event.center);
    console.log("Features under cursor:", event.features);
  }
});

// later on...
unsubscribe();
```
