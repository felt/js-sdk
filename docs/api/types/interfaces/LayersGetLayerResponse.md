The response from the `getLayer` method. If the layer doesn't exist, the
response will be `null`.

## Extends

- `TypeOf`\<*typeof* `LayersGetLayerResponseSchema`\>

## Properties

### id

> **id**: `string`

The string identifying the layer

#### Inherited from

`z.infer.id`

***

### layerGroupId

> **layerGroupId**: `string`

The ID of the layer group that the layer belongs to.

Layers that appear unnested in Felt are still within a LayerGroup,
but the LayerGroup doesn't show up in the UI.

#### Inherited from

`z.infer.layerGroupId`

***

### name

> **name**: `string`

The name of the layer can be displayed in the Legend, depending
on how the layer's legend is configured in its style.

#### Inherited from

`z.infer.name`

***

### caption

> **caption**: `null` \| `string`

The layer's caption is shown in the legend.

#### Inherited from

`z.infer.caption`

***

### description

> **description**: `null` \| `string`

The layer description forms part of the layer's metadata. This is visible
to users via the layer info button in the legend.

#### Inherited from

`z.infer.description`

***

### visible

> **visible**: `boolean`

Whether the layer is visible or not.

#### Inherited from

`z.infer.visible`

***

### shownInLegend

> **shownInLegend**: `boolean`

Whether the layer is shown in the legend or not.

#### Inherited from

`z.infer.shownInLegend`

***

### status

> **status**: `"processing"` \| `"completed"` \| `"failed"` \| `"incomplete"` = `LayerProcessingStatus`

The current processing status of the layer.

#### Inherited from

`z.infer.status`

***

### geometryType

> **geometryType**: `null` \| `string`

The geometry type of the layer.

#### Remarks

This will generally be one of:
- `"Point"`
- `"Line"`
- `"Polygon"`
- `"Raster"`
- `null`

When the layer is processing, or it is a data-only layer, it will be null. You should
expect this to be able to be any string, however, as more geometry types can be added
in the future.

#### Inherited from

`z.infer.geometryType`

***

### bounds

> **bounds**: `null` \| [`number`, `number`, `number`, `number`]

The bounding box of the layer. If the layer is processing, or the bounds have otherwise
not been calculated or are not available, this will be `null`.

#### Inherited from

`z.infer.bounds`
