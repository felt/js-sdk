***

# Properties

## id

> **id**: `string`

***

## label?

> `optional` **label**: `string`

***

## layerIds?

> `optional` **layerIds**: `string`\[]

***

## geometryTypes?

> `optional` **geometryTypes**: (`"Polygon"` | `"Point"` | `"Line"` | `"Raster"`)\[]

***

## onTrigger()?

> `optional` **onTrigger**: (`args`: \{ `feature`: [`LayerFeature`](../Layers/LayerFeature.md); }) => `void`

### Parameters

| Parameter      | Type                                                         |
| -------------- | ------------------------------------------------------------ |
| `args`         | \{ `feature`: [`LayerFeature`](../Layers/LayerFeature.md); } |
| `args.feature` | [`LayerFeature`](../Layers/LayerFeature.md)                  |

### Returns

`void`
