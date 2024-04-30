import React from 'react'
import './general/Theme.css'
import './ButtonFiltro.css'

const ButtonFiltro = ({className, texto}) => {
  return (
    <div className={"button-filtro " + className}>
			<h6>{texto}</h6>
    </div>
  )
}

ButtonFiltro.defaultProps = {
	className:      ""
}

export default ButtonFiltro