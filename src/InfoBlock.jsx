import React from "react";

function InfoBlock(props) {
  const { players, numberOfMoves: moves } = props;
  const currentPlayer = players[moves % 2];
  return (
    <React.Fragment>
      <div className="basic-info">
        <div className="player-info">
          <h2>{currentPlayer.name}'s turn</h2>
        </div>
        <div className="number-of-moves">
          <h2>Number of Moves: {moves}</h2>
        </div>
      </div>
    </React.Fragment>
  );
}

export default InfoBlock;
