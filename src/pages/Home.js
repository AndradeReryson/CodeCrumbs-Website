import Navbar from '../components/Navbar'
import Container from '../components/Container'
import Footer from '../components/Footer'
import { Navigate, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../components/general/Theme.css'
import '../components/general/ContrastTheme.css'
import './Home.css'

const Home = () => {
  useEffect(() => {
  }, [])

  return (
    /* CONTAINER PAI, segura o nav e o conteudo */
    <Container className="containerMestre" style={{minHeight: '100vh'}} width="100vw" height="auto" flexDirection="column" alignItems="center">
      
      {/* NAVBAR */}
      <Container className="containerHomeNavbar" width="80vw" height="10vh">
        <Navbar />
      </Container>

      {/* CONTEUDO SENDO INJETADO AQUI EM BAIXO*/}
      <Outlet />

      <Footer />
    </Container>
    
  )
}

export default Home