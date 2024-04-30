import React from 'react'
import './general/Theme.css'
import './Formularios.css'
import Container from './Container'
import Button from './Button'

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

          <label style={{fontSize: '16px', lineHeight: '18px'}} htmlFor="cadastro_input_conf_senha">Confirmar Senha</label>
          <input className="font_h6" id="cadastro_input_conf_senha" type="password" required></input>

          <div className="useTwoColumns" style={{gridColumn: '1/3'}}>
            <Button cor={'azul'} texto='Fazer Cadastro'/>
          </div>
      </form>
    </Container>
    
  )
}

export default FormCadastro