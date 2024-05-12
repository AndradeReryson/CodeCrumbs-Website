import React from 'react'
import './InputLacunaExercicio.css'
import PropTypes from 'prop-types'
import './general/Theme.css'

const InputLacunaExercicio = ({className, tamanho, children}) => {

    return (
    <>
        <input maxLength={tamanho} className={className+" inputLacuna font_h6"} type='text' style={{width: "calc("+tamanho+"ch + 10px)"}}/>
    </>
  )
}

InputLacunaExercicio.propTypes = {
    className:  PropTypes.string,
    tamanho:    PropTypes.string,
    children:   PropTypes.node
}
export default InputLacunaExercicio