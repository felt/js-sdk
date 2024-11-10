***

## Properties

### id

> **id**: `string`

A string identifying the layer group.

***

### name

> **name**: `string`

The name of the layer group. This is shown in the legend.

***

### caption

> **caption**: `null` | `string`

The caption of the layer group. This is shown in the legend.

***

### layerIds

> **layerIds**: `string`\[]

The ids of the layers in the layer group.

#### Remarks

You can use these ids to get the full layer objects via the `getLayers` method.

***

### visible

> **visible**: `boolean`

Whether the layer group is visible or not.

***

### shownInLegend

> **shownInLegend**: `boolean`

Whether the layer group is shown in the legend or not.

***

### bounds

> **bounds**: `null` | \[`number`, `number`, `number`, `number`]

The bounding box of the layer group.

[FeltBoundary](../Shared/FeltBoundary.md)
