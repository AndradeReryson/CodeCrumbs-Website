import React from 'react'
import './general/Theme.css'
import './Button.css'

/**
 * Botão genérico usado no website
 * @param {String} className Classes que você deseja adicionar ao botão
 * @param {String} cor Cor do botão. Opções: Branco, Azul, Amarelo, Verde, Rosa, Cinza;
 * @param {String} texto Texto do botão
 * @returns 
 */
const Button = ({id, className, cor, texto}) => {

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
    let cor_lower = cor.toLowerCase();

    switch(cor_lower){
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
    <div id={id} className={getButtonColorClass(cor)+" font_h6 "+className}>
      <h6>{texto}</h6>
    </div>
  )
}

Button.defaultProps = {
  className: "",
  id: null
}

export default Button