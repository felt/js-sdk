import { z } from "zod";
import type { zInfer } from "~/lib/utils";

const BaseBasemapSchema = z.object({
  /**
   * A unique identifier for the basemap.
   *
   * @remarks Do not rely on the stability of this ID for Felt basemaps, as they are
   * subject to change.
   */
  id: z.string(),

  /**
   * The name of the basemap.
   */
  name: z.string(),

  /**
   * The color scheme of the UI that goes with the basemap. It is best to set this to
   * "light" if your basemap is broadly light, and "dark" if your basemap is broadly dark.
   */
  uiColorScheme: z.enum(["light", "dark"]),

  /**
   * The attribution of the basemap, which is shown in the map's UI.
   */
  attribution: z.string().optional(),
});

interface BaseBasemap extends zInfer<typeof BaseBasemapSchema> {}

export interface FeltBasemap extends BaseBasemap {
  type: "felt";
  theme: "color_light" | "monochrome_dark" | "monochrome_light" | "satellite";
}

export const ColorBaseBasemapSchema = BaseBasemapSchema.extend({
  type: z.literal("color"),
  color: z.string(),
});

export interface ColorBasemap extends zInfer<typeof ColorBaseBasemapSchema> {}

export const CustomTileBasemapSchema = BaseBasemapSchema.extend({
  type: z.literal("xyz_tile"),
  tileUrl: z.string(),
});

export interface CustomTileBasemap
  extends zInfer<typeof CustomTileBasemapSchema> {}

export type ColorBasemapInput = Omit<ColorBasemap, "id">;
export type CustomTileBasemapInput = Omit<CustomTileBasemap, "id">;

export type Basemap = FeltBasemap | ColorBasemap | CustomTileBasemap;
