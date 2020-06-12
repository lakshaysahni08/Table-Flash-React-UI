import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import N from "./components/Navbar";
import "./App.css";
import Tables from "./components/Tables";

class App extends Component {
  render() {
    return (
      <div className="App">
        <N />
        <Tables />
      </div>
    );
  }
}

export default App;
