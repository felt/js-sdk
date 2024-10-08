The viewport controller allows you to control the viewport of the map.

You can get the current viewport, move the viewport, and be notified when
the viewport changes.

## Methods

### goto()

> **goto**(`viewport`): `void`

Moves the map to the specified location.

#### Parameters

• **viewport**: [`ViewportSetCenterZoomParams`](ViewportSetCenterZoomParams.md)

#### Returns

`void`

#### Example

```typescript
Felt.viewport.goto({ center: { lat: 0, lng: 0 }, zoom: 10 });
```

***

### get()

> **get**(): `Promise`\<[`ViewportState`](ViewportState.md)\>

Gets the current state of the viewport.

#### Returns

`Promise`\<[`ViewportState`](ViewportState.md)\>

***

### onMove()

> **onMove**(`args`): `VoidFunction`

Adds a listener for when the viewport changes.

#### Parameters

• **args**

• **args.handler**

This callback is called with the current viewport state whenever
the viewport changes.

#### Returns

`VoidFunction`

A function to unsubscribe from the listener

#### Example

```typescript
const unsubscribe = Felt.viewport.onMove({
  handler: viewport => console.log(viewport.center.latitude),
});

// later on...
unsubscribe();
```
