***

> **RasterAggregationMethod**: `"min"` | `"max"` | `"avg"` | `"sum"` | `"median"` | `"stddev"` | `"majority"` | `"area"`

A statistic that can be calculated for a raster band.

`area` is the ground area of the selected pixels, in square metres.

Two statistics depend on the band rather than the request. `majority`, the most
common value, needs a band holding whole numbers. `sum` needs measurements
taken when the raster was processed, which rasters processed before those
measurements existed do not carry. Asking a band for a statistic it cannot
answer throws.
