import React from 'react'
import '../components/general/Theme.css'
import './CriacaoFlashcard.css'
import Icon_flashcard from '../assets/icon_atv_flashcards.svg'
import Button from '../components/Button'
import ButtonVoltar from '../components/ButtonVoltar'
import Container from '../components/Container'
import CardCriacaoFlashcard from '../components/CardCriacaoFlashcard'

const CriacaoFlashcard = () => {
  return (
    <Container width="80vw" height="130dvh" flexDirection="column" justifyContent="start" padding="5dvh 0 0 0">

      {/* LINHA BANNER - BOTAO VOLTAR - TEXTO NOVO EXERCICIO */}
      <Container width="80vw" height="10dvh" flexDirection="row" alignItems="center">
        <div className='listaBanner'>
          <ButtonVoltar />
          <img src={Icon_flashcard} alt="..."></img>
          <h3> Novo Baralho de Flashcards </h3>
        </div>
      </Container>

      {/* LINHA TITULO + LINGUAGEM + COR*/}
      <Container width="80vw" height="10dvh" flexDirection="row" alignItems="center" gap="4rem">
        <Container width="50vw" height="5dvh" flexDirection="row" alignItems="center" justifyContent="start" gap="1rem">
          <label className='font_h5' htmlFor='input_titulo'>Titulo</label>
          <input className='font_h6 fillSpace' id='input_titulo' />
        </Container>

        <Container width="20vw" height="5dvh" flexDirection="row" alignItems="center" justifyContent="start" gap="1rem">
          <label className='font_h5' htmlFor='select_linguagem'>Linguagem</label>
          <select className='font_h6 fillSpace' id="select_linguagem">
            <option value="CSS" selected>CSS</option>
            <option value="SQL">SQL</option>
          </select>
        </Container>

        <Container width="10vw" height="5dvh" flexDirection="row" alignItems="center" justifyContent="start" gap="1rem">
          <label className='font_h5' htmlFor='input_cor'>Cor</label>
          <input className='font_h6 fillSpace' id="input_cor" type='color'/>
          
        </Container>
      </Container>

      {/* LINHA BOTAO IMPORTAR VIA TEXTO */}
      <Container width="80vw" height="10dvh" flexDirection="row" alignItems="center" justifyContent="end" gap="4rem">
        <Button cor="branco" texto="Importar via texto"/>
      </Container>

      {/* WRAPPER CARDS DE CRIACAO */}
      <Container width="80vw" height="85dvh" flexDirection="column" alignItems="center" justifyContent="start" margin="1rem 0">
        <Container width="80vw" height="10dvh" flexDirection="column" alignItems="center" justifyContent="center">
          <h4>Cartões</h4> 
        </Container>

        <div className='listaCardCriacaoFlashcard'>
          <CardCriacaoFlashcard numero="1" />
          <CardCriacaoFlashcard numero="2" />
          <CardCriacaoFlashcard numero="3" />
          <CardCriacaoFlashcard numero="4" />
          <CardCriacaoFlashcard numero="5" />
        </div>
      </Container>

      {/* BOTOES RELACIONADOS A CRIACAO DE CARDS - SALVAR BARALHO */}
      <Container width="80vw" height="15dvh" flexDirection="row" alignItems="center" justifyContent="space-between">
        <Button cor="branco" texto="Adicionar Cartão" />
        <Button cor="verde" texto="Salvar novo baralho" />
      </Container>

    </Container>
  )
}

export default CriacaoFlashcard