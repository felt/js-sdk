import { z } from "zod";
import type { ModuleSchema } from "~/lib/schema";
import {
  type Listener,
  type Method,
  listenerMessageWithParams,
  methodMessage,
} from "~/lib/types/builders";
import type { zInfer } from "~/lib/types/utils";
import {
  type Geometry,
  SetVisibilityRequestSchema,
} from "~/modules/shared/types";
import {
  type Element,
  type ElementChangeCallbackParams,
  type ElementGroup,
  type ElementGroupChangeCallbackParams,
  GetElementGroupsConstraintSchema,
  GetElementsConstraintSchema,
} from "./types";

const GetElementMessage = methodMessage("getElement", z.string());
const GetElementGeometryMessage = methodMessage(
  "getElementGeometry",
  z.string(),
);
const GetElementsMessage = methodMessage(
  "getElements",
  GetElementsConstraintSchema.optional(),
);
const GetGroupMessage = methodMessage("getElementGroup", z.string());
const GetGroupsMessage = methodMessage(
  "getElementGroups",
  GetElementGroupsConstraintSchema.optional(),
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
    GetElementGeometryMessage,
    GetElementsMessage,
    GetGroupMessage,
    GetGroupsMessage,
    SetElementGroupVisibilityMessage,
  ],
  listeners: [OnElementChangeMessage, OnElementGroupChangeMessage],
} satisfies ModuleSchema;

export type ElementsSchema = {
  methods: {
    getElement: Method<zInfer<typeof GetElementMessage>, Element | null>;
    getElementGeometry: Method<
      zInfer<typeof GetElementGeometryMessage>,
      Geometry | null
    >;
    getElements: Method<
      zInfer<typeof GetElementsMessage>,
      Array<Element | null>
    >;
    getElementGroup: Method<
      zInfer<typeof GetGroupMessage>,
      ElementGroup | null
    >;
    getElementGroups: Method<
      zInfer<typeof GetGroupsMessage>,
      Array<ElementGroup | null>
    >;
    setElementGroupVisibility: Method<
      zInfer<typeof SetElementGroupVisibilityMessage>,
      void
    >;
  };
  listeners: {
    onElementChange: Listener<
      zInfer<typeof OnElementChangeMessage.shape.options>,
      ElementChangeCallbackParams
    >;
    onElementGroupChange: Listener<
      zInfer<typeof OnElementGroupChangeMessage.shape.options>,
      ElementGroupChangeCallbackParams
    >;
  };
};
