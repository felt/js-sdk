***

# Properties

## source

> **source**: \{ `type`: `"geoJsonUrl"`; `url`: `string`; } | \{ `type`: `"geoJsonData"`; `data`: \{} & \{}; } | \{ `type`: `"geoJsonFile"`; `file`: `File`; }

The source of the GeoJSON data.

### Type declaration

\{ `type`: `"geoJsonUrl"`; `url`: `string`; }

| Name   | Type           | Description                                                    |
| ------ | -------------- | -------------------------------------------------------------- |
| `type` | `"geoJsonUrl"` | Identifies this as a GeoJSON URL source.                       |
| `url`  | `string`       | The remote URL of the GeoJSON file used to populate the layer. |

\{ `type`: `"geoJsonData"`; `data`: \{} & \{}; }

| Name   | Type            | Description                               |
| ------ | --------------- | ----------------------------------------- |
| `type` | `"geoJsonData"` | Identifies this as a GeoJSON data source. |
| `data` | \{} & \{}       | The GeoJSON data for the layer.           |

\{ `type`: `"geoJsonFile"`; `file`: `File`; }

| Name   | Type            | Description                               |
| ------ | --------------- | ----------------------------------------- |
| `type` | `"geoJsonFile"` | Identifies this as a GeoJSON file source. |
| `file` | `File`          | The GeoJSON file for the layer.           |

***

## name

> **name**: `string`

The name of the layer to create.

***

## geometryStyles?

> `optional` **geometryStyles**: \{ `Point`: `objectOutputType`\<\{}, `ZodTypeAny`, `"passthrough"`>; `Line`: `objectOutputType`\<\{}, `ZodTypeAny`, `"passthrough"`>; `Polygon`: `objectOutputType`\<\{}, `ZodTypeAny`, `"passthrough"`>; }

The styles to apply to each geometry on the layer.

Each style should be a valid FSL style, as described in [Layer.style](LayerCommon.md#style).

These are optional, and if missing will use a default style determined by
Felt, which you can consider to be undefined behaviour.

| Name       | Type                                                    |
| ---------- | ------------------------------------------------------- |
| `Point`?   | `objectOutputType`\<\{}, `ZodTypeAny`, `"passthrough"`> |
| `Line`?    | `objectOutputType`\<\{}, `ZodTypeAny`, `"passthrough"`> |
| `Polygon`? | `objectOutputType`\<\{}, `ZodTypeAny`, `"passthrough"`> |

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
