> `const` **Felt**: `object`

The Felt SDK is a library for embedding Felt maps into your website,
allowing you to control and inspect the map programmatically.

## Type declaration

### embed()

Embeds a Felt map into the provided container.

#### Parameters

• **container**: `HTMLElement`

The container element to embed the map into.

• **mapId**: `string`

The ID of the map to embed.

• **options?**: [`FeltEmbedOptions`](../interfaces/FeltEmbedOptions.md)

The options to configure the map.

#### Returns

`Promise`\<[`FeltControllerWithIframe`](../interfaces/FeltControllerWithIframe.md)\>

### connect()

Binds to an existing Felt map iframe.

#### Parameters

• **feltWindow**: `Window`

The iframe element containing the Felt map.

#### Returns

`Promise`\<[`FeltController`](../interfaces/FeltController.md)\>
