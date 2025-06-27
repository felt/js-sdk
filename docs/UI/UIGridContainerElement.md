***

Represents a grid container element in a panel.
A grid container is a container that displays its children in a grid layout.

# Example

```typescript
{
  type: "grid",
}

# Properties

## type

> **type**: `"Grid"`

***

## items

> **items**: [`UIPanelElement`](UIPanelElement.md)[]

The items to add to the grid container.
Multiple grid containers can be nested to create more complex layouts.

***

## id

> **id**: `string`

The ID of the element.

***

## grid?

> `optional` **grid**: `string`

The grid to use for the container.

***

## onCreate()?

> `optional` **onCreate**: (`args`: \{ `id`: `string`; \}) => `void`

A function to call when the element is created.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `args` | \{ `id`: `string`; \} | The arguments passed to the function. |
| `args.id` | `string` | The id of the element. |

### Returns

`void`

***

## onDestroy()?

> `optional` **onDestroy**: (`args`: \{ `id`: `string`; \}) => `void`

A function to call when the element is destroyed.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `args` | \{ `id`: `string`; \} | The arguments passed to the function. |
| `args.id` | `string` | The id of the element. |

### Returns

`void`
```
