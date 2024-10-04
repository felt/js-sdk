[**@feltjs/js-sdk**](../../README.md) • **Docs**

***

# Interface: FeltControllerWithIframe

The FeltController allows you to control, inspect and observe a Felt map.
The various ways to interact with the map are namespaced for clarity.

## Extends

- [`FeltController`](FeltController.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `viewport` | [`ViewportController`](ViewportController.md) | The viewport controller allows you to control the viewport of the map. | [`FeltController`](FeltController.md).`viewport` |
| `ui` | [`UiController`](UiController.md) | The UI controllers allows you to enable and disable UI controls on the embedded map. | [`FeltController`](FeltController.md).`ui` |
| `iframe` | `HTMLIFrameElement` | The iframe element containing the Felt map. | - |
