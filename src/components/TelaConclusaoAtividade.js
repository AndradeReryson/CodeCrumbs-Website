import React, { useEffect } from 'react'
import './TelaConclusaoAtividade.css'
import Button from './Button'

const TelaConclusaoAtividade = ({isConclusaoVisivel, textoConclusao}) => {

	useEffect(() => {
		let body = document.querySelector('body');
		let telaConclusao = document.querySelector('.telaConclusaoAtividade');

		if(isConclusaoVisivel){
			telaConclusao.classList.remove('conclusao-hide')
			body.classList.add('conclusao-stop-scroll')
		}
	
		if(!isConclusaoVisivel){
			telaConclusao.classList.add('conclusao-hide')
			body.classList.remove('conclusao-stop-scroll')
		}
	}, [isConclusaoVisivel])

	useEffect(() => {
		console.log("index of break"+textoConclusao.indexOf('\n'))
	}, [textoConclusao])
	useEffect(() => {
		let btnContinuar = document.querySelector('#btnConclusaoContinuar')
		btnContinuar.addEventListener('click', (e) => {
			window.location.href = '/home/quizzes'
		});
	}, [])

	

  return (
	
    <div className='telaConclusaoAtividade conclusao-hide'>
      <span className="telaConclusaoTitulo">Atividade Concluida</span>
      <span id="telaTextoConclusao">{textoConclusao}</span>
			<Button id="btnConclusaoContinuar" cor="branco" texto="Continuar" />
    </div>
  )
}

export default TelaConclusaoAtividade