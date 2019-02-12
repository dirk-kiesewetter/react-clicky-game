import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Gameboard from "./components/Gameboard";
import GamePiece from "./components/GamePiece";
import starwars from "./components/starwars.json";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Gameboard />
        <GamePiece name={starwars[0].name} src={starwars[0].link} />
      </div>
    );
  }
}

export default App;
