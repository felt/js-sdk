***

The Tools part of the Felt SDK allows you to let users draw elements on the map
by programmatically selecting a tool for them.

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

> To create elements programmatically, use the [ElementsController](../Elements/ElementsController.md) instead.

# Controller

* [ToolsController](ToolsController.md)

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
