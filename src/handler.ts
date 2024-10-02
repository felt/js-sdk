import { AllMessagesSchema, PreliminarySchema } from "./schema";
import type { FeltHandlers } from "./types/interface";

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
    onInvalidMessage?: (message: unknown) => void;
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
      options?.onInvalidMessage?.(message.data);
      return;
    }

    const { data } = result;
    if (data.type === "felt.ready") {
      message.ports[0]?.postMessage(true);
    } else if (data.type === "felt.addListener") {
      if (data.event.eventName === "") {
        // we had to add a fake event to keep zod quiet so now we need
        // to filter it out to keep typescript quiet
        throw new Error("felt.addListener eventName cannot be empty");
      }
      const unsubscribe = handlers.listeners[data.event.eventName]((e) => {
        message.ports[0]?.postMessage(e);
      });
      unsubscribeMap.set(data.event.id, unsubscribe);
    } else if (data.type === "felt.removeListener") {
      unsubscribeMap.get(data.id)?.();
      unsubscribeMap.delete(data.id);
    } else {
      const handler = handlers.methods[data.type] as any;
      const result = await handler(data.params);
      message.ports[0]?.postMessage(result);
    }
  }

  feltWindow.addEventListener("message", handleMessage);

  return () => {
    feltWindow.removeEventListener("message", handleMessage);
  };
}
