***

The Elements controller allows you to get information about the elements on the
map, and make changes to their visibility.

# Extended by

* [`FeltController`](../Main/FeltController.md)

# Methods

## getElement()

> **getElement**(`id`: `string`): `Promise`\<`null` | [`Element`](Element.md)>

Get a single element from the map by its id.

### Parameters

| Parameter | Type     | Description                            |
| --------- | -------- | -------------------------------------- |
| `id`      | `string` | The id of the element you want to get. |

### Returns

`Promise`\<`null` | [`Element`](Element.md)>

The requested element.

### Example

```typescript
const element = await felt.getElement("element-1");
```

***

## getElementGeometry()

> **getElementGeometry**(`id`: `string`): `Promise`\<`null` | [`GeoJsonGeometry`](../Shared/GeoJsonGeometry.md)>

Get the geometry of an element.

### Parameters

| Parameter | Type     | Description                                            |
| --------- | -------- | ------------------------------------------------------ |
| `id`      | `string` | The id of the element you want to get the geometry of. |

### Returns

`Promise`\<`null` | [`GeoJsonGeometry`](../Shared/GeoJsonGeometry.md)>

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

### Parameters

| Parameter     | Type                                                | Description                                                     |
| ------------- | --------------------------------------------------- | --------------------------------------------------------------- |
| `constraint`? | [`GetElementsConstraint`](GetElementsConstraint.md) | The constraints to apply to the elements returned from the map. |

### Returns

`Promise`\<(`null` | [`Element`](Element.md))\[]>

All elements on the map.

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

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `id`      | `string` |

### Returns

`Promise`\<`null` | [`ElementGroup`](ElementGroup.md)>

The requested element group.

### Example

```typescript
const elementGroup = await felt.getElementGroup("element-group-1");
```

***

## getElementGroups()

> **getElementGroups**(`constraint`?: [`GetElementGroupsConstraint`](GetElementGroupsConstraint.md)): `Promise`\<(`null` | [`ElementGroup`](ElementGroup.md))\[]>

Gets element groups from the map, according to the filters supplied. If no
constraints are supplied, all element groups will be returned in rendering order.

### Parameters

| Parameter     | Type                                                          | Description                                                           |
| ------------- | ------------------------------------------------------------- | --------------------------------------------------------------------- |
| `constraint`? | [`GetElementGroupsConstraint`](GetElementGroupsConstraint.md) | The constraints to apply to the element groups returned from the map. |

### Returns

`Promise`\<(`null` | [`ElementGroup`](ElementGroup.md))\[]>

The requested element groups.

### Example

```typescript
const elementGroups = await felt.getElementGroups({ ids: ["element-group-1", "element-group-2"] });
```

***

## setElementGroupVisibility()

> **setElementGroupVisibility**(`visibility`: [`SetVisibilityRequest`](../Shared/SetVisibilityRequest.md)): `Promise`\<`void`>

Hide or show element groups with the given ids.

### Parameters

| Parameter    | Type                                                        |
| ------------ | ----------------------------------------------------------- |
| `visibility` | [`SetVisibilityRequest`](../Shared/SetVisibilityRequest.md) |

### Returns

`Promise`\<`void`>

### Example

```typescript
felt.setElementGroupVisibility({ show: ["element-group-1", "element-group-2"], hide: ["element-group-3"] });
```

***

## createElement()

> **createElement**(`element`: [`ElementCreate`](ElementCreate.md)): `Promise`\<[`Element`](Element.md)>

Create a new element on the map.

### Parameters

| Parameter | Type                                |
| --------- | ----------------------------------- |
| `element` | [`ElementCreate`](ElementCreate.md) |

### Returns

`Promise`\<[`Element`](Element.md)>

### Example

```typescript
const element = await felt.createElement({ type: "Place", coordinates: [10, 10] });
```

***

## updateElement()

> **updateElement**(`element`: [`ElementUpdate`](ElementUpdate.md)): `Promise`\<[`Element`](Element.md)>

Update an element on the map.

### Parameters

| Parameter | Type                                |
| --------- | ----------------------------------- |
| `element` | [`ElementUpdate`](ElementUpdate.md) |

### Returns

`Promise`\<[`Element`](Element.md)>

### Example

```typescript
// Update a place element's coordinates
await felt.updateElement({
  id: "element-1",
  coordinates: [10, 20]
});

// Update a polygon's style
await felt.updateElement({
  id: "element-2",
  color: "#FF0000",
  fillOpacity: 0.5
});
```

***

## deleteElement()

> **deleteElement**(`id`: `string`): `Promise`\<`void`>

Delete an element from the map.

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `id`      | `string` |

### Returns

`Promise`\<`void`>

### Example

```typescript
await felt.deleteElement("element-1");
```

# Events

## onElementCreate()

> **onElementCreate**(`args`: \{ `handler`: (`change`: [`ElementChangeCallbackParams`](ElementChangeCallbackParams.md)) => `void`; }): `VoidFunction`

Adds a listener for when an element is created.

### Parameters

| Parameter      | Type                                                                                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------- | ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `args`         | \{ `handler`: (`change`: [`ElementChangeCallbackParams`](ElementChangeCallbackParams.md)) => `void`; } | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `args.handler` | (`change`: [`ElementChangeCallbackParams`](ElementChangeCallbackParams.md)) => `void`                  | The handler that is called when an element is created. This will fire when elements are created programatically, or when the user starts creating an element with a drawing tool. When the user creates an element with a drawing tool, it can begin in an invalid state, such as if you've just placed a single point in a polygon. You can use the `isBeingCreated` property to determine if the element is still being created by a drawing tool. If you want to know when the element is finished being created, you can use the `onToolCreateElementEnd` listener. |

### Returns

`VoidFunction`

A function to unsubscribe from the listener

### Example

```typescript
const unsubscribe = felt.onElementCreate({
  handler: (element) => console.log(element.id),
});

// later on...
unsubscribe();
```

***

## onElementCreateEnd()

> **onElementCreateEnd**(`args`: \{ `handler`: (`params`: \{ `element`: [`Element`](Element.md); }) => `void`; }): `VoidFunction`

Listens for when a new element is finished being created by a drawing tool.

This differs from the `onElementCreate` listener, which fires whenever an
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

A function to unsubscribe from the listener

### Example

```typescript
const unsubscribe = felt.onToolCreatedElement({
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
or programatically.

Like the `onElementCreate` listener, this will fire when an element is
still being created by a drawing tool.

You can check the `isBeingCreated` property to determine if the element is
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

A function to unsubscribe from the listener

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

### Parameters

| Parameter         | Type                                                           | Description                                             |
| ----------------- | -------------------------------------------------------------- | ------------------------------------------------------- |
| `args`            | \{ `options`: \{ `id`: `string`; }; `handler`: () => `void`; } | -                                                       |
| `args.options`    | \{ `id`: `string`; }                                           | -                                                       |
| `args.options.id` | `string`                                                       | The id of the element to listen for deletions of.       |
| `args.handler`    | () => `void`                                                   | The handler that is called when the element is deleted. |

### Returns

`VoidFunction`

A function to unsubscribe from the listener

### Example

```typescript
const unsubscribe = felt.onElementDelete({
  options: { id: "element-1" },
  handler: (element) => console.log(element.id),
});

// later on...
unsubscribe();
```

***

## onElementGroupChange()

> **onElementGroupChange**(`args`: \{ `options`: \{ `id`: `string`; }; `handler`: (`change`: [`ElementGroupChangeCallbackParams`](ElementGroupChangeCallbackParams.md)) => `void`; }): `VoidFunction`

Adds a listener for when an element group changes.

### Parameters

| Parameter         | Type                                                                                                                                              |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `args`            | \{ `options`: \{ `id`: `string`; }; `handler`: (`change`: [`ElementGroupChangeCallbackParams`](ElementGroupChangeCallbackParams.md)) => `void`; } |
| `args.options`    | \{ `id`: `string`; }                                                                                                                              |
| `args.options.id` | `string`                                                                                                                                          |
| `args.handler`    | (`change`: [`ElementGroupChangeCallbackParams`](ElementGroupChangeCallbackParams.md)) => `void`                                                   |

### Returns

`VoidFunction`

A function to unsubscribe from the listener

### Example

```typescript
const unsubscribe = felt.onElementGroupChange({
  options: { id: "element-group-1" },
  handler: elementGroup => console.log(elementGroup.id),
});

// later on...
unsubscribe();
```
