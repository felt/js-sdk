***

The Felt SDK lets you get information about the elements in the map, and the
groups that they belong to.

# PlaceElementCreate

# Properties

## type

> **type**: `"Place"`

## symbol?

> `optional` **symbol**: `string`

## groupId?

> `optional` **groupId**: `null` \| `string`

## color?

> `optional` **color**: `string`

## name?

> `optional` **name**: `null` \| `string`

## description?

> `optional` **description**: `null` \| `string`

## attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

## interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

## imageUrl?

> `optional` **imageUrl**: `null` \| `string`

## frame?

> `optional` **frame**: `null` \| `"frame-circle"` \| `"frame-square"`

## hideLabel?

> `optional` **hideLabel**: `boolean`

## coordinates

> **coordinates**: [`LngLatTuple`](Shared.md#lnglattuple)

***

# PathElementCreate

# Properties

## type

> **type**: `"Path"`

## groupId?

> `optional` **groupId**: `null` \| `string`

## color?

> `optional` **color**: `string`

## name?

> `optional` **name**: `null` \| `string`

## description?

> `optional` **description**: `null` \| `string`

## attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

## interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

## imageUrl?

> `optional` **imageUrl**: `null` \| `string`

## strokeOpacity?

> `optional` **strokeOpacity**: `number`

## strokeWidth?

> `optional` **strokeWidth**: `number`

## strokeStyle?

> `optional` **strokeStyle**: `"solid"` \| `"dashed"` \| `"dotted"`

## distanceMarker?

> `optional` **distanceMarker**: `boolean`

## endCaps?

> `optional` **endCaps**: `boolean`

## routingMode?

> `optional` **routingMode**: `null` \| `"driving"` \| `"cycling"` \| `"walking"` \| `"flying"`

## coordinates

> **coordinates**: [`LngLatTuple`](Shared.md#lnglattuple)[][]

***

# PolygonElementCreate

# Properties

## type

> **type**: `"Polygon"`

## groupId?

> `optional` **groupId**: `null` \| `string`

## color?

> `optional` **color**: `string`

## name?

> `optional` **name**: `null` \| `string`

## description?

> `optional` **description**: `null` \| `string`

## attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

## interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

## imageUrl?

> `optional` **imageUrl**: `null` \| `string`

## strokeOpacity?

> `optional` **strokeOpacity**: `number`

## strokeWidth?

> `optional` **strokeWidth**: `number`

## strokeStyle?

> `optional` **strokeStyle**: `"solid"` \| `"dashed"` \| `"dotted"`

## fillOpacity?

> `optional` **fillOpacity**: `number`

## areaMarker?

> `optional` **areaMarker**: `boolean`

## coordinates

> **coordinates**: [`LngLatTuple`](Shared.md#lnglattuple)[][]

***

# CircleElementCreate

# Properties

## type

> **type**: `"Circle"`

## radius

> **radius**: `number`

## groupId?

> `optional` **groupId**: `null` \| `string`

## color?

> `optional` **color**: `string`

## name?

> `optional` **name**: `null` \| `string`

## description?

> `optional` **description**: `null` \| `string`

## attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

## interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

## imageUrl?

> `optional` **imageUrl**: `null` \| `string`

## strokeOpacity?

> `optional` **strokeOpacity**: `number`

## strokeWidth?

> `optional` **strokeWidth**: `number`

## strokeStyle?

> `optional` **strokeStyle**: `"solid"` \| `"dashed"` \| `"dotted"`

## fillOpacity?

> `optional` **fillOpacity**: `number`

## radiusDisplayAngle?

> `optional` **radiusDisplayAngle**: `number`

## radiusDisplayUnit?

> `optional` **radiusDisplayUnit**: `null` \| `"meter"` \| `"kilometer"` \| `"foot"` \| `"mile"`

## radiusMarker?

> `optional` **radiusMarker**: `boolean`

## coordinates

> **coordinates**: [`LngLatTuple`](Shared.md#lnglattuple)

***

# MarkerElementCreate

# Properties

## type

> **type**: `"Marker"`

## groupId?

> `optional` **groupId**: `null` \| `string`

## color?

> `optional` **color**: `string`

## name?

> `optional` **name**: `null` \| `string`

## description?

> `optional` **description**: `null` \| `string`

## attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

## interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

## opacity?

> `optional` **opacity**: `number`

## size?

> `optional` **size**: `number`

## zoom?

> `optional` **zoom**: `number`

## coordinates

> **coordinates**: [`LngLatTuple`](Shared.md#lnglattuple)[][]

***

# HighlighterElementCreate

# Properties

## type

> **type**: `"Highlighter"`

## groupId?

> `optional` **groupId**: `null` \| `string`

## color?

> `optional` **color**: `string`

## name?

> `optional` **name**: `null` \| `string`

## description?

> `optional` **description**: `null` \| `string`

## attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

## interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

## opacity?

> `optional` **opacity**: `number`

## coordinates

> **coordinates**: [`LngLatTuple`](Shared.md#lnglattuple)[][]

***

# TextElementCreate

# Properties

## type

> **type**: `"Text"`

## text

> **text**: `string`

## groupId?

> `optional` **groupId**: `null` \| `string`

## color?

> `optional` **color**: `string`

## description?

> `optional` **description**: `null` \| `string`

## attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

## interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

## zoom?

> `optional` **zoom**: `number`

## position?

> `optional` **position**: \[`number`, `number`\]

## rotation?

> `optional` **rotation**: `number`

## scale?

> `optional` **scale**: `number`

## align?

> `optional` **align**: `"left"` \| `"center"` \| `"right"`

## style?

> `optional` **style**: `"italic"` \| `"light"` \| `"regular"` \| `"caps"`

***

# NoteElementCreate

# Properties

## type

> **type**: `"Note"`

## text

> **text**: `string`

## groupId?

> `optional` **groupId**: `null` \| `string`

## color?

> `optional` **color**: `string`

## description?

> `optional` **description**: `null` \| `string`

## attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

## interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

## zoom?

> `optional` **zoom**: `number`

## position?

> `optional` **position**: \[`number`, `number`\]

## rotation?

> `optional` **rotation**: `number`

## scale?

> `optional` **scale**: `number`

## align?

> `optional` **align**: `"left"` \| `"center"` \| `"right"`

## style?

> `optional` **style**: `"italic"` \| `"light"` \| `"regular"` \| `"caps"`

## widthScale?

> `optional` **widthScale**: `number`

***

# ImageElementCreate

# Properties

## type

> **type**: `"Image"`

## coordinates

> **coordinates**: \[`number`, `number`\][][]

## imageUrl

> **imageUrl**: `string`

## groupId?

> `optional` **groupId**: `null` \| `string`

## name?

> `optional` **name**: `null` \| `string`

## description?

> `optional` **description**: `null` \| `string`

## attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

## interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

## opacity?

> `optional` **opacity**: `number`

***

# PlaceElementRead

# Properties

## id

> **id**: `string`

## groupId

> **groupId**: `null` \| `string`

## color

> **color**: `string`

## name

> **name**: `null` \| `string`

## description

> **description**: `null` \| `string`

## attributes

> **attributes**: `Record`\<`string`, `unknown`\>

## interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

## imageUrl

> **imageUrl**: `null` \| `string`

## type

> **type**: `"Place"`

## symbol

> **symbol**: `string`

## frame

> **frame**: `null` \| `"frame-circle"` \| `"frame-square"`

## hideLabel

> **hideLabel**: `boolean`

## coordinates

> **coordinates**: [`LngLatTuple`](Shared.md#lnglattuple)

***

# PathElementRead

# Properties

## id

> **id**: `string`

## groupId

> **groupId**: `null` \| `string`

## color

> **color**: `string`

## name

> **name**: `null` \| `string`

## description

> **description**: `null` \| `string`

## attributes

> **attributes**: `Record`\<`string`, `unknown`\>

## interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

## imageUrl

> **imageUrl**: `null` \| `string`

## strokeOpacity

> **strokeOpacity**: `number`

## strokeWidth

> **strokeWidth**: `number`

## strokeStyle

> **strokeStyle**: `"solid"` \| `"dashed"` \| `"dotted"`

## type

> **type**: `"Path"`

## distanceMarker

> **distanceMarker**: `boolean`

## endCaps

> **endCaps**: `boolean`

## routingMode

> **routingMode**: `null` \| `"driving"` \| `"cycling"` \| `"walking"` \| `"flying"`

***

# PolygonElementRead

# Properties

## id

> **id**: `string`

## groupId

> **groupId**: `null` \| `string`

## color

> **color**: `string`

## name

> **name**: `null` \| `string`

## description

> **description**: `null` \| `string`

## attributes

> **attributes**: `Record`\<`string`, `unknown`\>

## interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

## imageUrl

> **imageUrl**: `null` \| `string`

## strokeOpacity

> **strokeOpacity**: `number`

## strokeWidth

> **strokeWidth**: `number`

## strokeStyle

> **strokeStyle**: `"solid"` \| `"dashed"` \| `"dotted"`

## type

> **type**: `"Polygon"`

## fillOpacity

> **fillOpacity**: `number`

## areaMarker

> **areaMarker**: `boolean`

***

# CircleElementRead

# Properties

## id

> **id**: `string`

## groupId

> **groupId**: `null` \| `string`

## color

> **color**: `string`

## name

> **name**: `null` \| `string`

## description

> **description**: `null` \| `string`

## attributes

> **attributes**: `Record`\<`string`, `unknown`\>

## interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

## imageUrl

> **imageUrl**: `null` \| `string`

## strokeOpacity

> **strokeOpacity**: `number`

## strokeWidth

> **strokeWidth**: `number`

## strokeStyle

> **strokeStyle**: `"solid"` \| `"dashed"` \| `"dotted"`

## type

> **type**: `"Circle"`

## radius

> **radius**: `number`

## radiusDisplayAngle

> **radiusDisplayAngle**: `number`

## radiusDisplayUnit

> **radiusDisplayUnit**: `null` \| `"meter"` \| `"kilometer"` \| `"foot"` \| `"mile"`

## fillOpacity

> **fillOpacity**: `number`

## radiusMarker

> **radiusMarker**: `boolean`

## coordinates

> **coordinates**: [`LngLatTuple`](Shared.md#lnglattuple)

***

# MarkerElementRead

# Properties

## id

> **id**: `string`

## groupId

> **groupId**: `null` \| `string`

## color

> **color**: `string`

## name

> **name**: `null` \| `string`

## description

> **description**: `null` \| `string`

## attributes

> **attributes**: `Record`\<`string`, `unknown`\>

## interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

## type

> **type**: `"Marker"`

## opacity

> **opacity**: `number`

## size

> **size**: `number`

## zoom

> **zoom**: `number`

***

# HighlighterElementRead

# Properties

## id

> **id**: `string`

## groupId

> **groupId**: `null` \| `string`

## color

> **color**: `string`

## name

> **name**: `null` \| `string`

## description

> **description**: `null` \| `string`

## attributes

> **attributes**: `Record`\<`string`, `unknown`\>

## interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

## type

> **type**: `"Highlighter"`

## opacity

> **opacity**: `number`

***

# TextElementRead

# Properties

## id

> **id**: `string`

## groupId

> **groupId**: `null` \| `string`

## color

> **color**: `string`

## description

> **description**: `null` \| `string`

## attributes

> **attributes**: `Record`\<`string`, `unknown`\>

## interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

## rotation

> **rotation**: `number`

## scale

> **scale**: `number`

## zoom

> **zoom**: `number`

## text

> **text**: `string`

## align

> **align**: `"left"` \| `"center"` \| `"right"`

## style

> **style**: `"italic"` \| `"light"` \| `"regular"` \| `"caps"`

## name

> **name**: `string`

## type

> **type**: `"Text"`

## position

> **position**: [`LngLatTuple`](Shared.md#lnglattuple)

***

# NoteElementRead

# Properties

## id

> **id**: `string`

## groupId

> **groupId**: `null` \| `string`

## color

> **color**: `string`

## description

> **description**: `null` \| `string`

## attributes

> **attributes**: `Record`\<`string`, `unknown`\>

## interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

## rotation

> **rotation**: `number`

## scale

> **scale**: `number`

## zoom

> **zoom**: `number`

## text

> **text**: `string`

## align

> **align**: `"left"` \| `"center"` \| `"right"`

## style

> **style**: `"italic"` \| `"light"` \| `"regular"` \| `"caps"`

## name

> **name**: `string`

## type

> **type**: `"Note"`

## widthScale

> **widthScale**: `number`

## position

> **position**: [`LngLatTuple`](Shared.md#lnglattuple)

***

# ImageElementRead

# Properties

## id

> **id**: `string`

## groupId

> **groupId**: `null` \| `string`

## name

> **name**: `null` \| `string`

## description

> **description**: `null` \| `string`

## attributes

> **attributes**: `Record`\<`string`, `unknown`\>

## interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

## type

> **type**: `"Image"`

## imageUrl

> **imageUrl**: `string`

## opacity

> **opacity**: `number`

***

# LinkElementRead

# Properties

## id

> **id**: `string`

## groupId

> **groupId**: `null` \| `string`

## color

> **color**: `string`

## name

> **name**: `null` \| `string`

## description

> **description**: `null` \| `string`

## attributes

> **attributes**: `Record`\<`string`, `unknown`\>

## interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

## type

> **type**: `"Link"`

## url

> **url**: `string`

***

# PlaceElementUpdate

# Properties

## type

> **type**: `"Place"`

## id

> **id**: `string`

## symbol?

> `optional` **symbol**: `string`

## coordinates?

> `optional` **coordinates**: \[`number`, `number`\]

## groupId?

> `optional` **groupId**: `null` \| `string`

## color?

> `optional` **color**: `string`

## name?

> `optional` **name**: `null` \| `string`

## description?

> `optional` **description**: `null` \| `string`

## attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

## interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

## imageUrl?

> `optional` **imageUrl**: `null` \| `string`

## frame?

> `optional` **frame**: `null` \| `"frame-circle"` \| `"frame-square"`

## hideLabel?

> `optional` **hideLabel**: `boolean`

***

# PathElementUpdate

# Properties

## type

> **type**: `"Path"`

## id

> **id**: `string`

## coordinates?

> `optional` **coordinates**: \[`number`, `number`\][][]

## groupId?

> `optional` **groupId**: `null` \| `string`

## color?

> `optional` **color**: `string`

## name?

> `optional` **name**: `null` \| `string`

## description?

> `optional` **description**: `null` \| `string`

## attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

## interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

## imageUrl?

> `optional` **imageUrl**: `null` \| `string`

## strokeOpacity?

> `optional` **strokeOpacity**: `number`

## strokeWidth?

> `optional` **strokeWidth**: `number`

## strokeStyle?

> `optional` **strokeStyle**: `"solid"` \| `"dashed"` \| `"dotted"`

## distanceMarker?

> `optional` **distanceMarker**: `boolean`

## endCaps?

> `optional` **endCaps**: `boolean`

## routingMode?

> `optional` **routingMode**: `null` \| `"driving"` \| `"cycling"` \| `"walking"` \| `"flying"`

***

# PolygonElementUpdate

# Properties

## type

> **type**: `"Polygon"`

## id

> **id**: `string`

## coordinates?

> `optional` **coordinates**: \[`number`, `number`\][][]

## groupId?

> `optional` **groupId**: `null` \| `string`

## color?

> `optional` **color**: `string`

## name?

> `optional` **name**: `null` \| `string`

## description?

> `optional` **description**: `null` \| `string`

## attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

## interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

## imageUrl?

> `optional` **imageUrl**: `null` \| `string`

## strokeOpacity?

> `optional` **strokeOpacity**: `number`

## strokeWidth?

> `optional` **strokeWidth**: `number`

## strokeStyle?

> `optional` **strokeStyle**: `"solid"` \| `"dashed"` \| `"dotted"`

## fillOpacity?

> `optional` **fillOpacity**: `number`

## areaMarker?

> `optional` **areaMarker**: `boolean`

***

# CircleElementUpdate

# Properties

## type

> **type**: `"Circle"`

## id

> **id**: `string`

## coordinates?

> `optional` **coordinates**: \[`number`, `number`\]

## groupId?

> `optional` **groupId**: `null` \| `string`

## color?

> `optional` **color**: `string`

## name?

> `optional` **name**: `null` \| `string`

## description?

> `optional` **description**: `null` \| `string`

## attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

## interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

## imageUrl?

> `optional` **imageUrl**: `null` \| `string`

## strokeOpacity?

> `optional` **strokeOpacity**: `number`

## strokeWidth?

> `optional` **strokeWidth**: `number`

## strokeStyle?

> `optional` **strokeStyle**: `"solid"` \| `"dashed"` \| `"dotted"`

## fillOpacity?

> `optional` **fillOpacity**: `number`

## radius?

> `optional` **radius**: `number`

## radiusDisplayAngle?

> `optional` **radiusDisplayAngle**: `number`

## radiusDisplayUnit?

> `optional` **radiusDisplayUnit**: `null` \| `"meter"` \| `"kilometer"` \| `"foot"` \| `"mile"`

## radiusMarker?

> `optional` **radiusMarker**: `boolean`

***

# MarkerElementUpdate

# Properties

## type

> **type**: `"Marker"`

## id

> **id**: `string`

## coordinates?

> `optional` **coordinates**: \[`number`, `number`\][][]

## groupId?

> `optional` **groupId**: `null` \| `string`

## color?

> `optional` **color**: `string`

## name?

> `optional` **name**: `null` \| `string`

## description?

> `optional` **description**: `null` \| `string`

## attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

## interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

## opacity?

> `optional` **opacity**: `number`

## size?

> `optional` **size**: `number`

## zoom?

> `optional` **zoom**: `number`

***

# HighlighterElementUpdate

# Properties

## type

> **type**: `"Highlighter"`

## id

> **id**: `string`

## coordinates?

> `optional` **coordinates**: \[`number`, `number`\][][]

## groupId?

> `optional` **groupId**: `null` \| `string`

## color?

> `optional` **color**: `string`

## name?

> `optional` **name**: `null` \| `string`

## description?

> `optional` **description**: `null` \| `string`

## attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

## interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

## opacity?

> `optional` **opacity**: `number`

***

# TextElementUpdate

# Properties

## type

> **type**: `"Text"`

## id

> **id**: `string`

## groupId?

> `optional` **groupId**: `null` \| `string`

## color?

> `optional` **color**: `string`

## description?

> `optional` **description**: `null` \| `string`

## attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

## interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

## zoom?

> `optional` **zoom**: `number`

## position?

> `optional` **position**: \[`number`, `number`\]

## rotation?

> `optional` **rotation**: `number`

## scale?

> `optional` **scale**: `number`

## text?

> `optional` **text**: `string`

## align?

> `optional` **align**: `"left"` \| `"center"` \| `"right"`

## style?

> `optional` **style**: `"italic"` \| `"light"` \| `"regular"` \| `"caps"`

***

# NoteElementUpdate

# Properties

## type

> **type**: `"Note"`

## id

> **id**: `string`

## groupId?

> `optional` **groupId**: `null` \| `string`

## color?

> `optional` **color**: `string`

## description?

> `optional` **description**: `null` \| `string`

## attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

## interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

## zoom?

> `optional` **zoom**: `number`

## position?

> `optional` **position**: \[`number`, `number`\]

## rotation?

> `optional` **rotation**: `number`

## scale?

> `optional` **scale**: `number`

## text?

> `optional` **text**: `string`

## align?

> `optional` **align**: `"left"` \| `"center"` \| `"right"`

## style?

> `optional` **style**: `"italic"` \| `"light"` \| `"regular"` \| `"caps"`

## widthScale?

> `optional` **widthScale**: `number`

***

# ImageElementUpdate

# Properties

## type

> **type**: `"Image"`

## id

> **id**: `string`

## coordinates?

> `optional` **coordinates**: \[`number`, `number`\][][]

## groupId?

> `optional` **groupId**: `null` \| `string`

## name?

> `optional` **name**: `null` \| `string`

## description?

> `optional` **description**: `null` \| `string`

## attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

## interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

## imageUrl?

> `optional` **imageUrl**: `string`

## opacity?

> `optional` **opacity**: `number`

***

# ElementCreate

> **ElementCreate** = [`PlaceElementCreate`](#placeelementcreate) \| [`PathElementCreate`](#pathelementcreate) \| [`PolygonElementCreate`](#polygonelementcreate) \| [`CircleElementCreate`](#circleelementcreate) \| [`MarkerElementCreate`](#markerelementcreate) \| [`HighlighterElementCreate`](#highlighterelementcreate) \| [`ImageElementCreate`](#imageelementcreate) \| [`TextElementCreate`](#textelementcreate) \| [`NoteElementCreate`](#noteelementcreate)

***

# ElementUpdate

> **ElementUpdate** = [`PlaceElementUpdate`](#placeelementupdate) \| [`PathElementUpdate`](#pathelementupdate) \| [`PolygonElementUpdate`](#polygonelementupdate) \| [`CircleElementUpdate`](#circleelementupdate) \| [`MarkerElementUpdate`](#markerelementupdate) \| [`HighlighterElementUpdate`](#highlighterelementupdate) \| [`TextElementUpdate`](#textelementupdate) \| [`NoteElementUpdate`](#noteelementupdate) \| [`ImageElementUpdate`](#imageelementupdate)

***

# ElementGroup

# Properties

## id

> **id**: `string`

A string identifying the element group.

## name

> **name**: `string`

The name of the element group. This is shown in the legend.

## caption

> **caption**: `null` \| `string`

The caption of the element group. This is shown in the legend.

## elementIds

> **elementIds**: `string`[]

The ids of the elements in the element group.

### Remarks

You can use these ids to get the full element objects via the `getElements` method.

## visible

> **visible**: `boolean`

Whether the element group is visible or not.

## shownInLegend

> **shownInLegend**: `boolean`

Whether the element group is shown in the legend or not.

***

# GetElementGroupsConstraint

The constraints to apply when getting element groups.

# Properties

## ids?

> `optional` **ids**: `string`[]

The ids of the element groups to get.

***

# ElementGroupChangeCallbackParams

The parameters for the `onElementGroupChange` listener.

# Properties

## elementGroup

> **elementGroup**: `null` \| [`ElementGroup`](#elementgroup)

***

# GetElementsConstraint

The constraints to apply when getting elements.

# Properties

## ids?

> `optional` **ids**: `string`[]

The ids of the elements to get.

***

# ElementChangeCallbackParams

The parameters for the `onElementChange` and the `onElementCreate` listeners.

# Properties

## element

> **element**: `null` \| [`Element`](#element-1)

The new data for the element or null if the element was removed.

## isBeingCreated

> **isBeingCreated**: `boolean`

Whether or not this element is still being created by a drawing tool.

For example, if the user begins drawing a polygon, they need to place
multiple points until they've ultimately completed the polygon. All
the time they are still placing points, this will be true.

For elements that require text entry (such as Places, Text and Notes)
this will be true all the time the user is typing text until the point
at which the user finishes, by pressing Escape for example.

If the user is editing an existing element, this will be false.

For elements that are created programatically, this will be false.

***

# Element

> **Element** = [`PlaceElementRead`](#placeelementread) \| [`PathElementRead`](#pathelementread) \| [`PolygonElementRead`](#polygonelementread) \| [`CircleElementRead`](#circleelementread) \| [`MarkerElementRead`](#markerelementread) \| [`HighlighterElementRead`](#highlighterelementread) \| [`TextElementRead`](#textelementread) \| [`NoteElementRead`](#noteelementread) \| [`ImageElementRead`](#imageelementread) \| [`LinkElementRead`](#linkelementread)
