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

	const getAltText = (nomeIcone) => {
		let lowerNomeIcone = nomeIcone.toLowerCase();
		switch(lowerNomeIcone){
			case 'coding':
				return "Icone grande formado por duas chaves matématicas e entre elas três pontos, tudo na cor azul e com fundo transparente"
			case 'question':
				return "Icone grande formado por três pontos de interrogação, um ao lado do outro sendo o central maior"
			case 'smartphone':
				return "Icone grande formado por um desenho de um smartphone, com sua tela transparente"
			default:
				return IconeCoding
		}
	}

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
		<img className="imgIcone iconeGrande" alt={getAltText(nomeIcone)} src={getIconSVGByName(nomeIcone)}/>
    </div>
  )
}

IconeGrande.propTypes = {
	NomeIcone: PropTypes.string
}

export default IconeGrande