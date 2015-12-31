import {
  default as React,
  Component,
  Children,
} from "react";

import {
  Navbar,
  Nav,
  NavItem,
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

export default class AsyncApplication extends Component {

  _handle_toast(title, message) {
    this.refs.toast.success(title, message);
  }

  render() {
    return (
      <div id="react-root">
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Async | React Google Maps</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem href="https://github.com/tomchentw" target="_blank">by @tomchentw</NavItem>
            <NavItem href="../">Back to sync examples</NavItem>
          </Nav>
          <Navbar.Collapse style={{ marginRight: 100 }}>
            <Nav pullRight>
              <NavItem href="../">Back to sync examples</NavItem>
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
