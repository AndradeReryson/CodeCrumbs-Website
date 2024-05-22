import React from 'react'
import Icon_flashcard from '../assets/icon_atv_flashcards.svg'
import Container from '../components/Container'
import '../components/general/Theme.css'
import '../components/general/ContrastTheme.css'
import './ContainerBanner.css'
import './ListaFlashCards.css'
import ButtonFiltro from '../components/ButtonFiltro'
import Button from '../components/Button'
import CardBaralho from '../components/CardBaralho'
import { Link } from 'react-router-dom'

const ListaFlashCards = () => {

  const gerarCards = () => {
    let lista_cards = []

    for(let i = 0; i<6; i++){
      lista_cards.push(<CardBaralho titulo="Alinhamento de texto e elementos flexbox" baralho={i+1}/>)
    }

    return lista_cards;
  }

  return (
    <div className='listaFlashCards'>
      <Container width="80vw" height="85vh" flexDirection="column" justifyContent="start" padding="5vh 0 0 0">

        {/* LINHA BANNER - TITULO - DESC */}
        <Container width="80vw" height="10vh" flexDirection="row" alignItems="center"> 
          <div className='listaBanner'>
            <img className="imgIcone" src={Icon_flashcard} alt="..."/>
            <h3> Flash Cards </h3>
            <h6> Crie cartões de memorização para auxiliar nos estudos </h6>
          </div>
        </Container>

        {/* LINHA FILTRO - BTN_CRIAR_EXERC */}
        <Container width="80vw" height="10vh" flexDirection="row" alignItems="center"> 
          
          <Container width="40vw" height="10vh" flexDirection="row" alignItems="center">
            <div className='listaFiltro'>
              <ButtonFiltro className="active" texto="CSS" />
              <ButtonFiltro texto="SQL" />
            </div>
          </Container>

          <Container width="40vw" height="10vh" flexDirection="row" alignItems="center" justifyContent="end">
            <div className='listaBotoesCrud'>
              <Link className="link" to="./novo"><Button cor="verde" texto="Criar Novo Baralho"/></Link>
            </div>
          </Container>
          
        </Container>

        {/* LINHA CARD DOS EXERCICIOS */}
        <Container width="80vw" height="50vh" flexDirection="row" alignItems="center" justifyContent="center">
          <div className='listaCardBaralho'>
            {gerarCards()}
          </div>
        </Container>

        {/* LINHA PAGINACAO */}
        <Container width="80vw" height="10vh" flexDirection="row" alignItems="center" justifyContent="space-between">
          <div className="totalResultados">
            <h6> 6 de 60 </h6>
          </div>

          <div className="paginacaoResultado">
            <Button cor="branco" texto="Primeiro"/>
            <h6> 1 2 3 4 5 ... 10 </h6>
            <Button cor="branco" texto="Ultimo" />
          </div>
        </Container>
      </Container>
    </div>
  )
}

export default ListaFlashCards