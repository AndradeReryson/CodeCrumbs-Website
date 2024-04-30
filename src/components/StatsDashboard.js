import React from 'react'
import './general/Theme.css'
import './StatsDashboard.css'

const StatsDashboard = ({titulo, valor}) => {
  return (
    <div className='statsDashboard'>
        <div className='statsTitulo'>
            <h5>{titulo}</h5>
        </div>
        
        <div className='statsValor'>
            <h2>{valor}</h2>
        </div>
    </div>
  )
}

export default StatsDashboard