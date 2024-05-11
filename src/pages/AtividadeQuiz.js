import React from 'react'
import '../components/general/Theme.css'
import './AtividadeQuiz.css'
import Container from '../components/Container.js'
import Icon_quiz from '../assets/icon_atv_quiz.svg'
import { Link } from 'react-router-dom'
import Button from '../components/Button.js'
import QuizButtonResposta from '../components/QuizButtonResposta.js'
import QuizNumeroPergunta from '../components/QuizNumeroPergunta.js'

const AtividadeQuiz = () => {
  const gerarNumeros = () => {
    let lista_numeros = [];

    for (let i = 0; i < 5; i++) {
      lista_numeros.push(<QuizNumeroPergunta className={i === 0 ? "respondida" : ""} numero={""+(i+1)} />)
    }

    return lista_numeros;
  }
  return (
    <div className='atividadeQuiz'>
      <Container width="80vw" height="85vh" flexDirection="column" justifyContent="start" padding="5dvh 0 0 0">
        
        {/* LINHA BANNER - TITULO DO QUIZ - BOTOES */}
        <Container width="80vw" height="10dvh" flexDirection="row" alignItems="center"> 
          <Container width="50vw" height="10dvh" flexDirection="row" alignItems="center">
            <div className='listaBanner'>
              <img src={Icon_quiz} alt="..."></img>
              <h4> Alinhamento de textos e elementos flexbox </h4>
            </div>
          </Container>

          <Container width="30vw" height="10dvh" flexDirection="row" alignItems="center" justifyContent="center">
            <div className='listaBannerBotoes'>
              <Link className='link' to="/home/quizzes">
                <Button cor="azul" texto="Todos os Quizzes"/>
              </Link>
            </div>
          </Container>
          
        </Container>

        {/* WRAPPER DAS PERGUNTAS E RESPOSTAS */}
        <Container width="80vw" height="60dvh" flexDirection="column" alignItems="center" justifyContent="center">
          <div className="wrapperPerguntas">
            <div className='linhaPergunta'>
              <h5> No CSS, como selecionamos um elemento pelo seu id? </h5>
            </div>
            <div className='colunaResposta1'>
              <QuizButtonResposta isSelecionado={true} texto="Com o seletor &ldquo;#&rdquo; "/>
            </div>
            <div className='colunaResposta2'>
              <QuizButtonResposta isSelecionado={false} texto="Com o seletor &ldquo;.&rdquo;"/>
            </div>
            <div className='colunaResposta3'>
              <QuizButtonResposta isSelecionado={false} texto="Com o seletor &ldquo;div&rdquo;"/>
            </div>
            <div className='colunaResposta4'>
              <QuizButtonResposta isSelecionado={false} texto="Com o seletor &ldquo;>&rdquo;"/>
            </div>
          </div>
        </Container>

        {/* LINHA NUMERO PERGUNTA - BOTAO PROXIMA PERGUNTA */}
        <Container width="80vw" height="10dvh" flexDirection="row" alignItems="center">

          <Container width="60vw" height="10dvh" flexDirection="row" alignItems="end" justifyContent="start">
            {gerarNumeros()}
          </Container>

          <Container width="20vw" height="10dvh" flexDirection="row" alignItems="end" justifyContent="end">
            <Button cor="branco" texto="Próxima &#10137;"/>
          </Container>
        </Container>
      </Container>
    </div>
  )
}

export default AtividadeQuiz