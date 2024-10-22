This is the doc comment for the viewport module

## Contents

* [ViewportState](#viewportstate)
  * [Properties](#properties)
    * [center](#center)
    * [zoom](#zoom)
    * [bounds](#bounds)
* [SetViewportCenterZoomParams](#setviewportcenterzoomparams)
  * [Properties](#properties-1)
    * [center?](#center-1)
    * [zoom?](#zoom-1)
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

The parameters for the `setViewport` method.
\*

### Properties

#### center?

> `optional` **center**: `object`

| Name        | Type     | Default value |
| ----------- | -------- | ------------- |
| `latitude`  | `number` | Latitude      |
| `longitude` | `number` | Longitude     |

#### zoom?

> `optional` **zoom**: `number`

***

## ViewportFitBoundsParams

The parameters for the `fitViewportToBounds` method.
\*

### Properties

#### bounds

> **bounds**: \[`number`, `number`, `number`, `number`] = `FeltBoundarySchema`
