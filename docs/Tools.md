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

> To create elements programatically, use the [ElementsController](Elements/ElementsController.md) instead.

# Controller

* [ToolsController](Tools/ToolsController.md)

# Interfaces

* [PinToolSettings](Tools/PinToolSettings.md)
* [LineToolSettings](Tools/LineToolSettings.md)
* [RouteToolSettings](Tools/RouteToolSettings.md)
* [PolygonToolSettings](Tools/PolygonToolSettings.md)
* [CircleToolSettings](Tools/CircleToolSettings.md)
* [MarkerToolSettings](Tools/MarkerToolSettings.md)
* [HighlighterToolSettings](Tools/HighlighterToolSettings.md)
* [TextToolSettings](Tools/TextToolSettings.md)
* [NoteToolSettings](Tools/NoteToolSettings.md)

# Type Aliases

* [ToolType](Tools/ToolType.md)
* [ConfigurableToolType](Tools/ConfigurableToolType.md)
* [InputToolSettings](Tools/InputToolSettings.md)
* [ToolSettingsChangeEvent](Tools/ToolSettingsChangeEvent.md)
* [ToolSettingsMap](Tools/ToolSettingsMap.md)
* [PlaceFrame](Tools/PlaceFrame.md)
* [PlaceSymbol](Tools/PlaceSymbol.md)
