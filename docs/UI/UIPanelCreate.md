***

The parameters for creating a panel by using [UiController.createPanel](UiController.md#createpanel).

# See

[UIPanel](UIPanel.md) for more information about panels.

# Remarks

`id` is optional but recommended if you want to be able to perform updates.

# Properties

## body

> **body**: [`UIPanelElementsCreate`](UIPanelElementsCreate.md)\[]

The elements to add to the panel body.

***

## title?

> `optional` **title**: `string`

The title to display in the panel header.

***

## closable?

> `optional` **closable**: `boolean`

Whether the panel can be closed.
If `true`, a close button will be displayed in the panel header.

### Default Value

`false`

***

## onClickClose()?

> `optional` **onClickClose**: () => [`PromiseOrNot`](PromiseOrNot.md)\<`boolean` | `void`>

A function to call when panel's close button is clicked.
By default, when panel's close button is clicked, the panel will be closed.
In order to prevent default behavior, you can return `false` from the function.

### Returns

[`PromiseOrNot`](PromiseOrNot.md)\<`boolean` | `void`>

### Remarks

Panel's close button is only visible if `closable` is `true`.

***

## type?

> `optional` **type**: `"Panel"`

***

## footer?

> `optional` **footer**: [`UIPanelElementsCreate`](UIPanelElementsCreate.md)\[]

The elements to add to the panel footer.

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

The ID of the element.

### Remarks

If not provided, the element will be assigned a random ID, but it is recommended to provide it
to perform further updates on the element.

If provided, it must be unique within the UI.

### Default Value

`undefined`
