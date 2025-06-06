***

# Properties

## panelId

> **panelId**: `string`

***

## elements

> **elements**: { `element`: [`UIFlexibleSpaceElementCreate`](UIFlexibleSpaceElementCreate.md) | [`UIPanelElementsCreate`](UIPanelElementsCreate.md); `container?`: `"footer"` | `"body"` | { `id`: `string`; }; `placement?`: { `after`: `string`; } | { `before`: `string`; } | { `at`: `"start"` | `"end"`; }; }\[]

| Name | Type | Description |
| ------ | ------ | ------ |
| `element` | [`UIFlexibleSpaceElementCreate`](UIFlexibleSpaceElementCreate.md) | [`UIPanelElementsCreate`](UIPanelElementsCreate.md) | - |
| `container?` | `"footer"` | `"body"` | { `id`: `string`; } | The section of the panel to add the element to. It can be either one of the top-level sections of the panel (`"body"` or `"footer"`) or a specific container (like `ButtonGroup`) in the panel (`{ id: string }`). |
| `placement?` | { `after`: `string`; } | { `before`: `string`; } | { `at`: `"start"` | `"end"`; } | The placement of the element in the target container (based on the `container` property). |
