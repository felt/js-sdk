
<a name="elementsmd"></a>

The Felt SDK lets you read, create and update elements on the map.

Elements that are created via the SDK are only available to the current
session - they are not persisted to the map and not available to other users
of the map.

> If you want to let your users create elements (as opposed to using the SDK to
create them programmatically), you can use the [ToolsController](#toolscontroller) to
select and configure the drawing tools in Felt.

## PlaceElementCreate

### Extends

- `zInfer`\<*typeof* `PlaceCreateSchema`\>

### Properties

#### type

> **type**: `"Place"`

##### Inherited from

`zInfer.type`

#### coordinates

> **coordinates**: [`LngLatTuple`](#lnglattuple)

##### Overrides

`zInfer.coordinates`

#### groupId?

> `optional` **groupId**: `null` \| `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

##### Inherited from

`zInfer.groupId`

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

##### Inherited from

`zInfer.color`

#### name?

> `optional` **name**: `null` \| `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

##### Inherited from

`zInfer.name`

#### description?

> `optional` **description**: `null` \| `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

##### Inherited from

`zInfer.description`

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

##### Inherited from

`zInfer.attributes`

#### interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

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

##### Inherited from

`zInfer.interaction`

#### imageUrl?

> `optional` **imageUrl**: `null` \| `string`

The URL of an image that has been added to the element.

##### Inherited from

`zInfer.imageUrl`

#### symbol?

> `optional` **symbol**: `string`

The symbol that is rendered for the Place.

This can be an emoji by using colon-enclosed characters (e.g. `":smiley:"`)
or one of the symbols available in Felt's symbol library.

You can see the available symbols in the Felt UI when editing a Place
by hovering a symbol and converting the tooltip to kebab-case. For example,
the "Oil barrel" symbol is `oil-barrel`.

##### Inherited from

`zInfer.symbol`

#### frame?

> `optional` **frame**: `null` \| `"frame-circle"` \| `"frame-square"`

The frame that is rendered around the Place's symbol. This is
only available for non-emoji symbols.

##### Inherited from

`zInfer.frame`

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

##### Inherited from

`zInfer.hideLabel`

***

## PathElementCreate

### Extends

- `zInfer`\<*typeof* `PathCreateSchema`\>

### Properties

#### type

> **type**: `"Path"`

##### Inherited from

`zInfer.type`

#### coordinates

> **coordinates**: [`LngLatTuple`](#lnglattuple)[][]

##### Overrides

`zInfer.coordinates`

#### groupId?

> `optional` **groupId**: `null` \| `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

##### Inherited from

`zInfer.groupId`

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

##### Inherited from

`zInfer.color`

#### name?

> `optional` **name**: `null` \| `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

##### Inherited from

`zInfer.name`

#### description?

> `optional` **description**: `null` \| `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

##### Inherited from

`zInfer.description`

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

##### Inherited from

`zInfer.attributes`

#### interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

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

##### Inherited from

`zInfer.interaction`

#### imageUrl?

> `optional` **imageUrl**: `null` \| `string`

The URL of an image that has been added to the element.

##### Inherited from

`zInfer.imageUrl`

#### strokeOpacity?

> `optional` **strokeOpacity**: `number`

A value between 0 and 1 that describes the opacity of the element's stroke.

##### Default

```ts
1
```

##### Inherited from

`zInfer.strokeOpacity`

#### strokeWidth?

> `optional` **strokeWidth**: `number`

The width of the element's stroke in pixels.

##### Default

```ts
2
```

##### Inherited from

`zInfer.strokeWidth`

#### strokeStyle?

> `optional` **strokeStyle**: `"solid"` \| `"dashed"` \| `"dotted"`

The style of the element's stroke.

##### Default

```ts
"solid"
```

##### Inherited from

`zInfer.strokeStyle`

#### distanceMarker?

> `optional` **distanceMarker**: `boolean`

Whether a distance marker is shown at the midpoint of the path.

##### Default

```ts
false
```

##### Inherited from

`zInfer.distanceMarker`

#### routingMode?

> `optional` **routingMode**: `null` \| `"driving"` \| `"cycling"` \| `"walking"` \| `"flying"`

Whether this represents a route, and if so, what mode of transport
is used.

If this is `null`, the path is not considered to be a route, so while it
can have a `distanceMarker`, it will does not have a start or end cap.

##### Default

```ts
null
```

##### Inherited from

`zInfer.routingMode`

#### endCaps?

> `optional` **endCaps**: `boolean`

Whether or not to show Start and End caps on the path. This is
only available if the `routingMode` is set.

##### Default

```ts
false
```

##### Inherited from

`zInfer.endCaps`

***

## PolygonElementCreate

### Extends

- `zInfer`\<*typeof* `PolygonCreateSchema`\>

### Properties

#### type

> **type**: `"Polygon"`

##### Inherited from

`zInfer.type`

#### coordinates

> **coordinates**: [`LngLatTuple`](#lnglattuple)[][]

##### Overrides

`zInfer.coordinates`

#### groupId?

> `optional` **groupId**: `null` \| `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

##### Inherited from

`zInfer.groupId`

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

##### Inherited from

`zInfer.color`

#### name?

> `optional` **name**: `null` \| `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

##### Inherited from

`zInfer.name`

#### description?

> `optional` **description**: `null` \| `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

##### Inherited from

`zInfer.description`

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

##### Inherited from

`zInfer.attributes`

#### interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

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

##### Inherited from

`zInfer.interaction`

#### imageUrl?

> `optional` **imageUrl**: `null` \| `string`

The URL of an image that has been added to the element.

##### Inherited from

`zInfer.imageUrl`

#### strokeOpacity?

> `optional` **strokeOpacity**: `number`

A value between 0 and 1 that describes the opacity of the element's stroke.

##### Default

```ts
1
```

##### Inherited from

`zInfer.strokeOpacity`

#### strokeWidth?

> `optional` **strokeWidth**: `number`

The width of the element's stroke in pixels.

##### Default

```ts
2
```

##### Inherited from

`zInfer.strokeWidth`

#### strokeStyle?

> `optional` **strokeStyle**: `"solid"` \| `"dashed"` \| `"dotted"`

The style of the element's stroke.

##### Default

```ts
"solid"
```

##### Inherited from

`zInfer.strokeStyle`

#### fillOpacity?

> `optional` **fillOpacity**: `number`

The opacity of the polygon's fill, between 0 and 1.

##### Default

```ts
0.25
```

##### Inherited from

`zInfer.fillOpacity`

#### areaMarker?

> `optional` **areaMarker**: `boolean`

Whether to show an area marker on the polygon.

##### Default

```ts
false
```

##### Inherited from

`zInfer.areaMarker`

***

## CircleElementCreate

### Extends

- `zInfer`\<*typeof* `CircleCreateSchema`\>

### Properties

#### type

> **type**: `"Circle"`

##### Inherited from

`zInfer.type`

#### radius

> **radius**: `number`

The radius of the circle in meters.

##### Inherited from

`zInfer.radius`

#### center

> **center**: [`LngLatTuple`](#lnglattuple)

The center of the circle.

##### Overrides

`zInfer.center`

#### groupId?

> `optional` **groupId**: `null` \| `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

##### Inherited from

`zInfer.groupId`

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

##### Inherited from

`zInfer.color`

#### name?

> `optional` **name**: `null` \| `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

##### Inherited from

`zInfer.name`

#### description?

> `optional` **description**: `null` \| `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

##### Inherited from

`zInfer.description`

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

##### Inherited from

`zInfer.attributes`

#### interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

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

##### Inherited from

`zInfer.interaction`

#### imageUrl?

> `optional` **imageUrl**: `null` \| `string`

The URL of an image that has been added to the element.

##### Inherited from

`zInfer.imageUrl`

#### strokeOpacity?

> `optional` **strokeOpacity**: `number`

A value between 0 and 1 that describes the opacity of the element's stroke.

##### Default

```ts
1
```

##### Inherited from

`zInfer.strokeOpacity`

#### strokeWidth?

> `optional` **strokeWidth**: `number`

The width of the element's stroke in pixels.

##### Default

```ts
2
```

##### Inherited from

`zInfer.strokeWidth`

#### strokeStyle?

> `optional` **strokeStyle**: `"solid"` \| `"dashed"` \| `"dotted"`

The style of the element's stroke.

##### Default

```ts
"solid"
```

##### Inherited from

`zInfer.strokeStyle`

#### radiusMarker?

> `optional` **radiusMarker**: `boolean`

Whether to show a marker on the circle that indicates the radius

##### Default

```ts
false
```

##### Inherited from

`zInfer.radiusMarker`

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

##### Inherited from

`zInfer.radiusDisplayAngle`

#### radiusDisplayUnit?

> `optional` **radiusDisplayUnit**: `null` \| `"meter"` \| `"kilometer"` \| `"foot"` \| `"mile"`

The unit of the radius used when the `radiusMarker` is `true`.

A value of `null` means that the unit matches the user's locale.

##### Default

```ts
null
```

##### Inherited from

`zInfer.radiusDisplayUnit`

#### fillOpacity?

> `optional` **fillOpacity**: `number`

The opacity of the circle's fill.

##### Default

```ts
0.25
```

##### Inherited from

`zInfer.fillOpacity`

***

## MarkerElementCreate

### Extends

- `zInfer`\<*typeof* `MarkerCreateSchema`\>

### Properties

#### type

> **type**: `"Marker"`

##### Inherited from

`zInfer.type`

#### coordinates

> **coordinates**: [`LngLatTuple`](#lnglattuple)[][]

##### Overrides

`zInfer.coordinates`

#### groupId?

> `optional` **groupId**: `null` \| `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

##### Inherited from

`zInfer.groupId`

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

##### Inherited from

`zInfer.color`

#### name?

> `optional` **name**: `null` \| `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

##### Inherited from

`zInfer.name`

#### description?

> `optional` **description**: `null` \| `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

##### Inherited from

`zInfer.description`

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

##### Inherited from

`zInfer.attributes`

#### interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

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

##### Inherited from

`zInfer.interaction`

#### opacity?

> `optional` **opacity**: `number`

The opacity of the marker, between 0 and 1.

##### Default

```ts
1
```

##### Inherited from

`zInfer.opacity`

#### size?

> `optional` **size**: `number`

The size of the marker, used in conjunction with the `zoom` to determine
the actual size of the marker.

##### Default

```ts
10
```

##### Inherited from

`zInfer.size`

#### zoom?

> `optional` **zoom**: `number`

The zoom level at which the marker was created. This is combined with
the `size` to determine the actual size of the marker.

When creating a marker, if you don't supply this value it defaults to
the current zoom of the map when you call `createElement`.

##### Inherited from

`zInfer.zoom`

***

## HighlighterElementCreate

### Extends

- `zInfer`\<*typeof* `HighlighterCreateSchema`\>

### Properties

#### type

> **type**: `"Highlighter"`

##### Inherited from

`zInfer.type`

#### coordinates

> **coordinates**: [`LngLatTuple`](#lnglattuple)[][][]

A multipolygon describing the area that is highlighted.

If `renderHoles` is set to false, only the outer ring of each polygon
will be rendered, filling in the area inside the highlighted region.

##### Overrides

`zInfer.coordinates`

#### groupId?

> `optional` **groupId**: `null` \| `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

##### Inherited from

`zInfer.groupId`

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

##### Inherited from

`zInfer.color`

#### name?

> `optional` **name**: `null` \| `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

##### Inherited from

`zInfer.name`

#### description?

> `optional` **description**: `null` \| `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

##### Inherited from

`zInfer.description`

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

##### Inherited from

`zInfer.attributes`

#### interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

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

##### Inherited from

`zInfer.interaction`

#### renderHoles?

> `optional` **renderHoles**: `boolean`

Whether to render the holes of the highlighted area.

##### Default

```ts
false
```

##### Inherited from

`zInfer.renderHoles`

#### opacity?

> `optional` **opacity**: `number`

The opacity of the highlighter, between 0 and 1.

##### Default

```ts
0.5
```

##### Inherited from

`zInfer.opacity`

***

## TextElementCreate

### Extends

- `zInfer`\<*typeof* `TextCreateSchema`\>

### Properties

#### type

> **type**: `"Text"`

##### Inherited from

`zInfer.type`

#### text

> **text**: `string`

##### Inherited from

`zInfer.text`

#### groupId?

> `optional` **groupId**: `null` \| `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

##### Inherited from

`zInfer.groupId`

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

##### Inherited from

`zInfer.color`

#### description?

> `optional` **description**: `null` \| `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

##### Inherited from

`zInfer.description`

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

##### Inherited from

`zInfer.attributes`

#### interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

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

##### Inherited from

`zInfer.interaction`

#### rotation?

> `optional` **rotation**: `number`

The rotation of the element in degrees.

##### Default

```ts
0
```

##### Inherited from

`zInfer.rotation`

#### scale?

> `optional` **scale**: `number`

The relative scale of the element from the default size. This is combined
with the `zoom` to determine the actual size of the element.

##### Default

```ts
1
```

##### Inherited from

`zInfer.scale`

#### zoom?

> `optional` **zoom**: `number`

The zoom level at which the element was created. This is combined with
the `scale` to determine the actual size of the element.

When creating an element, if you don't supply this value it defaults to
the current zoom of the map when you call `createElement`.

##### Inherited from

`zInfer.zoom`

#### align?

> `optional` **align**: `"center"` \| `"left"` \| `"right"`

The alignment of the text, either `left`, `center` or `right`.

##### Default

```ts
"center"
```

##### Inherited from

`zInfer.align`

#### style?

> `optional` **style**: `"italic"` \| `"light"` \| `"regular"` \| `"caps"`

The style of the text, either `italic`, `light`, `regular` or `caps`.

##### Default

```ts
"regular"
```

##### Inherited from

`zInfer.style`

#### position?

> `optional` **position**: [`LngLatTuple`](#lnglattuple)

The geographical position of the center of the text element.

If this is omitted, the text will be placed at the center of the current
viewport.

##### Overrides

`zInfer.position`

***

## NoteElementCreate

### Extends

- `zInfer`\<*typeof* `NoteCreateSchema`\>

### Properties

#### type

> **type**: `"Note"`

##### Inherited from

`zInfer.type`

#### text

> **text**: `string`

##### Inherited from

`zInfer.text`

#### groupId?

> `optional` **groupId**: `null` \| `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

##### Inherited from

`zInfer.groupId`

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

##### Inherited from

`zInfer.color`

#### description?

> `optional` **description**: `null` \| `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

##### Inherited from

`zInfer.description`

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

##### Inherited from

`zInfer.attributes`

#### interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

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

##### Inherited from

`zInfer.interaction`

#### rotation?

> `optional` **rotation**: `number`

The rotation of the element in degrees.

##### Default

```ts
0
```

##### Inherited from

`zInfer.rotation`

#### scale?

> `optional` **scale**: `number`

The relative scale of the element from the default size. This is combined
with the `zoom` to determine the actual size of the element.

##### Default

```ts
1
```

##### Inherited from

`zInfer.scale`

#### zoom?

> `optional` **zoom**: `number`

The zoom level at which the element was created. This is combined with
the `scale` to determine the actual size of the element.

When creating an element, if you don't supply this value it defaults to
the current zoom of the map when you call `createElement`.

##### Inherited from

`zInfer.zoom`

#### align?

> `optional` **align**: `"center"` \| `"left"` \| `"right"`

The alignment of the text, either `left`, `center` or `right`.

##### Default

```ts
"center"
```

##### Inherited from

`zInfer.align`

#### style?

> `optional` **style**: `"italic"` \| `"light"` \| `"regular"` \| `"caps"`

The style of the text, either `italic`, `light`, `regular` or `caps`.

##### Default

```ts
"regular"
```

##### Inherited from

`zInfer.style`

#### widthScale?

> `optional` **widthScale**: `number`

##### Inherited from

`zInfer.widthScale`

#### position?

> `optional` **position**: [`LngLatTuple`](#lnglattuple)

The geographical position of the center of the note element.

If this is omitted, the note will be placed at the center of the current
viewport.

##### Overrides

`zInfer.position`

***

## ImageElementCreate

### Extends

- `zInfer`\<*typeof* `ImageCreateSchema`\>

### Properties

#### type

> **type**: `"Image"`

##### Inherited from

`zInfer.type`

#### coordinates

> **coordinates**: \[`number`, `number`\][][] = `MultiLineStringGeometrySchema.shape.coordinates`

##### Inherited from

`zInfer.coordinates`

#### imageUrl

> **imageUrl**: `string`

The URL of the image that is rendered in this element

##### Inherited from

`zInfer.imageUrl`

#### groupId?

> `optional` **groupId**: `null` \| `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

##### Inherited from

`zInfer.groupId`

#### name?

> `optional` **name**: `null` \| `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

##### Inherited from

`zInfer.name`

#### description?

> `optional` **description**: `null` \| `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

##### Inherited from

`zInfer.description`

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

##### Inherited from

`zInfer.attributes`

#### interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

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

##### Inherited from

`zInfer.interaction`

#### opacity?

> `optional` **opacity**: `number`

The opacity of the image, between 0 and 1.

##### Default

```ts
1
```

##### Inherited from

`zInfer.opacity`

***

## PlaceElementRead

### Extends

- `zInfer`\<*typeof* `PlaceReadSchema`\>

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

##### Inherited from

`zInfer.id`

#### groupId

> **groupId**: `null` \| `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

##### Inherited from

`zInfer.groupId`

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

##### Inherited from

`zInfer.color`

#### name

> **name**: `null` \| `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

##### Inherited from

`zInfer.name`

#### description

> **description**: `null` \| `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

##### Inherited from

`zInfer.description`

#### attributes

> **attributes**: `Record`\<`string`, `unknown`\>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

##### Inherited from

`zInfer.attributes`

#### imageUrl

> **imageUrl**: `null` \| `string`

The URL of an image that has been added to the element.

##### Inherited from

`zInfer.imageUrl`

#### type

> **type**: `"Place"`

##### Inherited from

`zInfer.type`

#### symbol

> **symbol**: `string`

The symbol that is rendered for the Place.

This can be an emoji by using colon-enclosed characters (e.g. `":smiley:"`)
or one of the symbols available in Felt's symbol library.

You can see the available symbols in the Felt UI when editing a Place
by hovering a symbol and converting the tooltip to kebab-case. For example,
the "Oil barrel" symbol is `oil-barrel`.

##### Inherited from

`zInfer.symbol`

#### frame

> **frame**: `null` \| `"frame-circle"` \| `"frame-square"`

The frame that is rendered around the Place's symbol. This is
only available for non-emoji symbols.

##### Inherited from

`zInfer.frame`

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

##### Inherited from

`zInfer.hideLabel`

#### coordinates

> **coordinates**: [`LngLatTuple`](#lnglattuple)

##### Overrides

`zInfer.coordinates`

#### interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

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

##### Inherited from

`zInfer.interaction`

***

## PathElementRead

### Extends

- `zInfer`\<*typeof* `PathReadSchema`\>

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

##### Inherited from

`zInfer.id`

#### groupId

> **groupId**: `null` \| `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

##### Inherited from

`zInfer.groupId`

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

##### Inherited from

`zInfer.color`

#### name

> **name**: `null` \| `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

##### Inherited from

`zInfer.name`

#### description

> **description**: `null` \| `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

##### Inherited from

`zInfer.description`

#### attributes

> **attributes**: `Record`\<`string`, `unknown`\>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

##### Inherited from

`zInfer.attributes`

#### imageUrl

> **imageUrl**: `null` \| `string`

The URL of an image that has been added to the element.

##### Inherited from

`zInfer.imageUrl`

#### strokeOpacity

> **strokeOpacity**: `number`

A value between 0 and 1 that describes the opacity of the element's stroke.

##### Default

```ts
1
```

##### Inherited from

`zInfer.strokeOpacity`

#### strokeWidth

> **strokeWidth**: `number`

The width of the element's stroke in pixels.

##### Default

```ts
2
```

##### Inherited from

`zInfer.strokeWidth`

#### strokeStyle

> **strokeStyle**: `"solid"` \| `"dashed"` \| `"dotted"`

The style of the element's stroke.

##### Default

```ts
"solid"
```

##### Inherited from

`zInfer.strokeStyle`

#### type

> **type**: `"Path"`

##### Inherited from

`zInfer.type`

#### distanceMarker

> **distanceMarker**: `boolean`

Whether a distance marker is shown at the midpoint of the path.

##### Default

```ts
false
```

##### Inherited from

`zInfer.distanceMarker`

#### routingMode

> **routingMode**: `null` \| `"driving"` \| `"cycling"` \| `"walking"` \| `"flying"`

Whether this represents a route, and if so, what mode of transport
is used.

If this is `null`, the path is not considered to be a route, so while it
can have a `distanceMarker`, it will does not have a start or end cap.

##### Default

```ts
null
```

##### Inherited from

`zInfer.routingMode`

#### endCaps

> **endCaps**: `boolean`

Whether or not to show Start and End caps on the path. This is
only available if the `routingMode` is set.

##### Default

```ts
false
```

##### Inherited from

`zInfer.endCaps`

#### interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

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

##### Inherited from

`zInfer.interaction`

***

## PolygonElementRead

### Extends

- `zInfer`\<*typeof* `PolygonReadSchema`\>

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

##### Inherited from

`zInfer.id`

#### groupId

> **groupId**: `null` \| `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

##### Inherited from

`zInfer.groupId`

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

##### Inherited from

`zInfer.color`

#### name

> **name**: `null` \| `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

##### Inherited from

`zInfer.name`

#### description

> **description**: `null` \| `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

##### Inherited from

`zInfer.description`

#### attributes

> **attributes**: `Record`\<`string`, `unknown`\>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

##### Inherited from

`zInfer.attributes`

#### imageUrl

> **imageUrl**: `null` \| `string`

The URL of an image that has been added to the element.

##### Inherited from

`zInfer.imageUrl`

#### strokeOpacity

> **strokeOpacity**: `number`

A value between 0 and 1 that describes the opacity of the element's stroke.

##### Default

```ts
1
```

##### Inherited from

`zInfer.strokeOpacity`

#### strokeWidth

> **strokeWidth**: `number`

The width of the element's stroke in pixels.

##### Default

```ts
2
```

##### Inherited from

`zInfer.strokeWidth`

#### strokeStyle

> **strokeStyle**: `"solid"` \| `"dashed"` \| `"dotted"`

The style of the element's stroke.

##### Default

```ts
"solid"
```

##### Inherited from

`zInfer.strokeStyle`

#### type

> **type**: `"Polygon"`

##### Inherited from

`zInfer.type`

#### fillOpacity

> **fillOpacity**: `number`

The opacity of the polygon's fill, between 0 and 1.

##### Default

```ts
0.25
```

##### Inherited from

`zInfer.fillOpacity`

#### areaMarker

> **areaMarker**: `boolean`

Whether to show an area marker on the polygon.

##### Default

```ts
false
```

##### Inherited from

`zInfer.areaMarker`

#### interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

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

##### Inherited from

`zInfer.interaction`

***

## CircleElementRead

### Extends

- `zInfer`\<*typeof* `CircleReadSchema`\>

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

##### Inherited from

`zInfer.id`

#### groupId

> **groupId**: `null` \| `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

##### Inherited from

`zInfer.groupId`

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

##### Inherited from

`zInfer.color`

#### name

> **name**: `null` \| `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

##### Inherited from

`zInfer.name`

#### description

> **description**: `null` \| `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

##### Inherited from

`zInfer.description`

#### attributes

> **attributes**: `Record`\<`string`, `unknown`\>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

##### Inherited from

`zInfer.attributes`

#### imageUrl

> **imageUrl**: `null` \| `string`

The URL of an image that has been added to the element.

##### Inherited from

`zInfer.imageUrl`

#### strokeOpacity

> **strokeOpacity**: `number`

A value between 0 and 1 that describes the opacity of the element's stroke.

##### Default

```ts
1
```

##### Inherited from

`zInfer.strokeOpacity`

#### strokeWidth

> **strokeWidth**: `number`

The width of the element's stroke in pixels.

##### Default

```ts
2
```

##### Inherited from

`zInfer.strokeWidth`

#### strokeStyle

> **strokeStyle**: `"solid"` \| `"dashed"` \| `"dotted"`

The style of the element's stroke.

##### Default

```ts
"solid"
```

##### Inherited from

`zInfer.strokeStyle`

#### type

> **type**: `"Circle"`

##### Inherited from

`zInfer.type`

#### radius

> **radius**: `number`

The radius of the circle in meters.

##### Inherited from

`zInfer.radius`

#### radiusMarker

> **radiusMarker**: `boolean`

Whether to show a marker on the circle that indicates the radius

##### Default

```ts
false
```

##### Inherited from

`zInfer.radiusMarker`

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

##### Inherited from

`zInfer.radiusDisplayAngle`

#### radiusDisplayUnit

> **radiusDisplayUnit**: `null` \| `"meter"` \| `"kilometer"` \| `"foot"` \| `"mile"`

The unit of the radius used when the `radiusMarker` is `true`.

A value of `null` means that the unit matches the user's locale.

##### Default

```ts
null
```

##### Inherited from

`zInfer.radiusDisplayUnit`

#### fillOpacity

> **fillOpacity**: `number`

The opacity of the circle's fill.

##### Default

```ts
0.25
```

##### Inherited from

`zInfer.fillOpacity`

#### center

> **center**: [`LngLatTuple`](#lnglattuple)

The center of the circle.

##### Overrides

`zInfer.center`

#### interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

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

##### Inherited from

`zInfer.interaction`

***

## MarkerElementRead

### Extends

- `zInfer`\<*typeof* `MarkerReadSchema`\>

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

##### Inherited from

`zInfer.id`

#### groupId

> **groupId**: `null` \| `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

##### Inherited from

`zInfer.groupId`

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

##### Inherited from

`zInfer.color`

#### name

> **name**: `null` \| `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

##### Inherited from

`zInfer.name`

#### description

> **description**: `null` \| `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

##### Inherited from

`zInfer.description`

#### attributes

> **attributes**: `Record`\<`string`, `unknown`\>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

##### Inherited from

`zInfer.attributes`

#### type

> **type**: `"Marker"`

##### Inherited from

`zInfer.type`

#### opacity

> **opacity**: `number`

The opacity of the marker, between 0 and 1.

##### Default

```ts
1
```

##### Inherited from

`zInfer.opacity`

#### size

> **size**: `number`

The size of the marker, used in conjunction with the `zoom` to determine
the actual size of the marker.

##### Default

```ts
10
```

##### Inherited from

`zInfer.size`

#### zoom

> **zoom**: `number`

The zoom level at which the marker was created. This is combined with
the `size` to determine the actual size of the marker.

When creating a marker, if you don't supply this value it defaults to
the current zoom of the map when you call `createElement`.

##### Inherited from

`zInfer.zoom`

#### interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

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

##### Inherited from

`zInfer.interaction`

***

## HighlighterElementRead

### Extends

- `zInfer`\<*typeof* `HighlighterReadSchema`\>

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

##### Inherited from

`zInfer.id`

#### groupId

> **groupId**: `null` \| `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

##### Inherited from

`zInfer.groupId`

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

##### Inherited from

`zInfer.color`

#### name

> **name**: `null` \| `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

##### Inherited from

`zInfer.name`

#### description

> **description**: `null` \| `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

##### Inherited from

`zInfer.description`

#### attributes

> **attributes**: `Record`\<`string`, `unknown`\>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

##### Inherited from

`zInfer.attributes`

#### type

> **type**: `"Highlighter"`

##### Inherited from

`zInfer.type`

#### renderHoles

> **renderHoles**: `boolean`

Whether to render the holes of the highlighted area.

##### Default

```ts
false
```

##### Inherited from

`zInfer.renderHoles`

#### opacity

> **opacity**: `number`

The opacity of the highlighter, between 0 and 1.

##### Default

```ts
0.5
```

##### Inherited from

`zInfer.opacity`

#### interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

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

##### Inherited from

`zInfer.interaction`

***

## TextElementRead

### Extends

- `zInfer`\<*typeof* `TextReadSchema`\>

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

##### Inherited from

`zInfer.id`

#### groupId

> **groupId**: `null` \| `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

##### Inherited from

`zInfer.groupId`

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

##### Inherited from

`zInfer.color`

#### description

> **description**: `null` \| `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

##### Inherited from

`zInfer.description`

#### attributes

> **attributes**: `Record`\<`string`, `unknown`\>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

##### Inherited from

`zInfer.attributes`

#### rotation

> **rotation**: `number`

The rotation of the element in degrees.

##### Default

```ts
0
```

##### Inherited from

`zInfer.rotation`

#### scale

> **scale**: `number`

The relative scale of the element from the default size. This is combined
with the `zoom` to determine the actual size of the element.

##### Default

```ts
1
```

##### Inherited from

`zInfer.scale`

#### zoom

> **zoom**: `number`

The zoom level at which the element was created. This is combined with
the `scale` to determine the actual size of the element.

When creating an element, if you don't supply this value it defaults to
the current zoom of the map when you call `createElement`.

##### Inherited from

`zInfer.zoom`

#### text

> **text**: `string`

The text in the element.

##### Inherited from

`zInfer.text`

#### align

> **align**: `"center"` \| `"left"` \| `"right"`

The alignment of the text, either `left`, `center` or `right`.

##### Default

```ts
"center"
```

##### Inherited from

`zInfer.align`

#### style

> **style**: `"italic"` \| `"light"` \| `"regular"` \| `"caps"`

The style of the text, either `italic`, `light`, `regular` or `caps`.

##### Default

```ts
"regular"
```

##### Inherited from

`zInfer.style`

#### name

> **name**: `string`

The text shown in the element, which is identical to the `text` property.

##### Remarks

This is added for consistency with other elements that have a `name`
property.

##### Inherited from

`zInfer.name`

#### type

> **type**: `"Text"`

##### Inherited from

`zInfer.type`

#### position

> **position**: [`LngLatTuple`](#lnglattuple)

The geographical position of the center of the text element.

##### Overrides

`zInfer.position`

#### interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

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

##### Inherited from

`zInfer.interaction`

***

## NoteElementRead

### Extends

- `zInfer`\<*typeof* `NoteReadSchema`\>

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

##### Inherited from

`zInfer.id`

#### groupId

> **groupId**: `null` \| `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

##### Inherited from

`zInfer.groupId`

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

##### Inherited from

`zInfer.color`

#### description

> **description**: `null` \| `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

##### Inherited from

`zInfer.description`

#### attributes

> **attributes**: `Record`\<`string`, `unknown`\>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

##### Inherited from

`zInfer.attributes`

#### rotation

> **rotation**: `number`

The rotation of the element in degrees.

##### Default

```ts
0
```

##### Inherited from

`zInfer.rotation`

#### scale

> **scale**: `number`

The relative scale of the element from the default size. This is combined
with the `zoom` to determine the actual size of the element.

##### Default

```ts
1
```

##### Inherited from

`zInfer.scale`

#### zoom

> **zoom**: `number`

The zoom level at which the element was created. This is combined with
the `scale` to determine the actual size of the element.

When creating an element, if you don't supply this value it defaults to
the current zoom of the map when you call `createElement`.

##### Inherited from

`zInfer.zoom`

#### text

> **text**: `string`

The text in the element.

##### Inherited from

`zInfer.text`

#### align

> **align**: `"center"` \| `"left"` \| `"right"`

The alignment of the text, either `left`, `center` or `right`.

##### Default

```ts
"center"
```

##### Inherited from

`zInfer.align`

#### style

> **style**: `"italic"` \| `"light"` \| `"regular"` \| `"caps"`

The style of the text, either `italic`, `light`, `regular` or `caps`.

##### Default

```ts
"regular"
```

##### Inherited from

`zInfer.style`

#### name

> **name**: `string`

The text shown in the element, which is identical to the `text` property.

##### Remarks

This is added for consistency with other elements that have a `name`
property.

##### Inherited from

`zInfer.name`

#### type

> **type**: `"Note"`

##### Inherited from

`zInfer.type`

#### widthScale

> **widthScale**: `number`

##### Inherited from

`zInfer.widthScale`

#### position

> **position**: [`LngLatTuple`](#lnglattuple)

The geographical position of the center of the note element.

##### Overrides

`zInfer.position`

#### interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

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

##### Inherited from

`zInfer.interaction`

***

## ImageElementRead

### Extends

- `zInfer`\<*typeof* `ImageReadSchema`\>

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

##### Inherited from

`zInfer.id`

#### groupId

> **groupId**: `null` \| `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

##### Inherited from

`zInfer.groupId`

#### name

> **name**: `null` \| `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

##### Inherited from

`zInfer.name`

#### description

> **description**: `null` \| `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

##### Inherited from

`zInfer.description`

#### attributes

> **attributes**: `Record`\<`string`, `unknown`\>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

##### Inherited from

`zInfer.attributes`

#### type

> **type**: `"Image"`

##### Inherited from

`zInfer.type`

#### imageUrl

> **imageUrl**: `string`

The URL of the image that is rendered in this element

##### Inherited from

`zInfer.imageUrl`

#### opacity

> **opacity**: `number`

The opacity of the image, between 0 and 1.

##### Default

```ts
1
```

##### Inherited from

`zInfer.opacity`

#### interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

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

##### Inherited from

`zInfer.interaction`

***

## LinkElementRead

### Extends

- `zInfer`\<*typeof* `LinkReadSchema`\>

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

##### Inherited from

`zInfer.id`

#### groupId

> **groupId**: `null` \| `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

##### Inherited from

`zInfer.groupId`

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

##### Inherited from

`zInfer.color`

#### name

> **name**: `null` \| `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

##### Inherited from

`zInfer.name`

#### description

> **description**: `null` \| `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

##### Inherited from

`zInfer.description`

#### attributes

> **attributes**: `Record`\<`string`, `unknown`\>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

##### Inherited from

`zInfer.attributes`

#### type

> **type**: `"Link"`

##### Inherited from

`zInfer.type`

#### url

> **url**: `string`

The URL of the link that is rendered in this element.

##### Inherited from

`zInfer.url`

#### interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

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

##### Inherited from

`zInfer.interaction`

***

## PlaceElementUpdate

### Extends

- `zInfer`\<*typeof* `PlaceUpdateSchema`\>

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

##### Inherited from

`zInfer.id`

#### type

> **type**: `"Place"`

##### Inherited from

`zInfer.type`

#### groupId?

> `optional` **groupId**: `null` \| `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

##### Inherited from

`zInfer.groupId`

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

##### Inherited from

`zInfer.color`

#### name?

> `optional` **name**: `null` \| `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

##### Inherited from

`zInfer.name`

#### description?

> `optional` **description**: `null` \| `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

##### Inherited from

`zInfer.description`

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

##### Inherited from

`zInfer.attributes`

#### interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

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

##### Inherited from

`zInfer.interaction`

#### imageUrl?

> `optional` **imageUrl**: `null` \| `string`

The URL of an image that has been added to the element.

##### Inherited from

`zInfer.imageUrl`

#### symbol?

> `optional` **symbol**: `string`

The symbol that is rendered for the Place.

This can be an emoji by using colon-enclosed characters (e.g. `":smiley:"`)
or one of the symbols available in Felt's symbol library.

You can see the available symbols in the Felt UI when editing a Place
by hovering a symbol and converting the tooltip to kebab-case. For example,
the "Oil barrel" symbol is `oil-barrel`.

##### Inherited from

`zInfer.symbol`

#### frame?

> `optional` **frame**: `null` \| `"frame-circle"` \| `"frame-square"`

The frame that is rendered around the Place's symbol. This is
only available for non-emoji symbols.

##### Inherited from

`zInfer.frame`

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

##### Inherited from

`zInfer.hideLabel`

#### coordinates?

> `optional` **coordinates**: [`LngLatTuple`](#lnglattuple)

##### Overrides

`zInfer.coordinates`

***

## PathElementUpdate

### Extends

- `zInfer`\<*typeof* `PathUpdateSchema`\>

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

##### Inherited from

`zInfer.id`

#### type

> **type**: `"Path"`

##### Inherited from

`zInfer.type`

#### groupId?

> `optional` **groupId**: `null` \| `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

##### Inherited from

`zInfer.groupId`

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

##### Inherited from

`zInfer.color`

#### name?

> `optional` **name**: `null` \| `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

##### Inherited from

`zInfer.name`

#### description?

> `optional` **description**: `null` \| `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

##### Inherited from

`zInfer.description`

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

##### Inherited from

`zInfer.attributes`

#### interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

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

##### Inherited from

`zInfer.interaction`

#### imageUrl?

> `optional` **imageUrl**: `null` \| `string`

The URL of an image that has been added to the element.

##### Inherited from

`zInfer.imageUrl`

#### strokeOpacity?

> `optional` **strokeOpacity**: `number`

A value between 0 and 1 that describes the opacity of the element's stroke.

##### Default

```ts
1
```

##### Inherited from

`zInfer.strokeOpacity`

#### strokeWidth?

> `optional` **strokeWidth**: `number`

The width of the element's stroke in pixels.

##### Default

```ts
2
```

##### Inherited from

`zInfer.strokeWidth`

#### strokeStyle?

> `optional` **strokeStyle**: `"solid"` \| `"dashed"` \| `"dotted"`

The style of the element's stroke.

##### Default

```ts
"solid"
```

##### Inherited from

`zInfer.strokeStyle`

#### distanceMarker?

> `optional` **distanceMarker**: `boolean`

Whether a distance marker is shown at the midpoint of the path.

##### Default

```ts
false
```

##### Inherited from

`zInfer.distanceMarker`

#### routingMode?

> `optional` **routingMode**: `null` \| `"driving"` \| `"cycling"` \| `"walking"` \| `"flying"`

Whether this represents a route, and if so, what mode of transport
is used.

If this is `null`, the path is not considered to be a route, so while it
can have a `distanceMarker`, it will does not have a start or end cap.

##### Default

```ts
null
```

##### Inherited from

`zInfer.routingMode`

#### endCaps?

> `optional` **endCaps**: `boolean`

Whether or not to show Start and End caps on the path. This is
only available if the `routingMode` is set.

##### Default

```ts
false
```

##### Inherited from

`zInfer.endCaps`

#### coordinates?

> `optional` **coordinates**: [`LngLatTuple`](#lnglattuple)[][]

##### Overrides

`zInfer.coordinates`

***

## PolygonElementUpdate

### Extends

- `zInfer`\<*typeof* `PolygonUpdateSchema`\>

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

##### Inherited from

`zInfer.id`

#### type

> **type**: `"Polygon"`

##### Inherited from

`zInfer.type`

#### groupId?

> `optional` **groupId**: `null` \| `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

##### Inherited from

`zInfer.groupId`

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

##### Inherited from

`zInfer.color`

#### name?

> `optional` **name**: `null` \| `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

##### Inherited from

`zInfer.name`

#### description?

> `optional` **description**: `null` \| `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

##### Inherited from

`zInfer.description`

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

##### Inherited from

`zInfer.attributes`

#### interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

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

##### Inherited from

`zInfer.interaction`

#### imageUrl?

> `optional` **imageUrl**: `null` \| `string`

The URL of an image that has been added to the element.

##### Inherited from

`zInfer.imageUrl`

#### strokeOpacity?

> `optional` **strokeOpacity**: `number`

A value between 0 and 1 that describes the opacity of the element's stroke.

##### Default

```ts
1
```

##### Inherited from

`zInfer.strokeOpacity`

#### strokeWidth?

> `optional` **strokeWidth**: `number`

The width of the element's stroke in pixels.

##### Default

```ts
2
```

##### Inherited from

`zInfer.strokeWidth`

#### strokeStyle?

> `optional` **strokeStyle**: `"solid"` \| `"dashed"` \| `"dotted"`

The style of the element's stroke.

##### Default

```ts
"solid"
```

##### Inherited from

`zInfer.strokeStyle`

#### fillOpacity?

> `optional` **fillOpacity**: `number`

The opacity of the polygon's fill, between 0 and 1.

##### Default

```ts
0.25
```

##### Inherited from

`zInfer.fillOpacity`

#### areaMarker?

> `optional` **areaMarker**: `boolean`

Whether to show an area marker on the polygon.

##### Default

```ts
false
```

##### Inherited from

`zInfer.areaMarker`

#### coordinates?

> `optional` **coordinates**: [`LngLatTuple`](#lnglattuple)[][]

##### Overrides

`zInfer.coordinates`

***

## CircleElementUpdate

### Extends

- `zInfer`\<*typeof* `CircleUpdateSchema`\>

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

##### Inherited from

`zInfer.id`

#### type

> **type**: `"Circle"`

##### Inherited from

`zInfer.type`

#### groupId?

> `optional` **groupId**: `null` \| `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

##### Inherited from

`zInfer.groupId`

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

##### Inherited from

`zInfer.color`

#### name?

> `optional` **name**: `null` \| `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

##### Inherited from

`zInfer.name`

#### description?

> `optional` **description**: `null` \| `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

##### Inherited from

`zInfer.description`

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

##### Inherited from

`zInfer.attributes`

#### interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

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

##### Inherited from

`zInfer.interaction`

#### imageUrl?

> `optional` **imageUrl**: `null` \| `string`

The URL of an image that has been added to the element.

##### Inherited from

`zInfer.imageUrl`

#### strokeOpacity?

> `optional` **strokeOpacity**: `number`

A value between 0 and 1 that describes the opacity of the element's stroke.

##### Default

```ts
1
```

##### Inherited from

`zInfer.strokeOpacity`

#### strokeWidth?

> `optional` **strokeWidth**: `number`

The width of the element's stroke in pixels.

##### Default

```ts
2
```

##### Inherited from

`zInfer.strokeWidth`

#### strokeStyle?

> `optional` **strokeStyle**: `"solid"` \| `"dashed"` \| `"dotted"`

The style of the element's stroke.

##### Default

```ts
"solid"
```

##### Inherited from

`zInfer.strokeStyle`

#### radius?

> `optional` **radius**: `number`

The radius of the circle in meters.

##### Inherited from

`zInfer.radius`

#### radiusMarker?

> `optional` **radiusMarker**: `boolean`

Whether to show a marker on the circle that indicates the radius

##### Default

```ts
false
```

##### Inherited from

`zInfer.radiusMarker`

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

##### Inherited from

`zInfer.radiusDisplayAngle`

#### radiusDisplayUnit?

> `optional` **radiusDisplayUnit**: `null` \| `"meter"` \| `"kilometer"` \| `"foot"` \| `"mile"`

The unit of the radius used when the `radiusMarker` is `true`.

A value of `null` means that the unit matches the user's locale.

##### Default

```ts
null
```

##### Inherited from

`zInfer.radiusDisplayUnit`

#### fillOpacity?

> `optional` **fillOpacity**: `number`

The opacity of the circle's fill.

##### Default

```ts
0.25
```

##### Inherited from

`zInfer.fillOpacity`

#### center?

> `optional` **center**: [`LngLatTuple`](#lnglattuple)

The center of the circle.

##### Overrides

`zInfer.center`

***

## MarkerElementUpdate

### Extends

- `zInfer`\<*typeof* `MarkerUpdateSchema`\>

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

##### Inherited from

`zInfer.id`

#### type

> **type**: `"Marker"`

##### Inherited from

`zInfer.type`

#### groupId?

> `optional` **groupId**: `null` \| `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

##### Inherited from

`zInfer.groupId`

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

##### Inherited from

`zInfer.color`

#### name?

> `optional` **name**: `null` \| `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

##### Inherited from

`zInfer.name`

#### description?

> `optional` **description**: `null` \| `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

##### Inherited from

`zInfer.description`

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

##### Inherited from

`zInfer.attributes`

#### interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

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

##### Inherited from

`zInfer.interaction`

#### opacity?

> `optional` **opacity**: `number`

The opacity of the marker, between 0 and 1.

##### Default

```ts
1
```

##### Inherited from

`zInfer.opacity`

#### size?

> `optional` **size**: `number`

The size of the marker, used in conjunction with the `zoom` to determine
the actual size of the marker.

##### Default

```ts
10
```

##### Inherited from

`zInfer.size`

#### zoom?

> `optional` **zoom**: `number`

The zoom level at which the marker was created. This is combined with
the `size` to determine the actual size of the marker.

When creating a marker, if you don't supply this value it defaults to
the current zoom of the map when you call `createElement`.

##### Inherited from

`zInfer.zoom`

#### coordinates?

> `optional` **coordinates**: [`LngLatTuple`](#lnglattuple)[][]

##### Overrides

`zInfer.coordinates`

***

## HighlighterElementUpdate

### Extends

- `zInfer`\<*typeof* `HighlighterUpdateSchema`\>

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

##### Inherited from

`zInfer.id`

#### type

> **type**: `"Highlighter"`

##### Inherited from

`zInfer.type`

#### groupId?

> `optional` **groupId**: `null` \| `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

##### Inherited from

`zInfer.groupId`

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

##### Inherited from

`zInfer.color`

#### name?

> `optional` **name**: `null` \| `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

##### Inherited from

`zInfer.name`

#### description?

> `optional` **description**: `null` \| `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

##### Inherited from

`zInfer.description`

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

##### Inherited from

`zInfer.attributes`

#### interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

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

##### Inherited from

`zInfer.interaction`

#### renderHoles?

> `optional` **renderHoles**: `boolean`

Whether to render the holes of the highlighted area.

##### Default

```ts
false
```

##### Inherited from

`zInfer.renderHoles`

#### opacity?

> `optional` **opacity**: `number`

The opacity of the highlighter, between 0 and 1.

##### Default

```ts
0.5
```

##### Inherited from

`zInfer.opacity`

#### coordinates?

> `optional` **coordinates**: [`LngLatTuple`](#lnglattuple)[][][]

A multipolygon describing the area that is highlighted.

If `renderHoles` is set to false, only the outer ring of each polygon
will be rendered, filling in the area inside the highlighted region.

##### Overrides

`zInfer.coordinates`

***

## TextElementUpdate

### Extends

- `zInfer`\<*typeof* `TextUpdateSchema`\>

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

##### Inherited from

`zInfer.id`

#### type

> **type**: `"Text"`

##### Inherited from

`zInfer.type`

#### groupId?

> `optional` **groupId**: `null` \| `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

##### Inherited from

`zInfer.groupId`

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

##### Inherited from

`zInfer.color`

#### description?

> `optional` **description**: `null` \| `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

##### Inherited from

`zInfer.description`

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

##### Inherited from

`zInfer.attributes`

#### interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

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

##### Inherited from

`zInfer.interaction`

#### rotation?

> `optional` **rotation**: `number`

The rotation of the element in degrees.

##### Default

```ts
0
```

##### Inherited from

`zInfer.rotation`

#### scale?

> `optional` **scale**: `number`

The relative scale of the element from the default size. This is combined
with the `zoom` to determine the actual size of the element.

##### Default

```ts
1
```

##### Inherited from

`zInfer.scale`

#### zoom?

> `optional` **zoom**: `number`

The zoom level at which the element was created. This is combined with
the `scale` to determine the actual size of the element.

When creating an element, if you don't supply this value it defaults to
the current zoom of the map when you call `createElement`.

##### Inherited from

`zInfer.zoom`

#### text?

> `optional` **text**: `string`

The text in the element.

##### Inherited from

`zInfer.text`

#### align?

> `optional` **align**: `"center"` \| `"left"` \| `"right"`

The alignment of the text, either `left`, `center` or `right`.

##### Default

```ts
"center"
```

##### Inherited from

`zInfer.align`

#### style?

> `optional` **style**: `"italic"` \| `"light"` \| `"regular"` \| `"caps"`

The style of the text, either `italic`, `light`, `regular` or `caps`.

##### Default

```ts
"regular"
```

##### Inherited from

`zInfer.style`

#### position?

> `optional` **position**: [`LngLatTuple`](#lnglattuple)

The geographical position of the center of the text element.

##### Overrides

`zInfer.position`

***

## NoteElementUpdate

### Extends

- `zInfer`\<*typeof* `NoteUpdateSchema`\>

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

##### Inherited from

`zInfer.id`

#### type

> **type**: `"Note"`

##### Inherited from

`zInfer.type`

#### groupId?

> `optional` **groupId**: `null` \| `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

##### Inherited from

`zInfer.groupId`

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

##### Inherited from

`zInfer.color`

#### description?

> `optional` **description**: `null` \| `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

##### Inherited from

`zInfer.description`

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

##### Inherited from

`zInfer.attributes`

#### interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

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

##### Inherited from

`zInfer.interaction`

#### rotation?

> `optional` **rotation**: `number`

The rotation of the element in degrees.

##### Default

```ts
0
```

##### Inherited from

`zInfer.rotation`

#### scale?

> `optional` **scale**: `number`

The relative scale of the element from the default size. This is combined
with the `zoom` to determine the actual size of the element.

##### Default

```ts
1
```

##### Inherited from

`zInfer.scale`

#### zoom?

> `optional` **zoom**: `number`

The zoom level at which the element was created. This is combined with
the `scale` to determine the actual size of the element.

When creating an element, if you don't supply this value it defaults to
the current zoom of the map when you call `createElement`.

##### Inherited from

`zInfer.zoom`

#### text?

> `optional` **text**: `string`

The text in the element.

##### Inherited from

`zInfer.text`

#### align?

> `optional` **align**: `"center"` \| `"left"` \| `"right"`

The alignment of the text, either `left`, `center` or `right`.

##### Default

```ts
"center"
```

##### Inherited from

`zInfer.align`

#### style?

> `optional` **style**: `"italic"` \| `"light"` \| `"regular"` \| `"caps"`

The style of the text, either `italic`, `light`, `regular` or `caps`.

##### Default

```ts
"regular"
```

##### Inherited from

`zInfer.style`

#### widthScale?

> `optional` **widthScale**: `number`

##### Inherited from

`zInfer.widthScale`

#### position?

> `optional` **position**: [`LngLatTuple`](#lnglattuple)

The geographical position of the center of the note element.

##### Overrides

`zInfer.position`

***

## ImageElementUpdate

### Extends

- `zInfer`\<*typeof* `ImageUpdateSchema`\>

### Properties

#### id

> **id**: `string`

The unique identifier for the element.

##### Inherited from

`zInfer.id`

#### type

> **type**: `"Image"`

##### Inherited from

`zInfer.type`

#### groupId?

> `optional` **groupId**: `null` \| `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

##### Inherited from

`zInfer.groupId`

#### name?

> `optional` **name**: `null` \| `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

##### Inherited from

`zInfer.name`

#### description?

> `optional` **description**: `null` \| `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

##### Inherited from

`zInfer.description`

#### attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`\>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

##### Inherited from

`zInfer.attributes`

#### interaction?

> `optional` **interaction**: `"default"` \| `"locked"`

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

##### Inherited from

`zInfer.interaction`

#### coordinates?

> `optional` **coordinates**: \[`number`, `number`\][][] = `MultiLineStringGeometrySchema.shape.coordinates`

##### Inherited from

`zInfer.coordinates`

#### imageUrl?

> `optional` **imageUrl**: `string`

The URL of the image that is rendered in this element

##### Inherited from

`zInfer.imageUrl`

#### opacity?

> `optional` **opacity**: `number`

The opacity of the image, between 0 and 1.

##### Default

```ts
1
```

##### Inherited from

`zInfer.opacity`

***

## ElementCreate

> **ElementCreate** = [`PlaceElementCreate`](#placeelementcreate) \| [`PathElementCreate`](#pathelementcreate) \| [`PolygonElementCreate`](#polygonelementcreate) \| [`CircleElementCreate`](#circleelementcreate) \| [`MarkerElementCreate`](#markerelementcreate) \| [`HighlighterElementCreate`](#highlighterelementcreate) \| [`ImageElementCreate`](#imageelementcreate) \| [`TextElementCreate`](#textelementcreate) \| [`NoteElementCreate`](#noteelementcreate)

***

## ElementUpdate

> **ElementUpdate** = [`PlaceElementUpdate`](#placeelementupdate) \| [`PathElementUpdate`](#pathelementupdate) \| [`PolygonElementUpdate`](#polygonelementupdate) \| [`CircleElementUpdate`](#circleelementupdate) \| [`MarkerElementUpdate`](#markerelementupdate) \| [`HighlighterElementUpdate`](#highlighterelementupdate) \| [`TextElementUpdate`](#textelementupdate) \| [`NoteElementUpdate`](#noteelementupdate) \| [`ImageElementUpdate`](#imageelementupdate)

***

## ElementGroup

### Properties

#### id

> **id**: `string`

A string identifying the element group.

#### name

> **name**: `string`

The name of the element group. This is shown in the legend.

#### caption

> **caption**: `null` \| `string`

The caption of the element group. This is shown in the legend.

#### elementIds

> **elementIds**: `string`[]

The ids of the elements in the element group.

##### Remarks

You can use these ids to get the full element objects via the ElementsController.getElements \| \`getElements\` method.

#### visible

> **visible**: `boolean`

Whether the element group is visible or not.

#### shownInLegend

> **shownInLegend**: `boolean`

Whether the element group is shown in the legend or not.

***

## GetElementGroupsConstraint

The constraints to apply when getting element groups.

### Extends

- `zInfer`\<*typeof* `GetElementGroupsConstraintSchema`\>

### Properties

#### ids?

> `optional` **ids**: `string`[]

The ids of the element groups to get.

##### Inherited from

`zInfer.ids`

***

## ElementGroupChangeCallbackParams

The parameters for the ElementsController.onElementGroupChange \| \`onElementGroupChange\` listener.

### Properties

#### elementGroup

> **elementGroup**: `null` \| [`ElementGroup`](#elementgroup)

***

## GetElementsConstraint

The constraints to apply when getting elements.

### Extends

- `zInfer`\<*typeof* `GetElementsConstraintSchema`\>

### Properties

#### ids?

> `optional` **ids**: `string`[]

The ids of the elements to get.

##### Inherited from

`zInfer.ids`

***

## ElementChangeCallbackParams

The parameters for the ElementsController.onElementChange \| \`onElementChange\` and the ElementsController.onElementCreate \| \`onElementCreate\` listeners.

### Properties

#### element

> **element**: `null` \| [`Element`](#element-1)

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

***

## Element

> **Element** = [`PlaceElementRead`](#placeelementread) \| [`PathElementRead`](#pathelementread) \| [`PolygonElementRead`](#polygonelementread) \| [`CircleElementRead`](#circleelementread) \| [`MarkerElementRead`](#markerelementread) \| [`HighlighterElementRead`](#highlighterelementread) \| [`TextElementRead`](#textelementread) \| [`NoteElementRead`](#noteelementread) \| [`ImageElementRead`](#imageelementread) \| [`LinkElementRead`](#linkelementread)


<a name="interactionsmd"></a>

The Interactions module allows you to be notified when the user interacts with the map.

Interactions include clicking and hovering on points and features.

## MapInteractionEvent

The event object passed to the interaction listeners.

### Properties

#### coordinate

> **coordinate**: [`LatLng`](#latlng)

The cursor position in world coordinates.

#### point

> **point**: \{ `x`: `number`; `y`: `number`; \}

The pixel coordinates of the mouse cursor, relative to the map and measured from the top left corner.

| Name | Type |
| ------ | ------ |
| `x` | `number` |
| `y` | `number` |

#### features

> **features**: [`LayerFeature`](#layerfeature)[]

The vector features that are under the cursor.

#### rasterValues

> **rasterValues**: [`RasterValue`](#rastervalue)[]

The raster pixel values that are under the cursor.


<a name="layersmd"></a>

Layers in a Felt map hold geospatial data, but also configure how the data is rendered
both on the map and in the legend. The data can be vector data such as Points, Lines, or Polygons,
or raster data such as satellite images.

Each Layer can be grouped under a LayerGroup, and has associated LegendItems that represent
how the layer is rendered in the legend.

You can control the visibility of layers, layer groups, and legend items using the
LayersController.setLayerVisibility \| \`setLayerVisibility\`, LayersController.setLayerGroupVisibility \| \`setLayerGroupVisibility\`, and LayersController.setLegendItemVisibility \|  \`setLegendItemVisibility\` methods.

When a Layer is styled to as categorical data or "classed" numeric data, there will be
a `LegendItem` for each category or class. Each `LegendItem` can be controlled for visibility
independently of the Layer, so you can turn on and off each category or class individually.

## LayerFeature

A LayerFeature is a single geographical item in a layer.

It is intended to be a lightweight object that contains the properties of a
feature, but not the geometry. It is returned by methods like
[FeltController.getRenderedFeatures](#feltcontroller#getrenderedfeatures) and [FeltController.getFeature](#feltcontroller#getfeature),
and as part of the methods in the SelectionController

The geometry can be obtained via the [FeltController.getGeoJsonFeature](#feltcontroller#getgeojsonfeature)
method, which returns a [GeoJsonFeature](#geojsonfeature) object.

### Properties

#### id

> **id**: `string` \| `number`

The identifier of the feature, unique within the layer.

#### layerId

> **layerId**: `string`

The identifier of the layer that the feature belongs to.

#### geometryType

> **geometryType**: `"Polygon"` \| `"MultiPolygon"` \| `"LineString"` \| `"MultiLineString"` \| `"Point"` \| `"MultiPoint"` \| `string` & \{ \}

The type of geometry of the feature.

##### Remarks

Because LayerFeatures can be read from tiled features, it's
possible that this `geometryType` won't match the `geometry.type` of the
[GeoJsonFeature](#geojsonfeature) returned by [FeltController.getGeoJsonFeature](#feltcontroller#getgeojsonfeature).

For example, this may return `LineString` but the full feature is a `MultiLineString`,
or, similarly `Polygon` here may be a `MultiPolygon` in the full feature.

As a result, you should treat this property as being indicative only.

#### bbox

> **bbox**: `undefined` \| \[`number`, `number`, `number`, `number`\]

The bounding box of the feature.

##### Remarks

Because LayerFeatures can be read from tiled features and considering
that feature geometry can go through multiple tiles, it's possible that this
is not the complete bounding box of the feature.

#### properties

> **properties**: [`GeoJsonProperties`](#geojsonproperties)

The properties of the feature, as a bag of attributes.

***

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

> **categoryName**: `null` \| `string`

The name of the category that the pixel belongs to.

#### color

> **color**: `null` \| \{ `r`: `number`; `g`: `number`; `b`: `number`; `a`: `number`; \}

The color of the pixel. Each value is between 0 and 255.

***

## LayerFilters

The filters that are currently set on a layer.

A layer's filters are the combination of various different places
in which filters can be applied.

### Properties

#### style

> **style**: [`Filters`](#filters-4)

Filters that are set in the layer's style. These are the lowest level
of filters, and can only be set by editing the map.

#### components

> **components**: [`Filters`](#filters-4)

Filters that are set in the layer's components, which are interactive
elements in the legend. These can be set by viewers for their own session,
but their default value can be set by the map creator.

#### ephemeral

> **ephemeral**: [`Filters`](#filters-4)

Filters that are set ephemerally by viewers in their own session.

These are the filters that are set when the LayersController.setLayerFilters \| \`setLayerFilters\` method is
called. There is no way to set these in the Felt UI - they can only be
set using the SDK.

#### combined

> **combined**: [`Filters`](#filters-4)

The combined result of all the filters set on the layer.

***

## LayerBoundaries

All the different sources for boundaries for a layer, including their combined result.

### Properties

#### spatialFilters

> **spatialFilters**: `null` \| [`MultiPolygonGeometry`](#multipolygongeometry)

Boundaries set by drawing spatial filters on the map.

When there are multiple spatial filters, they are combined into a multi-polygon.

#### ephemeral

> **ephemeral**: `null` \| [`GeometryFilter`](#geometryfilter)

Boundaries that are set ephemerally by viewers in their own session.

These are the filters that are set when the LayersController.setLayerBoundary
method is called. There is no way to set these in the Felt UI - they can only be
set using the SDK.

#### combined

> **combined**: `null` \| [`MultiPolygonGeometry`](#multipolygongeometry)

The combined result of all the boundaries set on the layer.

Each different source of boundary is intersected to produce the combined result.

***

## FilterLogicGate

> **FilterLogicGate** = `"and"` \| `"or"`

***

## FilterExpression

> **FilterExpression** = \[`null` \| `string`, `"in"` \| `"ni"`, `null` \| (`null` \| `string` \| `number` \| `boolean`)[]\] \| \[`null` \| `string`, `"lt"` \| `"gt"` \| `"le"` \| `"ge"` \| `"eq"` \| `"ne"` \| `"cn"` \| `"nc"` \| `"is"` \| `"isnt"`, `null` \| `string` \| `number` \| `boolean`\]

***

## FilterTernary

> **FilterTernary** = \[[`FilterTernary`](#filterternary) \| [`FilterExpression`](#filterexpression) \| `null` \| `boolean`, [`FilterLogicGate`](#filterlogicgate), [`FilterTernary`](#filterternary) \| [`FilterExpression`](#filterexpression) \| `null` \| `boolean`\]

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

***

## Filters

> **Filters** = [`FilterTernary`](#filterternary) \| [`FilterExpression`](#filterexpression) \| `null` \| `boolean`

Filters can be used to change which features in a layer are rendered. Filters can be
applied to a layer by the LayersController.setLayerFilters \| \`setLayerFilters\` method on the Felt controller.

Filters use a tree structure for combining expressions with logical operators, called a
[FilterTernary](#filterternary). When combining three or more conditions, you must use proper nesting
rather than a flat list.

See the examples below for the correct structure to use when building complex filters.

### Remarks

The possible operators are:
- `lt`: Less than
- `gt`: Greater than
- `le`: Less than or equal to
- `ge`: Greater than or equal to
- `eq`: Equal to
- `ne`: Not equal to
- `cn`: Contains
- `nc`: Does not contain

The allowed boolean operators are:
- `and`: Logical AND
- `or`: Logical OR

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

***

## GeometryFilter

> **GeometryFilter** = [`FeltBoundary`](#feltboundary) \| [`PolygonGeometry`](#polygongeometry) \| [`MultiPolygonGeometry`](#multipolygongeometry) \| [`LngLatTuple`](#lnglattuple)[]

The common type for filtering data by a spatial boundary.

This can be either:
- `FeltBoundary`: a [w, s, e, n] bounding box
- `PolygonGeometry`: a GeoJSON Polygon geometry
- `MultiPolygonGeometry`: a GeoJSON MultiPolygon geometry
- `LngLatTuple[]`: a list of coordinates describing a single ring of a polygon

***

## LayerGroup

### Properties

#### id

> **id**: `string`

A string identifying the layer group.

#### name

> **name**: `string`

The name of the layer group. This is shown in the legend.

#### caption

> **caption**: `null` \| `string`

The caption of the layer group. This is shown in the legend.

#### layerIds

> **layerIds**: `string`[]

The ids of the layers in the layer group.

##### Remarks

You can use these ids to get the full layer objects via the [\`getLayers\`](#feltcontroller#getlayers) method.

#### visible

> **visible**: `boolean`

Whether the layer group is visible or not.

#### shownInLegend

> **shownInLegend**: `boolean`

Whether the layer group is shown in the legend or not.

#### bounds

> **bounds**: `null` \| \[`number`, `number`, `number`, `number`\]

The bounding box of the layer group in [west, south, east, north] order.

[FeltBoundary](#feltboundary)

***

## GetLayerGroupsConstraint

The constraints to apply when getting layer groups.

### Extends

- `zInfer`\<*typeof* `GetLayerGroupsFilterSchema`\>

### Properties

#### ids?

> `optional` **ids**: `string`[]

The ids of the layer groups to get.

##### Inherited from

`zInfer.ids`

***

## LayerGroupChangeCallbackParams

The parameters for the [\`onLayerGroupChange\`](#feltcontroller#onlayergroupchange) listener.

### Properties

#### layerGroup

> **layerGroup**: `null` \| [`LayerGroup`](#layergroup)

***

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

> **attributes**: [`LayerSchemaAttribute`](#layerschemaattribute)[]

Array of attribute schemas describing the properties available on features in this layer.

***

## LayerSchemaCommonAttribute

The common schema for all attributes.

### Extended by

- [`LayerSchemaBooleanAttribute`](#layerschemabooleanattribute)
- [`LayerSchemaDateAttribute`](#layerschemadateattribute)
- [`LayerSchemaDateTimeAttribute`](#layerschemadatetimeattribute)
- [`LayerSchemaNumericAttribute`](#layerschemanumericattribute)
- [`LayerSchemaTextAttribute`](#layerschematextattribute)

### Properties

#### id

> **id**: `string`

The unique identifier for this attribute.

This can be used to fetch statistics, categories, histograms etc. for this attribute
via the [LayersController.getCategoryData](#feltcontroller#getcategorydata), [LayersController.getHistogramData](#feltcontroller#gethistogramdata),
and [LayersController.getAggregates](#feltcontroller#getaggregates) methods.

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

***

## LayerSchemaNumericAttribute

The schema for a numeric attribute on a layer.

### Extends

- [`LayerSchemaCommonAttribute`](#layerschemacommonattribute)

### Properties

#### id

> **id**: `string`

The unique identifier for this attribute.

This can be used to fetch statistics, categories, histograms etc. for this attribute
via the [LayersController.getCategoryData](#feltcontroller#getcategorydata), [LayersController.getHistogramData](#feltcontroller#gethistogramdata),
and [LayersController.getAggregates](#feltcontroller#getaggregates) methods.

##### Inherited from

[`LayerSchemaCommonAttribute`](#layerschemacommonattribute).[`id`](#id-9)

#### displayName

> **displayName**: `string`

The human-readable name of this attribute.

##### Inherited from

[`LayerSchemaCommonAttribute`](#layerschemacommonattribute).[`displayName`](#displayname)

#### detailedType

> **detailedType**: `string`

The specific data type of this attribute, providing more detail than the basic type.

For instance, a numeric attribute might be "INTEGER", "FLOAT, etc.

##### Inherited from

[`LayerSchemaCommonAttribute`](#layerschemacommonattribute).[`detailedType`](#detailedtype)

#### distinctCount

> **distinctCount**: `number`

The number of distinct values present for this attribute across all features.

##### Inherited from

[`LayerSchemaCommonAttribute`](#layerschemacommonattribute).[`distinctCount`](#distinctcount)

#### type

> **type**: `"numeric"`

Indicates this is a numeric attribute.

#### sampleValues

> **sampleValues**: \{ `value`: `number`; `count`: `number`; \}[]

A small sample of values for this attribute and their frequency.

| Name | Type |
| ------ | ------ |
| `value` | `number` |
| `count` | `number` |

#### min

> **min**: `number`

The minimum value present for this attribute across all features.

#### max

> **max**: `number`

The maximum value present for this attribute across all features.

***

## LayerSchemaTextAttribute

The schema for a text attribute on a layer.

### Extends

- [`LayerSchemaCommonAttribute`](#layerschemacommonattribute)

### Properties

#### id

> **id**: `string`

The unique identifier for this attribute.

This can be used to fetch statistics, categories, histograms etc. for this attribute
via the [LayersController.getCategoryData](#feltcontroller#getcategorydata), [LayersController.getHistogramData](#feltcontroller#gethistogramdata),
and [LayersController.getAggregates](#feltcontroller#getaggregates) methods.

##### Inherited from

[`LayerSchemaCommonAttribute`](#layerschemacommonattribute).[`id`](#id-9)

#### displayName

> **displayName**: `string`

The human-readable name of this attribute.

##### Inherited from

[`LayerSchemaCommonAttribute`](#layerschemacommonattribute).[`displayName`](#displayname)

#### detailedType

> **detailedType**: `string`

The specific data type of this attribute, providing more detail than the basic type.

For instance, a numeric attribute might be "INTEGER", "FLOAT, etc.

##### Inherited from

[`LayerSchemaCommonAttribute`](#layerschemacommonattribute).[`detailedType`](#detailedtype)

#### distinctCount

> **distinctCount**: `number`

The number of distinct values present for this attribute across all features.

##### Inherited from

[`LayerSchemaCommonAttribute`](#layerschemacommonattribute).[`distinctCount`](#distinctcount)

#### type

> **type**: `"text"`

Indicates this is a text attribute.

#### sampleValues

> **sampleValues**: \{ `value`: `string`; `count`: `number`; \}[]

A small sample of string values for this attribute and their frequency.

| Name | Type |
| ------ | ------ |
| `value` | `string` |
| `count` | `number` |

***

## LayerSchemaBooleanAttribute

The schema for a boolean attribute on a layer.

### Extends

- [`LayerSchemaCommonAttribute`](#layerschemacommonattribute)

### Properties

#### id

> **id**: `string`

The unique identifier for this attribute.

This can be used to fetch statistics, categories, histograms etc. for this attribute
via the [LayersController.getCategoryData](#feltcontroller#getcategorydata), [LayersController.getHistogramData](#feltcontroller#gethistogramdata),
and [LayersController.getAggregates](#feltcontroller#getaggregates) methods.

##### Inherited from

[`LayerSchemaCommonAttribute`](#layerschemacommonattribute).[`id`](#id-9)

#### displayName

> **displayName**: `string`

The human-readable name of this attribute.

##### Inherited from

[`LayerSchemaCommonAttribute`](#layerschemacommonattribute).[`displayName`](#displayname)

#### detailedType

> **detailedType**: `string`

The specific data type of this attribute, providing more detail than the basic type.

For instance, a numeric attribute might be "INTEGER", "FLOAT, etc.

##### Inherited from

[`LayerSchemaCommonAttribute`](#layerschemacommonattribute).[`detailedType`](#detailedtype)

#### distinctCount

> **distinctCount**: `number`

The number of distinct values present for this attribute across all features.

##### Inherited from

[`LayerSchemaCommonAttribute`](#layerschemacommonattribute).[`distinctCount`](#distinctcount)

#### type

> **type**: `"boolean"`

Indicates this is a boolean attribute.

#### sampleValues

> **sampleValues**: \{ `value`: `boolean`; `count`: `number`; \}[]

A representative sample of boolean values for this attribute and their frequency.

| Name | Type |
| ------ | ------ |
| `value` | `boolean` |
| `count` | `number` |

***

## LayerSchemaDateAttribute

The schema for a date attribute on a layer.

### Extends

- [`LayerSchemaCommonAttribute`](#layerschemacommonattribute)

### Properties

#### id

> **id**: `string`

The unique identifier for this attribute.

This can be used to fetch statistics, categories, histograms etc. for this attribute
via the [LayersController.getCategoryData](#feltcontroller#getcategorydata), [LayersController.getHistogramData](#feltcontroller#gethistogramdata),
and [LayersController.getAggregates](#feltcontroller#getaggregates) methods.

##### Inherited from

[`LayerSchemaCommonAttribute`](#layerschemacommonattribute).[`id`](#id-9)

#### displayName

> **displayName**: `string`

The human-readable name of this attribute.

##### Inherited from

[`LayerSchemaCommonAttribute`](#layerschemacommonattribute).[`displayName`](#displayname)

#### detailedType

> **detailedType**: `string`

The specific data type of this attribute, providing more detail than the basic type.

For instance, a numeric attribute might be "INTEGER", "FLOAT, etc.

##### Inherited from

[`LayerSchemaCommonAttribute`](#layerschemacommonattribute).[`detailedType`](#detailedtype)

#### distinctCount

> **distinctCount**: `number`

The number of distinct values present for this attribute across all features.

##### Inherited from

[`LayerSchemaCommonAttribute`](#layerschemacommonattribute).[`distinctCount`](#distinctcount)

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

> **sampleValues**: \{ `value`: `string`; `count`: `number`; \}[]

A representative sample of date values for this attribute and their frequency.

| Name | Type |
| ------ | ------ |
| `value` | `string` |
| `count` | `number` |

***

## LayerSchemaDateTimeAttribute

The schema for a datetime attribute on a layer.

### Extends

- [`LayerSchemaCommonAttribute`](#layerschemacommonattribute)

### Properties

#### id

> **id**: `string`

The unique identifier for this attribute.

This can be used to fetch statistics, categories, histograms etc. for this attribute
via the [LayersController.getCategoryData](#feltcontroller#getcategorydata), [LayersController.getHistogramData](#feltcontroller#gethistogramdata),
and [LayersController.getAggregates](#feltcontroller#getaggregates) methods.

##### Inherited from

[`LayerSchemaCommonAttribute`](#layerschemacommonattribute).[`id`](#id-9)

#### displayName

> **displayName**: `string`

The human-readable name of this attribute.

##### Inherited from

[`LayerSchemaCommonAttribute`](#layerschemacommonattribute).[`displayName`](#displayname)

#### detailedType

> **detailedType**: `string`

The specific data type of this attribute, providing more detail than the basic type.

For instance, a numeric attribute might be "INTEGER", "FLOAT, etc.

##### Inherited from

[`LayerSchemaCommonAttribute`](#layerschemacommonattribute).[`detailedType`](#detailedtype)

#### distinctCount

> **distinctCount**: `number`

The number of distinct values present for this attribute across all features.

##### Inherited from

[`LayerSchemaCommonAttribute`](#layerschemacommonattribute).[`distinctCount`](#distinctcount)

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

> **sampleValues**: \{ `value`: `string`; `count`: `number`; \}[]

A representative sample of datetime values for this attribute and their frequency.

| Name | Type |
| ------ | ------ |
| `value` | `string` |
| `count` | `number` |

***

## LayerSchemaAttribute

> **LayerSchemaAttribute** = [`LayerSchemaNumericAttribute`](#layerschemanumericattribute) \| [`LayerSchemaTextAttribute`](#layerschematextattribute) \| [`LayerSchemaBooleanAttribute`](#layerschemabooleanattribute) \| [`LayerSchemaDateAttribute`](#layerschemadateattribute) \| [`LayerSchemaDateTimeAttribute`](#layerschemadatetimeattribute)

A single attribute from the layer schema.

### Remarks

Each feature in a layer has a set of attributes, and these types describe the
structure of a single attribute, including things like id, display name, type, and sample values.

***

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

> **bands**: [`RasterBand`](#rasterband)[]

List of encoded raster bands

***

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

***

## GeoJsonUrlVectorSource

A GeoJSON URL source is a layer that is populated from a GeoJSON file at a remote URL.

These sources are ones that have not been uploaded to and processed by Felt, and as such
their capabilities are limited.

For instance, they cannot be filtered, nor can statistics be fetched for them.

### Extends

- `zInfer`\<*typeof* `GeoJsonUrlVectorSourceSchema`\>

### Properties

#### type

> **type**: `"geoJsonUrl"`

Identifies this as a GeoJSON URL source.

##### Inherited from

`zInfer.type`

#### url

> **url**: `string`

The remote URL of the GeoJSON file used to populate the layer.

##### Inherited from

`zInfer.url`

#### refreshInterval?

> `optional` **refreshInterval**: `null` \| `number`

The interval in milliseconds between automatic refreshes of the GeoJSON.

The value must be in the range of 250ms - 5 minutes (300,000ms).

If the value is `null`, the GeoJSON will not be refreshed automatically.

##### Inherited from

`zInfer.refreshInterval`

***

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

***

## GeoJsonFileVectorSource

A GeoJSON file source is a layer that is populated from a GeoJSON file
on your local machine.

This is an input-only type. It is converted to a [GeoJsonDataVectorSource](#geojsondatavectorsource)
when passed to [LayersController.createLayersFromGeoJson](#feltcontroller#createlayersfromgeojson).

### Extends

- `zInfer`\<*typeof* `GeoJsonFileVectorSourceSchema`\>

### Properties

#### type

> **type**: `"geoJsonFile"`

Identifies this as a GeoJSON file source.

##### Inherited from

`zInfer.type`

#### file

> **file**: `File`

The GeoJSON file for the layer.

##### Inherited from

`zInfer.file`

***

## FeltTiledVectorSource

> **FeltTiledVectorSource** = \{ `type`: `"felt"`; `tileTemplateUrl`: `string`; \}

A tiled vector source is a layer that is populated from data the has been uploaded
to Felt, and processed into vector tiles.

### Properties

#### type

> **type**: `"felt"`

Identifies this as a tiled vector source. Typically, these tiles will have been
uploaded to and processed by Felt.

#### tileTemplateUrl

> **tileTemplateUrl**: `string`

The template URL used for fetching tiles.

***

## LayerCommon

The common properties for all layers.

### Extended by

- [`DataOnlyLayer`](#dataonlylayer)
- [`RasterLayer`](#rasterlayer)
- [`VectorLayer`](#vectorlayer)

### Properties

#### id

> **id**: `string`

A string identifying the layer

#### groupId

> **groupId**: `null` \| `string`

The ID of the layer group that the layer belongs to.

Layers that appear at the root level in Felt will not have a group ID.

#### name

> **name**: `string`

The name of the layer can be displayed in the Legend, depending
on how the layer's legend is configured in its style.

#### caption

> **caption**: `null` \| `string`

The layer's caption is shown in the legend.

#### description

> **description**: `null` \| `string`

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

> **status**: `"processing"` \| `"completed"` \| `"failed"` \| `"incomplete"`

The current processing status of the layer.

#### bounds

> **bounds**: `null` \| \[`number`, `number`, `number`, `number`\]

The bounding box of the layer in [west, south, east, north] order

There are cases where the bounds are not available, such as for layers added to the map
from URL sources, as these are not (depending on their type) processed and analyzed by
Felt.

[FeltBoundary](#feltboundary)

***

## RasterLayer

A raster layer is a layer that contains raster data that can be rendered on the map

### Extends

- [`LayerCommon`](#layercommon)

### Properties

#### id

> **id**: `string`

A string identifying the layer

##### Inherited from

[`LayerCommon`](#layercommon).[`id`](#id-1)

#### groupId

> **groupId**: `null` \| `string`

The ID of the layer group that the layer belongs to.

Layers that appear at the root level in Felt will not have a group ID.

##### Inherited from

[`LayerCommon`](#layercommon).[`groupId`](#groupid)

#### name

> **name**: `string`

The name of the layer can be displayed in the Legend, depending
on how the layer's legend is configured in its style.

##### Inherited from

[`LayerCommon`](#layercommon).[`name`](#name)

#### caption

> **caption**: `null` \| `string`

The layer's caption is shown in the legend.

##### Inherited from

[`LayerCommon`](#layercommon).[`caption`](#caption)

#### description

> **description**: `null` \| `string`

The layer description forms part of the layer's metadata. This is visible
to users via the layer info button in the legend.

##### Inherited from

[`LayerCommon`](#layercommon).[`description`](#description)

#### visible

> **visible**: `boolean`

Whether the layer is visible or not.

##### Inherited from

[`LayerCommon`](#layercommon).[`visible`](#visible)

#### shownInLegend

> **shownInLegend**: `boolean`

Whether the layer is shown in the legend or not.

##### Inherited from

[`LayerCommon`](#layercommon).[`shownInLegend`](#showninlegend)

#### style

> **style**: `object`

The FSL style for the layer.

See the [FSL documentation](https://developers.felt.com/felt-style-language) for details
on how to read and write styles.

As the types of the styles are very complex, we return `object` here and advise that you
program defensively while reading the styles.

##### Inherited from

[`LayerCommon`](#layercommon).[`style`](#style-1)

#### status

> **status**: `"processing"` \| `"completed"` \| `"failed"` \| `"incomplete"`

The current processing status of the layer.

##### Inherited from

[`LayerCommon`](#layercommon).[`status`](#status)

#### bounds

> **bounds**: `null` \| \[`number`, `number`, `number`, `number`\]

The bounding box of the layer in [west, south, east, north] order

There are cases where the bounds are not available, such as for layers added to the map
from URL sources, as these are not (depending on their type) processed and analyzed by
Felt.

[FeltBoundary](#feltboundary)

##### Inherited from

[`LayerCommon`](#layercommon).[`bounds`](#bounds)

#### geometryType

> **geometryType**: `"Raster"`

Identifies the type of geometry in the layer.

#### source

> **source**: [`RasterLayerSource`](#rasterlayersource-1)

The source of the raster layer's data.

***

## VectorLayer

A vector layer is a layer that contains vector data that can be rendered on the map

### Extends

- [`LayerCommon`](#layercommon)

### Properties

#### id

> **id**: `string`

A string identifying the layer

##### Inherited from

[`LayerCommon`](#layercommon).[`id`](#id-1)

#### groupId

> **groupId**: `null` \| `string`

The ID of the layer group that the layer belongs to.

Layers that appear at the root level in Felt will not have a group ID.

##### Inherited from

[`LayerCommon`](#layercommon).[`groupId`](#groupid)

#### name

> **name**: `string`

The name of the layer can be displayed in the Legend, depending
on how the layer's legend is configured in its style.

##### Inherited from

[`LayerCommon`](#layercommon).[`name`](#name)

#### caption

> **caption**: `null` \| `string`

The layer's caption is shown in the legend.

##### Inherited from

[`LayerCommon`](#layercommon).[`caption`](#caption)

#### description

> **description**: `null` \| `string`

The layer description forms part of the layer's metadata. This is visible
to users via the layer info button in the legend.

##### Inherited from

[`LayerCommon`](#layercommon).[`description`](#description)

#### visible

> **visible**: `boolean`

Whether the layer is visible or not.

##### Inherited from

[`LayerCommon`](#layercommon).[`visible`](#visible)

#### shownInLegend

> **shownInLegend**: `boolean`

Whether the layer is shown in the legend or not.

##### Inherited from

[`LayerCommon`](#layercommon).[`shownInLegend`](#showninlegend)

#### style

> **style**: `object`

The FSL style for the layer.

See the [FSL documentation](https://developers.felt.com/felt-style-language) for details
on how to read and write styles.

As the types of the styles are very complex, we return `object` here and advise that you
program defensively while reading the styles.

##### Inherited from

[`LayerCommon`](#layercommon).[`style`](#style-1)

#### status

> **status**: `"processing"` \| `"completed"` \| `"failed"` \| `"incomplete"`

The current processing status of the layer.

##### Inherited from

[`LayerCommon`](#layercommon).[`status`](#status)

#### bounds

> **bounds**: `null` \| \[`number`, `number`, `number`, `number`\]

The bounding box of the layer in [west, south, east, north] order

There are cases where the bounds are not available, such as for layers added to the map
from URL sources, as these are not (depending on their type) processed and analyzed by
Felt.

[FeltBoundary](#feltboundary)

##### Inherited from

[`LayerCommon`](#layercommon).[`bounds`](#bounds)

#### geometryType

> **geometryType**: `"Polygon"` \| `"Point"` \| `"Line"`

Identifies the type of geometry in the layer.

#### source

> **source**: [`GeoJsonUrlVectorSource`](#geojsonurlvectorsource) \| [`FeltTiledVectorSource`](#felttiledvectorsource) \| `Omit`\<[`GeoJsonDataVectorSource`](#geojsondatavectorsource), `"data"`\>

The source of the vector layer's data.

***

## UpdateLayerParams

The value you need to pass to [LayersController.updateLayer](#feltcontroller#updatelayer)

### Extends

- `Omit`\<`zInfer`\<*typeof* `UpdateLayerSchema`\>, `"style"` \| `"source"`\>

### Properties

#### id

> **id**: `string`

The id of the layer to update.

##### Inherited from

`Omit.id`

#### shownInLegend?

> `optional` **shownInLegend**: `boolean`

Changes whether the layer is shown in the legend.

##### Inherited from

`Omit.shownInLegend`

#### name?

> `optional` **name**: `string`

Changes the name of the layer.

##### Inherited from

`Omit.name`

#### caption?

> `optional` **caption**: `string`

Changes the caption of the layer.

##### Inherited from

`Omit.caption`

#### description?

> `optional` **description**: `string`

Changes the description of the layer.

##### Inherited from

`Omit.description`

#### bounds?

> `optional` **bounds**: \[`number`, `number`, `number`, `number`\]

Changes the bounds of the layer.

##### Inherited from

`Omit.bounds`

#### style?

> `optional` **style**: `object`

The style of the layer.

#### source?

> `optional` **source**: [`GeoJsonUrlVectorSource`](#geojsonurlvectorsource) \| [`GeoJsonDataVectorSource`](#geojsondatavectorsource) \| [`GeoJsonFileVectorSource`](#geojsonfilevectorsource)

Updates the source of the layer.

Only layers that have a GeoJSON source can have their source udpated.

For URL sources, if you pass the same URL again it will cause the data to be
refreshed.

***

## DataOnlyLayer

A data-only layer doesn't have any geometry, but can be used to join with other layers

### Extends

- [`LayerCommon`](#layercommon)

### Properties

#### id

> **id**: `string`

A string identifying the layer

##### Inherited from

[`LayerCommon`](#layercommon).[`id`](#id-1)

#### groupId

> **groupId**: `null` \| `string`

The ID of the layer group that the layer belongs to.

Layers that appear at the root level in Felt will not have a group ID.

##### Inherited from

[`LayerCommon`](#layercommon).[`groupId`](#groupid)

#### name

> **name**: `string`

The name of the layer can be displayed in the Legend, depending
on how the layer's legend is configured in its style.

##### Inherited from

[`LayerCommon`](#layercommon).[`name`](#name)

#### caption

> **caption**: `null` \| `string`

The layer's caption is shown in the legend.

##### Inherited from

[`LayerCommon`](#layercommon).[`caption`](#caption)

#### description

> **description**: `null` \| `string`

The layer description forms part of the layer's metadata. This is visible
to users via the layer info button in the legend.

##### Inherited from

[`LayerCommon`](#layercommon).[`description`](#description)

#### visible

> **visible**: `boolean`

Whether the layer is visible or not.

##### Inherited from

[`LayerCommon`](#layercommon).[`visible`](#visible)

#### shownInLegend

> **shownInLegend**: `boolean`

Whether the layer is shown in the legend or not.

##### Inherited from

[`LayerCommon`](#layercommon).[`shownInLegend`](#showninlegend)

#### style

> **style**: `object`

The FSL style for the layer.

See the [FSL documentation](https://developers.felt.com/felt-style-language) for details
on how to read and write styles.

As the types of the styles are very complex, we return `object` here and advise that you
program defensively while reading the styles.

##### Inherited from

[`LayerCommon`](#layercommon).[`style`](#style-1)

#### status

> **status**: `"processing"` \| `"completed"` \| `"failed"` \| `"incomplete"`

The current processing status of the layer.

##### Inherited from

[`LayerCommon`](#layercommon).[`status`](#status)

#### geometryType

> **geometryType**: `null`

Indicates that this layer has no geometry.

#### bounds

> **bounds**: `null`

This is always null for data-only layers.

##### Overrides

[`LayerCommon`](#layercommon).[`bounds`](#bounds)

***

## GetLayersConstraint

The constraints to apply when getting layers.

### Extends

- `zInfer`\<*typeof* `GetLayersConstraintSchema`\>

### Properties

#### ids?

> `optional` **ids**: `string`[]

The ids of the layers to get.

##### Inherited from

`zInfer.ids`

***

## LayerChangeCallbackParams

The parameters for the [\`onLayerChange\`](#feltcontroller#onlayerchange) listener.

### Properties

#### layer

> **layer**: `null` \| [`Layer`](#layer-1)

The new data for the layer or null if the layer was removed.

***

## GetRenderedFeaturesConstraint

Constraints for the [\`getRenderedFeatures\`](#feltcontroller#getrenderedfeatures) method. This can include layer constriants, spatial constraints, or both. If no constraints are
provided, all rendered features will be returned.

### Extends

- `zInfer`\<*typeof* `GetRenderedFeaturesConstraintSchema`\>

### Properties

#### areaQuery?

> `optional` **areaQuery**: \{ `coordinates`: [`LatLng`](#latlng); \} \| \{ `boundary`: \[`number`, `number`, `number`, `number`\]; \}

The area to query for rendered features. This can be specific coordinates or a [FeltBoundary](#feltboundary). If omitted, the entire viewport will be queried.

##### Overrides

`zInfer.areaQuery`

#### layerIds?

> `optional` **layerIds**: `string`[]

The ids of the layers to get rendered features for.

##### Inherited from

`zInfer.layerIds`

***

## CreateLayersFromGeoJsonParams

The parameters for the [LayersController.createLayersFromGeoJson](#feltcontroller#createlayersfromgeojson) method.

### Extends

- `Omit`\<`zInfer`\<*typeof* `CreateLayersFromGeoJsonSchema`\>, `"source"` \| `"geometryStyles"`\>

### Properties

#### name

> **name**: `string`

The name of the layer to create.

##### Inherited from

`Omit.name`

#### source

> **source**: [`GeoJsonUrlVectorSource`](#geojsonurlvectorsource) \| [`GeoJsonDataVectorSource`](#geojsondatavectorsource) \| [`GeoJsonFileVectorSource`](#geojsonfilevectorsource)

The source of the GeoJSON data.

#### bounds?

> `optional` **bounds**: \[`number`, `number`, `number`, `number`\]

Sets the bounds of the layer.

##### Inherited from

`Omit.bounds`

#### caption?

> `optional` **caption**: `string`

Sets the caption of the layer.

##### Inherited from

`Omit.caption`

#### description?

> `optional` **description**: `string`

Sets the description of the layer.

##### Inherited from

`Omit.description`

#### geometryStyles?

> `optional` **geometryStyles**: \{ `Point?`: `object`; `Line?`: `object`; `Polygon?`: `object`; \}

The styles to apply to each geometry on the layer.

Each style should be a valid FSL style, as described in [Layer.style](#style-1).

These are optional, and if missing will use a default style determined by
Felt, which you can consider to be undefined behaviour.

| Name | Type |
| ------ | ------ |
| `Point?` | `object` |
| `Line?` | `object` |
| `Polygon?` | `object` |

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

***

## LayerProcessingStatus

> **LayerProcessingStatus** = `"processing"` \| `"completed"` \| `"failed"` \| `"incomplete"`

This describes the processing status of a layer.

The various values are:
- `processing`: The layer has been uploaded or updated and is still processing.
- `completed`: The layer has been processed and can be viewed on the map.
- `failed`: The layer failed to process and cannot be viewed on the map.
- `incomplete`: The layer has not been processed.

***

## Layer

> **Layer** = [`RasterLayer`](#rasterlayer) \| [`VectorLayer`](#vectorlayer) \| [`DataOnlyLayer`](#dataonlylayer)

***

## LegendItem

A legend item, which often represents a sub-class of features in a
layer in the case of categorical or classed layers.

### Extends

- [`LegendItemIdentifier`](#legenditemidentifier)

### Properties

#### title

> **title**: `string` \| `string`[]

The title of the legend item.

#### titleDependsOnZoom

> **titleDependsOnZoom**: `boolean`

Whether the title depends on the zoom level or not. If it does, you
need to call [\`getLegendItem\`](#feltcontroller#getlegenditem) when the zoom level changes.

Note that as the zoom level changes, the [\`onLegendItemChange\`](#feltcontroller#onlegenditemchange) handler
will not be called, so you need to call [\`getLegendItem\`](#feltcontroller#getlegenditem) yourself.

#### visible

> **visible**: `boolean`

Whether the legend item is visible or not.

#### id

> **id**: `string`

The id of the legend item.

##### Inherited from

[`LegendItemIdentifier`](#legenditemidentifier).[`id`](#id-8)

#### layerId

> **layerId**: `string`

The id of the layer the legend item belongs to.

##### Inherited from

[`LegendItemIdentifier`](#legenditemidentifier).[`layerId`](#layerid-6)

***

## LegendItemIdentifier

The identifier for a legend item. It is a compound key of the layer to
which the legend item belongs and the legend item's own id.

### Extends

- `zInfer`\<*typeof* `LegendItemIdentifierSchema`\>

### Extended by

- [`LegendItem`](#legenditem)

### Properties

#### id

> **id**: `string`

The id of the legend item.

##### Inherited from

`zInfer.id`

#### layerId

> **layerId**: `string`

The id of the layer the legend item belongs to.

##### Inherited from

`zInfer.layerId`

***

## LegendItemsConstraint

Constraints for legend items. If nothing is passed, all legend items will be returned.

### Extends

- `zInfer`\<*typeof* `LegendItemsConstraintSchema`\>

### Properties

#### ids?

> `optional` **ids**: \{ `id`: `string`; `layerId`: `string`; \}[]

Array of legend item identifiers to constrain by.

| Name | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The id of the legend item. |
| `layerId` | `string` | The id of the layer the legend item belongs to. |

##### Inherited from

`zInfer.ids`

#### layerIds?

> `optional` **layerIds**: `string`[]

Array of layer ids to constrain legend items by.

##### Inherited from

`zInfer.layerIds`

***

## LegendItemChangeCallbackParams

The parameters for the [\`onLegendItemChange\`](#feltcontroller#onlegenditemchange) listener.

### Properties

#### legendItem

> **legendItem**: `null` \| [`LegendItem`](#legenditem)

The new data for the legend item or null if the legend item was removed.

***

## AggregationConfig

Defines how to aggregate a value across features in a layer.

### Extends

- `zInfer`\<*typeof* `AggregationConfigSchema`\>

### Properties

#### attribute

> **attribute**: `string`

The attribute to use for the aggregation. This must be a numeric attribute.

##### Inherited from

`zInfer.attribute`

#### method

> **method**: `"avg"` \| `"max"` \| `"min"` \| `"sum"` \| `"median"`

The method to use for the aggregation.

##### Overrides

`zInfer.method`

***

## MultiAggregationConfig\<T\>

Defines how to aggregate a value across features in a layer with multiple aggregations
returned at once.

### Extends

- `zInfer`\<*typeof* `MutliAggregationConfigSchema`\>

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`AggregationMethod`](#aggregationmethod) \| `"count"` |

### Properties

#### methods

> **methods**: `T`[]

The operations to use on the values from the features in the layer

##### Overrides

`zInfer.methods`

#### attribute?

> `optional` **attribute**: `string`

The attribute to use for the aggregation when aggregations other than "count" are used.

This can be omitted if the only aggregation is "count", but must be a numeric attribute
otherwise.

##### Overrides

`zInfer.attribute`

***

## ValueConfiguration

Configuration for filtering and aggregating values across features.

This can be used to restrict the features considered for aggregation via the `boundary`
and `filters` properties.

It can also be used to specify how to aggregate the values via the `aggregation` property.

### Extends

- `zInfer`\<*typeof* `ValueConfigurationSchema`\>

### Properties

#### boundary?

> `optional` **boundary**: [`GeometryFilter`](#geometryfilter)

The spatial boundary for what to count or aggregate.

##### Overrides

`zInfer.boundary`

#### filters?

> `optional` **filters**: [`Filters`](#filters-4)

Attribute filters to determine what gets counted or aggregated.

##### Overrides

`zInfer.filters`

#### aggregation?

> `optional` **aggregation**: [`AggregationConfig`](#aggregationconfig)

Specifies how to aggregate values within each category or bin. When omitted,
features are counted. When specified, the chosen calculation (avg, sum, etc.)
is performed on the specified attribute.

For example, instead of counting buildings in each category, you might want
to sum their square footage or average their assessed values.

##### Overrides

`zInfer.aggregation`

***

## GetLayerCategoriesParams

The parameters for getting categories from a layer, passed to
the [LayersController.getCategoryData](#feltcontroller#getcategorydata) method.

### Extends

- `zInfer`\<*typeof* `GetLayerCategoriesParamsSchema`\>

### Properties

#### layerId

> **layerId**: `string`

The ID of the layer to get categories from.

##### Inherited from

`zInfer.layerId`

#### attribute

> **attribute**: `string`

The attribute to use for categorization.

##### Inherited from

`zInfer.attribute`

#### limit?

> `optional` **limit**: `number`

The maximum number of categories to return.

##### Inherited from

`zInfer.limit`

#### filters?

> `optional` **filters**: [`Filters`](#filters-4)

Attribute filters for the features to include when calculating the categories.

##### Overrides

`zInfer.filters`

#### boundary?

> `optional` **boundary**: [`GeometryFilter`](#geometryfilter)

The spatial boundary for the features to include when calculating the categories.

##### Overrides

`zInfer.boundary`

#### values?

> `optional` **values**: [`ValueConfiguration`](#valueconfiguration)

Configuration for filtering and aggregating values while preserving the full set of
categories in the results.

This is particularly useful when you want to compare different subsets of data while
maintaining consistent categories. For example:

- Show all building types in a city, but only count recent buildings in each type
- Keep all neighborhood categories but only sum up residential square footage

Unlike top-level filters which affect both what categories appear AND their values,
filters in this configuration only affect the values while keeping all possible
categories in the results.

##### Overrides

`zInfer.values`

***

## GetLayerCategoriesGroup

A single category from the response from the [LayersController.getCategoryData](#feltcontroller#getcategorydata) method.

### Extends

- `zInfer`\<*typeof* `GetLayerCategoriesGroupSchema`\>

### Properties

#### key

> **key**: `string` \| `number` \| `boolean`

The category for which the value was calculated.

##### Inherited from

`zInfer.key`

#### value

> **value**: `null` \| `number`

The value calculated for the category, whether a count, sum, average, etc.

`null` is returned if there are no features in the category as opposed to zero,
so as not to confuse with a real zero value from some aggregation.

##### Inherited from

`zInfer.value`

***

## GetLayerHistogramParams

The params used to request a histogram of values from a layer, passed to
the [LayersController.getHistogramData](#feltcontroller#gethistogramdata) method.

### Extends

- `zInfer`\<*typeof* `GetLayerHistogramParamsSchema`\>

### Properties

#### layerId

> **layerId**: `string`

##### Inherited from

`zInfer.layerId`

#### attribute

> **attribute**: `string`

##### Inherited from

`zInfer.attribute`

#### steps

> **steps**: `number`[] \| \{ `type`: `"equal-intervals"`; `count`: `number`; \} \| \{ `type`: `"time-interval"`; `interval`: `"hour"` \| `"day"` \| `"week"` \| `"month"` \| `"year"`; \}

##### Inherited from

`zInfer.steps`

#### values?

> `optional` **values**: \{ `boundary?`: \[`number`, `number`\][] \| \[`number`, `number`, `number`, `number`\] \| \{ `type`: `"Polygon"`; `coordinates`: \[`number`, `number`\][][]; \} \| \{ `type`: `"MultiPolygon"`; `coordinates`: \[`number`, `number`\][][][]; \}; `filters?`: `null` \| `boolean` \| \[`null` \| `string`, `"in"` \| `"ni"`, `null` \| (`null` \| `string` \| `number` \| `boolean`)[]\] \| \[`null` \| `string`, `"lt"` \| `"gt"` \| `"le"` \| `"ge"` \| `"eq"` \| `"ne"` \| `"cn"` \| `"nc"` \| `"is"` \| `"isnt"`, `null` \| `string` \| `number` \| `boolean`\] \| [`FilterTernary`](#filterternary); `aggregation?`: \{ `method`: `"avg"` \| `"max"` \| `"min"` \| `"sum"` \| `"median"`; `attribute`: `string`; \}; \}

Configuration for filtering and aggregating values while preserving the full set of
bin ranges in the results.

This is particularly useful when you want to compare different subsets of data while
maintaining consistent ranges. For example:

- Use the same height ranges for comparing old vs new buildings

Unlike top-level filters which affect both what ranges appear AND their values,
filters in this configuration only affect the values while keeping all possible
ranges in the results.

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `boundary?` | \[`number`, `number`\][] \| \[`number`, `number`, `number`, `number`\] \| \{ `type`: `"Polygon"`; `coordinates`: \[`number`, `number`\][][]; \} \| \{ `type`: `"MultiPolygon"`; `coordinates`: \[`number`, `number`\][][][]; \} | - | - |
| `filters?` | `null` \| `boolean` \| \[`null` \| `string`, `"in"` \| `"ni"`, `null` \| (`null` \| `string` \| `number` \| `boolean`)[]\] \| \[`null` \| `string`, `"lt"` \| `"gt"` \| `"le"` \| `"ge"` \| `"eq"` \| `"ne"` \| `"cn"` \| `"nc"` \| `"is"` \| `"isnt"`, `null` \| `string` \| `number` \| `boolean`\] \| [`FilterTernary`](#filterternary) | - | - |
| `aggregation?` | \{ `method`: `"avg"` \| `"max"` \| `"min"` \| `"sum"` \| `"median"`; `attribute`: `string`; \} | - | - |
| `aggregation.method` | `"avg"` \| `"max"` \| `"min"` \| `"sum"` \| `"median"` | `AggregateMethodSchema` | The operation to use on the values from the features in the layer |
| `aggregation.attribute` | `string` | - | The attribute to use for the aggregation. This must be a numeric attribute. |

##### Inherited from

`zInfer.values`

#### filters?

> `optional` **filters**: [`Filters`](#filters-4)

Attribute filters for the features to include when calculating the histogram bins.

##### Overrides

`zInfer.filters`

#### boundary?

> `optional` **boundary**: [`GeometryFilter`](#geometryfilter)

The spatial boundary for the features to include when calculating the histogram bins.

##### Overrides

`zInfer.boundary`

***

## GetLayerHistogramBin

One bin from the response from the [LayersController.getHistogramData](#feltcontroller#gethistogramdata) method.

### Extends

- `zInfer`\<*typeof* `GetLayerHistogramBinSchema`\>

### Properties

#### min

> **min**: `number`

The left edge of the bin.

##### Inherited from

`zInfer.min`

#### max

> **max**: `number`

The right edge of the bin.

##### Inherited from

`zInfer.max`

#### value

> **value**: `number`

The number of features in the bin.

##### Inherited from

`zInfer.value`

***

## GetLayerCalculationParams\<T\>

The parameters for calculating a single aggregate value for a layer, passed to
the [LayersController.getAggregates](#feltcontroller#getaggregates) method.

### Extends

- `TypeOf`\<*typeof* `GetLayerCalculationParamsSchema`\>

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`AggregationMethod`](#aggregationmethod) \| `"count"` |

### Properties

#### layerId

> **layerId**: `string`

The ID of the layer to calculate an aggregate value for.

##### Inherited from

`z.infer.layerId`

#### aggregation

> **aggregation**: [`MultiAggregationConfig`](#multiaggregationconfig)\<`T`\>

Specifies how to aggregate values within each category or bin. When omitted,
features are counted. When specified, the chosen calculation (avg, sum, etc.)
is performed on the specified attribute.

##### Overrides

`z.infer.aggregation`

#### filters?

> `optional` **filters**: [`Filters`](#filters-4)

Attribute filters for the features to include when calculating the aggregate value.

##### Overrides

`z.infer.filters`

#### boundary?

> `optional` **boundary**: [`GeometryFilter`](#geometryfilter)

The spatial boundary for the features to include when calculating the aggregate value.

##### Overrides

`z.infer.boundary`

***

## AggregationMethod

> **AggregationMethod** = `"avg"` \| `"max"` \| `"min"` \| `"sum"` \| `"median"`

The method to use for the aggregation.


<a name="mainmd"></a>

Use the [Felt](#felt) object to embed a new iframe, or connect to an existing embedded
iframe.

Once you have connected to a Felt map (either by embedding or connecting to an existing
iframe), you can use the [FeltController](#feltcontroller) object to control the map.

To see what you can do with the map, see the documentation for the [FeltController](#feltcontroller)
interface and its constituent controllers.

## Example

```typescript
// embed the map
const map = await Felt.embed(container, "felt-map-abc-123");

// now the map is loaded and connected, you can use the FeltController interface
// to control the map. For instance, to get information about the layers
const layers = await map.getLayers();

// Or to set the viewport to a specific location and zoom level
await map.setViewport({
  center: { latitude: 37.8113, longitude: -122.2682 },
  zoom: 10,
});
```

## FeltController

This is the main interface for interacting with a Felt map.

This interface is composed of the various controllers, each having a
different area of responsibility.

All the methods are listed here, but each controller is documented on its
own to make it easier to find related methods and events.

### Extends

- [`ViewportController`](#viewportcontroller).[`UiController`](#uicontroller).`LayersController`.`ElementsController`.`SelectionController`.`InteractionsController`.[`ToolsController`](#toolscontroller).`MiscController`

### Methods

#### getElement()

> **getElement**(`id`: `string`): `Promise`\<`null` \| [`Element`](#element-1)\>

Get a single element from the map by its id.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The id of the element you want to get. |

##### Returns

`Promise`\<`null` \| [`Element`](#element-1)\>

The requested element.

##### Example

```typescript
const element = await felt.getElement("element-1");
```

##### Inherited from

`ElementsController.getElement`

#### getElementGeometry()

> **getElementGeometry**(`id`: `string`): `Promise`\<`null` \| [`GeoJsonGeometry`](#geojsongeometry)\>

Get the geometry of an element in GeoJSON geometry format.

For most element types, the geometry returned is based on the `coordinates`
property of the element, with some differences:

- For Circle elements, the geometry is a Polygon drawn from the `center` and
`radius` properties.

- Path elements become MultiLineString geometries.

- Marker elements return a MultiLineString of the path traced by the user
as they drew the marker. Note that this is not the polygon formed by filled-in
"pen" stroke, which doesn't exactly follow the path traced by the user as it
is smoothed and interpolated to create a continuous line.

- Text, Note and Image elements do not return geometry, so will return `null`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The id of the element you want to get the geometry of. |

##### Returns

`Promise`\<`null` \| [`GeoJsonGeometry`](#geojsongeometry)\>

##### Example

```typescript
const geometry = await felt.getElementGeometry("element-1");
console.log(geometry?.type, geometry?.coordinates);
```

##### Inherited from

`ElementsController.getElementGeometry`

#### getElements()

> **getElements**(`constraint?`: [`GetElementsConstraint`](#getelementsconstraint)): `Promise`\<(`null` \| [`Element`](#element-1))[]\>

Gets elements from the map, according to the constraints supplied. If no
constraints are supplied, all elements will be returned.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `constraint?` | [`GetElementsConstraint`](#getelementsconstraint) | The constraints to apply to the elements returned from the map. |

##### Returns

`Promise`\<(`null` \| [`Element`](#element-1))[]\>

All elements on the map.

##### Remarks

The elements in the map, ordered by the order specified in Felt. This is not
necessarily the order that they are drawn in, as Felt draws points above
lines and lines above polygons, for instance.

##### Example

```typescript
const elements = await felt.getElements();
```

##### Inherited from

`ElementsController.getElements`

#### getElementGroup()

> **getElementGroup**(`id`: `string`): `Promise`\<`null` \| [`ElementGroup`](#elementgroup)\>

Get an element group from the map by its id.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

##### Returns

`Promise`\<`null` \| [`ElementGroup`](#elementgroup)\>

The requested element group.

##### Example

```typescript
const elementGroup = await felt.getElementGroup("element-group-1");
```

##### Inherited from

`ElementsController.getElementGroup`

#### getElementGroups()

> **getElementGroups**(`constraint?`: [`GetElementGroupsConstraint`](#getelementgroupsconstraint)): `Promise`\<(`null` \| [`ElementGroup`](#elementgroup))[]\>

Gets element groups from the map, according to the filters supplied. If no
constraints are supplied, all element groups will be returned in rendering order.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `constraint?` | [`GetElementGroupsConstraint`](#getelementgroupsconstraint) | The constraints to apply to the element groups returned from the map. |

##### Returns

`Promise`\<(`null` \| [`ElementGroup`](#elementgroup))[]\>

The requested element groups.

##### Example

```typescript
const elementGroups = await felt.getElementGroups({ ids: ["element-group-1", "element-group-2"] });
```

##### Inherited from

`ElementsController.getElementGroups`

#### setElementGroupVisibility()

> **setElementGroupVisibility**(`visibility`: [`SetVisibilityRequest`](#setvisibilityrequest)): `Promise`\<`void`\>

Hide or show element groups with the given ids.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `visibility` | [`SetVisibilityRequest`](#setvisibilityrequest) |

##### Returns

`Promise`\<`void`\>

##### Example

```typescript
felt.setElementGroupVisibility({ show: ["element-group-1", "element-group-2"], hide: ["element-group-3"] });
```

##### Inherited from

`ElementsController.setElementGroupVisibility`

#### createElement()

> **createElement**(`element`: [`ElementCreate`](#elementcreate)): `Promise`\<[`Element`](#element-1)\>

Create a new element on the map.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `element` | [`ElementCreate`](#elementcreate) |

##### Returns

`Promise`\<[`Element`](#element-1)\>

##### Example

```typescript
const element = await felt.createElement({ type: "Place", coordinates: [10, 10] });
```

##### Inherited from

`ElementsController.createElement`

#### updateElement()

> **updateElement**(`element`: [`ElementUpdate`](#elementupdate)): `Promise`\<[`Element`](#element-1)\>

Update an element on the map.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `element` | [`ElementUpdate`](#elementupdate) |

##### Returns

`Promise`\<[`Element`](#element-1)\>

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

##### Inherited from

`ElementsController.updateElement`

#### deleteElement()

> **deleteElement**(`id`: `string`): `Promise`\<`void`\>

Delete an element from the map.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

##### Returns

`Promise`\<`void`\>

##### Example

```typescript
await felt.deleteElement("element-1");
```

##### Inherited from

`ElementsController.deleteElement`

#### getLayer()

> **getLayer**(`id`: `string`): `Promise`\<`null` \| [`Layer`](#layer-1)\>

Get a single layer from the map by its id.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The id of the layer you want to get. |

##### Returns

`Promise`\<`null` \| [`Layer`](#layer-1)\>

The requested layer.

##### Example

```typescript
const layer = await felt.getLayer("layer-1");
```

##### Inherited from

`LayersController.getLayer`

#### getLayers()

> **getLayers**(`constraint?`: [`GetLayersConstraint`](#getlayersconstraint)): `Promise`\<(`null` \| [`Layer`](#layer-1))[]\>

Gets layers from the map, according to the constraints supplied. If no
constraints are supplied, all layers will be returned.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `constraint?` | [`GetLayersConstraint`](#getlayersconstraint) | The constraints to apply to the layers returned from the map. |

##### Returns

`Promise`\<(`null` \| [`Layer`](#layer-1))[]\>

All layers on the map.

##### Remarks

The layers in the map, ordered by the order specified in Felt. This is not
necessarily the order that they are drawn in, as Felt draws points above
lines and lines above polygons, for instance.

##### Example

```typescript
const layers = await felt.getLayers();
```

##### Inherited from

`LayersController.getLayers`

#### setLayerVisibility()

> **setLayerVisibility**(`visibility`: [`SetVisibilityRequest`](#setvisibilityrequest)): `Promise`\<`void`\>

Hide or show layers with the given ids.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `visibility` | [`SetVisibilityRequest`](#setvisibilityrequest) |

##### Returns

`Promise`\<`void`\>

##### Example

```typescript
felt.setLayerVisibility({ show: ["layer-1", "layer-2"], hide: ["layer-3"] });
```

##### Inherited from

`LayersController.setLayerVisibility`

#### setLayerStyle()

> **setLayerStyle**(`params`: \{ `id`: `string`; `style`: `object`; \}): `Promise`\<`void`\>

Set the style for a layer using FSL, the Felt Style Language.

Changes are only for this session, and not persisted. This is useful to make
temporary changes to a layer's style, such as to highlight a particular layer
or feature.

See the [FSL documentation](https://developers.felt.com/felt-style-language) for details
on how to read and write styles.

If the style you set is invalid, you will receive an error explaining the problem
in the rejected promise value.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `id`: `string`; `style`: `object`; \} | - |
| `params.id` | `string` | The id of the layer to set the style for. |
| `params.style` | `object` | The style to set for the layer. |

##### Returns

`Promise`\<`void`\>

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

##### Inherited from

`LayersController.setLayerStyle`

#### setLayerLegendVisibility()

> **setLayerLegendVisibility**(`params`: [`SetVisibilityRequest`](#setvisibilityrequest)): `Promise`\<`void`\>

Hide or show layers with the given ids from the legend.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`SetVisibilityRequest`](#setvisibilityrequest) |

##### Returns

`Promise`\<`void`\>

##### Example

```typescript
felt.setLayerLegendVisibility({ show: ["layer-1", "layer-2"], hide: ["layer-3"] });
```

##### Inherited from

`LayersController.setLayerLegendVisibility`

#### createLayersFromGeoJson()

> **createLayersFromGeoJson**(`params`: [`CreateLayersFromGeoJsonParams`](#createlayersfromgeojsonparams)): `Promise`\<`null` \| \{ `layerGroup`: [`LayerGroup`](#layergroup); `layers`: [`Layer`](#layer-1)[]; \}\>

Adds layers to the map from file or URL sources.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`CreateLayersFromGeoJsonParams`](#createlayersfromgeojsonparams) |

##### Returns

`Promise`\<`null` \| \{ `layerGroup`: [`LayerGroup`](#layergroup); `layers`: [`Layer`](#layer-1)[]; \}\>

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

##### Inherited from

`LayersController.createLayersFromGeoJson`

#### updateLayer()

> **updateLayer**(`params`: [`UpdateLayerParams`](#updatelayerparams)): `Promise`\<[`Layer`](#layer-1)\>

Update a layer by passing a subset of the layer's properties.

Note that not all properties can be updated, so check the [UpdateLayerParams](#updatelayerparams)
type to see which properties can be updated.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`UpdateLayerParams`](#updatelayerparams) |

##### Returns

`Promise`\<[`Layer`](#layer-1)\>

##### Example

```typescript
await felt.updateLayer({
  id: "layer-1",
  name: "My Layer",
  caption: "A description of the layer",
});
```

##### Inherited from

`LayersController.updateLayer`

#### deleteLayer()

> **deleteLayer**(`id`: `string`): `Promise`\<`void`\>

Delete a layer from the map by its id.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

##### Returns

`Promise`\<`void`\>

##### Remarks

This only works for layers created via the SDK `createLayersFromGeoJson` method, not layers added via the Felt UI.

##### Example

```typescript
await felt.deleteLayer("layer-1");
```

##### Inherited from

`LayersController.deleteLayer`

#### getLayerGroup()

> **getLayerGroup**(`id`: `string`): `Promise`\<`null` \| [`LayerGroup`](#layergroup)\>

Get a layer group from the map by its id.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

##### Returns

`Promise`\<`null` \| [`LayerGroup`](#layergroup)\>

The requested layer group.

##### Example

```typescript
const layerGroup = await felt.getLayerGroup("layer-group-1");
```

##### Inherited from

`LayersController.getLayerGroup`

#### getLayerGroups()

> **getLayerGroups**(`constraint?`: [`GetLayerGroupsConstraint`](#getlayergroupsconstraint)): `Promise`\<(`null` \| [`LayerGroup`](#layergroup))[]\>

Gets layer groups from the map, according to the constraints supplied. If no
constraints are supplied, all layer groups will be returned in rendering order.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `constraint?` | [`GetLayerGroupsConstraint`](#getlayergroupsconstraint) | The constraints to apply to the layer groups returned from the map. |

##### Returns

`Promise`\<(`null` \| [`LayerGroup`](#layergroup))[]\>

The requested layer groups.

##### Example

```typescript
const layerGroups = await felt.getLayerGroups({ ids: ["layer-group-1", "layer-group-2"] });
```

##### Inherited from

`LayersController.getLayerGroups`

#### setLayerGroupVisibility()

> **setLayerGroupVisibility**(`visibility`: [`SetVisibilityRequest`](#setvisibilityrequest)): `Promise`\<`void`\>

Hide or show layer groups with the given ids.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `visibility` | [`SetVisibilityRequest`](#setvisibilityrequest) |

##### Returns

`Promise`\<`void`\>

##### Example

```typescript
felt.setLayerGroupVisibility({ show: ["layer-group-1", "layer-group-2"], hide: ["layer-group-3"] });
```

##### Inherited from

`LayersController.setLayerGroupVisibility`

#### setLayerGroupLegendVisibility()

> **setLayerGroupLegendVisibility**(`params`: [`SetVisibilityRequest`](#setvisibilityrequest)): `Promise`\<`void`\>

Hide or show layer groups with the given ids from the legend.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`SetVisibilityRequest`](#setvisibilityrequest) |

##### Returns

`Promise`\<`void`\>

##### Example

```typescript
felt.setLayerGroupLegendVisibility({ show: ["layer-1", "layer-2"], hide: ["layer-3"] });
```

##### Inherited from

`LayersController.setLayerGroupLegendVisibility`

#### getLegendItem()

> **getLegendItem**(`id`: [`LegendItemIdentifier`](#legenditemidentifier)): `Promise`\<`null` \| [`LegendItem`](#legenditem)\>

Allows you to get the state of a single legend item.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | [`LegendItemIdentifier`](#legenditemidentifier) |

##### Returns

`Promise`\<`null` \| [`LegendItem`](#legenditem)\>

##### Example

```typescript
const legendItem = await felt.getLegendItem({
  id: "legend-item-1",
  layerId: "layer-1",
})
```

##### Inherited from

`LayersController.getLegendItem`

#### getLegendItems()

> **getLegendItems**(`constraint?`: [`LegendItemsConstraint`](#legenditemsconstraint)): `Promise`\<(`null` \| [`LegendItem`](#legenditem))[]\>

Allows you to obtain the state of several legend items, by passing in
constraints describing which legend items you want.

If you do not pass any constraints, you will receive all legend items.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `constraint?` | [`LegendItemsConstraint`](#legenditemsconstraint) |

##### Returns

`Promise`\<(`null` \| [`LegendItem`](#legenditem))[]\>

##### Example

```typescript
const legendItems = await felt.getLegendItems({layerId: "layer-1"});
```

##### Inherited from

`LayersController.getLegendItems`

#### setLegendItemVisibility()

> **setLegendItemVisibility**(`visibility`: \{ `show?`: [`LegendItemIdentifier`](#legenditemidentifier)[]; `hide?`: [`LegendItemIdentifier`](#legenditemidentifier)[]; \}): `Promise`\<`void`\>

Hide or show legend items with the given identifiers.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `visibility` | \{ `show?`: [`LegendItemIdentifier`](#legenditemidentifier)[]; `hide?`: [`LegendItemIdentifier`](#legenditemidentifier)[]; \} |
| `visibility.show?` | [`LegendItemIdentifier`](#legenditemidentifier)[] |
| `visibility.hide?` | [`LegendItemIdentifier`](#legenditemidentifier)[] |

##### Returns

`Promise`\<`void`\>

##### Example

```typescript
felt.setLegendItemVisibility({
  show: [{layerId: "layer-group-1", id: "item-1-0"}],
  hide: [{layerId: "layer-group-2", id: "item-2-0"}],
})
```

##### Inherited from

`LayersController.setLegendItemVisibility`

#### getLayerFilters()

> **getLayerFilters**(`layerId`: `string`): `Promise`\<`null` \| [`LayerFilters`](#layerfilters)\>

Get the filters for a layer.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `layerId` | `string` |

##### Returns

`Promise`\<`null` \| [`LayerFilters`](#layerfilters)\>

##### Remarks

The return type gives you the filters split up into the various sources
that make up the overall filters for a layer.

##### Example

```typescript
const filters = await felt.getLayerFilters("layer-1");
console.log(filters.combined, filters.style, filters.ephemeral, filters.components);
```

##### Inherited from

`LayersController.getLayerFilters`

#### setLayerFilters()

> **setLayerFilters**(`params`: \{ `layerId`: `string`; `filters`: [`Filters`](#filters-4); `note?`: `string`; \}): `Promise`\<`void`\>

Sets the **ephemeral** filters for a layer.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `layerId`: `string`; `filters`: [`Filters`](#filters-4); `note?`: `string`; \} | - |
| `params.layerId` | `string` | The layer that you want to set the filters for. |
| `params.filters` | [`Filters`](#filters-4) | The filters to set for the layer. This will replace any ephemeral filters that are currently set for the layer. |
| `params.note?` | `string` | A note to display on the layer legend when this filter is applied. When the note is shown, a reset button will also be shown, allowing the user to clear the filter. |

##### Returns

`Promise`\<`void`\>

##### Example

```typescript
await felt.setLayerFilters({
  layerId: "layer-1",
  filters: ["AREA", "gt", 30_000],
});
```

##### Inherited from

`LayersController.setLayerFilters`

#### getLayerBoundaries()

> **getLayerBoundaries**(`layerId`: `string`): `Promise`\<`null` \| [`LayerBoundaries`](#layerboundaries)\>

Get the spatial boundaries that are filtering a layer.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `layerId` | `string` |

##### Returns

`Promise`\<`null` \| [`LayerBoundaries`](#layerboundaries)\>

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

##### Inherited from

`LayersController.getLayerBoundaries`

#### setLayerBoundary()

> **setLayerBoundary**(`params`: \{ `layerIds`: `string`[]; `boundary`: `null` \| [`GeometryFilter`](#geometryfilter); \}): `Promise`\<`void`\>

Set the [\`ephemeral\`](#layerboundaries#ephemeral-1) boundary for one or more layers.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `layerIds`: `string`[]; `boundary`: `null` \| [`GeometryFilter`](#geometryfilter); \} | - |
| `params.layerIds` | `string`[] | The ids of the layers to set the boundary for. |
| `params.boundary` | `null` \| [`GeometryFilter`](#geometryfilter) | The boundary to set for the layer. Passing `null` clears the ephemeral boundary for the layer. |

##### Returns

`Promise`\<`void`\>

##### Example

```typescript
await felt.setLayerBoundary({
  layerIds: ["layer-1", "layer-2"],
  boundary: { type: "MultiPolygon", coordinates: [[[100, 0], [101, 0], [101, 1], [100, 1], [100, 0]]] }
});
```

##### Inherited from

`LayersController.setLayerBoundary`

#### getRenderedFeatures()

> **getRenderedFeatures**(`params?`: [`GetRenderedFeaturesConstraint`](#getrenderedfeaturesconstraint)): `Promise`\<[`LayerFeature`](#layerfeature)[]\>

Get the features that are currently **rendered** on the map in the viewport.

Note that this is explicitly about the features that are rendered, which isn't
necessarily a complete list of all the features in the viewport. This is because
of the way features are tiled: at low zoom levels or high feature densities, many
features are omitted from what is rendered on the screen.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | [`GetRenderedFeaturesConstraint`](#getrenderedfeaturesconstraint) | The constraints to apply to the features returned from the map. |

##### Returns

`Promise`\<[`LayerFeature`](#layerfeature)[]\>

##### Example

```typescript
const features = await felt.getRenderedFeatures();
```

##### Inherited from

`LayersController.getRenderedFeatures`

#### getFeature()

> **getFeature**(`params`: \{ `id`: `string` \| `number`; `layerId`: `string`; \}): `Promise`\<`null` \| [`LayerFeature`](#layerfeature)\>

Get a feature from the map by its ID and layer ID.

The response is a [LayerFeature](#layerfeature) object, which does not include the
geometry of the feature.

You may want to use this when you don't need the geometry of a feature,
but you know the ID of the feature you need.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `id`: `string` \| `number`; `layerId`: `string`; \} |
| `params.id` | `string` \| `number` |
| `params.layerId` | `string` |

##### Returns

`Promise`\<`null` \| [`LayerFeature`](#layerfeature)\>

##### Example

```typescript
const feature = await felt.getFeature({ layerId: "layer-1", id: 123 });
```

##### Inherited from

`LayersController.getFeature`

#### getFeatures()

> **getFeatures**(`params`: \{ `layerId`: `string`; `filters?`: [`Filters`](#filters-4); `sorting?`: [`SortConfig`](#sortconfig); `boundary?`: [`GeometryFilter`](#geometryfilter); `search?`: `string`; `pagination?`: `null` \| `string`; \}): `Promise`\<\{ `features`: [`LayerFeature`](#layerfeature)[]; `count`: `number`; `previousPage`: `null` \| `string`; `nextPage`: `null` \| `string`; \}\>

Get a list of layer features.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `layerId`: `string`; `filters?`: [`Filters`](#filters-4); `sorting?`: [`SortConfig`](#sortconfig); `boundary?`: [`GeometryFilter`](#geometryfilter); `search?`: `string`; `pagination?`: `null` \| `string`; \} | - |
| `params.layerId` | `string` | The ID of the layer to get features from. |
| `params.filters?` | [`Filters`](#filters-4) | Filters to be applied. These filters will merge with layer's own filters. |
| `params.sorting?` | [`SortConfig`](#sortconfig) | Attribute to sort by. |
| `params.boundary?` | [`GeometryFilter`](#geometryfilter) | The spatial boundary to be applied. |
| `params.search?` | `string` | Search term to search by. Search is case-insensitive and looks for matches across all feature properties. |
| `params.pagination?` | `null` \| `string` | Pagination token. It comes from either the `previousPage` or `nextPage` properties of the previous response. |

##### Returns

`Promise`\<\{ `features`: [`LayerFeature`](#layerfeature)[]; `count`: `number`; `previousPage`: `null` \| `string`; `nextPage`: `null` \| `string`; \}\>

The response is an object which contains:
  - `features`: list of [LayerFeature](#layerfeature) objects, which does not include
the geometry of the feature but it does include its bounding box.
  - `count`: the total number of features that match the query.
  - `previousPage` & `nextPage`: The tokens to pass in the `pagination` param
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

##### Inherited from

`LayersController.getFeatures`

#### getGeoJsonFeature()

> **getGeoJsonFeature**(`params`: \{ `id`: `string` \| `number`; `layerId`: `string`; \}): `Promise`\<`null` \| [`GeoJsonFeature`](#geojsonfeature)\>

Get a feature in GeoJSON format from the map by its ID and layer ID.

The response is a GeoJSON Feature object with the complete geometry of the
feature. Note that for some _very_ large geometries, the response may take a
long time to return, and may return a very large object.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `id`: `string` \| `number`; `layerId`: `string`; \} |
| `params.id` | `string` \| `number` |
| `params.layerId` | `string` |

##### Returns

`Promise`\<`null` \| [`GeoJsonFeature`](#geojsonfeature)\>

##### Example

```typescript
const feature = await felt.getGeoJsonFeature({ layerId: "layer-1", id: 123 });
```

##### Inherited from

`LayersController.getGeoJsonFeature`

#### getCategoryData()

> **getCategoryData**(`params`: [`GetLayerCategoriesParams`](#getlayercategoriesparams)): `Promise`\<[`GetLayerCategoriesGroup`](#getlayercategoriesgroup)[]\>

Gets values from a layer grouped by a given attribute.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`GetLayerCategoriesParams`](#getlayercategoriesparams) |

##### Returns

`Promise`\<[`GetLayerCategoriesGroup`](#getlayercategoriesgroup)[]\>

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

##### Inherited from

`LayersController.getCategoryData`

#### getHistogramData()

> **getHistogramData**(`params`: [`GetLayerHistogramParams`](#getlayerhistogramparams)): `Promise`\<[`GetLayerHistogramBin`](#getlayerhistogrambin)[]\>

Gets a histogram of values from a layer for a given attribute.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`GetLayerHistogramParams`](#getlayerhistogramparams) |

##### Returns

`Promise`\<[`GetLayerHistogramBin`](#getlayerhistogrambin)[]\>

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

##### Inherited from

`LayersController.getHistogramData`

#### getAggregates()

> **getAggregates**\<`T`\>(`params`: [`GetLayerCalculationParams`](#getlayercalculationparams)\<`T`\>): `Promise`\<`Record`\<`T`, `null` \| `number`\>\>

Calculates a single aggregate value for a layer based on the provided configuration.

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `"avg"` \| `"max"` \| `"min"` \| `"sum"` \| `"median"` \| `"count"` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`GetLayerCalculationParams`](#getlayercalculationparams)\<`T`\> |

##### Returns

`Promise`\<`Record`\<`T`, `null` \| `number`\>\>

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
    method: "avg",
    attribute: "assessed_value"
  }
});

// Find the maximum building height for buildings built after 2000
const maxNewBuildingHeight = await felt.getAggregates({
  layerId: "buildings",
  filters: ["year_built", "gte", 2000],
  aggregation: {
    method: "max",
    attribute: "height"
  }
});
```

##### Inherited from

`LayersController.getAggregates`

#### getLayerSchema()

> **getLayerSchema**(`layerId`: `string`): `Promise`\<[`LayerSchema`](#layerschema)\>

Get the schema for a layer.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `layerId` | `string` |

##### Returns

`Promise`\<[`LayerSchema`](#layerschema)\>

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

##### Inherited from

`LayersController.getLayerSchema`

#### getMapDetails()

> **getMapDetails**(): `Promise`\<[`MapDetails`](#mapdetails)\>

Gets the details of the map.

##### Returns

`Promise`\<[`MapDetails`](#mapdetails)\>

##### Example

```typescript
const details = await felt.getMapDetails();
console.log({
  id: details.id,
  title: details.title,
  description: details.description,
});
```

##### Inherited from

`MiscController.getMapDetails`

#### getSelection()

> **getSelection**(): `Promise`\<[`EntityNode`](#entitynode)[]\>

Gets the current selection as a list of entity identifiers.

##### Returns

`Promise`\<[`EntityNode`](#entitynode)[]\>

##### Example

```typescript
const selection = await felt.getSelection();
```

##### Inherited from

`SelectionController.getSelection`

#### selectFeature()

> **selectFeature**(`params`: [`FeatureSelection`](#featureselection)): `Promise`\<`void`\>

Selects a feature on a layer. This will show the feature's popup, modal or
sidebar (if configured) and highlight the feature.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`FeatureSelection`](#featureselection) |

##### Returns

`Promise`\<`void`\>

##### Example

```typescript
felt.selectFeature({
  id: 123,
  layerId: "my-layer",
  showPopup: true,
  fitViewport: { maxZoom: 15 },
});
```

##### Inherited from

`SelectionController.selectFeature`

#### clearSelection()

> **clearSelection**(`params?`: \{ `features?`: `boolean`; `elements?`: `boolean`; \}): `Promise`\<`void`\>

Clears the current selection. This clears the selection of

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | \{ `features?`: `boolean`; `elements?`: `boolean`; \} | The parameters to clear the selection. If this is not provided, both features and elements will be cleared. |
| `params.features?` | `boolean` | Whether to clear the features from the selection. |
| `params.elements?` | `boolean` | Whether to clear the elements from the selection. |

##### Returns

`Promise`\<`void`\>

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

##### Inherited from

`SelectionController.clearSelection`

#### setTool()

> **setTool**(`tool`: `null` \| `"text"` \| `"note"` \| `"pin"` \| `"line"` \| `"route"` \| `"polygon"` \| `"circle"` \| `"marker"` \| `"highlighter"` \| `"link"`): `void`

Sets the tool to use for drawing elements on the map.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tool` | `null` \| `"text"` \| `"note"` \| `"pin"` \| `"line"` \| `"route"` \| `"polygon"` \| `"circle"` \| `"marker"` \| `"highlighter"` \| `"link"` | The tool to set. |

##### Returns

`void`

##### Example

```typescript
// Set the tool to "marker"
await felt.setTool("marker");

// put down the tool
await felt.setTool(null);
```

##### Inherited from

[`ToolsController`](#toolscontroller).[`setTool`](#toolscontroller#settool)

#### getTool()

> **getTool**(): `Promise`\<`null` \| `"text"` \| `"note"` \| `"pin"` \| `"line"` \| `"route"` \| `"polygon"` \| `"circle"` \| `"marker"` \| `"highlighter"` \| `"link"`\>

Gets the current tool, if any is in use.

##### Returns

`Promise`\<`null` \| `"text"` \| `"note"` \| `"pin"` \| `"line"` \| `"route"` \| `"polygon"` \| `"circle"` \| `"marker"` \| `"highlighter"` \| `"link"`\>

The current tool, or `null` if no tool is in use.

##### Example

```typescript
const tool = await felt.getTool(); // "marker", "polygon", etc.
```

##### Inherited from

[`ToolsController`](#toolscontroller).[`getTool`](#toolscontroller#gettool)

#### onToolChange()

> **onToolChange**(`args`: \{ `handler`: (`tool`: `null` \| `"text"` \| `"note"` \| `"pin"` \| `"line"` \| `"route"` \| `"polygon"` \| `"circle"` \| `"marker"` \| `"highlighter"` \| `"link"`) => `void`; \}): `VoidFunction`

Listens for changes to the current tool.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `args` | \{ `handler`: (`tool`: `null` \| `"text"` \| `"note"` \| `"pin"` \| `"line"` \| `"route"` \| `"polygon"` \| `"circle"` \| `"marker"` \| `"highlighter"` \| `"link"`) => `void`; \} | - |
| `args.handler` | (`tool`: `null` \| `"text"` \| `"note"` \| `"pin"` \| `"line"` \| `"route"` \| `"polygon"` \| `"circle"` \| `"marker"` \| `"highlighter"` \| `"link"`) => `void` | This callback is called with the current tool whenever the tool changes. |

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

##### Inherited from

[`ToolsController`](#toolscontroller).[`onToolChange`](#toolscontroller#ontoolchange)

#### setToolSettings()

> **setToolSettings**(`settings`: [`InputToolSettings`](#inputtoolsettings)): `void`

Sets the settings for the current tool.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `settings` | [`InputToolSettings`](#inputtoolsettings) | The settings to set. |

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

##### Inherited from

[`ToolsController`](#toolscontroller).[`setToolSettings`](#toolscontroller#settoolsettings)

#### getToolSettings()

> **getToolSettings**\<`T`\>(`tool`: `T`): `Promise`\<[`ToolSettingsMap`](#toolsettingsmap)\[`T`\]\>

Gets the settings for the chosen tool

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* keyof [`ToolSettingsMap`](#toolsettingsmap) |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `tool` | `T` |

##### Returns

`Promise`\<[`ToolSettingsMap`](#toolsettingsmap)\[`T`\]\>

The settings for the chosen tool.

##### Example

```typescript
const settings = await felt.getToolSettings("marker");
```

##### Inherited from

[`ToolsController`](#toolscontroller).[`getToolSettings`](#toolscontroller#gettoolsettings)

#### onToolSettingsChange()

> **onToolSettingsChange**(`args`: \{ `handler`: (`settings`: [`ToolSettingsChangeEvent`](#toolsettingschangeevent)) => `void`; \}): `VoidFunction`

Listens for changes to the settings on all tools.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `handler`: (`settings`: [`ToolSettingsChangeEvent`](#toolsettingschangeevent)) => `void`; \} |
| `args.handler` | (`settings`: [`ToolSettingsChangeEvent`](#toolsettingschangeevent)) => `void` |

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

##### Inherited from

[`ToolsController`](#toolscontroller).[`onToolSettingsChange`](#toolscontroller#ontoolsettingschange)

#### updateUiControls()

> **updateUiControls**(`controls`: [`UiControlsOptions`](#uicontrolsoptions)): `void`

Updates the UI controls on the embedded map.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `controls` | [`UiControlsOptions`](#uicontrolsoptions) | The controls to update. |

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

##### Inherited from

[`UiController`](#uicontroller).[`updateUiControls`](#uicontroller#updateuicontrols)

#### setOnMapInteractionsUi()

> **setOnMapInteractionsUi**(`options`: [`OnMapInteractionsOptions`](#onmapinteractionsoptions)): `void`

Control the on-map UI shown when interacting with features and elements.

If you add your own click, selection or hover handlers you may want to disable
various parts of the Felt UI. This method allows you to control the visibility of
various parts of the UI that might otherwise be shown when people click or hover
on things.

This does not affect selection. That means that selectable features and elements
will still be selected when clicked.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`OnMapInteractionsOptions`](#onmapinteractionsoptions) |

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

##### Inherited from

[`UiController`](#uicontroller).[`setOnMapInteractionsUi`](#uicontroller#setonmapinteractionsui)

#### showLayerDataTable()

> **showLayerDataTable**(`params?`: \{ `layerId`: `string`; `sorting?`: [`SortConfig`](#sortconfig); \}): `Promise`\<`void`\>

Shows a data table view for the specified layer, optionally sorted by a given attribute.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `params?` | \{ `layerId`: `string`; `sorting?`: [`SortConfig`](#sortconfig); \} |
| `params.layerId?` | `string` |
| `params.sorting?` | [`SortConfig`](#sortconfig) |

##### Returns

`Promise`\<`void`\>

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

##### Inherited from

[`UiController`](#uicontroller).[`showLayerDataTable`](#uicontroller#showlayerdatatable)

#### hideLayerDataTable()

> **hideLayerDataTable**(): `Promise`\<`void`\>

Hides the data table.

##### Returns

`Promise`\<`void`\>

##### Example

```typescript
await felt.hideLayerDataTable();
```

##### Inherited from

[`UiController`](#uicontroller).[`hideLayerDataTable`](#uicontroller#hidelayerdatatable)

#### getViewport()

> **getViewport**(): `Promise`\<[`ViewportState`](#viewportstate)\>

Gets the current state of the viewport.

##### Returns

`Promise`\<[`ViewportState`](#viewportstate)\>

##### Example

```typescript
// Get current viewport state
const viewport = await felt.getViewport();
console.log({
  center: viewport.center,
  zoom: viewport.zoom,
});
```

##### Inherited from

[`ViewportController`](#viewportcontroller).[`getViewport`](#viewportcontroller#getviewport)

#### setViewport()

> **setViewport**(`viewport`: [`SetViewportCenterZoomParams`](#setviewportcenterzoomparams)): `void`

Moves the map to the specified location.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `viewport` | [`SetViewportCenterZoomParams`](#setviewportcenterzoomparams) |

##### Returns

`void`

##### Example

```typescript
felt.setViewport({
  center: { latitude: 0, longitude: 0 },
  zoom: 10,
});
```

##### Inherited from

[`ViewportController`](#viewportcontroller).[`setViewport`](#viewportcontroller#setviewport)

#### getViewportConstraints()

> **getViewportConstraints**(): `Promise`\<`null` \| [`ViewportConstraints`](#viewportconstraints)\>

Gets the current state of the viewport constraints.

##### Returns

`Promise`\<`null` \| [`ViewportConstraints`](#viewportconstraints)\>

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

##### Inherited from

[`ViewportController`](#viewportcontroller).[`getViewportConstraints`](#viewportcontroller#getviewportconstraints)

#### setViewportConstraints()

> **setViewportConstraints**(`constraints`: `null` \| `Partial`\<[`ViewportConstraints`](#viewportconstraints)\>): `void`

Constrains the map viewport so it stays inside certain bounds and/or certain zoom levels.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `constraints` | `null` \| `Partial`\<[`ViewportConstraints`](#viewportconstraints)\> |

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

##### Inherited from

[`ViewportController`](#viewportcontroller).[`setViewportConstraints`](#viewportcontroller#setviewportconstraints)

#### fitViewportToBounds()

> **fitViewportToBounds**(`bounds`: [`ViewportFitBoundsParams`](#viewportfitboundsparams)): `void`

Fits the map to the specified bounds.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `bounds` | [`ViewportFitBoundsParams`](#viewportfitboundsparams) |

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

##### Inherited from

[`ViewportController`](#viewportcontroller).[`fitViewportToBounds`](#viewportcontroller#fitviewporttobounds)

### Events

#### onElementCreate()

> **onElementCreate**(`args`: \{ `handler`: (`change`: [`ElementChangeCallbackParams`](#elementchangecallbackparams)) => `void`; \}): `VoidFunction`

Adds a listener for when an element is created.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `args` | \{ `handler`: (`change`: [`ElementChangeCallbackParams`](#elementchangecallbackparams)) => `void`; \} | - |
| `args.handler` | (`change`: [`ElementChangeCallbackParams`](#elementchangecallbackparams)) => `void` | The handler that is called when an element is created. This will fire when elements are created programatically, or when the user starts creating an element with a drawing tool. When the user creates an element with a drawing tool, it can begin in an invalid state, such as if you've just placed a single point in a polygon. You can use the `isBeingCreated` property to determine if the element is still being created by a drawing tool. If you want to know when the element is finished being created, you can use the [\`onElementCreateEnd\`](#onelementcreateend) listener. |

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

##### Inherited from

`ElementsController.onElementCreate`

#### onElementCreateEnd()

> **onElementCreateEnd**(`args`: \{ `handler`: (`params`: \{ `element`: [`Element`](#element-1); \}) => `void`; \}): `VoidFunction`

Listens for when a new element is finished being created by a drawing tool.

This differs from the [\`onElementCreate\`](#onelementcreate) listener, which fires whenever an
element is first created. This fires when the user finishes creating an element
which could be after a series of interactions.

For example, when creating a polygon, the user places a series of points then
finishes by pressing Enter or Escape. Or when creating a Place element, they
add the marker, type a label, then finally deselect the element.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `args` | \{ `handler`: (`params`: \{ `element`: [`Element`](#element-1); \}) => `void`; \} | - |
| `args.handler` | (`params`: \{ `element`: [`Element`](#element-1); \}) => `void` | The handler to call whenever this event fires. |

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

##### Inherited from

`ElementsController.onElementCreateEnd`

#### onElementChange()

> **onElementChange**(`args`: \{ `options`: \{ `id`: `string`; \}; `handler`: (`change`: [`ElementChangeCallbackParams`](#elementchangecallbackparams)) => `void`; \}): `VoidFunction`

Adds a listener for when an element changes.

This will fire when an element is being edited, either on the map by the user
or programatically.

Like the [\`onElementCreate\`](#onelementcreate) listener, this will fire when an element is
still being created by a drawing tool.

You can check the [\`isBeingCreated\`](#elementchangecallbackparams#isbeingcreated) property to determine if the element is
still being created by a drawing tool.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `args` | \{ `options`: \{ `id`: `string`; \}; `handler`: (`change`: [`ElementChangeCallbackParams`](#elementchangecallbackparams)) => `void`; \} | - |
| `args.options` | \{ `id`: `string`; \} | - |
| `args.options.id` | `string` | The id of the element to listen for changes to. |
| `args.handler` | (`change`: [`ElementChangeCallbackParams`](#elementchangecallbackparams)) => `void` | The handler that is called when the element changes. |

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

##### Inherited from

`ElementsController.onElementChange`

#### onElementDelete()

> **onElementDelete**(`args`: \{ `options`: \{ `id`: `string`; \}; `handler`: () => `void`; \}): `VoidFunction`

Adds a listener for when an element is deleted.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `args` | \{ `options`: \{ `id`: `string`; \}; `handler`: () => `void`; \} | - |
| `args.options` | \{ `id`: `string`; \} | - |
| `args.options.id` | `string` | The id of the element to listen for deletions of. |
| `args.handler` | () => `void` | The handler that is called when the element is deleted. |

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

##### Inherited from

`ElementsController.onElementDelete`

#### onElementGroupChange()

> **onElementGroupChange**(`args`: \{ `options`: \{ `id`: `string`; \}; `handler`: (`change`: [`ElementGroupChangeCallbackParams`](#elementgroupchangecallbackparams)) => `void`; \}): `VoidFunction`

Adds a listener for when an element group changes.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `options`: \{ `id`: `string`; \}; `handler`: (`change`: [`ElementGroupChangeCallbackParams`](#elementgroupchangecallbackparams)) => `void`; \} |
| `args.options` | \{ `id`: `string`; \} |
| `args.options.id` | `string` |
| `args.handler` | (`change`: [`ElementGroupChangeCallbackParams`](#elementgroupchangecallbackparams)) => `void` |

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

##### Inherited from

`ElementsController.onElementGroupChange`

#### onPointerClick()

> **onPointerClick**(`params`: \{ `handler`: (`event`: [`MapInteractionEvent`](#mapinteractionevent)) => `void`; \}): `VoidFunction`

Allows you to be notified the user clicks on the map.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `handler`: (`event`: [`MapInteractionEvent`](#mapinteractionevent)) => `void`; \} |
| `params.handler` | (`event`: [`MapInteractionEvent`](#mapinteractionevent)) => `void` |

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

##### Inherited from

`InteractionsController.onPointerClick`

#### onPointerMove()

> **onPointerMove**(`params`: \{ `handler`: (`event`: [`MapInteractionEvent`](#mapinteractionevent)) => `void`; \}): `VoidFunction`

Allows you to be notified the user moves the mouse over the map.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `handler`: (`event`: [`MapInteractionEvent`](#mapinteractionevent)) => `void`; \} | Params for the listener |
| `params.handler` | (`event`: [`MapInteractionEvent`](#mapinteractionevent)) => `void` | The handler function |

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

##### Inherited from

`InteractionsController.onPointerMove`

#### onLayerChange()

> **onLayerChange**(`args`: \{ `options`: \{ `id`: `string`; \}; `handler`: (`change`: [`LayerChangeCallbackParams`](#layerchangecallbackparams)) => `void`; \}): `VoidFunction`

Adds a listener for when a layer changes.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `args` | \{ `options`: \{ `id`: `string`; \}; `handler`: (`change`: [`LayerChangeCallbackParams`](#layerchangecallbackparams)) => `void`; \} | - |
| `args.options` | \{ `id`: `string`; \} | - |
| `args.options.id` | `string` | The id of the layer to listen for changes to. |
| `args.handler` | (`change`: [`LayerChangeCallbackParams`](#layerchangecallbackparams)) => `void` | The handler that is called when the layer changes. |

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

##### Inherited from

`LayersController.onLayerChange`

#### onLayerGroupChange()

> **onLayerGroupChange**(`args`: \{ `options`: \{ `id`: `string`; \}; `handler`: (`change`: [`LayerGroupChangeCallbackParams`](#layergroupchangecallbackparams)) => `void`; \}): `VoidFunction`

Adds a listener for when a layer group changes.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `options`: \{ `id`: `string`; \}; `handler`: (`change`: [`LayerGroupChangeCallbackParams`](#layergroupchangecallbackparams)) => `void`; \} |
| `args.options` | \{ `id`: `string`; \} |
| `args.options.id` | `string` |
| `args.handler` | (`change`: [`LayerGroupChangeCallbackParams`](#layergroupchangecallbackparams)) => `void` |

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

##### Inherited from

`LayersController.onLayerGroupChange`

#### onLegendItemChange()

> **onLegendItemChange**(`args`: \{ `options`: [`LegendItemIdentifier`](#legenditemidentifier); `handler`: (`change`: [`LegendItemChangeCallbackParams`](#legenditemchangecallbackparams)) => `void`; \}): `VoidFunction`

Adds a listener for when a legend item changes.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `options`: [`LegendItemIdentifier`](#legenditemidentifier); `handler`: (`change`: [`LegendItemChangeCallbackParams`](#legenditemchangecallbackparams)) => `void`; \} |
| `args.options` | [`LegendItemIdentifier`](#legenditemidentifier) |
| `args.handler` | (`change`: [`LegendItemChangeCallbackParams`](#legenditemchangecallbackparams)) => `void` |

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

##### Inherited from

`LayersController.onLegendItemChange`

#### onLayerFiltersChange()

> **onLayerFiltersChange**(`params`: \{ `options`: \{ `layerId`: `string`; \}; `handler`: (`change`: [`LayerFilters`](#layerfilters)) => `void`; \}): `VoidFunction`

Adds a listener for when a layer's filters change.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `options`: \{ `layerId`: `string`; \}; `handler`: (`change`: [`LayerFilters`](#layerfilters)) => `void`; \} |
| `params.options` | \{ `layerId`: `string`; \} |
| `params.options.layerId` | `string` |
| `params.handler` | (`change`: [`LayerFilters`](#layerfilters)) => `void` |

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

##### Inherited from

`LayersController.onLayerFiltersChange`

#### onLayerBoundariesChange()

> **onLayerBoundariesChange**(`params`: \{ `options`: \{ `layerId`: `string`; \}; `handler`: (`boundaries`: `null` \| [`LayerBoundaries`](#layerboundaries)) => `void`; \}): `VoidFunction`

Adds a listener for when a layer's spatial boundaries change.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | \{ `options`: \{ `layerId`: `string`; \}; `handler`: (`boundaries`: `null` \| [`LayerBoundaries`](#layerboundaries)) => `void`; \} | - |
| `params.options` | \{ `layerId`: `string`; \} | - |
| `params.options.layerId` | `string` | The id of the layer to listen for boundary changes on. |
| `params.handler` | (`boundaries`: `null` \| [`LayerBoundaries`](#layerboundaries)) => `void` | A function that is called when the boundaries change. |

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

##### Inherited from

`LayersController.onLayerBoundariesChange`

#### onSelectionChange()

> **onSelectionChange**(`params`: \{ `handler`: (`change`: \{ `selection`: [`EntityNode`](#entitynode)[]; \}) => `void`; \}): `VoidFunction`

Adds a listener for when the selection changes.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \{ `handler`: (`change`: \{ `selection`: [`EntityNode`](#entitynode)[]; \}) => `void`; \} |
| `params.handler` | (`change`: \{ `selection`: [`EntityNode`](#entitynode)[]; \}) => `void` |

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

##### Inherited from

`SelectionController.onSelectionChange`

#### onViewportMove()

> **onViewportMove**(`args`: \{ `handler`: (`viewport`: [`ViewportState`](#viewportstate)) => `void`; \}): `VoidFunction`

Adds a listener for when the viewport changes.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `args` | \{ `handler`: (`viewport`: [`ViewportState`](#viewportstate)) => `void`; \} | - |
| `args.handler` | (`viewport`: [`ViewportState`](#viewportstate)) => `void` | This callback is called with the current viewport state whenever the viewport changes. |

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

##### Inherited from

[`ViewportController`](#viewportcontroller).[`onViewportMove`](#viewportcontroller#onviewportmove)

#### onViewportMoveEnd()

> **onViewportMoveEnd**(`args`: \{ `handler`: (`viewport`: [`ViewportState`](#viewportstate)) => `void`; \}): `VoidFunction`

Adds a listener for when the viewport move ends, which is when the user
stops dragging or zooming the map, animations have finished, or inertial
dragging ends.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `handler`: (`viewport`: [`ViewportState`](#viewportstate)) => `void`; \} |
| `args.handler` | (`viewport`: [`ViewportState`](#viewportstate)) => `void` |

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

##### Inherited from

[`ViewportController`](#viewportcontroller).[`onViewportMoveEnd`](#viewportcontroller#onviewportmoveend)

#### onMapIdle()

> **onMapIdle**(`args`: \{ `handler`: () => `void`; \}): `VoidFunction`

Adds a listener for when the map is idle, which is defined as:
- No transitions are in progress
- The user is not interacting with the map, e.g. by panning or zooming
- All tiles for the current viewport have been loaded
- Any fade transitions (e.g. for labels) have completed

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `handler`: () => `void`; \} |
| `args.handler` | () => `void` |

##### Returns

`VoidFunction`

A function to unsubscribe from the listener

##### Example

```typescript
const unsubscribe = felt.onMapIdle({ handler: () => console.log("map is idle") });

// later on...
unsubscribe();
```

##### Inherited from

[`ViewportController`](#viewportcontroller).[`onMapIdle`](#viewportcontroller#onmapidle)

### Properties

#### iframe

> `readonly` **iframe**: `null` \| `HTMLIFrameElement`

The iframe element containing the Felt map, if it is an embedded map.

***

## FeltEmbedOptions

### Extends

- `zInfer`\<*typeof* `FeltEmbedOptionsSchema`\>

### Properties

#### uiControls?

> `optional` **uiControls**: [`UiControlsOptions`](#uicontrolsoptions)

##### Overrides

`zInfer.uiControls`

#### initialViewport?

> `optional` **initialViewport**: [`ViewportCenterZoom`](#viewportcenterzoom)

##### Overrides

`zInfer.initialViewport`

#### token?

> `optional` **token**: `string`

A short-lived (15 minutes) authentication token to use for showing embeds that are configured to be
private.

##### Inherited from

`zInfer.token`

***

## Felt

> `const` **Felt**: \{ `embed`: `Promise`\<[`FeltController`](#feltcontroller)\>; `connect`: `Promise`\<[`FeltController`](#feltcontroller)\>; \}

The Felt SDK is a library for embedding Felt maps into your website,
allowing you to control and inspect the map programmatically.

### Type declaration

#### embed()

> **embed**(`container`: `HTMLElement`, `mapId`: `string`, `options?`: [`FeltEmbedOptions`](#feltembedoptions)): `Promise`\<[`FeltController`](#feltcontroller)\>

Embeds a Felt map into the provided container, returning a promise that resolves
to a [FeltController](#feltcontroller) object that you can use to control the map.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `container` | `HTMLElement` | The container element to embed the map into. |
| `mapId` | `string` | The ID of the map to embed. |
| `options?` | [`FeltEmbedOptions`](#feltembedoptions) | The options to configure the map. |

##### Returns

`Promise`\<[`FeltController`](#feltcontroller)\>

A promise for a [FeltController](#feltcontroller).

#### connect()

> **connect**(`feltWindow`: `Pick`\<`Window`, `"postMessage"`\>): `Promise`\<[`FeltController`](#feltcontroller)\>

Binds to an existing Felt map iframe.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `feltWindow` | `Pick`\<`Window`, `"postMessage"`\> | The iframe element containing the Felt map. |

##### Returns

`Promise`\<[`FeltController`](#feltcontroller)\>


<a name="miscmd"></a>

The misc module for hard-to-categorize functionality.

## MapDetails

> **MapDetails** = \{ `id`: `string`; `title`: `string`; `description`: `string` \| `null`; \}

The details of a map.

### Properties

#### id

> **id**: `string`

The id of the map.

#### title

> **title**: `string`

The title of the map.

#### description

> **description**: `string` \| `null`

The description of the map.


<a name="readmemd"></a>

## Modules

- [Elements](#elementsmd)
- [Interactions](#interactionsmd)
- [Layers](#layersmd)
- [Main](#mainmd)
- [Misc](#miscmd)
- [Selection](#selectionmd)
- [Shared](#sharedmd)
- [Tools](#toolsmd)
- [UI](#uimd)
- [Viewport](#viewportmd)


<a name="selectionmd"></a>

## FeatureSelection

The options for selecting a feature in a layer.

### Extends

- `zInfer`\<*typeof* `FeatureSelectionSchema`\>

### Properties

#### id

> **id**: `string` \| `number`

The id of the feature to select.

##### Inherited from

`zInfer.id`

#### layerId

> **layerId**: `string`

The id of the layer that the feature belongs to.

##### Inherited from

`zInfer.layerId`

#### showPopup?

> `optional` **showPopup**: `boolean`

Whether to show the feature's popup, if it is configured in the layer's style.

##### Default

```ts
true
```

##### Inherited from

`zInfer.showPopup`

#### fitViewport?

> `optional` **fitViewport**: `boolean` \| \{ `maxZoom`: `number`; \}

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

##### Inherited from

`zInfer.fitViewport`

***

## EntityNode

> **EntityNode** = [`ElementNode`](#elementnode) \| [`ElementGroupNode`](#elementgroupnode) \| [`LayerNode`](#layernode) \| [`LayerGroupNode`](#layergroupnode) \| [`FeatureNode`](#featurenode)

A reference to any kind of entity in the map.

### Remarks

EntityNodes are used when you have some collection of entities and you need to

***

## ElementNode

References an element on the map.

### Properties

#### type

> **type**: `"element"`

#### entity

> **entity**: [`Element`](#element-1)

***

## ElementGroupNode

References an element group.

### Properties

#### type

> **type**: `"elementGroup"`

#### entity

> **entity**: [`ElementGroup`](#elementgroup)

***

## LayerNode

References a layer on the map.

### Properties

#### type

> **type**: `"layer"`

#### entity

> **entity**: [`Layer`](#layer-1)

***

## LayerGroupNode

References a layer group on the map.

### Properties

#### type

> **type**: `"layerGroup"`

#### entity

> **entity**: [`LayerGroup`](#layergroup)

***

## FeatureNode

References a feature on the map.

### Properties

#### type

> **type**: `"feature"`

#### entity

> **entity**: [`LayerFeature`](#layerfeature)


<a name="sharedmd"></a>

These are generic types that are used across multiple modules.

## Other

### LatLng

Represents a point in world coordinates.

#### Properties

##### latitude

> **latitude**: `number`

##### longitude

> **longitude**: `number`

***

### GeoJsonFeature

A GeoJSON feature object, compliant with:
https://datatracker.ietf.org/doc/html/rfc7946#section-3.2

#### Properties

##### type

> **type**: `"Feature"`

##### geometry

> **geometry**: [`GeoJsonGeometry`](#geojsongeometry)

The feature's geometry

##### properties

> **properties**: [`GeoJsonProperties`](#geojsonproperties)

Properties associated with this feature.

##### bbox?

> `optional` **bbox**: \[`number`, `number`, `number`, `number`\]

The bounding box of the feature in [west, south, east, north] order.

##### id?

> `optional` **id**: `string` \| `number`

A value that uniquely identifies this feature in a
https://tools.ietf.org/html/rfc7946#section-3.2.

***

### PointGeometry

#### Properties

##### type

> **type**: `"Point"`

##### coordinates

> **coordinates**: [`LngLatTuple`](#lnglattuple)

***

### MultiPointGeometry

A GeoJSON multi-point geometry.

#### Remarks

You shouldn't expect this to come from Felt - it is here for completeness
of the GeoJSON spec.

#### Properties

##### type

> **type**: `"MultiPoint"`

##### coordinates

> **coordinates**: [`LngLatTuple`](#lnglattuple)[]

***

### PolygonGeometry

#### Extends

- `zInfer`\<*typeof* `PolygonGeometrySchema`\>

#### Properties

##### type

> **type**: `"Polygon"`

###### Inherited from

`zInfer.type`

##### coordinates

> **coordinates**: \[`number`, `number`\][][]

The coordinates of a polygon. The first array is the exterior ring, and
any subsequent arrays are the interior rings.

Each ring must have at least 4 points: 3 to make a valid triangle and the
last to close the path, which must be identical to the first.

###### Inherited from

`zInfer.coordinates`

***

### MultiPolygonGeometry

A GeoJSON multi-polygon geometry.

#### Properties

##### type

> **type**: `"MultiPolygon"`

##### coordinates

> **coordinates**: \[`number`, `number`\][][][]

***

### LineStringGeometry

A GeoJSON line string geometry.

#### Properties

##### type

> **type**: `"LineString"`

##### coordinates

> **coordinates**: [`LngLatTuple`](#lnglattuple)[]

***

### MultiLineStringGeometry

A GeoJSON multi-line string geometry.

#### Properties

##### type

> **type**: `"MultiLineString"`

##### coordinates

> **coordinates**: [`LngLatTuple`](#lnglattuple)[][]

***

### SortConfig

Configuration for sorting data by a specific attribute

#### Extends

- `zInfer`\<*typeof* `SortConfigSchema`\>

#### Properties

##### direction

> **direction**: `"asc"` \| `"desc"`

The direction to sort in

###### Overrides

`zInfer.direction`

##### attribute

> **attribute**: `string`

The attribute to sort by. What this represents depends on the context.
For instance, when sorting features in a data table, the attribute is
the column to sort by.

###### Inherited from

`zInfer.attribute`

***

### LngLatTuple

> **LngLatTuple** = \[`number`, `number`\]

A tuple representing a longitude and latitude coordinate.

This is used hen serializing geometry because that's the standard used in
GeoJSON.

***

### GeoJsonProperties

> **GeoJsonProperties** = `Record`\<`string`, `unknown`\>

A GeoJSON properties object.

***

### GeoJsonGeometry

> **GeoJsonGeometry** = [`PointGeometry`](#pointgeometry) \| [`PolygonGeometry`](#polygongeometry) \| [`LineStringGeometry`](#linestringgeometry) \| [`MultiLineStringGeometry`](#multilinestringgeometry) \| [`MultiPolygonGeometry`](#multipolygongeometry) \| [`MultiPointGeometry`](#multipointgeometry)

A GeoJSON geometry of any type

***

### FeltZoom

> **FeltZoom** = `number`

The zoom level of the map.

It is a floating-point number between 1 and 23, where 1 is the most
zoomed out and 23 is the most zoomed in.

***

### FeltBoundary

> **FeltBoundary** = \[`number`, `number`, `number`, `number`\]

The edges of the map in the form of a bounding box.

The boundary is a tuple of the form `[west, south, east, north]`.

***

### SortDirection

> **SortDirection** = `"asc"` \| `"desc"`

Specifies the direction to sort data in

## Visibility

### SetVisibilityRequest

The parameters for the methods that change the visibility of entities.

#### Extends

- `zInfer`\<*typeof* `SetVisibilityRequestSchema`\>

#### Properties

##### show?

> `optional` **show**: `string`[]

The ids of the entities you want to change the visibility of.

###### Inherited from

`zInfer.show`

##### hide?

> `optional` **hide**: `string`[]

###### Inherited from

`zInfer.hide`


<a name="toolsmd"></a>

The Tools part of the Felt SDK allows you to let users draw elements on the map
by programatically selecting a tool for them.

You can also set the settings for individual tools, to allow you to change the
styling of the resulting element.

## Example

```ts
// Change the settings for the line tool
felt.setToolSettings({
  tool: "line",
  strokeWidth: 8,
  color: "#448C2A"
});

// Start using the line tool
felt.setTool("line");

// Put down the tool
felt.setTool(null);
```

> To create elements programatically, use the ElementsController instead.

## PinToolSettings

### Extends

- `zInfer`\<*typeof* `PinToolSettingsSchema`\>

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

##### Inherited from

`zInfer.color`

#### frame

> **frame**: `null` \| `"frame-circle"` \| `"frame-square"`

The frame that is rendered around the Place's symbol. This is
only available for non-emoji symbols.

##### Inherited from

`zInfer.frame`

#### symbol

> **symbol**: [`PlaceSymbol`](#placesymbol)

The symbol that is rendered for the Place.

This can be an emoji by using colon-enclosed characters (e.g. `":smiley:"`)
or one of the symbols available in Felt's symbol library.

You can see the available symbols in the Felt UI when editing a Place
by hovering a symbol and converting the tooltip to kebab-case. For example,
the "Oil barrel" symbol is `oil-barrel`.

##### Overrides

`zInfer.symbol`

#### afterCreation

> **afterCreation**: `"enter name"` \| `"add another"` \| `"select"`

What to do after creating the Place element.

- `"enter name"`: Enter a name for the Place, focusing the name input.
- `"add another"`: Add another Place, leaving the tool still selected.
- `"select"`: Puts the tool down and selects the new Place element.

##### Default Value

`"enter name"`

##### Overrides

`zInfer.afterCreation`

***

## LineToolSettings

### Extends

- `zInfer`\<*typeof* `LineToolSettingsSchema`\>

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

##### Inherited from

`zInfer.color`

#### strokeOpacity

> **strokeOpacity**: `number`

A value between 0 and 1 that describes the opacity of the element's stroke.

##### Default

```ts
1
```

##### Inherited from

`zInfer.strokeOpacity`

#### strokeWidth

> **strokeWidth**: `number`

The width of the element's stroke in pixels.

##### Default

```ts
2
```

##### Inherited from

`zInfer.strokeWidth`

#### strokeStyle

> **strokeStyle**: `"solid"` \| `"dashed"` \| `"dotted"`

The style of the element's stroke.

##### Default

```ts
"solid"
```

##### Inherited from

`zInfer.strokeStyle`

#### distanceMarker

> **distanceMarker**: `boolean`

Whether a distance marker is shown at the midpoint of the path.

##### Default

```ts
false
```

##### Inherited from

`zInfer.distanceMarker`

***

## RouteToolSettings

### Extends

- `zInfer`\<*typeof* `RouteToolSettingsSchema`\>

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

##### Inherited from

`zInfer.color`

#### strokeOpacity

> **strokeOpacity**: `number`

A value between 0 and 1 that describes the opacity of the element's stroke.

##### Default

```ts
1
```

##### Inherited from

`zInfer.strokeOpacity`

#### strokeWidth

> **strokeWidth**: `number`

The width of the element's stroke in pixels.

##### Default

```ts
2
```

##### Inherited from

`zInfer.strokeWidth`

#### strokeStyle

> **strokeStyle**: `"solid"` \| `"dashed"` \| `"dotted"`

The style of the element's stroke.

##### Default

```ts
"solid"
```

##### Inherited from

`zInfer.strokeStyle`

#### distanceMarker

> **distanceMarker**: `boolean`

Whether a distance marker is shown at the midpoint of the path.

##### Default

```ts
false
```

##### Inherited from

`zInfer.distanceMarker`

#### routingMode

> **routingMode**: `null` \| `"driving"` \| `"cycling"` \| `"walking"` \| `"flying"`

Whether this represents a route, and if so, what mode of transport
is used.

If this is `null`, the path is not considered to be a route, so while it
can have a `distanceMarker`, it will does not have a start or end cap.

##### Default

```ts
null
```

##### Inherited from

`zInfer.routingMode`

#### endCaps

> **endCaps**: `boolean`

Whether or not to show Start and End caps on the path. This is
only available if the `routingMode` is set.

##### Default

```ts
false
```

##### Inherited from

`zInfer.endCaps`

***

## PolygonToolSettings

### Extends

- `zInfer`\<*typeof* `PolygonToolSettingsSchema`\>

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

##### Inherited from

`zInfer.color`

#### strokeOpacity

> **strokeOpacity**: `number`

A value between 0 and 1 that describes the opacity of the element's stroke.

##### Default

```ts
1
```

##### Inherited from

`zInfer.strokeOpacity`

#### strokeWidth

> **strokeWidth**: `number`

The width of the element's stroke in pixels.

##### Default

```ts
2
```

##### Inherited from

`zInfer.strokeWidth`

#### strokeStyle

> **strokeStyle**: `"solid"` \| `"dashed"` \| `"dotted"`

The style of the element's stroke.

##### Default

```ts
"solid"
```

##### Inherited from

`zInfer.strokeStyle`

#### fillOpacity

> **fillOpacity**: `number`

The opacity of the polygon's fill, between 0 and 1.

##### Default

```ts
0.25
```

##### Inherited from

`zInfer.fillOpacity`

#### areaMarker

> **areaMarker**: `boolean`

Whether to show an area marker on the polygon.

##### Default

```ts
false
```

##### Inherited from

`zInfer.areaMarker`

***

## CircleToolSettings

### Extends

- `zInfer`\<*typeof* `CircleToolSettingsSchema`\>

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

##### Inherited from

`zInfer.color`

#### strokeOpacity

> **strokeOpacity**: `number`

A value between 0 and 1 that describes the opacity of the element's stroke.

##### Default

```ts
1
```

##### Inherited from

`zInfer.strokeOpacity`

#### strokeWidth

> **strokeWidth**: `number`

The width of the element's stroke in pixels.

##### Default

```ts
2
```

##### Inherited from

`zInfer.strokeWidth`

#### strokeStyle

> **strokeStyle**: `"solid"` \| `"dashed"` \| `"dotted"`

The style of the element's stroke.

##### Default

```ts
"solid"
```

##### Inherited from

`zInfer.strokeStyle`

#### radiusMarker

> **radiusMarker**: `boolean`

Whether to show a marker on the circle that indicates the radius

##### Default

```ts
false
```

##### Inherited from

`zInfer.radiusMarker`

#### fillOpacity

> **fillOpacity**: `number`

The opacity of the circle's fill.

##### Default

```ts
0.25
```

##### Inherited from

`zInfer.fillOpacity`

***

## MarkerToolSettings

### Extends

- `zInfer`\<*typeof* `MarkerToolSettingsSchema`\>

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

##### Inherited from

`zInfer.color`

#### opacity

> **opacity**: `number`

The opacity of the marker, between 0 and 1.

##### Default

```ts
1
```

##### Inherited from

`zInfer.opacity`

#### size

> **size**: `number`

The size of the marker, used in conjunction with the `zoom` to determine
the actual size of the marker.

##### Default

```ts
10
```

##### Inherited from

`zInfer.size`

***

## HighlighterToolSettings

### Extends

- `zInfer`\<*typeof* `HighlighterToolSettingsSchema`\>

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

##### Inherited from

`zInfer.color`

#### renderHoles

> **renderHoles**: `boolean`

Whether to render the holes of the highlighted area.

##### Default

```ts
false
```

##### Inherited from

`zInfer.renderHoles`

#### opacity

> **opacity**: `number`

The opacity of the highlighter, between 0 and 1.

##### Default

```ts
0.5
```

##### Inherited from

`zInfer.opacity`

#### size

> **size**: `number`

##### Inherited from

`zInfer.size`

***

## TextToolSettings

### Extends

- `zInfer`\<*typeof* `TextToolSettingsSchema`\>

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

##### Inherited from

`zInfer.color`

#### align

> **align**: `"center"` \| `"left"` \| `"right"`

The alignment of the text, either `left`, `center` or `right`.

##### Default

```ts
"center"
```

##### Inherited from

`zInfer.align`

#### style

> **style**: `"italic"` \| `"light"` \| `"regular"` \| `"caps"`

The style of the text, either `italic`, `light`, `regular` or `caps`.

##### Default

```ts
"regular"
```

##### Inherited from

`zInfer.style`

***

## NoteToolSettings

### Extends

- `zInfer`\<*typeof* `NoteToolSettingsSchema`\>

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

##### Inherited from

`zInfer.color`

#### align

> **align**: `"center"` \| `"left"` \| `"right"`

The alignment of the text, either `left`, `center` or `right`.

##### Default

```ts
"center"
```

##### Inherited from

`zInfer.align`

#### style

> **style**: `"italic"` \| `"light"` \| `"regular"` \| `"caps"`

The style of the text, either `italic`, `light`, `regular` or `caps`.

##### Default

```ts
"regular"
```

##### Inherited from

`zInfer.style`

***

## ToolType

> **ToolType** = `"text"` \| `"note"` \| `"pin"` \| `"line"` \| `"route"` \| `"polygon"` \| `"circle"` \| `"marker"` \| `"highlighter"` \| `"link"`

***

## ConfigurableToolType

> **ConfigurableToolType** = keyof [`ToolSettingsMap`](#toolsettingsmap)

***

## InputToolSettings

> **InputToolSettings** = \{ `tool`: `"pin"`; \} & `Partial`\<[`PinToolSettings`](#pintoolsettings)\> \| \{ `tool`: `"line"`; \} & `Partial`\<[`LineToolSettings`](#linetoolsettings)\> \| \{ `tool`: `"route"`; \} & `Partial`\<[`RouteToolSettings`](#routetoolsettings)\> \| \{ `tool`: `"polygon"`; \} & `Partial`\<[`PolygonToolSettings`](#polygontoolsettings)\> \| \{ `tool`: `"circle"`; \} & `Partial`\<[`CircleToolSettings`](#circletoolsettings)\> \| \{ `tool`: `"marker"`; \} & `Partial`\<[`MarkerToolSettings`](#markertoolsettings)\> \| \{ `tool`: `"highlighter"`; \} & `Partial`\<[`HighlighterToolSettings`](#highlightertoolsettings)\> \| \{ `tool`: `"text"`; \} & `Partial`\<[`TextToolSettings`](#texttoolsettings)\> \| \{ `tool`: `"note"`; \} & `Partial`\<[`NoteToolSettings`](#notetoolsettings)\>

The parameters for changing the settings of each tool.

***

## ToolSettingsChangeEvent

> **ToolSettingsChangeEvent** = \{ `tool`: `"pin"`; \} & [`PinToolSettings`](#pintoolsettings) \| \{ `tool`: `"line"`; \} & [`LineToolSettings`](#linetoolsettings) \| \{ `tool`: `"route"`; \} & [`RouteToolSettings`](#routetoolsettings) \| \{ `tool`: `"polygon"`; \} & [`PolygonToolSettings`](#polygontoolsettings) \| \{ `tool`: `"circle"`; \} & [`CircleToolSettings`](#circletoolsettings) \| \{ `tool`: `"marker"`; \} & [`MarkerToolSettings`](#markertoolsettings) \| \{ `tool`: `"highlighter"`; \} & [`HighlighterToolSettings`](#highlightertoolsettings) \| \{ `tool`: `"text"`; \} & [`TextToolSettings`](#texttoolsettings) \| \{ `tool`: `"note"`; \} & [`NoteToolSettings`](#notetoolsettings)

The result of listening for changes to the settings of each tool.

***

## ToolSettingsMap

> **ToolSettingsMap** = \{ `pin`: [`PinToolSettings`](#pintoolsettings); `line`: [`LineToolSettings`](#linetoolsettings); `route`: [`RouteToolSettings`](#routetoolsettings); `polygon`: [`PolygonToolSettings`](#polygontoolsettings); `circle`: [`CircleToolSettings`](#circletoolsettings); `marker`: [`MarkerToolSettings`](#markertoolsettings); `highlighter`: [`HighlighterToolSettings`](#highlightertoolsettings); `text`: [`TextToolSettings`](#texttoolsettings); `note`: [`NoteToolSettings`](#notetoolsettings); \}

### Properties

#### pin

> **pin**: [`PinToolSettings`](#pintoolsettings)

#### line

> **line**: [`LineToolSettings`](#linetoolsettings)

#### route

> **route**: [`RouteToolSettings`](#routetoolsettings)

#### polygon

> **polygon**: [`PolygonToolSettings`](#polygontoolsettings)

#### circle

> **circle**: [`CircleToolSettings`](#circletoolsettings)

#### marker

> **marker**: [`MarkerToolSettings`](#markertoolsettings)

#### highlighter

> **highlighter**: [`HighlighterToolSettings`](#highlightertoolsettings)

#### text

> **text**: [`TextToolSettings`](#texttoolsettings)

#### note

> **note**: [`NoteToolSettings`](#notetoolsettings)

***

## PlaceFrame

> **PlaceFrame** = `"frame-circle"` \| `"frame-square"` \| `null`

***

## PlaceSymbol

> **PlaceSymbol** = `"dot"` \| `"square"` \| `"diamond"` \| `"triangle"` \| `"x"` \| `"plus"` \| `"circle-line"` \| `"circle-slash"` \| `"star"` \| `"heart"` \| `"hexagon"` \| `"octagon"` \| `"pedestrian"` \| `"bicycle"` \| `"wheelchair"` \| `"airport"` \| `"car"` \| `"bus"` \| `"train"` \| `"truck"` \| `"ferry"` \| `"sailboat"` \| `"electric-service"` \| `"gas-service"` \| `"blood-clinic"` \| `"badge"` \| `"traffic-light"` \| `"traffic-cone"` \| `"road-sign-caution"` \| `"person"` \| `"restroom"` \| `"house"` \| `"work"` \| `"letter"` \| `"hotel"` \| `"factory"` \| `"hospital"` \| `"religious-facility"` \| `"school"` \| `"government"` \| `"university"` \| `"bank"` \| `"landmark"` \| `"museum"` \| `"clothing"` \| `"shopping"` \| `"store"` \| `"bar"` \| `"pub"` \| `"cafe"` \| `"food"` \| `"park"` \| `"amusement-park"` \| `"camping-tent"` \| `"cabin"` \| `"picnic"` \| `"water-refill"` \| `"trailhead"` \| `"guidepost"` \| `"viewpoint"` \| `"camera"` \| `"us-football"` \| `"football"` \| `"tennis"` \| `"binoculars"` \| `"swimming"` \| `"zap"` \| `"battery-full"` \| `"battery-half"` \| `"battery-low"` \| `"boom"` \| `"radar"` \| `"wind-turbine"` \| `"solar-panel"` \| `"antenna"` \| `"telephone-pole"` \| `"oil-well"` \| `"oil-barrel"` \| `"railroad-track"` \| `"bridge"` \| `"lighthouse"` \| `"lock-closed"` \| `"lock-open"` \| `"wifi"` \| `"trash"` \| `"recycle"` \| `"tree"` \| `"flower"` \| `"leaf"` \| `"fire"` \| `"mountain"` \| `"snowy-mountain"` \| `"volcano"` \| `"island"` \| `"wave"` \| `"hot-springs"` \| `"water"` \| `"lake"` \| `"ocean"` \| `"animal"` \| `"bird"` \| `"duck"` \| `"dog"` \| `"fish"` \| `"beach"` \| `"wetland"` \| `"sun"` \| `"moon"` \| `"cloud"` \| `"partial-sun"` \| `"rain"` \| `"lightning"` \| `"snowflake"` \| `"wind"` \| `"snow"` \| `"fog"` \| `"sleet"` \| `"hurricane"` \| `"warning"` \| `"parking"` \| `"info"` \| `"circle-exclamation"` \| `"circle-triangle"` \| `"circle-x"` \| `"circle-plus"` \| `` `:${string}:` `` & \{ \}

***

## ToolsController

The Tools controller allows you to let users draw elements on the map.

### Extended by

- [`FeltController`](#feltcontroller)

### Methods

#### setTool()

> **setTool**(`tool`: `null` \| `"text"` \| `"note"` \| `"pin"` \| `"line"` \| `"route"` \| `"polygon"` \| `"circle"` \| `"marker"` \| `"highlighter"` \| `"link"`): `void`

Sets the tool to use for drawing elements on the map.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tool` | `null` \| `"text"` \| `"note"` \| `"pin"` \| `"line"` \| `"route"` \| `"polygon"` \| `"circle"` \| `"marker"` \| `"highlighter"` \| `"link"` | The tool to set. |

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

> **getTool**(): `Promise`\<`null` \| `"text"` \| `"note"` \| `"pin"` \| `"line"` \| `"route"` \| `"polygon"` \| `"circle"` \| `"marker"` \| `"highlighter"` \| `"link"`\>

Gets the current tool, if any is in use.

##### Returns

`Promise`\<`null` \| `"text"` \| `"note"` \| `"pin"` \| `"line"` \| `"route"` \| `"polygon"` \| `"circle"` \| `"marker"` \| `"highlighter"` \| `"link"`\>

The current tool, or `null` if no tool is in use.

##### Example

```typescript
const tool = await felt.getTool(); // "marker", "polygon", etc.
```

#### onToolChange()

> **onToolChange**(`args`: \{ `handler`: (`tool`: `null` \| `"text"` \| `"note"` \| `"pin"` \| `"line"` \| `"route"` \| `"polygon"` \| `"circle"` \| `"marker"` \| `"highlighter"` \| `"link"`) => `void`; \}): `VoidFunction`

Listens for changes to the current tool.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `args` | \{ `handler`: (`tool`: `null` \| `"text"` \| `"note"` \| `"pin"` \| `"line"` \| `"route"` \| `"polygon"` \| `"circle"` \| `"marker"` \| `"highlighter"` \| `"link"`) => `void`; \} | - |
| `args.handler` | (`tool`: `null` \| `"text"` \| `"note"` \| `"pin"` \| `"line"` \| `"route"` \| `"polygon"` \| `"circle"` \| `"marker"` \| `"highlighter"` \| `"link"`) => `void` | This callback is called with the current tool whenever the tool changes. |

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

> **setToolSettings**(`settings`: [`InputToolSettings`](#inputtoolsettings)): `void`

Sets the settings for the current tool.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `settings` | [`InputToolSettings`](#inputtoolsettings) | The settings to set. |

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

> **getToolSettings**\<`T`\>(`tool`: `T`): `Promise`\<[`ToolSettingsMap`](#toolsettingsmap)\[`T`\]\>

Gets the settings for the chosen tool

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* keyof [`ToolSettingsMap`](#toolsettingsmap) |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `tool` | `T` |

##### Returns

`Promise`\<[`ToolSettingsMap`](#toolsettingsmap)\[`T`\]\>

The settings for the chosen tool.

##### Example

```typescript
const settings = await felt.getToolSettings("marker");
```

#### onToolSettingsChange()

> **onToolSettingsChange**(`args`: \{ `handler`: (`settings`: [`ToolSettingsChangeEvent`](#toolsettingschangeevent)) => `void`; \}): `VoidFunction`

Listens for changes to the settings on all tools.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `handler`: (`settings`: [`ToolSettingsChangeEvent`](#toolsettingschangeevent)) => `void`; \} |
| `args.handler` | (`settings`: [`ToolSettingsChangeEvent`](#toolsettingschangeevent)) => `void` |

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


<a name="uimd"></a>

The UI part of the Felt SDK allows you to enable and disable certain
UI features such as the legend and the full screen button.

## UiControlsOptions

### Extends

- `zInfer`\<*typeof* `UiControlsOptionsSchema`\>

### Properties

#### showLegend?

> `optional` **showLegend**: `boolean`

Whether or not the legend is shown.

##### Default Value

```ts
true
```

##### Inherited from

`zInfer.showLegend`

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

##### Inherited from

`zInfer.cooperativeGestures`

#### fullScreenButton?

> `optional` **fullScreenButton**: `boolean`

Whether or not the full screen button is shown in an embedded map.

##### Remarks

When clicked, this will open the map in a new tab or window.

##### Default Value

```ts
true
```

##### Inherited from

`zInfer.fullScreenButton`

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

##### Inherited from

`zInfer.geolocation`

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

##### Inherited from

`zInfer.zoomControls`

#### scaleBar?

> `optional` **scaleBar**: `boolean`

Whether or not the scale bar is shown in an embedded map.

##### Default Value

```ts
true
```

##### Inherited from

`zInfer.scaleBar`

***

## OnMapInteractionsOptions

The options for which parts of the Felt UI can be shown when interacting with
features and elements on the map.

Switching these off can be useful if you add your own click, selection or hover
handlers for features and elements.

### Extends

- `zInfer`\<*typeof* `UiOnMapInteractionsOptionsSchema`\>

### Properties

#### featureSelectPanel?

> `optional` **featureSelectPanel**: `boolean`

Set this to `false` to prevent the panel that shows information about a selected
feature from being shown.

##### Inherited from

`zInfer.featureSelectPanel`

#### featureHoverPanel?

> `optional` **featureHoverPanel**: `boolean`

Set this to `false` to prevent the panel that shows information about a hovered
feature from being shown.

##### Inherited from

`zInfer.featureHoverPanel`

#### elementSelectPanel?

> `optional` **elementSelectPanel**: `boolean`

Set this to `false` to prevent the panel that shows information about a selected
element from being shown.

##### Inherited from

`zInfer.elementSelectPanel`

#### linkClickOpen?

> `optional` **linkClickOpen**: `boolean`

Set this to `false` to prevent clicking on a map link element from opening that link
in a new tab or window.

##### Inherited from

`zInfer.linkClickOpen`

#### imageLightboxOpen?

> `optional` **imageLightboxOpen**: `boolean`

Set this to `false` to prevent clicking on an image element from opening the image
in a lightbox.

##### Inherited from

`zInfer.imageLightboxOpen`

***

## UiController

The UI controller allows you to control various aspects of the Felt UI in your embedded map.

This includes enabling/disabling UI controls, managing on-map interactions, and controlling
the visibility of UI components like the data table.

### Extended by

- [`FeltController`](#feltcontroller)

### Methods

#### updateUiControls()

> **updateUiControls**(`controls`: [`UiControlsOptions`](#uicontrolsoptions)): `void`

Updates the UI controls on the embedded map.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `controls` | [`UiControlsOptions`](#uicontrolsoptions) | The controls to update. |

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

> **setOnMapInteractionsUi**(`options`: [`OnMapInteractionsOptions`](#onmapinteractionsoptions)): `void`

Control the on-map UI shown when interacting with features and elements.

If you add your own click, selection or hover handlers you may want to disable
various parts of the Felt UI. This method allows you to control the visibility of
various parts of the UI that might otherwise be shown when people click or hover
on things.

This does not affect selection. That means that selectable features and elements
will still be selected when clicked.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`OnMapInteractionsOptions`](#onmapinteractionsoptions) |

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

> **showLayerDataTable**(`params?`: \{ `layerId`: `string`; `sorting?`: [`SortConfig`](#sortconfig); \}): `Promise`\<`void`\>

Shows a data table view for the specified layer, optionally sorted by a given attribute.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `params?` | \{ `layerId`: `string`; `sorting?`: [`SortConfig`](#sortconfig); \} |
| `params.layerId?` | `string` |
| `params.sorting?` | [`SortConfig`](#sortconfig) |

##### Returns

`Promise`\<`void`\>

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

> **hideLayerDataTable**(): `Promise`\<`void`\>

Hides the data table.

##### Returns

`Promise`\<`void`\>

##### Example

```typescript
await felt.hideLayerDataTable();
```


<a name="viewportmd"></a>

The Viewport module allows you to control the viewport of the map, such as setting the
current viewport, getting the current viewport, and being notified when the viewport changes.

## ViewportController

The viewport controller allows you to control the viewport of the map.

You can get the current viewport, move the viewport, and be notified when
the viewport changes.

### Extended by

- [`FeltController`](#feltcontroller)

### Methods

#### getViewport()

> **getViewport**(): `Promise`\<[`ViewportState`](#viewportstate)\>

Gets the current state of the viewport.

##### Returns

`Promise`\<[`ViewportState`](#viewportstate)\>

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

> **setViewport**(`viewport`: [`SetViewportCenterZoomParams`](#setviewportcenterzoomparams)): `void`

Moves the map to the specified location.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `viewport` | [`SetViewportCenterZoomParams`](#setviewportcenterzoomparams) |

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

> **getViewportConstraints**(): `Promise`\<`null` \| [`ViewportConstraints`](#viewportconstraints)\>

Gets the current state of the viewport constraints.

##### Returns

`Promise`\<`null` \| [`ViewportConstraints`](#viewportconstraints)\>

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

> **setViewportConstraints**(`constraints`: `null` \| `Partial`\<[`ViewportConstraints`](#viewportconstraints)\>): `void`

Constrains the map viewport so it stays inside certain bounds and/or certain zoom levels.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `constraints` | `null` \| `Partial`\<[`ViewportConstraints`](#viewportconstraints)\> |

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

> **fitViewportToBounds**(`bounds`: [`ViewportFitBoundsParams`](#viewportfitboundsparams)): `void`

Fits the map to the specified bounds.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `bounds` | [`ViewportFitBoundsParams`](#viewportfitboundsparams) |

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

#### onViewportMove()

> **onViewportMove**(`args`: \{ `handler`: (`viewport`: [`ViewportState`](#viewportstate)) => `void`; \}): `VoidFunction`

Adds a listener for when the viewport changes.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `args` | \{ `handler`: (`viewport`: [`ViewportState`](#viewportstate)) => `void`; \} | - |
| `args.handler` | (`viewport`: [`ViewportState`](#viewportstate)) => `void` | This callback is called with the current viewport state whenever the viewport changes. |

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

> **onViewportMoveEnd**(`args`: \{ `handler`: (`viewport`: [`ViewportState`](#viewportstate)) => `void`; \}): `VoidFunction`

Adds a listener for when the viewport move ends, which is when the user
stops dragging or zooming the map, animations have finished, or inertial
dragging ends.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `handler`: (`viewport`: [`ViewportState`](#viewportstate)) => `void`; \} |
| `args.handler` | (`viewport`: [`ViewportState`](#viewportstate)) => `void` |

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

> **onMapIdle**(`args`: \{ `handler`: () => `void`; \}): `VoidFunction`

Adds a listener for when the map is idle, which is defined as:
- No transitions are in progress
- The user is not interacting with the map, e.g. by panning or zooming
- All tiles for the current viewport have been loaded
- Any fade transitions (e.g. for labels) have completed

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `handler`: () => `void`; \} |
| `args.handler` | () => `void` |

##### Returns

`VoidFunction`

A function to unsubscribe from the listener

##### Example

```typescript
const unsubscribe = felt.onMapIdle({ handler: () => console.log("map is idle") });

// later on...
unsubscribe();
```

***

## ViewportCenterZoom

The input type for setting the viewport to a particular center and zoom.

### Extends

- `zInfer`\<*typeof* `ViewportCenterZoomSchema`\>

### Properties

#### center

> **center**: [`LatLng`](#latlng)

The center of the viewport in latitude and longitude.

##### Overrides

`zInfer.center`

#### zoom

> **zoom**: `number`

The zoom level of the viewport.

##### Overrides

`zInfer.zoom`

***

## ViewportState

The current state of the viewport, including the derived bounds.

### Properties

#### center

> **center**: [`LatLng`](#latlng)

The center of the viewport in latitude and longitude.

[LatLng](#latlng)

#### zoom

> **zoom**: `number`

The zoom level of the viewport.

[FeltZoom](#feltzoom)

#### bounds

> **bounds**: \[`number`, `number`, `number`, `number`\]

The bounding box of the viewport in [west, south, east, north] order.

This is derived, and depends on the center and zoom of the viewport, as
well as its size.

[FeltBoundary](#feltboundary)

***

## SetViewportCenterZoomParams

The parameters for the [\`setViewport\`](#setviewport) method.

### Extends

- `zInfer`\<*typeof* `SetViewportCenterZoomParamsSchema`\>

### Properties

#### center?

> `optional` **center**: \{ `latitude`: `number`; `longitude`: `number`; \}

| Name | Type | Default value |
| ------ | ------ | ------ |
| `latitude` | `number` | `Latitude` |
| `longitude` | `number` | `Longitude` |

##### Inherited from

`zInfer.center`

#### zoom?

> `optional` **zoom**: `number`

##### Inherited from

`zInfer.zoom`

***

## ViewportConstraints

The constraints for the viewport. Used to ensure that the viewport stays
within certain bounds and zoom levels.

### Properties

#### minZoom

> **minZoom**: `null` \| `number`

The minimum zoom level for the viewport.

[FeltZoom](#feltzoom)

#### maxZoom

> **maxZoom**: `null` \| `number`

The maximum zoom level for the viewport.

[FeltZoom](#feltzoom)

#### bounds

> **bounds**: `null` \| \[`number`, `number`, `number`, `number`\]

The bounds for the viewport.

[FeltBoundary](#feltboundary)

***

## ViewportFitBoundsParams

The parameters for the [\`fitViewportToBounds\`](#fitviewporttobounds) method.

### Extends

- `zInfer`\<*typeof* `ViewportFitBoundsParamsSchema`\>

### Properties

#### bounds

> **bounds**: \[`number`, `number`, `number`, `number`\]

The bounds to fit the viewport to.

[FeltBoundary](#feltboundary)

##### Overrides

`zInfer.bounds`
