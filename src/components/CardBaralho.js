import React from 'react'
import './general/Theme.css'
import './CardBaralho.css'

const CardBaralho = ({titulo}) => {
  return (
    <div className='cardBaralho'>
        <span className="marcacaoColorida"></span>
        <h6 className='tituloBaralho'>{titulo}</h6>
        <div className='infoBaralho'>
            <h6 className='infoLinguagem'>CSS</h6>
            <h6 className='infoCartoes'>14 Cartões</h6>
        </div>
    </div>
  )
}

export default CardBaralho