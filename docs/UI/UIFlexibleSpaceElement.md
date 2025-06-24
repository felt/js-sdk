***

Represents a flexible space element in a button group.
Useful to customize the spacing between button group items.

# Example

Buttons with a flexible space between makes them more visually separated.

```typescript
{
  type: "ButtonGroup",
  items: [
    { type: "Button", label: "Button 1", onClick: () => {} },
    { type: "FlexibleSpace" },
    { type: "Button", label: "Button 2", onClick: () => {} },
  ],
}
```

# Properties

## type

> **type**: `"FlexibleSpace"`

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
