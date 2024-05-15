import React from 'react'
import Header from '../components/Header';
import Container from '../components/Container';
import FormCadastro from '../components/FormCadastro';
import FormLogin from '../components/FormLogin';
import IconeGrande from '../components/IconeGrande';
import Footer from '../components/Footer';

const Lander = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Header />
      <Container className="wrapperResponsivo forceJustifyStart" width="60vw" height="100vh" flexDirection="column" alignItems="center" justifyContent="center">
        
        {/* Linha com os dois formulários */}
        <Container className="responsivoColumn forceJustifyBetween" width="60vw" height="40vh" padding="0 5vw 0 5vw" margin="5vh 0 10vh 0" flexDirection="row" alignItems="start" justifyContent="space-between">
          <FormLogin />
          <FormCadastro />
        </Container>

        {/* Linha com os icones */}
        <Container className="responsivoHide" width="60vw" height="30vh" padding="0 5vw 0 5vw" flexDirection="row" alignItems="start" justifyContent="space-between">
          <div style={{width:"18vw", textAlign: 'center'}}>
            <IconeGrande nomeIcone="question"/>
            <h6 style={{fontSize:"14px"}}>Começou a estudar programação e tem dificuldade para lembrar conceitos ou a sintaxe?</h6>
          </div>

          <div style={{width:"18vw", textAlign: 'center'}}>
            <IconeGrande nomeIcone="coding"/>
            <h6 style={{fontSize:"14px"}}>Com nossa plataforma, você estuda se divertindo! oferecemos exercicios e quizzes para reforçar seus conhecimentos</h6>
          </div>

          <div style={{width:"18vw", textAlign: 'center'}}>
            <IconeGrande nomeIcone="smartphone"/>
            <h6 style={{fontSize:"14px"}}>Tem pouco tempo livre? Tá na mão! Utilize nosso aplicativo para estudar em qualquer lugar e por quanto tempo quiser</h6>
          </div>
        </Container>
      </Container>
    </div>
  )
}

export default Lander