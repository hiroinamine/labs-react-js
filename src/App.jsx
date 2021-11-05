import './App.css'

import React from 'react'

import Card from './components/layout/Card'
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import CondicionalComIf from './components/CondicionalComIf'

const App = props => {
  return (
    <div className="App">
      <Card titulo="#06 - Condicional com IF">
        <CondicionalComIf numero={9}></CondicionalComIf>
      </Card>

      <Card titulo="#05 - Condicional">
        <Condicional numero={10}></Condicional>
      </Card>

      <Card titulo="#04 - Repeticao">
        <Repeticao></Repeticao>
      </Card>

      <Card titulo="#03 - Componente com Filhos">
        <ComFilhos>
          <ul>
            <li>Ana</li>
            <li>Joao</li>
            <li>Maria</li>
          </ul>
        </ComFilhos>
      </Card>

      <Card titulo="#02 - Componente com Parametros">
        <ComParametro
          titulo="Esse é o titulo"
          subtitulo="Esse é o subtitulo"
        ></ComParametro>
      </Card>
      <Card titulo="#01 - Primeira Componente">
        <Primeiro></Primeiro>
      </Card>
    </div>
  )
}

export default App
