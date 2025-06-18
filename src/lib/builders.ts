import { z } from "zod";
import type { FeltController } from "~/modules/main/controller";
import type { UnwrapPromise } from "./utils";

export function methodMessage<
  TType extends string,
  TParams extends z.ZodType<any>,
>(
  type: TType,
  params: TParams,
): z.ZodObject<{ type: z.ZodLiteral<TType>; params: TParams }> {
  return z.strictObject({
    type: z.literal(type),
    params,
  });
}

export function listenerMessageWithParams<
  TEventName extends string,
  TOptions extends z.ZodType<any>,
>(eventName: TEventName, options: TOptions) {
  return z.strictObject({
    eventName: z.literal(eventName),
    id: z.string(),
    options,
  });
}

export function listenerMessageNoParams<TEventName extends string>(
  eventName: TEventName,
) {
  return z.strictObject({
    eventName: z.literal(eventName),
    id: z.string(),
  });
}

type FeltControllerFunctions = Omit<FeltController, "iframe">;
export type Method<
  TRequest extends { type: keyof FeltControllerFunctions; params?: any },
  TResponse = UnwrapPromise<
    ReturnType<FeltControllerFunctions[TRequest["type"]]>
  >,
> = {
  request: TRequest;
  response: TResponse;
};

export type Listener<TOptions, TParams> = {
  options: TOptions;
  eventParams: TParams;
};

export type ListenerNoOptions<TParams> = {
  eventParams: TParams;
};
