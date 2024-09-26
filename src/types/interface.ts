import type { UiControlsMessage } from "../modules/ui/types.js";
import type {
  ViewportGetMessage,
  ViewportGetResponse,
  ViewportGotoMessage,
  ViewportOnMoveEvent,
} from "../modules/viewport/types.js";

type CommandSpec = {
  ["viewport.goto"]: ViewportGotoMessage;
  ["ui_controls.update"]: UiControlsMessage;
};

type QuerySpec = {
  ["viewport.get"]: {
    request: ViewportGetMessage;
    response: ViewportGetResponse;
  };
};

type ListenerSpec = {
  ["viewport.move"]: ViewportOnMoveEvent;
};

type CommandHandlers<T> = {
  [K in keyof T as K & string]: (payload: T[K]) => void;
};

type ExtractParams<T extends Record<string, { params: any }>> = {
  [K in keyof T]: T[K] extends { params: infer P } ? P : never;
};

type ExtractParamsFromQueries<
  T extends Record<string, { request: { params?: any }; response: any }>,
> = {
  [K in keyof T]: {
    request: T[K]["request"]["params"];
    response: T[K]["response"];
  };
};

type FeltCommandHandlers = CommandHandlers<ExtractParams<CommandSpec>>;

type QueryHandlers<T> = {
  [K in keyof T as K & string]: (
    request: T[K] extends { request: any } ? T[K]["request"] : never
  ) => Promise<T[K] extends { response: any } ? T[K]["response"] : never>;
};

type FeltQueryHandlers = QueryHandlers<ExtractParamsFromQueries<QuerySpec>>;

type ListenerHandlers<T> = {
  [K in keyof T as K & string]: (
    callback: (event: T[K]) => void
  ) => VoidFunction;
};

type FeltListenerHandlers = ListenerHandlers<ListenerSpec>;

export type FeltHandlers = {
  methods: FeltCommandHandlers & FeltQueryHandlers;
  listeners: FeltListenerHandlers;
};

export type FeltEventListener<TKey extends keyof ListenerSpec> = (
  callback: (event: ListenerSpec[TKey]) => void
) => VoidFunction;

export function listener<TEventName extends keyof ListenerSpec>(
  feltWindow: Window,
  eventName: TEventName
): FeltEventListener<TEventName> {
  return (callback) => {
    const messageChannel = new MessageChannel();

    const id = crypto.randomUUID();
    feltWindow.postMessage(
      { type: `felt.addListener`, event: { eventName, id } },
      "*",
      [messageChannel.port2]
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

export type FeltCommand<TKey extends keyof CommandSpec> = (
  payload: Omit<CommandSpec[TKey], "type">
) => void;

export function command<TKey extends keyof CommandSpec>(
  feltWindow: Window,
  type: TKey
): FeltCommand<TKey> {
  return (params) => {
    feltWindow.postMessage({ type, params }, "*");
  };
}

export type FeltQuery<TKey extends keyof QuerySpec> = (
  payload: Omit<QuerySpec[TKey]["request"], "type">
) => Promise<QuerySpec[TKey]["response"]>;

export function query<TKey extends keyof QuerySpec>(
  feltWindow: Window,
  type: TKey
): FeltQuery<TKey> {
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
