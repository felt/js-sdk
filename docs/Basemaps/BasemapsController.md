***

The basemaps controller allows you to manage the map's basemap layer.

You can get the current basemap, list available basemaps, change the basemap,
and be notified when the basemap changes.

# Extended by

* [`FeltController`](../Main/FeltController.md)

# Methods

## getCurrentBasemap()

> **getCurrentBasemap**(): `Promise`\<[`Basemap`](Basemap.md)>

Gets the currently active basemap.

Use this method to retrieve information about the current basemap, including
its type (Felt, color, or custom tile), name, color scheme, and attribution.

### Returns

`Promise`\<[`Basemap`](Basemap.md)>

A promise that resolves to the current basemap configuration.

### Example

```typescript
// Get current basemap
const basemap = await felt.getCurrentBasemap();
console.log({
  name: basemap.name,
  type: basemap.type,
  uiColorScheme: basemap.uiColorScheme,
});
```

***

## getBasemaps()

> **getBasemaps**(): `Promise`\<[`Basemap`](Basemap.md)\[]>

Gets all basemaps available on the map.

Use this method to retrieve a list of all available basemaps that can be
applied to the map.

### Returns

`Promise`\<[`Basemap`](Basemap.md)\[]>

A promise that resolves to all basemaps available on the map.

### Example

```typescript
// Get all available basemaps
const basemaps = await felt.getBasemaps();
const lightBasemaps = basemaps.filter(b => b.uiColorScheme === "light");
```

***

## chooseBasemap()

> **chooseBasemap**(`id`: `string`): `void`

Chooses the basemap to use for the map.

Use this method to change the current basemap. The basemap ID can be obtained
from getBasemaps().

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `id`      | `string` |

### Returns

`void`

A promise that resolves when the basemap has been set.

### Example

```typescript
// Switch to a specific basemap
const basemaps = await felt.getBasemaps();
const darkBasemap = basemaps.find(b => b.uiColorScheme === "dark");
if (darkBasemap) {
  await felt.chooseBasemap(darkBasemap.id);
}
```

***

## addCustomBasemap()

> **addCustomBasemap**(`args`: \{ `basemap`: [`ColorBasemapInput`](ColorBasemapInput.md) | [`CustomTileBasemapInput`](CustomTileBasemapInput.md); `select`: `boolean`; }): `Promise`\<[`Basemap`](Basemap.md)>

Adds a custom basemap to the map. This can be either a solid color or a basemap
from a custom tile URL.

### Parameters

| Parameter      | Type                                                                                                                                       | Description                                    |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| `args`         | \{ `basemap`: [`ColorBasemapInput`](ColorBasemapInput.md) \| [`CustomTileBasemapInput`](CustomTileBasemapInput.md); `select`: `boolean`; } | -                                              |
| `args.basemap` | [`ColorBasemapInput`](ColorBasemapInput.md) \| [`CustomTileBasemapInput`](CustomTileBasemapInput.md)                                       | The basemap to add.                            |
| `args.select`? | `boolean`                                                                                                                                  | Whether to select the basemap after adding it. |

### Returns

`Promise`\<[`Basemap`](Basemap.md)>

A promise for the added basemap.

### Example

```typescript
// Add a custom basemap and select it
await felt.addCustomBasemap({
  basemap: {
    type: "xyz_tile",
    tileUrl: "https://example.com/tile.png"
  },
  select: true,
});
```

***

## removeBasemap()

> **removeBasemap**(`id`: `string`): `Promise`\<`void`>

Removes a basemap from the list of available basemaps.

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `id`      | `string` |

### Returns

`Promise`\<`void`>

A promise that resolves when the basemap has been removed.

# Events

## onBasemapChange()

> **onBasemapChange**(`args`: \{ `handler`: (`basemap`: [`Basemap`](Basemap.md)) => `void`; }): `VoidFunction`

Adds a listener for when the basemap changes.

Use this to react to basemap changes, such as updating your UI or
adjusting other map elements to match the new basemap's color scheme.

### Parameters

| Parameter      | Type                                                            |
| -------------- | --------------------------------------------------------------- |
| `args`         | \{ `handler`: (`basemap`: [`Basemap`](Basemap.md)) => `void`; } |
| `args.handler` | (`basemap`: [`Basemap`](Basemap.md)) => `void`                  |

### Returns

`VoidFunction`

A function to unsubscribe from the listener.

### Example

```typescript
// Listen for basemap changes
const unsubscribe = felt.onBasemapChange({
  handler: basemap => {
    console.log(`Switched to ${basemap.name}`);
    updateUIColors(basemap.uiColorScheme);
  },
});

// later on...
unsubscribe();
```
