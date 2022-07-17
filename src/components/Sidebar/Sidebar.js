import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Collapse } from "reactstrap";
import PerfectScrollbar from "perfect-scrollbar";
import { connect } from "react-redux";

import logo from "assets/img/react-logo.png";
import logOutIcon from "../../assets/img/logOut.ico";
import TransfersLogo from "../../assets/img/react-logo.png";
import { logout } from "../../Containers/Login/redux/actions";

var ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getCollapseStates(props.routes);
  }

  getCollapseStates = (routes) => {
    let initialState = {};
    routes.map((prop, key) => {
      if (prop.collapse) {
        initialState = {
          [prop.state]: this.getCollapseInitialState(prop.views),
          ...this.getCollapseStates(prop.views),
          ...initialState,
        };
      }
      return null;
    });
    return initialState;
  };
  getCollapseInitialState(routes) {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse && this.getCollapseInitialState(routes[i].views)) {
        return true;
      } else if (window.location.pathname.indexOf(routes[i].path) !== -1) {
        return true;
      }
    }
    return false;
  }
  // this function creates the links and collapses that appear in the sidebar (left menu)
  createLinks = (routes) => {
    return routes.map((prop, key) => {
      if (prop.redirect) {
        return null;
      }
      if (prop.collapse) {
        var st = {};
        st[prop["state"]] = !this.state[prop.state];
        return (
          <li
            className={this.getCollapseInitialState(prop.views) ? "active" : ""}
            key={key}
          >
            <a
              href="#pablo"
              data-toggle="collapse"
              aria-expanded={this.state[prop.state]}
              onClick={(e) => {
                e.preventDefault();
                this.setState(st);
              }}
            >
              {prop.icon !== undefined ? (
                <>
                  <i className={prop.icon} />
                  <p>
                    {prop.name}
                    <b className="caret" />
                  </p>
                </>
              ) : (
                <>
                  <span className="sidebar-mini-icon">{prop.mini}</span>
                  <span className="sidebar-normal">
                    {prop.name}
                    <b className="caret" />
                  </span>
                </>
              )}
            </a>
            <Collapse isOpen={this.state[prop.state]}>
              <ul className="nav">{this.createLinks(prop.views)}</ul>
            </Collapse>
          </li>
        );
      }

      return (
        <>
          {!prop.isShow && (
            <li className={this.activeRoute(prop.layout + prop.path)} key={key}>
              <NavLink to={prop.layout + prop.path} activeClassName="">
                {prop.icon !== undefined ? (
                  <>
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </>
                ) : (
                  <>
                    <span className="sidebar-mini-icon">{prop.mini}</span>
                    <span className="sidebar-normal">{prop.name}</span>
                  </>
                )}
              </NavLink>
            </li>
          )}
        </>
      );
    });
  };
  // verifies if routeName is the one active (in browser input)
  activeRoute = (routeName) => {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  componentDidMount() {
    // if you are using a Windows Machine, the scrollbars will have a Mac look
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.sidebar, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
  }
  componentWillUnmount() {
    // we need to destroy the false scrollbar when we navigate
    // to a page that doesn't have this component rendered
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  render() {
    return (
      <div
        className="sidebar"
        data-color={this.props.bgColor}
        data-active-color={this.props.activeColor}
      >
        <div className="logo">
          <a
            href="https://www.creative-tim.com"
            className="simple-text logo-mini"
          >
            <div className="d-flex justify-content-center">
              <img src='' alt="react-logo" />
            </div>
          </a>
          <a href="#" className="simple-text logo-normal">
            <img src={TransfersLogo} height="60px" width="100px" alt="salem" />
          </a>
        </div>
        <div className="sidebar-wrapper" ref="sidebar">
          <Nav>{this.createLinks(this.props.routes)}</Nav>
          <div
            className="d-flex justify-content-center showPointer pt-5"
            onClick={this.props.logout}
          >
            <img src={logOutIcon} height="30px" width="30px" alt="logOut" />
          </div>
          <div className="d-flex justify-content-center pt-2">
            <p style={{ color: "white" }}>log Out</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(Sidebar);
