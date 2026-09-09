***

Restricts which pixels a raster statistic covers.

# Properties

## boundary?

> `optional` **boundary**: [`RasterGeometryFilter`](RasterGeometryFilter.md)

The spatial boundary for the pixels to include.

***

## filters?

> `optional` **filters**: [`Filters`](Filters.md)

Filters on band values for the pixels to include, such as
`["band:1", "gt", 100]`. A filter may reference a different band from the one
being summarized.
