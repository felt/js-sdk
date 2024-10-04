[**@feltjs/js-sdk**](../../README.md) • **Docs**

***

[@feltjs/js-sdk](../../modules.md) / [types](../README.md) / FeltControllerWithIframe

# Interface: FeltControllerWithIframe

The FeltController allows you to control, inspect and observe a Felt map.
The various ways to interact with the map are namespaced for clarity.

## Extends

- [`FeltController`](FeltController.md)

## Properties

### viewport

> **viewport**: [`ViewportController`](ViewportController.md)

The viewport controller allows you to control the viewport of the map.

#### Inherited from

[`FeltController`](FeltController.md).[`viewport`](FeltController.md#viewport)

***

### ui

> **ui**: [`UiController`](UiController.md)

The UI controllers allows you to enable and disable UI controls on the
embedded map.

#### Inherited from

[`FeltController`](FeltController.md).[`ui`](FeltController.md#ui)

***

### iframe

> **iframe**: `HTMLIFrameElement`

The iframe element containing the Felt map.
