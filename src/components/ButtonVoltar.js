import React from 'react'
import './ButtonVoltar.css'
import './general/Theme.css'
import { useNavigate } from 'react-router-dom'

const ButtonVoltar = () => {
  const navigate = useNavigate();

	const voltarPagina = () => {
		navigate(-1)
	}

  return (
    <div className='buttonVoltar' onClick={voltarPagina}>
        <h4>&larr;</h4>
        <h6>Voltar</h6>
    </div>
  )
}

export default ButtonVoltar