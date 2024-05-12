import React from 'react'
import "../components/general/Theme.css"
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Icon_duvida from '../assets/icon_inicial_questions.svg'

const ErrorPage = () => {
  return (
    <Container height="100dvh" width="100vw" flexDirection="column" alignItems="center" justifyContent="start">
      <Container height="10dvh" width="80vw" flexDirection="column" alignItems="start" justifyContent="flexstart">
        <Navbar />
      </Container>

      <Container height="90dvh" width="80vw" flexDirection="column" alignItems="center" justifyContent="center">
        
          <img src={Icon_duvida} alt="Imagem contendo 3 pontos de interrogação azuis" style={{height: "20dvh", padding: "1rem"}} />
          <h2> Essa Página Não Existe... =/ </h2>
        
      </Container>
      
    </Container>
  )
}

export default ErrorPage