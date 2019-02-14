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
      // user loss condition
      if (starWarsCopy[i].id === id) {
        if (starWarsCopy[i].clicked) {
          document.getElementById("correctGuessAlert").style.display = "none";
          document.getElementById("gameStartAlert").style.display = "none";
          document.getElementById("incorrectGuessAlert").style.display = "block";

          console.log("game over, man!")

          // sets new high score
          if (this.gameScore > this.highScore) { this.gameScore = this.highScore }
          this.gameReset();
        }
        else {
          // changes state of gamepiece to 'clicked'
          starWarsCopy[i].clicked = true;
          document.getElementById("incorrectGuessAlert").style.display = "none";
          document.getElementById("correctGuessAlert").style.display = "block";
          document.getElementById("gameStartAlert").style.display = "none";



          let currentScore = this.state.gameScore;
          currentScore++
          let currentHighScore = this.state.highScore;
          if (currentScore > currentHighScore) {
            currentHighScore = currentScore;
          }
          this.setState({ starWarsImages: this.shuffleCards(starWarsCopy), gameScore: currentScore, highScore: currentHighScore });
          console.log("cs:", currentScore, "chs:", currentHighScore)
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
    setTimeout(() => {
      document.getElementById("incorrectGuessAlert").style.display = "none";
      document.getElementById("gameStartAlert").style.display = "block";
    }, 500)

  }

  render = () => {
    return (
      <div>
        <br />
        <div id="scoreBox"><span>your score:{this.currentScore}  |  Game high score:{this.currentHighScore}</span></div>

        <br />
        <h1 className="gameHeader">Click on an image to start, <br />but don't click on an image more than once.</h1>
        <hr />
        <h2 id="gameStartAlert">Click any image to begin</h2>
        <h2 id="correctGuessAlert">You guessed correctly! </h2>
        <h2 id="incorrectGuessAlert">You guessed incorrectly! </h2>
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
