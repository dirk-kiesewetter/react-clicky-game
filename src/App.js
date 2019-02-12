import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Gameboard from "./components/Gameboard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Gameboard />
      </div>
    );
  }
}

export default App;
