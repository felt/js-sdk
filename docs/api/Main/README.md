***

The Main module represents the entry point for the Felt SDK.

Use the [Felt](Felt.md) object to embed a new iframe, or connect to an existing embedded
iframe.

Once you have connected to a Felt map (either by embedding or connecting to an existing
iframe), you can use the [FeltController](FeltController.md) object to control the map.

## Contents

* [Example](#example)
* [Index](#index)
  * [Controller](#controller)
  * [Instantiation](#instantiation)

## Example

```typescript
// embed the map
const map = await Felt.embed(container, "felt-map-abc-123");

// get information about the layers
const layers = await map.getLayers();

// set the viewport to a specific location and zoom level
await map.setViewport({
  center: { latitude: 37.8113, longitude: -122.2682 },
  zoom: 10,
});
```

## Index

### Controller

* [FeltController](FeltController.md)

### Instantiation

* [FeltEmbedOptions](FeltEmbedOptions.md)
* [Felt](Felt.md)
