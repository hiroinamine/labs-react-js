import React from "react";

// Class component
// ciclo de vida do componente:
// - https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
// - https://www.w3schools.com/react/react_lifecycle.asp
class ClockWithLifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  // é executado depois que a saída do componente é renderizada no DOM
  componentDidMount() {
    console.log("componentDidMount");
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  // este metodo é chamado quando o componente está sendo removido do DOM
  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default ClockWithLifecycle;
