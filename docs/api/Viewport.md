This is the doc comment for the viewport module

Table of contents

## Contents

* [Other](#other)
  * [ViewportCenterZoomSchema](#viewportcenterzoomschema)
    * [Type declaration](#type-declaration)
  * [SetViewportCenterZoomParamsSchema](#setviewportcenterzoomparamsschema)
    * [Type declaration](#type-declaration-1)
  * [ViewportFitBoundsParamsSchema](#viewportfitboundsparamsschema)
    * [Type declaration](#type-declaration-2)
* [Viewport](#viewport)
  * [ViewportCenterZoom](#viewportcenterzoom)
    * [Extends](#extends)
    * [Properties](#properties)
      * [center](#center)
        * [Inherited from](#inherited-from)
      * [zoom](#zoom)
        * [Inherited from](#inherited-from-1)
  * [ViewportState](#viewportstate)
    * [Extends](#extends-1)
    * [Properties](#properties-1)
      * [center](#center-1)
        * [Inherited from](#inherited-from-2)
      * [zoom](#zoom-1)
        * [Inherited from](#inherited-from-3)
      * [bounds](#bounds)
        * [Inherited from](#inherited-from-4)
  * [SetViewportCenterZoomParams](#setviewportcenterzoomparams)
    * [Extends](#extends-2)
    * [Properties](#properties-2)
      * [type](#type)
        * [Inherited from](#inherited-from-5)
      * [location](#location)
        * [Inherited from](#inherited-from-6)
  * [ViewportFitBoundsParams](#viewportfitboundsparams)
    * [Extends](#extends-3)
    * [Properties](#properties-3)
      * [bounds](#bounds-1)
        * [Inherited from](#inherited-from-7)

## Other

### ViewportCenterZoomSchema

> `const` **ViewportCenterZoomSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`>

#### Type declaration

| Name     | Type                                                                | Default value | Description                                           |
| -------- | ------------------------------------------------------------------- | ------------- | ----------------------------------------------------- |
| `center` | `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`> | LatLngSchema  | The center of the viewport in latitude and longitude. |
| `zoom`   | `ZodNumber`                                                         | FeltZoom      | The zoom level of the viewport.                       |

***

### SetViewportCenterZoomParamsSchema

> `const` **SetViewportCenterZoomParamsSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`>

#### Type declaration

| Name       | Type                                                                |
| ---------- | ------------------------------------------------------------------- |
| `type`     | `ZodLiteral`\<`"center"`>                                           |
| `location` | `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`> |

***

### ViewportFitBoundsParamsSchema

> `const` **ViewportFitBoundsParamsSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`>

#### Type declaration

| Name     | Type                                                                       | Default value      |
| -------- | -------------------------------------------------------------------------- | ------------------ |
| `bounds` | `ZodTuple`\<\[`ZodNumber`, `ZodNumber`, `ZodNumber`, `ZodNumber`], `null`> | FeltBoundarySchema |

## Viewport

### ViewportCenterZoom

#### Extends

* `TypeOf`\<*typeof* [`ViewportCenterZoomSchema`](Viewport.md#viewportcenterzoomschema)>

#### Properties

##### center

> **center**: `object` = `LatLngSchema`

The center of the viewport in latitude and longitude.

| Name        | Type     | Default value |
| ----------- | -------- | ------------- |
| `latitude`  | `number` | Latitude      |
| `longitude` | `number` | Longitude     |

###### Inherited from

`z.infer.center`

##### zoom

> **zoom**: `number` = `FeltZoom`

The zoom level of the viewport.

###### Inherited from

`z.infer.zoom`

***

### ViewportState

#### Extends

* `TypeOf`\<*typeof* `ViewportStateSchema`>

#### Properties

##### center

> **center**: `object` = `LatLngSchema`

| Name        | Type     | Default value |
| ----------- | -------- | ------------- |
| `latitude`  | `number` | Latitude      |
| `longitude` | `number` | Longitude     |

###### Inherited from

`z.infer.center`

##### zoom

> **zoom**: `number` = `FeltZoom`

###### Inherited from

`z.infer.zoom`

##### bounds

> **bounds**: \[`number`, `number`, `number`, `number`] = `FeltBoundarySchema`

###### Inherited from

`z.infer.bounds`

***

### SetViewportCenterZoomParams

The parameters for the `gotoViewport` method.

[FeltController.gotoViewport](Controller.md#gotoviewport)

#### Extends

* `TypeOf`\<*typeof* [`SetViewportCenterZoomParamsSchema`](Viewport.md#setviewportcenterzoomparamsschema)>

#### Properties

##### type

> **type**: `"center"`

###### Inherited from

`z.infer.type`

##### location

> **location**: `object`

| Name               | Type     | Default value | Description                                           |
| ------------------ | -------- | ------------- | ----------------------------------------------------- |
| `center`?          | `object` | LatLngSchema  | The center of the viewport in latitude and longitude. |
| `center.latitude`  | `number` | Latitude      | -                                                     |
| `center.longitude` | `number` | Longitude     | -                                                     |
| `zoom`?            | `number` | FeltZoom      | The zoom level of the viewport.                       |

###### Inherited from

`z.infer.location`

***

### ViewportFitBoundsParams

The parameters for the `fitBounds` method.

[FeltController.fitBounds](Controller.md#fitbounds)

#### Extends

* `TypeOf`\<*typeof* [`ViewportFitBoundsParamsSchema`](Viewport.md#viewportfitboundsparamsschema)>

#### Properties

##### bounds

> **bounds**: \[`number`, `number`, `number`, `number`] = `FeltBoundarySchema`

###### Inherited from

`z.infer.bounds`
