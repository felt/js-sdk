***

The parameters for counting the distinct values of a raster band, passed to the
[LayersController.getRasterCategoryData](LayersController.md#getrastercategorydata) method.

# Properties

## layerId

> **layerId**: `string`

***

## band

> **band**: `string`

The ID of the band to count values for, such as `"band:1"`.

Read the available band IDs from the `bands` on a raster layer's source.

***

## boundary?

> `optional` **boundary**: [`RasterGeometryFilter`](RasterGeometryFilter.md)

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

***

## values?

> `optional` **values**: [`RasterScope`](RasterScope.md)

Restricts the pixels counted in each category while leaving the set of
categories alone.

The top-level boundary and filters decide both which categories appear and
what gets counted in them. This configuration only changes what gets counted,
so two results can be compared against an identical set of categories.
