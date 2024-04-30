import React from 'react'
import Container from '../components/Container'
import '../components/general/Theme.css'
import "./Dashboard.css"
import ButtonDashboard from '../components/ButtonDashboard'
import StatsDashboard from '../components/StatsDashboard'

const Dashboard = () => {
  return (
    <Container width="80vw" height="90dvh" flexDirection="row" justifyContent="space-between">
      
      <Container width="38vw" height="60dvh">
        <h3> Atividades </h3>
        <div className="col-atividades">
          <ButtonDashboard titulo="Exercicios" descricao="Preencha as lacunas" icone="exercicios"/>
          <ButtonDashboard titulo="Flash Cards" descricao="Crie e leia cartões" icone="flashcards"/>
          <ButtonDashboard titulo="Quizzes" descricao="Responda questionários" icone="quizzes"/>
        </div>
      </Container>
      
      <Container width="38vw" height="60dvh">
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