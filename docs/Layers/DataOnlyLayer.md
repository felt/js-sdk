***

A data-only layer doesn't have any geometry, but can be used to join with other layers

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

## geometryType

> **geometryType**: `null`

Indicates that this layer has no geometry.

***

## bounds

> **bounds**: `null`

This is always null for data-only layers.
