import Navbar from '../components/Navbar'
import Container from '../components/Container'
import Footer from '../components/Footer'
import { Navigate, Outlet } from 'react-router-dom'
import '../components/general/Theme.css'
import '../components/general/ContrastTheme.css'
import './Home.css'
import secureLocalStorage from 'react-secure-storage'

/**
 * Aplica o navbar em todas as telas, além de fazer a autenticação do usuário nas rotas, através da verificação de credenciais do localStorage 
 * @returns 
 */
const Home = () => {

  const localStorageUsername = secureLocalStorage.getItem('username');
	const localStoragePassword = secureLocalStorage.getItem('password');

	if(localStorageUsername && localStoragePassword){
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

	return <Navigate to="/"  replace />
  
}

export default Home