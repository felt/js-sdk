# Introduction

The Felt SDK allows you to embed, connect to and ultimately control Felt map embeds, allowing
you to build powerful, interactive custom applications around Felt.

You are able to control many aspects of the Felt UI and map contents, as well as being notified
of events happening in the map such as clicks, selections, etc.

## Installation

Assuming you are using a modern JavaScript environment, install the SDK using your preferred
package manager:

```bash
npm install @feltjs/js-sdk
```

Create an HTML page with a container element:

```html
<html>
  <body>
    <div id="container"></div>
  </body>
</html>
```

Embed a Felt map in your container element and use the SDK to control it:

```javascript
import { Felt } from "@feltjs/js-sdk";

const map = await Felt.embed(
  document.querySelector("#container"),
  "FELT_MAP_ID",
);
const layers = await map.getLayers();
const elements = await map.getElements();
```

For more information on how to control a map, see [Controlling a map](./Controlling%20a%20map.md).
