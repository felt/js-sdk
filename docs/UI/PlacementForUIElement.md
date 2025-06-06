***

> **PlacementForUIElement** = { `after`: `string`; } | { `before`: `string`; } | { `at`: `"start"` | `"end"`; }

Used in [UiController.createPanel](UiController.md#createpanel) to specify the position of a panel in the stack
and in [UiController.createPanelElements](UiController.md#createpanelelements) to specify the position of an element in a panel.

In both cases, the default value is `{ at: "end" }`.
