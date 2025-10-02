import { z } from "zod";
import {
  listenerMessageNoParams,
  methodMessage,
  type ListenerNoOptions,
  type Method,
} from "~/lib/builders";
import type { ModuleSchema } from "~/lib/ModuleSchema";
import type { zInfer } from "~/lib/utils";
import {
  ColorBaseBasemapSchema,
  CustomTileBasemapSchema,
  type Basemap,
} from "./types";

const GetCurrentBasemapMessage = methodMessage("getCurrentBasemap", z.void());
const GetBasemapsMessage = methodMessage("getBasemaps", z.void());

const ChooseBasemapMessage = methodMessage("chooseBasemap", z.string());
const RemoveBasemapMessage = methodMessage("removeBasemap", z.string());

const AddBasemapMessage = methodMessage(
  "addCustomBasemap",
  z.object({
    basemap: z.discriminatedUnion("type", [
      ColorBaseBasemapSchema.omit({ id: true, uiColorScheme: true }),
      CustomTileBasemapSchema.omit({ id: true }),
    ]),
    select: z.boolean().optional(),
  }),
);

const OnBasemapChangeMessage = listenerMessageNoParams("onBasemapChange");

export const basemapsSchema = {
  methods: [
    GetCurrentBasemapMessage,
    GetBasemapsMessage,
    ChooseBasemapMessage,
    AddBasemapMessage,
    RemoveBasemapMessage,
  ],
  listeners: [OnBasemapChangeMessage],
} satisfies ModuleSchema;

export type BasemapsSchema = {
  methods: {
    getCurrentBasemap: Method<zInfer<typeof GetCurrentBasemapMessage>, Basemap>;
    getBasemaps: Method<zInfer<typeof GetBasemapsMessage>, Basemap[]>;
    chooseBasemap: Method<zInfer<typeof ChooseBasemapMessage>>;

    addCustomBasemap: Method<zInfer<typeof AddBasemapMessage>>;
    removeBasemap: Method<zInfer<typeof RemoveBasemapMessage>>;
  };

  listeners: {
    onBasemapChange: ListenerNoOptions<Basemap>;
  };
};
