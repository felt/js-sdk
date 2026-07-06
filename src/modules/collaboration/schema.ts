import { z } from "zod";
import {
  listenerMessageNoParams,
  methodMessage,
  type ListenerNoOptions,
  type Method,
} from "~/lib/builders";
import type { ModuleSchema } from "~/lib/ModuleSchema";
import type { zInfer } from "~/lib/utils";
import type { BroadcastEvent, BroadcastStateEvent, JsonValue } from "./types";

/**
 * The maximum size, in bytes, of a serialized broadcast message. Messages
 * larger than this are rejected at the SDK boundary (and again on the server)
 * to protect the shared realtime channel.
 */
const MAX_BROADCAST_MESSAGE_BYTES = 32 * 1024;

/**
 * A recursive schema describing any JSON-serializable value. Broadcast payloads
 * are kept fully opaque so extensions can send whatever shape they need.
 */
const JsonValueSchema: z.ZodType<JsonValue> = z.lazy(() =>
  z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.null(),
    z.array(JsonValueSchema),
    z.record(JsonValueSchema),
  ]),
);

function serializedByteLength(value: JsonValue): number {
  return new TextEncoder().encode(JSON.stringify(value)).length;
}

const BroadcastParams = z
  .object({
    message: JsonValueSchema,
  })
  .refine(
    ({ message }) =>
      serializedByteLength(message) <= MAX_BROADCAST_MESSAGE_BYTES,
    {
      message: `Broadcast message exceeds the ${MAX_BROADCAST_MESSAGE_BYTES} byte limit`,
      path: ["message"],
    },
  );

const SetBroadcastStateParams = z
  .object({
    state: JsonValueSchema,
  })
  .refine(
    ({ state }) => serializedByteLength(state) <= MAX_BROADCAST_MESSAGE_BYTES,
    {
      message: `Broadcast state exceeds the ${MAX_BROADCAST_MESSAGE_BYTES} byte limit`,
      path: ["state"],
    },
  );

const BroadcastMessage = methodMessage("broadcast", BroadcastParams);
const SetBroadcastStateMessage = methodMessage(
  "setBroadcastState",
  SetBroadcastStateParams,
);
const OnBroadcastMessage = listenerMessageNoParams("onBroadcast");
const OnBroadcastStateChangeMessage = listenerMessageNoParams(
  "onBroadcastStateChange",
);

export const collaborationSchema = {
  methods: [BroadcastMessage, SetBroadcastStateMessage],
  listeners: [OnBroadcastMessage, OnBroadcastStateChangeMessage],
} satisfies ModuleSchema;

export type CollaborationSchema = {
  methods: {
    broadcast: Method<zInfer<typeof BroadcastMessage>>;
    setBroadcastState: Method<zInfer<typeof SetBroadcastStateMessage>>;
  };
  listeners: {
    onBroadcast: ListenerNoOptions<BroadcastEvent>;
    onBroadcastStateChange: ListenerNoOptions<BroadcastStateEvent>;
  };
};
