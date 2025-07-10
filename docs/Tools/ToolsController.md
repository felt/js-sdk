***

The Tools controller allows you to let users draw elements on the map.

# Extended by

* [`FeltController`](../Main/FeltController.md)

# Methods

## setTool()

> **setTool**(`tool`: `null` | [`ToolType`](ToolType.md)): `void`

Sets the tool to use for drawing elements on the map.

Use this method to programmatically activate drawing tools for users. When a tool
is set, users can draw elements on the map using that tool. Set to `null` to
deactivate all drawing tools.

### Parameters

| Parameter | Type                                | Description                                         |
| --------- | ----------------------------------- | --------------------------------------------------- |
| `tool`    | `null` \| [`ToolType`](ToolType.md) | The tool to set, or `null` to deactivate all tools. |

### Returns

`void`

### Example

```typescript
// Set the tool to "marker"
await felt.setTool("marker");

// put down the tool
await felt.setTool(null);
```

***

## getTool()

> **getTool**(): `Promise`\<`null` | [`ToolType`](ToolType.md)>

Gets the current tool, if any is in use.

Use this method to check which drawing tool is currently active, if any.

### Returns

`Promise`\<`null` | [`ToolType`](ToolType.md)>

A promise that resolves to the current tool, or `null` if no tool is in use.

### Example

```typescript
const tool = await felt.getTool(); // "marker", "polygon", etc.
```

***

## onToolChange()

> **onToolChange**(`args`: \{ `handler`: (`tool`: `null` | [`ToolType`](ToolType.md)) => `void`; }): `VoidFunction`

Listens for changes to the current tool.

Use this to react to tool changes, such as updating your UI to reflect
the currently active drawing tool.

### Parameters

| Parameter      | Type                                                                     | Description                                                              |
| -------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `args`         | \{ `handler`: (`tool`: `null` \| [`ToolType`](ToolType.md)) => `void`; } | -                                                                        |
| `args.handler` | (`tool`: `null` \| [`ToolType`](ToolType.md)) => `void`                  | This callback is called with the current tool whenever the tool changes. |

### Returns

`VoidFunction`

### Example

```typescript
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

Use this method to configure how drawing tools behave, such as setting colors,
stroke widths, or other tool-specific properties.

### Parameters

| Parameter  | Type                                        | Description                                 |
| ---------- | ------------------------------------------- | ------------------------------------------- |
| `settings` | [`InputToolSettings`](InputToolSettings.md) | The settings to set for the specified tool. |

### Returns

`void`

### Example

```typescript
// Set the settings for the marker tool
await felt.setToolSettings({
  tool: "marker",
  color: "#FE17",
});
```

***

## getToolSettings()

> **getToolSettings**\<`T`>(`tool`: `T`): `Promise`\<[`ToolSettingsMap`](ToolSettingsMap.md)\[`T`]>

Gets the settings for the chosen tool.

Use this method to retrieve the current configuration of a drawing tool.

### Type Parameters

| Type Parameter                                                  |
| --------------------------------------------------------------- |
| `T` *extends* [`ConfigurableToolType`](ConfigurableToolType.md) |

### Parameters

| Parameter | Type | Description                   |
| --------- | ---- | ----------------------------- |
| `tool`    | `T`  | The tool to get settings for. |

### Returns

`Promise`\<[`ToolSettingsMap`](ToolSettingsMap.md)\[`T`]>

A promise that resolves to the settings for the chosen tool.

### Example

```typescript
const settings = await felt.getToolSettings("marker");
```

***

## onToolSettingsChange()

> **onToolSettingsChange**(`args`: \{ `handler`: (`settings`: [`ToolSettingsChangeEvent`](ToolSettingsChangeEvent.md)) => `void`; }): `VoidFunction`

Listens for changes to the settings on all tools.

Use this to react to tool setting changes, such as updating your UI to
reflect the current tool configuration.

### Parameters

| Parameter      | Type                                                                                             |
| -------------- | ------------------------------------------------------------------------------------------------ |
| `args`         | \{ `handler`: (`settings`: [`ToolSettingsChangeEvent`](ToolSettingsChangeEvent.md)) => `void`; } |
| `args.handler` | (`settings`: [`ToolSettingsChangeEvent`](ToolSettingsChangeEvent.md)) => `void`                  |

### Returns

`VoidFunction`

A function to unsubscribe from the listener.

### Example

```typescript
const unsubscribe = felt.onToolSettingsChange({
  handler: settings => console.log(settings),
});

// later on...
unsubscribe();
```
