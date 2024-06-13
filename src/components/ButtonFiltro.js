import React from 'react'
import './general/Theme.css'
import './ButtonFiltro.css'

const ButtonFiltro = ({id, className, texto}) => {
  return (
    <div id={id} className={"button-filtro " + className}>
			<h6>{texto}</h6>
    </div>
  )
}

ButtonFiltro.defaultProps = {
  id:           "",
	className:    ""
}

export default ButtonFiltro