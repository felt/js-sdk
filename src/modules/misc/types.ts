import { z } from "zod";
import type { zInfer } from "~/lib/utils";
import {
  type ViewportCenterZoom,
  ViewportCenterZoomSchema,
} from "~/modules/viewport/types";

/**
 * The details of a map.
 *
 * @group Types
 */
export type MapDetails = {
  /**
   * The id of the map.
   */
  id: string;

  /**
   * The title of the map.
   */
  title: string;

  /**
   * The description of the map.
   */
  description: string | null;
};

/**
 * The parameters for the {@link MiscController.exportImage | `exportImage`} method.
 *
 * @group Types
 */
export interface ExportImageParams
  extends zInfer<typeof ExportImageParamsSchema> {
  /**
   * The width of the exported image in CSS pixels.
   *
   * @remarks
   * The output image is `width × pixelRatio` pixels wide. Defaults to the
   * width of the embedded map.
   */
  width?: number;

  /**
   * The height of the exported image in CSS pixels.
   *
   * @remarks
   * The output image is `height × pixelRatio` pixels tall. Defaults to the
   * height of the embedded map.
   */
  height?: number;

  /**
   * How many output pixels to draw per CSS pixel.
   *
   * @defaultValue `2`
   */
  pixelRatio?: 1 | 2 | 3 | 4;

  /**
   * The file format of the export.
   *
   * @remarks
   * `"svg"` is only available on workspaces with a Business plan or higher;
   * on other plans the call rejects.
   *
   * @defaultValue `"png"`
   */
  format?: "png" | "jpg" | "pdf" | "svg";

  /**
   * The quality of a JPG export, between 0 (exclusive) and 1.
   *
   * @remarks
   * Ignored for formats other than `"jpg"`.
   *
   * @defaultValue `0.9`
   */
  jpgQuality?: number;

  /**
   * The center and zoom of the exported map.
   *
   * @remarks
   * Defaults to the map's current viewport.
   */
  viewport?: ViewportCenterZoom;

  /**
   * Which parts of the legend card to include in the export.
   */
  legend?: ExportImageLegendOptions;

  /**
   * Whether to draw a scale bar on the export.
   *
   * @defaultValue `true`
   */
  showScaleBar?: boolean;

  /**
   * Whether to also save the file in the viewer's browser.
   *
   * @remarks
   * The download is started from inside the embedded map, so a browser may
   * block it (for example, a sandboxed iframe needs `allow-downloads`). The
   * file is returned in the result either way, so a host page that needs the
   * download to be reliable should save the returned `blob` itself.
   *
   * @defaultValue `false`
   */
  download?: boolean;
}

/**
 * Which parts of the legend card to include in an image export.
 *
 * @group Types
 */
export interface ExportImageLegendOptions {
  /**
   * Whether to include the legend card at all.
   *
   * @defaultValue `true`
   */
  visible?: boolean;

  /**
   * Whether to show the map title at the top of the legend card.
   *
   * @defaultValue `true`
   */
  showTitle?: boolean;

  /**
   * Whether to show the map description under the title.
   *
   * @defaultValue `true`
   */
  showDescription?: boolean;

  /**
   * Whether to show the map's components in the legend card.
   *
   * @defaultValue `true`
   */
  showComponents?: boolean;
}

const ExportImageLegendOptionsSchema = z.object({
  visible: z.boolean().optional(),
  showTitle: z.boolean().optional(),
  showDescription: z.boolean().optional(),
  showComponents: z.boolean().optional(),
});

export const ExportImageParamsSchema = z.object({
  width: z.number().positive().optional(),
  height: z.number().positive().optional(),
  pixelRatio: z
    .union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
    .optional(),
  format: z.enum(["png", "jpg", "pdf", "svg"]).optional(),
  jpgQuality: z.number().gt(0).lte(1).optional(),
  viewport: ViewportCenterZoomSchema.optional(),
  legend: ExportImageLegendOptionsSchema.optional(),
  showScaleBar: z.boolean().optional(),
  download: z.boolean().optional(),
});

/**
 * The result of an image export.
 *
 * @group Types
 */
export interface ExportImageResult {
  /**
   * The exported file.
   */
  blob: Blob;

  /**
   * A suggested file name for the export, including its extension.
   */
  filename: string;

  /**
   * Ways the export is complete but imperfect.
   */
  warnings: ExportImageWarnings;
}

/**
 * Ways an image export is complete but imperfect.
 *
 * @group Types
 */
export interface ExportImageWarnings {
  /**
   * Whether some map tiles had not finished loading when the image was drawn.
   *
   * @remarks
   * Calling `exportImage` again once the map is idle usually fixes this.
   */
  tilesMissing: boolean;

  /**
   * The number of elements that could not be drawn into the export.
   */
  skippedElementCount: number;

  /**
   * Whether the export was drawn at a lower resolution than requested
   * because it exceeded the maximum export size.
   */
  resolutionClamped: boolean;
}
