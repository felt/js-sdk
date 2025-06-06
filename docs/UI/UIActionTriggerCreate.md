***

Represents an action trigger.
It can be added to the map by using the [UiController.createActionTrigger](UiController.md#createactiontrigger) method.

# Properties

## label

> **label**: `string`

The label of the action trigger.

***

## onTrigger()

> **onTrigger**: () => `void`

The function to call when the action trigger is triggered.

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
