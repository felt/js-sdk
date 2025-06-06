***

The Tools controller allows you to let users draw elements on the map.

# Extended by

* [`FeltController`](../Main/FeltController.md)

# Methods

## setTool()

> **setTool**(`tool`: `null` | [`ToolType`](ToolType.md)): `void`

Sets the tool to use for drawing elements on the map.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tool` | `null` | [`ToolType`](ToolType.md) | The tool to set. |

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

> **getTool**(): `Promise`<`null` | [`ToolType`](ToolType.md)>

Gets the current tool, if any is in use.

### Returns

`Promise`<`null` | [`ToolType`](ToolType.md)>

The current tool, or `null` if no tool is in use.

### Example

```typescript
const tool = await felt.getTool(); // "marker", "polygon", etc.
```

***

## onToolChange()

> **onToolChange**(`args`: { `handler`: (`tool`: `null` | [`ToolType`](ToolType.md)) => `void`; }): `VoidFunction`

Listens for changes to the current tool.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `args` | { `handler`: (`tool`: `null` | [`ToolType`](ToolType.md)) => `void`; } | - |
| `args.handler` | (`tool`: `null` | [`ToolType`](ToolType.md)) => `void` | This callback is called with the current tool whenever the tool changes. |

### Returns

`VoidFunction`

A function to unsubscribe from the listener

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

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `settings` | [`InputToolSettings`](InputToolSettings.md) | The settings to set. |

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

> **getToolSettings**<`T`>(`tool`: `T`): `Promise`<[`ToolSettingsMap`](ToolSettingsMap.md)\[`T`]>

Gets the settings for the chosen tool

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ConfigurableToolType`](ConfigurableToolType.md) |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `tool` | `T` |

### Returns

`Promise`<[`ToolSettingsMap`](ToolSettingsMap.md)\[`T`]>

The settings for the chosen tool.

### Example

```typescript
const settings = await felt.getToolSettings("marker");
```

***

## onToolSettingsChange()

> **onToolSettingsChange**(`args`: { `handler`: (`settings`: [`ToolSettingsChangeEvent`](ToolSettingsChangeEvent.md)) => `void`; }): `VoidFunction`

Listens for changes to the settings on all tools.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | { `handler`: (`settings`: [`ToolSettingsChangeEvent`](ToolSettingsChangeEvent.md)) => `void`; } |
| `args.handler` | (`settings`: [`ToolSettingsChangeEvent`](ToolSettingsChangeEvent.md)) => `void` |

### Returns

`VoidFunction`

A function to unsubscribe from the listener

### Example

```typescript
const unsubscribe = felt.onToolSettingsChange({
  handler: settings => console.log(settings),
});

// later on...
unsubscribe();
```
