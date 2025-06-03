***

The input panel to add to the map by using the [UiController.addPanelElement](UiController.md#addpanelelement) method.

# Remarks

For the sake of convenience, the `id` of the panel and its elements are optional,
but it is recommended to provide them if you want to be able to perform updates.

# Properties

## items

> **items**: [`PanelUIElementsInput`](PanelUIElementsInput.md)\[]

The elements to add to the panel body.

***

## type?

> `optional` **type**: `"Panel"`

***

## title?

> `optional` **title**: `string`

***

## onClose()?

> `optional` **onClose**: (...`args`: `unknown`\[]) => `void`

### Parameters

| Parameter | Type         |
| --------- | ------------ |
| ...`args` | `unknown`\[] |

### Returns

`void`

***

## footer?

> `optional` **footer**: [`PanelUIElementsInput`](PanelUIElementsInput.md)\[]

The elements to add to the panel footer.

***

## onCreate()?

> `optional` **onCreate**: (...`args`: `unknown`\[]) => `void`

A function to call when the element is created.

### Parameters

| Parameter | Type         | Description                                  |
| --------- | ------------ | -------------------------------------------- |
| ...`args` | `unknown`\[] | This function doesn't receive any parameters |

### Returns

`void`

***

## onDestroy()?

> `optional` **onDestroy**: (...`args`: `unknown`\[]) => `void`

A function to call when the element is destroyed.

### Parameters

| Parameter | Type         | Description                                  |
| --------- | ------------ | -------------------------------------------- |
| ...`args` | `unknown`\[] | This function doesn't receive any parameters |

### Returns

`void`

***

## id?

> `optional` **id**: `string`
