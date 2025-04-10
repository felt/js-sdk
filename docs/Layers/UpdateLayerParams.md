***

The value you need to pass to [LayersController.updateLayer](LayersController.md#updatelayer)

# Properties

## id

> **id**: `string`

The id of the layer to update.

***

## shownInLegend?

> `optional` **shownInLegend**: `boolean`

Changes whether the layer is shown in the legend.

***

## name?

> `optional` **name**: `string`

Changes the name of the layer.

***

## caption?

> `optional` **caption**: `string`

Changes the caption of the layer.

***

## description?

> `optional` **description**: `string`

Changes the description of the layer.

***

## bounds?

> `optional` **bounds**: \[`number`, `number`, `number`, `number`]

Changes the bounds of the layer.

***

## style?

> `optional` **style**: `object`

The style of the layer.

***

## source?

> `optional` **source**: [`GeoJsonUrlVectorSource`](GeoJsonUrlVectorSource.md) | [`GeoJsonDataVectorSource`](GeoJsonDataVectorSource.md) | [`GeoJsonFileVectorSource`](GeoJsonFileVectorSource.md)

Updates the source of the layer.

Only layers that have a GeoJSON source can have their source udpated.

For URL sources, if you pass the same URL again it will cause the data to be
refreshed.
