***

The Viewport module allows you to control the viewport of the map, such as setting the
current viewport, getting the current viewport, and being notified when the viewport changes.

# ViewportController

The viewport controller allows you to control the viewport of the map.

You can get the current viewport, move the viewport, and be notified when
the viewport changes.

## Extended by

- [`FeltController`](Main.md#feltcontroller)

## Methods

### getViewport()

> **getViewport**(): `Promise`\<[`ViewportState`](#viewportstate)\>

Gets the current state of the viewport.

#### Returns

`Promise`\<[`ViewportState`](#viewportstate)\>

### setViewport()

> **setViewport**(`viewport`: [`SetViewportCenterZoomParams`](#setviewportcenterzoomparams)): `void`

Moves the map to the specified location.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `viewport` | [`SetViewportCenterZoomParams`](#setviewportcenterzoomparams) |

#### Returns

`void`

#### Example

```typescript
felt.setViewport({
  center: { latitude: 0, longitude: 0 },
  zoom: 10,
});
```

### getViewportConstraints()

> **getViewportConstraints**(): `Promise`\<`null` \| [`ViewportConstraints`](#viewportconstraints)\>

Gets the current state of the viewport constraints.

#### Returns

`Promise`\<`null` \| [`ViewportConstraints`](#viewportconstraints)\>

### setViewportConstraints()

> **setViewportConstraints**(`constraints`: `null` \| `Partial`\<[`ViewportConstraints`](#viewportconstraints)\>): `void`

Constrains the map viewport so it stays inside certain bounds and/or certain zoom levels.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `constraints` | `null` \| `Partial`\<[`ViewportConstraints`](#viewportconstraints)\> |

#### Returns

`void`

#### Examples

```typescript
felt.setViewportConstraints({
  bounds: [-122.5372532, 37.6652478, -122.1927016, 37.881707],
  minZoom: 1,
  maxZoom: 23,
});
```

every constraint is optional
```typescript
felt.setViewportConstraints({
  bounds: [-122.5372532, 37.6652478, -122.1927016, 37.881707],
});
```

if a constraint is null, it will be removed but keeping the others
```typescript
felt.setViewportConstraints({ bounds: null });
```

if method receives null, it will remove the constraints
```typescript
felt.setViewportConstraints(null);
```

### fitViewportToBounds()

> **fitViewportToBounds**(`bounds`: [`ViewportFitBoundsParams`](#viewportfitboundsparams)): `void`

Fits the map to the specified bounds.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bounds` | [`ViewportFitBoundsParams`](#viewportfitboundsparams) |

#### Returns

`void`

#### Example

```typescript
const west = -122.4194;
const south = 37.7749;
const east = -122.4194;
const north = 37.7749;
felt.fitViewportToBounds({ bounds: [west, south, east, north] });
```

## Events

### onViewportMove()

> **onViewportMove**(`args`: \{ `handler`: (`viewport`: [`ViewportState`](#viewportstate)) => `void`; \}): `VoidFunction`

Adds a listener for when the viewport changes.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `args` | \{ `handler`: (`viewport`: [`ViewportState`](#viewportstate)) => `void`; \} | - |
| `args.handler` | (`viewport`: [`ViewportState`](#viewportstate)) => `void` | This callback is called with the current viewport state whenever the viewport changes. |

#### Returns

`VoidFunction`

A function to unsubscribe from the listener

#### Example

```typescript
const unsubscribe = felt.onViewportMove({
  handler: viewport => console.log(viewport.center.latitude),
});

// later on...
unsubscribe();
```

### onViewportMoveEnd()

> **onViewportMoveEnd**(`args`: \{ `handler`: (`viewport`: [`ViewportState`](#viewportstate)) => `void`; \}): `VoidFunction`

Adds a listener for when the viewport move ends, which is when the user
stops dragging or zooming the map, animations have finished, or inertial
dragging ends.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `handler`: (`viewport`: [`ViewportState`](#viewportstate)) => `void`; \} |
| `args.handler` | (`viewport`: [`ViewportState`](#viewportstate)) => `void` |

#### Returns

`VoidFunction`

A function to unsubscribe from the listener

#### Example

```typescript
const unsubscribe = felt.onViewportMoveEnd({
  handler: viewport => console.log(viewport.center.latitude),
});

// later on...
unsubscribe();
```

### onMapIdle()

> **onMapIdle**(`args`: \{ `handler`: () => `void`; \}): `VoidFunction`

Adds a listener for when the map is idle, which is defined as:
- No transitions are in progress
- The user is not interacting with the map, e.g. by panning or zooming
- All tiles for the current viewport have been loaded
- Any fade transitions (e.g. for labels) have completed

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `handler`: () => `void`; \} |
| `args.handler` | () => `void` |

#### Returns

`VoidFunction`

A function to unsubscribe from the listener

#### Example

```typescript
const unsubscribe = felt.onMapIdle({ handler: () => console.log("map is idle") });

// later on...
unsubscribe();
```

***

# ViewportCenterZoom

The input type for setting the viewport to a particular center and zoom.

## Properties

### center

> **center**: [`LatLng`](Shared.md#latlng)

The center of the viewport in latitude and longitude.

### zoom

> **zoom**: `number`

The zoom level of the viewport.

***

# ViewportState

The current state of the viewport, including the derived bounds.

## Properties

### center

> **center**: [`LatLng`](Shared.md#latlng)

The center of the viewport in latitude and longitude.

[LatLng](Shared.md#latlng)

### zoom

> **zoom**: `number`

The zoom level of the viewport.

[FeltZoom](Shared.md#feltzoom)

### bounds

> **bounds**: \[`number`, `number`, `number`, `number`\]

The bounding box of the viewport.

This is derived, and depends on the center and zoom of the viewport, as
well as its size.

[FeltBoundary](Shared.md#feltboundary)

***

# SetViewportCenterZoomParams

The parameters for the `setViewport` method.

## Properties

### center?

> `optional` **center**: \{ `latitude`: `number`; `longitude`: `number`; \}

| Name | Type | Default value |
| ------ | ------ | ------ |
| `latitude` | `number` | Latitude |
| `longitude` | `number` | Longitude |

### zoom?

> `optional` **zoom**: `number`

***

# ViewportConstraints

The constraints for the viewport. Used to ensure that the viewport stays
within certain bounds and zoom levels.

## Properties

### minZoom

> **minZoom**: `null` \| `number`

The minimum zoom level for the viewport.

[FeltZoom](Shared.md#feltzoom)

### maxZoom

> **maxZoom**: `null` \| `number`

The maximum zoom level for the viewport.

[FeltZoom](Shared.md#feltzoom)

### bounds

> **bounds**: `null` \| \[`number`, `number`, `number`, `number`\]

The bounds for the viewport.

[FeltBoundary](Shared.md#feltboundary)

***

# ViewportFitBoundsParams

The parameters for the `fitViewportToBounds` method.

## Properties

### bounds

> **bounds**: \[`number`, `number`, `number`, `number`\]

The bounds to fit the viewport to.

[FeltBoundary](Shared.md#feltboundary)
