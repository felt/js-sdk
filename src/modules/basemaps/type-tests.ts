import type { BasemapsController } from "./controller";

const controller: BasemapsController = {} as BasemapsController;

const basemaps = await controller.getBasemaps();
const first = basemaps[0];
if (first) {
  first.id;
  first.name;
  first.uiColorScheme;
  first.attribution;

  if (first?.type === "xyz_tile") {
    first.tileUrl;
  } else if (first?.type === "color") {
    first.color;
  } else if (first?.type === "felt") {
    first.theme;
  }
}

controller.addCustomBasemap({
  basemap: {
    type: "xyz_tile",
    tileUrl: "https://example.com/tile.png",
    uiColorScheme: "light",
    name: "Example Basemap",
  },
});

// check discriminated union input
controller.addCustomBasemap({
  basemap: {
    type: "color",
    uiColorScheme: "light",

    // @ts-expect-error - tileUrl not allowed for color basemaps
    tileUrl: "https://example.com/tile.png",
  },
});

controller.removeBasemap("example-basemap");

const basemap = await controller.getCurrentBasemap();
// @ts-expect-error - whatever isn't a property of the basemap
basemap.whatever;

controller.chooseBasemap("example-basemap");
controller.onBasemapChange({
  handler: (basemap) => {
    basemap.id;
    basemap.name;
    basemap.uiColorScheme;
    basemap.attribution;
  },
});
