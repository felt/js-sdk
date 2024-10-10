import * as z from "zod";

export function methodMessage<
  TType extends string,
  TParams extends z.ZodType<any>,
>(
  type: TType,
  params: TParams,
): z.ZodObject<{ type: z.ZodLiteral<TType>; params: TParams }> {
  return z.object({
    type: z.literal(type),
    params,
  });
}

export function listenerMessageWithParams<
  TEventName extends string,
  TParams extends z.ZodType<any>,
>(eventName: TEventName, params: TParams) {
  return z.object({
    eventName: z.literal(eventName),
    id: z.string(),
    options: params,
  });
}

export function listenerMessageNoParams<TEventName extends string>(
  eventName: TEventName,
) {
  return z.object({
    eventName: z.literal(eventName),
    id: z.string(),
  });
}

export type Method<
  TRequest extends { type: string; params?: any },
  TResponse,
> = {
  request: TRequest;
  response: TResponse;
};

export type Listener<TOptions, TParams> = {
  options: TOptions;
  eventParams: TParams;
};
