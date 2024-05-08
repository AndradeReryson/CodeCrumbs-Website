import React from 'react'
import './CardQuiz.css'
import './general/Theme.css'

const CardQuiz = ({className, numero, concluido, titulo, nota}) => {
  return (
    <div className={'cardQuiz '+className}>
        <h6 className="quizNumero" style={{textAlign: "center"}}>{numero}</h6>
        <h6 className='markConcluido'>{concluido}</h6>
        <h6 className="quizTitulo" style={{textAlign: "left"}}>{titulo}</h6>
        <h6 className="quizNota" style={{textAlign: "center"}}>{nota}</h6>
    </div>
  )
}

export default CardQuiz