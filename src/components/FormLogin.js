import React, { useEffect } from 'react'
import './general/Theme.css'
import './Formularios.css'
import Button from './Button'
import Container from './Container'
import { Link } from 'react-router-dom'
import { useState } from 'react'

/**
 * Formulário de Login.
 */
const FormLogin = () => {
  const API_BASE_URL = "http://localhost:8080/"

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const enviarDadosLogin = () => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    
    console.log(username+", "+password)

    let reqBody = {
      email: username,
      senha: password
    }

    const fetchPostLogin = () => {
      setIsLoading(true);
      fetch(API_BASE_URL+"usuarios/login", {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: reqBody
      })
        .then((res) => res.text())
        .then((data) => {
          let json = data === "" ? {} : JSON.parse(data)
          console.log(json);
          setError(null);
        })
        .catch((error) => {
          if(error.name === "AbortError") {
            console.log("Fetch Aborted");
            return;
          }
          setError(error.message);
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }

    fetchPostLogin();
  }

  useEffect(() => {
    const BTN_LOGAR = document.querySelector('#btn_logar');

    BTN_LOGAR.addEventListener('click', enviarDadosLogin);
  }, [])

  return (
    <Container height="auto" width="auto" flexDirection="column" justifyContent="center" alignItems="center">
      <h5 style={{marginBottom: '1rem'}}> Já sou cadastrado </h5>
      <form className='form_cadastro' onSubmit={(e) => {e.preventDefault()}}>
          <label className="font_h6" htmlFor="login_input_email">Email</label>
          <input className="font_h6" id="login_input_email" type="email" onChange={(e) => setUsername(e.target.value)}></input>

          <label className="font_h6" htmlFor="login_input_senha">Senha</label>
          <input className="font_h6" id="login_input_senha" type="password"  onChange={(e) => setPassword(e.target.value)}></input>

          <div className="useTwoColumns" style={{gridColumn: '1/3'}}>
            <input className='font_h6' id="login_input_manter_logado" type="checkbox"></input>
            <label className='font_h6' htmlFor="login_input_manter_logado">Continuar Conectado</label>
          </div>

          <div className="useTwoColumns" style={{gridColumn: '1/3'}}>
            {/* <Link className="link" to="/home/dashboard"><Button cor={'azul'} texto='Entrar'/></Link> */}
            <Button id="btn_logar" cor={'azul'} texto='Entrar'/>
          </div>

          <div className="useTwoColumns" style={{gridColumn: '1/3'}}>
            <h6 className='fonteCinzaEscuro'>Esqueci minha senha</h6>
          </div>
        
      </form>
    </Container>
  )
}

export default FormLogin