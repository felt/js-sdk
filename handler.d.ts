import { b as UiControlsMessage, c as ViewportGotoMessage, d as ViewportGetMessage, a as ViewportState, e as ViewportOnMoveEvent } from './types-LiDTdt8Y.js';
import 'zod';

type UiModule = {
    commands: {
        ["ui_controls.update"]: UiControlsMessage;
    };
    queries: {};
    listeners: {};
};

type ViewportModule = {
    commands: {
        ["viewport.goto"]: ViewportGotoMessage;
    };
    queries: {
        ["viewport.get"]: {
            request: ViewportGetMessage;
            response: ViewportState;
        };
    };
    listeners: {
        ["viewport.move"]: ViewportOnMoveEvent;
    };
};

type AllModules = UiModule | ViewportModule;

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type FeltHandlers = {
    methods: FeltCommandHandlers & FeltQueryHandlers;
    listeners: FeltListenerHandlers;
};
type CommandSpec = UnionToIntersection<AllModules["commands"]>;
type QuerySpec = UnionToIntersection<AllModules["queries"]>;
type ListenerSpec = UnionToIntersection<AllModules["listeners"]>;
type CommandHandlers<T> = {
    [K in keyof T as K & string]: (payload: T[K]) => void;
};
type ExtractParams<T extends Record<string, {
    params: any;
}>> = {
    [K in keyof T]: T[K] extends {
        params: infer P;
    } ? P : never;
};
type ExtractParamsFromQueries<T extends Record<string, {
    request: {
        params?: any;
    };
    response: any;
}>> = {
    [K in keyof T]: {
        request: T[K]["request"]["params"];
        response: T[K]["response"];
    };
};
type FeltCommandHandlers = CommandHandlers<ExtractParams<CommandSpec>>;
type QueryHandlers<T> = {
    [K in keyof T as K & string]: (request: T[K] extends {
        request: any;
    } ? T[K]["request"] : never) => Promise<T[K] extends {
        response: any;
    } ? T[K]["response"] : never>;
};
type FeltQueryHandlers = QueryHandlers<ExtractParamsFromQueries<QuerySpec>>;
type ListenerHandlers<T> = {
    [K in keyof T as K & string]: (callback: (event: T[K]) => void) => VoidFunction;
};
type FeltListenerHandlers = ListenerHandlers<ListenerSpec>;

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
declare function createMessageHandler(feltWindow: Window, handlers: FeltHandlers, options?: {
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
}): VoidFunction;

export { createMessageHandler };
