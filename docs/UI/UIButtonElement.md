***

Represents a button element in a panel.

# Example

```typescript
{
  type: "Button",
  label: "Click me",
  onClick: () => alert("Button clicked"),
}
```

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

The action to perform when the button is clicked.

### Returns

`void`

***

## id

> **id**: `string`

The ID of the element.

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
