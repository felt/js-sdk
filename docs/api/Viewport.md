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
* [ViewportCenterZoomSchema](#viewportcenterzoomschema)
  * [Type declaration](#type-declaration)
    * [center](#center-2)
    * [zoom](#zoom-2)
* [SetViewportCenterZoomParamsSchema](#setviewportcenterzoomparamsschema)
  * [Type declaration](#type-declaration-2)
    * [type](#type-1)
    * [location](#location-1)
* [ViewportFitBoundsParamsSchema](#viewportfitboundsparamsschema)
  * [Type declaration](#type-declaration-4)
    * [bounds](#bounds-2)

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

***

## ViewportCenterZoomSchema

> `const` **ViewportCenterZoomSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`>

### Type declaration

#### center

> **center**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`> = `LatLngSchema`

The center of the viewport in latitude and longitude.

##### Type declaration

| Name        | Type        | Default value |
| ----------- | ----------- | ------------- |
| `latitude`  | `ZodNumber` | Latitude      |
| `longitude` | `ZodNumber` | Longitude     |

#### zoom

> **zoom**: `ZodNumber` = `FeltZoom`

The zoom level of the viewport.

***

## SetViewportCenterZoomParamsSchema

> `const` **SetViewportCenterZoomParamsSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`>

### Type declaration

#### type

> **type**: `ZodLiteral`\<`"center"`>

#### location

> **location**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`>

##### Type declaration

| Name     | Type                                                                                | Default value | Description                                           |
| -------- | ----------------------------------------------------------------------------------- | ------------- | ----------------------------------------------------- |
| `center` | `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`>> | LatLngSchema  | The center of the viewport in latitude and longitude. |
| `zoom`   | `ZodOptional`\<`ZodNumber`>                                                         | FeltZoom      | The zoom level of the viewport.                       |

***

## ViewportFitBoundsParamsSchema

> `const` **ViewportFitBoundsParamsSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`>

### Type declaration

#### bounds

> **bounds**: `ZodTuple`\<\[`ZodNumber`, `ZodNumber`, `ZodNumber`, `ZodNumber`], `null`> = `FeltBoundarySchema`
