***

> **FeltTiledVectorSource**: \{ `type`: `"felt"`; `tileTemplateUrl`: `string`; }

A tiled vector source is a layer that is populated from data the has been uploaded
to Felt, and processed into vector tiles.

These sources cannot be updated via the SDK.

# Type declaration

## type

> **type**: `"felt"`

Identifies this as a tiled vector source. Typically, these tiles will have been
uploaded to and processed by Felt.

## tileTemplateUrl

> **tileTemplateUrl**: `string`

The template URL used for fetching tiles.
