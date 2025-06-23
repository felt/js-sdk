***

# Properties

## id

> **id**: `string`

The ID of the element.

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

## body?

> `optional` **body**: [`UIPanelElementsCreate`](UIPanelElementsCreate.md)\[]

The elements to add to the panel body.

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
