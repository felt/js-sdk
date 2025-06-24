***

Represents an action trigger.
It can be added to the map by using the [UiController.createActionTrigger](UiController.md#createactiontrigger) method.

# Properties

## label

> **label**: `string`

The label of the action trigger.

***

## onTrigger()

> **onTrigger**: (`args`: \{ `id`: `string`; }) => `void`

The function to call when the action trigger is triggered.

### Parameters

| Parameter | Type                 | Description                           |
| --------- | -------------------- | ------------------------------------- |
| `args`    | \{ `id`: `string`; } | The arguments passed to the function. |
| `args.id` | `string`             | The id of the action trigger.         |

### Returns

`void`

***

## id?

> `optional` **id**: `string`

***

## disabled?

> `optional` **disabled**: `boolean`

Whether the action trigger is disabled or not.

***

## type?

> `optional` **type**: `undefined`

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
