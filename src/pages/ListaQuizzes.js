import React from 'react'
import Icon_quiz from '../assets/icon_atv_quiz.svg'
import Container from '../components/Container'
import '../components/general/Theme.css'
import './ListaQuizzes.css'
import ButtonFiltro from '../components/ButtonFiltro'
import Button from '../components/Button'
import CardQuiz from '../components/CardQuiz'

const ListaQuizzes = () => {

  const gerarCards = () => {
    let lista_cards = []

    for(let i = 0; i<16; i++){
      lista_cards.push(
        <CardQuiz className="link" 
          
          quiz={i+1}
          numero={(i+1) < 10 ? "#000"+(i+1) : "#00"+(i+1)}
          titulo="PLACEHOLDER Alinhamento de texto e elementos flexbox" 
          concluido={i < 4 ? true : false}
          nota={i < 4 ? Math.floor((i+1)*10)+"%" : "--"}
        />
      )
    }

    return lista_cards;
  }

  return (
    <div className='listaQuizzes'>
      <Container width="80vw" height="25dvh" flexDirection="column" justifyContent="start" padding="5dvh 0 0 0">

        {/* LINHA BANNER - TITULO - DESC */}
        <Container width="80vw" height="10dvh" flexDirection="row" alignItems="center"> 
          <div className='listaBanner'>
            <img src={Icon_quiz} alt="..."></img>
            <h3> Quizzes </h3>
            <h6> Teste seu conhecimento e prepare-se para provas </h6>
          </div>
        </Container>

        {/* LINHA FILTRO - BTN_BUSCAR */}
        <Container width="80vw" height="7dvh" flexDirection="row" alignItems="center" flexWrap="wrap"> 
          <Container width="40vw" height="7dvh" flexDirection="row" alignItems="center">
            <div className='listaFiltro'>
              <ButtonFiltro className="active" texto="CSS" />
              <ButtonFiltro texto="SQL" />
            </div>
          </Container>

          <Container width="40vw" height="7dvh" flexDirection="row" alignItems="center" justifyContent="end">
              <label htmlFor='txt_pesquisa' className='font_h5'> Pesquisar </label>
              <input id='txt_pesquisa' type='text' className='font_h6'></input>
              <Button cor="amarelo" texto="Buscar"/>
          </Container> 
        </Container>

        {/* LINHA FILTRO MEUS QUIZZES - BTN_CRIAR_QUIZ */}
        <Container width="80vw" height="7dvh" flexDirection="row" alignItems="center" flexWrap="wrap"> 
          <Container width="40vw" height="7dvh" flexDirection="row" alignItems="center">
            <div className='listaFiltro'>
              <ButtonFiltro className="active" texto="Todos os Quizzes" />
              <ButtonFiltro texto="Meus Quizzes" />
            </div>
          </Container>

          <Container width="40vw" height="7dvh" flexDirection="row" alignItems="center" justifyContent="end">
            <div className='listaBotoesCrud'>
              <Button cor="verde" texto="Criar Novo Quiz"/>
            </div>
          </Container> 
        </Container>   
      </Container>

      
      {/* LINHA LISTA DE QUIZZES */}
      <Container width="80vw" height="102dvh" flexDirection="row" alignItems="center" justifyContent="center" margin="1rem 0">
        <div className='listaCardQuizzes'>
          <div className='listaHeader'>
            <h6 style={{textAlign: 'center'}}>#</h6>
            <h6></h6>
            <h6>Nome</h6>
            <h6 style={{textAlign: 'center'}}>Nota</h6>
          </div>
          {gerarCards()}
        </div>
      </Container>

      {/* LINHA PAGINACAO */}
      <Container width="80vw" height="10dvh" flexDirection="row" alignItems="center" justifyContent="space-between" margin="0 0 2rem 0">
          <div className="totalResultados">
            <h6> 16 de 160 </h6>
          </div>

          <div className="paginacaoResultado">
            <Button cor="branco" texto="Primeiro"/>
            <h6> 1 2 3 4 5 ... 10 </h6>
            <Button cor="branco" texto="Ultimo" />
          </div>
        </Container>
    </div>
  )
}

export default ListaQuizzes