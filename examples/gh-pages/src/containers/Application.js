import {
  default as React,
  Component,
  Children,
} from "react";

import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from "react-bootstrap";

import {
  default as GitHubForkRibbon,
} from "react-github-fork-ribbon";

import {
  ToastContainer,
  ToastMessage,
} from "react-toastr";

import {
  PrismCode,
} from "react-prism";

require(`./styles/Application.scss`);

export default class Application extends Component {

  _handle_toast(title, message) {
    this.refs.toast.success(title, message);
  }

  render() {
    return (
      <div id="react-root">
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">React Google Maps</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem href="https://github.com/tomchentw" target="_blank">by @tomchentw</NavItem>
            <NavDropdown id="examples-dropdown" title="Examples">
              <MenuItem href="#basics/simple-map">Simple map</MenuItem>
              <MenuItem href="#basics/styled-map">Styled map</MenuItem>
              <MenuItem href="#basics/geolocation">Geolocation</MenuItem>
              <MenuItem href="#basics/directions">Directions</MenuItem>
              <MenuItem href="#basics/overlay-view">Overlay view</MenuItem>
              <MenuItem divider />
              <MenuItem href="#events/simple-click-event">Simple click event</MenuItem>
              <MenuItem href="#events/closure-listeners">Using closures in event listeners</MenuItem>
              <MenuItem href="#events/accessing-arguments">Accessing arguments in UI events</MenuItem>
              <MenuItem href="#events/getting-properties">Getting properties with event handlers</MenuItem>
              <MenuItem divider />
              <MenuItem href="#drawing/drawing-tools">Drawing tools</MenuItem>
              <MenuItem divider />
              <MenuItem href="#places/search-box">Adding a places search box</MenuItem>
              <MenuItem divider />
              <MenuItem href="#addons/marker-clusterer">Marker clusterer addon with Marker</MenuItem>
            </NavDropdown>
          </Nav>
          <Navbar.Collapse style={{ marginRight: 100 }}>
            <Nav pullRight>
              <NavItem href="/async">Async example</NavItem>
              <NavItem href="#geojson">Geojson</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="container-fluid container--full-height">
          <GitHubForkRibbon
            position="right"
            color="black"
            href="https://github.com/tomchentw/react-google-maps"
          >
            Fork me on GitHub
          </GitHubForkRibbon>
          <ToastContainer
            ref="toast"
            toastMessageFactory={React.createFactory(ToastMessage.animation)}
          />
          <div className="row row--full-height">
            <div className="col-xs-6" style={{ height: `100%` }}>
              {this.props.children}
            </div>
            <div className="col-xs-6">
              <pre>
                <PrismCode className="language-javascript">
                  {Children.only(this.props.children).type.__raw}
                </PrismCode>
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
