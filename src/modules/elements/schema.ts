import { z } from "zod";
import type { ModuleSchema } from "~/lib/ModuleSchema";
import {
  type Listener,
  type ListenerNoOptions,
  type Method,
  listenerMessageNoParams,
  listenerMessageWithParams,
  methodMessage,
} from "~/lib/builders";
import type { zInfer } from "~/lib/utils";
import { SetVisibilityRequestSchema } from "~/modules/shared/types";
import {
  type Element,
  type ElementChangeCallbackParams,
  type ElementGroupChangeCallbackParams,
  ElementCreateSchema,
  ElementUpdateSchema,
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

const OnElementCreateMessage = listenerMessageNoParams("onElementCreate");

const OnElementCreateEndMessage = listenerMessageNoParams("onElementCreateEnd");

const OnElementDeleteMessage = listenerMessageWithParams(
  "onElementDelete",
  z.object({ id: z.string() }),
);

const OnElementGroupChangeMessage = listenerMessageWithParams(
  "onElementGroupChange",
  z.object({ id: z.string() }),
);

const CreateElementMessage = methodMessage(
  "createElement",
  ElementCreateSchema,
);
const UpdateElementMessage = methodMessage(
  "updateElement",
  ElementUpdateSchema,
);
const DeleteElementMessage = methodMessage("deleteElement", z.string());

export const elementsSchema = {
  methods: [
    GetElementMessage,
    GetElementGeometryMessage,
    GetElementsMessage,
    GetGroupMessage,
    GetGroupsMessage,
    SetElementGroupVisibilityMessage,
    CreateElementMessage,
    UpdateElementMessage,
    DeleteElementMessage,
  ],
  listeners: [
    OnElementChangeMessage,
    OnElementCreateMessage,
    OnElementCreateEndMessage,
    OnElementDeleteMessage,
    OnElementGroupChangeMessage,
  ],
} satisfies ModuleSchema;

export type ElementsSchema = {
  methods: {
    getElement: Method<zInfer<typeof GetElementMessage>>;
    getElementGeometry: Method<zInfer<typeof GetElementGeometryMessage>>;
    getElements: Method<zInfer<typeof GetElementsMessage>>;
    getElementGroup: Method<zInfer<typeof GetGroupMessage>>;
    getElementGroups: Method<zInfer<typeof GetGroupsMessage>>;
    setElementGroupVisibility: Method<
      zInfer<typeof SetElementGroupVisibilityMessage>
    >;

    createElement: Method<zInfer<typeof CreateElementMessage>>;
    updateElement: Method<zInfer<typeof UpdateElementMessage>>;
    deleteElement: Method<zInfer<typeof DeleteElementMessage>>;
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
    onElementCreate: ListenerNoOptions<ElementChangeCallbackParams>;
    onElementCreateEnd: ListenerNoOptions<{ element: Element }>;
    onElementDelete: Listener<
      zInfer<typeof OnElementDeleteMessage.shape.options>,
      void
    >;
  };
};
