import "./App.css";

import React from "react";

import Card from "./components/layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import ComFilhos from "./components/basicos/ComFilhos";
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from "./components/basicos/CondicionalComIf";
import Pai from "./components/comunicacao/direta/Pai";
import Super from "./components/comunicacao/indireta/Super";
import Input from "./components/form/Input";
import Contador from "./components/contador/Contador";
import Megasena from "./components/megasena/Megasena";

const App = props => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Cards">
        <Card titulo="#11 - Megasena" color="#33CC00">
          <Megasena qtde={6}></Megasena>
        </Card>

        <Card titulo="#10 - Contador" color="#FF0000">
          <Contador valor={5}></Contador>
        </Card>

        <Card titulo="#09 - Input" color="#0066FF">
          <Input></Input>
        </Card>

        <Card titulo="#08 - Comunicao Indireta" color="#006633">
          <Super></Super>
        </Card>

        <Card titulo="#07 - Comunicao Direta" color="#000099">
          <Pai sobrenome="Silva"></Pai>
        </Card>

        <Card titulo="#06 - Condicional com IF" color="#CD5C5C">
          <CondicionalComIf numero={9}></CondicionalComIf>
        </Card>

        <Card titulo="#05 - Condicional" color="#FF1493">
          <Condicional numero={10}></Condicional>
        </Card>

        <Card titulo="#04 - Repeticao" color="#FF8C00">
          <Repeticao></Repeticao>
        </Card>

        <Card titulo="#03 - Componente com Filhos" color="#BDB76B">
          <ComFilhos>
            <ul>
              <li>Ana</li>
              <li>Joao</li>
              <li>Maria</li>
            </ul>
          </ComFilhos>
        </Card>

        <Card titulo="#02 - Componente com Parametros" color="#BA55D3">
          <ComParametro
            titulo="Esse é o titulo"
            subtitulo="Esse é o subtitulo"
          ></ComParametro>
        </Card>

        <Card titulo="#01 - Primeira Componente" color="#7B68EE">
          <Primeiro></Primeiro>
        </Card>
      </div>
    </div>
  );
};

export default App;
