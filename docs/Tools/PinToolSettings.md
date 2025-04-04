***

# Properties

## color

> **color**: `string`

***

## frame

> **frame**: `null` | `"frame-circle"` | `"frame-square"`

***

## symbol

> **symbol**: [`PlaceSymbol`](PlaceSymbol.md)

***

## afterCreation

> **afterCreation**: `"enter name"` | `"add another"` | `"select"`

What to do after creating the Place element.

* `"enter name"`: Enter a name for the Place, focusing the name input.
* `"add another"`: Add another Place, leaving the tool still selected.
* `"select"`: Puts the tool down and selects the new Place element.

### Default Value

`"enter name"`
