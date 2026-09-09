***

The parameters for requesting a histogram of a raster band's values, passed to
the [LayersController.getRasterHistogramData](LayersController.md#getrasterhistogramdata) method.

# Properties

## layerId

> **layerId**: `string`

***

## band

> **band**: `string`

The ID of the band to bin, such as `"band:1"`.

Read the available band IDs from the `bands` on a raster layer's source.

***

## steps

> **steps**: `number`\[] | \{ `type`: `"equal-intervals"`; `count`: `number`; }

How to divide the band's values into bins, either as a number of equal
intervals or as the bin edges themselves.

***

## boundary?

> `optional` **boundary**: [`RasterGeometryFilter`](RasterGeometryFilter.md)

The spatial boundary for the pixels to include. Omit this to cover the whole
raster.

***

## filters?

> `optional` **filters**: [`Filters`](Filters.md)

Filters on band values for the pixels to include.
