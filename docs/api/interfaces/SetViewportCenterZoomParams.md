The parameters for the `gotoViewport` method.

[FeltController.gotoViewport](FeltController.md#gotoviewport)

## Table of Contents

* [Extends](#extends)
* [Properties](#properties)
  * [type](#type)
  * [location](#location)

## Extends

* `TypeOf`\<*typeof* `SetViewportCenterZoomParamsSchema`>

## Properties

### type

> **type**: `"center"`

#### Inherited from

`z.infer.type`

***

### location

> **location**: `object`

| Name               | Type     | Default value | Description                                           |
| ------------------ | -------- | ------------- | ----------------------------------------------------- |
| `center`?          | `object` | LatLngSchema  | The center of the viewport in latitude and longitude. |
| `center.latitude`  | `number` | Latitude      | -                                                     |
| `center.longitude` | `number` | Longitude     | -                                                     |
| `zoom`?            | `number` | FeltZoom      | The zoom level of the viewport.                       |

#### Inherited from

`z.infer.location`
