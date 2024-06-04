import React from 'react'
import PropTypes from 'prop-types'
import { useLocation, Link } from 'react-router-dom'
import './CardQuiz.css'
import './general/Theme.css'

const CardQuiz = ({key, className, quiz, numero, concluido, titulo, nota}) => {
  let location = useLocation().pathname;

  return (
    <div className={'cardQuiz '+className}>
      <h6 className="quizNumero" style={{textAlign: "center"}}>{numero}</h6>
      <h6 className='markConcluido'>{concluido ? "\u2713" : "" }</h6>
      <Link className="link quizTitulo font_h6" to={{pathname: location+"/"+quiz}} style={{textAlign: "left"}}>{titulo}
      </Link>
      <h6 className="quizNota" style={{textAlign: "center"}}>{nota}</h6>
    </div>
  )
}

CardQuiz.propTypes = {
  key: PropTypes.string
}

export default CardQuiz