***

The event object passed to the interaction listeners.

# Properties

## coordinate

> **coordinate**: [`LatLng`](../Shared/LatLng.md)

The cursor position in world coordinates.

***

## point

> **point**: \{ `x`: `number`; `y`: `number`; }

The pixel coordinates of the mouse cursor, relative to the map and measured from the top left corner.

| Name | Type     |
| ---- | -------- |
| `x`  | `number` |
| `y`  | `number` |

***

## features

> **features**: [`LayerFeature`](../Layers/LayerFeature.md)\[]

The vector features that are under the cursor.

***

## rasterValues

> **rasterValues**: [`RasterValue`](../Layers/RasterValue.md)\[]

The raster pixel values that are under the cursor.
