***

The parameters for the [\`exportImage\`](MiscController.md#exportimage) method.

# Properties

## width?

> `optional` **width**: `number`

The width of the exported image in CSS pixels.

### Remarks

The output image is `width × pixelRatio` pixels wide. Defaults to the
width of the embedded map.

***

## height?

> `optional` **height**: `number`

The height of the exported image in CSS pixels.

### Remarks

The output image is `height × pixelRatio` pixels tall. Defaults to the
height of the embedded map.

***

## pixelRatio?

> `optional` **pixelRatio**: `1` | `2` | `3` | `4`

How many output pixels to draw per CSS pixel.

### Default Value

`2`

***

## format?

> `optional` **format**: `"png"` | `"jpg"` | `"pdf"` | `"svg"`

The file format of the export.

### Remarks

`"svg"` is only available on workspaces with a Business plan or higher;
on other plans the call rejects.

### Default Value

`"png"`

***

## jpgQuality?

> `optional` **jpgQuality**: `number`

The quality of a JPG export, between 0 (exclusive) and 1.

### Remarks

Ignored for formats other than `"jpg"`.

### Default Value

`0.9`

***

## viewport?

> `optional` **viewport**: [`ViewportCenterZoom`](../Viewport/ViewportCenterZoom.md)

The center and zoom of the exported map.

### Remarks

Defaults to the map's current viewport.

***

## legend?

> `optional` **legend**: [`ExportImageLegendOptions`](ExportImageLegendOptions.md)

Which parts of the legend card to include in the export.

***

## showScaleBar?

> `optional` **showScaleBar**: `boolean`

Whether to draw a scale bar on the export.

### Default Value

`true`

***

## download?

> `optional` **download**: `boolean`

Whether to also save the file in the viewer's browser.

### Remarks

The download is started from inside the embedded map, so a browser may
block it (for example, a sandboxed iframe needs `allow-downloads`). The
file is returned in the result either way, so a host page that needs the
download to be reliable should save the returned `blob` itself.

### Default Value

`false`
