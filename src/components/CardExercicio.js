import React from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import './general/Theme.css'
import './CardExercicio.css'

const CardExercicio = ({className, numero, exercicio}) => {
  let location = useLocation().pathname;
  const navigate = useNavigate();

  const abrirExercicio = () => {
    navigate(location+"/"+exercicio)
  }

  return (
    <div className='cardExercicio' onClick={abrirExercicio}>
        <div className='cardImg'>
            <h3>{"{...}"}</h3>
        </div>

        <div className='cardNumero'>
            <Link className="link font_h6" to={{pathname: location+"/"+exercicio}}>{numero}</Link>
        </div>
    </div>
  )
}

export default CardExercicio