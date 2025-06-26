# Other

## PlaceElementCreate

### Properties

#### type

> **type**: `"Place"`

#### coordinates

> **coordinates**: [`LngLatTuple`](client.md#lnglattuple)

#### groupId?

> `optional` **groupId**: `null` | `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

#### color?

> `optional` **color**: `string`

The color of the element in some CSS-like format.

##### Example

```typescript
"#ABC123";
"rgb(255, 0, 0)";
"hsl(200, 100%, 50%)";
```

##### Default

```ts
"#C93535"
```

#### name?

> `optional` **name**: `null` | `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

#### description?

> `optional` **description**: `null` | `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

#### interaction?

> `optional` **interaction**: `"default"` | `"locked"`

Whether the element is interactive.

The `default` interaction mode means that the element can be selected and edited by
the user, if it was created by the SDK or by the user using a tool.

If the interaction mode is `locked`, the element will not be editable by the user,
which is often used for elements that you don't want the user to edit or move by
accident.

Elements that were created by the map author (i.e. not during an SDK "session") are
not editable and have special behaviour depending on their name, description and
attributes.

##### Default

```ts
"default"
```

#### imageUrl?

> `optional` **imageUrl**: `null` | `string`

The URL of an image that has been added to the element.

#### symbol?

> `optional` **symbol**: `string`

The symbol that is rendered for the Place.

This can be an emoji by using colon-enclosed characters (e.g. `":smiley:"`)
or one of the symbols available in Felt's symbol library.

You can see the available symbols in the Felt UI when editing a Place
by hovering a symbol and converting the tooltip to kebab-case. For example,
the "Oil barrel" symbol is `oil-barrel`.

#### frame?

> `optional` **frame**: `null` | `"frame-circle"` | `"frame-square"`

The frame that is rendered around the Place's symbol. This is
only available for non-emoji symbols.

#### hideLabel?

> `optional` **hideLabel**: `boolean`

Whether the element's label is hidden on the map. This allows you
to add a name to the element and can show in popups, but not have
it visible on the map.

This will also hide the faint placeholder label that is shown when
an editable Place is selected.

##### Default

```ts
false
```

## PathElementCreate

### Properties

#### type

> **type**: `"Path"`

#### coordinates

> **coordinates**: [`LngLatTuple`](client.md#lnglattuple)\[]\[]

#### groupId?

> `optional` **groupId**: `null` | `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

#### color?

> `optional` **color**: `string`

The color of the element in some CSS-like format.

##### Example

```typescript
"#ABC123";
"rgb(255, 0, 0)";
"hsl(200, 100%, 50%)";
```

##### Default

```ts
"#C93535"
```

#### name?

> `optional` **name**: `null` | `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

#### description?

> `optional` **description**: `null` | `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

#### interaction?

> `optional` **interaction**: `"default"` | `"locked"`

Whether the element is interactive.

The `default` interaction mode means that the element can be selected and edited by
the user, if it was created by the SDK or by the user using a tool.

If the interaction mode is `locked`, the element will not be editable by the user,
which is often used for elements that you don't want the user to edit or move by
accident.

Elements that were created by the map author (i.e. not during an SDK "session") are
not editable and have special behaviour depending on their name, description and
attributes.

##### Default

```ts
"default"
```

#### imageUrl?

> `optional` **imageUrl**: `null` | `string`

The URL of an image that has been added to the element.

#### strokeOpacity?

> `optional` **strokeOpacity**: `number`

A value between 0 and 1 that describes the opacity of the element's stroke.

##### Default

```ts
1
```

#### strokeWidth?

> `optional` **strokeWidth**: `number`

The width of the element's stroke in pixels.

##### Default

```ts
2
```

#### strokeStyle?

> `optional` **strokeStyle**: `"solid"` | `"dashed"` | `"dotted"`

The style of the element's stroke.

##### Default

```ts
"solid"
```

#### distanceMarker?

> `optional` **distanceMarker**: `boolean`

Whether a distance marker is shown at the midpoint of the path.

##### Default

```ts
false
```

#### routingMode?

> `optional` **routingMode**: `null` | `"driving"` | `"cycling"` | `"walking"` | `"flying"`

Whether this represents a route, and if so, what mode of transport
is used.

If this is `null`, the path is not considered to be a route, so while it
can have a `distanceMarker`, it will does not have a start or end cap.

##### Default

```ts
null
```

#### endCaps?

> `optional` **endCaps**: `boolean`

Whether or not to show Start and End caps on the path. This is
only available if the `routingMode` is set.

##### Default

```ts
false
```

## PolygonElementCreate

### Properties

#### type

> **type**: `"Polygon"`

#### coordinates

> **coordinates**: [`LngLatTuple`](client.md#lnglattuple)\[]\[]

#### groupId?

> `optional` **groupId**: `null` | `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

#### color?

> `optional` **color**: `string`

The color of the element in some CSS-like format.

##### Example

```typescript
"#ABC123";
"rgb(255, 0, 0)";
"hsl(200, 100%, 50%)";
```

##### Default

```ts
"#C93535"
```

#### name?

> `optional` **name**: `null` | `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

#### description?

> `optional` **description**: `null` | `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

#### interaction?

> `optional` **interaction**: `"default"` | `"locked"`

Whether the element is interactive.

The `default` interaction mode means that the element can be selected and edited by
the user, if it was created by the SDK or by the user using a tool.

If the interaction mode is `locked`, the element will not be editable by the user,
which is often used for elements that you don't want the user to edit or move by
accident.

Elements that were created by the map author (i.e. not during an SDK "session") are
not editable and have special behaviour depending on their name, description and
attributes.

##### Default

```ts
"default"
```

#### imageUrl?

> `optional` **imageUrl**: `null` | `string`

The URL of an image that has been added to the element.

#### strokeOpacity?

> `optional` **strokeOpacity**: `number`

A value between 0 and 1 that describes the opacity of the element's stroke.

##### Default

```ts
1
```

#### strokeWidth?

> `optional` **strokeWidth**: `number`

The width of the element's stroke in pixels.

##### Default

```ts
2
```

#### strokeStyle?

> `optional` **strokeStyle**: `"solid"` | `"dashed"` | `"dotted"`

The style of the element's stroke.

##### Default

```ts
"solid"
```

#### fillOpacity?

> `optional` **fillOpacity**: `number`

The opacity of the polygon's fill, between 0 and 1.

##### Default

```ts
0.25
```

#### areaMarker?

> `optional` **areaMarker**: `boolean`

Whether to show an area marker on the polygon.

##### Default

```ts
false
```

## CircleElementCreate

### Properties

#### type

> **type**: `"Circle"`

#### radius

> **radius**: `number`

The radius of the circle in meters.

#### center

> **center**: [`LngLatTuple`](client.md#lnglattuple)

The center of the circle.

#### groupId?

> `optional` **groupId**: `null` | `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

#### color?

> `optional` **color**: `string`

The color of the element in some CSS-like format.

##### Example

```typescript
"#ABC123";
"rgb(255, 0, 0)";
"hsl(200, 100%, 50%)";
```

##### Default

```ts
"#C93535"
```

#### name?

> `optional` **name**: `null` | `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

#### description?

> `optional` **description**: `null` | `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

#### interaction?

> `optional` **interaction**: `"default"` | `"locked"`

Whether the element is interactive.

The `default` interaction mode means that the element can be selected and edited by
the user, if it was created by the SDK or by the user using a tool.

If the interaction mode is `locked`, the element will not be editable by the user,
which is often used for elements that you don't want the user to edit or move by
accident.

Elements that were created by the map author (i.e. not during an SDK "session") are
not editable and have special behaviour depending on their name, description and
attributes.

##### Default

```ts
"default"
```

#### imageUrl?

> `optional` **imageUrl**: `null` | `string`

The URL of an image that has been added to the element.

#### strokeOpacity?

> `optional` **strokeOpacity**: `number`

A value between 0 and 1 that describes the opacity of the element's stroke.

##### Default

```ts
1
```

#### strokeWidth?

> `optional` **strokeWidth**: `number`

The width of the element's stroke in pixels.

##### Default

```ts
2
```

#### strokeStyle?

> `optional` **strokeStyle**: `"solid"` | `"dashed"` | `"dotted"`

The style of the element's stroke.

##### Default

```ts
"solid"
```

#### radiusMarker?

> `optional` **radiusMarker**: `boolean`

Whether to show a marker on the circle that indicates the radius

##### Default

```ts
false
```

#### radiusDisplayAngle?

> `optional` **radiusDisplayAngle**: `number`

The angle at which the control point for setting the radius is displayed,
in degrees. When the `radiusMarker` is `true`, there is a dotted line rendered
from the center of the circle to the control point, and the marker is shown
at the midpoint of this line.

##### Default

```ts
90
```

#### radiusDisplayUnit?

> `optional` **radiusDisplayUnit**: `null` | `"meter"` | `"kilometer"` | `"foot"` | `"mile"`

The unit of the radius used when the `radiusMarker` is `true`.

A value of `null` means that the unit matches the user's locale.

##### Default

```ts
null
```

#### fillOpacity?

> `optional` **fillOpacity**: `number`

The opacity of the circle's fill.

##### Default

```ts
0.25
```

## MarkerElementCreate

### Properties

#### type

> **type**: `"Marker"`

#### coordinates

> **coordinates**: [`LngLatTuple`](client.md#lnglattuple)\[]\[]

#### groupId?

> `optional` **groupId**: `null` | `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

#### color?

> `optional` **color**: `string`

The color of the element in some CSS-like format.

##### Example

```typescript
"#ABC123";
"rgb(255, 0, 0)";
"hsl(200, 100%, 50%)";
```

##### Default

```ts
"#C93535"
```

#### name?

> `optional` **name**: `null` | `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

#### description?

> `optional` **description**: `null` | `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

#### interaction?

> `optional` **interaction**: `"default"` | `"locked"`

Whether the element is interactive.

The `default` interaction mode means that the element can be selected and edited by
the user, if it was created by the SDK or by the user using a tool.

If the interaction mode is `locked`, the element will not be editable by the user,
which is often used for elements that you don't want the user to edit or move by
accident.

Elements that were created by the map author (i.e. not during an SDK "session") are
not editable and have special behaviour depending on their name, description and
attributes.

##### Default

```ts
"default"
```

#### opacity?

> `optional` **opacity**: `number`

The opacity of the marker, between 0 and 1.

##### Default

```ts
1
```

#### size?

> `optional` **size**: `number`

The size of the marker, used in conjunction with the `zoom` to determine
the actual size of the marker.

##### Default

```ts
10
```

#### zoom?

> `optional` **zoom**: `number`

The zoom level at which the marker was created. This is combined with
the `size` to determine the actual size of the marker.

When creating a marker, if you don't supply this value it defaults to
the current zoom of the map when you call `createElement`.

## HighlighterElementCreate

### Properties

#### type

> **type**: `"Highlighter"`

#### coordinates

> **coordinates**: [`LngLatTuple`](client.md#lnglattuple)\[]\[]\[]

A multipolygon describing the area that is highlighted.

If `renderHoles` is set to false, only the outer ring of each polygon
will be rendered, filling in the area inside the highlighted region.

#### groupId?

> `optional` **groupId**: `null` | `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

#### color?

> `optional` **color**: `string`

The color of the element in some CSS-like format.

##### Example

```typescript
"#ABC123";
"rgb(255, 0, 0)";
"hsl(200, 100%, 50%)";
```

##### Default

```ts
"#C93535"
```

#### name?

> `optional` **name**: `null` | `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

#### description?

> `optional` **description**: `null` | `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

#### interaction?

> `optional` **interaction**: `"default"` | `"locked"`

Whether the element is interactive.

The `default` interaction mode means that the element can be selected and edited by
the user, if it was created by the SDK or by the user using a tool.

If the interaction mode is `locked`, the element will not be editable by the user,
which is often used for elements that you don't want the user to edit or move by
accident.

Elements that were created by the map author (i.e. not during an SDK "session") are
not editable and have special behaviour depending on their name, description and
attributes.

##### Default

```ts
"default"
```

#### renderHoles?

> `optional` **renderHoles**: `boolean`

Whether to render the holes of the highlighted area.

##### Default

```ts
false
```

#### opacity?

> `optional` **opacity**: `number`

The opacity of the highlighter, between 0 and 1.

##### Default

```ts
0.5
```

## TextElementCreate

### Properties

#### type

> **type**: `"Text"`

#### text

> **text**: `string`

#### groupId?

> `optional` **groupId**: `null` | `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

#### color?

> `optional` **color**: `string`

The color of the element in some CSS-like format.

##### Example

```typescript
"#ABC123";
"rgb(255, 0, 0)";
"hsl(200, 100%, 50%)";
```

##### Default

```ts
"#C93535"
```

#### description?

> `optional` **description**: `null` | `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

#### interaction?

> `optional` **interaction**: `"default"` | `"locked"`

Whether the element is interactive.

The `default` interaction mode means that the element can be selected and edited by
the user, if it was created by the SDK or by the user using a tool.

If the interaction mode is `locked`, the element will not be editable by the user,
which is often used for elements that you don't want the user to edit or move by
accident.

Elements that were created by the map author (i.e. not during an SDK "session") are
not editable and have special behaviour depending on their name, description and
attributes.

##### Default

```ts
"default"
```

#### rotation?

> `optional` **rotation**: `number`

The rotation of the element in degrees.

##### Default

```ts
0
```

#### scale?

> `optional` **scale**: `number`

The relative scale of the element from the default size. This is combined
with the `zoom` to determine the actual size of the element.

##### Default

```ts
1
```

#### zoom?

> `optional` **zoom**: `number`

The zoom level at which the element was created. This is combined with
the `scale` to determine the actual size of the element.

When creating an element, if you don't supply this value it defaults to
the current zoom of the map when you call `createElement`.

#### align?

> `optional` **align**: `"center"` | `"left"` | `"right"`

The alignment of the text, either `left`, `center` or `right`.

##### Default

```ts
"center"
```

#### style?

> `optional` **style**: `"italic"` | `"light"` | `"regular"` | `"caps"`

The style of the text, either `italic`, `light`, `regular` or `caps`.

##### Default

```ts
"regular"
```

#### position?

> `optional` **position**: [`LngLatTuple`](client.md#lnglattuple)

The geographical position of the center of the text element.

If this is omitted, the text will be placed at the center of the current
viewport.

## NoteElementCreate

### Properties

#### type

> **type**: `"Note"`

#### text

> **text**: `string`

#### groupId?

> `optional` **groupId**: `null` | `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

#### color?

> `optional` **color**: `string`

The color of the element in some CSS-like format.

##### Example

```typescript
"#ABC123";
"rgb(255, 0, 0)";
"hsl(200, 100%, 50%)";
```

##### Default

```ts
"#C93535"
```

#### description?

> `optional` **description**: `null` | `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

#### interaction?

> `optional` **interaction**: `"default"` | `"locked"`

Whether the element is interactive.

The `default` interaction mode means that the element can be selected and edited by
the user, if it was created by the SDK or by the user using a tool.

If the interaction mode is `locked`, the element will not be editable by the user,
which is often used for elements that you don't want the user to edit or move by
accident.

Elements that were created by the map author (i.e. not during an SDK "session") are
not editable and have special behaviour depending on their name, description and
attributes.

##### Default

```ts
"default"
```

#### rotation?

> `optional` **rotation**: `number`

The rotation of the element in degrees.

##### Default

```ts
0
```

#### scale?

> `optional` **scale**: `number`

The relative scale of the element from the default size. This is combined
with the `zoom` to determine the actual size of the element.

##### Default

```ts
1
```

#### zoom?

> `optional` **zoom**: `number`

The zoom level at which the element was created. This is combined with
the `scale` to determine the actual size of the element.

When creating an element, if you don't supply this value it defaults to
the current zoom of the map when you call `createElement`.

#### align?

> `optional` **align**: `"center"` | `"left"` | `"right"`

The alignment of the text, either `left`, `center` or `right`.

##### Default

```ts
"center"
```

#### style?

> `optional` **style**: `"italic"` | `"light"` | `"regular"` | `"caps"`

The style of the text, either `italic`, `light`, `regular` or `caps`.

##### Default

```ts
"regular"
```

#### widthScale?

> `optional` **widthScale**: `number`

#### position?

> `optional` **position**: [`LngLatTuple`](client.md#lnglattuple)

The geographical position of the center of the note element.

If this is omitted, the note will be placed at the center of the current
viewport.

## ImageElementCreate

### Properties

#### type

> **type**: `"Image"`

#### coordinates

> **coordinates**: \[`number`, `number`]\[]\[] = `MultiLineStringGeometrySchema.shape.coordinates`

#### imageUrl

> **imageUrl**: `string`

The URL of the image that is rendered in this element

#### groupId?

> `optional` **groupId**: `null` | `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

#### name?

> `optional` **name**: `null` | `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

#### description?

> `optional` **description**: `null` | `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

#### interaction?

> `optional` **interaction**: `"default"` | `"locked"`

Whether the element is interactive.

The `default` interaction mode means that the element can be selected and edited by
the user, if it was created by the SDK or by the user using a tool.

If the interaction mode is `locked`, the element will not be editable by the user,
which is often used for elements that you don't want the user to edit or move by
accident.

Elements that were created by the map author (i.e. not during an SDK "session") are
not editable and have special behaviour depending on their name, description and
attributes.

##### Default

```ts
"default"
```

#### opacity?

> `optional` **opacity**: `number`

The opacity of the image, between 0 and 1.

##### Default

```ts
1
```

## PlaceElementRead

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

#### groupId

> **groupId**: `null` | `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

#### color

> **color**: `string`

The color of the element in some CSS-like format.

##### Example

```typescript
"#ABC123";
"rgb(255, 0, 0)";
"hsl(200, 100%, 50%)";
```

##### Default

```ts
"#C93535"
```

#### name

> **name**: `null` | `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

#### description

> **description**: `null` | `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

#### attributes

> **attributes**: `Record`\<`string`, `unknown`>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

#### imageUrl

> **imageUrl**: `null` | `string`

The URL of an image that has been added to the element.

#### type

> **type**: `"Place"`

#### symbol

> **symbol**: `string`

The symbol that is rendered for the Place.

This can be an emoji by using colon-enclosed characters (e.g. `":smiley:"`)
or one of the symbols available in Felt's symbol library.

You can see the available symbols in the Felt UI when editing a Place
by hovering a symbol and converting the tooltip to kebab-case. For example,
the "Oil barrel" symbol is `oil-barrel`.

#### frame

> **frame**: `null` | `"frame-circle"` | `"frame-square"`

The frame that is rendered around the Place's symbol. This is
only available for non-emoji symbols.

#### hideLabel

> **hideLabel**: `boolean`

Whether the element's label is hidden on the map. This allows you
to add a name to the element and can show in popups, but not have
it visible on the map.

This will also hide the faint placeholder label that is shown when
an editable Place is selected.

##### Default

```ts
false
```

#### coordinates

> **coordinates**: [`LngLatTuple`](client.md#lnglattuple)

#### interaction?

> `optional` **interaction**: `"default"` | `"locked"`

Whether the element is interactive.

The `default` interaction mode means that the element can be selected and edited by
the user, if it was created by the SDK or by the user using a tool.

If the interaction mode is `locked`, the element will not be editable by the user,
which is often used for elements that you don't want the user to edit or move by
accident.

Elements that were created by the map author (i.e. not during an SDK "session") are
not editable and have special behaviour depending on their name, description and
attributes.

##### Default

```ts
"default"
```

## PathElementRead

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

#### groupId

> **groupId**: `null` | `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

#### color

> **color**: `string`

The color of the element in some CSS-like format.

##### Example

```typescript
"#ABC123";
"rgb(255, 0, 0)";
"hsl(200, 100%, 50%)";
```

##### Default

```ts
"#C93535"
```

#### name

> **name**: `null` | `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

#### description

> **description**: `null` | `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

#### attributes

> **attributes**: `Record`\<`string`, `unknown`>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

#### imageUrl

> **imageUrl**: `null` | `string`

The URL of an image that has been added to the element.

#### strokeOpacity

> **strokeOpacity**: `number`

A value between 0 and 1 that describes the opacity of the element's stroke.

##### Default

```ts
1
```

#### strokeWidth

> **strokeWidth**: `number`

The width of the element's stroke in pixels.

##### Default

```ts
2
```

#### strokeStyle

> **strokeStyle**: `"solid"` | `"dashed"` | `"dotted"`

The style of the element's stroke.

##### Default

```ts
"solid"
```

#### type

> **type**: `"Path"`

#### distanceMarker

> **distanceMarker**: `boolean`

Whether a distance marker is shown at the midpoint of the path.

##### Default

```ts
false
```

#### routingMode

> **routingMode**: `null` | `"driving"` | `"cycling"` | `"walking"` | `"flying"`

Whether this represents a route, and if so, what mode of transport
is used.

If this is `null`, the path is not considered to be a route, so while it
can have a `distanceMarker`, it will does not have a start or end cap.

##### Default

```ts
null
```

#### endCaps

> **endCaps**: `boolean`

Whether or not to show Start and End caps on the path. This is
only available if the `routingMode` is set.

##### Default

```ts
false
```

#### interaction?

> `optional` **interaction**: `"default"` | `"locked"`

Whether the element is interactive.

The `default` interaction mode means that the element can be selected and edited by
the user, if it was created by the SDK or by the user using a tool.

If the interaction mode is `locked`, the element will not be editable by the user,
which is often used for elements that you don't want the user to edit or move by
accident.

Elements that were created by the map author (i.e. not during an SDK "session") are
not editable and have special behaviour depending on their name, description and
attributes.

##### Default

```ts
"default"
```

## PolygonElementRead

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

#### groupId

> **groupId**: `null` | `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

#### color

> **color**: `string`

The color of the element in some CSS-like format.

##### Example

```typescript
"#ABC123";
"rgb(255, 0, 0)";
"hsl(200, 100%, 50%)";
```

##### Default

```ts
"#C93535"
```

#### name

> **name**: `null` | `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

#### description

> **description**: `null` | `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

#### attributes

> **attributes**: `Record`\<`string`, `unknown`>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

#### imageUrl

> **imageUrl**: `null` | `string`

The URL of an image that has been added to the element.

#### strokeOpacity

> **strokeOpacity**: `number`

A value between 0 and 1 that describes the opacity of the element's stroke.

##### Default

```ts
1
```

#### strokeWidth

> **strokeWidth**: `number`

The width of the element's stroke in pixels.

##### Default

```ts
2
```

#### strokeStyle

> **strokeStyle**: `"solid"` | `"dashed"` | `"dotted"`

The style of the element's stroke.

##### Default

```ts
"solid"
```

#### type

> **type**: `"Polygon"`

#### fillOpacity

> **fillOpacity**: `number`

The opacity of the polygon's fill, between 0 and 1.

##### Default

```ts
0.25
```

#### areaMarker

> **areaMarker**: `boolean`

Whether to show an area marker on the polygon.

##### Default

```ts
false
```

#### interaction?

> `optional` **interaction**: `"default"` | `"locked"`

Whether the element is interactive.

The `default` interaction mode means that the element can be selected and edited by
the user, if it was created by the SDK or by the user using a tool.

If the interaction mode is `locked`, the element will not be editable by the user,
which is often used for elements that you don't want the user to edit or move by
accident.

Elements that were created by the map author (i.e. not during an SDK "session") are
not editable and have special behaviour depending on their name, description and
attributes.

##### Default

```ts
"default"
```

## CircleElementRead

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

#### groupId

> **groupId**: `null` | `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

#### color

> **color**: `string`

The color of the element in some CSS-like format.

##### Example

```typescript
"#ABC123";
"rgb(255, 0, 0)";
"hsl(200, 100%, 50%)";
```

##### Default

```ts
"#C93535"
```

#### name

> **name**: `null` | `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

#### description

> **description**: `null` | `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

#### attributes

> **attributes**: `Record`\<`string`, `unknown`>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

#### imageUrl

> **imageUrl**: `null` | `string`

The URL of an image that has been added to the element.

#### strokeOpacity

> **strokeOpacity**: `number`

A value between 0 and 1 that describes the opacity of the element's stroke.

##### Default

```ts
1
```

#### strokeWidth

> **strokeWidth**: `number`

The width of the element's stroke in pixels.

##### Default

```ts
2
```

#### strokeStyle

> **strokeStyle**: `"solid"` | `"dashed"` | `"dotted"`

The style of the element's stroke.

##### Default

```ts
"solid"
```

#### type

> **type**: `"Circle"`

#### radius

> **radius**: `number`

The radius of the circle in meters.

#### radiusMarker

> **radiusMarker**: `boolean`

Whether to show a marker on the circle that indicates the radius

##### Default

```ts
false
```

#### radiusDisplayAngle

> **radiusDisplayAngle**: `number`

The angle at which the control point for setting the radius is displayed,
in degrees. When the `radiusMarker` is `true`, there is a dotted line rendered
from the center of the circle to the control point, and the marker is shown
at the midpoint of this line.

##### Default

```ts
90
```

#### radiusDisplayUnit

> **radiusDisplayUnit**: `null` | `"meter"` | `"kilometer"` | `"foot"` | `"mile"`

The unit of the radius used when the `radiusMarker` is `true`.

A value of `null` means that the unit matches the user's locale.

##### Default

```ts
null
```

#### fillOpacity

> **fillOpacity**: `number`

The opacity of the circle's fill.

##### Default

```ts
0.25
```

#### center

> **center**: [`LngLatTuple`](client.md#lnglattuple)

The center of the circle.

#### interaction?

> `optional` **interaction**: `"default"` | `"locked"`

Whether the element is interactive.

The `default` interaction mode means that the element can be selected and edited by
the user, if it was created by the SDK or by the user using a tool.

If the interaction mode is `locked`, the element will not be editable by the user,
which is often used for elements that you don't want the user to edit or move by
accident.

Elements that were created by the map author (i.e. not during an SDK "session") are
not editable and have special behaviour depending on their name, description and
attributes.

##### Default

```ts
"default"
```

## MarkerElementRead

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

#### groupId

> **groupId**: `null` | `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

#### color

> **color**: `string`

The color of the element in some CSS-like format.

##### Example

```typescript
"#ABC123";
"rgb(255, 0, 0)";
"hsl(200, 100%, 50%)";
```

##### Default

```ts
"#C93535"
```

#### name

> **name**: `null` | `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

#### description

> **description**: `null` | `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

#### attributes

> **attributes**: `Record`\<`string`, `unknown`>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

#### type

> **type**: `"Marker"`

#### opacity

> **opacity**: `number`

The opacity of the marker, between 0 and 1.

##### Default

```ts
1
```

#### size

> **size**: `number`

The size of the marker, used in conjunction with the `zoom` to determine
the actual size of the marker.

##### Default

```ts
10
```

#### zoom

> **zoom**: `number`

The zoom level at which the marker was created. This is combined with
the `size` to determine the actual size of the marker.

When creating a marker, if you don't supply this value it defaults to
the current zoom of the map when you call `createElement`.

#### interaction?

> `optional` **interaction**: `"default"` | `"locked"`

Whether the element is interactive.

The `default` interaction mode means that the element can be selected and edited by
the user, if it was created by the SDK or by the user using a tool.

If the interaction mode is `locked`, the element will not be editable by the user,
which is often used for elements that you don't want the user to edit or move by
accident.

Elements that were created by the map author (i.e. not during an SDK "session") are
not editable and have special behaviour depending on their name, description and
attributes.

##### Default

```ts
"default"
```

## HighlighterElementRead

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

#### groupId

> **groupId**: `null` | `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

#### color

> **color**: `string`

The color of the element in some CSS-like format.

##### Example

```typescript
"#ABC123";
"rgb(255, 0, 0)";
"hsl(200, 100%, 50%)";
```

##### Default

```ts
"#C93535"
```

#### name

> **name**: `null` | `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

#### description

> **description**: `null` | `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

#### attributes

> **attributes**: `Record`\<`string`, `unknown`>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

#### type

> **type**: `"Highlighter"`

#### renderHoles

> **renderHoles**: `boolean`

Whether to render the holes of the highlighted area.

##### Default

```ts
false
```

#### opacity

> **opacity**: `number`

The opacity of the highlighter, between 0 and 1.

##### Default

```ts
0.5
```

#### interaction?

> `optional` **interaction**: `"default"` | `"locked"`

Whether the element is interactive.

The `default` interaction mode means that the element can be selected and edited by
the user, if it was created by the SDK or by the user using a tool.

If the interaction mode is `locked`, the element will not be editable by the user,
which is often used for elements that you don't want the user to edit or move by
accident.

Elements that were created by the map author (i.e. not during an SDK "session") are
not editable and have special behaviour depending on their name, description and
attributes.

##### Default

```ts
"default"
```

## TextElementRead

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

#### groupId

> **groupId**: `null` | `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

#### color

> **color**: `string`

The color of the element in some CSS-like format.

##### Example

```typescript
"#ABC123";
"rgb(255, 0, 0)";
"hsl(200, 100%, 50%)";
```

##### Default

```ts
"#C93535"
```

#### description

> **description**: `null` | `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

#### attributes

> **attributes**: `Record`\<`string`, `unknown`>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

#### rotation

> **rotation**: `number`

The rotation of the element in degrees.

##### Default

```ts
0
```

#### scale

> **scale**: `number`

The relative scale of the element from the default size. This is combined
with the `zoom` to determine the actual size of the element.

##### Default

```ts
1
```

#### zoom

> **zoom**: `number`

The zoom level at which the element was created. This is combined with
the `scale` to determine the actual size of the element.

When creating an element, if you don't supply this value it defaults to
the current zoom of the map when you call `createElement`.

#### text

> **text**: `string`

The text in the element.

#### align

> **align**: `"center"` | `"left"` | `"right"`

The alignment of the text, either `left`, `center` or `right`.

##### Default

```ts
"center"
```

#### style

> **style**: `"italic"` | `"light"` | `"regular"` | `"caps"`

The style of the text, either `italic`, `light`, `regular` or `caps`.

##### Default

```ts
"regular"
```

#### name

> **name**: `string`

The text shown in the element, which is identical to the `text` property.

##### Remarks

This is added for consistency with other elements that have a `name`
property.

#### type

> **type**: `"Text"`

#### position

> **position**: [`LngLatTuple`](client.md#lnglattuple)

The geographical position of the center of the text element.

#### interaction?

> `optional` **interaction**: `"default"` | `"locked"`

Whether the element is interactive.

The `default` interaction mode means that the element can be selected and edited by
the user, if it was created by the SDK or by the user using a tool.

If the interaction mode is `locked`, the element will not be editable by the user,
which is often used for elements that you don't want the user to edit or move by
accident.

Elements that were created by the map author (i.e. not during an SDK "session") are
not editable and have special behaviour depending on their name, description and
attributes.

##### Default

```ts
"default"
```

## NoteElementRead

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

#### groupId

> **groupId**: `null` | `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

#### color

> **color**: `string`

The color of the element in some CSS-like format.

##### Example

```typescript
"#ABC123";
"rgb(255, 0, 0)";
"hsl(200, 100%, 50%)";
```

##### Default

```ts
"#C93535"
```

#### description

> **description**: `null` | `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

#### attributes

> **attributes**: `Record`\<`string`, `unknown`>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

#### rotation

> **rotation**: `number`

The rotation of the element in degrees.

##### Default

```ts
0
```

#### scale

> **scale**: `number`

The relative scale of the element from the default size. This is combined
with the `zoom` to determine the actual size of the element.

##### Default

```ts
1
```

#### zoom

> **zoom**: `number`

The zoom level at which the element was created. This is combined with
the `scale` to determine the actual size of the element.

When creating an element, if you don't supply this value it defaults to
the current zoom of the map when you call `createElement`.

#### text

> **text**: `string`

The text in the element.

#### align

> **align**: `"center"` | `"left"` | `"right"`

The alignment of the text, either `left`, `center` or `right`.

##### Default

```ts
"center"
```

#### style

> **style**: `"italic"` | `"light"` | `"regular"` | `"caps"`

The style of the text, either `italic`, `light`, `regular` or `caps`.

##### Default

```ts
"regular"
```

#### name

> **name**: `string`

The text shown in the element, which is identical to the `text` property.

##### Remarks

This is added for consistency with other elements that have a `name`
property.

#### type

> **type**: `"Note"`

#### widthScale

> **widthScale**: `number`

#### position

> **position**: [`LngLatTuple`](client.md#lnglattuple)

The geographical position of the center of the note element.

#### interaction?

> `optional` **interaction**: `"default"` | `"locked"`

Whether the element is interactive.

The `default` interaction mode means that the element can be selected and edited by
the user, if it was created by the SDK or by the user using a tool.

If the interaction mode is `locked`, the element will not be editable by the user,
which is often used for elements that you don't want the user to edit or move by
accident.

Elements that were created by the map author (i.e. not during an SDK "session") are
not editable and have special behaviour depending on their name, description and
attributes.

##### Default

```ts
"default"
```

## ImageElementRead

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

#### groupId

> **groupId**: `null` | `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

#### name

> **name**: `null` | `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

#### description

> **description**: `null` | `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

#### attributes

> **attributes**: `Record`\<`string`, `unknown`>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

#### type

> **type**: `"Image"`

#### imageUrl

> **imageUrl**: `string`

The URL of the image that is rendered in this element

#### opacity

> **opacity**: `number`

The opacity of the image, between 0 and 1.

##### Default

```ts
1
```

#### interaction?

> `optional` **interaction**: `"default"` | `"locked"`

Whether the element is interactive.

The `default` interaction mode means that the element can be selected and edited by
the user, if it was created by the SDK or by the user using a tool.

If the interaction mode is `locked`, the element will not be editable by the user,
which is often used for elements that you don't want the user to edit or move by
accident.

Elements that were created by the map author (i.e. not during an SDK "session") are
not editable and have special behaviour depending on their name, description and
attributes.

##### Default

```ts
"default"
```

## LinkElementRead

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

#### groupId

> **groupId**: `null` | `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

#### color

> **color**: `string`

The color of the element in some CSS-like format.

##### Example

```typescript
"#ABC123";
"rgb(255, 0, 0)";
"hsl(200, 100%, 50%)";
```

##### Default

```ts
"#C93535"
```

#### name

> **name**: `null` | `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

#### description

> **description**: `null` | `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

#### attributes

> **attributes**: `Record`\<`string`, `unknown`>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

#### type

> **type**: `"Link"`

#### url

> **url**: `string`

The URL of the link that is rendered in this element.

#### interaction?

> `optional` **interaction**: `"default"` | `"locked"`

Whether the element is interactive.

The `default` interaction mode means that the element can be selected and edited by
the user, if it was created by the SDK or by the user using a tool.

If the interaction mode is `locked`, the element will not be editable by the user,
which is often used for elements that you don't want the user to edit or move by
accident.

Elements that were created by the map author (i.e. not during an SDK "session") are
not editable and have special behaviour depending on their name, description and
attributes.

##### Default

```ts
"default"
```

## PlaceElementUpdate

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

#### type

> **type**: `"Place"`

#### groupId?

> `optional` **groupId**: `null` | `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

#### color?

> `optional` **color**: `string`

The color of the element in some CSS-like format.

##### Example

```typescript
"#ABC123";
"rgb(255, 0, 0)";
"hsl(200, 100%, 50%)";
```

##### Default

```ts
"#C93535"
```

#### name?

> `optional` **name**: `null` | `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

#### description?

> `optional` **description**: `null` | `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

#### interaction?

> `optional` **interaction**: `"default"` | `"locked"`

Whether the element is interactive.

The `default` interaction mode means that the element can be selected and edited by
the user, if it was created by the SDK or by the user using a tool.

If the interaction mode is `locked`, the element will not be editable by the user,
which is often used for elements that you don't want the user to edit or move by
accident.

Elements that were created by the map author (i.e. not during an SDK "session") are
not editable and have special behaviour depending on their name, description and
attributes.

##### Default

```ts
"default"
```

#### imageUrl?

> `optional` **imageUrl**: `null` | `string`

The URL of an image that has been added to the element.

#### symbol?

> `optional` **symbol**: `string`

The symbol that is rendered for the Place.

This can be an emoji by using colon-enclosed characters (e.g. `":smiley:"`)
or one of the symbols available in Felt's symbol library.

You can see the available symbols in the Felt UI when editing a Place
by hovering a symbol and converting the tooltip to kebab-case. For example,
the "Oil barrel" symbol is `oil-barrel`.

#### frame?

> `optional` **frame**: `null` | `"frame-circle"` | `"frame-square"`

The frame that is rendered around the Place's symbol. This is
only available for non-emoji symbols.

#### hideLabel?

> `optional` **hideLabel**: `boolean`

Whether the element's label is hidden on the map. This allows you
to add a name to the element and can show in popups, but not have
it visible on the map.

This will also hide the faint placeholder label that is shown when
an editable Place is selected.

##### Default

```ts
false
```

#### coordinates?

> `optional` **coordinates**: [`LngLatTuple`](client.md#lnglattuple)

## PathElementUpdate

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

#### type

> **type**: `"Path"`

#### groupId?

> `optional` **groupId**: `null` | `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

#### color?

> `optional` **color**: `string`

The color of the element in some CSS-like format.

##### Example

```typescript
"#ABC123";
"rgb(255, 0, 0)";
"hsl(200, 100%, 50%)";
```

##### Default

```ts
"#C93535"
```

#### name?

> `optional` **name**: `null` | `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

#### description?

> `optional` **description**: `null` | `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

#### interaction?

> `optional` **interaction**: `"default"` | `"locked"`

Whether the element is interactive.

The `default` interaction mode means that the element can be selected and edited by
the user, if it was created by the SDK or by the user using a tool.

If the interaction mode is `locked`, the element will not be editable by the user,
which is often used for elements that you don't want the user to edit or move by
accident.

Elements that were created by the map author (i.e. not during an SDK "session") are
not editable and have special behaviour depending on their name, description and
attributes.

##### Default

```ts
"default"
```

#### imageUrl?

> `optional` **imageUrl**: `null` | `string`

The URL of an image that has been added to the element.

#### strokeOpacity?

> `optional` **strokeOpacity**: `number`

A value between 0 and 1 that describes the opacity of the element's stroke.

##### Default

```ts
1
```

#### strokeWidth?

> `optional` **strokeWidth**: `number`

The width of the element's stroke in pixels.

##### Default

```ts
2
```

#### strokeStyle?

> `optional` **strokeStyle**: `"solid"` | `"dashed"` | `"dotted"`

The style of the element's stroke.

##### Default

```ts
"solid"
```

#### distanceMarker?

> `optional` **distanceMarker**: `boolean`

Whether a distance marker is shown at the midpoint of the path.

##### Default

```ts
false
```

#### routingMode?

> `optional` **routingMode**: `null` | `"driving"` | `"cycling"` | `"walking"` | `"flying"`

Whether this represents a route, and if so, what mode of transport
is used.

If this is `null`, the path is not considered to be a route, so while it
can have a `distanceMarker`, it will does not have a start or end cap.

##### Default

```ts
null
```

#### endCaps?

> `optional` **endCaps**: `boolean`

Whether or not to show Start and End caps on the path. This is
only available if the `routingMode` is set.

##### Default

```ts
false
```

#### coordinates?

> `optional` **coordinates**: [`LngLatTuple`](client.md#lnglattuple)\[]\[]

## PolygonElementUpdate

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

#### type

> **type**: `"Polygon"`

#### groupId?

> `optional` **groupId**: `null` | `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

#### color?

> `optional` **color**: `string`

The color of the element in some CSS-like format.

##### Example

```typescript
"#ABC123";
"rgb(255, 0, 0)";
"hsl(200, 100%, 50%)";
```

##### Default

```ts
"#C93535"
```

#### name?

> `optional` **name**: `null` | `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

#### description?

> `optional` **description**: `null` | `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

#### interaction?

> `optional` **interaction**: `"default"` | `"locked"`

Whether the element is interactive.

The `default` interaction mode means that the element can be selected and edited by
the user, if it was created by the SDK or by the user using a tool.

If the interaction mode is `locked`, the element will not be editable by the user,
which is often used for elements that you don't want the user to edit or move by
accident.

Elements that were created by the map author (i.e. not during an SDK "session") are
not editable and have special behaviour depending on their name, description and
attributes.

##### Default

```ts
"default"
```

#### imageUrl?

> `optional` **imageUrl**: `null` | `string`

The URL of an image that has been added to the element.

#### strokeOpacity?

> `optional` **strokeOpacity**: `number`

A value between 0 and 1 that describes the opacity of the element's stroke.

##### Default

```ts
1
```

#### strokeWidth?

> `optional` **strokeWidth**: `number`

The width of the element's stroke in pixels.

##### Default

```ts
2
```

#### strokeStyle?

> `optional` **strokeStyle**: `"solid"` | `"dashed"` | `"dotted"`

The style of the element's stroke.

##### Default

```ts
"solid"
```

#### fillOpacity?

> `optional` **fillOpacity**: `number`

The opacity of the polygon's fill, between 0 and 1.

##### Default

```ts
0.25
```

#### areaMarker?

> `optional` **areaMarker**: `boolean`

Whether to show an area marker on the polygon.

##### Default

```ts
false
```

#### coordinates?

> `optional` **coordinates**: [`LngLatTuple`](client.md#lnglattuple)\[]\[]

## CircleElementUpdate

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

#### type

> **type**: `"Circle"`

#### groupId?

> `optional` **groupId**: `null` | `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

#### color?

> `optional` **color**: `string`

The color of the element in some CSS-like format.

##### Example

```typescript
"#ABC123";
"rgb(255, 0, 0)";
"hsl(200, 100%, 50%)";
```

##### Default

```ts
"#C93535"
```

#### name?

> `optional` **name**: `null` | `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

#### description?

> `optional` **description**: `null` | `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

#### interaction?

> `optional` **interaction**: `"default"` | `"locked"`

Whether the element is interactive.

The `default` interaction mode means that the element can be selected and edited by
the user, if it was created by the SDK or by the user using a tool.

If the interaction mode is `locked`, the element will not be editable by the user,
which is often used for elements that you don't want the user to edit or move by
accident.

Elements that were created by the map author (i.e. not during an SDK "session") are
not editable and have special behaviour depending on their name, description and
attributes.

##### Default

```ts
"default"
```

#### imageUrl?

> `optional` **imageUrl**: `null` | `string`

The URL of an image that has been added to the element.

#### strokeOpacity?

> `optional` **strokeOpacity**: `number`

A value between 0 and 1 that describes the opacity of the element's stroke.

##### Default

```ts
1
```

#### strokeWidth?

> `optional` **strokeWidth**: `number`

The width of the element's stroke in pixels.

##### Default

```ts
2
```

#### strokeStyle?

> `optional` **strokeStyle**: `"solid"` | `"dashed"` | `"dotted"`

The style of the element's stroke.

##### Default

```ts
"solid"
```

#### radius?

> `optional` **radius**: `number`

The radius of the circle in meters.

#### radiusMarker?

> `optional` **radiusMarker**: `boolean`

Whether to show a marker on the circle that indicates the radius

##### Default

```ts
false
```

#### radiusDisplayAngle?

> `optional` **radiusDisplayAngle**: `number`

The angle at which the control point for setting the radius is displayed,
in degrees. When the `radiusMarker` is `true`, there is a dotted line rendered
from the center of the circle to the control point, and the marker is shown
at the midpoint of this line.

##### Default

```ts
90
```

#### radiusDisplayUnit?

> `optional` **radiusDisplayUnit**: `null` | `"meter"` | `"kilometer"` | `"foot"` | `"mile"`

The unit of the radius used when the `radiusMarker` is `true`.

A value of `null` means that the unit matches the user's locale.

##### Default

```ts
null
```

#### fillOpacity?

> `optional` **fillOpacity**: `number`

The opacity of the circle's fill.

##### Default

```ts
0.25
```

#### center?

> `optional` **center**: [`LngLatTuple`](client.md#lnglattuple)

The center of the circle.

## MarkerElementUpdate

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

#### type

> **type**: `"Marker"`

#### groupId?

> `optional` **groupId**: `null` | `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

#### color?

> `optional` **color**: `string`

The color of the element in some CSS-like format.

##### Example

```typescript
"#ABC123";
"rgb(255, 0, 0)";
"hsl(200, 100%, 50%)";
```

##### Default

```ts
"#C93535"
```

#### name?

> `optional` **name**: `null` | `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

#### description?

> `optional` **description**: `null` | `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

#### interaction?

> `optional` **interaction**: `"default"` | `"locked"`

Whether the element is interactive.

The `default` interaction mode means that the element can be selected and edited by
the user, if it was created by the SDK or by the user using a tool.

If the interaction mode is `locked`, the element will not be editable by the user,
which is often used for elements that you don't want the user to edit or move by
accident.

Elements that were created by the map author (i.e. not during an SDK "session") are
not editable and have special behaviour depending on their name, description and
attributes.

##### Default

```ts
"default"
```

#### opacity?

> `optional` **opacity**: `number`

The opacity of the marker, between 0 and 1.

##### Default

```ts
1
```

#### size?

> `optional` **size**: `number`

The size of the marker, used in conjunction with the `zoom` to determine
the actual size of the marker.

##### Default

```ts
10
```

#### zoom?

> `optional` **zoom**: `number`

The zoom level at which the marker was created. This is combined with
the `size` to determine the actual size of the marker.

When creating a marker, if you don't supply this value it defaults to
the current zoom of the map when you call `createElement`.

#### coordinates?

> `optional` **coordinates**: [`LngLatTuple`](client.md#lnglattuple)\[]\[]

## HighlighterElementUpdate

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

#### type

> **type**: `"Highlighter"`

#### groupId?

> `optional` **groupId**: `null` | `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

#### color?

> `optional` **color**: `string`

The color of the element in some CSS-like format.

##### Example

```typescript
"#ABC123";
"rgb(255, 0, 0)";
"hsl(200, 100%, 50%)";
```

##### Default

```ts
"#C93535"
```

#### name?

> `optional` **name**: `null` | `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

#### description?

> `optional` **description**: `null` | `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

#### interaction?

> `optional` **interaction**: `"default"` | `"locked"`

Whether the element is interactive.

The `default` interaction mode means that the element can be selected and edited by
the user, if it was created by the SDK or by the user using a tool.

If the interaction mode is `locked`, the element will not be editable by the user,
which is often used for elements that you don't want the user to edit or move by
accident.

Elements that were created by the map author (i.e. not during an SDK "session") are
not editable and have special behaviour depending on their name, description and
attributes.

##### Default

```ts
"default"
```

#### renderHoles?

> `optional` **renderHoles**: `boolean`

Whether to render the holes of the highlighted area.

##### Default

```ts
false
```

#### opacity?

> `optional` **opacity**: `number`

The opacity of the highlighter, between 0 and 1.

##### Default

```ts
0.5
```

#### coordinates?

> `optional` **coordinates**: [`LngLatTuple`](client.md#lnglattuple)\[]\[]\[]

A multipolygon describing the area that is highlighted.

If `renderHoles` is set to false, only the outer ring of each polygon
will be rendered, filling in the area inside the highlighted region.

## TextElementUpdate

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

#### type

> **type**: `"Text"`

#### groupId?

> `optional` **groupId**: `null` | `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

#### color?

> `optional` **color**: `string`

The color of the element in some CSS-like format.

##### Example

```typescript
"#ABC123";
"rgb(255, 0, 0)";
"hsl(200, 100%, 50%)";
```

##### Default

```ts
"#C93535"
```

#### description?

> `optional` **description**: `null` | `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

#### interaction?

> `optional` **interaction**: `"default"` | `"locked"`

Whether the element is interactive.

The `default` interaction mode means that the element can be selected and edited by
the user, if it was created by the SDK or by the user using a tool.

If the interaction mode is `locked`, the element will not be editable by the user,
which is often used for elements that you don't want the user to edit or move by
accident.

Elements that were created by the map author (i.e. not during an SDK "session") are
not editable and have special behaviour depending on their name, description and
attributes.

##### Default

```ts
"default"
```

#### rotation?

> `optional` **rotation**: `number`

The rotation of the element in degrees.

##### Default

```ts
0
```

#### scale?

> `optional` **scale**: `number`

The relative scale of the element from the default size. This is combined
with the `zoom` to determine the actual size of the element.

##### Default

```ts
1
```

#### zoom?

> `optional` **zoom**: `number`

The zoom level at which the element was created. This is combined with
the `scale` to determine the actual size of the element.

When creating an element, if you don't supply this value it defaults to
the current zoom of the map when you call `createElement`.

#### text?

> `optional` **text**: `string`

The text in the element.

#### align?

> `optional` **align**: `"center"` | `"left"` | `"right"`

The alignment of the text, either `left`, `center` or `right`.

##### Default

```ts
"center"
```

#### style?

> `optional` **style**: `"italic"` | `"light"` | `"regular"` | `"caps"`

The style of the text, either `italic`, `light`, `regular` or `caps`.

##### Default

```ts
"regular"
```

#### position?

> `optional` **position**: [`LngLatTuple`](client.md#lnglattuple)

The geographical position of the center of the text element.

## NoteElementUpdate

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

#### type

> **type**: `"Note"`

#### groupId?

> `optional` **groupId**: `null` | `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

#### color?

> `optional` **color**: `string`

The color of the element in some CSS-like format.

##### Example

```typescript
"#ABC123";
"rgb(255, 0, 0)";
"hsl(200, 100%, 50%)";
```

##### Default

```ts
"#C93535"
```

#### description?

> `optional` **description**: `null` | `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

#### interaction?

> `optional` **interaction**: `"default"` | `"locked"`

Whether the element is interactive.

The `default` interaction mode means that the element can be selected and edited by
the user, if it was created by the SDK or by the user using a tool.

If the interaction mode is `locked`, the element will not be editable by the user,
which is often used for elements that you don't want the user to edit or move by
accident.

Elements that were created by the map author (i.e. not during an SDK "session") are
not editable and have special behaviour depending on their name, description and
attributes.

##### Default

```ts
"default"
```

#### rotation?

> `optional` **rotation**: `number`

The rotation of the element in degrees.

##### Default

```ts
0
```

#### scale?

> `optional` **scale**: `number`

The relative scale of the element from the default size. This is combined
with the `zoom` to determine the actual size of the element.

##### Default

```ts
1
```

#### zoom?

> `optional` **zoom**: `number`

The zoom level at which the element was created. This is combined with
the `scale` to determine the actual size of the element.

When creating an element, if you don't supply this value it defaults to
the current zoom of the map when you call `createElement`.

#### text?

> `optional` **text**: `string`

The text in the element.

#### align?

> `optional` **align**: `"center"` | `"left"` | `"right"`

The alignment of the text, either `left`, `center` or `right`.

##### Default

```ts
"center"
```

#### style?

> `optional` **style**: `"italic"` | `"light"` | `"regular"` | `"caps"`

The style of the text, either `italic`, `light`, `regular` or `caps`.

##### Default

```ts
"regular"
```

#### widthScale?

> `optional` **widthScale**: `number`

#### position?

> `optional` **position**: [`LngLatTuple`](client.md#lnglattuple)

The geographical position of the center of the note element.

## ImageElementUpdate

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

#### type

> **type**: `"Image"`

#### groupId?

> `optional` **groupId**: `null` | `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

#### name?

> `optional` **name**: `null` | `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

#### description?

> `optional` **description**: `null` | `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

#### interaction?

> `optional` **interaction**: `"default"` | `"locked"`

Whether the element is interactive.

The `default` interaction mode means that the element can be selected and edited by
the user, if it was created by the SDK or by the user using a tool.

If the interaction mode is `locked`, the element will not be editable by the user,
which is often used for elements that you don't want the user to edit or move by
accident.

Elements that were created by the map author (i.e. not during an SDK "session") are
not editable and have special behaviour depending on their name, description and
attributes.

##### Default

```ts
"default"
```

#### coordinates?

> `optional` **coordinates**: \[`number`, `number`]\[]\[] = `MultiLineStringGeometrySchema.shape.coordinates`

#### imageUrl?

> `optional` **imageUrl**: `string`

The URL of the image that is rendered in this element

#### opacity?

> `optional` **opacity**: `number`

The opacity of the image, between 0 and 1.

##### Default

```ts
1
```

## ElementGroup

### Properties

#### id

> **id**: `string`

A string identifying the element group.

#### name

> **name**: `string`

The name of the element group. This is shown in the legend.

#### caption

> **caption**: `null` | `string`

The caption of the element group. This is shown in the legend.

#### elementIds

> **elementIds**: `string`\[]

The ids of the elements in the element group.

##### Remarks

You can use these ids to get the full element objects via the ElementsController.getElements | \`getElements\` method.

#### visible

> **visible**: `boolean`

Whether the element group is visible or not.

#### shownInLegend

> **shownInLegend**: `boolean`

Whether the element group is shown in the legend or not.

## GetElementsConstraint

The constraints to apply when getting elements.

### Properties

#### ids?

> `optional` **ids**: `string`\[]

The ids of the elements to get.

## GetElementGroupsConstraint

The constraints to apply when getting element groups.

### Properties

#### ids?

> `optional` **ids**: `string`\[]

The ids of the element groups to get.

## ElementChangeCallbackParams

The parameters for the ElementsController.onElementChange | \`onElementChange\` and the ElementsController.onElementCreate | \`onElementCreate\` listeners.

### Properties

#### element

> **element**: `null` | [`Element`](client.md#element-1)

The new data for the element or null if the element was removed.

#### isBeingCreated

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

## ElementGroupChangeCallbackParams

The parameters for the ElementsController.onElementGroupChange | \`onElementGroupChange\` listener.

### Properties

#### elementGroup

> **elementGroup**: `null` | [`ElementGroup`](client.md#elementgroup)

## MapInteractionEvent

The event object passed to the interaction listeners.

### Properties

#### coordinate

> **coordinate**: [`LatLng`](client.md#latlng)

The cursor position in world coordinates.

#### point

> **point**: `object`

The pixel coordinates of the mouse cursor, relative to the map and measured from the top left corner.

##### x

> **x**: `number`

##### y

> **y**: `number`

#### features

> **features**: [`LayerFeature`](client.md#layerfeature)\[]

The vector features that are under the cursor.

#### rasterValues

> **rasterValues**: [`RasterValue`](client.md#rastervalue)\[]

The raster pixel values that are under the cursor.

## LayerFeature

A LayerFeature is a single geographical item in a layer.

It is intended to be a lightweight object that contains the properties of a
feature, but not the geometry. It is returned by methods like
[FeltController.getRenderedFeatures](client.md#getrenderedfeatures) and [FeltController.getFeature](client.md#getfeature),
and as part of the methods in the SelectionController

The geometry can be obtained via the [FeltController.getGeoJsonFeature](client.md#getgeojsonfeature)
method, which returns a [GeoJsonFeature](client.md#geojsonfeature) object.

### Properties

#### id

> **id**: `string` | `number`

The identifier of the feature, unique within the layer.

#### isDeterministicId

> **isDeterministicId**: `boolean`

Whether the id is deterministic.

##### Remarks

If the id is deterministic, it means that the id can be used to reference the feature
in the layer and therefore in all the SDK feature-related methods.

When the id is not deterministic, the feature cannot be referenced on SDK methods like [FeltController.getFeature](client.md#getfeature)
or [SelectionController.selectFeature](client.md#selectfeature).

For layers created and processed on Felt servers, the feature IDs are deterministic because Felt ensures every feature is correctly identified in vector tiles.
This cannot be guaranteed for layers created using a GeoJSON source on the SDK (see [LayersController.createLayersFromGeoJson](client.md#createlayersfromgeojson))
where the ID will only be deterministic if GeoJSON features have an `id` property.

#### layerId

> **layerId**: `string`

The identifier of the layer that the feature belongs to.

#### geometryType

> **geometryType**: `"Polygon"` | `"MultiPolygon"` | `"LineString"` | `"MultiLineString"` | `"Point"` | `"MultiPoint"` | `string` & `object`

The type of geometry of the feature.

##### Remarks

Because LayerFeatures can be read from tiled features, it's
possible that this `geometryType` won't match the `geometry.type` of the
[GeoJsonFeature](client.md#geojsonfeature) returned by [FeltController.getGeoJsonFeature](client.md#getgeojsonfeature).

For example, this may return `LineString` but the full feature is a `MultiLineString`,
or, similarly `Polygon` here may be a `MultiPolygon` in the full feature.

As a result, you should treat this property as being indicative only.

#### bbox

> **bbox**: `undefined` | \[`number`, `number`, `number`, `number`]

The bounding box of the feature.

##### Remarks

Because LayerFeatures can be read from tiled features and considering
that feature geometry can go through multiple tiles, it's possible that this
is not the complete bounding box of the feature.

#### properties

> **properties**: [`GeoJsonProperties`](client.md#geojsonproperties)

The properties of the feature, as a bag of attributes.

## RasterValue

A raster pixel value for a specific layer.

### Properties

#### value

> **value**: `number`

The value of the pixel.

#### layerId

> **layerId**: `string`

The ID of the layer that the pixel belongs to.

#### categoryName

> **categoryName**: `null` | `string`

The name of the category that the pixel belongs to.

#### color

> **color**: `null` | \{ `r`: `number`; `g`: `number`; `b`: `number`; `a`: `number`; }

The color of the pixel. Each value is between 0 and 255.

## LayerFilters

The filters that are currently set on a layer.

A layer's filters are the combination of various different places
in which filters can be applied.

### Properties

#### style

> **style**: [`Filters`](client.md#filters)

Filters that are set in the layer's style. These are the lowest level
of filters, and can only be set by editing the map.

#### components

> **components**: [`Filters`](client.md#filters)

Filters that are set in the layer's components, which are interactive
elements in the legend. These can be set by viewers for their own session,
but their default value can be set by the map creator.

#### ephemeral

> **ephemeral**: [`Filters`](client.md#filters)

Filters that are set ephemerally by viewers in their own session.

These are the filters that are set when the LayersController.setLayerFilters | \`setLayerFilters\` method is
called. There is no way to set these in the Felt UI - they can only be
set using the SDK.

#### combined

> **combined**: [`Filters`](client.md#filters)

The combined result of all the filters set on the layer.

## LayerBoundaries

All the different sources for boundaries for a layer, including their combined result.

### Properties

#### spatialFilters

> **spatialFilters**: `null` | [`MultiPolygonGeometry`](client.md#multipolygongeometry)

Boundaries set by drawing spatial filters on the map.

When there are multiple spatial filters, they are combined into a multi-polygon.

#### ephemeral

> **ephemeral**: `null` | [`GeometryFilter`](client.md#geometryfilter)

Boundaries that are set ephemerally by viewers in their own session.

These are the filters that are set when the LayersController.setLayerBoundary
method is called. There is no way to set these in the Felt UI - they can only be
set using the SDK.

#### combined

> **combined**: `null` | [`MultiPolygonGeometry`](client.md#multipolygongeometry)

The combined result of all the boundaries set on the layer.

Each different source of boundary is intersected to produce the combined result.

## AggregationConfig

Defines how to aggregate a value across features in a layer.

### Properties

#### attribute

> **attribute**: `string`

The attribute to use for the aggregation. This must be a numeric attribute.

#### method

> **method**: `"avg"` | `"max"` | `"min"` | `"sum"` | `"median"`

The method to use for the aggregation.

## MultiAggregationConfig\<T>

Defines how to aggregate a value across features in a layer with multiple aggregations
returned at once.

### Type Parameters

• **T** *extends* [`AggregationMethod`](client.md#aggregationmethod) | `"count"`

### Properties

#### methods

> **methods**: `T`\[]

The operations to use on the values from the features in the layer

#### attribute?

> `optional` **attribute**: `string`

The attribute ID to use for the aggregation when aggregations other than "count" are used.

This can be omitted if the only aggregation is "count", but must be a numeric attribute
otherwise.

Use `getLayerSchema` to get the attributes available for a layer.

## ValueConfiguration

Configuration for filtering and aggregating values across features.

This can be used to restrict the features considered for aggregation via the `boundary`
and `filters` properties.

It can also be used to specify how to aggregate the values via the `aggregation` property.

### Properties

#### boundary?

> `optional` **boundary**: [`GeometryFilter`](client.md#geometryfilter)

The spatial boundary for what to count or aggregate.

#### filters?

> `optional` **filters**: [`Filters`](client.md#filters)

Attribute filters to determine what gets counted or aggregated.

#### aggregation?

> `optional` **aggregation**: [`AggregationConfig`](client.md#aggregationconfig)

Specifies how to aggregate values within each category or bin. When omitted,
features are counted. When specified, the chosen calculation (avg, sum, etc.)
is performed on the specified attribute.

For example, instead of counting buildings in each category, you might want
to sum their square footage or average their assessed values.

## GetLayerCategoriesParams

The parameters for getting categories from a layer, passed to
the [LayersController.getCategoryData](client.md#getcategorydata) method.

### Properties

#### layerId

> **layerId**: `string`

The ID of the layer to get categories from.

#### attribute

> **attribute**: `string`

The attribute to use for categorization.

#### limit?

> `optional` **limit**: `number`

The maximum number of categories to return.

#### filters?

> `optional` **filters**: [`Filters`](client.md#filters)

Attribute filters for the features to include when calculating the categories.

#### boundary?

> `optional` **boundary**: [`GeometryFilter`](client.md#geometryfilter)

The spatial boundary for the features to include when calculating the categories.

#### values?

> `optional` **values**: [`ValueConfiguration`](client.md#valueconfiguration)

Configuration for filtering and aggregating values while preserving the full set of
categories in the results.

This is particularly useful when you want to compare different subsets of data while
maintaining consistent categories. For example:

* Show all building types in a city, but only count recent buildings in each type
* Keep all neighborhood categories but only sum up residential square footage

Unlike top-level filters which affect both what categories appear AND their values,
filters in this configuration only affect the values while keeping all possible
categories in the results.

## GetLayerCategoriesGroup

A single category from the response from the [LayersController.getCategoryData](client.md#getcategorydata) method.

### Properties

#### key

> **key**: `string` | `number` | `boolean`

The category for which the value was calculated.

#### value

> **value**: `null` | `number`

The value calculated for the category, whether a count, sum, average, etc.

`null` is returned if there are no features in the category as opposed to zero,
so as not to confuse with a real zero value from some aggregation.

## GetLayerHistogramParams

The params used to request a histogram of values from a layer, passed to
the [LayersController.getHistogramData](client.md#gethistogramdata) method.

### Properties

#### layerId

> **layerId**: `string`

#### attribute

> **attribute**: `string`

#### steps

> **steps**: `number`\[] | \{ `type`: `"equal-intervals"`; `count`: `number`; } | \{ `type`: `"time-interval"`; `interval`: `"hour"` | `"day"` | `"week"` | `"month"` | `"year"`; }

#### values?

> `optional` **values**: `object`

Configuration for filtering and aggregating values while preserving the full set of
bin ranges in the results.

This is particularly useful when you want to compare different subsets of data while
maintaining consistent ranges. For example:

* Use the same height ranges for comparing old vs new buildings

Unlike top-level filters which affect both what ranges appear AND their values,
filters in this configuration only affect the values while keeping all possible
ranges in the results.

##### boundary?

> `optional` **boundary**: \[`number`, `number`]\[] | \[`number`, `number`, `number`, `number`] | \{ `type`: `"Polygon"`; `coordinates`: \[`number`, `number`]\[]\[]; } | \{ `type`: `"MultiPolygon"`; `coordinates`: \[`number`, `number`]\[]\[]\[]; }

##### Type declaration

\[`number`, `number`]\[]

\[`number`, `number`, `number`, `number`]

\{ `type`: `"Polygon"`; `coordinates`: \[`number`, `number`]\[]\[]; }

\{ `type`: `"MultiPolygon"`; `coordinates`: \[`number`, `number`]\[]\[]\[]; }

##### filters?

> `optional` **filters**: `null` | `boolean` | \[`null` | `string`, `"in"` | `"ni"`, `null` | (`null` | `string` | `number` | `boolean`)\[]] | \[`null` | `string`, `"lt"` | `"gt"` | `"le"` | `"ge"` | `"eq"` | `"ne"` | `"cn"` | `"nc"` | `"is"` | `"isnt"`, `null` | `string` | `number` | `boolean`] | [`FilterTernary`](client.md#filterternary)

##### aggregation?

> `optional` **aggregation**: `object`

##### aggregation.method

> **method**: `"avg"` | `"max"` | `"min"` | `"sum"` | `"median"` = `AggregateMethodSchema`

The operation to use on the values from the features in the layer

##### aggregation.attribute

> **attribute**: `string`

The attribute to use for the aggregation. This must be a numeric attribute.

#### filters?

> `optional` **filters**: [`Filters`](client.md#filters)

Attribute filters for the features to include when calculating the histogram bins.

#### boundary?

> `optional` **boundary**: [`GeometryFilter`](client.md#geometryfilter)

The spatial boundary for the features to include when calculating the histogram bins.

## GetLayerHistogramBin

One bin from the response from the [LayersController.getHistogramData](client.md#gethistogramdata) method.

### Properties

#### min

> **min**: `number`

The left edge of the bin.

#### max

> **max**: `number`

The right edge of the bin.

#### value

> **value**: `number`

The number of features in the bin.

## GetLayerCalculationParams\<T>

The parameters for calculating a single aggregate value for a layer, passed to
the [LayersController.getAggregates](client.md#getaggregates) method.

### Type Parameters

• **T** *extends* [`AggregationMethod`](client.md#aggregationmethod) | `"count"`

### Properties

#### layerId

> **layerId**: `string`

The ID of the layer to calculate an aggregate value for.

#### aggregation

> **aggregation**: [`MultiAggregationConfig`](client.md#multiaggregationconfigt)\<`T`>

Specifies how to aggregate values within each category or bin. When omitted,
features are counted. When specified, the chosen calculation (avg, sum, etc.)
is performed on the specified attribute.

#### filters?

> `optional` **filters**: [`Filters`](client.md#filters)

Attribute filters for the features to include when calculating the aggregate value.

#### boundary?

> `optional` **boundary**: [`GeometryFilter`](client.md#geometryfilter)

The spatial boundary for the features to include when calculating the aggregate value.

## CountGridConfig

The grid configuration for a count-based precomputed aggregate value. Compared to the
[AggregatedGridConfig](client.md#aggregatedgridconfig), the `attribute` property is not required, because the count
is the same regardless of the attribute.

Used inside [GetLayerPrecomputedCalculationParams](client.md#getlayerprecomputedcalculationparams).

### Properties

#### resolution

> **resolution**: `number`

The resolution of the grid to use for the precomputed calculation.

#### type

> **type**: `"h3"`

The type of grid to use for the precomputed calculation.

#### method

> **method**: `"count"`

The method to use for the precomputed calculation, which in this case is always "count".

## AggregatedGridConfig

The grid configuration for an aggregated precomputed aggregate value. This requires
an `attribute` property, because the numeric aggregation requires it.

If you just want to count the features in each grid cell, use the [CountGridConfig](client.md#countgridconfig)
instead, where you are not required to specify an `attribute`.

Used inside [GetLayerPrecomputedCalculationParams](client.md#getlayerprecomputedcalculationparams).

### Properties

#### resolution

> **resolution**: `number`

The resolution of the grid to use for the precomputed calculation.

#### attribute

> **attribute**: `string`

The attribute to use for the precomputed calculation.

This must be a numeric attribute;

#### type

> **type**: `"h3"`

The type of grid to use for the precomputed calculation.

#### method

> **method**: `"avg"` | `"max"` | `"min"` | `"sum"`

The method to use for the precomputed calculation.

## GetLayerPrecomputedCalculationParams

The parameters for calculating a single aggregate value for a layer, passed to
the [LayersController.getPrecomputedAggregates](client.md#getprecomputedaggregates) method.

### Properties

#### layerId

> **layerId**: `string`

The ID of the layer to calculate an aggregate value for.

#### gridConfig

> **gridConfig**: [`GridConfig`](client.md#gridconfig-1)

The grid configuration to use for the precomputed calculation.

#### filters?

> `optional` **filters**: [`Filters`](client.md#filters)

Attribute filters for the features to include when calculating the aggregate value.

#### boundary?

> `optional` **boundary**: [`GeometryFilter`](client.md#geometryfilter)

The spatial boundary for the features to include when calculating the aggregate value.

## LayerCommon

The common properties for all layers.

### Properties

#### id

> **id**: `string`

A string identifying the layer

#### groupId

> **groupId**: `null` | `string`

The ID of the layer group that the layer belongs to.

Layers that appear at the root level in Felt will not have a group ID.

#### name

> **name**: `string`

The name of the layer can be displayed in the Legend, depending
on how the layer's legend is configured in its style.

#### caption

> **caption**: `null` | `string`

The layer's caption is shown in the legend.

#### description

> **description**: `null` | `string`

The layer description forms part of the layer's metadata. This is visible
to users via the layer info button in the legend.

#### visible

> **visible**: `boolean`

Whether the layer is visible or not.

#### shownInLegend

> **shownInLegend**: `boolean`

Whether the layer is shown in the legend or not.

#### style

> **style**: `object`

The FSL style for the layer.

See the [FSL documentation](https://developers.felt.com/felt-style-language) for details
on how to read and write styles.

As the types of the styles are very complex, we return `object` here and advise that you
program defensively while reading the styles.

#### status

> **status**: `"processing"` | `"completed"` | `"failed"` | `"incomplete"`

The current processing status of the layer.

#### bounds

> **bounds**: `null` | \[`number`, `number`, `number`, `number`]

The bounding box of the layer in \[west, south, east, north] order

There are cases where the bounds are not available, such as for layers added to the map
from URL sources, as these are not (depending on their type) processed and analyzed by
Felt.

[FeltBoundary](client.md#feltboundary)

## RasterLayer

A raster layer is a layer that contains raster data that can be rendered on the map

### Properties

#### id

> **id**: `string`

A string identifying the layer

#### groupId

> **groupId**: `null` | `string`

The ID of the layer group that the layer belongs to.

Layers that appear at the root level in Felt will not have a group ID.

#### name

> **name**: `string`

The name of the layer can be displayed in the Legend, depending
on how the layer's legend is configured in its style.

#### caption

> **caption**: `null` | `string`

The layer's caption is shown in the legend.

#### description

> **description**: `null` | `string`

The layer description forms part of the layer's metadata. This is visible
to users via the layer info button in the legend.

#### visible

> **visible**: `boolean`

Whether the layer is visible or not.

#### shownInLegend

> **shownInLegend**: `boolean`

Whether the layer is shown in the legend or not.

#### style

> **style**: `object`

The FSL style for the layer.

See the [FSL documentation](https://developers.felt.com/felt-style-language) for details
on how to read and write styles.

As the types of the styles are very complex, we return `object` here and advise that you
program defensively while reading the styles.

#### status

> **status**: `"processing"` | `"completed"` | `"failed"` | `"incomplete"`

The current processing status of the layer.

#### bounds

> **bounds**: `null` | \[`number`, `number`, `number`, `number`]

The bounding box of the layer in \[west, south, east, north] order

There are cases where the bounds are not available, such as for layers added to the map
from URL sources, as these are not (depending on their type) processed and analyzed by
Felt.

[FeltBoundary](client.md#feltboundary)

#### geometryType

> **geometryType**: `"Raster"`

Identifies the type of geometry in the layer.

#### source

> **source**: [`RasterLayerSource`](client.md#rasterlayersource)

The source of the raster layer's data.

## RasterLayerSource

The source of a raster layer's data.

### Properties

#### imageTileTemplateUrl

> **imageTileTemplateUrl**: `string`

A URL template for fetching image tiles for the raster.

#### encodedTileTemplateUrl

> **encodedTileTemplateUrl**: `string`

A URL template for fetching encoded tiles for the raster.

The encoded raster value can be calculated from the red, green, and blue values of the pixel
using the following formula:

```
base + ((RED << 16) + (GREEN <<8) + BLUE) * interval
```

or

```
base + (RED * 256 * 256 + GREEN * 256 + BLUE) * interval
```

#### bands

> **bands**: [`RasterBand`](client.md#rasterband)\[]

List of encoded raster bands

## RasterBand

The RasterBand interface describes the metadata for a raster band, necessary for
calculating the encoded raster value from the red, green, and blue values of the pixel.

### Properties

#### base

> **base**: `number`

Encoding base value as a floating point number

#### interval

> **interval**: `number`

Encoding interval as a floating point number

#### bandIndex

> **bandIndex**: `number`

1-based index of the band in the raster

## VectorLayer

A vector layer is a layer that contains vector data that can be rendered on the map

### Properties

#### id

> **id**: `string`

A string identifying the layer

#### groupId

> **groupId**: `null` | `string`

The ID of the layer group that the layer belongs to.

Layers that appear at the root level in Felt will not have a group ID.

#### name

> **name**: `string`

The name of the layer can be displayed in the Legend, depending
on how the layer's legend is configured in its style.

#### caption

> **caption**: `null` | `string`

The layer's caption is shown in the legend.

#### description

> **description**: `null` | `string`

The layer description forms part of the layer's metadata. This is visible
to users via the layer info button in the legend.

#### visible

> **visible**: `boolean`

Whether the layer is visible or not.

#### shownInLegend

> **shownInLegend**: `boolean`

Whether the layer is shown in the legend or not.

#### style

> **style**: `object`

The FSL style for the layer.

See the [FSL documentation](https://developers.felt.com/felt-style-language) for details
on how to read and write styles.

As the types of the styles are very complex, we return `object` here and advise that you
program defensively while reading the styles.

#### status

> **status**: `"processing"` | `"completed"` | `"failed"` | `"incomplete"`

The current processing status of the layer.

#### bounds

> **bounds**: `null` | \[`number`, `number`, `number`, `number`]

The bounding box of the layer in \[west, south, east, north] order

There are cases where the bounds are not available, such as for layers added to the map
from URL sources, as these are not (depending on their type) processed and analyzed by
Felt.

[FeltBoundary](client.md#feltboundary)

#### geometryType

> **geometryType**: `"Polygon"` | `"Point"` | `"Line"`

Identifies the type of geometry in the layer.

#### source

> **source**: [`GeoJsonUrlVectorSource`](client.md#geojsonurlvectorsource) | [`FeltTiledVectorSource`](client.md#felttiledvectorsource) | `Omit`\<[`GeoJsonDataVectorSource`](client.md#geojsondatavectorsource), `"data"`>

The source of the vector layer's data.

## GeoJsonUrlVectorSource

A GeoJSON URL source is a layer that is populated from a GeoJSON file at a remote URL.

These sources are ones that have not been uploaded to and processed by Felt, and as such
their capabilities are limited.

For instance, they cannot be filtered, nor can statistics be fetched for them.

### Properties

#### type

> **type**: `"geoJsonUrl"`

Identifies this as a GeoJSON URL source.

#### url

> **url**: `string`

The remote URL of the GeoJSON file used to populate the layer.

#### refreshInterval?

> `optional` **refreshInterval**: `null` | `number`

The interval in milliseconds between automatic refreshes of the GeoJSON.

The value must be in the range of 250ms - 5 minutes (300,000ms).

If the value is `null`, the GeoJSON will not be refreshed automatically.

## GeoJsonDataVectorSource

A GeoJSON data source is a layer that is populated from GeoJSON data, such as
from a local file, or programatically-created data.

### Properties

#### type

> **type**: `"geoJsonData"`

Identifies this as a GeoJSON data source.

#### data

> **data**: `object`

The GeoJSON data for the layer.

This must be a GeoJSON FeatureCollection.

## GeoJsonFileVectorSource

A GeoJSON file source is a layer that is populated from a GeoJSON file
on your local machine.

This is an input-only type. It is converted to a [GeoJsonDataVectorSource](client.md#geojsondatavectorsource)
when passed to [LayersController.createLayersFromGeoJson](client.md#createlayersfromgeojson).

### Properties

#### type

> **type**: `"geoJsonFile"`

Identifies this as a GeoJSON file source.

#### file

> **file**: `File`

The GeoJSON file for the layer.

## UpdateLayerParams

The value you need to pass to [LayersController.updateLayer](client.md#updatelayer)

### Properties

#### id

> **id**: `string`

The id of the layer to update.

#### shownInLegend?

> `optional` **shownInLegend**: `boolean`

Changes whether the layer is shown in the legend.

#### name?

> `optional` **name**: `string`

Changes the name of the layer.

#### caption?

> `optional` **caption**: `string`

Changes the caption of the layer.

#### description?

> `optional` **description**: `string`

Changes the description of the layer.

#### bounds?

> `optional` **bounds**: \[`number`, `number`, `number`, `number`]

Changes the bounds of the layer.

#### style?

> `optional` **style**: `object`

The style of the layer.

#### source?

> `optional` **source**: [`GeoJsonUrlVectorSource`](client.md#geojsonurlvectorsource) | [`GeoJsonDataVectorSource`](client.md#geojsondatavectorsource) | [`GeoJsonFileVectorSource`](client.md#geojsonfilevectorsource)

Updates the source of the layer.

Only layers that have a GeoJSON source can have their source udpated.

For URL sources, if you pass the same URL again it will cause the data to be
refreshed.

## DataOnlyLayer

A data-only layer doesn't have any geometry, but can be used to join with other layers

### Properties

#### id

> **id**: `string`

A string identifying the layer

#### groupId

> **groupId**: `null` | `string`

The ID of the layer group that the layer belongs to.

Layers that appear at the root level in Felt will not have a group ID.

#### name

> **name**: `string`

The name of the layer can be displayed in the Legend, depending
on how the layer's legend is configured in its style.

#### caption

> **caption**: `null` | `string`

The layer's caption is shown in the legend.

#### description

> **description**: `null` | `string`

The layer description forms part of the layer's metadata. This is visible
to users via the layer info button in the legend.

#### visible

> **visible**: `boolean`

Whether the layer is visible or not.

#### shownInLegend

> **shownInLegend**: `boolean`

Whether the layer is shown in the legend or not.

#### style

> **style**: `object`

The FSL style for the layer.

See the [FSL documentation](https://developers.felt.com/felt-style-language) for details
on how to read and write styles.

As the types of the styles are very complex, we return `object` here and advise that you
program defensively while reading the styles.

#### status

> **status**: `"processing"` | `"completed"` | `"failed"` | `"incomplete"`

The current processing status of the layer.

#### geometryType

> **geometryType**: `null`

Indicates that this layer has no geometry.

#### bounds

> **bounds**: `null`

This is always null for data-only layers.

## LayerGroup

### Properties

#### id

> **id**: `string`

A string identifying the layer group.

#### name

> **name**: `string`

The name of the layer group. This is shown in the legend.

#### caption

> **caption**: `null` | `string`

The caption of the layer group. This is shown in the legend.

#### layerIds

> **layerIds**: `string`\[]

The ids of the layers in the layer group.

##### Remarks

You can use these ids to get the full layer objects via the [\`getLayers\`](client.md#getlayers) method.

#### visible

> **visible**: `boolean`

Whether the layer group is visible or not.

#### shownInLegend

> **shownInLegend**: `boolean`

Whether the layer group is shown in the legend or not.

#### bounds

> **bounds**: `null` | \[`number`, `number`, `number`, `number`]

The bounding box of the layer group in \[west, south, east, north] order.

[FeltBoundary](client.md#feltboundary)

## GetLayersConstraint

The constraints to apply when getting layers.

### Properties

#### ids?

> `optional` **ids**: `string`\[]

The ids of the layers to get.

## GetLayerGroupsConstraint

The constraints to apply when getting layer groups.

### Properties

#### ids?

> `optional` **ids**: `string`\[]

The ids of the layer groups to get.

## LayerChangeCallbackParams

The parameters for the [\`onLayerChange\`](client.md#onlayerchange) listener.

### Properties

#### layer

> **layer**: `null` | [`Layer`](client.md#layer-1)

The new data for the layer or null if the layer was removed.

## LayerGroupChangeCallbackParams

The parameters for the [\`onLayerGroupChange\`](client.md#onlayergroupchange) listener.

### Properties

#### layerGroup

> **layerGroup**: `null` | [`LayerGroup`](client.md#layergroup)

## LegendItem

A legend item, which often represents a sub-class of features in a
layer in the case of categorical or classed layers.

### Properties

#### title

> **title**: `string` | `string`\[]

The title of the legend item.

#### titleDependsOnZoom

> **titleDependsOnZoom**: `boolean`

Whether the title depends on the zoom level or not. If it does, you
need to call [\`getLegendItem\`](client.md#getlegenditem) when the zoom level changes.

Note that as the zoom level changes, the [\`onLegendItemChange\`](client.md#onlegenditemchange) handler
will not be called, so you need to call [\`getLegendItem\`](client.md#getlegenditem) yourself.

#### visible

> **visible**: `boolean`

Whether the legend item is visible or not.

#### id

> **id**: `string`

The id of the legend item.

#### layerId

> **layerId**: `string`

The id of the layer the legend item belongs to.

## LegendItemIdentifier

The identifier for a legend item. It is a compound key of the layer to
which the legend item belongs and the legend item's own id.

### Properties

#### id

> **id**: `string`

The id of the legend item.

#### layerId

> **layerId**: `string`

The id of the layer the legend item belongs to.

## LegendItemsConstraint

Constraints for legend items. If nothing is passed, all legend items will be returned.

### Properties

#### ids?

> `optional` **ids**: `object`\[]

Array of legend item identifiers to constrain by.

##### id

> **id**: `string`

The id of the legend item.

##### layerId

> **layerId**: `string`

The id of the layer the legend item belongs to.

#### layerIds?

> `optional` **layerIds**: `string`\[]

Array of layer ids to constrain legend items by.

## LegendItemChangeCallbackParams

The parameters for the [\`onLegendItemChange\`](client.md#onlegenditemchange) listener.

### Properties

#### legendItem

> **legendItem**: `null` | [`LegendItem`](client.md#legenditem)

The new data for the legend item or null if the legend item was removed.

## GetRenderedFeaturesConstraint

Constraints for the [\`getRenderedFeatures\`](client.md#getrenderedfeatures) method. This can include layer constriants, spatial constraints, or both. If no constraints are
provided, all rendered features will be returned.

### Properties

#### areaQuery?

> `optional` **areaQuery**: \{ `coordinates`: [`LatLng`](client.md#latlng); } | \{ `boundary`: \[`number`, `number`, `number`, `number`]; }

The area to query for rendered features. This can be specific coordinates or a [FeltBoundary](client.md#feltboundary). If omitted, the entire viewport will be queried.

#### layerIds?

> `optional` **layerIds**: `string`\[]

The ids of the layers to get rendered features for.

## LayerSchema

The schema that describes the structure of the features in a layer.

### Remarks

This can be useful to build generic UIs that need to know the structure of the data in
a layer, such as a dropdown to choose an attribute.

### Properties

#### featureCount

> **featureCount**: `number`

The total number of features in the layer.

#### attributes

> **attributes**: [`LayerSchemaAttribute`](client.md#layerschemaattribute)\[]

Array of attribute schemas describing the properties available on features in this layer.

## LayerSchemaCommonAttribute

The common schema for all attributes.

### Properties

#### id

> **id**: `string`

The unique identifier for this attribute.

This can be used to fetch statistics, categories, histograms etc. for this attribute
via the [LayersController.getCategoryData](client.md#getcategorydata), [LayersController.getHistogramData](client.md#gethistogramdata),
and [LayersController.getAggregates](client.md#getaggregates) methods.

#### displayName

> **displayName**: `string`

The human-readable name of this attribute.

#### detailedType

> **detailedType**: `string`

The specific data type of this attribute, providing more detail than the basic type.

For instance, a numeric attribute might be "INTEGER", "FLOAT, etc.

#### distinctCount

> **distinctCount**: `number`

The number of distinct values present for this attribute across all features.

## LayerSchemaNumericAttribute

The schema for a numeric attribute on a layer.

### Properties

#### id

> **id**: `string`

The unique identifier for this attribute.

This can be used to fetch statistics, categories, histograms etc. for this attribute
via the [LayersController.getCategoryData](client.md#getcategorydata), [LayersController.getHistogramData](client.md#gethistogramdata),
and [LayersController.getAggregates](client.md#getaggregates) methods.

#### displayName

> **displayName**: `string`

The human-readable name of this attribute.

#### detailedType

> **detailedType**: `string`

The specific data type of this attribute, providing more detail than the basic type.

For instance, a numeric attribute might be "INTEGER", "FLOAT, etc.

#### distinctCount

> **distinctCount**: `number`

The number of distinct values present for this attribute across all features.

#### type

> **type**: `"numeric"`

Indicates this is a numeric attribute.

#### sampleValues

> **sampleValues**: `object`\[]

A small sample of values for this attribute and their frequency.

##### value

> **value**: `number`

##### count

> **count**: `number`

#### min

> **min**: `number`

The minimum value present for this attribute across all features.

#### max

> **max**: `number`

The maximum value present for this attribute across all features.

## LayerSchemaTextAttribute

The schema for a text attribute on a layer.

### Properties

#### id

> **id**: `string`

The unique identifier for this attribute.

This can be used to fetch statistics, categories, histograms etc. for this attribute
via the [LayersController.getCategoryData](client.md#getcategorydata), [LayersController.getHistogramData](client.md#gethistogramdata),
and [LayersController.getAggregates](client.md#getaggregates) methods.

#### displayName

> **displayName**: `string`

The human-readable name of this attribute.

#### detailedType

> **detailedType**: `string`

The specific data type of this attribute, providing more detail than the basic type.

For instance, a numeric attribute might be "INTEGER", "FLOAT, etc.

#### distinctCount

> **distinctCount**: `number`

The number of distinct values present for this attribute across all features.

#### type

> **type**: `"text"`

Indicates this is a text attribute.

#### sampleValues

> **sampleValues**: `object`\[]

A small sample of string values for this attribute and their frequency.

##### value

> **value**: `string`

##### count

> **count**: `number`

## LayerSchemaBooleanAttribute

The schema for a boolean attribute on a layer.

### Properties

#### id

> **id**: `string`

The unique identifier for this attribute.

This can be used to fetch statistics, categories, histograms etc. for this attribute
via the [LayersController.getCategoryData](client.md#getcategorydata), [LayersController.getHistogramData](client.md#gethistogramdata),
and [LayersController.getAggregates](client.md#getaggregates) methods.

#### displayName

> **displayName**: `string`

The human-readable name of this attribute.

#### detailedType

> **detailedType**: `string`

The specific data type of this attribute, providing more detail than the basic type.

For instance, a numeric attribute might be "INTEGER", "FLOAT, etc.

#### distinctCount

> **distinctCount**: `number`

The number of distinct values present for this attribute across all features.

#### type

> **type**: `"boolean"`

Indicates this is a boolean attribute.

#### sampleValues

> **sampleValues**: `object`\[]

A representative sample of boolean values for this attribute and their frequency.

##### value

> **value**: `boolean`

##### count

> **count**: `number`

## LayerSchemaDateAttribute

The schema for a date attribute on a layer.

### Properties

#### id

> **id**: `string`

The unique identifier for this attribute.

This can be used to fetch statistics, categories, histograms etc. for this attribute
via the [LayersController.getCategoryData](client.md#getcategorydata), [LayersController.getHistogramData](client.md#gethistogramdata),
and [LayersController.getAggregates](client.md#getaggregates) methods.

#### displayName

> **displayName**: `string`

The human-readable name of this attribute.

#### detailedType

> **detailedType**: `string`

The specific data type of this attribute, providing more detail than the basic type.

For instance, a numeric attribute might be "INTEGER", "FLOAT, etc.

#### distinctCount

> **distinctCount**: `number`

The number of distinct values present for this attribute across all features.

#### type

> **type**: `"date"`

Indicates this is a date attribute.

#### min

> **min**: `string`

The earliest date present for this attribute in truncated ISO8601 format (YYYY-MM-DD).

#### max

> **max**: `string`

The latest date present for this attribute in truncated ISO8601 format (YYYY-MM-DD).

#### sampleValues

> **sampleValues**: `object`\[]

A representative sample of date values for this attribute and their frequency.

##### value

> **value**: `string`

##### count

> **count**: `number`

## LayerSchemaDateTimeAttribute

The schema for a datetime attribute on a layer.

### Properties

#### id

> **id**: `string`

The unique identifier for this attribute.

This can be used to fetch statistics, categories, histograms etc. for this attribute
via the [LayersController.getCategoryData](client.md#getcategorydata), [LayersController.getHistogramData](client.md#gethistogramdata),
and [LayersController.getAggregates](client.md#getaggregates) methods.

#### displayName

> **displayName**: `string`

The human-readable name of this attribute.

#### detailedType

> **detailedType**: `string`

The specific data type of this attribute, providing more detail than the basic type.

For instance, a numeric attribute might be "INTEGER", "FLOAT, etc.

#### distinctCount

> **distinctCount**: `number`

The number of distinct values present for this attribute across all features.

#### type

> **type**: `"datetime"`

Indicates this is a datetime attribute.

#### min

> **min**: `string`

The earliest datetime present for this attribute in ISO8601 format.

#### max

> **max**: `string`

The latest datetime present for this attribute in ISO8601 format.

#### sampleValues

> **sampleValues**: `object`\[]

A representative sample of datetime values for this attribute and their frequency.

##### value

> **value**: `string`

##### count

> **count**: `number`

## CreateLayersFromGeoJsonParams

The parameters for the [LayersController.createLayersFromGeoJson](client.md#createlayersfromgeojson) method.

### Properties

#### name

> **name**: `string`

The name of the layer to create.

#### source

> **source**: [`GeoJsonUrlVectorSource`](client.md#geojsonurlvectorsource) | [`GeoJsonDataVectorSource`](client.md#geojsondatavectorsource) | [`GeoJsonFileVectorSource`](client.md#geojsonfilevectorsource)

The source of the GeoJSON data.

#### bounds?

> `optional` **bounds**: \[`number`, `number`, `number`, `number`]

Sets the bounds of the layer.

#### caption?

> `optional` **caption**: `string`

Sets the caption of the layer.

#### description?

> `optional` **description**: `string`

Sets the description of the layer.

#### geometryStyles?

> `optional` **geometryStyles**: `object`

The styles to apply to each geometry on the layer.

Each style should be a valid FSL style, as described in [Layer.style](client.md#style-9).

These are optional, and if missing will use a default style determined by
Felt, which you can consider to be undefined behaviour.

##### Point?

> `optional` **Point**: `object`

##### Line?

> `optional` **Line**: `object`

##### Polygon?

> `optional` **Polygon**: `object`

##### Example

```typescript
const layer = await layersController.createLayersFromGeoJson({
  name: "My Layer",
  geometryStyles: {
    Point: {
      paint: { color: "red", size: 8 },
    },
    Line: {
      paint: { color: "blue", size: 4 },
      config: { labelAttribute: ["name"] },
      label: { minZoom: 0 },
    },
    Polygon: {
      paint: { color: "green", strokeColor: "darkgreen" },
    },
  },
});
```

## FeltController

This is the main interface for interacting with a Felt map.

This interface is composed of the various controllers, each having a
different area of responsibility.

All the methods are listed here, but each controller is documented on its
own to make it easier to find related methods and events.

### Extends

* `ViewportController`.`UiController`.`LayersController`.`ElementsController`.`SelectionController`.`InteractionsController`.[`ToolsController`](client.md#toolscontroller).`MiscController`

### Methods

#### getElement()

> **getElement**(`id`): `Promise`\<`null` | [`Element`](client.md#element-1)>

Get a single element from the map by its id.

##### Parameters

##### id

`string`

The id of the element you want to get.

##### Returns

`Promise`\<`null` | [`Element`](client.md#element-1)>

The requested element.

##### Example

```typescript
const element = await felt.getElement("element-1");
```

#### getElementGeometry()

> **getElementGeometry**(`id`): `Promise`\<`null` | [`GeoJsonGeometry`](client.md#geojsongeometry)>

Get the geometry of an element in GeoJSON geometry format.

For most element types, the geometry returned is based on the `coordinates`
property of the element, with some differences:

* For Circle elements, the geometry is a Polygon drawn from the `center` and
  `radius` properties.

* Path elements become MultiLineString geometries.

* Marker elements return a MultiLineString of the path traced by the user
  as they drew the marker. Note that this is not the polygon formed by filled-in
  "pen" stroke, which doesn't exactly follow the path traced by the user as it
  is smoothed and interpolated to create a continuous line.

* Text, Note and Image elements do not return geometry, so will return `null`.

##### Parameters

##### id

`string`

The id of the element you want to get the geometry of.

##### Returns

`Promise`\<`null` | [`GeoJsonGeometry`](client.md#geojsongeometry)>

##### Example

```typescript
const geometry = await felt.getElementGeometry("element-1");
console.log(geometry?.type, geometry?.coordinates);
```

#### getElements()

> **getElements**(`constraint`?): `Promise`\<(`null` | [`Element`](client.md#element-1))\[]>

Gets elements from the map, according to the constraints supplied. If no
constraints are supplied, all elements will be returned.

##### Parameters

##### constraint?

[`GetElementsConstraint`](client.md#getelementsconstraint)

The constraints to apply to the elements returned from the map.

##### Returns

`Promise`\<(`null` | [`Element`](client.md#element-1))\[]>

All elements on the map.

##### Remarks

The elements in the map, ordered by the order specified in Felt. This is not
necessarily the order that they are drawn in, as Felt draws points above
lines and lines above polygons, for instance.

##### Example

```typescript
const elements = await felt.getElements();
```

#### getElementGroup()

> **getElementGroup**(`id`): `Promise`\<`null` | [`ElementGroup`](client.md#elementgroup)>

Get an element group from the map by its id.

##### Parameters

##### id

`string`

##### Returns

`Promise`\<`null` | [`ElementGroup`](client.md#elementgroup)>

The requested element group.

##### Example

```typescript
const elementGroup = await felt.getElementGroup("element-group-1");
```

#### getElementGroups()

> **getElementGroups**(`constraint`?): `Promise`\<(`null` | [`ElementGroup`](client.md#elementgroup))\[]>

Gets element groups from the map, according to the filters supplied. If no
constraints are supplied, all element groups will be returned in rendering order.

##### Parameters

##### constraint?

[`GetElementGroupsConstraint`](client.md#getelementgroupsconstraint)

The constraints to apply to the element groups returned from the map.

##### Returns

`Promise`\<(`null` | [`ElementGroup`](client.md#elementgroup))\[]>

The requested element groups.

##### Example

```typescript
const elementGroups = await felt.getElementGroups({ ids: ["element-group-1", "element-group-2"] });
```

#### setElementGroupVisibility()

> **setElementGroupVisibility**(`visibility`): `Promise`\<`void`>

Hide or show element groups with the given ids.

##### Parameters

##### visibility

[`SetVisibilityRequest`](client.md#setvisibilityrequest)

##### Returns

`Promise`\<`void`>

##### Example

```typescript
felt.setElementGroupVisibility({ show: ["element-group-1", "element-group-2"], hide: ["element-group-3"] });
```

#### createElement()

> **createElement**(`element`): `Promise`\<[`Element`](client.md#element-1)>

Create a new element on the map.

##### Parameters

##### element

[`ElementCreate`](client.md#elementcreate)

##### Returns

`Promise`\<[`Element`](client.md#element-1)>

##### Example

```typescript
const element = await felt.createElement({ type: "Place", coordinates: [10, 10] });
```

#### updateElement()

> **updateElement**(`element`): `Promise`\<[`Element`](client.md#element-1)>

Update an element on the map.

##### Parameters

##### element

[`ElementUpdate`](client.md#elementupdate)

##### Returns

`Promise`\<[`Element`](client.md#element-1)>

##### Example

```typescript
// Update a place element's coordinates
await felt.updateElement({
  id: "element-1",
  coordinates: [10, 20]
});

// Update a polygon's style
await felt.updateElement({
  id: "element-2",
  color: "#ABC123",
  fillOpacity: 0.5
});
```

#### deleteElement()

> **deleteElement**(`id`): `Promise`\<`void`>

Delete an element from the map.

##### Parameters

##### id

`string`

##### Returns

`Promise`\<`void`>

##### Example

```typescript
await felt.deleteElement("element-1");
```

#### getLayer()

> **getLayer**(`id`): `Promise`\<`null` | [`Layer`](client.md#layer-1)>

Get a single layer from the map by its id.

##### Parameters

##### id

`string`

The id of the layer you want to get.

##### Returns

`Promise`\<`null` | [`Layer`](client.md#layer-1)>

The requested layer.

##### Example

```typescript
const layer = await felt.getLayer("layer-1");
```

#### getLayers()

> **getLayers**(`constraint`?): `Promise`\<(`null` | [`Layer`](client.md#layer-1))\[]>

Gets layers from the map, according to the constraints supplied. If no
constraints are supplied, all layers will be returned.

##### Parameters

##### constraint?

[`GetLayersConstraint`](client.md#getlayersconstraint)

The constraints to apply to the layers returned from the map.

##### Returns

`Promise`\<(`null` | [`Layer`](client.md#layer-1))\[]>

All layers on the map.

##### Remarks

The layers in the map, ordered by the order specified in Felt. This is not
necessarily the order that they are drawn in, as Felt draws points above
lines and lines above polygons, for instance.

##### Example

```typescript
const layers = await felt.getLayers();
```

#### setLayerVisibility()

> **setLayerVisibility**(`visibility`): `Promise`\<`void`>

Hide or show layers with the given ids.

##### Parameters

##### visibility

[`SetVisibilityRequest`](client.md#setvisibilityrequest)

##### Returns

`Promise`\<`void`>

##### Example

```typescript
felt.setLayerVisibility({ show: ["layer-1", "layer-2"], hide: ["layer-3"] });
```

#### setLayerStyle()

> **setLayerStyle**(`params`): `Promise`\<`void`>

Set the style for a layer using FSL, the Felt Style Language.

Changes are only for this session, and not persisted. This is useful to make
temporary changes to a layer's style, such as to highlight a particular layer
or feature.

See the [FSL documentation](https://developers.felt.com/felt-style-language) for details
on how to read and write styles.

If the style you set is invalid, you will receive an error explaining the problem
in the rejected promise value.

##### Parameters

##### params

##### id

`string`

The id of the layer to set the style for.

##### style

`object`

The style to set for the layer.

##### Returns

`Promise`\<`void`>

##### Example

```typescript
// first get the current style
const oldStyle = (await felt.getLayer("layer-1")).style;

felt.setLayerStyle({ id: "layer-1", style: {
  ...oldStyle,
  paint: {
    ...oldStyle.paint,
    color: "red",
  },
} });
```

#### setLayerLegendVisibility()

> **setLayerLegendVisibility**(`params`): `Promise`\<`void`>

Hide or show layers with the given ids from the legend.

##### Parameters

##### params

[`SetVisibilityRequest`](client.md#setvisibilityrequest)

##### Returns

`Promise`\<`void`>

##### Example

```typescript
felt.setLayerLegendVisibility({ show: ["layer-1", "layer-2"], hide: ["layer-3"] });
```

#### createLayersFromGeoJson()

> **createLayersFromGeoJson**(`params`): `Promise`\<`null` | \{ `layerGroup`: [`LayerGroup`](client.md#layergroup); `layers`: [`Layer`](client.md#layer-1)\[]; }>

Adds layers to the map from file or URL sources.

##### Parameters

##### params

[`CreateLayersFromGeoJsonParams`](client.md#createlayersfromgeojsonparams)

##### Returns

`Promise`\<`null` | \{ `layerGroup`: [`LayerGroup`](client.md#layergroup); `layers`: [`Layer`](client.md#layer-1)\[]; }>

The layer groups that were created.

##### Remarks

This allows you to add temporary layers to the map that don't depend on
any processing by Felt. This is useful for viewing data from external sources or
remote files.

##### Example

```typescript
const layerFromFile = await felt.createLayersFromGeoJson({
  source: {
    type: "geoJsonFile",
    file: someFile,
  },
  name: "Parcels",
});

const layerFromUrl = await felt.createLayersFromGeoJson({
  source: {
    sourceType: "geoJsonUrl",
    url: "https://example.com/parcels.geojson",
  },
  name: "Parcels",
```

#### updateLayer()

> **updateLayer**(`params`): `Promise`\<[`Layer`](client.md#layer-1)>

Update a layer by passing a subset of the layer's properties.

Note that not all properties can be updated, so check the [UpdateLayerParams](client.md#updatelayerparams)
type to see which properties can be updated.

##### Parameters

##### params

[`UpdateLayerParams`](client.md#updatelayerparams)

##### Returns

`Promise`\<[`Layer`](client.md#layer-1)>

##### Example

```typescript
await felt.updateLayer({
  id: "layer-1",
  name: "My Layer",
  caption: "A description of the layer",
});
```

#### deleteLayer()

> **deleteLayer**(`id`): `Promise`\<`void`>

Delete a layer from the map by its id.

##### Parameters

##### id

`string`

##### Returns

`Promise`\<`void`>

##### Remarks

This only works for layers created via the SDK `createLayersFromGeoJson` method, not layers added via the Felt UI.

##### Example

```typescript
await felt.deleteLayer("layer-1");
```

#### getLayerGroup()

> **getLayerGroup**(`id`): `Promise`\<`null` | [`LayerGroup`](client.md#layergroup)>

Get a layer group from the map by its id.

##### Parameters

##### id

`string`

##### Returns

`Promise`\<`null` | [`LayerGroup`](client.md#layergroup)>

The requested layer group.

##### Example

```typescript
const layerGroup = await felt.getLayerGroup("layer-group-1");
```

#### getLayerGroups()

> **getLayerGroups**(`constraint`?): `Promise`\<(`null` | [`LayerGroup`](client.md#layergroup))\[]>

Gets layer groups from the map, according to the constraints supplied. If no
constraints are supplied, all layer groups will be returned in rendering order.

##### Parameters

##### constraint?

[`GetLayerGroupsConstraint`](client.md#getlayergroupsconstraint)

The constraints to apply to the layer groups returned from the map.

##### Returns

`Promise`\<(`null` | [`LayerGroup`](client.md#layergroup))\[]>

The requested layer groups.

##### Example

```typescript
const layerGroups = await felt.getLayerGroups({ ids: ["layer-group-1", "layer-group-2"] });
```

#### setLayerGroupVisibility()

> **setLayerGroupVisibility**(`visibility`): `Promise`\<`void`>

Hide or show layer groups with the given ids.

##### Parameters

##### visibility

[`SetVisibilityRequest`](client.md#setvisibilityrequest)

##### Returns

`Promise`\<`void`>

##### Example

```typescript
felt.setLayerGroupVisibility({ show: ["layer-group-1", "layer-group-2"], hide: ["layer-group-3"] });
```

#### setLayerGroupLegendVisibility()

> **setLayerGroupLegendVisibility**(`params`): `Promise`\<`void`>

Hide or show layer groups with the given ids from the legend.

##### Parameters

##### params

[`SetVisibilityRequest`](client.md#setvisibilityrequest)

##### Returns

`Promise`\<`void`>

##### Example

```typescript
felt.setLayerGroupLegendVisibility({ show: ["layer-1", "layer-2"], hide: ["layer-3"] });
```

#### getLegendItem()

> **getLegendItem**(`id`): `Promise`\<`null` | [`LegendItem`](client.md#legenditem)>

Allows you to get the state of a single legend item.

##### Parameters

##### id

[`LegendItemIdentifier`](client.md#legenditemidentifier)

##### Returns

`Promise`\<`null` | [`LegendItem`](client.md#legenditem)>

##### Example

```typescript
const legendItem = await felt.getLegendItem({
  id: "legend-item-1",
  layerId: "layer-1",
})
```

#### getLegendItems()

> **getLegendItems**(`constraint`?): `Promise`\<(`null` | [`LegendItem`](client.md#legenditem))\[]>

Allows you to obtain the state of several legend items, by passing in
constraints describing which legend items you want.

If you do not pass any constraints, you will receive all legend items.

##### Parameters

##### constraint?

[`LegendItemsConstraint`](client.md#legenditemsconstraint)

##### Returns

`Promise`\<(`null` | [`LegendItem`](client.md#legenditem))\[]>

##### Example

```typescript
const legendItems = await felt.getLegendItems({layerId: "layer-1"});
```

#### setLegendItemVisibility()

> **setLegendItemVisibility**(`visibility`): `Promise`\<`void`>

Hide or show legend items with the given identifiers.

##### Parameters

##### visibility

##### show

[`LegendItemIdentifier`](client.md#legenditemidentifier)\[]

##### hide

[`LegendItemIdentifier`](client.md#legenditemidentifier)\[]

##### Returns

`Promise`\<`void`>

##### Example

```typescript
felt.setLegendItemVisibility({
  show: [{layerId: "layer-group-1", id: "item-1-0"}],
  hide: [{layerId: "layer-group-2", id: "item-2-0"}],
})
```

#### getLayerFilters()

> **getLayerFilters**(`layerId`): `Promise`\<`null` | [`LayerFilters`](client.md#layerfilters)>

Get the filters for a layer.

##### Parameters

##### layerId

`string`

##### Returns

`Promise`\<`null` | [`LayerFilters`](client.md#layerfilters)>

##### Remarks

The return type gives you the filters split up into the various sources
that make up the overall filters for a layer.

##### Example

```typescript
const filters = await felt.getLayerFilters("layer-1");
console.log(filters.combined, filters.style, filters.ephemeral, filters.components);
```

#### setLayerFilters()

> **setLayerFilters**(`params`): `Promise`\<`void`>

Sets the **ephemeral** filters for a layer.

##### Parameters

##### params

##### layerId

`string`

The layer that you want to set the filters for.

##### filters

[`Filters`](client.md#filters)

The filters to set for the layer. This will replace any ephemeral filters
that are currently set for the layer.

##### note

`string`

A note to display on the layer legend when this filter is applied. When the
note is shown, a reset button will also be shown, allowing the user to clear
the filter.

##### Returns

`Promise`\<`void`>

##### Example

```typescript
await felt.setLayerFilters({
  layerId: "layer-1",
  filters: ["AREA", "gt", 30_000],
});
```

#### getLayerBoundaries()

> **getLayerBoundaries**(`layerId`): `Promise`\<`null` | [`LayerBoundaries`](client.md#layerboundaries)>

Get the spatial boundaries that are filtering a layer.

##### Parameters

##### layerId

`string`

##### Returns

`Promise`\<`null` | [`LayerBoundaries`](client.md#layerboundaries)>

##### Remarks

The return type gives you the boundaries split up into the various sources
that make up the overall boundary for a layer.

The combined boundary is the intersection of the other sources of boundaries.

##### Example

```typescript
const boundaries = await felt.getLayerBoundaries("layer-1");

console.log(boundaries?.combined);
console.log(boundaries?.spatialFilters);
console.log(boundaries?.ephemeral);
```

#### setLayerBoundary()

> **setLayerBoundary**(`params`): `Promise`\<`void`>

Set the [\`ephemeral\`](client.md#ephemeral-1) boundary for one or more layers.

##### Parameters

##### params

##### layerIds

`string`\[]

The ids of the layers to set the boundary for.

##### boundary

`null` | [`GeometryFilter`](client.md#geometryfilter)

The boundary to set for the layer.

Passing `null` clears the ephemeral boundary for the layer.

##### Returns

`Promise`\<`void`>

##### Example

```typescript
await felt.setLayerBoundary({
  layerIds: ["layer-1", "layer-2"],
  boundary: { type: "MultiPolygon", coordinates: [[[100, 0], [101, 0], [101, 1], [100, 1], [100, 0]]] }
});
```

#### getRenderedFeatures()

> **getRenderedFeatures**(`params`?): `Promise`\<[`LayerFeature`](client.md#layerfeature)\[]>

Get the features that are currently **rendered** on the map in the viewport.

Note that this is explicitly about the features that are rendered, which isn't
necessarily a complete list of all the features in the viewport. This is because
of the way features are tiled: at low zoom levels or high feature densities, many
features are omitted from what is rendered on the screen.

##### Parameters

##### params?

[`GetRenderedFeaturesConstraint`](client.md#getrenderedfeaturesconstraint)

The constraints to apply to the features returned from the map.

##### Returns

`Promise`\<[`LayerFeature`](client.md#layerfeature)\[]>

##### Example

```typescript
const features = await felt.getRenderedFeatures();
```

#### getFeature()

> **getFeature**(`params`): `Promise`\<`null` | [`LayerFeature`](client.md#layerfeature)>

Get a feature from the map by its ID and layer ID.

The response is a [LayerFeature](client.md#layerfeature) object, which does not include the
geometry of the feature.

You may want to use this when you don't need the geometry of a feature,
but you know the ID of the feature you need.

##### Parameters

##### params

##### id

`string` | `number`

##### layerId

`string`

##### Returns

`Promise`\<`null` | [`LayerFeature`](client.md#layerfeature)>

##### Example

```typescript
const feature = await felt.getFeature({ layerId: "layer-1", id: 123 });
```

#### getFeatures()

> **getFeatures**(`params`): `Promise`\<\{ `features`: [`LayerFeature`](client.md#layerfeature)\[]; `count`: `number`; `previousPage`: `null` | `string`; `nextPage`: `null` | `string`; }>

Get a list of layer features.

##### Parameters

##### params

##### layerId

`string`

The ID of the layer to get features from.

##### filters

[`Filters`](client.md#filters)

Filters to be applied. These filters will merge with layer's own filters.

##### sorting

[`SortConfig`](client.md#sortconfig)

Attribute to sort by.

##### boundary

[`GeometryFilter`](client.md#geometryfilter)

The spatial boundary to be applied.

##### search

`string`

Search term to search by.

Search is case-insensitive and looks for matches across all feature properties.

##### pagination

`null` | `string`

Pagination token. It comes from either the `previousPage` or `nextPage`
properties of the previous response.

##### Returns

`Promise`\<\{ `features`: [`LayerFeature`](client.md#layerfeature)\[]; `count`: `number`; `previousPage`: `null` | `string`; `nextPage`: `null` | `string`; }>

The response is an object which contains:

* `features`: list of [LayerFeature](client.md#layerfeature) objects, which does not include
  the geometry of the feature but it does include its bounding box.
* `count`: the total number of features that match the query.
* `previousPage` & `nextPage`: The tokens to pass in the `pagination` param
  to navigate between pages.

##### Remarks

This list is paginated in sets of 20 features for each page. In order to paginate
between pages, the response includes `previousPage` and `nextPage` that are tokens
that should be sent in the `pagination` params for requesting sibling pages.

Text search is case-insensitive and looks for matches across all feature properties.

##### Example

```typescript
const page1Response = await felt.getFeatures({
  layerId: "layer-1",
  search: "abc123",
  pagination: undefined,
});

// Note that the search term here matches the one for the first page.
if (page1Response.nextPage) {
  const page2Response = await felt.getFeatures({
    layerId: "layer-1",
    search: "abc123",
    pagination: page1Response.nextPage,
  });
}
```

#### getGeoJsonFeature()

> **getGeoJsonFeature**(`params`): `Promise`\<`null` | [`GeoJsonFeature`](client.md#geojsonfeature)>

Get a feature in GeoJSON format from the map by its ID and layer ID.

The response is a GeoJSON Feature object with the complete geometry of the
feature. Note that for some *very* large geometries, the response may take a
long time to return, and may return a very large object.

##### Parameters

##### params

##### id

`string` | `number`

##### layerId

`string`

##### Returns

`Promise`\<`null` | [`GeoJsonFeature`](client.md#geojsonfeature)>

##### Example

```typescript
const feature = await felt.getGeoJsonFeature({ layerId: "layer-1", id: 123 });
```

#### getCategoryData()

> **getCategoryData**(`params`): `Promise`\<[`GetLayerCategoriesGroup`](client.md#getlayercategoriesgroup)\[]>

Gets values from a layer grouped by a given attribute.

##### Parameters

##### params

[`GetLayerCategoriesParams`](client.md#getlayercategoriesparams)

##### Returns

`Promise`\<[`GetLayerCategoriesGroup`](client.md#getlayercategoriesgroup)\[]>

##### Remarks

Groups features in your layer by unique values in the specified attribute and calculates
a value for each group. By default, this value is the count of features in each group.

You can apply filters in two ways:

1. At the top level (using `boundary` and `filters`), which affects both what categories
   are included and how values are calculated
2. In the `values` configuration, which only affects the values but keeps all categories

This two-level filtering is particularly useful when you want to compare subsets of data
while maintaining consistent categories. For example, you might want to show the distribution
of all building types in a city, but only count buildings built after 2000 in each category.

##### Example

```typescript
// Basic grouping: Count of buildings by type
const buildingsByType = await felt.getCategoryData({
  layerId: "buildings",
  attribute: "type"
});

// Filtered grouping: Only count buildings in downtown
const downtownBuildingsByType = await felt.getCategoryData({
  layerId: "buildings",
  attribute: "type",
  boundary: [-122.43, 47.60, -122.33, 47.62]  // downtown boundary
});

// Advanced: Show all building types, but only sum floor area of recent buildings
const recentBuildingAreaByType = await felt.getCategoryData({
  layerId: "buildings",
  attribute: "type",
  values: {
    filters: ["year_built", "gte", 2000],
    aggregation: {
      method: "sum",
      attribute: "floor_area"
    }
  }
});

// Compare residential density across neighborhoods while only counting recent buildings
const newBuildingDensityByNeighborhood = await felt.getCategoryData({
  layerId: "buildings",
  attribute: "neighborhood",
  values: {
    filters: ["year_built", "gte", 2000],
    aggregation: {
      method: "avg",
      attribute: "units_per_acre"
    }
  }
});
```

#### getHistogramData()

> **getHistogramData**(`params`): `Promise`\<[`GetLayerHistogramBin`](client.md#getlayerhistogrambin)\[]>

Gets a histogram of values from a layer for a given attribute.

##### Parameters

##### params

[`GetLayerHistogramParams`](client.md#getlayerhistogramparams)

##### Returns

`Promise`\<[`GetLayerHistogramBin`](client.md#getlayerhistogrambin)\[]>

##### Remarks

Creates bins (ranges) for numeric data and counts how many features fall into each bin,
or returns aggregated values for each bin.

You can control how the bins are created using the `steps` parameter, choosing from
several methods like equal intervals, quantiles, or natural breaks (Jenks), or passing
in the step values directly if you know how you want to bin the data.

Like getCategoryData, you can apply filters in two ways:

1. At the top level (using `boundary` and `filters`), which affects both how the bins
   are calculated and what features are counted in each bin
2. In the `values` configuration, which only affects what gets counted but keeps the
   bin ranges the same

This is particularly useful when you want to compare distributions while keeping
consistent bin ranges. For example, you might want to compare the distribution of
building heights in different years while using the same height ranges.

##### Example

```typescript
// Basic histogram: Building heights in 5 natural break bins
const buildingHeights = await felt.getHistogramData({
  layerId: "buildings",
  attribute: "height",
  steps: { type: "jenks", count: 5 }
});

// Compare old vs new buildings using the same height ranges
const oldBuildingHeights = await felt.getHistogramData({
  layerId: "buildings",
  attribute: "height",
  steps: [0, 20, 50, 100, 200, 500],
  values: {
    filters: ["year_built", "lt", 1950]
  }
});

const newBuildingHeights = await felt.getHistogramData({
  layerId: "buildings",
  attribute: "height",
  steps: [0, 20, 50, 100, 200, 500],  // Same ranges as above
  values: {
    filters: ["year_built", "gte", 1950]
  }
});
```

#### getAggregates()

> **getAggregates**\<`T`>(`params`): `Promise`\<`Record`\<`T`, `null` | `number`>>

Calculates a single aggregate value for a layer based on the provided configuration.

##### Type Parameters

• **T** *extends* `"avg"` | `"max"` | `"min"` | `"sum"` | `"median"` | `"count"`

##### Parameters

##### params

[`GetLayerCalculationParams`](client.md#getlayercalculationparamst)\<`T`>

##### Returns

`Promise`\<`Record`\<`T`, `null` | `number`>>

##### Remarks

Performs statistical calculations on your data, like counting features or computing
averages, sums, etc. You can focus your calculation on specific areas or subsets
of your data using boundaries and filters.

When no aggregation is specified, it counts features. When an aggregation is provided,
it performs that calculation (average, sum, etc.) on the specified attribute.

##### Example

```typescript
// Count all residential buildings
const residentialCount = await felt.getAggregates({
  layerId: "buildings",
  filters: ["type", "eq", "residential"]
});

// Calculate average home value in a specific neighborhood
const avgHomeValue = await felt.getAggregates({
  layerId: "buildings",
  boundary: [-122.43, 47.60, -122.33, 47.62],  // neighborhood boundary
  aggregation: {
    methods: ["avg"],
    attribute: "assessed_value"
  }
});

// Find the maximum building height for buildings built after 2000
const maxNewBuildingHeight = await felt.getAggregates({
  layerId: "buildings",
  filters: ["year_built", "gte", 2000],
  aggregation: {
    methods: ["max"],
    attribute: "height"
  }
});
```

#### getPrecomputedAggregates()

> **getPrecomputedAggregates**(`params`): `Promise`\<\{ `avg`: `null` | `number`; `max`: `null` | `number`; `min`: `null` | `number`; `sum`: `null` | `number`; `count`: `null` | `number`; }>

Calculates aggregates for spatial cells of a layer.

##### Parameters

##### params

[`GetLayerPrecomputedCalculationParams`](client.md#getlayerprecomputedcalculationparams)

##### Returns

`Promise`\<\{ `avg`: `null` | `number`; `max`: `null` | `number`; `min`: `null` | `number`; `sum`: `null` | `number`; `count`: `null` | `number`; }>

##### Remarks

Performs statistical calculations on spatial cells of a layer, returning min, max, avg, sum, and count. You can focus your calculation on specific areas or subsets
of your data using boundaries and filters. When using the count method, an attribute is not required.

##### Example

```typescript
const aggregates = await felt.getPrecomputedAggregates({
  layerId: "buildings",
  gridConfig: {
    type: "h3",
    resolution: 10,
    method: "avg",
    attribute: "assessed_value"
  },
});
```

#### getLayerSchema()

> **getLayerSchema**(`layerId`): `Promise`\<[`LayerSchema`](client.md#layerschema)>

Get the schema for a layer.

##### Parameters

##### layerId

`string`

##### Returns

`Promise`\<[`LayerSchema`](client.md#layerschema)>

##### Remarks

The schema describes the structure of the data in a layer, including the attributes
that are available on the features in the layer.

This can be useful to build generic UIs that need to know the structure of the data in
a layer, such as a dropdown to choose an attribute.

##### Example

```typescript
const schema = await felt.getLayerSchema("layer-1");
const attributeIds = schema.attributes.map((attr) => attr.id);
```

#### getMapDetails()

> **getMapDetails**(): `Promise`\<[`MapDetails`](client.md#mapdetails)>

Gets the details of the map.

##### Returns

`Promise`\<[`MapDetails`](client.md#mapdetails)>

##### Example

```typescript
const details = await felt.getMapDetails();
console.log({
  id: details.id,
  title: details.title,
  description: details.description,
});
```

#### getSelection()

> **getSelection**(): `Promise`\<[`EntityNode`](client.md#entitynode)\[]>

Gets the current selection as a list of entity identifiers.

##### Returns

`Promise`\<[`EntityNode`](client.md#entitynode)\[]>

##### Example

```typescript
const selection = await felt.getSelection();
```

#### selectFeature()

> **selectFeature**(`params`): `Promise`\<`void`>

Selects a feature on a layer. This will show the feature's popup, modal or
sidebar (if configured) and highlight the feature.

##### Parameters

##### params

[`FeatureSelection`](client.md#featureselection)

##### Returns

`Promise`\<`void`>

##### Example

```typescript
felt.selectFeature({
  id: 123,
  layerId: "my-layer",
  showPopup: true,
  fitViewport: { maxZoom: 15 },
});
```

#### clearSelection()

> **clearSelection**(`params`?): `Promise`\<`void`>

Clears the current selection. This clears the selection of

##### Parameters

##### params?

The parameters to clear the selection. If this is not provided,
both features and elements will be cleared.

##### features

`boolean`

Whether to clear the features from the selection.

##### elements

`boolean`

Whether to clear the elements from the selection.

##### Returns

`Promise`\<`void`>

##### Example

```typescript

// Removes all features and elements from the selection
felt.clearSelection();

// Removes only features from the selection
felt.clearSelection({ features: true });

// Removes only elements from the selection
felt.clearSelection({ elements: true });
```

##### Default

```typescript
{ features: true, elements: true }
```

#### setTool()

> **setTool**(`tool`): `void`

Sets the tool to use for drawing elements on the map.

##### Parameters

##### tool

The tool to set.

`null` | [`ToolType`](client.md#tooltype)

##### Returns

`void`

##### Example

```typescript
// Set the tool to "marker"
await felt.setTool("marker");

// put down the tool
await felt.setTool(null);
```

#### getTool()

> **getTool**(): `Promise`\<`null` | [`ToolType`](client.md#tooltype)>

Gets the current tool, if any is in use.

##### Returns

`Promise`\<`null` | [`ToolType`](client.md#tooltype)>

The current tool, or `null` if no tool is in use.

##### Example

```typescript
const tool = await felt.getTool(); // "marker", "polygon", etc.
```

#### onToolChange()

> **onToolChange**(`args`): `VoidFunction`

Listens for changes to the current tool.

##### Parameters

##### args

##### handler

(`tool`) => `void`

This callback is called with the current tool whenever the tool changes.

##### Returns

`VoidFunction`

A function to unsubscribe from the listener

##### Example

```typescript
const unsubscribe = felt.onToolChange({
  handler: tool => console.log(tool),
});

// later on...
unsubscribe();
```

#### setToolSettings()

> **setToolSettings**(`settings`): `void`

Sets the settings for the current tool.

##### Parameters

##### settings

[`InputToolSettings`](client.md#inputtoolsettings)

The settings to set.

##### Returns

`void`

##### Example

```typescript
// Set the settings for the marker tool
await felt.setToolSettings({
  tool: "marker",
  color: "#FE17",
});
```

#### getToolSettings()

> **getToolSettings**\<`T`>(`tool`): `Promise`\<[`ToolSettingsMap`](client.md#toolsettingsmap)\[`T`]>

Gets the settings for the chosen tool

##### Type Parameters

• **T** *extends* [`ConfigurableToolType`](client.md#configurabletooltype)

##### Parameters

##### tool

`T`

##### Returns

`Promise`\<[`ToolSettingsMap`](client.md#toolsettingsmap)\[`T`]>

The settings for the chosen tool.

##### Example

```typescript
const settings = await felt.getToolSettings("marker");
```

#### onToolSettingsChange()

> **onToolSettingsChange**(`args`): `VoidFunction`

Listens for changes to the settings on all tools.

##### Parameters

##### args

##### handler

(`settings`) => `void`

##### Returns

`VoidFunction`

A function to unsubscribe from the listener

##### Example

```typescript
const unsubscribe = felt.onToolSettingsChange({
  handler: settings => console.log(settings),
});

// later on...
unsubscribe();
```

#### createActionTrigger()

> **createActionTrigger**(`args`): `Promise`\<[`UIActionTriggerCreate`](client.md#uiactiontriggercreate)>

Creates an action trigger.
Action triggers are rendered on map's left sidebar as a button,
similar to other map extensions like measure and spatial filter.

The goal of action triggers is to allow users to perform actions on the map
by clicking on a button.

##### Parameters

##### args

[`CreateActionTriggerParams`](client.md#createactiontriggerparams)

The arguments for the method.

##### Returns

`Promise`\<[`UIActionTriggerCreate`](client.md#uiactiontriggercreate)>

##### Example

```typescript
await felt.createActionTrigger({
  actionTrigger: {
    id: "layerTurnPurple", // not required but useful for further updates
    label: "Turn layer purple",
    onTrigger: async () => {
      await felt.setLayerStyle("layer-1", { ..., paint: { color: "purple" } });
    },
    disabled: false, // optional, defaults to false
  },
  placement: { at: "start" }, // optional, defaults to { at: "end" }
});
```

#### updateActionTrigger()

> **updateActionTrigger**(`args`): `Promise`\<[`UIActionTriggerCreate`](client.md#uiactiontriggercreate)>

Updates an action trigger.

Action trigger to update is identified by the `id` property.

##### Parameters

##### args

[`UpdateActionTriggerParams`](client.md#updateactiontriggerparams)

The action trigger to update.

##### Returns

`Promise`\<[`UIActionTriggerCreate`](client.md#uiactiontriggercreate)>

##### Remarks

Properties provided will override the existing properties.

##### Example

```typescript
await felt.updateActionTrigger({
  id: "layerTurnPurple",
  label: "Turn layer points purple", // only label changes
});
```

#### deleteActionTrigger()

> **deleteActionTrigger**(`id`): `void`

Deletes an action trigger.

##### Parameters

##### id

`string`

The id of the action trigger to delete.

##### Returns

`void`

##### Example

```typescript
await felt.deleteActionTrigger("layerTurnPurple");
```

#### createPanel()

> **createPanel**(`args`): `Promise`\<[`UIPanel`](client.md#uipanel)>

Creates a panel on map's right sidebar.

Panels are useful to extend Felt UI for your own use cases (e.g. a form, a settings panel, etc.)
by using Felt UI elements (e.g. Text, Button, etc.). This way the user experience is consistent
with the rest of Felt.

Panels have two sections:

* `body` - Body of the panel, scrollable.
* `footer` - It sticks to the bottom of the panel, useful to add submit buttons.

By default, the panel will be added to the end of the stack but you can
specify a placement to add it at a specific position in the stack.

Once created, you can add elements to the panel by using the [createPanelElements](client.md#createpanelelements) method or
perform partial updates of elements by using the [updatePanelElements](client.md#updatepanelelements) method.

When adding a panel, its id is optional as well as its elements' ids.
It is recommended to provide an id for the panel and its elements to make
it easier to update or delete them later.

##### Parameters

##### args

[`CreatePanelParams`](client.md#createpanelparams)

The arguments for the method.

##### Returns

`Promise`\<[`UIPanel`](client.md#uipanel)>

##### Example

```typescript
await felt.createPanel({
   panel: {
      id: "panel-1", // not required but useful for further updates
      title: "My Panel",
      body: [
         {
            type: "Text",
            content: "Hello, world!",
         },
         {
            type: "TextInput",
            label: "Name",
            placeholder: "Enter your name",
            value: "",
            onChange: ({ value }) => setName(value),
         },
      ],
      footer: [
         {
            type: "Button",
            label: "Submit",
            onClick: () => submitForm(),
         },
      ],
   },
   placement: { at: "start" }, // add the panel to the start of the stack
});
```

#### updatePanel()

> **updatePanel**(`panel`): `Promise`\<[`UIPanel`](client.md#uipanel)>

Updates a panel.

Panel to update is identified by the `id` property.

##### Parameters

##### panel

[`UpdatePanelParams`](client.md#updatepanelparams)

The panel to update.

##### Returns

`Promise`\<[`UIPanel`](client.md#uipanel)>

##### Remarks

Properties provided will override the existing properties.
Override is done at Panel level, so if you want to update a specific element,
you need to provide the entire element. For partial updates of elements, use
[updatePanelElements](client.md#updatepanelelements) instead.

##### Example

```typescript
await felt.updatePanel({
  id: "panel-1",
  title: "A new title for my panel", // only title changes
});
```

#### deletePanel()

> **deletePanel**(`id`): `void`

Deletes a panel.

##### Parameters

##### id

`string`

The id of the panel to delete.

##### Returns

`void`

##### Example

```typescript
await felt.deletePanel("panel-1");
```

#### createPanelElements()

> **createPanelElements**(`args`): `Promise`\<[`UIPanel`](client.md#uipanel)>

Creates elements in a panel.

##### Parameters

##### args

[`CreatePanelElementsParams`](client.md#createpanelelementsparams)

The arguments for the method.

##### Returns

`Promise`\<[`UIPanel`](client.md#uipanel)>

##### Example

```typescript
await felt.createPanelElements({
  panelId: "panel-1",
  elements: [
    {
      element: { type: "Text", content: "Hello, world!" },
      container: "body",
      placement: { at: "start" },
    },
  ],
});
```

#### updatePanelElements()

> **updatePanelElements**(`args`): `Promise`\<[`UIPanel`](client.md#uipanel)>

Updates an element in a panel.

##### Parameters

##### args

[`UpdatePanelElementsParams`](client.md#updatepanelelementsparams)

The arguments for the method.

##### Returns

`Promise`\<[`UIPanel`](client.md#uipanel)>

##### Example

```typescript
await felt.updatePanelElements({
  panelId: "panel-1",
  elements: [
    {
      element: {
        id: "element-1",
        type: "Text",
        content: "Hello, world!",
      },
    },
  ],
});
```

#### deletePanelElements()

> **deletePanelElements**(`args`): `void`

Deletes elements from a panel.

##### Parameters

##### args

[`DeletePanelElementsParams`](client.md#deletepanelelementsparams)

The arguments for the method.

##### Returns

`void`

##### Example

```typescript
await felt.deletePanelElements({
  panelId: "panel-1",
  elements: ["element-1", "element-2"],
});
```

#### updateUiControls()

> **updateUiControls**(`controls`): `void`

Updates the UI controls on the embedded map.

##### Parameters

##### controls

[`UiControlsOptions`](client.md#uicontrolsoptions)

The controls to update.

##### Returns

`void`

##### Example

```typescript
// Show some UI controls
await felt.updateUiControls({
  showLegend: true,
  fullScreenButton: true,
});

// Disable some UI options
await felt.updateUiControls({
  cooperativeGestures: false,
  geolocation: false,
});
```

#### setOnMapInteractionsUi()

> **setOnMapInteractionsUi**(`options`): `void`

Control the on-map UI shown when interacting with features and elements.

If you add your own click, selection or hover handlers you may want to disable
various parts of the Felt UI. This method allows you to control the visibility of
various parts of the UI that might otherwise be shown when people click or hover
on things.

This does not affect selection. That means that selectable features and elements
will still be selected when clicked.

##### Parameters

##### options

[`OnMapInteractionsOptions`](client.md#onmapinteractionsoptions)

##### Returns

`void`

##### Example

```typescript
// Disable UI when hovering or selecting features
await felt.setOnMapInteractionsUi({
  featureSelectPanel: false,
  featureHoverPanel: false,
});
```

#### showLayerDataTable()

> **showLayerDataTable**(`params`?): `Promise`\<`void`>

Shows a data table view for the specified layer, optionally sorted by a given attribute.

##### Parameters

##### params?

##### layerId

`string`

##### sorting

[`SortConfig`](client.md#sortconfig)

##### Returns

`Promise`\<`void`>

##### Example

```typescript
// Show data table with default sorting
await felt.showLayerDataTable({
  layerId: "layer-1",
});

// Show data table sorted by height in descending order
await felt.showLayerDataTable({
  layerId: "layer-1",
  sorting: {
    attribute: "height",
    direction: "desc",
  },
});

// Show the data table pane with no table visible
await felt.showLayerDataTable();
```

#### hideLayerDataTable()

> **hideLayerDataTable**(): `Promise`\<`void`>

Hides the data table.

##### Returns

`Promise`\<`void`>

##### Example

```typescript
await felt.hideLayerDataTable();
```

#### getViewport()

> **getViewport**(): `Promise`\<[`ViewportState`](client.md#viewportstate)>

Gets the current state of the viewport.

##### Returns

`Promise`\<[`ViewportState`](client.md#viewportstate)>

##### Example

```typescript
// Get current viewport state
const viewport = await felt.getViewport();
console.log({
  center: viewport.center,
  zoom: viewport.zoom,
});
```

#### setViewport()

> **setViewport**(`viewport`): `void`

Moves the map to the specified location.

##### Parameters

##### viewport

[`SetViewportCenterZoomParams`](client.md#setviewportcenterzoomparams)

##### Returns

`void`

##### Example

```typescript
felt.setViewport({
  center: { latitude: 0, longitude: 0 },
  zoom: 10,
});
```

#### getViewportConstraints()

> **getViewportConstraints**(): `Promise`\<`null` | [`ViewportConstraints`](client.md#viewportconstraints)>

Gets the current state of the viewport constraints.

##### Returns

`Promise`\<`null` | [`ViewportConstraints`](client.md#viewportconstraints)>

##### Example

```typescript
// Get current viewport constraints
const constraints = await felt.getViewportConstraints();
if (constraints) {
  console.log({
    bounds: constraints.bounds,
    minZoom: constraints.minZoom,
    maxZoom: constraints.maxZoom
  });
} else {
  console.log("No viewport constraints set");
}
```

#### setViewportConstraints()

> **setViewportConstraints**(`constraints`): `void`

Constrains the map viewport so it stays inside certain bounds and/or certain zoom levels.

##### Parameters

##### constraints

`null` | `Partial`\<[`ViewportConstraints`](client.md#viewportconstraints)>

##### Returns

`void`

##### Examples

```typescript
felt.setViewportConstraints({
  bounds: [-122.5372532, 37.6652478, -122.1927016, 37.881707],
  minZoom: 1,
  maxZoom: 23,
});
```

every constraint is optional

```typescript
felt.setViewportConstraints({
  bounds: [-122.5372532, 37.6652478, -122.1927016, 37.881707],
});
```

if a constraint is null, it will be removed but keeping the others

```typescript
felt.setViewportConstraints({ bounds: null });
```

if method receives null, it will remove the constraints

```typescript
felt.setViewportConstraints(null);
```

#### fitViewportToBounds()

> **fitViewportToBounds**(`bounds`): `void`

Fits the map to the specified bounds.

##### Parameters

##### bounds

[`ViewportFitBoundsParams`](client.md#viewportfitboundsparams)

##### Returns

`void`

##### Example

```typescript
const west = -122.4194;
const south = 37.7749;
const east = -122.4194;
const north = 37.7749;
felt.fitViewportToBounds({ bounds: [west, south, east, north] });
```

### Events

#### onElementCreate()

> **onElementCreate**(`args`): `VoidFunction`

Adds a listener for when an element is created.

##### Parameters

##### args

##### handler

(`change`) => `void`

The handler that is called when an element is created.

This will fire when elements are created programatically, or when the
user starts creating an element with a drawing tool.

When the user creates an element with a drawing tool, it can begin in
an invalid state, such as if you've just placed a single point in a polygon.

You can use the `isBeingCreated` property to determine if the element is
still being created by a drawing tool.

If you want to know when the element is finished being created, you can
use the [\`onElementCreateEnd\`](client.md#onelementcreateend) listener.

##### Returns

`VoidFunction`

A function to unsubscribe from the listener

##### Example

```typescript
const unsubscribe = felt.onElementCreate({
  handler: (element) => console.log(element.id),
});

// later on...
unsubscribe();
```

#### onElementCreateEnd()

> **onElementCreateEnd**(`args`): `VoidFunction`

Listens for when a new element is finished being created by a drawing tool.

This differs from the [\`onElementCreate\`](client.md#onelementcreate) listener, which fires whenever an
element is first created. This fires when the user finishes creating an element
which could be after a series of interactions.

For example, when creating a polygon, the user places a series of points then
finishes by pressing Enter or Escape. Or when creating a Place element, they
add the marker, type a label, then finally deselect the element.

##### Parameters

##### args

##### handler

(`params`) => `void`

The handler to call whenever this event fires.

##### Returns

`VoidFunction`

A function to unsubscribe from the listener

##### Example

```typescript
const unsubscribe = felt.onToolCreatedElement({
  handler: (params) => console.log(params),
});

// later on...
unsubscribe();
```

#### onElementChange()

> **onElementChange**(`args`): `VoidFunction`

Adds a listener for when an element changes.

This will fire when an element is being edited, either on the map by the user
or programatically.

Like the [\`onElementCreate\`](client.md#onelementcreate) listener, this will fire when an element is
still being created by a drawing tool.

You can check the [\`isBeingCreated\`](client.md#isbeingcreated) property to determine if the element is
still being created by a drawing tool.

##### Parameters

##### args

##### options

\{ `id`: `string`; }

##### options.id

`string`

The id of the element to listen for changes to.

##### handler

(`change`) => `void`

The handler that is called when the element changes.

##### Returns

`VoidFunction`

A function to unsubscribe from the listener

##### Example

```typescript
const unsubscribe = felt.onElementChange({
  options: { id: "element-1" },
  handler: ({element}) => console.log(element.id),
});

// later on...
unsubscribe();
```

#### onElementDelete()

> **onElementDelete**(`args`): `VoidFunction`

Adds a listener for when an element is deleted.

##### Parameters

##### args

##### options

\{ `id`: `string`; }

##### options.id

`string`

The id of the element to listen for deletions of.

##### handler

() => `void`

The handler that is called when the element is deleted.

##### Returns

`VoidFunction`

A function to unsubscribe from the listener

##### Example

```typescript
const unsubscribe = felt.onElementDelete({
  options: { id: "element-1" },
  handler: () => console.log("element-1 deleted"),
});

// later on...
unsubscribe();
```

#### onElementGroupChange()

> **onElementGroupChange**(`args`): `VoidFunction`

Adds a listener for when an element group changes.

##### Parameters

##### args

##### options

\{ `id`: `string`; }

##### options.id

`string`

##### handler

(`change`) => `void`

##### Returns

`VoidFunction`

A function to unsubscribe from the listener

##### Example

```typescript
const unsubscribe = felt.onElementGroupChange({
  options: { id: "element-group-1" },
  handler: elementGroup => console.log(elementGroup.id),
});

// later on...
unsubscribe();
```

#### onPointerClick()

> **onPointerClick**(`params`): `VoidFunction`

Allows you to be notified the user clicks on the map.

##### Parameters

##### params

##### handler

(`event`) => `void`

##### Returns

`VoidFunction`

A function to unsubscribe from the listener

##### Example

```typescript
const unsubscribe = felt.onPointerClick({
  handler: (event) => console.log(event.center, event.features),
});

// later on...
unsubscribe();
```

#### onPointerMove()

> **onPointerMove**(`params`): `VoidFunction`

Allows you to be notified the user moves the mouse over the map.

##### Parameters

##### params

Params for the listener

##### handler

(`event`) => `void`

The handler function

##### Returns

`VoidFunction`

A function to unsubscribe from the listener

##### Example

```typescript
// Track mouse movement and features under cursor
const unsubscribe = felt.onPointerMove({
  handler: (event) => {
    console.log("Mouse position:", event.center);
    console.log("Features under cursor:", event.features);
  }
});

// later on...
unsubscribe();
```

#### onLayerChange()

> **onLayerChange**(`args`): `VoidFunction`

Adds a listener for when a layer changes.

##### Parameters

##### args

##### options

\{ `id`: `string`; }

##### options.id

`string`

The id of the layer to listen for changes to.

##### handler

(`change`) => `void`

The handler that is called when the layer changes.

##### Returns

`VoidFunction`

A function to unsubscribe from the listener

##### Example

```typescript
const unsubscribe = felt.onLayerChange({
  options: { id: "layer-1" },
  handler: ({layer}) => console.log(layer.bounds),
});

// later on...
unsubscribe();
```

#### onLayerGroupChange()

> **onLayerGroupChange**(`args`): `VoidFunction`

Adds a listener for when a layer group changes.

##### Parameters

##### args

##### options

\{ `id`: `string`; }

##### options.id

`string`

##### handler

(`change`) => `void`

##### Returns

`VoidFunction`

A function to unsubscribe from the listener

##### Example

```typescript
const unsubscribe = felt.onLayerGroupChange({
  options: { id: "layer-group-1" },
  handler: ({layerGroup}) => console.log(layerGroup.id),
});

// later on...
unsubscribe();
```

#### onLegendItemChange()

> **onLegendItemChange**(`args`): `VoidFunction`

Adds a listener for when a legend item changes.

##### Parameters

##### args

##### options

[`LegendItemIdentifier`](client.md#legenditemidentifier)

##### handler

(`change`) => `void`

##### Returns

`VoidFunction`

A function to unsubscribe from the listener

##### Example

```typescript
const unsubscribe = felt.onLegendItemChange({
  options: { layerId: "layer-1", id: "item-1-0" },
  handler: ({legendItem}) => console.log(legendItem.visible),
});

// later on...
unsubscribe();
```

#### onLayerFiltersChange()

> **onLayerFiltersChange**(`params`): `VoidFunction`

Adds a listener for when a layer's filters change.

##### Parameters

##### params

##### options

\{ `layerId`: `string`; }

##### options.layerId

`string`

##### handler

(`change`) => `void`

##### Returns

`VoidFunction`

A function to unsubscribe from the listener

##### Remarks

This event fires whenever any type of filter changes on the layer, including
ephemeral filters set via the SDK, style-based filters, or filters set through
the Felt UI via Components.

##### Example

```typescript
const unsubscribe = felt.onLayerFiltersChange({
  options: { layerId: "layer-1" },
  handler: ({combined, ephemeral, style, components}) => {
    console.log("Layer filters updated:", {
      combined,  // All filters combined
      ephemeral, // Filters set via SDK
      style,     // Filters from layer style
      components // Filters from UI components
    });
  },
});

// later on...
unsubscribe();
```

#### onLayerBoundariesChange()

> **onLayerBoundariesChange**(`params`): `VoidFunction`

Adds a listener for when a layer's spatial boundaries change.

##### Parameters

##### params

##### options

\{ `layerId`: `string`; }

##### options.layerId

`string`

The id of the layer to listen for boundary changes on.

##### handler

(`boundaries`) => `void`

A function that is called when the boundaries change.

##### Returns

`VoidFunction`

A function to unsubscribe from the listener

##### Remarks

This event fires whenever any type of spatial boundary changes on the layer, including
ephemeral boundaries set via the SDK or boundaries set through the Felt UI via
Spatial filter components.

##### Example

```typescript
const unsubscribe = felt.onLayerBoundariesChange({
  options: { layerId: "layer-1" },
  handler: ({combined, ephemeral, spatialFilters}) => {
    console.log("Layer boundaries updated:", {
      combined,  // All boundaries combined
      ephemeral, // Boundaries set via SDK
      spatialFilters // Boundaries set via UI
    });
  },
});

// later on...
unsubscribe();
```

#### onSelectionChange()

> **onSelectionChange**(`params`): `VoidFunction`

Adds a listener for when the selection changes.

##### Parameters

##### params

##### handler

(`change`) => `void`

##### Returns

`VoidFunction`

A function to unsubscribe from the listener

##### Example

```typescript
const unsubscribe = felt.onSelectionChange({
  handler: ({selection}) => console.log(selection),
});

// later on...
unsubscribe();
```

#### onViewportMove()

> **onViewportMove**(`args`): `VoidFunction`

Adds a listener for when the viewport changes.

##### Parameters

##### args

##### handler

(`viewport`) => `void`

This callback is called with the current viewport state whenever
the viewport changes.

##### Returns

`VoidFunction`

A function to unsubscribe from the listener

##### Example

```typescript
const unsubscribe = felt.onViewportMove({
  handler: viewport => console.log(viewport.center.latitude),
});

// later on...
unsubscribe();
```

#### onViewportMoveEnd()

> **onViewportMoveEnd**(`args`): `VoidFunction`

Adds a listener for when the viewport move ends, which is when the user
stops dragging or zooming the map, animations have finished, or inertial
dragging ends.

##### Parameters

##### args

##### handler

(`viewport`) => `void`

##### Returns

`VoidFunction`

A function to unsubscribe from the listener

##### Example

```typescript
const unsubscribe = felt.onViewportMoveEnd({
  handler: viewport => console.log(viewport.center.latitude),
});

// later on...
unsubscribe();
```

#### onMapIdle()

> **onMapIdle**(`args`): `VoidFunction`

Adds a listener for when the map is idle, which is defined as:

* No transitions are in progress
* The user is not interacting with the map, e.g. by panning or zooming
* All tiles for the current viewport have been loaded
* Any fade transitions (e.g. for labels) have completed

##### Parameters

##### args

##### handler

() => `void`

##### Returns

`VoidFunction`

A function to unsubscribe from the listener

##### Example

```typescript
const unsubscribe = felt.onMapIdle({ handler: () => console.log("map is idle") });

// later on...
unsubscribe();
```

### Properties

#### iframe

> `readonly` **iframe**: `null` | `HTMLIFrameElement`

The iframe element containing the Felt map, if it is an embedded map.

## FeltEmbedOptions

### Properties

#### uiControls?

> `optional` **uiControls**: [`UiControlsOptions`](client.md#uicontrolsoptions)

#### initialViewport?

> `optional` **initialViewport**: [`ViewportCenterZoom`](client.md#viewportcenterzoom)

#### token?

> `optional` **token**: `string`

A short-lived (15 minutes) authentication token to use for showing embeds that are configured to be
private.

## ElementNode

References an element on the map.

### Properties

#### type

> **type**: `"element"`

#### entity

> **entity**: [`Element`](client.md#element-1)

## ElementGroupNode

References an element group.

### Properties

#### type

> **type**: `"elementGroup"`

#### entity

> **entity**: [`ElementGroup`](client.md#elementgroup)

## LayerNode

References a layer on the map.

### Properties

#### type

> **type**: `"layer"`

#### entity

> **entity**: [`Layer`](client.md#layer-1)

## LayerGroupNode

References a layer group on the map.

### Properties

#### type

> **type**: `"layerGroup"`

#### entity

> **entity**: [`LayerGroup`](client.md#layergroup)

## FeatureNode

References a feature on the map.

### Properties

#### type

> **type**: `"feature"`

#### entity

> **entity**: [`LayerFeature`](client.md#layerfeature)

## FeatureSelection

The options for selecting a feature in a layer.

### Properties

#### id

> **id**: `string` | `number`

The id of the feature to select.

#### layerId

> **layerId**: `string`

The id of the layer that the feature belongs to.

#### showPopup?

> `optional` **showPopup**: `boolean`

Whether to show the feature's popup, if it is configured in the layer's style.

##### Default

```ts
true
```

#### fitViewport?

> `optional` **fitViewport**: `boolean` | \{ `maxZoom`: `number`; }

Whether to center the view on the feature after selecting it.

When true, the viewport will be centered on the feature and zoomed to fit the feature
in the viewport. If you need to control the zoom level to prevent it zooming in too
far, you can pass an object with a `maxZoom` property.

This is useful for avoiding zooming in too far on point features, or if you want
to maintain the current zoom level.

##### Default

```ts
true
```

## LatLng

Represents a point in world coordinates.

### Properties

#### latitude

> **latitude**: `number`

#### longitude

> **longitude**: `number`

## GeoJsonFeature

A GeoJSON feature object, compliant with:
[https://datatracker.ietf.org/doc/html/rfc7946#section-3.2](https://datatracker.ietf.org/doc/html/rfc7946#section-3.2)

### Properties

#### type

> **type**: `"Feature"`

#### geometry

> **geometry**: [`GeoJsonGeometry`](client.md#geojsongeometry)

The feature's geometry

#### properties

> **properties**: [`GeoJsonProperties`](client.md#geojsonproperties)

Properties associated with this feature.

#### bbox?

> `optional` **bbox**: \[`number`, `number`, `number`, `number`]

The bounding box of the feature in \[west, south, east, north] order.

#### id?

> `optional` **id**: `string` | `number`

A value that uniquely identifies this feature in a
[https://tools.ietf.org/html/rfc7946#section-3.2](https://tools.ietf.org/html/rfc7946#section-3.2).

## PointGeometry

### Properties

#### type

> **type**: `"Point"`

#### coordinates

> **coordinates**: [`LngLatTuple`](client.md#lnglattuple)

## MultiPointGeometry

A GeoJSON multi-point geometry.

### Remarks

You shouldn't expect this to come from Felt - it is here for completeness
of the GeoJSON spec.

### Properties

#### type

> **type**: `"MultiPoint"`

#### coordinates

> **coordinates**: [`LngLatTuple`](client.md#lnglattuple)\[]

## PolygonGeometry

### Properties

#### type

> **type**: `"Polygon"`

#### coordinates

> **coordinates**: \[`number`, `number`]\[]\[]

The coordinates of a polygon. The first array is the exterior ring, and
any subsequent arrays are the interior rings.

Each ring must have at least 4 points: 3 to make a valid triangle and the
last to close the path, which must be identical to the first.

## MultiPolygonGeometry

A GeoJSON multi-polygon geometry.

### Properties

#### type

> **type**: `"MultiPolygon"`

#### coordinates

> **coordinates**: \[`number`, `number`]\[]\[]\[]

## LineStringGeometry

A GeoJSON line string geometry.

### Properties

#### type

> **type**: `"LineString"`

#### coordinates

> **coordinates**: [`LngLatTuple`](client.md#lnglattuple)\[]

## MultiLineStringGeometry

A GeoJSON multi-line string geometry.

### Properties

#### type

> **type**: `"MultiLineString"`

#### coordinates

> **coordinates**: [`LngLatTuple`](client.md#lnglattuple)\[]\[]

## SortConfig

Configuration for sorting data by a specific attribute

### Properties

#### direction

> **direction**: `"asc"` | `"desc"`

The direction to sort in

#### attribute

> **attribute**: `string`

The attribute to sort by. What this represents depends on the context.
For instance, when sorting features in a data table, the attribute is
the column to sort by.

## ToolsController

The Tools controller allows you to let users draw elements on the map.

### Extended by

* [`FeltController`](client.md#feltcontroller)

### Methods

#### setTool()

> **setTool**(`tool`): `void`

Sets the tool to use for drawing elements on the map.

##### Parameters

##### tool

The tool to set.

`null` | [`ToolType`](client.md#tooltype)

##### Returns

`void`

##### Example

```typescript
// Set the tool to "marker"
await felt.setTool("marker");

// put down the tool
await felt.setTool(null);
```

#### getTool()

> **getTool**(): `Promise`\<`null` | [`ToolType`](client.md#tooltype)>

Gets the current tool, if any is in use.

##### Returns

`Promise`\<`null` | [`ToolType`](client.md#tooltype)>

The current tool, or `null` if no tool is in use.

##### Example

```typescript
const tool = await felt.getTool(); // "marker", "polygon", etc.
```

#### onToolChange()

> **onToolChange**(`args`): `VoidFunction`

Listens for changes to the current tool.

##### Parameters

##### args

##### handler

(`tool`) => `void`

This callback is called with the current tool whenever the tool changes.

##### Returns

`VoidFunction`

A function to unsubscribe from the listener

##### Example

```typescript
const unsubscribe = felt.onToolChange({
  handler: tool => console.log(tool),
});

// later on...
unsubscribe();
```

#### setToolSettings()

> **setToolSettings**(`settings`): `void`

Sets the settings for the current tool.

##### Parameters

##### settings

[`InputToolSettings`](client.md#inputtoolsettings)

The settings to set.

##### Returns

`void`

##### Example

```typescript
// Set the settings for the marker tool
await felt.setToolSettings({
  tool: "marker",
  color: "#FE17",
});
```

#### getToolSettings()

> **getToolSettings**\<`T`>(`tool`): `Promise`\<[`ToolSettingsMap`](client.md#toolsettingsmap)\[`T`]>

Gets the settings for the chosen tool

##### Type Parameters

• **T** *extends* [`ConfigurableToolType`](client.md#configurabletooltype)

##### Parameters

##### tool

`T`

##### Returns

`Promise`\<[`ToolSettingsMap`](client.md#toolsettingsmap)\[`T`]>

The settings for the chosen tool.

##### Example

```typescript
const settings = await felt.getToolSettings("marker");
```

#### onToolSettingsChange()

> **onToolSettingsChange**(`args`): `VoidFunction`

Listens for changes to the settings on all tools.

##### Parameters

##### args

##### handler

(`settings`) => `void`

##### Returns

`VoidFunction`

A function to unsubscribe from the listener

##### Example

```typescript
const unsubscribe = felt.onToolSettingsChange({
  handler: settings => console.log(settings),
});

// later on...
unsubscribe();
```

## PinToolSettings

### Properties

#### color

> **color**: `string`

The color of the element in some CSS-like format.

##### Example

```typescript
"#ABC123";
"rgb(255, 0, 0)";
"hsl(200, 100%, 50%)";
```

##### Default

```ts
"#C93535"
```

#### frame

> **frame**: `null` | `"frame-circle"` | `"frame-square"`

The frame that is rendered around the Place's symbol. This is
only available for non-emoji symbols.

#### showInspector

> **showInspector**: `boolean`

Whether to show the tool inspector.

##### Default Value

`false`

#### symbol

> **symbol**: [`PlaceSymbol`](client.md#placesymbol)

The symbol that is rendered for the Place.

This can be an emoji by using colon-enclosed characters (e.g. `":smiley:"`)
or one of the symbols available in Felt's symbol library.

You can see the available symbols in the Felt UI when editing a Place
by hovering a symbol and converting the tooltip to kebab-case. For example,
the "Oil barrel" symbol is `oil-barrel`.

#### afterCreation

> **afterCreation**: `"enter name"` | `"add another"` | `"select"`

What to do after creating the Place element.

* `"enter name"`: Enter a name for the Place, focusing the name input.
* `"add another"`: Add another Place, leaving the tool still selected.
* `"select"`: Puts the tool down and selects the new Place element.

##### Default Value

`"enter name"`

## LineToolSettings

### Properties

#### color

> **color**: `string`

The color of the element in some CSS-like format.

##### Example

```typescript
"#ABC123";
"rgb(255, 0, 0)";
"hsl(200, 100%, 50%)";
```

##### Default

```ts
"#C93535"
```

#### strokeOpacity

> **strokeOpacity**: `number`

A value between 0 and 1 that describes the opacity of the element's stroke.

##### Default

```ts
1
```

#### strokeWidth

> **strokeWidth**: `number`

The width of the element's stroke in pixels.

##### Default

```ts
2
```

#### strokeStyle

> **strokeStyle**: `"solid"` | `"dashed"` | `"dotted"`

The style of the element's stroke.

##### Default

```ts
"solid"
```

#### distanceMarker

> **distanceMarker**: `boolean`

Whether a distance marker is shown at the midpoint of the path.

##### Default

```ts
false
```

#### showInspector

> **showInspector**: `boolean`

Whether to show the tool inspector.

##### Default Value

`false`

## RouteToolSettings

### Properties

#### color

> **color**: `string`

The color of the element in some CSS-like format.

##### Example

```typescript
"#ABC123";
"rgb(255, 0, 0)";
"hsl(200, 100%, 50%)";
```

##### Default

```ts
"#C93535"
```

#### strokeOpacity

> **strokeOpacity**: `number`

A value between 0 and 1 that describes the opacity of the element's stroke.

##### Default

```ts
1
```

#### strokeWidth

> **strokeWidth**: `number`

The width of the element's stroke in pixels.

##### Default

```ts
2
```

#### strokeStyle

> **strokeStyle**: `"solid"` | `"dashed"` | `"dotted"`

The style of the element's stroke.

##### Default

```ts
"solid"
```

#### distanceMarker

> **distanceMarker**: `boolean`

Whether a distance marker is shown at the midpoint of the path.

##### Default

```ts
false
```

#### routingMode

> **routingMode**: `null` | `"driving"` | `"cycling"` | `"walking"` | `"flying"`

Whether this represents a route, and if so, what mode of transport
is used.

If this is `null`, the path is not considered to be a route, so while it
can have a `distanceMarker`, it will does not have a start or end cap.

##### Default

```ts
null
```

#### endCaps

> **endCaps**: `boolean`

Whether or not to show Start and End caps on the path. This is
only available if the `routingMode` is set.

##### Default

```ts
false
```

#### showInspector

> **showInspector**: `boolean`

Whether to show the tool inspector.

##### Default Value

`false`

## PolygonToolSettings

### Properties

#### color

> **color**: `string`

The color of the element in some CSS-like format.

##### Example

```typescript
"#ABC123";
"rgb(255, 0, 0)";
"hsl(200, 100%, 50%)";
```

##### Default

```ts
"#C93535"
```

#### strokeOpacity

> **strokeOpacity**: `number`

A value between 0 and 1 that describes the opacity of the element's stroke.

##### Default

```ts
1
```

#### strokeWidth

> **strokeWidth**: `number`

The width of the element's stroke in pixels.

##### Default

```ts
2
```

#### strokeStyle

> **strokeStyle**: `"solid"` | `"dashed"` | `"dotted"`

The style of the element's stroke.

##### Default

```ts
"solid"
```

#### fillOpacity

> **fillOpacity**: `number`

The opacity of the polygon's fill, between 0 and 1.

##### Default

```ts
0.25
```

#### areaMarker

> **areaMarker**: `boolean`

Whether to show an area marker on the polygon.

##### Default

```ts
false
```

#### showInspector

> **showInspector**: `boolean`

Whether to show the tool inspector.

##### Default Value

`false`

## CircleToolSettings

### Properties

#### color

> **color**: `string`

The color of the element in some CSS-like format.

##### Example

```typescript
"#ABC123";
"rgb(255, 0, 0)";
"hsl(200, 100%, 50%)";
```

##### Default

```ts
"#C93535"
```

#### strokeOpacity

> **strokeOpacity**: `number`

A value between 0 and 1 that describes the opacity of the element's stroke.

##### Default

```ts
1
```

#### strokeWidth

> **strokeWidth**: `number`

The width of the element's stroke in pixels.

##### Default

```ts
2
```

#### strokeStyle

> **strokeStyle**: `"solid"` | `"dashed"` | `"dotted"`

The style of the element's stroke.

##### Default

```ts
"solid"
```

#### radiusMarker

> **radiusMarker**: `boolean`

Whether to show a marker on the circle that indicates the radius

##### Default

```ts
false
```

#### fillOpacity

> **fillOpacity**: `number`

The opacity of the circle's fill.

##### Default

```ts
0.25
```

#### showInspector

> **showInspector**: `boolean`

Whether to show the tool inspector.

##### Default Value

`false`

## MarkerToolSettings

### Properties

#### color

> **color**: `string`

The color of the element in some CSS-like format.

##### Example

```typescript
"#ABC123";
"rgb(255, 0, 0)";
"hsl(200, 100%, 50%)";
```

##### Default

```ts
"#C93535"
```

#### opacity

> **opacity**: `number`

The opacity of the marker, between 0 and 1.

##### Default

```ts
1
```

#### size

> **size**: `number`

The size of the marker, used in conjunction with the `zoom` to determine
the actual size of the marker.

##### Default

```ts
10
```

#### showInspector

> **showInspector**: `boolean`

Whether to show the tool inspector.

##### Default Value

`false`

## HighlighterToolSettings

### Properties

#### color

> **color**: `string`

The color of the element in some CSS-like format.

##### Example

```typescript
"#ABC123";
"rgb(255, 0, 0)";
"hsl(200, 100%, 50%)";
```

##### Default

```ts
"#C93535"
```

#### renderHoles

> **renderHoles**: `boolean`

Whether to render the holes of the highlighted area.

##### Default

```ts
false
```

#### opacity

> **opacity**: `number`

The opacity of the highlighter, between 0 and 1.

##### Default

```ts
0.5
```

#### showInspector

> **showInspector**: `boolean`

Whether to show the tool inspector.

##### Default Value

`false`

#### size

> **size**: `number`

## TextToolSettings

### Properties

#### color

> **color**: `string`

The color of the element in some CSS-like format.

##### Example

```typescript
"#ABC123";
"rgb(255, 0, 0)";
"hsl(200, 100%, 50%)";
```

##### Default

```ts
"#C93535"
```

#### align

> **align**: `"center"` | `"left"` | `"right"`

The alignment of the text, either `left`, `center` or `right`.

##### Default

```ts
"center"
```

#### style

> **style**: `"italic"` | `"light"` | `"regular"` | `"caps"`

The style of the text, either `italic`, `light`, `regular` or `caps`.

##### Default

```ts
"regular"
```

#### showInspector

> **showInspector**: `boolean`

Whether to show the tool inspector.

##### Default Value

`false`

## NoteToolSettings

### Properties

#### color

> **color**: `string`

The color of the element in some CSS-like format.

##### Example

```typescript
"#ABC123";
"rgb(255, 0, 0)";
"hsl(200, 100%, 50%)";
```

##### Default

```ts
"#C93535"
```

#### align

> **align**: `"center"` | `"left"` | `"right"`

The alignment of the text, either `left`, `center` or `right`.

##### Default

```ts
"center"
```

#### style

> **style**: `"italic"` | `"light"` | `"regular"` | `"caps"`

The style of the text, either `italic`, `light`, `regular` or `caps`.

##### Default

```ts
"regular"
```

#### showInspector

> **showInspector**: `boolean`

Whether to show the tool inspector.

##### Default Value

`false`

## CreateActionTriggerParams

### Properties

#### actionTrigger

> **actionTrigger**: [`UIActionTriggerCreate`](client.md#uiactiontriggercreate)

#### placement?

> `optional` **placement**: \{ `after`: `string`; } | \{ `before`: `string`; } | \{ `at`: `"start"` | `"end"`; }

## UpdateActionTriggerParams

### Properties

#### id

> **id**: `string`

#### label?

> `optional` **label**: `string`

The label of the action trigger.

#### disabled?

> `optional` **disabled**: `boolean`

Whether the action trigger is disabled or not.

#### type?

> `optional` **type**: `undefined`

#### onTrigger()?

> `optional` **onTrigger**: (`args`) => `void`

The function to call when the action trigger is triggered.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the action trigger.

##### Returns

`void`

#### onCreate()?

> `optional` **onCreate**: (`args`) => `void`

A function to call when the element is created.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### onDestroy()?

> `optional` **onDestroy**: (`args`) => `void`

A function to call when the element is destroyed.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

## CreatePanelParams

The parameters for adding a panel to the map by using [UiController.createPanel](client.md#createpanel).

### Properties

#### panel

> **panel**: [`UIPanelCreate`](client.md#uipanelcreate)

The panel to add.

#### placement?

> `optional` **placement**: \{ `after`: `string`; } | \{ `before`: `string`; } | \{ `at`: `"start"` | `"end"`; }

The placement of the panel on the right sidebar stack.

##### Default Value

`{ at: "end" }`

## UpdatePanelParams

### Properties

#### id

> **id**: `string`

The ID of the element.

#### title?

> `optional` **title**: `string`

The title to display in the panel header.

#### onClickClose()?

> `optional` **onClickClose**: (`args`) => `void`

A function to call when panel's close button is clicked.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the panel.

##### Returns

`void`

#### type?

> `optional` **type**: `"Panel"`

#### body?

> `optional` **body**: [`UIPanelElementCreate`](client.md#uipanelelementcreate)\[]

The elements to add to the panel body.

#### footer?

> `optional` **footer**: [`UIPanelElementCreate`](client.md#uipanelelementcreate)\[]

The elements to add to the panel footer.

#### onCreate()?

> `optional` **onCreate**: (`args`) => `void`

A function to call when the element is created.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### onDestroy()?

> `optional` **onDestroy**: (`args`) => `void`

A function to call when the element is destroyed.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

## CreatePanelElementsParams

### Properties

#### panelId

> **panelId**: `string`

#### elements

> **elements**: `object`\[]

##### element

> **element**: [`UIFlexibleSpaceElementCreate`](client.md#uiflexiblespaceelementcreate) | [`UIPanelElementCreate`](client.md#uipanelelementcreate)

##### container?

> `optional` **container**: `"footer"` | `"body"` | \{ `id`: `string`; }

The section of the panel to add the element to.
It can be either one of the top-level sections of the panel (`"body"` or `"footer"`)
or a specific container (like `ButtonGroup`) in the panel (`{ id: string }`).

##### Default Value

`"body"`

##### placement?

> `optional` **placement**: \{ `after`: `string`; } | \{ `before`: `string`; } | \{ `at`: `"start"` | `"end"`; }

The placement of the element in the target container (based on the `container` property).

##### Default Value

`{ at: "end" }`

## UpdatePanelElementsParams

### Properties

#### panelId

> **panelId**: `string`

The ID of the panel to update.

#### elements

> **elements**: `object`\[]

Dictionary of element IDs to the element to update.

##### element

> **element**: [`UIPanelElementUpdate`](client.md#uipanelelementupdate)

## DeletePanelElementsParams

### Properties

#### panelId

> **panelId**: `string`

#### elements

> **elements**: `string`\[]

## UiControlsOptions

### Properties

#### showLegend?

> `optional` **showLegend**: `boolean`

Whether or not the legend is shown.

##### Default Value

```ts
true
```

#### cooperativeGestures?

> `optional` **cooperativeGestures**: `boolean`

When co-operative gestures are enabled, the pan and zoom gestures are
adjusted to work better when the map is embedded in another page.

##### Remarks

On mobile devices, enabling co-operative gestures will allow the user to
pan past the embedded map with a single finger drag. To pan the map, they
must use two fingers.

On desktop devices, enabling co-operative gestures allows the user to
scroll past the embedded map using their scroll wheel or trackpad. To
zoom the map, they must hold the Ctrl (Windows) or Command key (Mac) while
scrolling.

##### Default Value

```ts
true
```

#### fullScreenButton?

> `optional` **fullScreenButton**: `boolean`

Whether or not the full screen button is shown in an embedded map.

##### Remarks

When clicked, this will open the map in a new tab or window.

##### Default Value

```ts
true
```

#### geolocation?

> `optional` **geolocation**: `boolean`

Whether or not the geolocation button is shown in an embedded map.

##### Remarks

The geolocation feature will plot your position on the map. If you
click the button again, it will start tracking your position.

##### Default Value

```ts
false
```

#### zoomControls?

> `optional` **zoomControls**: `boolean`

Whether or not the zoom controls are shown in an embedded map.

##### Remarks

This does not affect whether or not the map can be zoomed, just
the display of the zoom controls in the bottom right corner of the map.

##### Default Value

```ts
true
```

#### scaleBar?

> `optional` **scaleBar**: `boolean`

Whether or not the scale bar is shown in an embedded map.

##### Default Value

```ts
true
```

## OnMapInteractionsOptions

The options for which parts of the Felt UI can be shown when interacting with
features and elements on the map.

Switching these off can be useful if you add your own click, selection or hover
handlers for features and elements.

### Properties

#### featureSelectPanel?

> `optional` **featureSelectPanel**: `boolean`

Set this to `false` to prevent the panel that shows information about a selected
feature from being shown.

#### featureHoverPanel?

> `optional` **featureHoverPanel**: `boolean`

Set this to `false` to prevent the panel that shows information about a hovered
feature from being shown.

#### elementSelectPanel?

> `optional` **elementSelectPanel**: `boolean`

Set this to `false` to prevent the panel that shows information about a selected
element from being shown.

#### linkClickOpen?

> `optional` **linkClickOpen**: `boolean`

Set this to `false` to prevent clicking on a map link element from opening that link
in a new tab or window.

#### imageLightboxOpen?

> `optional` **imageLightboxOpen**: `boolean`

Set this to `false` to prevent clicking on an image element from opening the image
in a lightbox.

## UIActionTriggerCreate

Represents an action trigger.
It can be added to the map by using the [UiController.createActionTrigger](client.md#createactiontrigger) method.

### Properties

#### label

> **label**: `string`

The label of the action trigger.

#### onTrigger()

> **onTrigger**: (`args`) => `void`

The function to call when the action trigger is triggered.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the action trigger.

##### Returns

`void`

#### id?

> `optional` **id**: `string`

#### disabled?

> `optional` **disabled**: `boolean`

Whether the action trigger is disabled or not.

#### type?

> `optional` **type**: `undefined`

#### onCreate()?

> `optional` **onCreate**: (`args`) => `void`

A function to call when the element is created.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### onDestroy()?

> `optional` **onDestroy**: (`args`) => `void`

A function to call when the element is destroyed.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

## UIButtonElement

Represents a button element in a panel.

### Example

```typescript
{
  type: "Button",
  label: "Click me",
  onClick: () => alert("Button clicked"),
}
```

### Properties

#### type

> **type**: `"Button"`

#### label

> **label**: `string`

The label to display in the button.

#### onClick()

> **onClick**: (`args`) => `void`

The action to perform when the button is clicked.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the button.

##### Returns

`void`

#### id

> **id**: `string`

The ID of the element.

#### variant?

> `optional` **variant**: `"primary"` | `"outlined"` | `"transparent"` | `"transparentThin"`

The style variant of the button.

* `"primary"`: A solid button with Felt's primary background color (pink).
* `"outlined"`: A button with a border and no background color.
* `"transparent"`: A button with no background color and no border.
* `"transparentThin"`: Same as `transparent` but with lighter font weight.

##### Default Value

`"primary"`

#### disabled?

> `optional` **disabled**: `boolean`

Whether the button is disabled.

##### Default Value

`false`

#### onCreate()?

> `optional` **onCreate**: (`args`) => `void`

A function to call when the element is created.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### onDestroy()?

> `optional` **onDestroy**: (`args`) => `void`

A function to call when the element is destroyed.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

## UIButtonElementCreate

The parameters for creating a button element.

See [UIButtonElement](client.md#uibuttonelement) for more details.

### Remarks

`id` is optional but recommended if you want to be able to perform updates.

### Properties

#### type

> **type**: `"Button"`

#### label

> **label**: `string`

The label to display in the button.

#### onClick()

> **onClick**: (`args`) => `void`

The action to perform when the button is clicked.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the button.

##### Returns

`void`

#### variant?

> `optional` **variant**: `"primary"` | `"outlined"` | `"transparent"` | `"transparentThin"`

The style variant of the button.

* `"primary"`: A solid button with Felt's primary background color (pink).
* `"outlined"`: A button with a border and no background color.
* `"transparent"`: A button with no background color and no border.
* `"transparentThin"`: Same as `transparent` but with lighter font weight.

##### Default Value

`"primary"`

#### disabled?

> `optional` **disabled**: `boolean`

Whether the button is disabled.

##### Default Value

`false`

#### onCreate()?

> `optional` **onCreate**: (`args`) => `void`

A function to call when the element is created.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### onDestroy()?

> `optional` **onDestroy**: (`args`) => `void`

A function to call when the element is destroyed.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### id?

> `optional` **id**: `string`

The ID of the element.

##### Remarks

If not provided, the element will be assigned a random ID, but it is recommended to provide it
to perform further updates on the element.

If provided, it must be unique within the UI.

##### Default Value

`undefined`

## UIButtonElementUpdate

The parameters for updating a button element.

See [UIButtonElement](client.md#uibuttonelement) for more details.

### Remarks

`id` and `type` are required to identify the element to update.

### Properties

#### type

> **type**: `"Button"`

#### id

> **id**: `string`

The ID of the element.

#### label?

> `optional` **label**: `string`

The label to display in the button.

#### variant?

> `optional` **variant**: `"primary"` | `"outlined"` | `"transparent"` | `"transparentThin"`

The style variant of the button.

* `"primary"`: A solid button with Felt's primary background color (pink).
* `"outlined"`: A button with a border and no background color.
* `"transparent"`: A button with no background color and no border.
* `"transparentThin"`: Same as `transparent` but with lighter font weight.

##### Default Value

`"primary"`

#### disabled?

> `optional` **disabled**: `boolean`

Whether the button is disabled.

##### Default Value

`false`

#### onClick()?

> `optional` **onClick**: (`args`) => `void`

The action to perform when the button is clicked.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the button.

##### Returns

`void`

#### onCreate()?

> `optional` **onCreate**: (`args`) => `void`

A function to call when the element is created.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### onDestroy()?

> `optional` **onDestroy**: (`args`) => `void`

A function to call when the element is destroyed.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

## UIButtonGroupElement

Represents a button group element in a panel.
A button group is an horizontal container of buttons and text elements.

### Example

Thanks to the FlexibleSpace element, button 1 and text 1 are aligned to the start of the panel,
while button 2 is aligned to the end.

```typescript
{
  type: "ButtonGroup",
  items: [
    { type: "Button", label: "Button 1", onClick: () => {} },
    { type: "Text", content: "Text 1" },
    { type: "FlexibleSpace" },
    { type: "Button", label: "Button 2", onClick: () => {} },
  ],
}
```

### Properties

#### type

> **type**: `"ButtonGroup"`

#### items

> **items**: ([`UIFlexibleSpaceElement`](client.md#uiflexiblespaceelement) | [`UIButtonElement`](client.md#uibuttonelement) | [`UITextElement`](client.md#uitextelement))\[]

The items to add to the button group.

#### id

> **id**: `string`

The ID of the element.

#### align?

> `optional` **align**: `"start"` | `"end"`

The alignment of the button group.

##### Default Value

`"end"`

#### onCreate()?

> `optional` **onCreate**: (`args`) => `void`

A function to call when the element is created.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### onDestroy()?

> `optional` **onDestroy**: (`args`) => `void`

A function to call when the element is destroyed.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

## UIButtonGroupElementCreate

The parameters for creating a button group element.

See [UIButtonGroupElement](client.md#uibuttongroupelement) for more details.

### Remarks

`id` is optional but recommended if you want to be able to perform updates.

### Properties

#### type

> **type**: `"ButtonGroup"`

#### items

> **items**: ([`UIFlexibleSpaceElementCreate`](client.md#uiflexiblespaceelementcreate) | [`UIButtonElementCreate`](client.md#uibuttonelementcreate) | [`UITextElementCreate`](client.md#uitextelementcreate))\[]

The items to add to the button group.

#### align?

> `optional` **align**: `"start"` | `"end"`

The alignment of the button group.

##### Default Value

`"end"`

#### onCreate()?

> `optional` **onCreate**: (`args`) => `void`

A function to call when the element is created.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### onDestroy()?

> `optional` **onDestroy**: (`args`) => `void`

A function to call when the element is destroyed.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### id?

> `optional` **id**: `string`

The ID of the element.

##### Remarks

If not provided, the element will be assigned a random ID, but it is recommended to provide it
to perform further updates on the element.

If provided, it must be unique within the UI.

##### Default Value

`undefined`

## UIButtonGroupElementUpdate

The parameters for updating a button group element.

See [UIButtonGroupElement](client.md#uibuttongroupelement) for more details.

### Remarks

`id` and `type` are required to update the button group element.

### Properties

#### type

> **type**: `"ButtonGroup"`

#### id

> **id**: `string`

The ID of the element.

#### align?

> `optional` **align**: `"start"` | `"end"`

The alignment of the button group.

##### Default Value

`"end"`

#### items?

> `optional` **items**: ([`UIFlexibleSpaceElementCreate`](client.md#uiflexiblespaceelementcreate) | [`UIButtonElementCreate`](client.md#uibuttonelementcreate) | [`UITextElementCreate`](client.md#uitextelementcreate))\[]

The items to add to the button group.

#### onCreate()?

> `optional` **onCreate**: (`args`) => `void`

A function to call when the element is created.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### onDestroy()?

> `optional` **onDestroy**: (`args`) => `void`

A function to call when the element is destroyed.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

## UIDividerElement

Represents a divider element in a panel.
This element is used to separate other elements in a panel.
It is rendered as a gray horizontal line of 1px height.

### Example

Divider element is useful to separate sections of a panel.

```typescript
{
  body: [
    { type: "Text", content: "Contact" },
    { type: "TextInput", placeholder: "Enter your name", ... },
    { type: "TextInput", placeholder: "Enter your email", ... },
    { type: "Divider" },
    { type: "Text", content: "Address" },
    { type: "TextInput", placeholder: "Enter your address", ... },
  ],
}
```

### Properties

#### type

> **type**: `"Divider"`

#### id

> **id**: `string`

The ID of the element.

#### onCreate()?

> `optional` **onCreate**: (`args`) => `void`

A function to call when the element is created.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### onDestroy()?

> `optional` **onDestroy**: (`args`) => `void`

A function to call when the element is destroyed.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

## UIDividerElementCreate

The parameters for creating a divider element.

See [UIDividerElement](client.md#uidividerelement) for more details.

### Remarks

`id` is optional but recommended if you want to be able to delete the element.

### Properties

#### type

> **type**: `"Divider"`

#### onCreate()?

> `optional` **onCreate**: (`args`) => `void`

A function to call when the element is created.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### onDestroy()?

> `optional` **onDestroy**: (`args`) => `void`

A function to call when the element is destroyed.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### id?

> `optional` **id**: `string`

The ID of the element.

##### Remarks

If not provided, the element will be assigned a random ID, but it is recommended to provide it
to perform further updates on the element.

If provided, it must be unique within the UI.

##### Default Value

`undefined`

## UIDividerElementUpdate

The parameters for updating a divider element.

See [UIDividerElement](client.md#uidividerelement) for more details.

### Remarks

`id` and `type` are required to identify the element to update.

### Properties

#### type

> **type**: `"Divider"`

#### id

> **id**: `string`

The ID of the element.

#### onCreate()?

> `optional` **onCreate**: (`args`) => `void`

A function to call when the element is created.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### onDestroy()?

> `optional` **onDestroy**: (`args`) => `void`

A function to call when the element is destroyed.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

## UIFlexibleSpaceElement

Represents a flexible space element in a button group.
Useful to customize the spacing between button group items.

### Example

Buttons with a flexible space between makes them more visually separated.

```typescript
{
  type: "ButtonGroup",
  items: [
    { type: "Button", label: "Button 1", onClick: () => {} },
    { type: "FlexibleSpace" },
    { type: "Button", label: "Button 2", onClick: () => {} },
  ],
}
```

### Properties

#### type

> **type**: `"FlexibleSpace"`

#### id

> **id**: `string`

The ID of the element.

#### onCreate()?

> `optional` **onCreate**: (`args`) => `void`

A function to call when the element is created.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### onDestroy()?

> `optional` **onDestroy**: (`args`) => `void`

A function to call when the element is destroyed.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

## UIFlexibleSpaceElementCreate

The parameters for creating a flexible space element.

### Remarks

`id` is optional but recommended if you want to be able to perform updates.

### Properties

#### type

> **type**: `"FlexibleSpace"`

#### onCreate()?

> `optional` **onCreate**: (`args`) => `void`

A function to call when the element is created.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### onDestroy()?

> `optional` **onDestroy**: (`args`) => `void`

A function to call when the element is destroyed.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### id?

> `optional` **id**: `string`

The ID of the element.

##### Remarks

If not provided, the element will be assigned a random ID, but it is recommended to provide it
to perform further updates on the element.

If provided, it must be unique within the UI.

##### Default Value

`undefined`

## UIFlexibleSpaceElementUpdate

The parameters for updating a flexible space element.

See [UIFlexibleSpaceElement](client.md#uiflexiblespaceelement) for more details.

### Remarks

`id` and `type` are required to identify the element to update.

### Properties

#### type

> **type**: `"FlexibleSpace"`

#### id

> **id**: `string`

The ID of the element.

#### onCreate()?

> `optional` **onCreate**: (`args`) => `void`

A function to call when the element is created.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### onDestroy()?

> `optional` **onDestroy**: (`args`) => `void`

A function to call when the element is destroyed.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

## UIPanel

Represents a panel in the UI.
It can be added to the map by using the [UiController.createPanel](client.md#createpanel) method.

A panel is a container for other UI elements.
It can have a title, a body, a footer as well as a close button.

The body and footer are arrays of UI elements and turn into vertical stacks of elements.

The close button is a button rendered in the top right corner of the panel that can be
used to close the panel and is only visible if `onClickClose` is provided.
Usually, you want to call [UiController.deletePanel](client.md#deletepanel) when the close button is clicked,
e.g. `onClickClose: () => felt.deletePanel("my-panel")`.

### Body

Body is the main content of the panel. It is scrollable which means
that it can contain a lot of elements.

### Footer

Footer is sticky to the bottom of the panel, and can be used to add actions to the panel (e.g. save, cancel, etc.).
Normally, it should contain a `ButtonGroup` element with a `Cancel` and `Save` button. Using `ButtonGroup` is recommended
because it will automatically align the buttons to the end of the panel giving it a nice look.

### Examples

### basic

```typescript
{
  title: "My Panel",
  body: [
    { type: "Text", text: "Hello" },
  ],
}
```

### closable

````typescript
{
  id: "my-panel",
  title: "My Panel",
  onClickClose: () => felt.deletePanel("my-panel"),
}

@example
### form
```typescript
{
  title: "My Panel",
  body: [
    { type: "Text", text: "Introduce your name and last name" },
    { type: "TextInput", label: "Name", value: "", placeholder: "John", onChange: (value) => setName(value) },
    { type: "TextInput", label: "Last name", value: "", placeholder: "Doe", onChange: (value) => setLastName(value) },
  ],
  footer: [
    { type: "ButtonGroup", items: [
      { type: "Button", label: "Reset", onClick: () => alert("Reset") },
      { type: "Button", label: "Save", onClick: () => alert("Save") },
    ] },
  ],
}
````

### Properties

#### type

> **type**: `"Panel"`

#### body

> **body**: [`UIPanelElement`](client.md#uipanelelement)\[]

The elements to add to the panel body.

#### id

> **id**: `string`

The ID of the element.

#### title?

> `optional` **title**: `string`

The title to display in the panel header.

#### footer?

> `optional` **footer**: [`UIPanelElement`](client.md#uipanelelement)\[]

The elements to add to the panel footer.

#### onClickClose()?

> `optional` **onClickClose**: (`args`) => `void`

A function to call when panel's close button is clicked.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the panel.

##### Returns

`void`

#### onCreate()?

> `optional` **onCreate**: (`args`) => `void`

A function to call when the element is created.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### onDestroy()?

> `optional` **onDestroy**: (`args`) => `void`

A function to call when the element is destroyed.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

## UIPanelCreate

The parameters for creating a panel by using [UiController.createPanel](client.md#createpanel).

### See

[UIPanel](client.md#uipanel) for more information about panels.

### Remarks

`id` is optional but recommended if you want to be able to perform updates.

### Properties

#### body

> **body**: [`UIPanelElementCreate`](client.md#uipanelelementcreate)\[]

The elements to add to the panel body.

#### title?

> `optional` **title**: `string`

The title to display in the panel header.

#### onClickClose()?

> `optional` **onClickClose**: (`args`) => `void`

A function to call when panel's close button is clicked.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the panel.

##### Returns

`void`

#### type?

> `optional` **type**: `"Panel"`

#### footer?

> `optional` **footer**: [`UIPanelElementCreate`](client.md#uipanelelementcreate)\[]

The elements to add to the panel footer.

#### onCreate()?

> `optional` **onCreate**: (`args`) => `void`

A function to call when the element is created.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### onDestroy()?

> `optional` **onDestroy**: (`args`) => `void`

A function to call when the element is destroyed.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### id?

> `optional` **id**: `string`

The ID of the element.

##### Remarks

If not provided, the element will be assigned a random ID, but it is recommended to provide it
to perform further updates on the element.

If provided, it must be unique within the UI.

##### Default Value

`undefined`

## UISelectElement

Represents a select element in a panel.

### Remarks

`options` property is required.
`label` property is displayed above the select and used for screen readers.
`value` property is optional, for empty value use `undefined`.
`placeholder` property is displayed in the select when no value is selected.
`search` property is used to enable searching through the options.
`onChange` property is used to handle the value change event.

### Examples

### empty select

```typescript
{
  type: "Select",
  options: [{ label: "Option 1", value: "option1" }, { label: "Option 2", value: "option2" }],
  value: undefined,
  placeholder: "Select an option",
  onChange: (args) => console.log(args.value),
}
```

### with search

```typescript
{
  type: "Select",
  options: [{ label: "Option 1", value: "option1" }, { label: "Option 2", value: "option2" }],
  value: "option1",
  placeholder: "Select an option",
  search: true,
  onChange: (args) => console.log(args.value),
}
```

### Properties

#### type

> **type**: `"Select"`

#### options

> **options**: `object`\[]

The options to display in the select.

##### label

> **label**: `string`

##### value

> **value**: `string`

#### onChange()

> **onChange**: (`args`) => `void`

The function to call when the value of the select changes.

##### Parameters

##### args

The arguments passed to the function.

##### value

`string`

The value of the select.

##### id

`string`

The id of the select element.

##### Returns

`void`

#### id

> **id**: `string`

The ID of the element.

#### value?

> `optional` **value**: `string`

The value of the select.

#### placeholder?

> `optional` **placeholder**: `string`

The placeholder text to display in the select.

#### search?

> `optional` **search**: `boolean`

Whether the select should allow searching through the options.

##### Default Value

`false`

#### onCreate()?

> `optional` **onCreate**: (`args`) => `void`

A function to call when the element is created.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### onDestroy()?

> `optional` **onDestroy**: (`args`) => `void`

A function to call when the element is destroyed.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### label?

> `optional` **label**: `string`

Label text to display above the element and used for screen readers.

## UISelectElementCreate

The parameters for creating a select element.

See [UISelectElement](client.md#uiselectelement) for more details.

### Remarks

`id` is optional but recommended if you want to be able to perform updates.

### Properties

#### type

> **type**: `"Select"`

#### options

> **options**: `object`\[]

The options to display in the select.

##### label

> **label**: `string`

##### value

> **value**: `string`

#### onChange()

> **onChange**: (`args`) => `void`

The function to call when the value of the select changes.

##### Parameters

##### args

The arguments passed to the function.

##### value

`string`

The value of the select.

##### id

`string`

The id of the select element.

##### Returns

`void`

#### value?

> `optional` **value**: `string`

The value of the select.

#### placeholder?

> `optional` **placeholder**: `string`

The placeholder text to display in the select.

#### search?

> `optional` **search**: `boolean`

Whether the select should allow searching through the options.

##### Default Value

`false`

#### onCreate()?

> `optional` **onCreate**: (`args`) => `void`

A function to call when the element is created.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### onDestroy()?

> `optional` **onDestroy**: (`args`) => `void`

A function to call when the element is destroyed.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### id?

> `optional` **id**: `string`

The ID of the element.

##### Remarks

If not provided, the element will be assigned a random ID, but it is recommended to provide it
to perform further updates on the element.

If provided, it must be unique within the UI.

##### Default Value

`undefined`

#### label?

> `optional` **label**: `string`

Label text to display above the element and used for screen readers.

## UISelectElementUpdate

The parameters for updating a select element.

See [UISelectElement](client.md#uiselectelement) for more details.

### Remarks

`id` and `type` are required to identify the element to update.

### Properties

#### type

> **type**: `"Select"`

#### id

> **id**: `string`

The ID of the element.

#### options?

> `optional` **options**: `object`\[]

The options to display in the select.

##### label

> **label**: `string`

##### value

> **value**: `string`

#### value?

> `optional` **value**: `string`

The value of the select.

#### placeholder?

> `optional` **placeholder**: `string`

The placeholder text to display in the select.

#### search?

> `optional` **search**: `boolean`

Whether the select should allow searching through the options.

##### Default Value

`false`

#### onChange()?

> `optional` **onChange**: (`args`) => `void`

The function to call when the value of the select changes.

##### Parameters

##### args

The arguments passed to the function.

##### value

`string`

The value of the select.

##### id

`string`

The id of the select element.

##### Returns

`void`

#### onCreate()?

> `optional` **onCreate**: (`args`) => `void`

A function to call when the element is created.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### onDestroy()?

> `optional` **onDestroy**: (`args`) => `void`

A function to call when the element is destroyed.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### label?

> `optional` **label**: `string`

Label text to display above the element and used for screen readers.

## UITextElement

Represents a text element in a panel.
Markdown is supported.

### Examples

### simple

```typescript
{
  type: "Text",
  content: "Hello, world!",
}
```

### with links

```typescript
{
  type: "Text",
  content: "Fill the form https://www.google.com.",
}
```

### markdown

```typescript
{
  type: "Text",
  content: "**Hello**, _world_!",
}
```

### complex markdown

Complex markdown syntax is supported like tables, images, quotes, etc.

```typescript
{
  type: "Text",
  content: `

# Heading

This is a paragraph.

## Subheading

This is a paragraph.

| Name | Age |
| ---- | --- |
| John | 25 |
| Jane | 30 |

![Image](https://via.placeholder.com/150)

> This is a quote.

[Link](https://www.google.com)
`,
}
```

### Properties

#### type

> **type**: `"Text"`

#### content

> **content**: `string`

The text to display in the element.

#### id

> **id**: `string`

The ID of the element.

#### onCreate()?

> `optional` **onCreate**: (`args`) => `void`

A function to call when the element is created.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### onDestroy()?

> `optional` **onDestroy**: (`args`) => `void`

A function to call when the element is destroyed.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

## UITextElementCreate

The parameters for creating a text element.

See [UITextElement](client.md#uitextelement) for more details.

### Remarks

`id` is optional but recommended if you want to be able to perform updates.

### Properties

#### type

> **type**: `"Text"`

#### content

> **content**: `string`

The text to display in the element.

#### onCreate()?

> `optional` **onCreate**: (`args`) => `void`

A function to call when the element is created.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### onDestroy()?

> `optional` **onDestroy**: (`args`) => `void`

A function to call when the element is destroyed.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### id?

> `optional` **id**: `string`

The ID of the element.

##### Remarks

If not provided, the element will be assigned a random ID, but it is recommended to provide it
to perform further updates on the element.

If provided, it must be unique within the UI.

##### Default Value

`undefined`

## UITextElementUpdate

The parameters for updating a text element.

See [UITextElement](client.md#uitextelement) for more details.

### Remarks

`id` and `type` are required to identify the element to update.

### Properties

#### type

> **type**: `"Text"`

#### id

> **id**: `string`

The ID of the element.

#### content?

> `optional` **content**: `string`

The text to display in the element.

#### onCreate()?

> `optional` **onCreate**: (`args`) => `void`

A function to call when the element is created.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### onDestroy()?

> `optional` **onDestroy**: (`args`) => `void`

A function to call when the element is destroyed.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

## UITextInputElement

Represents a text input element in a panel.

### Remarks

`value` property is required, for empty value use `""`.
`label` property is displayed above the input and used for screen readers.

### Examples

### empty input

```typescript
{
  type: "TextInput",
  value: "",
  onChange: (args) => console.log(args.value),
  placeholder: "Enter your name",
}
```

### with label

```typescript
{
  type: "TextInput",
  label: "Name",
  value: "Hello",
  onChange: (args) => console.log(args.value),
  placeholder: "Enter your name",
}
```

### Properties

#### type

> **type**: `"TextInput"`

#### value

> **value**: `string`

The value of the input. Use `""` for empty values.

#### id

> **id**: `string`

The ID of the element.

#### placeholder?

> `optional` **placeholder**: `string`

The placeholder text to display in the input.

#### onChange()?

> `optional` **onChange**: (`args`) => `void`

The function to call when the value of the input changes.

##### Parameters

##### args

The arguments passed to the function.

##### value

`string`

The value of the input.

##### id

`string`

The id of the input element.

##### Returns

`void`

#### onBlur()?

> `optional` **onBlur**: (`args`) => `void`

The function to call when the input is blurred.

##### Parameters

##### args

The arguments passed to the function.

##### value

`string`

The value of the input.

##### id

`string`

The id of the input element.

##### Returns

`void`

#### onFocus()?

> `optional` **onFocus**: (`args`) => `void`

The function to call when the input is focused.

##### Parameters

##### args

The arguments passed to the function.

##### value

`string`

The value of the input.

##### id

`string`

The id of the input element.

##### Returns

`void`

#### onCreate()?

> `optional` **onCreate**: (`args`) => `void`

A function to call when the element is created.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### onDestroy()?

> `optional` **onDestroy**: (`args`) => `void`

A function to call when the element is destroyed.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### label?

> `optional` **label**: `string`

Label text to display above the element and used for screen readers.

## UITextInputElementCreate

The parameters for creating a text input element.

See [UITextInputElement](client.md#uitextinputelement) for more details.

### Remarks

`id` is optional but recommended if you want to be able to perform updates.

### Properties

#### type

> **type**: `"TextInput"`

#### value

> **value**: `string`

The value of the input. Use `""` for empty values.

#### placeholder?

> `optional` **placeholder**: `string`

The placeholder text to display in the input.

#### onChange()?

> `optional` **onChange**: (`args`) => `void`

The function to call when the value of the input changes.

##### Parameters

##### args

The arguments passed to the function.

##### value

`string`

The value of the input.

##### id

`string`

The id of the input element.

##### Returns

`void`

#### onBlur()?

> `optional` **onBlur**: (`args`) => `void`

The function to call when the input is blurred.

##### Parameters

##### args

The arguments passed to the function.

##### value

`string`

The value of the input.

##### id

`string`

The id of the input element.

##### Returns

`void`

#### onFocus()?

> `optional` **onFocus**: (`args`) => `void`

The function to call when the input is focused.

##### Parameters

##### args

The arguments passed to the function.

##### value

`string`

The value of the input.

##### id

`string`

The id of the input element.

##### Returns

`void`

#### onCreate()?

> `optional` **onCreate**: (`args`) => `void`

A function to call when the element is created.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### onDestroy()?

> `optional` **onDestroy**: (`args`) => `void`

A function to call when the element is destroyed.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### id?

> `optional` **id**: `string`

The ID of the element.

##### Remarks

If not provided, the element will be assigned a random ID, but it is recommended to provide it
to perform further updates on the element.

If provided, it must be unique within the UI.

##### Default Value

`undefined`

#### label?

> `optional` **label**: `string`

Label text to display above the element and used for screen readers.

## UITextInputElementUpdate

The parameters for updating a text input element.

See [UITextInputElement](client.md#uitextinputelement) for more details.

### Remarks

`id` and `type` are required to identify the element to update.

### Properties

#### type

> **type**: `"TextInput"`

#### id

> **id**: `string`

The ID of the element.

#### value?

> `optional` **value**: `string`

The value of the input. Use `""` for empty values.

#### placeholder?

> `optional` **placeholder**: `string`

The placeholder text to display in the input.

#### onChange()?

> `optional` **onChange**: (`args`) => `void`

The function to call when the value of the input changes.

##### Parameters

##### args

The arguments passed to the function.

##### value

`string`

The value of the input.

##### id

`string`

The id of the input element.

##### Returns

`void`

#### onBlur()?

> `optional` **onBlur**: (`args`) => `void`

The function to call when the input is blurred.

##### Parameters

##### args

The arguments passed to the function.

##### value

`string`

The value of the input.

##### id

`string`

The id of the input element.

##### Returns

`void`

#### onFocus()?

> `optional` **onFocus**: (`args`) => `void`

The function to call when the input is focused.

##### Parameters

##### args

The arguments passed to the function.

##### value

`string`

The value of the input.

##### id

`string`

The id of the input element.

##### Returns

`void`

#### onCreate()?

> `optional` **onCreate**: (`args`) => `void`

A function to call when the element is created.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### onDestroy()?

> `optional` **onDestroy**: (`args`) => `void`

A function to call when the element is destroyed.

##### Parameters

##### args

The arguments passed to the function.

##### id

`string`

The id of the element.

##### Returns

`void`

#### label?

> `optional` **label**: `string`

Label text to display above the element and used for screen readers.

## ViewportCenterZoom

The input type for setting the viewport to a particular center and zoom.

### Properties

#### center

> **center**: [`LatLng`](client.md#latlng)

The center of the viewport in latitude and longitude.

#### zoom

> **zoom**: `number`

The zoom level of the viewport.

## ViewportState

The current state of the viewport, including the derived bounds.

### Properties

#### center

> **center**: [`LatLng`](client.md#latlng)

The center of the viewport in latitude and longitude.

[LatLng](client.md#latlng)

#### zoom

> **zoom**: `number`

The zoom level of the viewport.

[FeltZoom](client.md#feltzoom)

#### bounds

> **bounds**: \[`number`, `number`, `number`, `number`]

The bounding box of the viewport in \[west, south, east, north] order.

This is derived, and depends on the center and zoom of the viewport, as
well as its size.

[FeltBoundary](client.md#feltboundary)

## SetViewportCenterZoomParams

The parameters for the ViewportController.setViewport | \`setViewport\` method.

### Properties

#### center?

> `optional` **center**: `object`

##### latitude

> **latitude**: `number` = `Latitude`

##### longitude

> **longitude**: `number` = `Longitude`

#### zoom?

> `optional` **zoom**: `number`

## ViewportConstraints

The constraints for the viewport. Used to ensure that the viewport stays
within certain bounds and zoom levels.

### Properties

#### minZoom

> **minZoom**: `null` | `number`

The minimum zoom level for the viewport.

[FeltZoom](client.md#feltzoom)

#### maxZoom

> **maxZoom**: `null` | `number`

The maximum zoom level for the viewport.

[FeltZoom](client.md#feltzoom)

#### bounds

> **bounds**: `null` | \[`number`, `number`, `number`, `number`]

The bounds for the viewport.

[FeltBoundary](client.md#feltboundary)

## ViewportFitBoundsParams

The parameters for the ViewportController.fitViewportToBounds | \`fitViewportToBounds\` method.

### Properties

#### bounds

> **bounds**: \[`number`, `number`, `number`, `number`]

The bounds to fit the viewport to.

[FeltBoundary](client.md#feltboundary)

## ElementCreate

> **ElementCreate**: [`PlaceElementCreate`](client.md#placeelementcreate) | [`PathElementCreate`](client.md#pathelementcreate) | [`PolygonElementCreate`](client.md#polygonelementcreate) | [`CircleElementCreate`](client.md#circleelementcreate) | [`MarkerElementCreate`](client.md#markerelementcreate) | [`HighlighterElementCreate`](client.md#highlighterelementcreate) | [`ImageElementCreate`](client.md#imageelementcreate) | [`TextElementCreate`](client.md#textelementcreate) | [`NoteElementCreate`](client.md#noteelementcreate)

## ElementUpdate

> **ElementUpdate**: [`PlaceElementUpdate`](client.md#placeelementupdate) | [`PathElementUpdate`](client.md#pathelementupdate) | [`PolygonElementUpdate`](client.md#polygonelementupdate) | [`CircleElementUpdate`](client.md#circleelementupdate) | [`MarkerElementUpdate`](client.md#markerelementupdate) | [`HighlighterElementUpdate`](client.md#highlighterelementupdate) | [`TextElementUpdate`](client.md#textelementupdate) | [`NoteElementUpdate`](client.md#noteelementupdate) | [`ImageElementUpdate`](client.md#imageelementupdate)

## Element

> **Element**: [`PlaceElementRead`](client.md#placeelementread) | [`PathElementRead`](client.md#pathelementread) | [`PolygonElementRead`](client.md#polygonelementread) | [`CircleElementRead`](client.md#circleelementread) | [`MarkerElementRead`](client.md#markerelementread) | [`HighlighterElementRead`](client.md#highlighterelementread) | [`TextElementRead`](client.md#textelementread) | [`NoteElementRead`](client.md#noteelementread) | [`ImageElementRead`](client.md#imageelementread) | [`LinkElementRead`](client.md#linkelementread)

## FilterLogicGate

> **FilterLogicGate**: `"and"` | `"or"`

## FilterExpression

> **FilterExpression**: \[`null` | `string`, `"in"` | `"ni"`, `null` | (`null` | `string` | `number` | `boolean`)\[]] | \[`null` | `string`, `"lt"` | `"gt"` | `"le"` | `"ge"` | `"eq"` | `"ne"` | `"cn"` | `"nc"` | `"is"` | `"isnt"`, `null` | `string` | `number` | `boolean`]

## FilterTernary

> **FilterTernary**: \[[`FilterTernary`](client.md#filterternary) | [`FilterExpression`](client.md#filterexpression) | `null` | `boolean`, [`FilterLogicGate`](client.md#filterlogicgate), [`FilterTernary`](client.md#filterternary) | [`FilterExpression`](client.md#filterexpression) | `null` | `boolean`]

A `FilterTernary` is a tree structure for combining expressions with logical operators.

When combining three or more conditions, you must use proper nesting rather than a flat list.

### Example

```typescript
// A simple filter with a single condition
const filter = [
  ["AREA", "gt", 30_000],
  "and",
  ["COLOR", "eq", "red"]
]

// A complex filter with multiple conditions
const filter = [
  ["AREA", "gt", 30_000],
  "and",
  [
    ["COLOR", "eq", "red"],
    "or",
    ["TYPE", "eq", "residential"]
  ]
]
```

## Filters

> **Filters**: [`FilterTernary`](client.md#filterternary) | [`FilterExpression`](client.md#filterexpression) | `null` | `boolean`

Filters can be used to change which features in a layer are rendered. Filters can be
applied to a layer by the LayersController.setLayerFilters | \`setLayerFilters\` method on the Felt controller.

Filters use a tree structure for combining expressions with logical operators, called a
[FilterTernary](client.md#filterternary). When combining three or more conditions, you must use proper nesting
rather than a flat list.

See the examples below for the correct structure to use when building complex filters.

### Remarks

The possible operators are:

* `lt`: Less than
* `gt`: Greater than
* `le`: Less than or equal to
* `ge`: Greater than or equal to
* `eq`: Equal to
* `ne`: Not equal to
* `cn`: Contains
* `nc`: Does not contain

The allowed boolean operators are:

* `and`: Logical AND
* `or`: Logical OR

### Example

```typescript
// 1. Simple filter: single condition
felt.setLayerFilters({
  layerId: "layer-1",
  filters: ["AREA", "gt", 30_000],
});

// 2. Basic compound filter: two conditions with AND
felt.setLayerFilters({
  layerId: "layer-1",
  filters: [
    ["AREA", "gt", 30_000],  // First condition
    "and",                   // Logic operator
    ["COLOR", "eq", "red"]   // Second condition
  ]
});

// 3. Complex filter: three or more conditions require nesting
// ⚠️ IMPORTANT: Filters use a tree structure, not a flat list
felt.setLayerFilters({
  layerId: "layer-1",
  filters: [
    ["AREA", "gt", 30_000],                // First condition
    "and",                                 // First logic operator
    [                                      // Nested group starts
      ["COLOR", "eq", "red"],              //   Second condition
      "and",                               //   Second logic operator
      ["TYPE", "eq", "residential"]        //   Third condition
    ]                                      // Nested group ends
  ]
});

// 4. Even more complex: four conditions with proper nesting
// Visual structure:
//          AND
//         /   \
//    condition  AND
//              /   \
//        condition  AND
//                  /   \
//            condition  condition
felt.setLayerFilters({
  layerId: "layer-1",
  filters: [
    ["AREA", "gt", 30_000],                // First condition
    "and",
    [
      ["COLOR", "eq", "red"],              // Second condition
      "and",
      [
        ["TYPE", "eq", "residential"],     // Third condition
        "and",
        ["YEAR", "gt", 2000]               // Fourth condition
      ]
    ]
  ]
});

// 5. Mixed operators: combining AND and OR
// Visual structure:
//          AND
//         /   \
//    condition  OR
//              /  \
//        condition condition
felt.setLayerFilters({
  layerId: "layer-1",
  filters: [
    ["AREA", "gt", 30_000],                // Must have large area
    "and",
    [
      ["COLOR", "eq", "red"],              // Must be either red
      "or",
      ["TYPE", "eq", "residential"]        // OR residential type
    ]
  ]
});
```

## GeometryFilter

> **GeometryFilter**: [`FeltBoundary`](client.md#feltboundary) | [`PolygonGeometry`](client.md#polygongeometry) | [`MultiPolygonGeometry`](client.md#multipolygongeometry) | [`LngLatTuple`](client.md#lnglattuple)\[]

The common type for filtering data by a spatial boundary.

This can be either:

* `FeltBoundary`: a \[w, s, e, n] bounding box
* `PolygonGeometry`: a GeoJSON Polygon geometry
* `MultiPolygonGeometry`: a GeoJSON MultiPolygon geometry
* `LngLatTuple[]`: a list of coordinates describing a single ring of a polygon

## AggregationMethod

> **AggregationMethod**: `"avg"` | `"max"` | `"min"` | `"sum"` | `"median"`

The method to use for the aggregation.

## PrecomputedAggregationMethod

> **PrecomputedAggregationMethod**: `"avg"` | `"max"` | `"min"` | `"sum"` | `"count"`

The method to use for the precomputed aggregation.

## GridType

> **GridType**: `"h3"`

The type of grid to use for precomputed aggregate values.

## GridConfig

> **GridConfig**: [`CountGridConfig`](client.md#countgridconfig) | [`AggregatedGridConfig`](client.md#aggregatedgridconfig)

Describes the type of grid to use for precomputed aggregate values.

## LayerProcessingStatus

> **LayerProcessingStatus**: `"processing"` | `"completed"` | `"failed"` | `"incomplete"`

This describes the processing status of a layer.

The various values are:

* `processing`: The layer has been uploaded or updated and is still processing.
* `completed`: The layer has been processed and can be viewed on the map.
* `failed`: The layer failed to process and cannot be viewed on the map.
* `incomplete`: The layer has not been processed.

## Layer

> **Layer**: [`RasterLayer`](client.md#rasterlayer) | [`VectorLayer`](client.md#vectorlayer) | [`DataOnlyLayer`](client.md#dataonlylayer)

## FeltTiledVectorSource

> **FeltTiledVectorSource**: `object`

A tiled vector source is a layer that is populated from data the has been uploaded
to Felt, and processed into vector tiles.

### Type declaration

#### type

> **type**: `"felt"`

Identifies this as a tiled vector source. Typically, these tiles will have been
uploaded to and processed by Felt.

#### tileTemplateUrl

> **tileTemplateUrl**: `string`

The template URL used for fetching tiles.

## LayerSchemaAttribute

> **LayerSchemaAttribute**: [`LayerSchemaNumericAttribute`](client.md#layerschemanumericattribute) | [`LayerSchemaTextAttribute`](client.md#layerschematextattribute) | [`LayerSchemaBooleanAttribute`](client.md#layerschemabooleanattribute) | [`LayerSchemaDateAttribute`](client.md#layerschemadateattribute) | [`LayerSchemaDateTimeAttribute`](client.md#layerschemadatetimeattribute)

A single attribute from the layer schema.

### Remarks

Each feature in a layer has a set of attributes, and these types describe the
structure of a single attribute, including things like id, display name, type, and sample values.

## MapDetails

> **MapDetails**: `object`

The details of a map.

### Type declaration

#### id

> **id**: `string`

The id of the map.

#### title

> **title**: `string`

The title of the map.

#### description

> **description**: `string` | `null`

The description of the map.

## EntityNode

> **EntityNode**: [`ElementNode`](client.md#elementnode) | [`ElementGroupNode`](client.md#elementgroupnode) | [`LayerNode`](client.md#layernode) | [`LayerGroupNode`](client.md#layergroupnode) | [`FeatureNode`](client.md#featurenode)

A reference to any kind of entity in the map.

### Remarks

EntityNodes are used when you have some collection of entities and you need to

## LngLatTuple

> **LngLatTuple**: \[`number`, `number`]

A tuple representing a longitude and latitude coordinate.

This is used hen serializing geometry because that's the standard used in
GeoJSON.

## GeoJsonProperties

> **GeoJsonProperties**: `Record`\<`string`, `unknown`>

A GeoJSON properties object.

## GeoJsonGeometry

> **GeoJsonGeometry**: [`PointGeometry`](client.md#pointgeometry) | [`PolygonGeometry`](client.md#polygongeometry) | [`LineStringGeometry`](client.md#linestringgeometry) | [`MultiLineStringGeometry`](client.md#multilinestringgeometry) | [`MultiPolygonGeometry`](client.md#multipolygongeometry) | [`MultiPointGeometry`](client.md#multipointgeometry)

A GeoJSON geometry of any type

## FeltZoom

> **FeltZoom**: `number`

The zoom level of the map.

It is a floating-point number between 1 and 23, where 1 is the most
zoomed out and 23 is the most zoomed in.

## FeltBoundary

> **FeltBoundary**: \[`number`, `number`, `number`, `number`]

The edges of the map in the form of a bounding box.

The boundary is a tuple of the form `[west, south, east, north]`.

## SortDirection

> **SortDirection**: `"asc"` | `"desc"`

Specifies the direction to sort data in

## ToolType

> **ToolType**: `"circle"` | `"highlighter"` | `"line"` | `"link"` | `"marker"` | `"note"` | `"pin"` | `"polygon"` | `"route"` | `"text"`

## ConfigurableToolType

> **ConfigurableToolType**: `Exclude`\<[`ToolType`](client.md#tooltype), `"link"`>

## InputToolSettings

> **InputToolSettings**: `object` & `Partial`\<[`PinToolSettings`](client.md#pintoolsettings)> | `object` & `Partial`\<[`LineToolSettings`](client.md#linetoolsettings)> | `object` & `Partial`\<[`RouteToolSettings`](client.md#routetoolsettings)> | `object` & `Partial`\<[`PolygonToolSettings`](client.md#polygontoolsettings)> | `object` & `Partial`\<[`CircleToolSettings`](client.md#circletoolsettings)> | `object` & `Partial`\<[`MarkerToolSettings`](client.md#markertoolsettings)> | `object` & `Partial`\<[`HighlighterToolSettings`](client.md#highlightertoolsettings)> | `object` & `Partial`\<[`TextToolSettings`](client.md#texttoolsettings)> | `object` & `Partial`\<[`NoteToolSettings`](client.md#notetoolsettings)>

The parameters for changing the settings of each tool.

## ToolSettingsChangeEvent

> **ToolSettingsChangeEvent**: `object` & [`PinToolSettings`](client.md#pintoolsettings) | `object` & [`LineToolSettings`](client.md#linetoolsettings) | `object` & [`RouteToolSettings`](client.md#routetoolsettings) | `object` & [`PolygonToolSettings`](client.md#polygontoolsettings) | `object` & [`CircleToolSettings`](client.md#circletoolsettings) | `object` & [`MarkerToolSettings`](client.md#markertoolsettings) | `object` & [`HighlighterToolSettings`](client.md#highlightertoolsettings) | `object` & [`TextToolSettings`](client.md#texttoolsettings) | `object` & [`NoteToolSettings`](client.md#notetoolsettings)

The result of listening for changes to the settings of each tool.

## ToolSettingsMap

> **ToolSettingsMap**: `object`

### Type declaration

#### pin

> **pin**: [`PinToolSettings`](client.md#pintoolsettings)

#### line

> **line**: [`LineToolSettings`](client.md#linetoolsettings)

#### route

> **route**: [`RouteToolSettings`](client.md#routetoolsettings)

#### polygon

> **polygon**: [`PolygonToolSettings`](client.md#polygontoolsettings)

#### circle

> **circle**: [`CircleToolSettings`](client.md#circletoolsettings)

#### marker

> **marker**: [`MarkerToolSettings`](client.md#markertoolsettings)

#### highlighter

> **highlighter**: [`HighlighterToolSettings`](client.md#highlightertoolsettings)

#### text

> **text**: [`TextToolSettings`](client.md#texttoolsettings)

#### note

> **note**: [`NoteToolSettings`](client.md#notetoolsettings)

## PlaceFrame

> **PlaceFrame**: `"frame-circle"` | `"frame-square"` | `null`

## PlaceSymbol

> **PlaceSymbol**: `"dot"` | `"square"` | `"diamond"` | `"triangle"` | `"x"` | `"plus"` | `"circle-line"` | `"circle-slash"` | `"star"` | `"heart"` | `"hexagon"` | `"octagon"` | `"pedestrian"` | `"bicycle"` | `"wheelchair"` | `"airport"` | `"car"` | `"bus"` | `"train"` | `"truck"` | `"ferry"` | `"sailboat"` | `"electric-service"` | `"gas-service"` | `"blood-clinic"` | `"badge"` | `"traffic-light"` | `"traffic-cone"` | `"road-sign-caution"` | `"person"` | `"restroom"` | `"house"` | `"work"` | `"letter"` | `"hotel"` | `"factory"` | `"hospital"` | `"religious-facility"` | `"school"` | `"government"` | `"university"` | `"bank"` | `"landmark"` | `"museum"` | `"clothing"` | `"shopping"` | `"store"` | `"bar"` | `"pub"` | `"cafe"` | `"food"` | `"park"` | `"amusement-park"` | `"camping-tent"` | `"cabin"` | `"picnic"` | `"water-refill"` | `"trailhead"` | `"guidepost"` | `"viewpoint"` | `"camera"` | `"us-football"` | `"football"` | `"tennis"` | `"binoculars"` | `"swimming"` | `"zap"` | `"battery-full"` | `"battery-half"` | `"battery-low"` | `"boom"` | `"radar"` | `"wind-turbine"` | `"solar-panel"` | `"antenna"` | `"telephone-pole"` | `"oil-well"` | `"oil-barrel"` | `"railroad-track"` | `"bridge"` | `"lighthouse"` | `"lock-closed"` | `"lock-open"` | `"wifi"` | `"trash"` | `"recycle"` | `"tree"` | `"flower"` | `"leaf"` | `"fire"` | `"mountain"` | `"snowy-mountain"` | `"volcano"` | `"island"` | `"wave"` | `"hot-springs"` | `"water"` | `"lake"` | `"ocean"` | `"animal"` | `"bird"` | `"duck"` | `"dog"` | `"fish"` | `"beach"` | `"wetland"` | `"sun"` | `"moon"` | `"cloud"` | `"partial-sun"` | `"rain"` | `"lightning"` | `"snowflake"` | `"wind"` | `"snow"` | `"fog"` | `"sleet"` | `"hurricane"` | `"warning"` | `"parking"` | `"info"` | `"circle-exclamation"` | `"circle-triangle"` | `"circle-x"` | `"circle-plus"` | `` `:${string}:` `` & `object`

## PlacementForUIElement

> **PlacementForUIElement**: \{ `after`: `string`; } | \{ `before`: `string`; } | \{ `at`: `"start"` | `"end"`; }

Used in [UiController.createPanel](client.md#createpanel) to specify the position of a panel in the stack
and in [UiController.createPanelElements](client.md#createpanelelements) to specify the position of an element in a panel.

In both cases, the default value is `{ at: "end" }`.

## UIPanelElement

> **UIPanelElement**: [`UIButtonElement`](client.md#uibuttonelement) | [`UITextElement`](client.md#uitextelement) | [`UIButtonGroupElement`](client.md#uibuttongroupelement) | [`UIDividerElement`](client.md#uidividerelement) | [`UITextInputElement`](client.md#uitextinputelement) | [`UISelectElement`](client.md#uiselectelement)

## UIPanelElementCreate

> **UIPanelElementCreate**: [`UIButtonElementCreate`](client.md#uibuttonelementcreate) | [`UITextElementCreate`](client.md#uitextelementcreate) | [`UIButtonGroupElementCreate`](client.md#uibuttongroupelementcreate) | [`UIDividerElementCreate`](client.md#uidividerelementcreate) | [`UITextInputElementCreate`](client.md#uitextinputelementcreate) | [`UISelectElementCreate`](client.md#uiselectelementcreate)

This is a union of all the possible elements that can be created inside panel's body or footer.

### Remarks

For the sake of convenience, `id` is optional but recommended if you want to be able to perform updates.

## UIPanelElementUpdate

> **UIPanelElementUpdate**: [`UIButtonElementUpdate`](client.md#uibuttonelementupdate) | [`UITextElementUpdate`](client.md#uitextelementupdate) | [`UIButtonGroupElementUpdate`](client.md#uibuttongroupelementupdate) | [`UITextInputElementUpdate`](client.md#uitextinputelementupdate) | [`UISelectElementUpdate`](client.md#uiselectelementupdate) | [`UIFlexibleSpaceElementUpdate`](client.md#uiflexiblespaceelementupdate) | [`UIDividerElementUpdate`](client.md#uidividerelementupdate)

This is a union of all the possible elements that can be updated inside panel's body or footer (excluding Divider and FlexibleSpace elements because they cannot be updated).

### Remarks

`id` and `type` are required to identify the element to update.

## Felt

> `const` **Felt**: `object`

The Felt SDK is a library for embedding Felt maps into your website,
allowing you to control and inspect the map programmatically.

### Type declaration

#### embed()

Embeds a Felt map into the provided container, returning a promise that resolves
to a [FeltController](client.md#feltcontroller) object that you can use to control the map.

##### Parameters

##### container

`HTMLElement`

The container element to embed the map into.

##### mapId

`string`

The ID of the map to embed.

##### options?

[`FeltEmbedOptions`](client.md#feltembedoptions)

The options to configure the map.

##### Returns

`Promise`\<[`FeltController`](client.md#feltcontroller)>

A promise for a [FeltController](client.md#feltcontroller).

#### connect()

Binds to an existing Felt map iframe.

##### Parameters

##### feltWindow

`Pick`\<`Window`, `"postMessage"`>

The iframe element containing the Felt map.

##### Returns

`Promise`\<[`FeltController`](client.md#feltcontroller)>

# Visibility

## SetVisibilityRequest

The parameters for the methods that change the visibility of entities.

### Properties

#### show?

> `optional` **show**: `string`\[]

The ids of the entities you want to change the visibility of.

#### hide?

> `optional` **hide**: `string`\[]
