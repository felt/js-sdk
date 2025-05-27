import type { AllModules } from "~/modules/main/schema";
import type { Listener } from "./builders";
import { type TransportableError } from "./errors";
import { forEveryEventHandler } from "./forEveryEventHandler";
import type { PromiseOrNot, UnionToIntersection } from "./utils";

export type FeltHandlers = {
  methods: FeltMethodHandlers;
  listeners: FeltListenerHandlers;
};

type MethodSpec = UnionToIntersection<AllModules["methods"]>;
type ListenerSpec = UnionToIntersection<AllModules["listeners"]> & {
  onGenericEvent: Listener<{ id: string }, void>;
};

type ExtractMethodParams<
  T extends Record<
    string,
    AnyFunction | { request: { params?: any }; response: any }
  >,
> = {
  [K in keyof T]: T[K] extends { request: { params?: any }; response: any }
    ? {
        request: T[K]["request"]["params"];
        response: T[K]["response"];
      }
    : T[K];
};

type ExtractListenerParams<
  T extends Record<
    string,
    { options: any; eventParams: any } | { eventParams: any }
  >,
> = {
  [K in keyof T]: T[K] extends { options: any }
    ? {
        options: T[K]["options"];
        eventParams: T[K]["eventParams"];
      }
    : {
        eventParams: T[K]["eventParams"];
      };
};

type AnyFunction = (...args: any[]) => any;

type MethodHandlers<T> = {
  [K in keyof T]: T[K] extends AnyFunction
    ? T[K]
    : (
        request: T[K] extends { request: any } ? T[K]["request"] : never,
      ) => PromiseOrNot<
        T[K] extends { response: any } ? T[K]["response"] : never
      >;
};

type FeltMethodHandlers = MethodHandlers<ExtractMethodParams<MethodSpec>>;

type ListenerHandlers<T> = {
  [K in keyof T]: (
    args: T[K] extends { options: any }
      ? {
          handler: (
            event: T[K] extends { eventParams: any }
              ? T[K]["eventParams"]
              : never,
          ) => void;
          options: T[K]["options"];
        }
      : {
          handler: (
            event: T[K] extends { eventParams: any }
              ? T[K]["eventParams"]
              : never,
          ) => void;
        },
  ) => VoidFunction;
};

type FeltListenerHandlers = ListenerHandlers<
  ExtractListenerParams<ListenerSpec>
>;

type FeltEventListener<TKey extends keyof ListenerSpec> = (
  args: ListenerSpec[TKey] extends { options: any }
    ? {
        handler: (event: ListenerSpec[TKey]["eventParams"]) => void;
        options: ListenerSpec[TKey]["options"];
      }
    : {
        handler: (event: ListenerSpec[TKey]["eventParams"]) => void;
      },
) => VoidFunction;

export function listener<TEventName extends keyof ListenerSpec>(
  feltWindow: Pick<Window, "postMessage">,
  eventName: TEventName,
): FeltEventListener<TEventName> {
  return (params) => {
    const messageChannel = new MessageChannel();

    const handler = params.handler;
    const options = "options" in params ? params.options : undefined;

    const id = crypto.randomUUID();
    feltWindow.postMessage(
      {
        type: "felt.addListener",
        event: options ? { eventName, id, options } : { eventName, id },
      },
      "*",
      [messageChannel.port2],
    );

    messageChannel.port1.onmessage = (event) => {
      // we cannot send errors down the message channel - listeners unfortunately cannot have invalid
      // messages thrown or rejected, because their only communication mechanism is the message channel,
      // and that is only designed to receive successful events.
      if (!isErrorMessage(event)) {
        handler(event.data);
      }
    };

    return () => {
      messageChannel.port1.onmessage = null;
      messageChannel.port1.close();
      messageChannel.port2.close();
      feltWindow.postMessage({ type: "felt.removeListener", id }, "*");
    };
  };
}

type MaybeOneMethod<K extends keyof MethodSpec> = {
  [K1 in K]: MethodSpec[K1]["request"];
}[K]["params"];

type OneMethod<K extends keyof MethodSpec> =
  MaybeOneMethod<K> extends undefined ? void : MaybeOneMethod<K>;

type FeltMethod<TKey extends keyof MethodSpec> = (
  payload: OneMethod<TKey>,
) => Promise<MethodSpec[TKey]["response"]>;

export function method<TKey extends keyof MethodSpec>(
  feltWindow: Pick<Window, "postMessage">,
  type: TKey,
  transformer?: (
    params: MethodSpec[TKey]["request"]["params"],
  ) => PromiseOrNot<MethodSpec[TKey]["request"]["params"]>,
): FeltMethod<TKey> {
  return async (params) => {
    const messageChannel = new MessageChannel();

    const payload = params && transformer ? await transformer(params) : params;

    feltWindow.postMessage({ type, params: payload }, "*", [
      messageChannel.port2,
    ]);

    return new Promise((resolve, reject) => {
      messageChannel.port1.onmessage = (event) => {
        if (isErrorMessage(event)) {
          reject(new Error(event.data.__error__));
        } else {
          resolve(event.data);
        }
        messageChannel.port1.close();
        messageChannel.port2.close();
      };
    });
  };
}

export function methodWithListeners<
  TKey extends keyof MethodSpec,
  TUserFacingParams extends object,
>(
  feltWindow: Pick<Window, "postMessage">,
  type: TKey,
): (params: TUserFacingParams) => ReturnType<FeltMethod<TKey>> {
  const methodRes = method(feltWindow, type);
  const genericEventListener = listener(feltWindow, "onGenericEvent");

  return async (userFacingParams) => {
    const destroyListeners: VoidFunction[] = [];

    forEveryEventHandler(userFacingParams, (key, handler, object) => {
      const eventId = crypto.randomUUID();

      (object as Record<string, unknown>)[key] = eventId;

      const unsubscribe = genericEventListener({
        handler: handler as (event: void) => void,
        options: { id: eventId },
      });

      destroyListeners.push(unsubscribe);
    });

    // assuming userFacingParams turned into a clonable params (OneMethod<TKey>)
    // during the forEveryEventHandler loop
    const clonableParams = userFacingParams as unknown as OneMethod<TKey>;
    const response = await methodRes(clonableParams);

    return response;
  };
}

function isErrorMessage(
  event: MessageEvent,
): event is MessageEvent<TransportableError> {
  return (
    event.data && typeof event.data === "object" && "__error__" in event.data
  );
}
