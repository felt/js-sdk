***

The RasterBand interface describes one band of a raster: how to identify it when
asking for statistics, what to call it, and the values needed to calculate the
encoded raster value from the red, green, and blue values of a pixel.

# Properties

## id

> **id**: `string`

The identifier for this band, such as `"band:1"`.

Pass this to the raster statistics methods, such as
[LayersController.getRasterAggregates](LayersController.md#getrasteraggregates), and use it to refer to the band
inside a filter.

***

## displayName

> **displayName**: `string`

The name of the band, such as "Red" or "Elevation".

Felt takes this from the raster itself when the file names its bands, and
falls back to "Band 1", "Band 2" and so on.

***

## base

> **base**: `number`

Encoding base value as a floating point number

***

## interval

> **interval**: `number`

Encoding interval as a floating point number

***

## bandIndex

> **bandIndex**: `number`

1-based index of the band in the raster
