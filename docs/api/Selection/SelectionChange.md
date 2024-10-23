***

The payload to the `onSelectionChange` handler.

## Properties

### selection

> **selection**: [`EntityIdentifier`](EntityIdentifier.md)\[]

The new selection. In the case where there are multiple entities selected,
the array describes the chronological and semeantic order of the selection.

Entities of the same type that are selected later will appear later in the
list, but there are cases where multiple entity types can be selected at once,
such as elements and features. In this case, the order of the *types* of entities
tells you which are considered more semantically important.

For example, if a feature and element are selected, the feature will be at the
tail of the list because pressing Escape will deselect the feature first, then
pressing Escape again will deselect the element.
