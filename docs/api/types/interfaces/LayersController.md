The Layers controller allows you to get information about the layers on the
map, and make changes to their visibility.

## Methods

### get()

> **get**(`request`): `Promise`\<`object`\>

#### Parameters

• **request**

• **request.ids**: `string`[] = `...`

The ids of the layers you want to get in the order you want them.

#### Returns

`Promise`\<`object`\>

The layers that match the requested IDs in an array in the same
order as the requested IDs. If a layer doesn't exist, the response will
contain a `null` in the corresponding index.

##### layers

> **layers**: (`null` \| `object`)[]

The layers matching the given IDs as an array. Any layers that don't
exist will be represented by a `null` in the array.

See [Layer](../type-aliases/Layer.md) for the structure of the layer object.
