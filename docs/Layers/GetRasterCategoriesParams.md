***

The parameters for counting the distinct values of a raster band, passed to the
[LayersController.getRasterCategoryData](LayersController.md#getrastercategorydata) method.

# Properties

## layerId

> **layerId**: `string`

***

## bandId

> **bandId**: `string`

The ID of the band to count values for, read from the `bands` on a raster
layer's source.

***

## boundary?

> `optional` **boundary**: [`GeometryFilter`](GeometryFilter.md)

The spatial boundary for the pixels to include. Omit this to cover the whole
raster.

***

## filters?

> `optional` **filters**: [`Filters`](Filters.md)

Filters on band values for the pixels to include.

***

## limit?

> `optional` **limit**: `number`

The maximum number of categories to return. The most frequent categories are
kept.
