import React from 'react'

const Condicional = props => {
  console.log('Condicional')
  return (
    <div>
      <h2>O numero é {props.numero}</h2>
      {props.numero % 2 === 0 ? <span>Par</span> : <span>Impar</span>}
    </div>
  )
}

export default Condicional
