import React from "react";

function WinnerBlock(props) {
  const { winner, reset } = props;
  return (
    <React.Fragment>
      <div className="basic-info">
        <div className="winner-info">
          {winner === "" ? (
            <h2>Its a tie :(</h2>
          ) : (
            <h2>{winner} is the winner !!!</h2>
          )}
        </div>
        <button onClick={reset} className="reset">
          <h2>Play Again ?</h2>
        </button>
      </div>
    </React.Fragment>
  );
}

export default WinnerBlock;
