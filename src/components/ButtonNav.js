import React from 'react'
import './general/Theme.css'
import './ButtonNav.css'

/**
 * Botão genérico do navbar
 * @param {String} className Classes que você deseja adicionar ao botão.
 * @param {String} texto Texto do botão
 * @returns 
 */
const ButtonNav = ({className, texto}) => {
  return (
    <div className={"button-nav " + className}>
        <h6>{texto}</h6>
    </div>
  )
}

ButtonNav.defaultProps = {
    className:      ""
}
export default ButtonNav