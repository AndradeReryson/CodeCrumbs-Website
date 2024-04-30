import React from 'react'
import './general/Theme.css'
import './Formularios.css'
import Button from './Button'
import Container from './Container'

/**
 * Formulário de Login.
 */
const FormLogin = () => {
  return (
    <Container height="auto" width="auto" flexDirection="column" justifyContent="center" alignItems="center">
      <h5 style={{marginBottom: '1rem'}}> Já sou cadastrado </h5>
      <form className='form_cadastro' onSubmit={(e) => {e.preventDefault()}}>
          <label className="font_h6" htmlFor="login_input_email">Email</label>
          <input className="font_h6" id="login_input_email" type="email" required></input>

          <label className="font_h6" htmlFor="login_input_senha">Senha</label>
          <input className="font_h6" id="login_input_senha" type="password" required></input>

          <div className="useTwoColumns" style={{gridColumn: '1/3'}}>
            <input className='font_h6' id="login_input_manter_logado" type="checkbox"></input>
            <label className='font_h6' htmlFor="login_input_manter_logado">Continuar Conectado</label>
          </div>

          <div className="useTwoColumns" style={{gridColumn: '1/3'}}>
            <Button cor={'azul'} texto='Entrar'/>
          </div>

          <div className="useTwoColumns" style={{gridColumn: '1/3'}}>
            <h6 className='fonteCinzaEscuro'>Esqueci minha senha</h6>
          </div>
        
      </form>
    </Container>
  )
}

export default FormLogin