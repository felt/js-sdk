***

The Tools controller allows you to let users draw elements on the map.

## Extended by

* [`FeltController`](../Main/FeltController.md)

## Methods

### setTool()

> **setTool**(`tool`: `null` | `"note"` | `"pin"` | `"line"` | `"route"` | `"polygon"` | `"circle"` | `"marker"` | `"highlighter"` | `"text"` | `"link"`): `void`

Sets the tool to use for drawing elements on the map.

#### Parameters

| Parameter | Type                                                                                                                                         | Description      |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| `tool`    | `null` \| `"note"` \| `"pin"` \| `"line"` \| `"route"` \| `"polygon"` \| `"circle"` \| `"marker"` \| `"highlighter"` \| `"text"` \| `"link"` | The tool to set. |

#### Returns

`void`

#### Example

```ts
// Set the tool to "marker"
felt.setTool("marker");

// put down the tool
felt.setTool(null);
```

***

### getTool()

> **getTool**(): `Promise`\<`null` | `"note"` | `"pin"` | `"line"` | `"route"` | `"polygon"` | `"circle"` | `"marker"` | `"highlighter"` | `"text"` | `"link"`>

Gets the current tool, if any is in use.

#### Returns

`Promise`\<`null` | `"note"` | `"pin"` | `"line"` | `"route"` | `"polygon"` | `"circle"` | `"marker"` | `"highlighter"` | `"text"` | `"link"`>

The current tool, or `null` if no tool is in use.

#### Example

```ts
const tool = await felt.getTool(); // "marker", "polygon", etc.
```

***

### onToolChange()

> **onToolChange**(`args`: \{`handler`: (`tool`: `null` | `"note"` | `"pin"` | `"line"` | `"route"` | `"polygon"` | `"circle"` | `"marker"` | `"highlighter"` | `"text"` | `"link"`) => `void`; }): `VoidFunction`

Listens for changes to the current tool.

#### Parameters

| Parameter      | Type                                                                                                                                                             | Description                                                              |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `args`         | `object`                                                                                                                                                         | -                                                                        |
| `args.handler` | (`tool`: `null` \| `"note"` \| `"pin"` \| `"line"` \| `"route"` \| `"polygon"` \| `"circle"` \| `"marker"` \| `"highlighter"` \| `"text"` \| `"link"`) => `void` | This callback is called with the current tool whenever the tool changes. |

#### Returns

`VoidFunction`

A function to unsubscribe from the listener

#### Example

```ts
const unsubscribe = felt.onToolChange({
  handler: tool => console.log(tool),
});

// later on...
unsubscribe();
```

***

### setToolSettings()

> **setToolSettings**(`settings`: \{`tool`: `"pin"`;`color`: `string`;`symbol`: `string`;`frame`: `null` | `string`; } | \{`tool`: `"line"`;`color`: `string`;`strokeOpacity`: `number`;`strokeWidth`: `number`;`strokeStyle`: `"solid"` | `"dashed"` | `"dotted"`;`distanceMarker`: `boolean`; } | \{`tool`: `"route"`;`color`: `string`;`routingMode`: `"driving"` | `"cycling"` | `"walking"` | `"flying"`;`strokeOpacity`: `number`;`strokeWidth`: `number`;`strokeStyle`: `"solid"` | `"dashed"` | `"dotted"`;`distanceMarker`: `boolean`;`endCaps`: `boolean`; } | \{`tool`: `"polygon"`;`color`: `string`;`fillOpacity`: `number`;`strokeOpacity`: `number`;`strokeWidth`: `number`;`strokeStyle`: `"solid"` | `"dashed"` | `"dotted"`;`areaMarker`: `boolean`; } | \{`tool`: `"circle"`;`color`: `string`;`fillOpacity`: `number`;`strokeOpacity`: `number`;`strokeWidth`: `number`;`strokeStyle`: `"solid"` | `"dashed"` | `"dotted"`;`radiusMarker`: `boolean`; } | \{`tool`: `"marker"`;`color`: `string`;`opacity`: `number`;`size`: `number`; } | \{`tool`: `"highlighter"`;`color`: `string`;`opacity`: `number`;`size`: `number`; } | \{`tool`: `"text"`;`color`: `string`;`align`: `"left"` | `"center"` | `"right"`;`style`: `"italic"` | `"light"` | `"regular"` | `"caps"`; } | \{`tool`: `"note"`;`color`: `string`;`align`: `"left"` | `"center"` | `"right"`;`style`: `"italic"` | `"light"` | `"regular"` | `"caps"`; }): `void`

Sets the settings for the current tool.

#### Parameters

| Parameter  | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Description          |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------- |
| `settings` | \{`tool`: `"pin"`;`color`: `string`;`symbol`: `string`;`frame`: `null` \| `string`; } \| \{`tool`: `"line"`;`color`: `string`;`strokeOpacity`: `number`;`strokeWidth`: `number`;`strokeStyle`: `"solid"` \| `"dashed"` \| `"dotted"`;`distanceMarker`: `boolean`; } \| \{`tool`: `"route"`;`color`: `string`;`routingMode`: `"driving"` \| `"cycling"` \| `"walking"` \| `"flying"`;`strokeOpacity`: `number`;`strokeWidth`: `number`;`strokeStyle`: `"solid"` \| `"dashed"` \| `"dotted"`;`distanceMarker`: `boolean`;`endCaps`: `boolean`; } \| \{`tool`: `"polygon"`;`color`: `string`;`fillOpacity`: `number`;`strokeOpacity`: `number`;`strokeWidth`: `number`;`strokeStyle`: `"solid"` \| `"dashed"` \| `"dotted"`;`areaMarker`: `boolean`; } \| \{`tool`: `"circle"`;`color`: `string`;`fillOpacity`: `number`;`strokeOpacity`: `number`;`strokeWidth`: `number`;`strokeStyle`: `"solid"` \| `"dashed"` \| `"dotted"`;`radiusMarker`: `boolean`; } \| \{`tool`: `"marker"`;`color`: `string`;`opacity`: `number`;`size`: `number`; } \| \{`tool`: `"highlighter"`;`color`: `string`;`opacity`: `number`;`size`: `number`; } \| \{`tool`: `"text"`;`color`: `string`;`align`: `"left"` \| `"center"` \| `"right"`;`style`: `"italic"` \| `"light"` \| `"regular"` \| `"caps"`; } \| \{`tool`: `"note"`;`color`: `string`;`align`: `"left"` \| `"center"` \| `"right"`;`style`: `"italic"` \| `"light"` \| `"regular"` \| `"caps"`; } | The settings to set. |

#### Returns

`void`

***

### getToolSettings()

> **getToolSettings**\<`T`>(`tool`: `T`): `Promise`\<`Extract`\<\{`tool`: `"pin"`;`color`: `string`;`symbol`: `string`;`frame`: `null` | `string`; }, \{`tool`: `T`; }> | `Extract`\<\{`tool`: `"line"`;`color`: `string`;`strokeOpacity`: `number`;`strokeWidth`: `number`;`strokeStyle`: `"solid"` | `"dashed"` | `"dotted"`;`distanceMarker`: `boolean`; }, \{`tool`: `T`; }> | `Extract`\<\{`tool`: `"route"`;`color`: `string`;`routingMode`: `"driving"` | `"cycling"` | `"walking"` | `"flying"`;`strokeOpacity`: `number`;`strokeWidth`: `number`;`strokeStyle`: `"solid"` | `"dashed"` | `"dotted"`;`distanceMarker`: `boolean`;`endCaps`: `boolean`; }, \{`tool`: `T`; }> | `Extract`\<\{`tool`: `"polygon"`;`color`: `string`;`fillOpacity`: `number`;`strokeOpacity`: `number`;`strokeWidth`: `number`;`strokeStyle`: `"solid"` | `"dashed"` | `"dotted"`;`areaMarker`: `boolean`; }, \{`tool`: `T`; }> | `Extract`\<\{`tool`: `"circle"`;`color`: `string`;`fillOpacity`: `number`;`strokeOpacity`: `number`;`strokeWidth`: `number`;`strokeStyle`: `"solid"` | `"dashed"` | `"dotted"`;`radiusMarker`: `boolean`; }, \{`tool`: `T`; }> | `Extract`\<\{`tool`: `"marker"`;`color`: `string`;`opacity`: `number`;`size`: `number`; }, \{`tool`: `T`; }> | `Extract`\<\{`tool`: `"highlighter"`;`color`: `string`;`opacity`: `number`;`size`: `number`; }, \{`tool`: `T`; }> | `Extract`\<\{`tool`: `"text"`;`color`: `string`;`align`: `"left"` | `"center"` | `"right"`;`style`: `"italic"` | `"light"` | `"regular"` | `"caps"`; }, \{`tool`: `T`; }> | `Extract`\<\{`tool`: `"note"`;`color`: `string`;`align`: `"left"` | `"center"` | `"right"`;`style`: `"italic"` | `"light"` | `"regular"` | `"caps"`; }, \{`tool`: `T`; }>>

Gets the settings for the current tool.

#### Type Parameters

| Type Parameter                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------ |
| `T` *extends* `"note"` \| `"pin"` \| `"line"` \| `"route"` \| `"polygon"` \| `"circle"` \| `"marker"` \| `"highlighter"` \| `"text"` |

#### Parameters

| Parameter | Type |
| --------- | ---- |
| `tool`    | `T`  |

#### Returns

`Promise`\<`Extract`\<\{`tool`: `"pin"`;`color`: `string`;`symbol`: `string`;`frame`: `null` | `string`; }, \{`tool`: `T`; }> | `Extract`\<\{`tool`: `"line"`;`color`: `string`;`strokeOpacity`: `number`;`strokeWidth`: `number`;`strokeStyle`: `"solid"` | `"dashed"` | `"dotted"`;`distanceMarker`: `boolean`; }, \{`tool`: `T`; }> | `Extract`\<\{`tool`: `"route"`;`color`: `string`;`routingMode`: `"driving"` | `"cycling"` | `"walking"` | `"flying"`;`strokeOpacity`: `number`;`strokeWidth`: `number`;`strokeStyle`: `"solid"` | `"dashed"` | `"dotted"`;`distanceMarker`: `boolean`;`endCaps`: `boolean`; }, \{`tool`: `T`; }> | `Extract`\<\{`tool`: `"polygon"`;`color`: `string`;`fillOpacity`: `number`;`strokeOpacity`: `number`;`strokeWidth`: `number`;`strokeStyle`: `"solid"` | `"dashed"` | `"dotted"`;`areaMarker`: `boolean`; }, \{`tool`: `T`; }> | `Extract`\<\{`tool`: `"circle"`;`color`: `string`;`fillOpacity`: `number`;`strokeOpacity`: `number`;`strokeWidth`: `number`;`strokeStyle`: `"solid"` | `"dashed"` | `"dotted"`;`radiusMarker`: `boolean`; }, \{`tool`: `T`; }> | `Extract`\<\{`tool`: `"marker"`;`color`: `string`;`opacity`: `number`;`size`: `number`; }, \{`tool`: `T`; }> | `Extract`\<\{`tool`: `"highlighter"`;`color`: `string`;`opacity`: `number`;`size`: `number`; }, \{`tool`: `T`; }> | `Extract`\<\{`tool`: `"text"`;`color`: `string`;`align`: `"left"` | `"center"` | `"right"`;`style`: `"italic"` | `"light"` | `"regular"` | `"caps"`; }, \{`tool`: `T`; }> | `Extract`\<\{`tool`: `"note"`;`color`: `string`;`align`: `"left"` | `"center"` | `"right"`;`style`: `"italic"` | `"light"` | `"regular"` | `"caps"`; }, \{`tool`: `T`; }>>

The settings for the current tool.

***

### onToolSettingsChange()

> **onToolSettingsChange**(`args`: \{`handler`: (`settings`: \{`tool`: `"pin"`;`color`: `string`;`symbol`: `string`;`frame`: `null` | `string`; } | \{`tool`: `"line"`;`color`: `string`;`strokeOpacity`: `number`;`strokeWidth`: `number`;`strokeStyle`: `"solid"` | `"dashed"` | `"dotted"`;`distanceMarker`: `boolean`; } | \{`tool`: `"route"`;`color`: `string`;`routingMode`: `"driving"` | `"cycling"` | `"walking"` | `"flying"`;`strokeOpacity`: `number`;`strokeWidth`: `number`;`strokeStyle`: `"solid"` | `"dashed"` | `"dotted"`;`distanceMarker`: `boolean`;`endCaps`: `boolean`; } | \{`tool`: `"polygon"`;`color`: `string`;`fillOpacity`: `number`;`strokeOpacity`: `number`;`strokeWidth`: `number`;`strokeStyle`: `"solid"` | `"dashed"` | `"dotted"`;`areaMarker`: `boolean`; } | \{`tool`: `"circle"`;`color`: `string`;`fillOpacity`: `number`;`strokeOpacity`: `number`;`strokeWidth`: `number`;`strokeStyle`: `"solid"` | `"dashed"` | `"dotted"`;`radiusMarker`: `boolean`; } | \{`tool`: `"marker"`;`color`: `string`;`opacity`: `number`;`size`: `number`; } | \{`tool`: `"highlighter"`;`color`: `string`;`opacity`: `number`;`size`: `number`; } | \{`tool`: `"text"`;`color`: `string`;`align`: `"left"` | `"center"` | `"right"`;`style`: `"italic"` | `"light"` | `"regular"` | `"caps"`; } | \{`tool`: `"note"`;`color`: `string`;`align`: `"left"` | `"center"` | `"right"`;`style`: `"italic"` | `"light"` | `"regular"` | `"caps"`; }) => `void`; }): `VoidFunction`

Listens for changes to the settings on all tools.

#### Parameters

| Parameter      | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `args`         | `object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `args.handler` | (`settings`: \{`tool`: `"pin"`;`color`: `string`;`symbol`: `string`;`frame`: `null` \| `string`; } \| \{`tool`: `"line"`;`color`: `string`;`strokeOpacity`: `number`;`strokeWidth`: `number`;`strokeStyle`: `"solid"` \| `"dashed"` \| `"dotted"`;`distanceMarker`: `boolean`; } \| \{`tool`: `"route"`;`color`: `string`;`routingMode`: `"driving"` \| `"cycling"` \| `"walking"` \| `"flying"`;`strokeOpacity`: `number`;`strokeWidth`: `number`;`strokeStyle`: `"solid"` \| `"dashed"` \| `"dotted"`;`distanceMarker`: `boolean`;`endCaps`: `boolean`; } \| \{`tool`: `"polygon"`;`color`: `string`;`fillOpacity`: `number`;`strokeOpacity`: `number`;`strokeWidth`: `number`;`strokeStyle`: `"solid"` \| `"dashed"` \| `"dotted"`;`areaMarker`: `boolean`; } \| \{`tool`: `"circle"`;`color`: `string`;`fillOpacity`: `number`;`strokeOpacity`: `number`;`strokeWidth`: `number`;`strokeStyle`: `"solid"` \| `"dashed"` \| `"dotted"`;`radiusMarker`: `boolean`; } \| \{`tool`: `"marker"`;`color`: `string`;`opacity`: `number`;`size`: `number`; } \| \{`tool`: `"highlighter"`;`color`: `string`;`opacity`: `number`;`size`: `number`; } \| \{`tool`: `"text"`;`color`: `string`;`align`: `"left"` \| `"center"` \| `"right"`;`style`: `"italic"` \| `"light"` \| `"regular"` \| `"caps"`; } \| \{`tool`: `"note"`;`color`: `string`;`align`: `"left"` \| `"center"` \| `"right"`;`style`: `"italic"` \| `"light"` \| `"regular"` \| `"caps"`; }) => `void` |

#### Returns

`VoidFunction`

A function to unsubscribe from the listener
