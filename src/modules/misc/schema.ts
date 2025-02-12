import { z } from "zod";
import { methodMessage, type Method } from "~/lib/builders";
import type { ModuleSchema } from "~/lib/ModuleSchema";
import type { zInfer } from "~/lib/utils";
import type { MapDetails } from "./types";

const GetMapDetailsMessage = methodMessage("getMapDetails", z.undefined());

export const miscSchema = {
  methods: [GetMapDetailsMessage],
  listeners: [],
} satisfies ModuleSchema;

export type MiscSchema = {
  methods: {
    getMapDetails: Method<zInfer<typeof GetMapDetailsMessage>, MapDetails>;
  };
  listeners: {};
};
