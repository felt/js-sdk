import { z } from "zod";

import { allModules } from "~/modules/schema";

export type ModuleSchema = {
  methods: null | Array<z.ZodDiscriminatedUnionOption<"type">>;
  listeners: null | Array<z.ZodDiscriminatedUnionOption<"eventName">>;
};

const mergedSchemas = {
  methods: allModules.map((schema) => schema.methods ?? []).flat(),
  listeners: allModules.map((schema) => schema.listeners ?? []).flat(),
} satisfies ModuleSchema;

const EventSchema = z.discriminatedUnion("eventName", [
  // this first literal event keeps zod quiet when creating the discriminated union
  z.strictObject({ eventName: z.literal("") }),
  ...mergedSchemas.listeners,
]);

const AddListenerSchema = z.strictObject({
  type: z.literal("felt.addListener"),
  event: EventSchema,
});

const RemoveListenerSchema = z.strictObject({
  type: z.literal("felt.removeListener"),
  id: z.string(),
});

const ReadySchema = z.strictObject({
  type: z.literal("felt.ready"),
});

export const AllMessagesSchema = z.discriminatedUnion("type", [
  ReadySchema,
  AddListenerSchema,
  RemoveListenerSchema,
  ...mergedSchemas.methods,
]);

/**
 * A derived schema that only checks the type of the message.
 */
export const PreliminarySchema = z.object({
  type: z.enum(
    AllMessagesSchema.options.map((option) => option.shape.type.value) as [
      string,
      ...string[],
    ],
  ),
});
