***

Represents a feature action after creation (with generated id).

# Properties

## label

> **label**: `string`

The label of the feature action.

***

## onTrigger()

> **onTrigger**: (`args`: \{ `feature`: [`LayerFeature`](../Layers/LayerFeature.md); }) => `void`

The function to call when the feature action is triggered.

### Parameters

| Parameter      | Type                                                         | Description                            |
| -------------- | ------------------------------------------------------------ | -------------------------------------- |
| `args`         | \{ `feature`: [`LayerFeature`](../Layers/LayerFeature.md); } | The arguments passed to the function.  |
| `args.feature` | [`LayerFeature`](../Layers/LayerFeature.md)                  | The feature that triggered the action. |

### Returns

`void`

***

## id

> **id**: `string`

***

## layerIds?

> `optional` **layerIds**: `string`\[]

The layers to add the action to. Optional. Defaults to all layers.

***

## geometryTypes?

> `optional` **geometryTypes**: (`"Polygon"` | `"Point"` | `"Line"` | `"Raster"`)\[]

The geometry type of the features to add the action to. Optional. Defaults to all geometry types.

***

## type?

> `optional` **type**: `undefined`

***

## onCreate()?

> `optional` **onCreate**: (`args`: \{ `id`: `string`; }) => `void`

A function to call when the element is created.

### Parameters

| Parameter | Type                 | Description                           |
| --------- | -------------------- | ------------------------------------- |
| `args`    | \{ `id`: `string`; } | The arguments passed to the function. |
| `args.id` | `string`             | The id of the element.                |

### Returns

`void`

***

## onDestroy()?

> `optional` **onDestroy**: (`args`: \{ `id`: `string`; }) => `void`

A function to call when the element is destroyed.

### Parameters

| Parameter | Type                 | Description                           |
| --------- | -------------------- | ------------------------------------- |
| `args`    | \{ `id`: `string`; } | The arguments passed to the function. |
| `args.id` | `string`             | The id of the element.                |

### Returns

`void`
