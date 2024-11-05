import type { z } from "zod";

export type ModuleSchema = {
  methods: null | Array<z.ZodDiscriminatedUnionOption<"type">>;
  listeners: null | Array<z.ZodDiscriminatedUnionOption<"eventName">>;
};
