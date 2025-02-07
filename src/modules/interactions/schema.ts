import type { ModuleSchema } from "~/lib/ModuleSchema";
import {
  listenerMessageNoParams,
  type ListenerNoOptions,
} from "~/lib/builders";
import type { MapInteractionEvent } from "./types";

const OnPointerClickMessage = listenerMessageNoParams("onPointerClick");
const OnPointerMoveMessage = listenerMessageNoParams("onPointerMove");

export const interactionsSchema = {
  methods: null,
  listeners: [OnPointerClickMessage, OnPointerMoveMessage],
} satisfies ModuleSchema;

export type InteractionsSchema = {
  methods: {};
  listeners: {
    onPointerClick: ListenerNoOptions<MapInteractionEvent>;
    onPointerMove: ListenerNoOptions<MapInteractionEvent>;
  };
};
