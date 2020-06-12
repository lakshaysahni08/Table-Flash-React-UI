import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Nav } from "react-bootstrap";
import React, { Component } from "react";
import "./Tables.css";
import AddTables from "./AddTables";

class Tables extends Component {
  render() {
    return (
      <div>
        <Nav defaultActiveKey="/home" className="tabs">
          <p className="lead head">Dine-In</p>
          <p className="lead head disabled">Pick-Up</p>
          <hr />
        </Nav>
        <AddTables />
      </div>
    );
  }
}
export default Tables;
