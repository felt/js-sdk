***

The current state of the viewport, including the derived bounds.

## Properties

### center

> **center**: [`LatLng`](../Shared/LatLng.md)

The center of the viewport in latitude and longitude.

[LatLng](../Shared/LatLng.md)

***

### zoom

> **zoom**: `number`

The zoom level of the viewport.

[FeltZoom](../Shared/FeltZoom.md)

***

### bounds

> **bounds**: \[`number`, `number`, `number`, `number`]

The bounding box of the viewport.

This is derived, and depends on the center and zoom of the viewport, as
well as its size.

[FeltBoundary](../Shared/FeltBoundary.md)
