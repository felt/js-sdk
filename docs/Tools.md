***

The Tools part of the Felt SDK allows you to let users draw elements on the map
by programatically selecting a tool for them.

You can also set the settings for individual tools, to allow you to change the
styling of the resulting element.

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

## afterCreation

> **afterCreation**: `"enter name"` \| `"add another"` \| `"select"`

What to do after creating the Place element.

- `"enter name"`: Enter a name for the Place, focusing the name input.
- `"add another"`: Add another Place, leaving the tool still selected.
- `"select"`: Puts the tool down and selects the new Place element.

### Default Value

`"enter name"`

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

> **InputToolSettings** = \{ `tool`: `"pin"`; \} & `Partial`\<[`PinToolSettings`](#pintoolsettings)\> \| \{ `tool`: `"line"`; \} & `Partial`\<[`LineToolSettings`](#linetoolsettings)\> \| \{ `tool`: `"route"`; \} & `Partial`\<[`RouteToolSettings`](#routetoolsettings)\> \| \{ `tool`: `"polygon"`; \} & `Partial`\<[`PolygonToolSettings`](#polygontoolsettings)\> \| \{ `tool`: `"circle"`; \} & `Partial`\<[`CircleToolSettings`](#circletoolsettings)\> \| \{ `tool`: `"marker"`; \} & `Partial`\<[`MarkerToolSettings`](#markertoolsettings)\> \| \{ `tool`: `"highlighter"`; \} & `Partial`\<[`HighlighterToolSettings`](#highlightertoolsettings)\> \| \{ `tool`: `"text"`; \} & `Partial`\<[`TextToolSettings`](#texttoolsettings)\> \| \{ `tool`: `"note"`; \} & `Partial`\<[`NoteToolSettings`](#notetoolsettings)\>

The parameters for changing the settings of each tool.

***

# ToolSettingsChangeEvent

> **ToolSettingsChangeEvent** = \{ `tool`: `"pin"`; \} & [`PinToolSettings`](#pintoolsettings) \| \{ `tool`: `"line"`; \} & [`LineToolSettings`](#linetoolsettings) \| \{ `tool`: `"route"`; \} & [`RouteToolSettings`](#routetoolsettings) \| \{ `tool`: `"polygon"`; \} & [`PolygonToolSettings`](#polygontoolsettings) \| \{ `tool`: `"circle"`; \} & [`CircleToolSettings`](#circletoolsettings) \| \{ `tool`: `"marker"`; \} & [`MarkerToolSettings`](#markertoolsettings) \| \{ `tool`: `"highlighter"`; \} & [`HighlighterToolSettings`](#highlightertoolsettings) \| \{ `tool`: `"text"`; \} & [`TextToolSettings`](#texttoolsettings) \| \{ `tool`: `"note"`; \} & [`NoteToolSettings`](#notetoolsettings)

The result of listening for changes to the settings of each tool.

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

> **PlaceSymbol** = `"dot"` \| `"square"` \| `"diamond"` \| `"triangle"` \| `"x"` \| `"plus"` \| `"circle-line"` \| `"circle-slash"` \| `"star"` \| `"heart"` \| `"hexagon"` \| `"octagon"` \| `"pedestrian"` \| `"bicycle"` \| `"wheelchair"` \| `"airport"` \| `"car"` \| `"bus"` \| `"train"` \| `"truck"` \| `"ferry"` \| `"sailboat"` \| `"electric-service"` \| `"gas-service"` \| `"blood-clinic"` \| `"badge"` \| `"traffic-light"` \| `"traffic-cone"` \| `"road-sign-caution"` \| `"person"` \| `"restroom"` \| `"house"` \| `"work"` \| `"letter"` \| `"hotel"` \| `"factory"` \| `"hospital"` \| `"religious-facility"` \| `"school"` \| `"government"` \| `"university"` \| `"bank"` \| `"landmark"` \| `"museum"` \| `"clothing"` \| `"shopping"` \| `"store"` \| `"bar"` \| `"pub"` \| `"cafe"` \| `"food"` \| `"park"` \| `"amusement-park"` \| `"camping-tent"` \| `"cabin"` \| `"picnic"` \| `"water-refill"` \| `"trailhead"` \| `"guidepost"` \| `"viewpoint"` \| `"camera"` \| `"us-football"` \| `"football"` \| `"tennis"` \| `"binoculars"` \| `"swimming"` \| `"zap"` \| `"battery-full"` \| `"battery-half"` \| `"battery-low"` \| `"boom"` \| `"radar"` \| `"wind-turbine"` \| `"solar-panel"` \| `"antenna"` \| `"telephone-pole"` \| `"oil-well"` \| `"oil-barrel"` \| `"railroad-track"` \| `"bridge"` \| `"lighthouse"` \| `"lock-closed"` \| `"lock-open"` \| `"wifi"` \| `"trash"` \| `"recycle"` \| `"tree"` \| `"flower"` \| `"leaf"` \| `"fire"` \| `"mountain"` \| `"snowy-mountain"` \| `"volcano"` \| `"island"` \| `"wave"` \| `"hot-springs"` \| `"water"` \| `"lake"` \| `"ocean"` \| `"animal"` \| `"bird"` \| `"duck"` \| `"dog"` \| `"fish"` \| `"beach"` \| `"wetland"` \| `"sun"` \| `"moon"` \| `"cloud"` \| `"partial-sun"` \| `"rain"` \| `"lightning"` \| `"snowflake"` \| `"wind"` \| `"snow"` \| `"fog"` \| `"sleet"` \| `"hurricane"` \| `"warning"` \| `"parking"` \| `"info"` \| `"circle-exclamation"` \| `"circle-triangle"` \| `"circle-x"` \| `"circle-plus"` \| `` `:${string}:` `` & \{ \}
