import { z } from "zod";
import type { zInfer } from "~/lib/utils";

// Helpers

const uiElementLifecycleSchema = z.object({
  onCreate: z.function().optional(),
  onDestroy: z.function().optional(),
});

const uiElementLifecycleClonableSchema = z.object({
  onCreate: z.string().optional(),
  onDestroy: z.string().optional(),
});

const uiElementBaseSchema = uiElementLifecycleSchema.extend({
  id: z.string(),
});

const uiElementBaseInputSchema = uiElementLifecycleSchema.extend({
  id: z.string().optional(),
});

const uiElementBaseClonableSchema = uiElementLifecycleClonableSchema.extend({
  id: z.string().optional(),
});

const uiLabelReadyElementBaseSchema = z.object({ label: z.string() });

const uiLabelReadyElementSchemas = {
  public: uiElementBaseSchema.extend(uiLabelReadyElementBaseSchema.shape),
  input: uiElementBaseInputSchema.extend(uiLabelReadyElementBaseSchema.shape),
  clonable: uiElementBaseClonableSchema.extend(
    uiLabelReadyElementBaseSchema.shape,
  ),
};

// Actual elements

const uiTextElementBaseSchema = z.object({
  type: z.literal("Text"),
  content: z.string(),
});

const uiTextElementSchemas = {
  public: uiElementBaseSchema.extend(uiTextElementBaseSchema.shape),
  input: uiElementBaseInputSchema.extend(uiTextElementBaseSchema.shape),
  clonable: uiElementBaseClonableSchema.extend(uiTextElementBaseSchema.shape),
};

const uiButtonElementBaseSchema = z.object({
  type: z.literal("Button"),
  label: z.string(),
  variant: z
    .enum(["primary", "outlined", "transparent", "transparentThin"])
    .optional(),
  disabled: z.boolean().optional(),
});

const uiButtonElementSchemas = {
  public: uiElementBaseSchema
    .extend(uiButtonElementBaseSchema.shape)
    .extend({ onClick: z.function().returns(z.void()) }),
  input: uiElementBaseInputSchema
    .extend(uiButtonElementBaseSchema.shape)
    .extend({ onClick: z.function().returns(z.void()) }),
  clonable: uiElementBaseClonableSchema
    .extend(uiButtonElementBaseSchema.shape)
    .extend({ onClick: z.string() }),
};

const uiTextInputElementBaseSchema = z.object({
  type: z.literal("TextInput"),
  value: z.string(),
  placeholder: z.string().optional(),
});

const uiTextInputElementSchemas = {
  public: uiLabelReadyElementSchemas.public
    .extend(uiTextInputElementBaseSchema.shape)
    .extend({
      onChange: z.function().args(z.string()).returns(z.void()).optional(),
      onBlur: z.function().args(z.string()).returns(z.void()).optional(),
      onFocus: z.function().args(z.string()).returns(z.void()).optional(),
    }),
  input: uiLabelReadyElementSchemas.input
    .extend(uiTextInputElementBaseSchema.shape)
    .extend({
      onChange: z.function().args(z.string()).returns(z.void()).optional(),
      onBlur: z.function().args(z.string()).returns(z.void()).optional(),
      onFocus: z.function().args(z.string()).returns(z.void()).optional(),
    }),
  clonable: uiLabelReadyElementSchemas.clonable
    .extend(uiTextInputElementBaseSchema.shape)
    .extend({
      onChange: z.string().optional(),
      onBlur: z.string().optional(),
      onFocus: z.string().optional(),
    }),
};

const uiDividerElementSchemas = {
  public: uiElementBaseSchema.extend({ type: z.literal("Divider") }),
  input: uiElementBaseInputSchema.extend({ type: z.literal("Divider") }),
  clonable: uiElementBaseClonableSchema.extend({ type: z.literal("Divider") }),
};

const uiFlexibleSpaceElementSchemas = {
  public: uiElementBaseSchema.extend({ type: z.literal("FlexibleSpace") }),
  input: uiElementBaseInputSchema.extend({ type: z.literal("FlexibleSpace") }),
  clonable: uiElementBaseClonableSchema.extend({
    type: z.literal("FlexibleSpace"),
  }),
};

const uiButtonGroupElementBaseSchema = z.object({
  type: z.literal("ButtonGroup"),
  align: z.enum(["start", "end"]).optional(),
});

const uiButtonGroupElementSchemas = {
  public: uiElementBaseSchema
    .extend(uiButtonGroupElementBaseSchema.shape)
    .extend({
      items: z.array(
        z.union([
          uiButtonElementSchemas.public,
          uiTextElementSchemas.public,
          uiFlexibleSpaceElementSchemas.public,
        ]),
      ),
    }),
  input: uiElementBaseInputSchema
    .extend(uiButtonGroupElementBaseSchema.shape)
    .extend({
      items: z.array(
        z.union([
          uiButtonElementSchemas.input,
          uiTextElementSchemas.input,
          uiFlexibleSpaceElementSchemas.input,
        ]),
      ),
    }),
  clonable: uiElementBaseClonableSchema
    .extend(uiButtonGroupElementBaseSchema.shape)
    .extend({
      items: z.array(
        z.union([
          uiButtonElementSchemas.clonable,
          uiTextElementSchemas.clonable,
          uiFlexibleSpaceElementSchemas.clonable,
        ]),
      ),
    }),
};

const uiSelectElementBaseSchema = z.object({
  type: z.literal("Select"),
  options: z.array(z.object({ label: z.string(), value: z.string() })),
  value: z.string().optional(),
  search: z.boolean().optional(),
  placeholder: z.string().optional(),
});

const uiSelectElementSchemas = {
  public: uiLabelReadyElementSchemas.public
    .extend(uiSelectElementBaseSchema.shape)
    .extend({ onChange: z.function().args(z.string()).returns(z.void()) }),
  input: uiLabelReadyElementSchemas.input
    .extend(uiSelectElementBaseSchema.shape)
    .extend({ onChange: z.function().args(z.string()).returns(z.void()) }),
  clonable: uiLabelReadyElementSchemas.clonable
    .extend(uiSelectElementBaseSchema.shape)
    .extend({ onChange: z.string() }),
};

const anyUiElementPublicSchema = z.union([
  uiTextElementSchemas.public,
  uiButtonElementSchemas.public,
  uiTextInputElementSchemas.public,
  uiDividerElementSchemas.public,
  uiButtonGroupElementSchemas.public,
  uiSelectElementSchemas.public,
]);

const anyUiElementInputSchema = z.union([
  uiTextElementSchemas.input,
  uiButtonElementSchemas.input,
  uiTextInputElementSchemas.input,
  uiDividerElementSchemas.input,
  uiButtonGroupElementSchemas.input,
  uiSelectElementSchemas.input,
]);

const anyUiElementUpdateInputSchema = z.union([
  uiTextElementSchemas.input.partial().required({ type: true, id: true }),
  uiButtonElementSchemas.input.partial().required({ type: true, id: true }),
  uiTextInputElementSchemas.input.partial().required({ type: true, id: true }),
  uiDividerElementSchemas.input.partial().required({ type: true, id: true }),
  uiButtonGroupElementSchemas.input
    .partial()
    .required({ type: true, id: true }),
  uiSelectElementSchemas.input.partial().required({ type: true, id: true }),
]);

const anyUiElementClonableSchema = z.union([
  uiTextElementSchemas.clonable,
  uiButtonElementSchemas.clonable,
  uiTextInputElementSchemas.clonable,
  uiDividerElementSchemas.clonable,
  uiButtonGroupElementSchemas.clonable,
  uiSelectElementSchemas.clonable,
]);

const anyUiElementUpdateClonableSchema = z.union([
  uiTextElementSchemas.clonable.partial().required({ type: true, id: true }),
  uiButtonElementSchemas.clonable.partial().required({ type: true, id: true }),
  uiTextInputElementSchemas.clonable
    .partial()
    .required({ type: true, id: true }),
  uiDividerElementSchemas.clonable.partial().required({ type: true, id: true }),
  uiButtonGroupElementSchemas.clonable
    .partial()
    .required({ type: true, id: true }),
  uiSelectElementSchemas.clonable.partial().required({ type: true, id: true }),
]);

const uiPanelElementSchemas = {
  public: uiElementBaseSchema.extend({
    type: z.literal("Panel"),
    title: z.string().optional(),
    onClose: z.function().returns(z.void()).optional(),
    items: z.array(anyUiElementPublicSchema),
    footer: z.array(anyUiElementPublicSchema).optional(),
  }),
  input: uiElementBaseInputSchema.extend({
    type: z.literal("Panel").optional(),
    title: z.string().optional(),
    onClose: z.function().returns(z.void()).optional(),
    items: z.array(anyUiElementInputSchema),
    footer: z.array(anyUiElementInputSchema).optional(),
  }),
  clonable: uiElementBaseClonableSchema.extend({
    type: z.literal("Panel").optional(),
    title: z.string().optional(),
    onClose: z.string().optional(),
    items: z.array(anyUiElementClonableSchema),
    footer: z.array(anyUiElementClonableSchema).optional(),
  }),
};

/**
 * @public
 */
export interface PanelInput extends zInfer<typeof PanelInputSchema> {}

/**
 * @internal
 * @ignore
 */
export const PanelSchema = uiPanelElementSchemas.public;

/**
 * @internal
 * @ignore
 */
export const PanelInputSchema = uiPanelElementSchemas.input;

/**
 * @internal
 * @ignore
 */
export const PanelClonableSchema = uiPanelElementSchemas.clonable;

/**
 * @internal
 * @ignore
 */
const UpdatePanelInputSchema = PanelInputSchema.partial().required({
  id: true,
});

/**
 * @internal
 * @ignore
 */
export interface UpdatePanelInput
  extends zInfer<typeof UpdatePanelInputSchema> {}

/**
 * @internal
 * @ignore
 */
export const UpdatePanelClonableSchema = PanelClonableSchema.partial().required(
  {
    id: true,
  },
);

/**
 * @internal
 * @ignore
 */
export const AddElementToPanelInputSchema = z.object({
  panelId: z.string(),
  on: z.enum(["items", "footer"]),
  element: anyUiElementInputSchema,
});

/**
 * @internal
 * @ignore
 */
export interface AddElementToPanelInput
  extends zInfer<typeof AddElementToPanelInputSchema> {}

/**
 * @internal
 * @ignore
 */
export const AddElementToPanelClonableSchema = z.object({
  panelId: z.string(),
  on: z.enum(["items", "footer"]),
  element: anyUiElementClonableSchema,
});

/**
 * @internal
 * @ignore
 */
export const UpdateElementInPanelInputSchema = z.object({
  panelId: z.string(),
  element: anyUiElementUpdateInputSchema,
});

export interface UpdateElementInPanelInput
  extends zInfer<typeof UpdateElementInPanelInputSchema> {}

/**
 * @internal
 * @ignore
 */
export const UpdateElementInPanelClonableSchema = z.object({
  panelId: z.string(),
  element: anyUiElementUpdateClonableSchema,
});

/**
 * @public
 */
export interface UiControlsOptions
  extends zInfer<typeof UiControlsOptionsSchema> {}

/**
 * @internal
 * @ignore
 */
export const UiControlsOptionsSchema = z.object({
  /**
   * Whether or not the legend is shown.
   *
   * @defaultValue true
   */
  showLegend: z.boolean().optional(),

  /**
   * When co-operative gestures are enabled, the pan and zoom gestures are
   * adjusted to work better when the map is embedded in another page.
   *
   * @remarks
   * On mobile devices, enabling co-operative gestures will allow the user to
   * pan past the embedded map with a single finger drag. To pan the map, they
   * must use two fingers.
   *
   * On desktop devices, enabling co-operative gestures allows the user to
   * scroll past the embedded map using their scroll wheel or trackpad. To
   * zoom the map, they must hold the Ctrl (Windows) or Command key (Mac) while
   * scrolling.
   *
   * @defaultValue true
   */
  cooperativeGestures: z.boolean().optional(),

  /**
   * Whether or not the full screen button is shown in an embedded map.
   *
   * @remarks
   * When clicked, this will open the map in a new tab or window.
   *
   * @defaultValue true
   */
  fullScreenButton: z.boolean().optional(),

  /**
   * Whether or not the geolocation button is shown in an embedded map.
   *
   * @remarks
   * The geolocation feature will plot your position on the map. If you
   * click the button again, it will start tracking your position.
   *
   * @defaultValue false
   */
  geolocation: z.boolean().optional(),

  /**
   * Whether or not the zoom controls are shown in an embedded map.
   *
   * @remarks
   * This does not affect whether or not the map can be zoomed, just
   * the display of the zoom controls in the bottom right corner of the map.
   *
   * @defaultValue true
   */
  zoomControls: z.boolean().optional(),

  /**
   * Whether or not the scale bar is shown in an embedded map.
   *
   * @defaultValue true
   */
  scaleBar: z.boolean().optional(),
});

/**
 * The options for which parts of the Felt UI can be shown when interacting with
 * features and elements on the map.
 *
 * Switching these off can be useful if you add your own click, selection or hover
 * handlers for features and elements.
 *
 * @public
 */
export interface UiOnMapInteractionsOptions
  extends zInfer<typeof UiOnMapInteractionsOptionsSchema> {}

/**
 * @internal
 * @ignore
 */
export const UiOnMapInteractionsOptionsSchema = z.object({
  /**
   * Set this to `false` to prevent the panel that shows information about a selected
   * feature from being shown.
   */
  featureSelectPanel: z.boolean().optional(),

  /**
   * Set this to `false` to prevent the panel that shows information about a hovered
   * feature from being shown.
   */
  featureHoverPanel: z.boolean().optional(),

  /**
   * Set this to `false` to prevent the panel that shows information about a selected
   * element from being shown.
   */
  elementSelectPanel: z.boolean().optional(),

  /**
   * Set this to `false` to prevent clicking on a map link element from opening that link
   * in a new tab or window.
   */
  linkClickOpen: z.boolean().optional(),

  /**
   * Set this to `false` to prevent clicking on an image element from opening the image
   * in a lightbox.
   */
  imageLightboxOpen: z.boolean().optional(),
});
