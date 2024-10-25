import type { Feature } from "../layers";
import type { LatLng } from "../shared";

export interface MapInteractionEvent {
  center: LatLng;
  features: Array<Feature>;
}
