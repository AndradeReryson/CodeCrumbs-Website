import React from 'react'
import Icon_exercicio from '../assets/icon_atv_exercicio.svg'
import Container from '../components/Container'
import '../components/general/Theme.css'
import '../components/general/ContrastTheme.css'
import './ContainerBanner.css'
import './ListaExercicios.css'
import ButtonFiltro from '../components/ButtonFiltro'
import Button from '../components/Button'
import CardExercicio from '../components/CardExercicio'
import { Link } from 'react-router-dom'

const ListaExercicios = () => {

  const gerarCards = () => {
    let lista_cards = []

    for(let i = 0; i<10; i++){
      lista_cards.push(<CardExercicio numero={i < 9 ? "#000"+(i+1) : "#00"+(i+1)} exercicio={i+1}/>)
    }

    return lista_cards;
  }

  return (
    <div className='listaExercicios'>
      <Container width="80vw" height="85vh" flexDirection="column" justifyContent="start" padding="5vh 0 0 0">

        {/* LINHA BANNER - TITULO - DESC */}
        <Container width="80vw" height="10vh" flexDirection="row" alignItems="center"> 
          <div className='listaBanner'>
            <img className="imgIcone" src={Icon_exercicio} alt="..."/>
            <h3> Exercicios </h3>
            <h6> Preencha as lacunas e aprimore seus conhecimentos </h6>
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
              <Link className="link" to="./novo"><Button cor="verde" texto="Criar Novo Exercicio"/></Link>
            </div>
          </Container>
          
        </Container>

        {/* LINHA CARD DOS EXERCICIOS */}
        <Container width="80vw" height="55vh" flexDirection="column" alignItems="center" justifyContent="center">
          <div className='listaCardExercicio'>
            {gerarCards()}
          </div>
        </Container>

        {/* LINHA PAGINACAO */}
        <Container width="80vw" height="10vh" flexDirection="row" alignItems="center" justifyContent="space-between">
          <div className="totalResultados">
            <h6> 10 de 100 </h6>
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