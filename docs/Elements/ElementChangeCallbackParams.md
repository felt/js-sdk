***

The parameters for the `onElementChange` and the `onElementCreate` listeners.

# Properties

## element

> **element**: `null` | [`Element`](Element.md)

The new data for the element or null if the element was removed.

***

## isBeingCreated

> **isBeingCreated**: `boolean`

Whether or not this element is still being created by a drawing tool.

For example, if the user begins drawing a polygon, they need to place
multiple points until they've ultimately completed the polygon. All
the time they are still placing points, this will be true.

For elements that require text entry (such as Places, Text and Notes)
this will be true all the time the user is typing text until the point
at which the user finishes, by pressing Escape for example.

If the user is editing an existing element, this will be false.

For elements that are created programatically, this will be false.
