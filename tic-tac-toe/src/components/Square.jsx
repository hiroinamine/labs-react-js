import React, { Component } from "react";

// Migrate component class to function component.
const Square = props => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

// class Square extends React.Component {
//   constructor(props) {
//     console.log("creating square...");
//     super(props);
//   }

//   render() {
//     console.log("rendering square...");
//     return (
//       <button className="square" onClick={() => this.props.onClick()}>
//         {this.props.value}
//       </button>
//     );
//   }
// }

export default Square;
