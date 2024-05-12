import React from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import './general/Theme.css'
import './CardBaralho.css'

const CardBaralho = ({titulo, baralho}) => {
  let location = useLocation().pathname;
  const navigate = useNavigate();

  const abrirBaralho = () => {
    navigate(location+"/"+baralho)
  }

  return (
    <div className='cardBaralho' onClick={abrirBaralho}>
        <span className="marcacaoColorida"></span>
        <Link className='link font_h6 tituloBaralho' to={{pathname: location+"/"+baralho}}>{titulo}</Link>
        <div className='infoBaralho'>
            <h6 className='infoLinguagem'>CSS</h6>
            <h6 className='infoCartoes'>14 Cartões</h6>
        </div>
    </div>
  )
}

export default CardBaralho