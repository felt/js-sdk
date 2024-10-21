This is the doc comment for the viewport module

## Contents

* [ViewportState](#viewportstate)
  * [Properties](#properties)
    * [center](#center)
    * [zoom](#zoom)
    * [bounds](#bounds)
* [SetViewportCenterZoomParams](#setviewportcenterzoomparams)
  * [Properties](#properties-1)
    * [type](#type)
    * [location](#location)
* [ViewportFitBoundsParams](#viewportfitboundsparams)
  * [Properties](#properties-2)
    * [bounds](#bounds-1)

## ViewportState

### Properties

#### center

> **center**: `object` = `LatLngSchema`

| Name        | Type     | Default value |
| ----------- | -------- | ------------- |
| `latitude`  | `number` | Latitude      |
| `longitude` | `number` | Longitude     |

#### zoom

> **zoom**: `number` = `FeltZoomSchema`

#### bounds

> **bounds**: \[`number`, `number`, `number`, `number`] = `FeltBoundarySchema`

***

## SetViewportCenterZoomParams

The parameters for the `gotoViewport` method.
\*

### Properties

#### type

> **type**: `"center"`

#### location

> **location**: `object`

| Name               | Type     | Default value  | Description                                           |
| ------------------ | -------- | -------------- | ----------------------------------------------------- |
| `center`?          | `object` | LatLngSchema   | The center of the viewport in latitude and longitude. |
| `center.latitude`  | `number` | Latitude       | -                                                     |
| `center.longitude` | `number` | Longitude      | -                                                     |
| `zoom`?            | `number` | FeltZoomSchema | The zoom level of the viewport.                       |

***

## ViewportFitBoundsParams

The parameters for the `fitViewportToBounds` method.
\*

### Properties

#### bounds

> **bounds**: \[`number`, `number`, `number`, `number`] = `FeltBoundarySchema`
