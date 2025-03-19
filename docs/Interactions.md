***

The Interactions module allows you to be notified when the user interacts with the map.

Interactions include clicking and hovering on points and features.

# MapInteractionEvent

The event object passed to the interaction listeners.

# Properties

## coordinate

> **coordinate**: [`LatLng`](Shared.md#latlng)

The cursor position in world coordinates.

## features

> **features**: [`Feature`](Layers.md#feature)[]

The vector features that are under the cursor.

## rasterValues

> **rasterValues**: [`RasterValue`](Layers.md#rastervalue)[]

The raster pixel values that are under the cursor.

***

# InteractionsController

The Interactions controller allows you to observe interactions with the map

# Extended by

- [`FeltController`](Main.md#feltcontroller)

# Events

## onPointerClick()

> **onPointerClick**(`params`: \{ `handler`: (`event`: [`MapInteractionEvent`](#mapinteractionevent)) => `void`; \}): `VoidFunction`

Allows you to be notified the user clicks on the map.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `handler`: (`event`: [`MapInteractionEvent`](#mapinteractionevent)) => `void`; \} |
| `params.handler` | (`event`: [`MapInteractionEvent`](#mapinteractionevent)) => `void` |

### Returns

`VoidFunction`

A function to unsubscribe from the listener

### Example

```typescript
const unsubscribe = felt.onPointerClick({
  handler: (event) => console.log(event.center, event.features),
});

// later on...
unsubscribe();
```

## onPointerMove()

> **onPointerMove**(`params`: \{ `handler`: (`event`: [`MapInteractionEvent`](#mapinteractionevent)) => `void`; \}): `VoidFunction`

Allows you to be notified the user moves the mouse over the map.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `handler`: (`event`: [`MapInteractionEvent`](#mapinteractionevent)) => `void`; \} | Params for the listener |
| `params.handler` | (`event`: [`MapInteractionEvent`](#mapinteractionevent)) => `void` | The handler function |

### Returns

`VoidFunction`

A function to unsubscribe from the listener

### Example

```typescript
const unsubscribe = felt.onPointerMove({
  handler: (event) => console.log(event.center, event.features),
});

// later on...
unsubscribe();
```
