import React, { Component } from "react";
import Board from "./Board";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], lines[i]];
    }
  }
  return [null];
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          lastMove: null
        }
      ],
      xIsNext: true,
      stepNumber: 0,
      sortAsc: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = this.state.history[history.length - 1];
    const squares = current.squares.slice();
    const [winner] = calculateWinner(squares);
    if (winner || squares[i]) return;
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
          lastMove: i
        }
      ]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    });
  }

  jumpTo(step) {
    this.setState({
      xIsNext: step % 2 === 0,
      stepNumber: step
    });
  }

  position(move) {
    const x = parseInt(move / 3);
    const y = parseInt(move % 3);
    return `row: ${x}, column: ${y}`;
  }

  sort() {
    this.setState({
      sortAsc: !this.state.sortAsc
    });
  }

  getStatus(winner, squares) {
    return winner
      ? "WINNER: " + winner
      : squares.every(el => el)
      ? "DRAW"
      : "Next player: " + (this.state.xIsNext ? "X" : "O");
  }

  restart() {
    this.setState({
      history: [
        {
          squares: Array(9).fill(null),
          lastMove: null
        }
      ],
      xIsNext: true,
      stepNumber: 0
    });
  }

  render() {
    const history = this.state.history;
    const current = this.state.history[this.state.stepNumber];
    const [winner, winnerSquares] = calculateWinner(current.squares);
    const status = this.getStatus(winner, current.squares);

    const moves = history.map((step, move) => {
      const desc =
        move !== 0
          ? `Go to move #${move} (${this.position(step.lastMove)})`
          : "Go to game start";
      return (
        <li key={move}>
          <button className="button" onClick={() => this.jumpTo(move)}>
            {desc}
          </button>
        </li>
      );
    });

    const sortedMoves = this.state.sortAsc ? moves : moves.slice().reverse();

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            winnerSquares={winnerSquares}
            onClick={i => this.handleClick(i)}
            highlight={current.lastMove}
          />
        </div>

        <div className="game-info">
          <div>{status}</div>
          <div>
            <button className="button" onClick={() => this.sort()}>
              Sort Moves
            </button>
            <button className="button new-game" onClick={() => this.restart()}>
              New Game
            </button>
          </div>
          <h5>Moves:</h5>
          <ol>{sortedMoves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
