***

The parameters for the [LayersController.createLayersFromGeoJson](LayersController.md#createlayersfromgeojson) method.

# Properties

## name

> **name**: `string`

The name of the layer to create.

***

## source

> **source**: [`GeoJsonUrlVectorSource`](GeoJsonUrlVectorSource.md) | [`GeoJsonDataVectorSource`](GeoJsonDataVectorSource.md) | [`GeoJsonFileVectorSource`](GeoJsonFileVectorSource.md)

The source of the GeoJSON data.

***

## bounds?

> `optional` **bounds**: \[`number`, `number`, `number`, `number`]

Sets the bounds of the layer.

***

## caption?

> `optional` **caption**: `string`

Sets the caption of the layer.

***

## description?

> `optional` **description**: `string`

Sets the description of the layer.

***

## geometryStyles?

> `optional` **geometryStyles**: { `Point?`: `object`; `Line?`: `object`; `Polygon?`: `object`; }

The styles to apply to each geometry on the layer.

Each style should be a valid FSL style, as described in [Layer.style](LayerCommon.md#style).

These are optional, and if missing will use a default style determined by
Felt, which you can consider to be undefined behaviour.

| Name | Type |
| ------ | ------ |
| `Point?` | `object` |
| `Line?` | `object` |
| `Polygon?` | `object` |

### Example

```typescript
const layer = await layersController.createLayersFromGeoJson({
  name: "My Layer",
  geometryStyles: {
    Point: {
      paint: { color: "red", size: 8 },
    },
    Line: {
      paint: { color: "blue", size: 4 },
      config: { labelAttribute: ["name"] },
      label: { minZoom: 0 },
    },
    Polygon: {
      paint: { color: "green", strokeColor: "darkgreen" },
    },
  },
});
```
