import * as z from "zod";

import { allModules } from "../modules/schema";

export type ModuleSchema = {
  commands: Array<z.ZodDiscriminatedUnionOption<"type">>;
  queries: null | Array<z.ZodDiscriminatedUnionOption<"type">>;
  listeners: null | Array<z.ZodDiscriminatedUnionOption<"eventName">>;
};

const mergedSchemas = {
  commands: allModules.map((schema) => schema.commands).flat(),
  queries: allModules.map((schema) => schema.queries ?? []).flat(),
  listeners: allModules.map((schema) => schema.listeners ?? []).flat(),
} satisfies ModuleSchema;

const EventSchema = z.discriminatedUnion("eventName", [
  // this first literal event keeps zod quiet when creating the discriminated union
  z.object({ eventName: z.literal("") }),
  ...mergedSchemas.listeners,
]);

const AddListenerSchema = z.object({
  type: z.literal("felt.addListener"),
  event: EventSchema,
});

const RemoveListenerSchema = z.object({
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
  ...mergedSchemas.commands,
  ...mergedSchemas.queries,
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
