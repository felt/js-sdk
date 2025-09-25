***

> **uiFeatureAction**: \{ `id`: `string`; `onTrigger`: (`args`: \{ `feature`: [`LayerFeature`](../Layers/LayerFeature.md); }) => `void`; `layerIds`: `string`\[]; `geometryTypes`: (`"Polygon"` | `"Point"` | `"Line"` | `"Raster"`)\[]; }

Represents a feature action after creation (with generated id).

# Type declaration

## id

> **id**: `string`

## onTrigger()

> **onTrigger**: (`args`: \{ `feature`: [`LayerFeature`](../Layers/LayerFeature.md); }) => `void`

### Parameters

| Parameter      | Type                                                         |
| -------------- | ------------------------------------------------------------ |
| `args`         | \{ `feature`: [`LayerFeature`](../Layers/LayerFeature.md); } |
| `args.feature` | [`LayerFeature`](../Layers/LayerFeature.md)                  |

### Returns

`void`

## layerIds?

> `optional` **layerIds**: `string`\[]

## geometryTypes?

> `optional` **geometryTypes**: (`"Polygon"` | `"Point"` | `"Line"` | `"Raster"`)\[]
