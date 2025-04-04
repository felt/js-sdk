***

The Viewport module allows you to control the viewport of the map, such as setting the
current viewport, getting the current viewport, and being notified when the viewport changes.

# ViewportCenterZoom

The input type for setting the viewport to a particular center and zoom.

# Properties

## center

> **center**: [`LatLng`](Shared.md#latlng)

The center of the viewport in latitude and longitude.

## zoom

> **zoom**: `number`

The zoom level of the viewport.

***

# ViewportState

The current state of the viewport, including the derived bounds.

# Properties

## center

> **center**: [`LatLng`](Shared.md#latlng)

The center of the viewport in latitude and longitude.

[LatLng](Shared.md#latlng)

## zoom

> **zoom**: `number`

The zoom level of the viewport.

[FeltZoom](Shared.md#feltzoom)

## bounds

> **bounds**: \[`number`, `number`, `number`, `number`\]

The bounding box of the viewport in [west, south, east, north] order.

This is derived, and depends on the center and zoom of the viewport, as
well as its size.

[FeltBoundary](Shared.md#feltboundary)

***

# SetViewportCenterZoomParams

The parameters for the `setViewport` method.

# Properties

## center?

> `optional` **center**: \{ `latitude`: `number`; `longitude`: `number`; \}

| Name | Type | Default value |
| ------ | ------ | ------ |
| `latitude` | `number` | `Latitude` |
| `longitude` | `number` | `Longitude` |

## zoom?

> `optional` **zoom**: `number`

***

# ViewportConstraints

The constraints for the viewport. Used to ensure that the viewport stays
within certain bounds and zoom levels.

# Properties

## minZoom

> **minZoom**: `null` \| `number`

The minimum zoom level for the viewport.

[FeltZoom](Shared.md#feltzoom)

## maxZoom

> **maxZoom**: `null` \| `number`

The maximum zoom level for the viewport.

[FeltZoom](Shared.md#feltzoom)

## bounds

> **bounds**: `null` \| \[`number`, `number`, `number`, `number`\]

The bounds for the viewport.

[FeltBoundary](Shared.md#feltboundary)

***

# ViewportFitBoundsParams

The parameters for the `fitViewportToBounds` method.

# Properties

## bounds

> **bounds**: \[`number`, `number`, `number`, `number`\]

The bounds to fit the viewport to.

[FeltBoundary](Shared.md#feltboundary)
