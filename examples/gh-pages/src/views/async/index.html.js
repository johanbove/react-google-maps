import {
  default as React,
} from "react";

import {
  WebpackScriptEntry,
  WebpackStyleEntry,
  ReactDOMServerRenderToStringEntry,
} from "reacthtmlpack/lib/entry";

export default (
  <html>
    <head>
      <title>Async | React Google Maps | tomchentw</title>
      <base href="../" />
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta charSet="UTF-8" />
      <WebpackStyleEntry
        chunkName="client-async"
        chunkFilepath="./client-async.js"
        configFilepath="../../../Client.webpackConfig.js"
      />
      <WebpackScriptEntry
        chunkName="prism"
        chunkFilepath={require.resolve(`prismjs`)}
        configFilepath="../../../WebWorker.webpackConfig.js"
      />
    </head>
    <body>
      <ReactDOMServerRenderToStringEntry
        id="react-container"
        tagName="div"
        chunkName="server-async"
        chunkFilepath="./server-async.js"
        configFilepath="../../../Server.webpackConfig.js"
      />
      <WebpackScriptEntry
        chunkName="client-async"
        chunkFilepath="./client-async.js"
        configFilepath="../../../Client.webpackConfig.js"
      />
    </body>
  </html>
);
