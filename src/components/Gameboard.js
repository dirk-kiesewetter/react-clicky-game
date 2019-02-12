import React from "react";
import starwars from "./starwars.json";
import GamePiece from "./GamePiece";

//variable from the json for randomizing the object order
let starWarsImages = starwars;
console.log("swi", starWarsImages);

class Gameboard extends React.Component {
  state = { starWarsImages };

  render() {
    return (
      <div>
        <br />
        <h1 className="gameHeader">Click on any image to start</h1>
        <h2>Click only on images that you haven't clicked yet.</h2>
        <hr />
        <div className="container">
          {this.state.starWarsImages.map(starWarsImages => (
            <GamePiece
              key={starWarsImages.id}
              name={starWarsImages.name}
              src={starWarsImages.link}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Gameboard;
