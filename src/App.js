import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar1 from "./components/Navbar";
import "./App.css";
import Tables from "./components/Tables";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar1 />
        <Tables />
      </div>
    );
  }
}

export default App;
