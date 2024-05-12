import React from 'react'
import '../components/general/Theme.css'
import './AtividadeFlashcards.css'
import Container from '../components/Container'
import Icon_flashcard from '../assets/icon_atv_flashcards.svg'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import FlashcardCartao from '../components/FlashcardCartao'

const AtividadeFlashcards = () => {
  return (
    <div className='atividadeFlashcard'>
			<Container width="80vw" height="85vh" flexDirection="column" justifyContent="start" padding="5dvh 0 0 0">

				{/* LINHA BANNER - TITULO DO BARALHO - BOTOES */}
        <Container width="80vw" height="10dvh" flexDirection="row" alignItems="center"> 
          <Container width="50vw" height="10dvh" flexDirection="row" alignItems="center">
            <div className='listaBanner'>
              <img src={Icon_flashcard} alt="..."></img>
              <h4> Alinhamento de texto e elementos no flex box </h4>
            </div>
          </Container>

          <Container width="30vw" height="10dvh" flexDirection="row" alignItems="center" justifyContent="center">
            <div className='listaBannerBotoes'>
							<Link className='link'>
                <Button cor="branco" texto="editar"/>
              </Link>
              <Link className='link' to="/home/flashcards">
                <Button cor="azul" texto="Todos os Flashcards"/>
              </Link>
            </div>
          </Container>
        </Container>

				{/* WRAPPER DO FLASHCARD */}
        <Container width="80vw" height="60dvh" flexDirection="column" alignItems="center" justifyContent="center">
					<FlashcardCartao textoFrente="Alinha os elementos no eixo vertical da flex box" textoVerso="align-items" isFrente={true} />
				</Container>

				{/* BOTOES DO CARTAO */}
				<Container width="80vw" height="10dvh" flexDirection="row" alignItems="center" justifyContent="center">
					<div className='cartaoBotoes'>
						<div className='cartaoBtnWrapper'>
							<Button cor="rosa" texto="Errei"/>
							<h6 className='btnLegenda'>Repetir Card</h6>
						</div>
						
						<div className='cartaoBtnWrapper'>
							<Button cor="branco" texto="Girar Cartão"/>
						</div>
						
						<div className='cartaoBtnWrapper'>
							<Button cor="azul" texto="Acertei"/>
							<h6 className='btnLegenda'>Reduzir Card</h6>
						</div>
						
					</div>
				</Container>
			</Container>
    </div>
  )
}

export default AtividadeFlashcards