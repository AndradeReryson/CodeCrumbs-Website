import React from 'react'
import PropTypes from 'prop-types'
import './QuizNumeroPergunta.css'
import './general/Theme.css'

const QuizNumeroPergunta = ({className, numero}) => {
  return (
    <div className={className+' numeroPergunta'}>
        <h5>{numero}</h5>
    </div>
  )
}

QuizNumeroPergunta.propTypes = {
    className:  PropTypes.string,
    numero:     PropTypes.string
}

QuizNumeroPergunta.defaultProps = {
    className:  "",
    numero:     "1"
}

export default QuizNumeroPergunta