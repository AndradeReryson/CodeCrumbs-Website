import Logo from '../assets/logo_CodeCrumbs.svg'
import './general/Theme.css'
import './Header.css'
import ButtonCorTema from './ButtonCorTema.js'


const Header = props => {
  
  return (
    <div className="header">
        <img src={Logo} className="logo" alt="Logo da plataforma CodeCrumbs, onde as letras são Azuis, fundo transparente e um par de chaves (Simbolo matemático) de cor amarelo pêra se localiza entre as palavras 'Code' e 'Crumbs'"/>
        <ButtonCorTema />
    </div>
  )
}

Header.propTypes = {}

export default Header