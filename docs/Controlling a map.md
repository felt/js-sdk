The Felt SDK has a number of methods for interacting with maps, depending on how you set up your
HTML.

All Felt maps are embedded in iframes, and the SDK can do this for you or can connect to an
existing Felt iframe.

## Felt map IDs

Felt map IDs are unique identifiers for Felt maps. They are used to embed maps in iframes, and to
connect to existing iframes.

To get the ID of a Felt map, click the Map settings button in the main toolbar, and then you can
see the Map ID in the Developers section.

Alternatively, you can look at the URL of the map. For example, the map at
`https://felt.com/map/Map-title-xPV9BqMuYQxmUraVWy9C89BNA` has the ID `xPV9BqMuYQxmUraVWy9C89BNA`.

Throughout the documentation, we'll use the placeholder `FELT_MAP_ID` to refer to a Felt map ID.

## Using `Felt.embed` to create an iframe

Create an HTML page with a container element:

```html
<html>
  <body>
    <h1>My Felt app</h1>
    <div id="container"></div>
  </body>
</html>
```

Embed a Felt map in your container element and use the SDK to control it by calling `Felt.embed`, 
passing the container element as the first argument:

```javascript
import { Felt } from "@feltjs/js-sdk";

const map = await Felt.embed(
  document.querySelector("#container"),
  "FELT_MAP_ID",
);

// Now use the SDK
const layers = await map.getLayers();
const elements = await map.getElements();

// You also have a reference to the iframe itself:
map.iframe.style.width = "50%";
```

## Using `Felt.embed` to adjust an existing iframe

In some cases, you may want to add a "template" iframe to your page. This can be useful if you want 
to style your iframe in a specific way.

In this case, you can call `Felt.embed` with the iframe element as the first argument:
```html
<html>
  <body>
    <h1>My Felt app</h1>
    <iframe id="my-iframe"></iframe>
  </body>
</html>
```

```javascript
import { Felt } from "@feltjs/js-sdk";

const map = await Felt.embed(
  document.querySelector("#my-iframe"),
  "FELT_MAP_ID",
);
```

## Using `Felt.connect` to connect to an existing embedded Felt map

There may be cases where you already have a Felt map embedded in an iframe, and you want to
control it using the SDK. This can be useful if your HTML is server-rendered with the Felt map
already embedded.

In this case, you can call `Felt.connect` with the iframe's window as the first argument:

```html
<html>
  <body>
    <h1>My Felt app</h1>
    <iframe src="https://felt.com/map/example-map-123" id="my-iframe"></iframe>
  </body>
</html>
```

```javascript
import { Felt } from "@feltjs/js-sdk";

const map = await Felt.connect(document.querySelector("#my-iframe").contentWindow);
```

Note that in this case, you don't need to pass the Felt map ID to `Felt.connect`, because we are
connecting to a map that has already been embedded.
