***

The Elements controller allows you to get information about the elements on the
map, and make changes to their visibility.

## Extended by

* [`FeltController`](../Main/FeltController.md)

## Methods

### getElement()

> **getElement**(`id`: `string`): `Promise`\<`null` | [`Element`](Element.md)>

Get a single element from the map by its id.

#### Parameters

| Parameter | Type     | Description                            |
| --------- | -------- | -------------------------------------- |
| `id`      | `string` | The id of the element you want to get. |

#### Returns

`Promise`\<`null` | [`Element`](Element.md)>

The requested element.

#### Example

```typescript
const element = await felt.getElement("element-1");
```

***

### getElementGeometry()

> **getElementGeometry**(`id`: `string`): `Promise`\<`null` | [`Geometry`](../Shared/Geometry.md)>

Get the geometry of an element.

#### Parameters

| Parameter | Type     | Description                                            |
| --------- | -------- | ------------------------------------------------------ |
| `id`      | `string` | The id of the element you want to get the geometry of. |

#### Returns

`Promise`\<`null` | [`Geometry`](../Shared/Geometry.md)>

#### Example

```typescript
const geometry = await felt.getElementGeometry("element-1");
console.log(geometry?.type, geometry?.coordinates);
```

***

### getElements()

> **getElements**(`constraint`?: [`GetElementsConstraint`](GetElementsConstraint.md)): `Promise`\<(`null` | [`Element`](Element.md))\[]>

Gets elements from the map, according to the constraints supplied. If no
constraints are supplied, all elements will be returned.

#### Parameters

| Parameter     | Type                                                | Description                                                     |
| ------------- | --------------------------------------------------- | --------------------------------------------------------------- |
| `constraint`? | [`GetElementsConstraint`](GetElementsConstraint.md) | The constraints to apply to the elements returned from the map. |

#### Returns

`Promise`\<(`null` | [`Element`](Element.md))\[]>

All elements on the map.

#### Remarks

The elements in the map, ordered by the order specified in Felt. This is not
necessarily the order that they are drawn in, as Felt draws points above
lines and lines above polygons, for instance.

#### Example

```typescript
const elements = await felt.getElements();
```

***

### getElementGroup()

> **getElementGroup**(`id`: `string`): `Promise`\<`null` | [`ElementGroup`](ElementGroup.md)>

Get an element group from the map by its id.

#### Parameters

| Parameter | Type     |
| --------- | -------- |
| `id`      | `string` |

#### Returns

`Promise`\<`null` | [`ElementGroup`](ElementGroup.md)>

The requested element group.

#### Example

```typescript
felt.getElementGroup("element-group-1");
```

***

### getElementGroups()

> **getElementGroups**(`constraint`?: [`GetElementGroupsConstraint`](GetElementGroupsConstraint.md)): `Promise`\<(`null` | [`ElementGroup`](ElementGroup.md))\[]>

Gets element groups from the map, according to the filters supplied. If no
constraints are supplied, all element groups will be returned in rendering order.

#### Parameters

| Parameter     | Type                                                          | Description                                                           |
| ------------- | ------------------------------------------------------------- | --------------------------------------------------------------------- |
| `constraint`? | [`GetElementGroupsConstraint`](GetElementGroupsConstraint.md) | The constraints to apply to the element groups returned from the map. |

#### Returns

`Promise`\<(`null` | [`ElementGroup`](ElementGroup.md))\[]>

The requested element groups.

#### Example

```typescript
const elementGroups = await felt.getElementGroups({ ids: ["element-group-1", "element-group-2"] });
```

***

### setElementGroupVisibility()

> **setElementGroupVisibility**(`visibility`: [`SetVisibilityRequest`](../Shared/SetVisibilityRequest.md)): `Promise`\<`void`>

Hide or show element groups with the given ids.

#### Parameters

| Parameter    | Type                                                        |
| ------------ | ----------------------------------------------------------- |
| `visibility` | [`SetVisibilityRequest`](../Shared/SetVisibilityRequest.md) |

#### Returns

`Promise`\<`void`>

#### Example

```typescript
felt.setElementGroupVisibility({ show: ["element-group-1", "element-group-2"], hide: ["element-group-3"] });
```

## Events

### onElementChange()

> **onElementChange**(`args`: \{`options`: \{`id`: `string`; };`handler`: (`change`: [`ElementChangeCallbackParams`](ElementChangeCallbackParams.md)) => `void`; }): `VoidFunction`

Adds a listener for when an element changes.

#### Parameters

| Parameter         | Type                                                                                  | Description                                          |
| ----------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `args`            | `object`                                                                              | -                                                    |
| `args.options`    | `object`                                                                              | -                                                    |
| `args.options.id` | `string`                                                                              | The id of the element to listen for changes to.      |
| `args.handler`    | (`change`: [`ElementChangeCallbackParams`](ElementChangeCallbackParams.md)) => `void` | The handler that is called when the element changes. |

#### Returns

`VoidFunction`

A function to unsubscribe from the listener

#### Example

```typescript
const unsubscribe = felt.onElementChange({
  options: { id: "element-1" },
  handler: ({element}) => console.log(element.id),
});

// later on...
unsubscribe();
```

***

### onElementGroupChange()

> **onElementGroupChange**(`args`: \{`options`: \{`id`: `string`; };`handler`: (`change`: [`ElementGroupChangeCallbackParams`](ElementGroupChangeCallbackParams.md)) => `void`; }): `VoidFunction`

Adds a listener for when an element group changes.

#### Parameters

| Parameter         | Type                                                                                            |
| ----------------- | ----------------------------------------------------------------------------------------------- |
| `args`            | `object`                                                                                        |
| `args.options`    | `object`                                                                                        |
| `args.options.id` | `string`                                                                                        |
| `args.handler`    | (`change`: [`ElementGroupChangeCallbackParams`](ElementGroupChangeCallbackParams.md)) => `void` |

#### Returns

`VoidFunction`

A function to unsubscribe from the listener

#### Example

```typescript
const unsubscribe = felt.onElementGroupChange({
  options: { id: "element-group-1" },
  handler: elementGroup => console.log(elementGroup.id),
});

// later on...
unsubscribe();
```
