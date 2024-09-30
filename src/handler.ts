import * as z from "zod";
import { viewportSchema } from "./modules/viewport/types";
import type { FeltHandlers } from "./types/interface";

export function createMessageHandler(
  feltWindow: Window,
  handlers: FeltHandlers,
): VoidFunction {
  const addListener = z.object({
    type: z.literal("felt.addListener"),
    event: z.discriminatedUnion("eventName", [...viewportSchema.listeners]),
  });

  const removeListener = z.object({
    type: z.literal("felt.removeListener"),
    id: z.string(),
  });

  const ready = z.object({
    type: z.literal("felt.ready"),
  });

  const unionMethods = z.discriminatedUnion("type", [
    ready,
    addListener,
    removeListener,
    ...viewportSchema.commands,
    ...viewportSchema.queries,
  ]);

  const unsubscribeMap = new Map<string, VoidFunction>();

  async function handleMessage(message: MessageEvent) {
    if (message.data?.type?.startsWith?.("webpack")) return;

    try {
      const data = unionMethods.parse(message.data);
      if (data.type === "felt.ready") {
        message.ports[0]?.postMessage(true);
      } else if (data.type === "felt.addListener") {
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
    } catch (e) {
      console.log(message.data);
      console.error(e);
    }
  }

  feltWindow.addEventListener("message", handleMessage);

  return () => {
    feltWindow.removeEventListener("message", handleMessage);
  };
}
