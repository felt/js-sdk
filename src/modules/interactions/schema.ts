import type { ModuleSchema } from "~/lib/schema";
import { type Listener, listenerMessageNoParams } from "~/lib/types/builders";
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
    onPointerClick: Listener<void, MapInteractionEvent>;
    onPointerMove: Listener<void, MapInteractionEvent>;
  };
};
