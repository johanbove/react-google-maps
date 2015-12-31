import {
  default as SimpleMap,
} from "./SimpleMap";

import {
  default as StyledMap,
} from "./StyledMap";

import {
  default as Geolocation,
} from "./Geolocation";

import {
  default as Directions,
} from "./Directions";

import {
  default as OverlayView,
} from "./OverlayView";

SimpleMap.__raw = require(`!raw-loader!./SimpleMap`);
StyledMap.__raw = require(`!raw-loader!./StyledMap`);
Geolocation.__raw = require(`!raw-loader!./Geolocation`);
Directions.__raw = require(`!raw-loader!./Directions`);
OverlayView.__raw = require(`!raw-loader!./OverlayView`);

export {
  SimpleMap,
  StyledMap,
  Geolocation,
  Directions,
  OverlayView,
};
