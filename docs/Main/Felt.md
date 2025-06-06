***

> `const` **Felt**: { `embed`: `Promise`<[`FeltController`](FeltController.md)>; `connect`: `Promise`<[`FeltController`](FeltController.md)>; }

The Felt SDK is a library for embedding Felt maps into your website,
allowing you to control and inspect the map programmatically.

# Type declaration

## embed()

> **embed**(`container`: `HTMLElement`, `mapId`: `string`, `options?`: [`FeltEmbedOptions`](FeltEmbedOptions.md)): `Promise`<[`FeltController`](FeltController.md)>

Embeds a Felt map into the provided container, returning a promise that resolves
to a [FeltController](FeltController.md) object that you can use to control the map.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `container` | `HTMLElement` | The container element to embed the map into. |
| `mapId` | `string` | The ID of the map to embed. |
| `options?` | [`FeltEmbedOptions`](FeltEmbedOptions.md) | The options to configure the map. |

### Returns

`Promise`<[`FeltController`](FeltController.md)>

A promise for a [FeltController](FeltController.md).

## connect()

> **connect**(`feltWindow`: `Pick`<`Window`, `"postMessage"`>): `Promise`<[`FeltController`](FeltController.md)>

Binds to an existing Felt map iframe.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `feltWindow` | `Pick`<`Window`, `"postMessage"`> | The iframe element containing the Felt map. |

### Returns

`Promise`<[`FeltController`](FeltController.md)>
