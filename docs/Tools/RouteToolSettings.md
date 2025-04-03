***

# Properties

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

## strokeOpacity

> **strokeOpacity**: `number`

A value between 0 and 1 that describes the opacity of the element's stroke.

### Default

```ts
1
```

***

## strokeWidth

> **strokeWidth**: `number`

The width of the element's stroke in pixels.

### Default

```ts
2
```

***

## strokeStyle

> **strokeStyle**: `"solid"` | `"dashed"` | `"dotted"`

The style of the element's stroke.

### Default

```ts
"solid"
```

***

## distanceMarker

> **distanceMarker**: `boolean`

Whether a distance marker is shown at the midpoint of the path.

### Default

```ts
false
```

***

## routingMode

> **routingMode**: `null` | `"driving"` | `"cycling"` | `"walking"` | `"flying"`

Whether this represents a route, and if so, what mode of transport
is used.

If this is `null`, the path is not considered to be a route, so while it
can have a `distanceMarker`, it will does not have a start or end cap.

### Default

```ts
null
```

***

## endCaps

> **endCaps**: `boolean`

Whether or not to show Start and End caps on the path. This is
only available if the `routingMode` is set.

### Default

```ts
false
```
