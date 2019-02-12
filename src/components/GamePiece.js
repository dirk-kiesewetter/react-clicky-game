import React from "react";

function GamePiece(props) {
  console.log(props);
  return (
    <div>
      <h1>test</h1>
      <input
        type="image"
        className="imgBtn"
        name={props[0].name}
        src={props[0].link}
        alt="Submit"
        width="150"
        height="150"
      />
    </div>
  );
}

export default GamePiece;

/*
 <input
          type="image"
          className="imgBtn"
          src={Falcon}
          alt="Submit"
          width="150"
          height="150"
        />

        */
