import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import React, { Component } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";
import { faHome, faUtensilSpoon } from "@fortawesome/free-solid-svg-icons";

// Handles the dashboard and its components

class Navbar1 extends Component {
  render() {
    return (
      <Nav
        defaultActiveKey="/home"
        className="flex-column navbar menu__submenu-enter-active"
      >
        <FontAwesomeIcon icon={faHome} />
        <Navbar.Brand className="heading display-2">Dashboard</Navbar.Brand>
        <Nav.Link className="item">
          <FontAwesomeIcon className="img" icon={faUtensilSpoon} />
          <a className="lead">Tables</a>
        </Nav.Link>
      </Nav>
    );
  }
}

export default Navbar1;
