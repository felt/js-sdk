import * as z from "zod";
import type { ModuleSchema } from "../../lib/schema";
import { methodMessage, type Method } from "../../types/builders";
import {
  LayersGetRequestSchema,
  type LayersGetAllResponse,
  type LayersGetResponse,
} from "./types";

const LayersGetMessage = methodMessage("layers.get", LayersGetRequestSchema);
const LayersGetAllMessage = methodMessage("layers.getAll", z.undefined());

export const layersSchema = {
  methods: [LayersGetMessage, LayersGetAllMessage],
  listeners: null,
} satisfies ModuleSchema;

export type LayersSchema = {
  methods: {
    "layers.get": Method<z.infer<typeof LayersGetMessage>, LayersGetResponse>;
    "layers.getAll": Method<
      z.infer<typeof LayersGetAllMessage>,
      LayersGetAllResponse
    >;
  };
  listeners: {};
};
