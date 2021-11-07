import React, { Component } from "react";
import "./Contador.css";
import Display from "./Display";
import PassoForm from "./PassoForm";
import Botoes from "./Botoes";

class Contador extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     passo: props.passo,
  //     valor: 0
  //   };
  // }

  state = {
    passo: this.props.passo || 1,
    valor: this.props.valor || 0
  };

  inc = () => {
    this.setState({
      valor: this.state.valor + this.state.passo
    });
  };

  dec = () => {
    this.setState({
      valor: this.state.valor - this.state.passo
    });
  };

  changePasso = newPasso => {
    this.setState({
      passo: newPasso
    });
  };

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <PassoForm
          passo={this.state.passo}
          onPassoChange={this.changePasso}
        ></PassoForm>

        <Display valor={this.state.valor}></Display>

        <Botoes onAdd={this.inc} onSub={this.dec}></Botoes>
      </div>
    );
  }
}

export default Contador;
