import React from "react";
import Awing from "../assets/images/a-wing.png";
import Bwing from "../assets/images/b-wing.jpg";
import Corvette from "../assets/images/corellian_corvette.jpg";
import Falcon from "../assets/images/millennium-falcon.jpg";
import Shuttle from "../assets/images/shuttle.jpg";
import DeathStar from "../assets/images/death-star.jpg";
import SSD from "../assets/images/ssd.jpg";
import Ywing from "../assets/images/y-wing.jpg";
import TIE from "../assets/images/tie-fighter.jpg";
import TieInt from "../assets/images/tie-interceptor.jpg";
import StarDestroyer from "../assets/images/stardestroyer.jpg";
import Xwing from "../assets/images/xwing.jpg";

class Gameboard extends React.Component {
  render() {
    return (
      <div id="gamePieces">
        <br />
        <h1>Gameboard</h1>
        <input
          type="image"
          className="imgBtn"
          src={Awing}
          alt="Submit"
          width="150"
          height="150"
        />
        <input
          type="image"
          className="imgBtn"
          src={Bwing}
          alt="Submit"
          width="150"
          height="150"
        />

        <input
          type="image"
          className="imgBtn"
          src={Falcon}
          alt="Submit"
          width="150"
          height="150"
        />
        <input
          type="image"
          className="imgBtn"
          src={Shuttle}
          alt="Submit"
          width="150"
          height="150"
        />
        <br />
        <input
          type="image"
          className="imgBtn"
          src={DeathStar}
          alt="Submit"
          width="150"
          height="150"
        />
        <input
          type="image"
          className="imgBtn"
          src={SSD}
          alt="Submit"
          width="150"
          height="150"
        />
        <input
          type="image"
          className="imgBtn"
          src={Ywing}
          alt="Submit"
          width="150"
          height="150"
        />
        <input
          type="image"
          className="imgBtn"
          src={TIE}
          alt="Submit"
          width="150"
          height="150"
        />
        <br />
        <input
          type="image"
          className="imgBtn"
          src={TieInt}
          alt="Submit"
          width="150"
          height="150"
        />
        <input
          type="image"
          className="imgBtn"
          src={StarDestroyer}
          alt="Submit"
          width="150"
          height="150"
        />
        <input
          type="image"
          className="imgBtn"
          src={Xwing}
          alt="Submit"
          width="150"
          height="150"
        />
        <input
          type="image"
          className="imgBtn"
          src={Corvette}
          alt="Submit"
          width="150"
          height="150"
        />
      </div>
    );
  }
}

export default Gameboard;
