/**
 * The Felt SDK lets you read, create and update elements on the map.
 *
 * Elements that are created via the SDK are only available to the current
 * session - they are not persisted to the map and not available to other users
 * of the map.
 *
 * > If you want to let your users create elements (as opposed to using the SDK to
 * create them programmatically), you can use the {@link ToolsController} to
 * select and configure the drawing tools in Felt.
 *
 * @module Elements
 */
export type {
  CircleElementCreate,
  CircleElementRead,
  CircleElementUpdate,
  Element,
  ElementChangeCallbackParams,
  ElementCreate,
  ElementGroup,
  ElementGroupChangeCallbackParams,
  ElementUpdate,
  GetElementGroupsConstraint,
  GetElementsConstraint,
  HighlighterElementCreate,
  HighlighterElementRead,
  HighlighterElementUpdate,
  ImageElementCreate,
  ImageElementRead,
  ImageElementUpdate,
  LinkElementRead,
  MarkerElementCreate,
  MarkerElementRead,
  MarkerElementUpdate,
  NoteElementCreate,
  NoteElementRead,
  NoteElementUpdate,
  PathElementCreate,
  PathElementRead,
  PathElementUpdate,
  PlaceElementCreate,
  PlaceElementRead,
  PlaceElementUpdate,
  PolygonElementCreate,
  PolygonElementRead,
  PolygonElementUpdate,
  TextElementCreate,
  TextElementRead,
  TextElementUpdate,
} from "./types";

// export type { ElementsController } from "./controller";

import type { ToolsController } from "../tools";
