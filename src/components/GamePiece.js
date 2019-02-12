import React from "react";

function GamePiece(props) {
  console.log(props);
  return (
    <span>
      {/* <h3>{props.name}</h3> */}
      <input
        key={props.id}
        type="image"
        className="imgBtn"
        name={props.name}
        src={props.src}
        alt="Submit"
        width="170"
        height="170"
      />
    </span>
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
