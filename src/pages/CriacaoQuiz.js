import React from 'react'
import '../components/general/Theme.css'
import './CriacaoQuiz.css'
import Icon_quiz from '../assets/icon_atv_quiz.svg'
import Button from '../components/Button'
import ButtonVoltar from '../components/ButtonVoltar'
import Container from '../components/Container'
import CardCriacaoPergunta from '../components/CardCriacaoPergunta'

const CriacaoQuiz = () => {
  return (
    <Container width="80vw" height="140dvh" flexDirection="column" justifyContent="start" padding="5dvh 0 0 0">
        
        {/* LINHA BANNER - BOTAO VOLTAR - TEXTO NOVO EXERCICIO */}
        <Container width="80vw" height="10dvh" flexDirection="row" alignItems="center">
            <div className='listaBanner'>
            <ButtonVoltar />
            <img src={Icon_quiz} alt="..."></img>
            <h3> Novo Quiz </h3>
            </div>
        </Container>

        {/* LINHA TITULO + LINGUAGEM */}
        <Container width="80vw" height="10dvh" flexDirection="row" alignItems="center" gap="4rem">
            <Container width="60vw" height="5dvh" flexDirection="row" alignItems="center" justifyContent="start" gap="1rem">
            <label className='font_h5' htmlFor='input_quiz_titulo'>Titulo</label>
            <input className='font_h6 fillSpace' id='input_quiz_titulo' />
            </Container>

            <Container width="20vw" height="5dvh" flexDirection="row" alignItems="center" justifyContent="start" gap="1rem">
            <label className='font_h5' htmlFor='select_linguagem'>Linguagem</label>
            <select className='font_h6 fillSpace' id="select_linguagem">
                <option value="CSS" selected>CSS</option>
                <option value="SQL">SQL</option>
            </select>
            </Container>
        </Container>

        {/* LINHA ORIENTAÇÃO */}
        <Container width="80vw" height="10dvh" flexDirection="row" alignItems="center" justifyContent="space-between" gap="4rem">
            <h4>Perguntas</h4>
            <h6>Clique na letra da alternativa para definir qual resposta é a correta</h6>
        </Container>

        {/* WRAPPER CARDS DE CRIACAO */}
        <Container width="80vw" height="95dvh" flexDirection="column" alignItems="center" justifyContent="start" margin="1rem 0">
            <div className='listaCardCriacaoPergunta'>
                <CardCriacaoPergunta numero="1" />
                <CardCriacaoPergunta numero="2" />
                <CardCriacaoPergunta numero="3" />
            </div>
        </Container>

        {/* BOTOES RELACIONADOS A CRIACAO DE CARDS - SALVAR BARALHO */}
        <Container width="80vw" height="15dvh" flexDirection="row" alignItems="center" justifyContent="space-between">
            <Button cor="branco" texto="Adicionar Cartão" />
            <Button cor="verde" texto="Salvar novo quiz" />
        </Container>

    </Container>
  )
}

export default CriacaoQuiz