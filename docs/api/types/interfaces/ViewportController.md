[**@feltjs/js-sdk**](../../README.md) • **Docs**

***

# Interface: ViewportController

The viewport controller allows you to control the viewport of the map.

You can get the current viewport, move the viewport, and be notified when
the viewport changes.

## Methods

### goto()

> **goto**(`viewport`): `void`

Moves the map to the specified location.

#### Parameters

• **viewport**

• **viewport.type**: `"center"` = `...`

• **viewport.location** = `...`

• **viewport.location.center?** = `LatLng`

The center of the viewport in latitude and longitude.

• **viewport.location.center.latitude**: `number` = `Latitude`

• **viewport.location.center.longitude**: `number` = `Longitude`

• **viewport.location.zoom?**: `number` = `FeltZoom`

The zoom level of the viewport.

#### Returns

`void`

#### Example

```typescript
Felt.viewport.goto({ center: { lat: 0, lng: 0 }, zoom: 10 });
```

***

### get()

> **get**(): `Promise`\<`object`\>

Gets the current state of the viewport.

#### Returns

`Promise`\<`object`\>

##### center

> **center**: `object` = `LatLng`

##### center.latitude

> **latitude**: `number` = `Latitude`

##### center.longitude

> **longitude**: `number` = `Longitude`

##### zoom

> **zoom**: `number` = `FeltZoom`

##### bounds

> **bounds**: [`number`, `number`, `number`, `number`] = `FeltBoundary`

***

### onMove()

> **onMove**(`callback`): `VoidFunction`

Adds a listener for when the viewport changes.

#### Parameters

• **callback**

This callback is called with the current viewport state whenever
the viewport changes.

#### Returns

`VoidFunction`

A function to unsubscribe from the listener

#### Example

```typescript
const unsubscribe = Felt.viewport.onMove(viewport => console.log(viewport.center.latitude));

// later on...
unsubscribe();
```
