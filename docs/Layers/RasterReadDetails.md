***

Describes how the pixels behind a raster statistic were read.

Reads are budgeted, so a statistic covering a large area is calculated from a
downsampled copy of the raster rather than from every pixel. Counts and areas
are then scaled back up, which makes them estimates. Minimum and maximum are
refined against full-resolution pixels either way, so both are always values
the raster really holds.

# Properties

## pixelRatio

> **pixelRatio**: `number`

How many full-resolution pixels each pixel that was read stood for. A ratio
of 1 means no pixels were skipped.

***

## estimated

> **estimated**: `boolean`

Whether the statistics were calculated from a downsampled read, which is true
whenever `pixelRatio` is greater than 1.
