import React from 'react'
import Icon_exercicio from '../assets/icon_atv_exercicio.svg'
import Container from '../components/Container'
import '../components/general/Theme.css'
import './ContainerBanner.css'
import './ListaExercicios.css'
import ButtonFiltro from '../components/ButtonFiltro'
import Button from '../components/Button'
import CardExercicio from '../components/CardExercicio'
import { Link } from 'react-router-dom'

const ListaExercicios = () => {

  const gerarCards = () => {
    let lista_cards = []

    for(let i = 0; i<16; i++){
      lista_cards.push(<CardExercicio numero={i < 10 ? "#000"+(i+1) : "#00"+(i+1)} exercicio={i+1}/>)
    }

    return lista_cards;
  }

  return (
    <div className='listaExercicios'>
      <Container width="80vw" height="85dvh" flexDirection="column" justifyContent="start" padding="5dvh 0 0 0">

        {/* LINHA BANNER - TITULO - DESC */}
        <Container width="80vw" height="10dvh" flexDirection="row" alignItems="center"> 
          <div className='listaBanner'>
            <img src={Icon_exercicio} alt="..."></img>
            <h3> Exercicios </h3>
            <h6> Preencha as lacunas e aprimore seus conhecimentos </h6>
          </div>
        </Container>

        {/* LINHA FILTRO - BTN_CRIAR_EXERC */}
        <Container width="80vw" height="10dvh" flexDirection="row" alignItems="center"> 
          
          <Container width="40vw" height="10dvh" flexDirection="row" alignItems="center">
            <div className='listaFiltro'>
              <ButtonFiltro className="active" texto="CSS" />
              <ButtonFiltro texto="SQL" />
            </div>
          </Container>

          <Container width="40vw" height="10dvh" flexDirection="row" alignItems="center" justifyContent="end">
            <div className='listaBotoesCrud'>
              <Link className="link" to="./novo"><Button cor="verde" texto="Criar Novo Exercicio"/></Link>
            </div>
          </Container>
          
        </Container>

        {/* LINHA CARD DOS EXERCICIOS */}
        <Container width="80vw" height="55dvh" flexDirection="row" alignItems="center" justifyContent="center">
          <div className='listaCardExercicio'>
            {gerarCards()}
          </div>
        </Container>

        {/* LINHA PAGINACAO */}
        <Container width="80vw" height="10dvh" flexDirection="row" alignItems="center" justifyContent="space-between">
          <div className="totalResultados">
            <h6> 16 de 160 </h6>
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

export default ListaExercicios