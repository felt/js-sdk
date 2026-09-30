import { methodMessage, type Method } from "~/lib/builders";
import type { ModuleSchema } from "~/lib/ModuleSchema";
import type { zInfer } from "~/lib/utils";
import { GetIsochroneParamsSchema, GetRouteParamsSchema } from "./types";

const GetRouteMessage = methodMessage("getRoute", GetRouteParamsSchema);
const GetIsochroneMessage = methodMessage(
  "getIsochrone",
  GetIsochroneParamsSchema,
);

export const routingSchema = {
  methods: [GetRouteMessage, GetIsochroneMessage],
  listeners: [],
} satisfies ModuleSchema;

export type RoutingSchema = {
  methods: {
    getRoute: Method<zInfer<typeof GetRouteMessage>>;
    getIsochrone: Method<zInfer<typeof GetIsochroneMessage>>;
  };
  listeners: {};
};
