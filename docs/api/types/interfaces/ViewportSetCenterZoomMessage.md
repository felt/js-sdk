[**@feltjs/js-sdk**](../../README.md) • **Docs**

***

# Interface: ViewportSetCenterZoomMessage

## Extends

- `TypeOf`\<*typeof* `ViewportSetCenterZoomMessage`\>

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `type` | `"center"` | - | `z.infer.type` |
| `location` | `object` | - | `z.infer.location` |
| `location.center?` | `object` | The center of the viewport in latitude and longitude. | - |
| `location.center.latitude` | `number` | - | - |
| `location.center.longitude` | `number` | - | - |
| `location.zoom?` | `number` | The zoom level of the viewport. | - |
