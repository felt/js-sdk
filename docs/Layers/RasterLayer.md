***

A raster layer is a layer that contains raster data that can be rendered on the map

# Properties

## id

> **id**: `string`

A string identifying the layer

***

## groupId

> **groupId**: `null` | `string`

The ID of the layer group that the layer belongs to.

Layers that appear at the root level in Felt will not have a group ID.

***

## name

> **name**: `string`

The name of the layer can be displayed in the Legend, depending
on how the layer's legend is configured in its style.

***

## caption

> **caption**: `null` | `string`

The layer's caption is shown in the legend.

***

## description

> **description**: `null` | `string`

The layer description forms part of the layer's metadata. This is visible
to users via the layer info button in the legend.

***

## visible

> **visible**: `boolean`

Whether the layer is visible or not.

***

## shownInLegend

> **shownInLegend**: `boolean`

Whether the layer is shown in the legend or not.

***

## style

> **style**: `object`

The FSL style for the layer.

See the [FSL documentation](https://developers.felt.com/felt-style-language) for details
on how to read and write styles.

As the types of the styles are very complex, we return `object` here and advise that you
program defensively while reading the styles.

***

## status

> **status**: `"processing"` | `"completed"` | `"failed"` | `"incomplete"`

The current processing status of the layer.

***

## bounds

> **bounds**: `null` | \[`number`, `number`, `number`, `number`]

The bounding box of the layer in \[west, south, east, north] order

There are cases where the bounds are not available, such as for layers added to the map
from URL sources, as these are not (depending on their type) processed and analyzed by
Felt.

[FeltBoundary](../Shared/FeltBoundary.md)

***

## geometryType

> **geometryType**: `"Raster"`

Identifies the type of geometry in the layer.

***

## source

> **source**: [`RasterLayerSource`](RasterLayerSource.md)

The source of the raster layer's data.
