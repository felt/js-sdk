The response from the `getLayerGroup` method. If the layer doesn't exist, the
response will be `null`.

## Extends

- `TypeOf`\<*typeof* `LayersGetLayerGroupResponseSchema`\>

## Properties

### id

> **id**: `string`

A string identifying the layer group.

#### Inherited from

`z.infer.id`

***

### name

> **name**: `string`

The name of the layer group. This is shown in the legend.

#### Inherited from

`z.infer.name`

***

### caption

> **caption**: `null` \| `string`

The caption of the layer group. This is shown in the legend.

#### Inherited from

`z.infer.caption`

***

### layerIds

> **layerIds**: `string`[]

The ids of the layers in the layer group.

#### Remarks

You can use these ids to get the full layer objects via the `getLayers` method.

#### Inherited from

`z.infer.layerIds`

***

### visible

> **visible**: `boolean`

Whether the layer group is visible or not.

#### Inherited from

`z.infer.visible`

***

### shownInLegend

> **shownInLegend**: `boolean`

Whether the layer group is shown in the legend or not.

#### Inherited from

`z.infer.shownInLegend`

***

### bounds

> **bounds**: `null` \| [`number`, `number`, `number`, `number`]

The bounding box of the layer group.

#### Inherited from

`z.infer.bounds`
