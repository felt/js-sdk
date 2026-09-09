***

The parameters for sampling a raster band along a line, passed to the
[LayersController.getRasterProfile](LayersController.md#getrasterprofile) method.

# Properties

## layerId

> **layerId**: `string`

***

## band

> **band**: `string`

The ID of the band to sample, such as `"band:1"`.

Read the available band IDs from the `bands` on a raster layer's source.

***

## boundary

> **boundary**: [`LineStringGeometry`](../Shared/LineStringGeometry.md) | [`MultiLineStringGeometry`](../Shared/MultiLineStringGeometry.md)

The line to sample the band along. The band is sampled at roughly one sample
per pixel along the line's length.
