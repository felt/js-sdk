[**@feltjs/js-sdk**](../../README.md) • **Docs**

***

# Interface: ViewportState

## Extends

- `TypeOf`\<*typeof* `ViewportState`\>

## Properties

| Property | Type | Default value | Description | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| `center` | `object` | `LatLng` | The center of the viewport in latitude and longitude. | `z.infer.center` |
| `center.latitude` | `number` | `Latitude` | - | - |
| `center.longitude` | `number` | `Longitude` | - | - |
| `zoom` | `number` | `FeltZoom` | The zoom level of the viewport. | `z.infer.zoom` |
| `bounds` | [`number`, `number`, `number`, `number`] | `FeltBoundary` | - | `z.infer.bounds` |
