***

The Elements controller allows you to get information about the elements on the
map, and make changes to their visibility.

# Extended by

* [`FeltController`](../Main/FeltController.md)

# Methods

## getElement()

> **getElement**(`id`: `string`): `Promise`\<`null` | [`Element`](Element.md)>

Get a single element from the map by its id.

Use this method when you know the specific ID of an element and want to retrieve
its current state. This is more efficient than getting all elements and filtering.

### Parameters

| Parameter | Type     | Description                            |
| --------- | -------- | -------------------------------------- |
| `id`      | `string` | The id of the element you want to get. |

### Returns

`Promise`\<`null` | [`Element`](Element.md)>

A promise that resolves to the requested element, or `null` if not found.

### Example

```typescript
const element = await felt.getElement("element-1");
```

***

## getElementGeometry()

> **getElementGeometry**(`id`: `string`): `Promise`\<`null` | [`GeoJsonGeometry`](../Shared/GeoJsonGeometry.md)>

Get the geometry of an element in GeoJSON geometry format.

For most element types, the geometry returned is based on the `coordinates`
property of the element, with some differences:

* For Circle elements, the geometry is a Polygon drawn from the `center` and
  `radius` properties.

* Path elements become MultiLineString geometries.

* Marker elements return a MultiLineString of the path traced by the user
  as they drew the marker. Note that this is not the polygon formed by filled-in
  "pen" stroke, which doesn't exactly follow the path traced by the user as it
  is smoothed and interpolated to create a continuous line.

* Text, Note and Image elements do not return geometry, so will return `null`.

Use this method when you need the geometric representation of an element for
spatial analysis or visualization purposes.

### Parameters

| Parameter | Type     | Description                                            |
| --------- | -------- | ------------------------------------------------------ |
| `id`      | `string` | The id of the element you want to get the geometry of. |

### Returns

`Promise`\<`null` | [`GeoJsonGeometry`](../Shared/GeoJsonGeometry.md)>

A promise that resolves to the element's geometry in GeoJSON format, or `null` if the element has no geometry.

### Example

```typescript
const geometry = await felt.getElementGeometry("element-1");
console.log(geometry?.type, geometry?.coordinates);
```

***

## getElements()

> **getElements**(`constraint`?: [`GetElementsConstraint`](GetElementsConstraint.md)): `Promise`\<(`null` | [`Element`](Element.md))\[]>

Gets elements from the map, according to the constraints supplied. If no
constraints are supplied, all elements will be returned.

Use this method to retrieve multiple elements, optionally filtered by constraints.
This is useful for bulk operations or when you need to analyze all elements on the map.

### Parameters

| Parameter     | Type                                                | Description                                                          |
| ------------- | --------------------------------------------------- | -------------------------------------------------------------------- |
| `constraint`? | [`GetElementsConstraint`](GetElementsConstraint.md) | Optional constraints to apply to the elements returned from the map. |

### Returns

`Promise`\<(`null` | [`Element`](Element.md))\[]>

A promise that resolves to an array of elements, ordered by the order specified in Felt.

### Remarks

The elements in the map, ordered by the order specified in Felt. This is not
necessarily the order that they are drawn in, as Felt draws points above
lines and lines above polygons, for instance.

### Example

```typescript
const elements = await felt.getElements();
```

***

## getElementGroup()

> **getElementGroup**(`id`: `string`): `Promise`\<`null` | [`ElementGroup`](ElementGroup.md)>

Get an element group from the map by its id.

Element groups allow you to organize related elements together and control
their visibility as a unit.

### Parameters

| Parameter | Type     | Description                                  |
| --------- | -------- | -------------------------------------------- |
| `id`      | `string` | The id of the element group you want to get. |

### Returns

`Promise`\<`null` | [`ElementGroup`](ElementGroup.md)>

A promise that resolves to the requested element group, or `null` if not found.

### Example

```typescript
const elementGroup = await felt.getElementGroup("element-group-1");
```

***

## getElementGroups()

> **getElementGroups**(`constraint`?: [`GetElementGroupsConstraint`](GetElementGroupsConstraint.md)): `Promise`\<(`null` | [`ElementGroup`](ElementGroup.md))\[]>

Gets element groups from the map, according to the filters supplied. If no
constraints are supplied, all element groups will be returned in rendering order.

Use this method to retrieve multiple element groups, optionally filtered by constraints.
This is useful for bulk operations on element groups.

### Parameters

| Parameter     | Type                                                          | Description                                                                |
| ------------- | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `constraint`? | [`GetElementGroupsConstraint`](GetElementGroupsConstraint.md) | Optional constraints to apply to the element groups returned from the map. |

### Returns

`Promise`\<(`null` | [`ElementGroup`](ElementGroup.md))\[]>

A promise that resolves to an array of element groups in rendering order.

### Example

```typescript
const elementGroups = await felt.getElementGroups({ ids: ["element-group-1", "element-group-2"] });
```

***

## setElementGroupVisibility()

> **setElementGroupVisibility**(`visibility`: [`SetVisibilityRequest`](../Shared/SetVisibilityRequest.md)): `Promise`\<`void`>

Hide or show element groups with the given ids.

Use this method to control the visibility of multiple element groups at once.
This is more efficient than hiding/showing individual elements.

### Parameters

| Parameter    | Type                                                        | Description                                      |
| ------------ | ----------------------------------------------------------- | ------------------------------------------------ |
| `visibility` | [`SetVisibilityRequest`](../Shared/SetVisibilityRequest.md) | The visibility configuration for element groups. |

### Returns

`Promise`\<`void`>

A promise that resolves when the visibility changes are applied.

### Example

```typescript
felt.setElementGroupVisibility({ show: ["element-group-1", "element-group-2"], hide: ["element-group-3"] });
```

***

## createElement()

> **createElement**(`element`: [`ElementCreate`](ElementCreate.md)): `Promise`\<[`Element`](Element.md)>

Create a new element on the map.

Use this method to programmatically create elements on the map. Elements created
via the SDK are only available to the current session and are not persisted.

### Parameters

| Parameter | Type                                | Description                          |
| --------- | ----------------------------------- | ------------------------------------ |
| `element` | [`ElementCreate`](ElementCreate.md) | The element configuration to create. |

### Returns

`Promise`\<[`Element`](Element.md)>

A promise that resolves to the created element.

### Example

```typescript
const element = await felt.createElement({ type: "Place", coordinates: [10, 10] });
```

***

## updateElement()

> **updateElement**(`element`: [`ElementUpdate`](ElementUpdate.md)): `Promise`\<[`Element`](Element.md)>

Update an element on the map. The element type must be specified.

Use this method to modify existing elements. You can update properties like
coordinates, styling, and metadata.

### Parameters

| Parameter | Type                                | Description                       |
| --------- | ----------------------------------- | --------------------------------- |
| `element` | [`ElementUpdate`](ElementUpdate.md) | The element update configuration. |

### Returns

`Promise`\<[`Element`](Element.md)>

A promise that resolves to the updated element.

### Example

```typescript
// Update a place element's coordinates
await felt.updateElement({
  id: "element-1",
  type: "Place",
  coordinates: [10, 20]
});

// Update a polygon's style
await felt.updateElement({
  id: "element-2",
  type: "Polygon",
  color: "#ABC123",
  fillOpacity: 0.5
});
```

***

## deleteElement()

> **deleteElement**(`id`: `string`): `Promise`\<`void`>

Delete an element from the map.

Use this method to remove elements from the map. This operation cannot be undone.

### Parameters

| Parameter | Type     | Description                      |
| --------- | -------- | -------------------------------- |
| `id`      | `string` | The id of the element to delete. |

### Returns

`Promise`\<`void`>

A promise that resolves when the element is deleted.

### Example

```typescript
await felt.deleteElement("element-1");
```

# Events

## onElementCreate()

> **onElementCreate**(`args`: \{ `handler`: (`change`: [`ElementChangeCallbackParams`](ElementChangeCallbackParams.md)) => `void`; }): `VoidFunction`

Adds a listener for when an element is created.

This will fire when elements are created programmatically, or when the
user starts creating an element with a drawing tool.

When the user creates an element with a drawing tool, it can begin in
an invalid state, such as if you've just placed a single point in a polygon.

You can use the `isBeingCreated` property to determine if the element is
still being created by a drawing tool.

If you want to know when the element is finished being created, you can
use the [\`onElementCreateEnd\`](ElementsController.md#onelementcreateend) listener.

### Parameters

| Parameter      | Type                                                                                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `args`         | \{ `handler`: (`change`: [`ElementChangeCallbackParams`](ElementChangeCallbackParams.md)) => `void`; } | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `args.handler` | (`change`: [`ElementChangeCallbackParams`](ElementChangeCallbackParams.md)) => `void`                  | The handler that is called when an element is created. This will fire when elements are created programmatically, or when the user starts creating an element with a drawing tool. When the user creates an element with a drawing tool, it can begin in an invalid state, such as if you've just placed a single point in a polygon. You can use the `isBeingCreated` property to determine if the element is still being created by a drawing tool. If you want to know when the element is finished being created, you can use the [\`onElementCreateEnd\`](ElementsController.md#onelementcreateend) listener. |

### Returns

`VoidFunction`

A function to unsubscribe from the listener.

### Example

```typescript
const unsubscribe = felt.onElementCreate({
  handler: ({isBeingCreated, element}) => console.log(element.id),
});

// later on...
unsubscribe();
```

***

## onElementCreateEnd()

> **onElementCreateEnd**(`args`: \{ `handler`: (`params`: \{ `element`: [`Element`](Element.md); }) => `void`; }): `VoidFunction`

Listens for when a new element is finished being created by a drawing tool.

This differs from the [\`onElementCreate\`](ElementsController.md#onelementcreate) listener, which fires whenever an
element is first created. This fires when the user finishes creating an element
which could be after a series of interactions.

For example, when creating a polygon, the user places a series of points then
finishes by pressing Enter or Escape. Or when creating a Place element, they
add the marker, type a label, then finally deselect the element.

### Parameters

| Parameter      | Type                                                                            | Description                                    |
| -------------- | ------------------------------------------------------------------------------- | ---------------------------------------------- |
| `args`         | \{ `handler`: (`params`: \{ `element`: [`Element`](Element.md); }) => `void`; } | -                                              |
| `args.handler` | (`params`: \{ `element`: [`Element`](Element.md); }) => `void`                  | The handler to call whenever this event fires. |

### Returns

`VoidFunction`

A function to unsubscribe from the listener.

### Example

```typescript
const unsubscribe = felt.onElementCreateEnd({
  handler: (params) => console.log(params),
});

// later on...
unsubscribe();
```

***

## onElementChange()

> **onElementChange**(`args`: \{ `options`: \{ `id`: `string`; }; `handler`: (`change`: [`ElementChangeCallbackParams`](ElementChangeCallbackParams.md)) => `void`; }): `VoidFunction`

Adds a listener for when an element changes.

This will fire when an element is being edited, either on the map by the user
or programmatically.

Like the [\`onElementCreate\`](ElementsController.md#onelementcreate) listener, this will fire when an element is
still being created by a drawing tool.

You can check the [\`isBeingCreated\`](ElementChangeCallbackParams.md#isbeingcreated) property to determine if the element is
still being created by a drawing tool.

### Parameters

| Parameter         | Type                                                                                                                                    | Description                                          |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `args`            | \{ `options`: \{ `id`: `string`; }; `handler`: (`change`: [`ElementChangeCallbackParams`](ElementChangeCallbackParams.md)) => `void`; } | -                                                    |
| `args.options`    | \{ `id`: `string`; }                                                                                                                    | -                                                    |
| `args.options.id` | `string`                                                                                                                                | The id of the element to listen for changes to.      |
| `args.handler`    | (`change`: [`ElementChangeCallbackParams`](ElementChangeCallbackParams.md)) => `void`                                                   | The handler that is called when the element changes. |

### Returns

`VoidFunction`

A function to unsubscribe from the listener.

### Example

```typescript
const unsubscribe = felt.onElementChange({
  options: { id: "element-1" },
  handler: ({element}) => console.log(element.id),
});

// later on...
unsubscribe();
```

***

## onElementDelete()

> **onElementDelete**(`args`: \{ `options`: \{ `id`: `string`; }; `handler`: () => `void`; }): `VoidFunction`

Adds a listener for when an element is deleted.

Use this to react to element deletions, such as cleaning up related data
or updating your application state.

### Parameters

| Parameter         | Type                                                           | Description                                             |
| ----------------- | -------------------------------------------------------------- | ------------------------------------------------------- |
| `args`            | \{ `options`: \{ `id`: `string`; }; `handler`: () => `void`; } | -                                                       |
| `args.options`    | \{ `id`: `string`; }                                           | -                                                       |
| `args.options.id` | `string`                                                       | The id of the element to listen for deletions of.       |
| `args.handler`    | () => `void`                                                   | The handler that is called when the element is deleted. |

### Returns

`VoidFunction`

A function to unsubscribe from the listener.

### Example

```typescript
const unsubscribe = felt.onElementDelete({
  options: { id: "element-1" },
  handler: () => console.log("element-1 deleted"),
});

// later on...
unsubscribe();
```

***

## onElementGroupChange()

> **onElementGroupChange**(`args`: \{ `options`: \{ `id`: `string`; }; `handler`: (`change`: [`ElementGroupChangeCallbackParams`](ElementGroupChangeCallbackParams.md)) => `void`; }): `VoidFunction`

Adds a listener for when an element group changes.

Use this to react to changes in element groups, such as when elements are
added to or removed from groups.

### Parameters

| Parameter         | Type                                                                                                                                              |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `args`            | \{ `options`: \{ `id`: `string`; }; `handler`: (`change`: [`ElementGroupChangeCallbackParams`](ElementGroupChangeCallbackParams.md)) => `void`; } |
| `args.options`    | \{ `id`: `string`; }                                                                                                                              |
| `args.options.id` | `string`                                                                                                                                          |
| `args.handler`    | (`change`: [`ElementGroupChangeCallbackParams`](ElementGroupChangeCallbackParams.md)) => `void`                                                   |

### Returns

`VoidFunction`

A function to unsubscribe from the listener.

### Example

```typescript
const unsubscribe = felt.onElementGroupChange({
  options: { id: "element-group-1" },
  handler: elementGroup => console.log(elementGroup.id),
});

// later on...
unsubscribe();
```
