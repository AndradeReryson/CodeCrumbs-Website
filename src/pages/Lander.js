import React, { useState } from 'react'
import Header from '../components/Header';
import Container from '../components/Container';
import FormCadastro from '../components/FormCadastro';
import FormLogin from '../components/FormLogin';
import IconeGrande from '../components/IconeGrande';
import LoadingWheel from '../components/LoadingWheel';
import ToastAlerta from '../components/ToastAlerta';
import './Lander.css'
import '../components/general/ContrastTheme.css'
import '../components/general/Theme.css'

const Lander = () => {
  // Controle de estado do elemento <LoadingWheel />
  const [isLoadingVisivel, setIsLoadingVisivel] = useState(false);

  // Controle da notificação, quando for chamada
  const [toastTexto, setToastTexto] = useState(null);
  const [toastTipo, setToastTipo] = useState(null);

  /** 
   * As funções set desses useStates vão ser passados para os componentes <FormLogin /> e <FormCadastro />.
   * 
   * Eles também são passados para os componentes que usam eles diretamente para alterá-los, <ToastAlerta /> e <LoadingWheel />
   * Ambos os componentes precisam ser chamados pelos formulários, por isso, passamos as funções Set para eles e mantemos esses useState nesse componente pai.
   */

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <ToastAlerta toastTexto={toastTexto} toastTipo={toastTipo} toastTextSetter={setToastTexto} toastTipoSetter={setToastTipo}/>
      <LoadingWheel isLoadingVisivel={isLoadingVisivel}/>
      <Header />
      <Container className="conteudoLander" width="60vw" height="100vh" flexDirection="column" alignItems="center" justifyContent="center">
        
        {/* Linha com os dois formulários */}
        <Container className="divFormulariosCadastroLogin" width="60vw" height="40vh" padding="0 5vw 0 5vw" margin="5vh 0 10vh 0" flexDirection="row" alignItems="start" justifyContent="space-between">
          <FormLogin setIsLoadingVisivel={setIsLoadingVisivel} toastSetters={[setToastTexto, setToastTipo]}/>
          <FormCadastro setIsLoadingVisivel={setIsLoadingVisivel} toastSetters={[setToastTexto, setToastTipo]}/>
        </Container>

        {/* Linha com os icones */}
        <Container className="divInformativoSistema" width="60vw" height="30vh" padding="0 5vw 0 5vw" flexDirection="row" alignItems="start" justifyContent="space-between">
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