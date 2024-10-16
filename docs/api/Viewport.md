This is the doc comment for the viewport module

## Contents

* [ViewportCenterZoom](#viewportcenterzoom)
  * [Properties](#properties)
    * [center](#center)
    * [zoom](#zoom)
* [ViewportState](#viewportstate)
  * [Properties](#properties-1)
    * [center](#center-1)
    * [zoom](#zoom-1)
    * [bounds](#bounds)
* [SetViewportCenterZoomParams](#setviewportcenterzoomparams)
  * [Properties](#properties-2)
    * [type](#type)
    * [location](#location)
* [ViewportFitBoundsParams](#viewportfitboundsparams)
  * [Properties](#properties-3)
    * [bounds](#bounds-1)

## ViewportCenterZoom

### Properties

#### center

> **center**: `object` = `LatLngSchema`

The center of the viewport in latitude and longitude.

| Name        | Type     | Default value |
| ----------- | -------- | ------------- |
| `latitude`  | `number` | Latitude      |
| `longitude` | `number` | Longitude     |

#### zoom

> **zoom**: `number` = `FeltZoom`

The zoom level of the viewport.

***

## ViewportState

### Properties

#### center

> **center**: `object` = `LatLngSchema`

| Name        | Type     | Default value |
| ----------- | -------- | ------------- |
| `latitude`  | `number` | Latitude      |
| `longitude` | `number` | Longitude     |

#### zoom

> **zoom**: `number` = `FeltZoom`

#### bounds

> **bounds**: \[`number`, `number`, `number`, `number`] = `FeltBoundarySchema`

***

## SetViewportCenterZoomParams

The parameters for the `gotoViewport` method.

[FeltController.gotoViewport](FeltController.md#gotoviewport)

### Properties

#### type

> **type**: `"center"`

#### location

> **location**: `object`

| Name               | Type     | Default value | Description                                           |
| ------------------ | -------- | ------------- | ----------------------------------------------------- |
| `center`?          | `object` | LatLngSchema  | The center of the viewport in latitude and longitude. |
| `center.latitude`  | `number` | Latitude      | -                                                     |
| `center.longitude` | `number` | Longitude     | -                                                     |
| `zoom`?            | `number` | FeltZoom      | The zoom level of the viewport.                       |

***

## ViewportFitBoundsParams

The parameters for the `fitBounds` method.

[FeltController.fitBounds](FeltController.md#fitbounds)

### Properties

#### bounds

> **bounds**: \[`number`, `number`, `number`, `number`] = `FeltBoundarySchema`
