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

> `optional` **onCreate**: (`args`: \{ `id`: `string`; }) => `void`

A function to call when the element is created.

### Parameters

| Parameter | Type                 | Description                           |
| --------- | -------------------- | ------------------------------------- |
| `args`    | \{ `id`: `string`; } | The arguments passed to the function. |
| `args.id` | `string`             | The id of the element.                |

### Returns

`void`

***

## onDestroy()?

> `optional` **onDestroy**: (`args`: \{ `id`: `string`; }) => `void`

A function to call when the element is destroyed.

### Parameters

| Parameter | Type                 | Description                           |
| --------- | -------------------- | ------------------------------------- |
| `args`    | \{ `id`: `string`; } | The arguments passed to the function. |
| `args.id` | `string`             | The id of the element.                |

### Returns

`void`
