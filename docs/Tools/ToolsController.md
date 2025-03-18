***

The Tools controller allows you to let users draw elements on the map.

# Extended by

* [`FeltController`](../Main/FeltController.md)

# Methods

## setTool()

> **setTool**(`tool`: `null` | `"text"` | `"note"` | `"pin"` | `"line"` | `"route"` | `"polygon"` | `"circle"` | `"marker"` | `"highlighter"` | `"link"`): `void`

Sets the tool to use for drawing elements on the map.

### Parameters

| Parameter | Type                                                                                                                                         | Description      |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| `tool`    | `null` \| `"text"` \| `"note"` \| `"pin"` \| `"line"` \| `"route"` \| `"polygon"` \| `"circle"` \| `"marker"` \| `"highlighter"` \| `"link"` | The tool to set. |

### Returns

`void`

### Example

```ts
// Set the tool to "marker"
felt.setTool("marker");

// put down the tool
felt.setTool(null);
```

***

## getTool()

> **getTool**(): `Promise`\<`null` | `"text"` | `"note"` | `"pin"` | `"line"` | `"route"` | `"polygon"` | `"circle"` | `"marker"` | `"highlighter"` | `"link"`>

Gets the current tool, if any is in use.

### Returns

`Promise`\<`null` | `"text"` | `"note"` | `"pin"` | `"line"` | `"route"` | `"polygon"` | `"circle"` | `"marker"` | `"highlighter"` | `"link"`>

The current tool, or `null` if no tool is in use.

### Example

```ts
const tool = await felt.getTool(); // "marker", "polygon", etc.
```

***

## onToolChange()

> **onToolChange**(`args`: \{ `handler`: (`tool`: `null` | `"text"` | `"note"` | `"pin"` | `"line"` | `"route"` | `"polygon"` | `"circle"` | `"marker"` | `"highlighter"` | `"link"`) => `void`; }): `VoidFunction`

Listens for changes to the current tool.

### Parameters

| Parameter      | Type                                                                                                                                                                              | Description                                                              |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `args`         | \{ `handler`: (`tool`: `null` \| `"text"` \| `"note"` \| `"pin"` \| `"line"` \| `"route"` \| `"polygon"` \| `"circle"` \| `"marker"` \| `"highlighter"` \| `"link"`) => `void`; } | -                                                                        |
| `args.handler` | (`tool`: `null` \| `"text"` \| `"note"` \| `"pin"` \| `"line"` \| `"route"` \| `"polygon"` \| `"circle"` \| `"marker"` \| `"highlighter"` \| `"link"`) => `void`                  | This callback is called with the current tool whenever the tool changes. |

### Returns

`VoidFunction`

A function to unsubscribe from the listener

### Example

```ts
const unsubscribe = felt.onToolChange({
  handler: tool => console.log(tool),
});

// later on...
unsubscribe();
```

***

## setToolSettings()

> **setToolSettings**(`settings`: [`InputToolSettings`](InputToolSettings.md)): `void`

Sets the settings for the current tool.

### Parameters

| Parameter  | Type                                        | Description          |
| ---------- | ------------------------------------------- | -------------------- |
| `settings` | [`InputToolSettings`](InputToolSettings.md) | The settings to set. |

### Returns

`void`

***

## getToolSettings()

> **getToolSettings**\<`T`>(`tool`: `T`): `Promise`\<[`ToolSettingsMap`](ToolSettingsMap.md)\[`T`]>

Gets the settings for the current tool.

### Type Parameters

| Type Parameter                                              |
| ----------------------------------------------------------- |
| `T` *extends* keyof [`ToolSettingsMap`](ToolSettingsMap.md) |

### Parameters

| Parameter | Type |
| --------- | ---- |
| `tool`    | `T`  |

### Returns

`Promise`\<[`ToolSettingsMap`](ToolSettingsMap.md)\[`T`]>

The settings for the current tool.

***

## onToolSettingsChange()

> **onToolSettingsChange**(`args`: \{ `handler`: (`settings`: [`ToolSettingsChangeEvent`](ToolSettingsChangeEvent.md)) => `void`; }): `VoidFunction`

Listens for changes to the settings on all tools.

### Parameters

| Parameter      | Type                                                                                             |
| -------------- | ------------------------------------------------------------------------------------------------ |
| `args`         | \{ `handler`: (`settings`: [`ToolSettingsChangeEvent`](ToolSettingsChangeEvent.md)) => `void`; } |
| `args.handler` | (`settings`: [`ToolSettingsChangeEvent`](ToolSettingsChangeEvent.md)) => `void`                  |

### Returns

`VoidFunction`

A function to unsubscribe from the listener
