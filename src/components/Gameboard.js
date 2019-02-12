import React from "react";
import starwars from "./starwars.json";
import GamePiece from "./GamePiece";

class Gameboard extends React.Component {
  state = { starwars };

  render() {
    return (
      <div>
        <br />
        <h1 className="gameHeader">Click on any image to start</h1>
        <h2>Click only on images that you haven't clicked yet.</h2>
        <hr />
        <div className="container">
          {this.state.starwars.map(starwars => (
            <GamePiece
              key={starwars.id}
              name={starwars.name}
              src={starwars.link}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Gameboard;
