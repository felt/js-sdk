***

Represents a feature contextual action after creation (with generated id).

# Properties

## label

> **label**: `string`

The label of the contextual action.

***

## onTrigger()

> **onTrigger**: (`args`: \{ `featureId`: `string`; `layerId`: `string`; }) => `void`

The function to call when the contextual action is triggered.

### Parameters

| Parameter        | Type                                             | Description                           |
| ---------------- | ------------------------------------------------ | ------------------------------------- |
| `args`           | \{ `featureId`: `string`; `layerId`: `string`; } | The arguments passed to the function. |
| `args.featureId` | `string`                                         | The id of the feature.                |
| `args.layerId`   | `string`                                         | The id of the layer.                  |

### Returns

`void`

***

## id

> **id**: `string`

The unique identifier of the contextual action.

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
