import React from 'react'
import './general/Theme.css'
import './CardCriacaoFlashcard.css'

const CardCriacaoFlashcard = ({numero}) => {

  
  return (
    <div className='CardCriacaoFlashcard'>
      <h4>{numero}</h4>
      <div className='inserirTermo'>
        <label className='font_h5' htmlFor={'input_termo_'+numero}>Frente / Termo</label>
        <input className='font_h6' id={'input_termo_'+numero} type='text' />
      </div>

      <div className='inserirDefinicao'>
        <label className='font_h5' htmlFor={'input_definicao_'+numero}>Verso / Definição</label>
        <input className='font_h6' id={'input_definicao_'+numero} type='text' />
      </div>
    </div>
  )
}

export default CardCriacaoFlashcard