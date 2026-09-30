import { z } from "zod";
import { type Method, methodMessage } from "~/lib/builders";
import type { ModuleSchema } from "~/lib/ModuleSchema";
import type { zInfer } from "~/lib/utils";
import {
  CreateEphemeralRasterLayerSchema,
  type EphemeralRasterLayer,
  SetEphemeralRasterLayerCoordinatesSchema,
  UpdateEphemeralRasterLayerSchema,
} from "./types";

const CreateEphemeralRasterLayerMessage = methodMessage(
  "createEphemeralRasterLayer",
  CreateEphemeralRasterLayerSchema,
);

const UpdateEphemeralRasterLayerMessage = methodMessage(
  "updateEphemeralRasterLayer",
  UpdateEphemeralRasterLayerSchema,
);

const SetEphemeralRasterLayerCoordinatesMessage = methodMessage(
  "setEphemeralRasterLayerCoordinates",
  SetEphemeralRasterLayerCoordinatesSchema,
);

const DeleteEphemeralRasterLayerMessage = methodMessage(
  "deleteEphemeralRasterLayer",
  z.string(),
);

export const rasterLayersSchema = {
  methods: [
    CreateEphemeralRasterLayerMessage,
    UpdateEphemeralRasterLayerMessage,
    SetEphemeralRasterLayerCoordinatesMessage,
    DeleteEphemeralRasterLayerMessage,
  ],
  listeners: [],
} satisfies ModuleSchema;

export type RasterLayersSchema = {
  methods: {
    createEphemeralRasterLayer: Method<
      zInfer<typeof CreateEphemeralRasterLayerMessage>,
      EphemeralRasterLayer
    >;
    updateEphemeralRasterLayer: Method<
      zInfer<typeof UpdateEphemeralRasterLayerMessage>
    >;
    setEphemeralRasterLayerCoordinates: Method<
      zInfer<typeof SetEphemeralRasterLayerCoordinatesMessage>
    >;
    deleteEphemeralRasterLayer: Method<
      zInfer<typeof DeleteEphemeralRasterLayerMessage>
    >;
  };
  listeners: {};
};
