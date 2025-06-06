***

> **ToolSettingsChangeEvent** = { `tool`: `"pin"`; } & [`PinToolSettings`](PinToolSettings.md) | { `tool`: `"line"`; } & [`LineToolSettings`](LineToolSettings.md) | { `tool`: `"route"`; } & [`RouteToolSettings`](RouteToolSettings.md) | { `tool`: `"polygon"`; } & [`PolygonToolSettings`](PolygonToolSettings.md) | { `tool`: `"circle"`; } & [`CircleToolSettings`](CircleToolSettings.md) | { `tool`: `"marker"`; } & [`MarkerToolSettings`](MarkerToolSettings.md) | { `tool`: `"highlighter"`; } & [`HighlighterToolSettings`](HighlighterToolSettings.md) | { `tool`: `"text"`; } & [`TextToolSettings`](TextToolSettings.md) | { `tool`: `"note"`; } & [`NoteToolSettings`](NoteToolSettings.md)

The result of listening for changes to the settings of each tool.
