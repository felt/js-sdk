***

> `const` **Felt**: \{`embed`: `Promise`\<[`FeltController`](FeltController.md)>;`connect`: `Promise`\<[`FeltController`](FeltController.md)>; }

The Felt SDK is a library for embedding Felt maps into your website,
allowing you to control and inspect the map programmatically.

## Type declaration

### embed()

Embeds a Felt map into the provided container.

#### Parameters

| Parameter   | Type                                      | Description                                  |
| ----------- | ----------------------------------------- | -------------------------------------------- |
| `container` | `HTMLElement`                             | The container element to embed the map into. |
| `mapId`     | `string`                                  | The ID of the map to embed.                  |
| `options`?  | [`FeltEmbedOptions`](FeltEmbedOptions.md) | The options to configure the map.            |

#### Returns

`Promise`\<[`FeltController`](FeltController.md)>

### connect()

Binds to an existing Felt map iframe.

#### Parameters

| Parameter    | Type     | Description                                 |
| ------------ | -------- | ------------------------------------------- |
| `feltWindow` | `Window` | The iframe element containing the Felt map. |

#### Returns

`Promise`\<[`FeltController`](FeltController.md)>
