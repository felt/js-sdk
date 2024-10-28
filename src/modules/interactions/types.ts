import type { Feature } from "../layers";
import type { LatLng } from "../shared/types";

export interface MapInteractionEvent {
  center: LatLng;
  features: Array<Feature>;
}
