import React from 'react'
import Container from '../components/Container'
import '../components/general/Theme.css'
import "./Dashboard.css"
import ButtonDashboard from '../components/ButtonDashboard'
import StatsDashboard from '../components/StatsDashboard'

const Dashboard = () => {
  return (
    <Container className="wrapperResponsivo" width="80vw" height="90vh" flexDirection="row" justifyContent="space-between">
      
      <Container width="38vw" height="60vh">
        <h3> Atividades </h3>
        <div className="col-atividades">
          <ButtonDashboard link="../exercicios" titulo="Exercicios" descricao="Preencher lacunas" icone="exercicios"/>
          <ButtonDashboard link="../flashcards" titulo="Flash Cards" descricao="Cartões de memória" icone="flashcards"/>
          <ButtonDashboard link="../quizzes" titulo="Quizzes" descricao="Questionários" icone="quizzes"/>
        </div>
      </Container>
      
      <Container width="38vw" height="60vh">
        <h3> Progresso </h3>
        <div className="col-dashboard">
          <StatsDashboard titulo="Exercicios Concluidos" valor="100%"/>
          <StatsDashboard titulo="Quizzes Concluidos" valor="56%"/>
          <StatsDashboard titulo="Total de Flash Cards" valor="8"/>
          <StatsDashboard titulo="Linguagem Favorita" valor="CSS"/>
        </div>
      </Container>
      

    </Container>
  )
}

export default Dashboard