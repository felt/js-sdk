***

The Felt SDK lets you get information about the elements in the map, and the
groups that they belong to.

# PlaceElementCreate

## Properties

### type

> **type**: `"Place"`

### coordinates

> **coordinates**: \[`number`, `number`\]

### symbol?

> `optional` **symbol**: `string`

### groupId?

> `optional` **groupId**: `null` \| `string`

### color?

> `optional` **color**: `string`

### name?

> `optional` **name**: `null` \| `string`

### description?

> `optional` **description**: `null` \| `string`

### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

### imageUrl?

> `optional` **imageUrl**: `null` \| `string`

### frame?

> `optional` **frame**: `null` \| `"frame-circle"` \| `"frame-square"`

### hideLabel?

> `optional` **hideLabel**: `boolean`

***

# PathElementCreate

## Properties

### type

> **type**: `"Path"`

### coordinates

> **coordinates**: \[`number`, `number`\][][]

### groupId?

> `optional` **groupId**: `null` \| `string`

### color?

> `optional` **color**: `string`

### name?

> `optional` **name**: `null` \| `string`

### description?

> `optional` **description**: `null` \| `string`

### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

### imageUrl?

> `optional` **imageUrl**: `null` \| `string`

### strokeOpacity?

> `optional` **strokeOpacity**: `number`

### strokeWidth?

> `optional` **strokeWidth**: `number`

### strokeStyle?

> `optional` **strokeStyle**: `"solid"` \| `"dashed"` \| `"dotted"`

### distanceMarker?

> `optional` **distanceMarker**: `boolean`

### endCaps?

> `optional` **endCaps**: `boolean`

### routingMode?

> `optional` **routingMode**: `null` \| `"driving"` \| `"cycling"` \| `"walking"` \| `"flying"`

***

# PolygonElementCreate

## Properties

### type

> **type**: `"Polygon"`

### coordinates

> **coordinates**: \[`number`, `number`\][][]

### groupId?

> `optional` **groupId**: `null` \| `string`

### color?

> `optional` **color**: `string`

### name?

> `optional` **name**: `null` \| `string`

### description?

> `optional` **description**: `null` \| `string`

### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

### imageUrl?

> `optional` **imageUrl**: `null` \| `string`

### strokeOpacity?

> `optional` **strokeOpacity**: `number`

### strokeWidth?

> `optional` **strokeWidth**: `number`

### strokeStyle?

> `optional` **strokeStyle**: `"solid"` \| `"dashed"` \| `"dotted"`

### fillOpacity?

> `optional` **fillOpacity**: `number`

### areaMarker?

> `optional` **areaMarker**: `boolean`

***

# CircleElementCreate

## Properties

### type

> **type**: `"Circle"`

### coordinates

> **coordinates**: \[`number`, `number`\]

### radius

> **radius**: `number`

### groupId?

> `optional` **groupId**: `null` \| `string`

### color?

> `optional` **color**: `string`

### name?

> `optional` **name**: `null` \| `string`

### description?

> `optional` **description**: `null` \| `string`

### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

### imageUrl?

> `optional` **imageUrl**: `null` \| `string`

### strokeOpacity?

> `optional` **strokeOpacity**: `number`

### strokeWidth?

> `optional` **strokeWidth**: `number`

### strokeStyle?

> `optional` **strokeStyle**: `"solid"` \| `"dashed"` \| `"dotted"`

### fillOpacity?

> `optional` **fillOpacity**: `number`

### radiusDisplayAngle?

> `optional` **radiusDisplayAngle**: `number`

### radiusDisplayUnit?

> `optional` **radiusDisplayUnit**: `null` \| `"meter"` \| `"kilometer"` \| `"foot"` \| `"mile"`

### radiusMarker?

> `optional` **radiusMarker**: `boolean`

***

# MarkerElementCreate

## Properties

### type

> **type**: `"Marker"`

### coordinates

> **coordinates**: \[`number`, `number`\][][]

### groupId?

> `optional` **groupId**: `null` \| `string`

### color?

> `optional` **color**: `string`

### name?

> `optional` **name**: `null` \| `string`

### description?

> `optional` **description**: `null` \| `string`

### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

### opacity?

> `optional` **opacity**: `number`

### size?

> `optional` **size**: `number`

### zoom?

> `optional` **zoom**: `number`

***

# HighlighterElementCreate

## Properties

### type

> **type**: `"Highlighter"`

### coordinates

> **coordinates**: \[`number`, `number`\][][]

### groupId?

> `optional` **groupId**: `null` \| `string`

### color?

> `optional` **color**: `string`

### name?

> `optional` **name**: `null` \| `string`

### description?

> `optional` **description**: `null` \| `string`

### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

### opacity?

> `optional` **opacity**: `number`

***

# TextElementCreate

## Properties

### type

> **type**: `"Text"`

### text

> **text**: `string`

### groupId?

> `optional` **groupId**: `null` \| `string`

### color?

> `optional` **color**: `string`

### description?

> `optional` **description**: `null` \| `string`

### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

### zoom?

> `optional` **zoom**: `number`

### position?

> `optional` **position**: \[`number`, `number`\]

### rotation?

> `optional` **rotation**: `number`

### scale?

> `optional` **scale**: `number`

### align?

> `optional` **align**: `"left"` \| `"center"` \| `"right"`

### style?

> `optional` **style**: `"italic"` \| `"light"` \| `"regular"` \| `"caps"`

***

# NoteElementCreate

## Properties

### type

> **type**: `"Note"`

### text

> **text**: `string`

### groupId?

> `optional` **groupId**: `null` \| `string`

### color?

> `optional` **color**: `string`

### description?

> `optional` **description**: `null` \| `string`

### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

### zoom?

> `optional` **zoom**: `number`

### position?

> `optional` **position**: \[`number`, `number`\]

### rotation?

> `optional` **rotation**: `number`

### scale?

> `optional` **scale**: `number`

### align?

> `optional` **align**: `"left"` \| `"center"` \| `"right"`

### style?

> `optional` **style**: `"italic"` \| `"light"` \| `"regular"` \| `"caps"`

### widthScale?

> `optional` **widthScale**: `number`

***

# ImageElementCreate

## Properties

### type

> **type**: `"Image"`

### coordinates

> **coordinates**: \[`number`, `number`\][][]

### imageUrl

> **imageUrl**: `string`

### groupId?

> `optional` **groupId**: `null` \| `string`

### name?

> `optional` **name**: `null` \| `string`

### description?

> `optional` **description**: `null` \| `string`

### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

### opacity?

> `optional` **opacity**: `number`

***

# PlaceElementRead

## Properties

### id

> **id**: `string`

### groupId

> **groupId**: `null` \| `string`

### color

> **color**: `string`

### name

> **name**: `null` \| `string`

### description

> **description**: `null` \| `string`

### attributes

> **attributes**: `Record`\<`string`, `unknown`\>

### imageUrl

> **imageUrl**: `null` \| `string`

### type

> **type**: `"Place"`

### symbol

> **symbol**: `string`

### frame

> **frame**: `null` \| `"frame-circle"` \| `"frame-square"`

### hideLabel

> **hideLabel**: `boolean`

***

# PathElementRead

## Properties

### id

> **id**: `string`

### groupId

> **groupId**: `null` \| `string`

### color

> **color**: `string`

### name

> **name**: `null` \| `string`

### description

> **description**: `null` \| `string`

### attributes

> **attributes**: `Record`\<`string`, `unknown`\>

### imageUrl

> **imageUrl**: `null` \| `string`

### strokeOpacity

> **strokeOpacity**: `number`

### strokeWidth

> **strokeWidth**: `number`

### strokeStyle

> **strokeStyle**: `"solid"` \| `"dashed"` \| `"dotted"`

### type

> **type**: `"Path"`

### distanceMarker

> **distanceMarker**: `boolean`

### endCaps

> **endCaps**: `boolean`

### routingMode

> **routingMode**: `null` \| `"driving"` \| `"cycling"` \| `"walking"` \| `"flying"`

***

# PolygonElementRead

## Properties

### id

> **id**: `string`

### groupId

> **groupId**: `null` \| `string`

### color

> **color**: `string`

### name

> **name**: `null` \| `string`

### description

> **description**: `null` \| `string`

### attributes

> **attributes**: `Record`\<`string`, `unknown`\>

### imageUrl

> **imageUrl**: `null` \| `string`

### strokeOpacity

> **strokeOpacity**: `number`

### strokeWidth

> **strokeWidth**: `number`

### strokeStyle

> **strokeStyle**: `"solid"` \| `"dashed"` \| `"dotted"`

### type

> **type**: `"Polygon"`

### fillOpacity

> **fillOpacity**: `number`

### areaMarker

> **areaMarker**: `boolean`

***

# CircleElementRead

## Properties

### id

> **id**: `string`

### groupId

> **groupId**: `null` \| `string`

### color

> **color**: `string`

### name

> **name**: `null` \| `string`

### description

> **description**: `null` \| `string`

### attributes

> **attributes**: `Record`\<`string`, `unknown`\>

### imageUrl

> **imageUrl**: `null` \| `string`

### strokeOpacity

> **strokeOpacity**: `number`

### strokeWidth

> **strokeWidth**: `number`

### strokeStyle

> **strokeStyle**: `"solid"` \| `"dashed"` \| `"dotted"`

### type

> **type**: `"Circle"`

### radius

> **radius**: `number`

### radiusDisplayAngle

> **radiusDisplayAngle**: `number`

### radiusDisplayUnit

> **radiusDisplayUnit**: `null` \| `"meter"` \| `"kilometer"` \| `"foot"` \| `"mile"`

### fillOpacity

> **fillOpacity**: `number`

### radiusMarker

> **radiusMarker**: `boolean`

***

# MarkerElementRead

## Properties

### id

> **id**: `string`

### groupId

> **groupId**: `null` \| `string`

### color

> **color**: `string`

### name

> **name**: `null` \| `string`

### description

> **description**: `null` \| `string`

### attributes

> **attributes**: `Record`\<`string`, `unknown`\>

### type

> **type**: `"Marker"`

### opacity

> **opacity**: `number`

### size

> **size**: `number`

### zoom

> **zoom**: `number`

***

# HighlighterElementRead

## Properties

### id

> **id**: `string`

### groupId

> **groupId**: `null` \| `string`

### color

> **color**: `string`

### name

> **name**: `null` \| `string`

### description

> **description**: `null` \| `string`

### attributes

> **attributes**: `Record`\<`string`, `unknown`\>

### type

> **type**: `"Highlighter"`

### opacity

> **opacity**: `number`

***

# TextElementRead

## Properties

### id

> **id**: `string`

### groupId

> **groupId**: `null` \| `string`

### color

> **color**: `string`

### description

> **description**: `null` \| `string`

### attributes

> **attributes**: `Record`\<`string`, `unknown`\>

### position

> **position**: \[`number`, `number`\] = `LngLatTupleSchema`

### rotation

> **rotation**: `number`

### scale

> **scale**: `number`

### zoom

> **zoom**: `number`

### text

> **text**: `string`

### align

> **align**: `"left"` \| `"center"` \| `"right"`

### style

> **style**: `"italic"` \| `"light"` \| `"regular"` \| `"caps"`

### name

> **name**: `string`

### type

> **type**: `"Text"`

***

# NoteElementRead

## Properties

### id

> **id**: `string`

### groupId

> **groupId**: `null` \| `string`

### color

> **color**: `string`

### description

> **description**: `null` \| `string`

### attributes

> **attributes**: `Record`\<`string`, `unknown`\>

### position

> **position**: \[`number`, `number`\] = `LngLatTupleSchema`

### rotation

> **rotation**: `number`

### scale

> **scale**: `number`

### zoom

> **zoom**: `number`

### text

> **text**: `string`

### align

> **align**: `"left"` \| `"center"` \| `"right"`

### style

> **style**: `"italic"` \| `"light"` \| `"regular"` \| `"caps"`

### name

> **name**: `string`

### type

> **type**: `"Note"`

### widthScale

> **widthScale**: `number`

***

# ImageElementRead

## Properties

### id

> **id**: `string`

### groupId

> **groupId**: `null` \| `string`

### name

> **name**: `null` \| `string`

### description

> **description**: `null` \| `string`

### attributes

> **attributes**: `Record`\<`string`, `unknown`\>

### type

> **type**: `"Image"`

### imageUrl

> **imageUrl**: `string`

### opacity

> **opacity**: `number`

***

# LinkElementRead

## Properties

### id

> **id**: `string`

### groupId

> **groupId**: `null` \| `string`

### color

> **color**: `string`

### name

> **name**: `null` \| `string`

### description

> **description**: `null` \| `string`

### attributes

> **attributes**: `Record`\<`string`, `unknown`\>

### type

> **type**: `"Link"`

### url

> **url**: `string`

***

# PlaceElementUpdate

## Properties

### type

> **type**: `"Place"`

### id

> **id**: `string`

### symbol?

> `optional` **symbol**: `string`

### coordinates?

> `optional` **coordinates**: \[`number`, `number`\]

### groupId?

> `optional` **groupId**: `null` \| `string`

### color?

> `optional` **color**: `string`

### name?

> `optional` **name**: `null` \| `string`

### description?

> `optional` **description**: `null` \| `string`

### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

### imageUrl?

> `optional` **imageUrl**: `null` \| `string`

### frame?

> `optional` **frame**: `null` \| `"frame-circle"` \| `"frame-square"`

### hideLabel?

> `optional` **hideLabel**: `boolean`

***

# PathElementUpdate

## Properties

### type

> **type**: `"Path"`

### id

> **id**: `string`

### coordinates?

> `optional` **coordinates**: \[`number`, `number`\][][]

### groupId?

> `optional` **groupId**: `null` \| `string`

### color?

> `optional` **color**: `string`

### name?

> `optional` **name**: `null` \| `string`

### description?

> `optional` **description**: `null` \| `string`

### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

### imageUrl?

> `optional` **imageUrl**: `null` \| `string`

### strokeOpacity?

> `optional` **strokeOpacity**: `number`

### strokeWidth?

> `optional` **strokeWidth**: `number`

### strokeStyle?

> `optional` **strokeStyle**: `"solid"` \| `"dashed"` \| `"dotted"`

### distanceMarker?

> `optional` **distanceMarker**: `boolean`

### endCaps?

> `optional` **endCaps**: `boolean`

### routingMode?

> `optional` **routingMode**: `null` \| `"driving"` \| `"cycling"` \| `"walking"` \| `"flying"`

***

# PolygonElementUpdate

## Properties

### type

> **type**: `"Polygon"`

### id

> **id**: `string`

### coordinates?

> `optional` **coordinates**: \[`number`, `number`\][][]

### groupId?

> `optional` **groupId**: `null` \| `string`

### color?

> `optional` **color**: `string`

### name?

> `optional` **name**: `null` \| `string`

### description?

> `optional` **description**: `null` \| `string`

### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

### imageUrl?

> `optional` **imageUrl**: `null` \| `string`

### strokeOpacity?

> `optional` **strokeOpacity**: `number`

### strokeWidth?

> `optional` **strokeWidth**: `number`

### strokeStyle?

> `optional` **strokeStyle**: `"solid"` \| `"dashed"` \| `"dotted"`

### fillOpacity?

> `optional` **fillOpacity**: `number`

### areaMarker?

> `optional` **areaMarker**: `boolean`

***

# CircleElementUpdate

## Properties

### type

> **type**: `"Circle"`

### id

> **id**: `string`

### coordinates?

> `optional` **coordinates**: \[`number`, `number`\]

### groupId?

> `optional` **groupId**: `null` \| `string`

### color?

> `optional` **color**: `string`

### name?

> `optional` **name**: `null` \| `string`

### description?

> `optional` **description**: `null` \| `string`

### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

### imageUrl?

> `optional` **imageUrl**: `null` \| `string`

### strokeOpacity?

> `optional` **strokeOpacity**: `number`

### strokeWidth?

> `optional` **strokeWidth**: `number`

### strokeStyle?

> `optional` **strokeStyle**: `"solid"` \| `"dashed"` \| `"dotted"`

### fillOpacity?

> `optional` **fillOpacity**: `number`

### radius?

> `optional` **radius**: `number`

### radiusDisplayAngle?

> `optional` **radiusDisplayAngle**: `number`

### radiusDisplayUnit?

> `optional` **radiusDisplayUnit**: `null` \| `"meter"` \| `"kilometer"` \| `"foot"` \| `"mile"`

### radiusMarker?

> `optional` **radiusMarker**: `boolean`

***

# MarkerElementUpdate

## Properties

### type

> **type**: `"Marker"`

### id

> **id**: `string`

### coordinates?

> `optional` **coordinates**: \[`number`, `number`\][][]

### groupId?

> `optional` **groupId**: `null` \| `string`

### color?

> `optional` **color**: `string`

### name?

> `optional` **name**: `null` \| `string`

### description?

> `optional` **description**: `null` \| `string`

### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

### opacity?

> `optional` **opacity**: `number`

### size?

> `optional` **size**: `number`

### zoom?

> `optional` **zoom**: `number`

***

# HighlighterElementUpdate

## Properties

### type

> **type**: `"Highlighter"`

### id

> **id**: `string`

### coordinates?

> `optional` **coordinates**: \[`number`, `number`\][][]

### groupId?

> `optional` **groupId**: `null` \| `string`

### color?

> `optional` **color**: `string`

### name?

> `optional` **name**: `null` \| `string`

### description?

> `optional` **description**: `null` \| `string`

### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

### opacity?

> `optional` **opacity**: `number`

***

# TextElementUpdate

## Properties

### type

> **type**: `"Text"`

### id

> **id**: `string`

### groupId?

> `optional` **groupId**: `null` \| `string`

### color?

> `optional` **color**: `string`

### description?

> `optional` **description**: `null` \| `string`

### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

### zoom?

> `optional` **zoom**: `number`

### position?

> `optional` **position**: \[`number`, `number`\]

### rotation?

> `optional` **rotation**: `number`

### scale?

> `optional` **scale**: `number`

### text?

> `optional` **text**: `string`

### align?

> `optional` **align**: `"left"` \| `"center"` \| `"right"`

### style?

> `optional` **style**: `"italic"` \| `"light"` \| `"regular"` \| `"caps"`

***

# NoteElementUpdate

## Properties

### type

> **type**: `"Note"`

### id

> **id**: `string`

### groupId?

> `optional` **groupId**: `null` \| `string`

### color?

> `optional` **color**: `string`

### description?

> `optional` **description**: `null` \| `string`

### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

### zoom?

> `optional` **zoom**: `number`

### position?

> `optional` **position**: \[`number`, `number`\]

### rotation?

> `optional` **rotation**: `number`

### scale?

> `optional` **scale**: `number`

### text?

> `optional` **text**: `string`

### align?

> `optional` **align**: `"left"` \| `"center"` \| `"right"`

### style?

> `optional` **style**: `"italic"` \| `"light"` \| `"regular"` \| `"caps"`

### widthScale?

> `optional` **widthScale**: `number`

***

# ImageElementUpdate

## Properties

### type

> **type**: `"Image"`

### id

> **id**: `string`

### coordinates?

> `optional` **coordinates**: \[`number`, `number`\][][]

### groupId?

> `optional` **groupId**: `null` \| `string`

### name?

> `optional` **name**: `null` \| `string`

### description?

> `optional` **description**: `null` \| `string`

### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

### imageUrl?

> `optional` **imageUrl**: `string`

### opacity?

> `optional` **opacity**: `number`

***

# ElementCreate

> **ElementCreate** = [`PlaceElementCreate`](#placeelementcreate) \| [`PathElementCreate`](#pathelementcreate) \| [`PolygonElementCreate`](#polygonelementcreate) \| [`CircleElementCreate`](#circleelementcreate) \| [`MarkerElementCreate`](#markerelementcreate) \| [`HighlighterElementCreate`](#highlighterelementcreate) \| [`ImageElementCreate`](#imageelementcreate) \| [`TextElementCreate`](#textelementcreate) \| [`NoteElementCreate`](#noteelementcreate)

***

# ElementUpdate

> **ElementUpdate** = [`PlaceElementUpdate`](#placeelementupdate) \| [`PathElementUpdate`](#pathelementupdate) \| [`PolygonElementUpdate`](#polygonelementupdate) \| [`CircleElementUpdate`](#circleelementupdate) \| [`MarkerElementUpdate`](#markerelementupdate) \| [`HighlighterElementUpdate`](#highlighterelementupdate) \| [`TextElementUpdate`](#textelementupdate) \| [`NoteElementUpdate`](#noteelementupdate) \| [`ImageElementUpdate`](#imageelementupdate)

***

# ElementsController

The Elements controller allows you to get information about the elements on the
map, and make changes to their visibility.

## Extended by

- [`FeltController`](Main.md#feltcontroller)

## Methods

### getElement()

> **getElement**(`id`: `string`): `Promise`\<`null` \| [`Element`](#element-1)\>

Get a single element from the map by its id.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The id of the element you want to get. |

#### Returns

`Promise`\<`null` \| [`Element`](#element-1)\>

The requested element.

#### Example

```typescript
const element = await felt.getElement("element-1");
```

### getElementGeometry()

> **getElementGeometry**(`id`: `string`): `Promise`\<`null` \| [`Geometry`](Shared.md#geometry)\>

Get the geometry of an element.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The id of the element you want to get the geometry of. |

#### Returns

`Promise`\<`null` \| [`Geometry`](Shared.md#geometry)\>

#### Example

```typescript
const geometry = await felt.getElementGeometry("element-1");
console.log(geometry?.type, geometry?.coordinates);
```

### getElements()

> **getElements**(`constraint`?: [`GetElementsConstraint`](#getelementsconstraint)): `Promise`\<(`null` \| [`Element`](#element-1))[]\>

Gets elements from the map, according to the constraints supplied. If no
constraints are supplied, all elements will be returned.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `constraint`? | [`GetElementsConstraint`](#getelementsconstraint) | The constraints to apply to the elements returned from the map. |

#### Returns

`Promise`\<(`null` \| [`Element`](#element-1))[]\>

All elements on the map.

#### Remarks

The elements in the map, ordered by the order specified in Felt. This is not
necessarily the order that they are drawn in, as Felt draws points above
lines and lines above polygons, for instance.

#### Example

```typescript
const elements = await felt.getElements();
```

### getElementGroup()

> **getElementGroup**(`id`: `string`): `Promise`\<`null` \| [`ElementGroup`](#elementgroup)\>

Get an element group from the map by its id.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<`null` \| [`ElementGroup`](#elementgroup)\>

The requested element group.

#### Example

```typescript
felt.getElementGroup("element-group-1");
```

### getElementGroups()

> **getElementGroups**(`constraint`?: [`GetElementGroupsConstraint`](#getelementgroupsconstraint)): `Promise`\<(`null` \| [`ElementGroup`](#elementgroup))[]\>

Gets element groups from the map, according to the filters supplied. If no
constraints are supplied, all element groups will be returned in rendering order.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `constraint`? | [`GetElementGroupsConstraint`](#getelementgroupsconstraint) | The constraints to apply to the element groups returned from the map. |

#### Returns

`Promise`\<(`null` \| [`ElementGroup`](#elementgroup))[]\>

The requested element groups.

#### Example

```typescript
const elementGroups = await felt.getElementGroups({ ids: ["element-group-1", "element-group-2"] });
```

### setElementGroupVisibility()

> **setElementGroupVisibility**(`visibility`: [`SetVisibilityRequest`](Shared.md#setvisibilityrequest)): `Promise`\<`void`\>

Hide or show element groups with the given ids.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `visibility` | [`SetVisibilityRequest`](Shared.md#setvisibilityrequest) |

#### Returns

`Promise`\<`void`\>

#### Example

```typescript
felt.setElementGroupVisibility({ show: ["element-group-1", "element-group-2"], hide: ["element-group-3"] });
```

### createElement()

> **createElement**(`element`: [`ElementCreate`](#elementcreate)): `Promise`\<[`Element`](#element-1)\>

Create a new element on the map.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `element` | [`ElementCreate`](#elementcreate) |

#### Returns

`Promise`\<[`Element`](#element-1)\>

#### Example

```typescript
const element = await felt.createElement({ type: "Place", coordinates: [10, 10] });
```

### updateElement()

> **updateElement**(`element`: [`ElementUpdate`](#elementupdate)): `Promise`\<[`Element`](#element-1)\>

Update an element on the map.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `element` | [`ElementUpdate`](#elementupdate) |

#### Returns

`Promise`\<[`Element`](#element-1)\>

### deleteElement()

> **deleteElement**(`id`: `string`): `Promise`\<`void`\>

Delete an element from the map.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<`void`\>

## Events

### onElementCreate()

> **onElementCreate**(`args`: \{ `handler`: (`change`: [`ElementChangeCallbackParams`](#elementchangecallbackparams)) => `void`; \}): `VoidFunction`

Adds a listener for when an element is created.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `args` | \{ `handler`: (`change`: [`ElementChangeCallbackParams`](#elementchangecallbackparams)) => `void`; \} | - |
| `args.handler` | (`change`: [`ElementChangeCallbackParams`](#elementchangecallbackparams)) => `void` | The handler that is called when an element is created. |

#### Returns

`VoidFunction`

A function to unsubscribe from the listener

#### Example

```typescript
const unsubscribe = felt.onElementCreate({
  handler: (element) => console.log(element.id),
});

// later on...
unsubscribe();
```

### onElementChange()

> **onElementChange**(`args`: \{ `options`: \{ `id`: `string`; \}; `handler`: (`change`: [`ElementChangeCallbackParams`](#elementchangecallbackparams)) => `void`; \}): `VoidFunction`

Adds a listener for when an element changes.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `args` | \{ `options`: \{ `id`: `string`; \}; `handler`: (`change`: [`ElementChangeCallbackParams`](#elementchangecallbackparams)) => `void`; \} | - |
| `args.options` | \{ `id`: `string`; \} | - |
| `args.options.id` | `string` | The id of the element to listen for changes to. |
| `args.handler` | (`change`: [`ElementChangeCallbackParams`](#elementchangecallbackparams)) => `void` | The handler that is called when the element changes. |

#### Returns

`VoidFunction`

A function to unsubscribe from the listener

#### Example

```typescript
const unsubscribe = felt.onElementChange({
  options: { id: "element-1" },
  handler: ({element}) => console.log(element.id),
});

// later on...
unsubscribe();
```

### onElementDelete()

> **onElementDelete**(`args`: \{ `options`: \{ `id`: `string`; \}; `handler`: () => `void`; \}): `VoidFunction`

Adds a listener for when an element is deleted.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `args` | \{ `options`: \{ `id`: `string`; \}; `handler`: () => `void`; \} | - |
| `args.options` | \{ `id`: `string`; \} | - |
| `args.options.id` | `string` | The id of the element to listen for deletions of. |
| `args.handler` | () => `void` | The handler that is called when the element is deleted. |

#### Returns

`VoidFunction`

A function to unsubscribe from the listener

#### Example

```typescript
const unsubscribe = felt.onElementDelete({
  options: { id: "element-1" },
  handler: (element) => console.log(element.id),
});

// later on...
unsubscribe();
```

### onElementGroupChange()

> **onElementGroupChange**(`args`: \{ `options`: \{ `id`: `string`; \}; `handler`: (`change`: [`ElementGroupChangeCallbackParams`](#elementgroupchangecallbackparams)) => `void`; \}): `VoidFunction`

Adds a listener for when an element group changes.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `options`: \{ `id`: `string`; \}; `handler`: (`change`: [`ElementGroupChangeCallbackParams`](#elementgroupchangecallbackparams)) => `void`; \} |
| `args.options` | \{ `id`: `string`; \} |
| `args.options.id` | `string` |
| `args.handler` | (`change`: [`ElementGroupChangeCallbackParams`](#elementgroupchangecallbackparams)) => `void` |

#### Returns

`VoidFunction`

A function to unsubscribe from the listener

#### Example

```typescript
const unsubscribe = felt.onElementGroupChange({
  options: { id: "element-group-1" },
  handler: elementGroup => console.log(elementGroup.id),
});

// later on...
unsubscribe();
```

***

# ElementGroup

## Properties

### id

> **id**: `string`

A string identifying the element group.

### name

> **name**: `string`

The name of the element group. This is shown in the legend.

### caption

> **caption**: `null` \| `string`

The caption of the element group. This is shown in the legend.

### elementIds

> **elementIds**: `string`[]

The ids of the elements in the element group.

#### Remarks

You can use these ids to get the full element objects via the `getElements` method.

### visible

> **visible**: `boolean`

Whether the element group is visible or not.

### shownInLegend

> **shownInLegend**: `boolean`

Whether the element group is shown in the legend or not.

***

# GetElementGroupsConstraint

The constraints to apply when getting element groups.

## Properties

### ids?

> `optional` **ids**: `string`[]

The ids of the element groups to get.

***

# ElementGroupChangeCallbackParams

The parameters for the `onElementGroupChange` listener.

## Properties

### elementGroup

> **elementGroup**: `null` \| [`ElementGroup`](#elementgroup)

***

# GetElementsConstraint

The constraints to apply when getting elements.

## Properties

### ids?

> `optional` **ids**: `string`[]

The ids of the elements to get.

***

# ElementChangeCallbackParams

The parameters for the `onElementChange` listener.

## Properties

### element

> **element**: `null` \| [`Element`](#element-1)

The new data for the element or null if the element was removed.

***

# Element

> **Element** = [`PlaceElementRead`](#placeelementread) \| [`PathElementRead`](#pathelementread) \| [`PolygonElementRead`](#polygonelementread) \| [`CircleElementRead`](#circleelementread) \| [`MarkerElementRead`](#markerelementread) \| [`HighlighterElementRead`](#highlighterelementread) \| [`TextElementRead`](#textelementread) \| [`NoteElementRead`](#noteelementread) \| [`ImageElementRead`](#imageelementread) \| [`LinkElementRead`](#linkelementread)
