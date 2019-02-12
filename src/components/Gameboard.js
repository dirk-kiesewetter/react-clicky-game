import React from "react";

class Gameboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Gameboard</h1>
        <input
          type="image"
          src="../../public/images/a-wing.png"
          alt="Submit"
          width="48"
          height="48"
        />
        <input
          type="image"
          src="~/Images/Desert.jpg"
          alt="Submit"
          width="48"
          height="48"
        />
      </div>
    );
  }
}

export default Gameboard;
