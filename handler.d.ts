import { F as FeltHandlers } from './interface-C38ITkeW.js';
import 'zod';

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
