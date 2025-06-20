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

## frame

> **frame**: `null` | `"frame-circle"` | `"frame-square"`

The frame that is rendered around the Place's symbol. This is
only available for non-emoji symbols.

***

## showInspector

> **showInspector**: `boolean`

Whether to show the tool inspector.

### Default Value

`false`

***

## symbol

> **symbol**: [`PlaceSymbol`](PlaceSymbol.md)

The symbol that is rendered for the Place.

This can be an emoji by using colon-enclosed characters (e.g. `":smiley:"`)
or one of the symbols available in Felt's symbol library.

You can see the available symbols in the Felt UI when editing a Place
by hovering a symbol and converting the tooltip to kebab-case. For example,
the "Oil barrel" symbol is `oil-barrel`.

***

## afterCreation

> **afterCreation**: `"enter name"` | `"add another"` | `"select"`

What to do after creating the Place element.

* `"enter name"`: Enter a name for the Place, focusing the name input.
* `"add another"`: Add another Place, leaving the tool still selected.
* `"select"`: Puts the tool down and selects the new Place element.

### Default Value

`"enter name"`
