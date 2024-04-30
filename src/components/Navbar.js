import Logo from '../assets/logo_CodeCrumbs.svg'
import './general/Theme.css'
import "./Navbar.css"
import ButtonNav from './ButtonNav'
import { useLocation, Link } from 'react-router-dom'

/**
 * Elemento Navbar, contem os links pra maioria das paginas
 */
const Navbar = () => {
  let location = useLocation().pathname;

  const getActive = (botao_texto) => {
    let classe_retorno = "";

    switch(location){
      case "/home/dashboard":
        if(botao_texto === "Dashboard"){
          classe_retorno = "active";
        } 
        break;

      case "/home/exercicios":
        if(botao_texto === "Exercicios"){
          classe_retorno = "active";
        }
        break;
      
      case "/home/flashcards":
        if(botao_texto === "Flash Cards"){
          classe_retorno = "active";
        }
        break;

      case "/home/quizzes":
        if(botao_texto === "Quizzes"){
          classe_retorno = "active";
        }
        break;
      default:
        break;
    }

    return classe_retorno;
  }

  return (
    <nav className='navbar'>

        <div className="col-usuario">
            <div className='foto-perfil'>
                <h5>R</h5>
            </div>
            <h6> RerysonAndrade</h6>
        </div>

        <div className="col-navegacao">
            <Link className="link" to="/home/dashboard">
              <ButtonNav className={getActive("Dashboard")} texto="Dashboard" />
            </Link>

            <Link className="link" to="/home/exercicios">
              <ButtonNav className={getActive("Exercicios")} texto="Exercicios" />
            </Link>

            <Link className="link" to="/home/flashcards">
              <ButtonNav className={getActive("Flash Cards")} texto="Flash Cards" />
            </Link>

            <Link className="link" to="/home/quizzes">
              <ButtonNav className={getActive("Quizzes")} texto="Quizzes" />
            </Link>

            <Link className="link" to="/">
              <ButtonNav texto="Sair" />
            </Link>
        </div>

        <img src={Logo} className="logo" alt="Logo da plataforma CodeCrumbs, onde as letras são Azuis, fundo transparente e um par de chaves (Simbolo matemático) de cor amarelo pêra se localiza entre as palavras 'Code' e 'Crumbs'"/>
        
        
    </nav>
  )
}

export default Navbar