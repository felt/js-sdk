***

Represents a button element in a panel.

# Properties

## type

> **type**: `"Button"`

***

## label

> **label**: `string`

The label to display in the button.

***

## onClick()

> **onClick**: () => `void`

Event handler for when the button is clicked.

### Returns

`void`

***

## variant?

> `optional` **variant**: `"primary"` | `"outlined"` | `"transparent"` | `"transparentThin"`

The style variant of the button.

* `"primary"`: A solid button with Felt's primary background color (pink).
* `"outlined"`: A button with a border and no background color.
* `"transparent"`: A button with no background color and no border.
* `"transparentThin"`: Same as `transparent` but with lighter font weight.

### Default Value

`"primary"`

***

## disabled?

> `optional` **disabled**: `boolean`

Whether the button is disabled.

### Default Value

`false`

***

## onCreate()?

> `optional` **onCreate**: () => `void`

A function to call when the element is created.

### Returns

`void`

***

## onDestroy()?

> `optional` **onDestroy**: () => `void`

A function to call when the element is destroyed.

### Returns

`void`

***

## id?

> `optional` **id**: `string`
