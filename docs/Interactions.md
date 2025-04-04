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

> **features**: [`LayerFeature`](Layers.md#layerfeature)[]

The vector features that are under the cursor.

## rasterValues

> **rasterValues**: [`RasterValue`](Layers.md#rastervalue)[]

The raster pixel values that are under the cursor.
