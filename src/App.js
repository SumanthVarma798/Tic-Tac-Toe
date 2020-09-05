import React, { Component } from "react";
import Board from "./components/Board";
import InfoBlock from "./components/InfoBlock";
import WinnerBlock from "./components/WinnerBlock";
import "./App.css";

class App extends Component {
  state = {
    board: ["", "", "", "", "", "", "", "", ""],
    players: [
      { name: "Player 1", symbol: "X" },
      { name: "Player 2", symbol: "O" },
    ],
    numMoves: 0,
    winner: "",
  };

  resetGame = () => {
    this.setState({
      board: ["", "", "", "", "", "", "", "", ""],
      numMoves: 0,
      winner: "",
    });
  };

  winCheck(board) {
    const { players } = this.state;
    let newBoard = ["", "", "", "", "", "", "", "", ""];
    for (let i = 0; i < 9; i += 3) {
      if (
        board[i] === board[i + 1] &&
        board[i + 1] === board[i + 2] &&
        board[i] !== "" &&
        board[i + 1] !== "" &&
        board[i + 2] !== ""
      ) {
        if (board[i] === "X") {
          newBoard[i] = "X";
          newBoard[i + 1] = "X";
          newBoard[i + 2] = "X";
          this.setState({ winner: players[0].name });
          return newBoard;
        }
        newBoard[i] = "O";
        newBoard[i + 1] = "O";
        newBoard[i + 2] = "O";
        this.setState({ winner: players[1].name });
        return newBoard;
      }
    }
    for (let i = 0; i < 3; i++) {
      if (
        board[i] === board[i + 3] &&
        board[i + 3] === board[i + 6] &&
        board[i] !== "" &&
        board[i + 3] !== "" &&
        board[i + 6] !== ""
      ) {
        if (board[i] === "X") {
          newBoard[i] = "X";
          newBoard[i + 3] = "X";
          newBoard[i + 6] = "X";
          this.setState({ winner: players[0].name });
          return newBoard;
        }
        newBoard[i] = "O";
        newBoard[i + 3] = "O";
        newBoard[i + 6] = "O";
        this.setState({ winner: players[1].name });
        return newBoard;
      }
    }
    if (
      board[0] === board[4] &&
      board[4] === board[8] &&
      board[0] !== "" &&
      board[4] !== "" &&
      board[8] !== ""
    ) {
      if (board[0] === "X") {
        newBoard[0] = "X";
        newBoard[4] = "X";
        newBoard[8] = "X";
        this.setState({ winner: players[0].name });
        return newBoard;
      }
      newBoard[0] = "O";
      newBoard[4] = "O";
      newBoard[8] = "O";
      this.setState({ winner: players[1].name });
      return newBoard;
    }
    if (
      board[2] === board[4] &&
      board[4] === board[6] &&
      board[2] !== "" &&
      board[4] !== "" &&
      board[6] !== ""
    ) {
      if (board[2] === "X") {
        newBoard[2] = "X";
        newBoard[4] = "X";
        newBoard[6] = "X";
        this.setState({ winner: players[0].name });
        return newBoard;
      }
      newBoard[2] = "O";
      newBoard[4] = "O";
      newBoard[6] = "O";
      this.setState({ winner: players[1].name });
      return newBoard;
    }
    return null;
  }

  cellClicked = (id) => {
    const { board, players, numMoves, winner } = this.state;
    if (board[id] === "" && winner === "") {
      const newBoard = [...board];
      const currentPlayer = players[numMoves % 2];
      const moves = numMoves + 1;
      newBoard[id] = currentPlayer.symbol;
      const winBoard = this.winCheck(newBoard);
      winBoard !== null
        ? this.setState({
            board: winBoard,
            numMoves: moves,
          })
        : this.setState({
            board: newBoard,
            numMoves: moves,
          });
    }
  };

  constructor() {
    super();
    this.handleChangeforP1 = this.handleChangeforP1.bind(this);
    this.handleChangeforP2 = this.handleChangeforP2.bind(this);
  }

  handleChangeforP1(event) {
    const newPlayers = [...this.state.players];
    newPlayers[0].name = event.target.value;
    this.setState({ players: newPlayers });
  }

  handleChangeforP2(event) {
    const newPlayers = [...this.state.players];
    newPlayers[1].name = event.target.value;
    this.setState({ players: newPlayers });
  }

  render() {
    return (
      <div className="main-container">
        <h1>Tic-Tac-Toe</h1>
        <form>
          <div className="input-boxes">
            <input
              type="text"
              placeholder="Player 1 Name"
              value={this.state.players[0].name}
              onChange={this.handleChangeforP1}
            />
            <input
              type="text"
              placeholder="Player 2 Name"
              value={this.state.players[1].name}
              onChange={this.handleChangeforP2}
            />
          </div>
        </form>
        <div className="board-container">
          <Board boardVals={this.state.board} cellClicked={this.cellClicked} />
        </div>
        {this.state.winner === "" && this.state.numMoves < 9 ? (
          <InfoBlock
            numberOfMoves={this.state.numMoves}
            players={this.state.players}
            winner={this.state.winner}
          />
        ) : (
          <WinnerBlock reset={this.resetGame} winner={this.state.winner} />
        )}
      </div>
    );
  }
}

export default App;
