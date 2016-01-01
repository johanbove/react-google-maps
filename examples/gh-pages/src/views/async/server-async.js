import {
  default as React,
} from "react";

import {
  default as ReactDOMServer,
} from "react-dom/server";

import {
  match,
  RouterContext,
} from "react-router";

import {
  default as routes,
} from "./routes";

const prerenderLocationList = [
  `/`,
];

export const matchLocation = (location) => {
  return new Promise((resolve, reject) => {
    match({ routes, location, }, (error, redirectLocation, renderProps) => {
      if (renderProps) {
        const {location} = renderProps;
        const __html = ReactDOMServer.renderToString(<RouterContext {...renderProps} />);

        resolve({
          location,
          __html,
        });
      } else {
        reject(error || redirectLocation || `Not found`);
      }
    });
  });
};

export default () => {
  return Promise.all(
    prerenderLocationList.map(matchLocation)
  );
}