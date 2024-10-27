# @feltjs/js-sdk

An SDK for Felt maps.

Documentation site is coming soon.

## Getting started

Install the SDK using your preferred package manager:

```bash
npm install @feltjs/js-sdk
```

Embed a Felt map in your app and use the SDK to control it:

```typescript
import { Felt } from "@feltjs/js-sdk";

const map = await Felt.embed(
  document.querySelector("#container"),
  "FELT_MAP_ID",
);
const layers = await map.getLayers();
const elements = await map.getElements();
```
