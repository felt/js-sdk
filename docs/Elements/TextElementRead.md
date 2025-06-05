***

# Properties

## id

> **id**: `string`

The unique identifier for the element.

***

## groupId

> **groupId**: `null` | `string`

The ID of the element group that the element belongs to.
For elements that are not part of a group, this will be null.

***

## color

> **color**: `string`

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

## description

> **description**: `null` | `string`

Text describing the element, which is shown in an element's popup when it
is selected.

Note that some elements are not selectable on the map, such as Notes, Text
and Markers, so their description will not be shown.

***

## attributes

> **attributes**: `Record`\<`string`, `unknown`>

A set of key-value pairs that can be used to store arbitrary data about the element.

This is most useful for associating additional data with an element that is not
part of the element's core data, such as a Place's address or some other
data.

***

## rotation

> **rotation**: `number`

The rotation of the element in degrees.

### Default

```ts
0
```

***

## scale

> **scale**: `number`

The relative scale of the element from the default size. This is combined
with the `zoom` to determine the actual size of the element.

### Default

```ts
1
```

***

## zoom

> **zoom**: `number`

The zoom level at which the element was created. This is combined with
the `scale` to determine the actual size of the element.

When creating an element, if you don't supply this value it defaults to
the current zoom of the map when you call `createElement`.

***

## text

> **text**: `string`

The text in the element.

***

## align

> **align**: `"left"` | `"center"` | `"right"`

The alignment of the text, either `left`, `center` or `right`.

### Default

```ts
"center"
```

***

## style

> **style**: `"italic"` | `"light"` | `"regular"` | `"caps"`

The style of the text, either `italic`, `light`, `regular` or `caps`.

### Default

```ts
"regular"
```

***

## name

> **name**: `string`

The text shown in the element, which is identical to the `text` property.

### Remarks

This is added for consistency with other elements that have a `name`
property.

***

## type

> **type**: `"Text"`

***

## position

> **position**: [`LngLatTuple`](../Shared/LngLatTuple.md)

The geographical position of the center of the text element.

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
