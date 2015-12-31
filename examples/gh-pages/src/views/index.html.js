import {
  default as React,
} from "react";

import {
  WebpackScriptEntry,
  WebpackStyleEntry,
} from "reacthtmlpack/lib/entry";

export default (
  <html>
    <head>
      <title>React Google Maps | tomchentw</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta charSet="UTF-8" />
      <WebpackStyleEntry
        chunkName="client"
        chunkFilepath="./client.js"
        configFilepath="../../Client.webpackConfig.js"
      />
      <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places" />
      <WebpackScriptEntry
        chunkName="prism"
        chunkFilepath={require.resolve(`prismjs`)}
        configFilepath="../../WebWorker.webpackConfig.js"
      />
    </head>
    <body>
      <div id="react-container"/>
      <WebpackScriptEntry
        chunkName="client"
        chunkFilepath="./client.js"
        configFilepath="../../Client.webpackConfig.js"
      />
    </body>
  </html>
);
