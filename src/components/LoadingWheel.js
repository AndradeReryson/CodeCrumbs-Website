import React, { useEffect, useState } from 'react'
import './LoadingWheel.css'
import Gif from '../assets/Loading.gif'
import PropTypes from 'prop-types'

/**
 * 
 * @param {useState} isLoadingVisivel é o valor de um useState que deve ser passado aqui, para controlar o elemento de carregamento
 * @returns 
 */
const LoadingWheel = ({isLoadingVisivel}) => {
	// const [isLoadingVisivel, setIsLoadingVisivel] = useState(false);
	
	useEffect(() => {
		let body = document.querySelector('body');
		let overlayLoading = document.querySelector('.LoadingWheelOverlay')

		if(isLoadingVisivel){
			overlayLoading.classList.remove('loading-hide')
			body.classList.add('loading-stop-scroll')
		}

		if(!isLoadingVisivel){
			overlayLoading.classList.add('loading-hide')
			body.classList.remove('loading-stop-scroll')
		}

	}, [isLoadingVisivel])

  return (
			<div className='LoadingWheelOverlay loading-hide'>
				<div className='LoadingWheelWrapper'>
					<img id="ImgLoadingWheel" src={Gif} alt="Gif de uma roda feita de palitos, onde cada palito tem uma tonalidade diferente, essa roda gira para parecer um simbolo de carregando"/>
					<h4> Carregando </h4>	
				</div>
			</div>
			
  )
}

LoadingWheel.propTypes = {
	isLoadingVisivel: 	PropTypes.bool.isRequired
}

export default LoadingWheel