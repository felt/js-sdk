***

The Tools part allows you to let users draw elements on the map.

# Example

```ts
// Change the settings for the line tool
felt.setToolSettings({
  tool: "line",
  strokeWidth: 8,
  color: "#448C2A"
});

// Start using the line tool
felt.setTool("line");

// Put down the tool
felt.setTool(null);
```

# PinToolSettings

# Properties

## color

> **color**: `string`

## frame

> **frame**: `null` \| `"frame-circle"` \| `"frame-square"`

## symbol

> **symbol**: [`PlaceSymbol`](#placesymbol)

***

# LineToolSettings

# Properties

## color

> **color**: `string`

## strokeOpacity

> **strokeOpacity**: `number`

## strokeWidth

> **strokeWidth**: `number`

## strokeStyle

> **strokeStyle**: `"solid"` \| `"dashed"` \| `"dotted"`

## distanceMarker

> **distanceMarker**: `boolean`

***

# RouteToolSettings

# Properties

## color

> **color**: `string`

## strokeOpacity

> **strokeOpacity**: `number`

## strokeWidth

> **strokeWidth**: `number`

## strokeStyle

> **strokeStyle**: `"solid"` \| `"dashed"` \| `"dotted"`

## distanceMarker

> **distanceMarker**: `boolean`

## endCaps

> **endCaps**: `boolean`

## routingMode

> **routingMode**: `null` \| `"driving"` \| `"cycling"` \| `"walking"` \| `"flying"`

***

# PolygonToolSettings

# Properties

## color

> **color**: `string`

## strokeOpacity

> **strokeOpacity**: `number`

## strokeWidth

> **strokeWidth**: `number`

## strokeStyle

> **strokeStyle**: `"solid"` \| `"dashed"` \| `"dotted"`

## fillOpacity

> **fillOpacity**: `number`

## areaMarker

> **areaMarker**: `boolean`

***

# CircleToolSettings

# Properties

## color

> **color**: `string`

## strokeOpacity

> **strokeOpacity**: `number`

## strokeWidth

> **strokeWidth**: `number`

## strokeStyle

> **strokeStyle**: `"solid"` \| `"dashed"` \| `"dotted"`

## fillOpacity

> **fillOpacity**: `number`

## radiusMarker

> **radiusMarker**: `boolean`

***

# MarkerToolSettings

# Properties

## color

> **color**: `string`

## opacity

> **opacity**: `number`

## size

> **size**: `number`

***

# HighlighterToolSettings

# Properties

## color

> **color**: `string`

## opacity

> **opacity**: `number`

## size

> **size**: `number`

***

# TextToolSettings

# Properties

## color

> **color**: `string`

## align

> **align**: `"left"` \| `"center"` \| `"right"`

## style

> **style**: `"italic"` \| `"light"` \| `"regular"` \| `"caps"`

***

# NoteToolSettings

# Properties

## color

> **color**: `string`

## align

> **align**: `"left"` \| `"center"` \| `"right"`

## style

> **style**: `"italic"` \| `"light"` \| `"regular"` \| `"caps"`

***

# ToolType

> **ToolType** = `z.infer`\<*typeof* `ToolSchema`\>

***

# ConfigurableToolType

> **ConfigurableToolType** = keyof [`ToolSettingsMap`](#toolsettingsmap)

***

# InputToolSettings

> **InputToolSettings** = `{ [K in ConfigurableToolType]: Partial<ToolSettingsMap[K]> & { tool: K } }`\[[`ConfigurableToolType`](#configurabletooltype)\]

***

# ToolSettingsChangeEvent

> **ToolSettingsChangeEvent** = `{ [K in ConfigurableToolType]: ToolSettingsMap[K] & { tool: K } }`\[[`ConfigurableToolType`](#configurabletooltype)\]

***

# ToolSettingsMap

> **ToolSettingsMap** = \{ `pin`: [`PinToolSettings`](#pintoolsettings); `line`: [`LineToolSettings`](#linetoolsettings); `route`: [`RouteToolSettings`](#routetoolsettings); `polygon`: [`PolygonToolSettings`](#polygontoolsettings); `circle`: [`CircleToolSettings`](#circletoolsettings); `marker`: [`MarkerToolSettings`](#markertoolsettings); `highlighter`: [`HighlighterToolSettings`](#highlightertoolsettings); `text`: [`TextToolSettings`](#texttoolsettings); `note`: [`NoteToolSettings`](#notetoolsettings); \}

# Properties

## pin

> **pin**: [`PinToolSettings`](#pintoolsettings)

## line

> **line**: [`LineToolSettings`](#linetoolsettings)

## route

> **route**: [`RouteToolSettings`](#routetoolsettings)

## polygon

> **polygon**: [`PolygonToolSettings`](#polygontoolsettings)

## circle

> **circle**: [`CircleToolSettings`](#circletoolsettings)

## marker

> **marker**: [`MarkerToolSettings`](#markertoolsettings)

## highlighter

> **highlighter**: [`HighlighterToolSettings`](#highlightertoolsettings)

## text

> **text**: [`TextToolSettings`](#texttoolsettings)

## note

> **note**: [`NoteToolSettings`](#notetoolsettings)

***

# PlaceFrame

> **PlaceFrame** = `"frame-circle"` \| `"frame-square"` \| `null`

***

# PlaceSymbol

> **PlaceSymbol** = `"dot"` \| `"square"` \| `"diamond"` \| `"triangle"` \| `"x"` \| `"plus"` \| `"circle-line"` \| `"circle-slash"` \| `"star"` \| `"heart"` \| `"hexagon"` \| `"octagon"` \| `"pedestrian"` \| `"bicycle"` \| `"wheelchair"` \| `"airport"` \| `"car"` \| `"bus"` \| `"train"` \| `"truck"` \| `"ferry"` \| `"sailboat"` \| `"electric-service"` \| `"gas-service"` \| `"blood-clinic"` \| `"badge"` \| `"traffic-light"` \| `"traffic-cone"` \| `"road-sign-caution"` \| `"person"` \| `"restroom"` \| `"house"` \| `"work"` \| `"letter"` \| `"hotel"` \| `"factory"` \| `"hospital"` \| `"religious-facility"` \| `"school"` \| `"government"` \| `"university"` \| `"bank"` \| `"landmark"` \| `"museum"` \| `"clothing"` \| `"shopping"` \| `"store"` \| `"bar"` \| `"pub"` \| `"cafe"` \| `"food"` \| `"park"` \| `"amusement-park"` \| `"camping-tent"` \| `"cabin"` \| `"picnic"` \| `"water-refill"` \| `"trailhead"` \| `"guidepost"` \| `"viewpoint"` \| `"camera"` \| `"us-football"` \| `"football"` \| `"tennis"` \| `"binoculars"` \| `"swimming"` \| `"zap"` \| `"battery-full"` \| `"battery-half"` \| `"battery-low"` \| `"boom"` \| `"radar"` \| `"wind-turbine"` \| `"solar-panel"` \| `"antenna"` \| `"telephone-pole"` \| `"oil-well"` \| `"oil-barrel"` \| `"railroad-track"` \| `"bridge"` \| `"lighthouse"` \| `"lock-closed"` \| `"lock-open"` \| `"wifi"` \| `"trash"` \| `"recycle"` \| `"tree"` \| `"flower"` \| `"leaf"` \| `"fire"` \| `"mountain"` \| `"snowy-mountain"` \| `"volcano"` \| `"island"` \| `"wave"` \| `"hot-springs"` \| `"water"` \| `"lake"` \| `"ocean"` \| `"animal"` \| `"bird"` \| `"duck"` \| `"dog"` \| `"fish"` \| `"beach"` \| `"wetland"` \| `"sun"` \| `"moon"` \| `"cloud"` \| `"partial-sun"` \| `"rain"` \| `"lightning"` \| `"snowflake"` \| `"wind"` \| `"snow"` \| `"fog"` \| `"sleet"` \| `"hurricane"` \| `"warning"` \| `"parking"` \| `"info"` \| `"circle-exclamation"` \| `"circle-triangle"` \| `"circle-x"` \| `"circle-plus"` \| `` `:${string}:` `` & \{\}

***

# ToolsController

The Tools controller allows you to let users draw elements on the map.

# Extended by

- [`FeltController`](Main.md#feltcontroller)

# Methods

## setTool()

> **setTool**(`tool`: `null` \| `"text"` \| `"note"` \| `"pin"` \| `"line"` \| `"route"` \| `"polygon"` \| `"circle"` \| `"marker"` \| `"highlighter"` \| `"link"`): `void`

Sets the tool to use for drawing elements on the map.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tool` | `null` \| `"text"` \| `"note"` \| `"pin"` \| `"line"` \| `"route"` \| `"polygon"` \| `"circle"` \| `"marker"` \| `"highlighter"` \| `"link"` | The tool to set. |

### Returns

`void`

### Example

```typescript
// Set the tool to "marker"
felt.setTool("marker");

// put down the tool
felt.setTool(null);
```

## getTool()

> **getTool**(): `Promise`\<`null` \| `"text"` \| `"note"` \| `"pin"` \| `"line"` \| `"route"` \| `"polygon"` \| `"circle"` \| `"marker"` \| `"highlighter"` \| `"link"`\>

Gets the current tool, if any is in use.

### Returns

`Promise`\<`null` \| `"text"` \| `"note"` \| `"pin"` \| `"line"` \| `"route"` \| `"polygon"` \| `"circle"` \| `"marker"` \| `"highlighter"` \| `"link"`\>

The current tool, or `null` if no tool is in use.

### Example

```typescript
const tool = await felt.getTool(); // "marker", "polygon", etc.
```

## onToolChange()

> **onToolChange**(`args`: \{ `handler`: (`tool`: `null` \| `"text"` \| `"note"` \| `"pin"` \| `"line"` \| `"route"` \| `"polygon"` \| `"circle"` \| `"marker"` \| `"highlighter"` \| `"link"`) => `void`; \}): `VoidFunction`

Listens for changes to the current tool.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `args` | \{ `handler`: (`tool`: `null` \| `"text"` \| `"note"` \| `"pin"` \| `"line"` \| `"route"` \| `"polygon"` \| `"circle"` \| `"marker"` \| `"highlighter"` \| `"link"`) => `void`; \} | - |
| `args.handler` | (`tool`: `null` \| `"text"` \| `"note"` \| `"pin"` \| `"line"` \| `"route"` \| `"polygon"` \| `"circle"` \| `"marker"` \| `"highlighter"` \| `"link"`) => `void` | This callback is called with the current tool whenever the tool changes. |

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

## setToolSettings()

> **setToolSettings**(`settings`: [`InputToolSettings`](#inputtoolsettings)): `void`

Sets the settings for the current tool.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `settings` | [`InputToolSettings`](#inputtoolsettings) | The settings to set. |

### Returns

`void`

## getToolSettings()

> **getToolSettings**\<`T`\>(`tool`: `T`): `Promise`\<[`ToolSettingsMap`](#toolsettingsmap)\[`T`\]\>

Gets the settings for the current tool.

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* keyof [`ToolSettingsMap`](#toolsettingsmap) |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `tool` | `T` |

### Returns

`Promise`\<[`ToolSettingsMap`](#toolsettingsmap)\[`T`\]\>

The settings for the current tool.

## onToolSettingsChange()

> **onToolSettingsChange**(`args`: \{ `handler`: (`settings`: [`ToolSettingsChangeEvent`](#toolsettingschangeevent)) => `void`; \}): `VoidFunction`

Listens for changes to the settings on all tools.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | \{ `handler`: (`settings`: [`ToolSettingsChangeEvent`](#toolsettingschangeevent)) => `void`; \} |
| `args.handler` | (`settings`: [`ToolSettingsChangeEvent`](#toolsettingschangeevent)) => `void` |

### Returns

`VoidFunction`

A function to unsubscribe from the listener
