import React from 'react'
import secureLocalStorage from 'react-secure-storage'
import { Navigate } from 'react-router-dom'

const Sair = () => {

  secureLocalStorage.setItem('dados', null);
  secureLocalStorage.setItem('id', null);
  secureLocalStorage.setItem('apelido', null)
  secureLocalStorage.setItem('username', null);
	secureLocalStorage.setItem('password', null);
  

  return <Navigate to="/"  replace />
}

export default Sair