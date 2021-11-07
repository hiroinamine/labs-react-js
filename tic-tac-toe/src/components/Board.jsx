import React, { Component } from "react";
import Square from "./Square";

class Board extends React.Component {
  // Lifting state up, to control history
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     squares: Array(9).fill(null),
  //     xIsNext: true
  //   };
  // }

  // lifting state up
  // handleClick(i) {
  //   // Immutability Is Important: create a new array
  //   // const player = { score: 1, name: "Jeff", address: { name: 1 } };
  //   // const newPlayer = Object.assign({}, player, { score: 2 });
  //   // Or if you are using object spread syntax proposal, you can write:
  //   // const newPlayer = { ...player, score: 2 };
  //   // warning: clone only first level properties
  //   // player.address === newPlayer.address

  //   const squares = this.state.squares.slice();
  //   const winner = calculateWinner(squares);
  //   if (winner || squares[i]) return;
  //   squares[i] = this.state.xIsNext ? "X" : "O";
  //   this.setState({
  //     squares: squares,
  //     xIsNext: !this.state.xIsNext
  //   });
  // }

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    // lifting state up
    // const winner = calculateWinner(this.state.squares);
    // let status;
    // if (winner) {
    //   status = "Winner: " + winner;
    // } else {
    //   status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    // }

    return (
      <div>
        {/* <div className="status">{status}</div> */}
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
