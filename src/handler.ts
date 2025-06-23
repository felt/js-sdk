import { z, ZodError } from "zod";
import type { TransportableError } from "./lib/errors";
import type { FeltHandlers } from "./lib/interface";
import type { ModuleSchema } from "./lib/ModuleSchema";
import { allModules } from "./modules/main/schema";

/**
 * This function creates a message handler for the Felt SDK. Its job is to start listening
 * for messages from the Felt SDKl, validate and parses the messages before calling the
 * appropriate handler.
 *
 * @param feltWindow - The window to listen on, which is typically just `window`
 * @param handlers - The handlers to call for each type of message.
 * @param options - Optional callbacks for handling unknown and invalid messages.
 * @returns A function to stop the message handler.
 */
export function createMessageHandler(
  feltWindow: Window,
  handlers: FeltHandlers,
  options?: {
    /**
     * Called when a message is received of an unknown type.
     *
     * @param message - The message that was received.
     */
    onUnknownMessage?: (message: unknown) => void;

    /**
     * Called when a message is received that matches a known
     * type, but fails to parse with the full schema.
     *
     * @param message
     */
    onInvalidMessage?: (message: unknown, error: ZodError) => void;
  },
): VoidFunction {
  const unsubscribeMap = new Map<string, VoidFunction>();

  async function handleMessage(message: MessageEvent) {
    // first we check if the type matches at all
    const firstResult = PreliminarySchema.safeParse(message.data);
    if (!firstResult.success) {
      options?.onUnknownMessage?.(message.data);
      return;
    }

    // next we check the message fully
    const result = AllMessagesSchema.safeParse(message.data);
    if (!result.success) {
      options?.onInvalidMessage?.(message.data, result.error);
      message.ports[0]?.postMessage(createErrorMessage(result.error.message));
      return;
    }

    const messagePort1 = message.ports[0];
    if (!messagePort1) return;

    const { data } = result;
    if (data.type === "felt.ready") {
      messagePort1.postMessage(true);
    } else if (data.type === "felt.addListener") {
      if (data.event.eventName === "") {
        // we had to add a fake event to keep zod quiet so now we need
        // to filter it out to keep typescript quiet
        throw new Error("felt.addListener eventName cannot be empty");
      }

      const handler = (e: unknown) => {
        return new Promise((resolve) => {
          const originalOnmessage = messagePort1.onmessage;
          const bindedOnMessage = messagePort1.onmessage?.bind(messagePort1);
          messagePort1.onmessage = (...args) => {
            bindedOnMessage?.(...args);
            const data = args[0].data;
            if (data.type === "response") {
              resolve(data.response);
            }
            messagePort1.onmessage = originalOnmessage;
          };

          messagePort1.postMessage(e);
        });
      };

      const payload =
        "options" in data.event
          ? {
              options: "options" in data.event ? data.event.options : undefined,
              handler,
            }
          : {
              handler,
            };

      const unsubscribe = (handlers.listeners as any)[data.event.eventName](
        payload as any,
      );
      unsubscribeMap.set(data.event.id, unsubscribe);
    } else if (data.type === "felt.removeListener") {
      unsubscribeMap.get(data.id)?.();
      unsubscribeMap.delete(data.id);
    } else {
      try {
        const handler = (handlers.methods as any)[data.type] as any;
        const result = await handler(data.params);
        message.ports[0]?.postMessage(result);
      } catch (error) {
        message.ports[0]?.postMessage(createErrorMessage(error));
      }
    }
  }

  feltWindow.addEventListener("message", handleMessage);

  return () => {
    feltWindow.removeEventListener("message", handleMessage);
  };
}

const mergedSchemas = {
  methods: (allModules as any)
    .map((schema: any) => schema.methods ?? [])
    .flat() as any,
  listeners: allModules.map((schema) => schema.listeners ?? []).flat(),
} satisfies ModuleSchema;

const EventSchema = z.discriminatedUnion("eventName", [
  // this first literal event keeps zod quiet when creating the discriminated union
  z.strictObject({ eventName: z.literal("") }),
  z.strictObject({
    eventName: z.literal("onGenericEvent"),
    id: z.string(),
    options: z.object({ id: z.string() }),
  }),
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

const AllMessagesSchema = z.discriminatedUnion("type", [
  ReadySchema,
  AddListenerSchema,
  RemoveListenerSchema,
  ...mergedSchemas.methods,
]);

/**
 * A derived schema that only checks the type of the message.
 */
const PreliminarySchema = z.object({
  type: z.enum(
    AllMessagesSchema.options.map((option) => option.shape.type.value) as [
      string,
      ...string[],
    ],
  ),
});

function createErrorMessage(errorish: unknown): TransportableError {
  return { __error__: errorStringFromUnknown(errorish) };
}

function errorStringFromUnknown(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === "object" && error !== null && "message" in error) {
    return String(error.message);
  }

  if (typeof error === "string") {
    return error;
  }

  return "Unknown error";
}
