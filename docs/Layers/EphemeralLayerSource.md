***

# Properties

## type

> **type**: `"application/geo+json"`

***

## name

> **name**: `string`

***

## geometryStyles

> **geometryStyles**: \{ `Point`: `Record`\<`string`, `unknown`>; `Line`: `Record`\<`string`, `unknown`>; `Polygon`: `Record`\<`string`, `unknown`>; }

The styles to apply to each geometry on the layer.

Each style should be a valid FSL style, as described in [Layer.style](Layer.md#style).

These are optional, and if missing will use a default style determined by
Felt, which you can consider to be undefined behaviour.

| Name       | Type                           |
| ---------- | ------------------------------ |
| `Point`?   | `Record`\<`string`, `unknown`> |
| `Line`?    | `Record`\<`string`, `unknown`> |
| `Polygon`? | `Record`\<`string`, `unknown`> |

### Example

```typescript
const layer = await layersController.createLayer({
  type: "application/geo+json",
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
