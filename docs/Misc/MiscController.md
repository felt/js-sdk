***

The Misc controller provides access to miscellaneous map functionality
that doesn't fit into other controller categories.

# Extended by

* [`FeltController`](../Main/FeltController.md)

# Methods

## getMapDetails()

> **getMapDetails**(): `Promise`\<[`MapDetails`](MapDetails.md)>

Gets the details of the map.

Use this method to retrieve metadata about the current map, such as
its title, description, and other map-level information.

### Returns

`Promise`\<[`MapDetails`](MapDetails.md)>

A promise that resolves to the map details.

### Example

```typescript
const details = await felt.getMapDetails();
console.log({
  id: details.id,
  title: details.title,
  description: details.description,
});
```

***

## exportImage()

> **exportImage**(`params`?: [`ExportImageParams`](ExportImageParams.md)): `Promise`\<[`ExportImageResult`](ExportImageResult.md)>

Exports an image of the map exactly as the viewer currently sees it.

### Parameters

| Parameter | Type                                        | Description                                  |
| --------- | ------------------------------------------- | -------------------------------------------- |
| `params`? | [`ExportImageParams`](ExportImageParams.md) | The size, format and contents of the export. |

### Returns

`Promise`\<[`ExportImageResult`](ExportImageResult.md)>

A promise that resolves to the exported file.

### Remarks

The export includes changes made through the SDK in this session, such as
layer visibility, filters and layers created with `createLayersFromGeoJson`,
none of which the REST API's image export can see.

* The map owner must turn on "Allow image export from embeds" for anonymous
  viewers to use this; otherwise the call rejects.
* Only one export runs at a time; a second call while one is running rejects.
* The call rejects if the page is hidden, because browsers throttle
  rendering in background tabs.
* Selection and hover highlights are never drawn.

### Example

```typescript
const { blob, filename } = await felt.exportImage({
  format: "png",
  width: 1200,
  height: 800,
});
const url = URL.createObjectURL(blob);
```
