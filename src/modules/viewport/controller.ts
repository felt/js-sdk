import { command, listener, query } from "../../types/interface";

export const viewportController = (feltWindow: Window) => ({
  goto: command(feltWindow, "viewport.goto"),
  get: query(feltWindow, "viewport.get"),
  onMove: listener(feltWindow, "viewport.move"),
});

export type ViewportController = ReturnType<typeof viewportController>;
