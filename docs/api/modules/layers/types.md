## Layers

### Layer

#### Extends

* `TypeOf`\<*typeof* `LayerSchema`>

#### Properties

##### id

> **id**: `string`

The string identifying the layer

###### Inherited from

`z.infer.id`

##### groupId

> **groupId**: `null` | `string`

The ID of the layer group that the layer belongs to.

Layers that appear at the root level in Felt will not have a group ID.

###### Inherited from

`z.infer.groupId`

##### name

> **name**: `string`

The name of the layer can be displayed in the Legend, depending
on how the layer's legend is configured in its style.

###### Inherited from

`z.infer.name`

##### caption

> **caption**: `null` | `string`

The layer's caption is shown in the legend.

###### Inherited from

`z.infer.caption`

##### description

> **description**: `null` | `string`

The layer description forms part of the layer's metadata. This is visible
to users via the layer info button in the legend.

###### Inherited from

`z.infer.description`

##### visible

> **visible**: `boolean`

Whether the layer is visible or not.

###### Inherited from

`z.infer.visible`

##### shownInLegend

> **shownInLegend**: `boolean`

Whether the layer is shown in the legend or not.

###### Inherited from

`z.infer.shownInLegend`

##### status

> **status**: `"processing"` | `"completed"` | `"failed"` | `"incomplete"` = `LayerProcessingStatus`

The current processing status of the layer.

###### Inherited from

`z.infer.status`

##### geometryType

> **geometryType**: `null` | `string`

The geometry type of the layer.

###### Remarks

This will generally be one of:

* `"Point"`
* `"Line"`
* `"Polygon"`
* `"Raster"`
* `null`

When the layer is processing, or it is a data-only layer, it will be null. You should
expect this to be able to be any string, however, as more geometry types can be added
in the future.

###### Inherited from

`z.infer.geometryType`

##### bounds

> **bounds**: `null` | \[`number`, `number`, `number`, `number`]

The bounding box of the layer. If the layer is processing, or the bounds have otherwise
not been calculated or are not available, this will be `null`.

###### Inherited from

`z.infer.bounds`

***

### LayerGroup

#### Extends

* `TypeOf`\<*typeof* `LayerGroupSchema`>

#### Properties

##### id

> **id**: `string`

A string identifying the layer group.

###### Inherited from

`z.infer.id`

##### name

> **name**: `string`

The name of the layer group. This is shown in the legend.

###### Inherited from

`z.infer.name`

##### caption

> **caption**: `null` | `string`

The caption of the layer group. This is shown in the legend.

###### Inherited from

`z.infer.caption`

##### layerIds

> **layerIds**: `string`\[]

The ids of the layers in the layer group.

###### Remarks

You can use these ids to get the full layer objects via the `getLayers` method.

###### Inherited from

`z.infer.layerIds`

##### visible

> **visible**: `boolean`

Whether the layer group is visible or not.

###### Inherited from

`z.infer.visible`

##### shownInLegend

> **shownInLegend**: `boolean`

Whether the layer group is shown in the legend or not.

###### Inherited from

`z.infer.shownInLegend`

##### bounds

> **bounds**: `null` | \[`number`, `number`, `number`, `number`]

The bounding box of the layer group.

###### Inherited from

`z.infer.bounds`

***

### GetLayerResponse

The response from the `getLayer` method. If the layer doesn't exist, the
response will be `null`.

#### Extends

* `TypeOf`\<*typeof* `GetLayerResponseSchema`>

#### Properties

##### id

> **id**: `string`

The string identifying the layer

###### Inherited from

`z.infer.id`

##### groupId

> **groupId**: `null` | `string`

The ID of the layer group that the layer belongs to.

Layers that appear at the root level in Felt will not have a group ID.

###### Inherited from

`z.infer.groupId`

##### name

> **name**: `string`

The name of the layer can be displayed in the Legend, depending
on how the layer's legend is configured in its style.

###### Inherited from

`z.infer.name`

##### caption

> **caption**: `null` | `string`

The layer's caption is shown in the legend.

###### Inherited from

`z.infer.caption`

##### description

> **description**: `null` | `string`

The layer description forms part of the layer's metadata. This is visible
to users via the layer info button in the legend.

###### Inherited from

`z.infer.description`

##### visible

> **visible**: `boolean`

Whether the layer is visible or not.

###### Inherited from

`z.infer.visible`

##### shownInLegend

> **shownInLegend**: `boolean`

Whether the layer is shown in the legend or not.

###### Inherited from

`z.infer.shownInLegend`

##### status

> **status**: `"processing"` | `"completed"` | `"failed"` | `"incomplete"` = `LayerProcessingStatus`

The current processing status of the layer.

###### Inherited from

`z.infer.status`

##### geometryType

> **geometryType**: `null` | `string`

The geometry type of the layer.

###### Remarks

This will generally be one of:

* `"Point"`
* `"Line"`
* `"Polygon"`
* `"Raster"`
* `null`

When the layer is processing, or it is a data-only layer, it will be null. You should
expect this to be able to be any string, however, as more geometry types can be added
in the future.

###### Inherited from

`z.infer.geometryType`

##### bounds

> **bounds**: `null` | \[`number`, `number`, `number`, `number`]

The bounding box of the layer. If the layer is processing, or the bounds have otherwise
not been calculated or are not available, this will be `null`.

###### Inherited from

`z.infer.bounds`

***

### GetLayerGroupResponse

The response from the `getLayerGroup` method. If the layer doesn't exist, the
response will be `null`.

#### Extends

* `TypeOf`\<*typeof* `GetLayerGroupResponseSchema`>

#### Properties

##### id

> **id**: `string`

A string identifying the layer group.

###### Inherited from

`z.infer.id`

##### name

> **name**: `string`

The name of the layer group. This is shown in the legend.

###### Inherited from

`z.infer.name`

##### caption

> **caption**: `null` | `string`

The caption of the layer group. This is shown in the legend.

###### Inherited from

`z.infer.caption`

##### layerIds

> **layerIds**: `string`\[]

The ids of the layers in the layer group.

###### Remarks

You can use these ids to get the full layer objects via the `getLayers` method.

###### Inherited from

`z.infer.layerIds`

##### visible

> **visible**: `boolean`

Whether the layer group is visible or not.

###### Inherited from

`z.infer.visible`

##### shownInLegend

> **shownInLegend**: `boolean`

Whether the layer group is shown in the legend or not.

###### Inherited from

`z.infer.shownInLegend`

##### bounds

> **bounds**: `null` | \[`number`, `number`, `number`, `number`]

The bounding box of the layer group.

###### Inherited from

`z.infer.bounds`

***

### GetLayersFilter

The filter to apply to the layers. If this is not passed, all layers will be returned.

#### Extends

* `TypeOf`\<*typeof* [`GetLayersFilterSchema`](types.md#getlayersfilterschema)>

#### Properties

##### ids?

> `optional` **ids**: `string`\[]

The ids of the layers to get.

###### Inherited from

`z.infer.ids`

***

### GetLayerGroupsFilter

The filter to apply to the layer groups. If this is not passed, all layer groups will be returned.

#### Extends

* `TypeOf`\<*typeof* [`GetLayerGroupsFilterSchema`](types.md#getlayergroupsfilterschema)>

#### Properties

##### ids?

> `optional` **ids**: `string`\[]

The ids of the layer groups to get.

###### Inherited from

`z.infer.ids`

***

### LayerChangeCallbackParams

The parameters for the `onLayerChange` listener.

#### Properties

##### layer

> **layer**: `null` | [`Layer`](types.md#layer-1)

The new data for the layer or null if the layer was removed.

***

### LayerGroupChangeCallbackParams

The parameters for the `onLayerGroupChange` listener.

#### Properties

##### layerGroup

> **layerGroup**: `null` | [`LayerGroup`](types.md#layergroup-1)

***

### LayerProcessingStatus

> **LayerProcessingStatus**: `"processing"` | `"completed"` | `"failed"` | `"incomplete"`

This describes the processing status of a layer.

The various values are:

* `processing`: The layer has been uploaded or updated and is still processing.
* `completed`: The layer has been processed and can be viewed on the map.
* `failed`: The layer failed to process and cannot be viewed on the map.
* `incomplete`: The layer has not been processed.

***

### GetLayersResponse

> **GetLayersResponse**: (`null` | `object`)\[]

The response from the `getLayers` method.

#### Remarks

The layers in the map, ordered by the order specified in Felt. This is not
necessarily the order that they are drawn in, as Felt draws points above
lines and lines above polygons, for instance.

See [Layer](types.md#layer-1) for the structure of the layer object.

***

### GetLayerGroupsResponse

> **GetLayerGroupsResponse**: (`null` | `object`)\[]

The response from the `getLayerGroups` method.

## Other

### GetLayersFilterSchema

> `const` **GetLayersFilterSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`>

#### Type declaration

| Name  | Type                                               | Description                   |
| ----- | -------------------------------------------------- | ----------------------------- |
| `ids` | `ZodOptional`\<`ZodArray`\<`ZodString`, `"many"`>> | The ids of the layers to get. |

***

### GetLayerGroupsFilterSchema

> `const` **GetLayerGroupsFilterSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`>

#### Type declaration

| Name  | Type                                               | Description                         |
| ----- | -------------------------------------------------- | ----------------------------------- |
| `ids` | `ZodOptional`\<`ZodArray`\<`ZodString`, `"many"`>> | The ids of the layer groups to get. |
