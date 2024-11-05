***

The viewport controller allows you to control the viewport of the map.

You can get the current viewport, move the viewport, and be notified when
the viewport changes.

## Extended by

* [`FeltController`](../Main/FeltController.md)

## Methods

### getViewport()

> **getViewport**(): `Promise`\<[`ViewportState`](ViewportState.md)>

Gets the current state of the viewport.

#### Returns

`Promise`\<[`ViewportState`](ViewportState.md)>

***

### setViewport()

> **setViewport**(`viewport`: [`SetViewportCenterZoomParams`](SetViewportCenterZoomParams.md)): `void`

Moves the map to the specified location.

#### Parameters

| Parameter  | Type                                                            |
| ---------- | --------------------------------------------------------------- |
| `viewport` | [`SetViewportCenterZoomParams`](SetViewportCenterZoomParams.md) |

#### Returns

`void`

#### Example

```typescript
felt.setViewport({
  center: { latitude: 0, longitude: 0 },
  zoom: 10,
});
```

***

### fitViewportToBounds()

> **fitViewportToBounds**(`bounds`: [`ViewportFitBoundsParams`](ViewportFitBoundsParams.md)): `void`

Fits the map to the specified bounds.

#### Parameters

| Parameter | Type                                                    |
| --------- | ------------------------------------------------------- |
| `bounds`  | [`ViewportFitBoundsParams`](ViewportFitBoundsParams.md) |

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

> **onViewportMove**(`args`: \{`handler`: (`viewport`: [`ViewportState`](ViewportState.md)) => `void`; }): `VoidFunction`

Adds a listener for when the viewport changes.

#### Parameters

| Parameter      | Type                                                        | Description                                                                            |
| -------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `args`         | `object`                                                    | -                                                                                      |
| `args.handler` | (`viewport`: [`ViewportState`](ViewportState.md)) => `void` | This callback is called with the current viewport state whenever the viewport changes. |

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

***

### onViewportMoveEnd()

> **onViewportMoveEnd**(`args`: \{`handler`: (`viewport`: [`ViewportState`](ViewportState.md)) => `void`; }): `VoidFunction`

Adds a listener for when the viewport move ends, which is when the user
stops dragging or zooming the map, animations have finished, or inertial
dragging ends.

#### Parameters

| Parameter      | Type                                                        |
| -------------- | ----------------------------------------------------------- |
| `args`         | `object`                                                    |
| `args.handler` | (`viewport`: [`ViewportState`](ViewportState.md)) => `void` |

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