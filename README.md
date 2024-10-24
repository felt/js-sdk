# @feltmaps/js-sdk

An SDK for Felt maps.

Documentation site is coming soon.

## Getting started

Install the SDK using your preferred package manager:

```bash
npm install @feltmaps/js-sdk
```

Embed a Felt map in your app and use the SDK to control it:

```typescript
import { Felt } from "@feltmaps/js-sdk";

const map = await Felt.embed(
  document.querySelector("#container"),
  "felt-map-id",
);
const layers = await map.getLayers();
const elements = await map.getElements();
```
