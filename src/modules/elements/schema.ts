import { z } from "zod";
import type { ModuleSchema } from "~/lib/schema";
import {
  listenerMessageWithParams,
  methodMessage,
  type Listener,
  type Method,
} from "~/lib/types/builders";
import { SetVisibilityRequestSchema } from "~/modules/shared";
import {
  GetElementGroupsFilterSchema,
  GetElementsFilterSchema,
  type Element,
  type ElementChangeCallbackParams,
  type ElementGroup,
  type ElementGroupChangeCallbackParams,
} from "./types";

const GetElementMessage = methodMessage("getElement", z.string());
const GetElementsMessage = methodMessage(
  "getElements",
  GetElementsFilterSchema.optional(),
);
const GetGroupMessage = methodMessage("getElementGroup", z.string());
const GetGroupsMessage = methodMessage(
  "getElementGroups",
  GetElementGroupsFilterSchema.optional(),
);
const SetElementGroupVisibilityMessage = methodMessage(
  "setElementGroupVisibility",
  SetVisibilityRequestSchema,
);

const OnElementChangeMessage = listenerMessageWithParams(
  "onElementChange",
  z.object({ id: z.string() }),
);

const OnElementGroupChangeMessage = listenerMessageWithParams(
  "onElementGroupChange",
  z.object({ id: z.string() }),
);

export const elementsSchema = {
  methods: [
    GetElementMessage,
    GetElementsMessage,
    GetGroupMessage,
    GetGroupsMessage,
    SetElementGroupVisibilityMessage,
  ],
  listeners: [OnElementChangeMessage, OnElementGroupChangeMessage],
} satisfies ModuleSchema;

export type ElementsSchema = {
  methods: {
    getElement: Method<z.infer<typeof GetElementMessage>, Element | null>;
    getElements: Method<
      z.infer<typeof GetElementsMessage>,
      Array<Element | null>
    >;
    getElementGroup: Method<
      z.infer<typeof GetGroupMessage>,
      ElementGroup | null
    >;
    getElementGroups: Method<
      z.infer<typeof GetGroupsMessage>,
      Array<ElementGroup | null>
    >;
    setElementGroupVisibility: Method<
      z.infer<typeof SetElementGroupVisibilityMessage>,
      void
    >;
  };
  listeners: {
    onElementChange: Listener<
      z.infer<typeof OnElementChangeMessage.shape.options>,
      ElementChangeCallbackParams
    >;
    onElementGroupChange: Listener<
      z.infer<typeof OnElementGroupChangeMessage.shape.options>,
      ElementGroupChangeCallbackParams
    >;
  };
};
