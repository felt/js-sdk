import type { AllModules } from "~/modules/main/schema";
import type { PromiseOrNot, UnionToIntersection } from "./utils";

export type FeltHandlers = {
  methods: FeltMethodHandlers;
  listeners: FeltListenerHandlers;
};

type MethodSpec = UnionToIntersection<AllModules["methods"]>;
type ListenerSpec = UnionToIntersection<AllModules["listeners"]>;

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
  feltWindow: Window,
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
      handler(event.data);
    };

    return () => {
      messageChannel.port1.onmessage = null;
      messageChannel.port1.close();
      messageChannel.port2.close();
      feltWindow.postMessage({ type: "felt.removeListener", id }, "*");
    };
  };
}

// methods where we write out the entire function signature
type LiteralMethodKeys = {
  [K in keyof MethodSpec]: MethodSpec[K] extends (...args: any[]) => any
    ? K
    : never;
}[keyof MethodSpec];

type MaybeOneMethod<K extends keyof Omit<MethodSpec, LiteralMethodKeys>> = {
  [K1 in K]: MethodSpec[K1]["request"];
}[K]["params"];

type StandardMethods = Omit<MethodSpec, LiteralMethodKeys>;

type OneMethod<K extends keyof StandardMethods> =
  MaybeOneMethod<K> extends undefined ? void : MaybeOneMethod<K>;

type FeltMethod<TKey extends keyof StandardMethods> = (
  payload: OneMethod<TKey>,
) => Promise<StandardMethods[TKey]["response"]>;

export function method<TKey extends keyof StandardMethods>(
  feltWindow: Window,
  type: TKey,
): FeltMethod<TKey> {
  return (params) => {
    const messageChannel = new MessageChannel();
    feltWindow.postMessage({ type, params }, "*", [messageChannel.port2]);

    return new Promise((resolve, reject) => {
      messageChannel.port1.onmessage = (event) => {
        if (
          event.data &&
          typeof event.data === "object" &&
          "__error__" in event.data
        ) {
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
