import React from 'react'
import PropTypes from 'prop-types'
import './QuizButtonResposta.css'
import './general/Theme.css'

const QuizButtonResposta = ({id, isSelecionado, texto}) => {

	const getSelectedClass = (isSelecionado) => {
		if(isSelecionado){
			return "selecionado"
		} 
		return ""
	}

  return (
    <div className={getSelectedClass(isSelecionado)+' buttonResposta'}>
        <div className='radioBorder'>
            <span className='radioFill'></span>
        </div>

        <div className='respostaTexto'>
            <h6 id={id}>{texto}</h6>
        </div>
    </div>
  )
}

QuizButtonResposta.propTypes = {
	isSelecionado: PropTypes.bool,
	texto:				 PropTypes.string
}

QuizButtonResposta.defaultProps = {
	isSelecionado: false,
	texto:				 "Resposta não informada"
}


export default QuizButtonResposta