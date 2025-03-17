***

A legend item, which often represents a sub-class of features in a
layer in the case of categorical or classed layers.

# Properties

## title

> **title**: `string` | `string`\[]

The title of the legend item.

***

## titleDependsOnZoom

> **titleDependsOnZoom**: `boolean`

Whether the title depends on the zoom level or not. If it does, you
need to call `getLegendItem` when the zoom level changes.

Note that as the zoom level changes, the `onLegendItemChange` handler
will not be called, so you need to call `getLegendItem` yourself.

***

## visible

> **visible**: `boolean`

Whether the legend item is visible or not.

***

## id

> **id**: `string`

The id of the legend item.

***

## layerId

> **layerId**: `string`

The id of the layer the legend item belongs to.
