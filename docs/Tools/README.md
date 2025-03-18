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

# Interfaces

* [PinToolSettings](PinToolSettings.md)
* [LineToolSettings](LineToolSettings.md)
* [RouteToolSettings](RouteToolSettings.md)
* [PolygonToolSettings](PolygonToolSettings.md)
* [CircleToolSettings](CircleToolSettings.md)
* [MarkerToolSettings](MarkerToolSettings.md)
* [HighlighterToolSettings](HighlighterToolSettings.md)
* [TextToolSettings](TextToolSettings.md)
* [NoteToolSettings](NoteToolSettings.md)

# Type Aliases

* [ToolType](ToolType.md)
* [ConfigurableToolType](ConfigurableToolType.md)
* [InputToolSettings](InputToolSettings.md)
* [ToolSettingsChangeEvent](ToolSettingsChangeEvent.md)
* [ToolSettingsMap](ToolSettingsMap.md)
* [PlaceFrame](PlaceFrame.md)
* [PlaceSymbol](PlaceSymbol.md)

# Controller

* [ToolsController](ToolsController.md)
