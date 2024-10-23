import * as z from "zod";
import type { ModuleSchema } from "../../lib/schema";
import {
  listenerMessageWithParams,
  methodMessage,
  type Listener,
  type Method,
} from "../../types/builders";
import { SetVisibilityRequestSchema } from "../shared";
import {
  GetElementGroupsFilterSchema,
  GetElementsFilterSchema,
  type ElementChangeCallbackParams,
  type ElementGroupChangeCallbackParams,
  type GetElementGroupResponse,
  type GetElementGroupsResponse,
  type GetElementResponse,
  type GetElementsResponse,
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
    getElement: Method<
      z.infer<typeof GetElementMessage>,
      GetElementResponse | null
    >;
    getElements: Method<
      z.infer<typeof GetElementsMessage>,
      GetElementsResponse
    >;
    getElementGroup: Method<
      z.infer<typeof GetGroupMessage>,
      GetElementGroupResponse | null
    >;
    getElementGroups: Method<
      z.infer<typeof GetGroupsMessage>,
      GetElementGroupsResponse
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
