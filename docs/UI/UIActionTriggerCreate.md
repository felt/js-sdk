***

Represents an action trigger.
It can be added to the map by using the [UiController.createActionTrigger](UiController.md#createactiontrigger) method.

# Properties

## label

> **label**: `string`

***

## onClick()

> **onClick**: () => `void`

The function to call when the action trigger is clicked.

### Returns

`void`

***

## type?

> `optional` **type**: `"ActionTrigger"`

***

## disabled?

> `optional` **disabled**: `boolean`

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
