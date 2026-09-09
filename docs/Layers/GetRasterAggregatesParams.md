***

The parameters for calculating statistics for a raster band, passed to the
[LayersController.getRasterAggregates](LayersController.md#getrasteraggregates) method.

# Type Parameters

| Type Parameter                                                        |
| --------------------------------------------------------------------- |
| `T` *extends* [`RasterAggregationMethod`](RasterAggregationMethod.md) |

# Properties

## layerId

> **layerId**: `string`

***

## band

> **band**: `string`

The ID of the band to calculate statistics for, such as `"band:1"`.

Read the available band IDs from the `bands` on a raster layer's source.

***

## aggregation

> **aggregation**: \{ `methods`: `T`\[]; `percentiles`: `number`\[]; }

Which statistics to calculate for the band.

| Name           | Type        | Description                                                              |
| -------------- | ----------- | ------------------------------------------------------------------------ |
| `methods`      | `T`\[]      | The statistics to calculate for the band.                                |
| `percentiles`? | `number`\[] | Percentile ranks between 0 and 100 to calculate, such as `[10, 50, 90]`. |

***

## boundary?

> `optional` **boundary**: [`RasterGeometryFilter`](RasterGeometryFilter.md)

The spatial boundary for the pixels to include. Omit this to cover the whole
raster.

***

## filters?

> `optional` **filters**: [`Filters`](Filters.md)

Filters on band values for the pixels to include, such as
`["band:1", "gt", 100]`.
