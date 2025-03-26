# API Reference

To get started:

```
import { Felt } from "@feltmaps/js-sdk";

const felt = await Felt.embed(
  document.querySelector("#container"),
  "FELT_MAP_ID",
  {
    uiControls: {
      cooperativeGestures: false,
      fullScreenButton: false,
      showLegend: false,
    },
  }
);
const layers = await map.getLayers();
```

**View {@link Main.FeltController | FeltController} for a complete list of available functions. {@link Main.FeltEmbedOptions | FeltEmbedOptions} enumerates initialization options.**
