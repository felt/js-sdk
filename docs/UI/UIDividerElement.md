***

Represents a divider element in a panel.
This element is used to separate other elements in a panel.
It is rendered as a gray horizontal line of 1px height.

# Example

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

# Properties

## type

> **type**: `"Divider"`

***

## id

> **id**: `string`

The ID of the element.

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
