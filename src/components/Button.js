import React from 'react'
import PropTypes from 'prop-types'
import './general/Theme.css'
import './Button.css'

/**
 * Botão genérico usado no website
 * @param {String} className Classes que você deseja adicionar ao botão
 * @param {String} cor Cor do botão. Opções: Branco, Azul, Amarelo, Verde, Rosa, Cinza;
 * @param {String} texto Texto do botão
 * @returns 
 */
const Button = ({className, cor, texto}) => {

  /**
   * Método que retorna uma classe que altera a cor do botão
   * 
   * Opções: Branco, Azul, Amarelo, Verde, Rosa, Cinza
   * 
   * @param {String} cor recebe o nome da cor. 
   * @returns {String} nome da classe
   */
  const getButtonColorClass = (cor) => {
    let classes = "";

    switch(cor){
      case 'azul':
        classes = "button buttonAzul";
        break;
      case 'branco':
        classes = "button buttonBranco";
        break;
      case 'amarelo':
        classes = "button buttonAmarelo";
        break;
      case 'verde':
        classes = "button buttonVerde";
        break;
      case 'rosa':
        classes = "button buttonRosa";
        break;
      case 'cinza':
        classes = "button buttonCinza";
        break;
      default:
        classes = "button buttonBranco";
    }

    return classes;
  }

  return (
    <div className={getButtonColorClass(cor)+" "+className}>{texto}</div>
  )
}


export default Button