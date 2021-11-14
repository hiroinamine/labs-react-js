import React from "react";

// Class component
class CounterNoHooks extends React.Component {
  constructor(props) {
    super(props);
    // O único lugar onde você pode atribuir this.state é o construtor.
    this.state = {
      counter: 0
    };
  }

  addComment() {
    // Errado
    // this.state.comment = 'Hello';
    // Correto
    this.setState({ comment: "Hello" });
  }

  increment() {
    // Como this.props e this.state podem ser atualizados de forma assíncrona
    // Errado
    // this.setState({
    //   counter: this.state.counter + this.props.increment
    // });
    // Correto
    this.setState((state, props) => ({
      counter: state.counter + props.increment
    }));
  }

  render() {
    return (
      <div>
        <h1>My Counter with state</h1>
        <h2>
          <button onClick={() => this.increment()}>Counter</button>:
          {this.state.counter}
        </h2>

        <div>
          <button onClick={() => this.addComment()}>Comentario</button>
          <p>{this.state.comment}</p>
        </div>
      </div>
    );
  }
}

export default CounterNoHooks;
