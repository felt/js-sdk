***

The response from the [LayersController.getRasterProfile](LayersController.md#getrasterprofile) method.

# Properties

## samples

> **samples**: [`RasterProfileSample`](RasterProfileSample.md)\[]

The samples, ordered from the line's start.

***

## read

> **read**: [`RasterReadDetails`](RasterReadDetails.md)

How the pixels behind these samples were read.

***

## spacingM?

> `optional` **spacingM**: `number`

The mean distance between consecutive samples, in ground metres. Absent when
the line was too short to walk.
