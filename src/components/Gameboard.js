import React from "react";
import starwars from "./starwars.json";
import GamePiece from "./GamePiece";

//variable from the json file for randomizing the object order
const starWarsImages = starwars;
// console.log("swi", starWarsImages);

class Gameboard extends React.Component {
  state = { starWarsImages, gameScore: 0, highScore: 0 };

  gamePieceClicked = (id) => {
    // copies the array by value, not reference
    const starWarsCopy = [...this.state.starWarsImages]
    // console.log(id)

    for (let i = 0; i < starWarsCopy.length; i++) {
      // console.log('gamescore', this.state.gameScore)

      // user loss condition
      if (starWarsCopy[i].id === id) {
        if (starWarsCopy[i].clicked) {
          // displays relevant game status div
          document.getElementById("correctGuessAlert").style.display = "none";
          document.getElementById("gameStartAlert").style.display = "none";
          document.getElementById("incorrectGuessAlert").style.display = "block";

          // sets new high score
          if (this.gameScore > this.highScore) {
            this.gameScore = this.highScore
          }
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
          console.log("cs:", currentScore, "chs:", currentHighScore)

          if (currentScore > currentHighScore) {
            currentHighScore = currentScore;
          };
          if (currentScore === 12) {
            this.setState({ highScore: currentHighScore });
            // alert("winner!")
            this.gameReset()
          }
          else {
            this.setState({ starWarsImages: this.shuffleCards(starWarsCopy), gameScore: currentScore, highScore: currentHighScore });
            // console.log("cs:", currentScore, "chs:", currentHighScore)
          };
        };
      }
    }
  }

  shuffleCards = (starWarsCopy) => {
    let tempArray = []
    for (let j = 0; j < starWarsCopy.length; j++) {
      if (Math.random() >= .5) {
        tempArray.push(starWarsCopy[j]);
      }
      else {
        tempArray.unshift(starWarsCopy[j]);
      };
    };
    return tempArray;
  };

  gameReset = () => {
    //resets all game pieces to clicked = false
    for (let j = 0; j < starWarsImages.length; j++) {
      starWarsImages[j].clicked = false;
    };
    this.setState({ starWarsImages: this.shuffleCards(starWarsImages), gameScore: 0 });
    document.getElementById("correctGuessAlert").style.display = "none";

    setTimeout(() => {
      document.getElementById("incorrectGuessAlert").style.display = "none";
      document.getElementById("gameStartAlert").style.display = "block";
    }, 1000);
  };

  render = () => {
    return (
      <div className="containingdiv">
        <br />
        <div id="scoreBox"><span>Your score: {this.state.gameScore}  |  High score: {this.state.highScore}</span></div>

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
