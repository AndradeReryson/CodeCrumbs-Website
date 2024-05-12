import React from 'react'
import PropTypes from 'prop-types'
import './FlashcardCartao.css'
import './general/Theme.css'

const FlashcardCartao = ({textoFrente, textoVerso, isFrente}) => {
	const getFaceCartao = (isFrente) => {
		if(isFrente){
			return (
				<>
					<h4 className='indicadorFace'>FRENTE</h4>
					<h5 className='frenteCartao'>{textoFrente}</h5>
					<h5 className='versoCartao faceInvisivel'>{textoVerso}</h5>
				</>
			)
		} else {
			return (
				<>
					<h5 className='frenteCartao faceInvisivel'>{textoFrente}</h5>
					<h5 className='versoCartao'>{textoVerso}</h5>
				</>
			)
		}
	}

  return (
    <div className='elemCartao'>
			{getFaceCartao(isFrente)}
    </div>
  )
}

FlashcardCartao.propTypes = {
	textoFrente:		PropTypes.string,
	textoVerso:			PropTypes.string,
	isFrente:				PropTypes.bool
}

export default FlashcardCartao