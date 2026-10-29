***

Ways an image export is complete but imperfect.

# Properties

## tilesMissing

> **tilesMissing**: `boolean`

Whether some map tiles had not finished loading when the image was drawn.

### Remarks

Calling `exportImage` again once the map is idle usually fixes this.

***

## skippedElementCount

> **skippedElementCount**: `number`

The number of elements that could not be drawn into the export.

***

## resolutionClamped

> **resolutionClamped**: `boolean`

Whether the export was drawn at a lower resolution than requested
because it exceeded the maximum export size.
