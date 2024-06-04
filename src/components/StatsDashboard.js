import React from 'react'
import './general/Theme.css'
import './StatsDashboard.css'

const StatsDashboard = ({idValor, titulo, valor}) => {
  return (
    <div className='statsDashboard'>
        <div className='statsTitulo'>
            <h5>{titulo}</h5>
        </div>
        
        <div className='statsValor'>
            <h5 id={idValor}>{valor}</h5>
        </div>
    </div>
  )
}

export default StatsDashboard