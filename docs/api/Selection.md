## Callbacks

### SelectionChangeParams

#### Properties

##### handler()

> **handler**: (`change`) => `void`

###### Parameters

| Parameter | Type                                              |
| --------- | ------------------------------------------------- |
| `change`  | [`SelectionChange`](Selection.md#selectionchange) |

###### Returns

`void`

***

### SelectionChange

The payload to the `onSelectionChange` handler.

#### Properties

##### selection

> **selection**: [`EntityIdentifier`](Selection.md#entityidentifier)\[]

The new selection. In the case where there are multiple entities selected,
the array describes the chronological and semeantic order of the selection.

Entities of the same type that are selected later will appear later in the
list, but there are cases where multiple entity types can be selected at once,
such as elements and features. In this case, the order of the *types* of entities
tells you which are considered more semantically important.

For example, if a feature and element are selected, the feature will be at the
tail of the list because pressing Escape will deselect the feature first, then
pressing Escape again will deselect the element.

## Entities

### EntityIdentifier

> **EntityIdentifier**: [`ElementIdentifier`](Selection.md#elementidentifier) | [`ElementGroupIdentifier`](Selection.md#elementgroupidentifier) | [`LayerIdentifier`](Selection.md#layeridentifier) | [`LayerGroupIdentifier`](Selection.md#layergroupidentifier) | [`FeatureIdentifier`](Selection.md#featureidentifier)

/\*\*

* An identifier for an entity on the map.
*
*

## Other

### ElementIdentifier

Identifies an element on the map.

#### Properties

##### type

> **type**: `"element"`

##### id

> **id**: `string`

***

### ElementGroupIdentifier

Identifies an element group.

#### Properties

##### type

> **type**: `"elementGroup"`

##### id

> **id**: `string`

***

### LayerIdentifier

Identifies a layer on the map.

#### Properties

##### type

> **type**: `"layer"`

##### id

> **id**: `string`

***

### LayerGroupIdentifier

Identifies a layer group on the map.

#### Properties

##### type

> **type**: `"layerGroup"`

##### id

> **id**: `string`

***

### FeatureIdentifier

Identifies a feature on the map, and the layer it belongs to.

#### Properties

##### type

> **type**: `"feature"`

##### layerId

> **layerId**: `string`

##### id

> **id**: `string` | `number`
