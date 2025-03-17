***

# Properties

## id

> **id**: `string`

The string identifying the layer

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

## geometryType

> **geometryType**: `null` | `string`

The geometry type of the layer.

### Remarks

This will generally be one of:

* `"Point"`
* `"Line"`
* `"Polygon"`
* `"Raster"`
* `null`

When the layer is processing, or it is a data-only layer, it will be null. You should
expect this to be able to be any string, however, as more geometry types can be added
in the future.

***

## bounds

> **bounds**: `null` | \[`number`, `number`, `number`, `number`]

The bounding box of the layer. If the layer is processing, or the bounds have otherwise
not been calculated or are not available, this will be `null`.

[FeltBoundary](../Shared/FeltBoundary.md)
