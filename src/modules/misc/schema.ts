import { z } from "zod";
import { methodMessage, type Method } from "~/lib/builders";
import type { ModuleSchema } from "~/lib/ModuleSchema";
import type { zInfer } from "~/lib/utils";
import { ExportImageParamsSchema } from "./types";

const GetMapDetailsMessage = methodMessage("getMapDetails", z.undefined());
const ExportImageMessage = methodMessage(
  "exportImage",
  ExportImageParamsSchema.optional(),
);

export const miscSchema = {
  methods: [GetMapDetailsMessage, ExportImageMessage],
  listeners: [],
} satisfies ModuleSchema;

export type MiscSchema = {
  methods: {
    getMapDetails: Method<zInfer<typeof GetMapDetailsMessage>>;
    exportImage: Method<zInfer<typeof ExportImageMessage>>;
  };
  listeners: {};
};
