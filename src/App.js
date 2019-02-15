import React, { Component } from "react";
import Titlebar from "./components/Titlebar";
import Gameboard from "./components/Gameboard";
import "./App.css";


class App extends Component {
  render() {
    return (
      <div>
        <Titlebar />
        <Gameboard />
      </div>
    );
  }
}

export default App;
