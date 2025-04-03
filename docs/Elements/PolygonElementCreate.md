***

# Properties

## groupId?

> `optional` **groupId**: `null` | `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

***

## color?

> `optional` **color**: `string`

The color of the element in some CSS-like format.

### Example

```typescript
"#ABC123";
"rgb(255, 0, 0)";
"hsl(200, 100%, 50%)";
```

### Default

```ts
"#C93535"
```

***

## name?

> `optional` **name**: `null` | `string`

The element's name. For elements that can show a label or text on
the map (e.g. a Place or Text element) this is the text that will be shown.

For elements such as Polygons or Paths, the name is what is shown when
the element is selected by clicking on it.

***

## description?

> `optional` **description**: `null` | `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

***

## attributes?

> `optional` **attributes**: `Record`\<`string`, `unknown`>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

***

## interaction?

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

### Default

```ts
"default"
```

***

## imageUrl?

> `optional` **imageUrl**: `null` | `string`

The URL of an image that has been added to the element.

***

## strokeOpacity?

> `optional` **strokeOpacity**: `number`

A value between 0 and 1 that describes the opacity of the element's stroke.

### Default

```ts
1
```

***

## strokeWidth?

> `optional` **strokeWidth**: `number`

The width of the element's stroke in pixels.

### Default

```ts
2
```

***

## strokeStyle?

> `optional` **strokeStyle**: `"solid"` | `"dashed"` | `"dotted"`

The style of the element's stroke.

### Default

```ts
"solid"
```

***

## type

> **type**: `"Polygon"`

***

## fillOpacity?

> `optional` **fillOpacity**: `number`

The opacity of the polygon's fill, between 0 and 1.

### Default

```ts
0.25
```

***

## areaMarker?

> `optional` **areaMarker**: `boolean`

Whether to show an area marker on the polygon.

### Default

```ts
false
```

***

## coordinates

> **coordinates**: [`LngLatTuple`](../Shared/LngLatTuple.md)\[]\[]
