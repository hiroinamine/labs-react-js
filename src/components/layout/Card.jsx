import React from 'react'
import './Card.css'

const Card = props => (
  <div className="Card">
    <div className="Conteudo">{props.children}</div>
    <div className="Footer">{props.titulo}</div>
  </div>
)

export default Card
