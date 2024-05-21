import React from 'react'
import './Formularios.css'
import './general/Theme.css'

import Container from './Container'
import Button from './Button'
import { Link } from 'react-router-dom'

/**
 * Formulário de Cadastro.
 */
const FormCadastro = () => {
  return (
    <Container height="auto" width="auto" flexDirection="column" justifyContent="center" alignItems="center">
      <h5 style={{marginBottom: '1rem'}}> Vamos Começar </h5>
      <form className='form_cadastro' onSubmit={(e) => {e.preventDefault()}}>
          <label className="font_h6" htmlFor="cadastro_input_apelido">Apelido</label>
          <input className="font_h6" id="cadastro_input_apelido" type="text" required></input>

          <label className="font_h6" htmlFor="cadastro_input_email">Email</label>
          <input className="font_h6" id="cadastro_input_email" type="email" required></input>

          <label className="font_h6" htmlFor="cadastro_input_senha">Senha</label>
          <input className="font_h6" id="cadastro_input_senha" type="password" required></input>

          <label className="conf_senha" htmlFor="cadastro_input_conf_senha">Confirmar Senha</label>
          <input className="font_h6" id="cadastro_input_conf_senha" type="password" required></input>

          <div className="useTwoColumns" style={{gridColumn: '1/3'}}>
            <Link className='link' to="/home/dashboard"> <Button style={{padding: '0'}} cor="azul" texto='Cadastrar'/> </Link>
          </div>
      </form>
    </Container>
    
  )
}

export default FormCadastro