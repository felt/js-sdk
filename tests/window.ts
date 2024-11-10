import { Window as HappyDomWindow } from "happy-dom";

/**
 * This creates a happy dom window that claims to be a real window, but
 * crucially has a postMessage that adds the ports correctly. The default
 * postMessage on the window doesn't do that for some reason.
 */
export function createWindow() {
  const window = new HappyDomWindow() as unknown as Window;

  function postMessage(
    message: any,
    targetOrigin: string,
    transfer?: Transferable[],
  ): void;
  function postMessage(message: any, options?: WindowPostMessageOptions): void;
  function postMessage(
    message: any,
    options?: WindowPostMessageOptions | string,
    transfer?: Transferable[],
  ): void {
    window.dispatchEvent(
      new MessageEvent("message", {
        data: message,
        ports: transfer as unknown as MessagePort[],
      }),
    );
  }
  window.postMessage = postMessage;

  return window;
}
