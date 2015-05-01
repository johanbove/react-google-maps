import React from "react/addons";

const {PropTypes} = React;

const ReactHtml = React.createClass({

  propTypes: {
    componentString: PropTypes.string.isRequired,
    clientAssets: PropTypes.object.isRequired,
  },

  render () {
    const {props, state} = this,
          {clientAssets} = props;

    return (
      <html>
        <head>
          <title>React Google Maps | tomchentw</title>
          <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.exp" />
          <script type="text/javascript" src="prism.min.js" />
        </head>
        <body>
          <div id="react-container" dangerouslySetInnerHTML={{__html: props.componentString}}/>
          <script type="text/javascript" src={clientAssets["assets/main"]} />
        </body>
      </html>
    );
  }
});

export default ReactHtml;