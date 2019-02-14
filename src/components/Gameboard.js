import React from "react";
import starwars from "./starwars.json";
import GamePiece from "./GamePiece";

//variable from the json for randomizing the object order
const starWarsImages = starwars;
// console.log("swi", starWarsImages);

class Gameboard extends React.Component {
  state = { starWarsImages, gameScore: 0, highScore: 0 };

  gamePieceClicked = (id) => {
    //copies the array by value, not reference
    const starWarsCopy = [...this.state.starWarsImages]
    // console.log(id)

    for (let i = 0; i < starWarsCopy.length; i++) {
      if (starWarsCopy[i].id == id) {
        if (starWarsCopy[i].clicked) {
          console.log("game over, man!")
          if (this.gameScore > this.highScore) { this.gameScore = this.highScore }
          this.gameReset();
        }
        else {
          starWarsCopy[i].clicked = true;
          let currentScore = this.state.gameScore;
          currentScore++
          let currentHighScore = this.state.highScore;
          if (currentScore > currentHighScore) {
            currentHighScore = currentScore;
          }
          this.setState({ starWarsImages: this.shuffleCards(starWarsCopy), gameScore: currentScore, highScore: currentHighScore });
          console.log("cs:", currentScore, "hs:", currentHighScore)
        }
      }
    }
  }
  shuffleCards = (starWarsCopy) => {
    console.log("shuffling")
    let tempArray = []
    for (let j = 0; j < starWarsCopy.length; j++) {
      if (Math.random() >= .5) {
        tempArray.push(starWarsCopy[j]);
      }
      else {
        tempArray.unshift(starWarsCopy[j]);
      }
      // console.log(tempArray)
    }
    return tempArray;
  }

  gameReset = () => {
    this.setState({ starWarsImages: this.shuffleCards(starWarsImages), gameScore: 0 });
  }

  render = () => {
    return (
      <div>
        <br />
        <div id="scoreBox"><span>your score:{this.currentScore}  |  Game high score:{this.currenthighScore}</span></div>

        <br />
        <h1 className="gameHeader">Click on any image to start</h1>
        <h2>Click only on images that you haven't clicked yet.</h2>
        <hr />
        <div className="container">

          {this.state.starWarsImages.map(starWarsImages => (
            <GamePiece
              id={starWarsImages.id}
              key={starWarsImages.id}
              name={starWarsImages.name}
              src={starWarsImages.link}
              clicked={this.gamePieceClicked}

            />
          ))}
        </div>
      </div>
    );
  }



}


export default Gameboard;
