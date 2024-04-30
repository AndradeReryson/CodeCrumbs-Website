import React from 'react'
import './general/Theme.css'
import './CardExercicio.css'

const CardExercicio = ({numero}) => {
  return (
    <div className='cardExercicio'>
        <div className='cardImg'>
            <h3>{"{...}"}</h3>
        </div>

        <div className='cardNumero'>
            <h6>{numero}</h6>
        </div>
    </div>
  )
}

export default CardExercicio