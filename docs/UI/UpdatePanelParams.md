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

## onClickClose()?

> `optional` **onClickClose**: () => `void`

A function to call when panel's close button is clicked.

### Returns

`void`

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
