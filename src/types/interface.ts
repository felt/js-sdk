import type { AllModules } from "../modules/schema";
import type { PromiseOrNot, UnionToIntersection } from "./utils";

export type FeltHandlers = {
  methods: FeltMethodHandlers;
  listeners: FeltListenerHandlers;
};

type MethodSpec = UnionToIntersection<AllModules["methods"]>;
type ListenerSpec = UnionToIntersection<AllModules["listeners"]>;

type ExtractMethodParams<
  T extends Record<string, { request: { params?: any }; response: any }>,
> = {
  [K in keyof T]: {
    request: T[K]["request"]["params"];
    response: T[K]["response"];
  };
};

type MethodHandlers<T> = {
  [K in keyof T as K & string]: (
    request: T[K] extends { request: any } ? T[K]["request"] : never,
  ) => PromiseOrNot<T[K] extends { response: any } ? T[K]["response"] : never>;
};

type FeltMethodHandlers = MethodHandlers<ExtractMethodParams<MethodSpec>>;

type ListenerHandlers<T> = {
  [K in keyof T as K & string]: (
    callback: (event: T[K]) => void,
  ) => VoidFunction;
};

type FeltListenerHandlers = ListenerHandlers<ListenerSpec>;

type FeltEventListener<TKey extends keyof ListenerSpec> = (
  callback: (event: ListenerSpec[TKey]) => void,
) => VoidFunction;

export function listener<TEventName extends keyof ListenerSpec>(
  feltWindow: Window,
  eventName: TEventName,
): FeltEventListener<TEventName> {
  return (callback) => {
    const messageChannel = new MessageChannel();

    const id = crypto.randomUUID();
    feltWindow.postMessage(
      { type: `felt.addListener`, event: { eventName, id } },
      "*",
      [messageChannel.port2],
    );

    messageChannel.port1.onmessage = (event) => {
      callback(event.data);
    };

    return () => {
      messageChannel.port1.onmessage = null;
      messageChannel.port1.close();
      messageChannel.port2.close();
      feltWindow.postMessage({ type: `felt.removeListener`, id }, "*");
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
  feltWindow: Window,
  type: TKey,
): FeltMethod<TKey> {
  return (params) => {
    const messageChannel = new MessageChannel();
    feltWindow.postMessage({ type, params }, "*", [messageChannel.port2]);

    return new Promise((resolve) => {
      messageChannel.port1.onmessage = (event) => {
        resolve(event.data);
        messageChannel.port1.close();
        messageChannel.port2.close();
      };
    });
  };
}
