import React from 'react'
import IconeCoding from '../assets/icon_inicial_coding.svg'
import IconeQuestion from '../assets/icon_inicial_questions.svg'
import IconeSmartphone from '../assets/icon_inicial_smartphone.svg'
import PropTypes from 'prop-types';
import './IconeGrande.css'

const IconeGrande = ({nomeIcone}) => {

	const getIconSVGByName = (nomeIcone) => {
		let lowerNomeIcone = nomeIcone.toLowerCase();
		switch(lowerNomeIcone){
			case 'coding':
				return IconeCoding
			case 'question':
				return IconeQuestion
			case 'smartphone':
				return IconeSmartphone
			default:
				return IconeCoding
		}
	}

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
		<img className="iconeGrande" src={getIconSVGByName(nomeIcone)}/>
    </div>
  )
}

IconeGrande.propTypes = {
	NomeIcone: PropTypes.string
}

export default IconeGrande