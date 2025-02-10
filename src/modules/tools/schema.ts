import { z } from "zod";
import type { ModuleSchema } from "~/lib/ModuleSchema";
import {
  listenerMessageNoParams,
  type ListenerNoOptions,
  type Method,
  methodMessage,
} from "~/lib/builders";
import type { zInfer } from "~/lib/utils";
import {
  ConfigurableToolSchema,
  InputToolSettingsSchema,
  ToolSchema,
  type ToolSettingsChangeEvent,
  type ToolSettingsMap,
  type ToolType,
} from "./types";

const SetToolMessage = methodMessage("setTool", ToolSchema.nullable());
const GetToolMessage = methodMessage("getTool", z.undefined());
const OnToolChangeMessage = listenerMessageNoParams("onToolChange");

const SetToolSettingsMessage = methodMessage(
  "setToolSettings",
  InputToolSettingsSchema,
);
const GetToolSettingsMessage = methodMessage(
  "getToolSettings",
  ConfigurableToolSchema,
);
const OnToolSettingsChangeMessage = listenerMessageNoParams(
  "onToolSettingsChange",
);

export const toolsSchema = {
  methods: [
    SetToolMessage,
    GetToolMessage,
    SetToolSettingsMessage,
    GetToolSettingsMessage,
  ],
  listeners: [OnToolChangeMessage, OnToolSettingsChangeMessage],
} satisfies ModuleSchema;

export type ToolsSchema = {
  methods: {
    setTool: Method<zInfer<typeof SetToolMessage>, void>;
    getTool: Method<zInfer<typeof GetToolMessage>, ToolType | null>;
    setToolSettings: Method<zInfer<typeof SetToolSettingsMessage>, void>;
    getToolSettings: Method<
      zInfer<typeof GetToolSettingsMessage>,
      ToolSettingsMap[keyof ToolSettingsMap]
    >;
  };
  listeners: {
    onToolChange: ListenerNoOptions<ToolType | null>;
    onToolSettingsChange: ListenerNoOptions<ToolSettingsChangeEvent>;
  };
};
