import { command } from "../../types/interface";

export const uiController = (feltWindow: Window) => ({
  update: command(feltWindow, "ui_controls.update"),
});

export type UiController = ReturnType<typeof uiController>;
