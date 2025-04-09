***

The source of a raster layer's data.

# Properties

## imageTileTemplateUrl

> **imageTileTemplateUrl**: `string`

A URL template for fetching image tiles for the raster.

***

## encodedTileTemplateUrl

> **encodedTileTemplateUrl**: `string`

A URL template for fetching encoded tiles for the raster.

The encoded raster value can be calculated from the red, green, and blue values of the pixel
using the following formula:

```
base + ((RED << 16) + (GREEN <<8) + BLUE) * interval
```

or

```
base + (RED * 256 * 256 + GREEN * 256 + BLUE) * interval
```

***

## bands

> **bands**: [`RasterBand`](RasterBand.md)\[]

List of encoded raster bands
