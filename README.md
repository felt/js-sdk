# @feltmaps/js-sdk

An SDK for Felt maps.

- [Documentation](https://developers.felt.com/js-sdk)
- [API Reference](https://developers.felt.com/js-sdk-api-reference)

## Quickstart

Install the SDK using your preferred package manager:

```bash
npm install @feltmaps/js-sdk
```

Embed a Felt map in your app and use the SDK to control it:

```typescript
import { Felt } from "@feltmaps/js-sdk";

const map = await Felt.embed(
  document.querySelector("#container"),
  "FELT_MAP_ID",
);
const layers = await map.getLayers();
const elements = await map.getElements();
map.setViewport({
  center: {
    latitude: 37.8044,
    longitude: -122.271,
  },
  zoom: 13,
});
```
