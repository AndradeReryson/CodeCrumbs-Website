import React from 'react'
import './general/Theme.css'

const TabSpace = ({numEspacos}) => {
  const inserirEspacos = (numEspacos) => {
    let string_espacos = "";

    for(let i = 0; i < numEspacos; i++){
      string_espacos += "_"
    }

    return string_espacos;
  }

  return (
    <span 
      className="tabSpace" 
      style={{color: 'transparent', userSelect: 'none'}}
    >
      {inserirEspacos(numEspacos)}    
    </span>
  )
}

export default TabSpace