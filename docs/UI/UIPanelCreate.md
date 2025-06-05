***

The panel to add to the map by using the [UiController.createPanel](UiController.md#createpanel) method.

# Remarks

For the sake of convenience, the `id` of the panel and its elements are optional,
but it is recommended to provide them if you want to be able to perform updates.

# Properties

## body

> **body**: [`UIPanelElementsCreate`](UIPanelElementsCreate.md)\[]

The elements to add to the panel body.

***

## type?

> `optional` **type**: `"Panel"`

***

## title?

> `optional` **title**: `string`

The title to display in the panel header.

***

## footer?

> `optional` **footer**: [`UIPanelElementsCreate`](UIPanelElementsCreate.md)\[]

The elements to add to the panel footer.

***

## onClose()?

> `optional` **onClose**: () => `void`

A function to call when panel's close button is clicked.

### Returns

`void`

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
