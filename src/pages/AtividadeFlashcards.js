import React from 'react'
import '../components/general/Theme.css'
import '../components/general/ContrastTheme.css'
import './ContainerBanner.css'
import './AtividadeFlashcards.css'
import Container from '../components/Container'
import Icon_flashcard from '../assets/icon_atv_flashcards.svg'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import FlashcardCartao from '../components/FlashcardCartao'

const AtividadeFlashcards = () => {
  return (
    <div className='atividadeFlashcard'>
			<Container className="containerConteudoAtividadeFlashcard" width="80vw" height="90vh" flexDirection="column" justifyContent="start" padding="5vh 0 0 0">

				{/* LINHA BANNER - TITULO DO BARALHO - BOTOES */}
        <Container width="80vw" height="20vh" flexDirection="column" alignItems="center"> 
          <Container width="80vw" height="10vh" flexDirection="row" alignItems="center">
            <div className='listaBanner'>
              <img className="imgIcone" src={Icon_flashcard} alt="..."/>
              <h4> Alinhamento de texto e elementos no flex box </h4>
            </div>
          </Container>

          <Container width="80vw" height="10vh" flexDirection="row" alignItems="center" justifyContent="center">
            <div className='listaBannerBotoesAtvFlashcard'>
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
        <Container className="divCartaoAtividadeFlashcard" width="80vw" height="50vh" flexDirection="column" alignItems="center" justifyContent="center">
					<FlashcardCartao textoFrente="Alinha os elementos no eixo vertical da flex box" textoVerso="align-items" isFrente={true} />
				</Container>

				{/* BOTOES DO CARTAO */}
				<Container width="80vw" height="10vh" flexDirection="row" alignItems="center" justifyContent="center">
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