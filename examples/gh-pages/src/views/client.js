import {
  default as React,
} from "react";

import {
  default as ReactDOM,
} from "react-dom";

import {
  Router,
  hashHistory,
} from "react-router";

import {
  default as routes,
} from "./routes";

/*
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
ReactDOM.render((
  <Router
    history={hashHistory}
    routes={routes}
  />
), document.getElementById(`react-container`));
