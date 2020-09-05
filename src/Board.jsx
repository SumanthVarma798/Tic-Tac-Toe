import React from "react";

function Board(props) {
  return (
    <div className="cells">
      <button onClick={() => props.cellClicked(0)}>
        <h3>{props.boardVals[0]}</h3>
      </button>
      <button onClick={() => props.cellClicked(1)}>
        <h3>{props.boardVals[1]}</h3>
      </button>
      <button onClick={() => props.cellClicked(2)}>
        <h3>{props.boardVals[2]}</h3>
      </button>
      <button onClick={() => props.cellClicked(3)}>
        <h3>{props.boardVals[3]}</h3>
      </button>
      <button onClick={() => props.cellClicked(4)}>
        <h3>{props.boardVals[4]}</h3>
      </button>
      <button onClick={() => props.cellClicked(5)}>
        <h3>{props.boardVals[5]}</h3>
      </button>
      <button onClick={() => props.cellClicked(6)}>
        <h3>{props.boardVals[6]}</h3>
      </button>
      <button onClick={() => props.cellClicked(7)}>
        <h3>{props.boardVals[7]}</h3>
      </button>
      <button onClick={() => props.cellClicked(8)}>
        <h3>{props.boardVals[8]}</h3>
      </button>
    </div>
  );
}

export default Board;
