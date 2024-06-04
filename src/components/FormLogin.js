import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './general/Theme.css'
import './Formularios.css'
import Button from './Button'
import Container from './Container'
import useFetch from '../hooks/useFetch'
import secureLocalStorage from 'react-secure-storage'
import { Navigate } from 'react-router-dom'

/**
 * Formulário de Login.
 * @param {Function} setIsLoadingVisivel é a função setter de um useState o qual deve controlar a visibilidade do componente <LoadingWheel />
 * @param {Array<Function>} toastSetters é um array contendo as duas funções do setState do toast, sendo eles: 
 * 
 *                                            setToastTipo()   // muda o icone do toast (mude esse primeiro)
 *                                            setToastTexto()  // muda o texto do toast e chama o toast
 *                                            
 */
const FormLogin = ({setIsLoadingVisivel, toastSetters}) => {

  const setToastTexto = toastSetters[0];  // setToastTexto(...)
  const setToastTipo = toastSetters[1];   // setToastTipo(...)

  const [fetchResource, setResource] = useState(null);
  const [fetchReqBody, setReqBody] = useState(null);

  // data e error são objetos JSON retornados do useFetch, se estiverem vazios (padrão) vão retornar uma string "null"
  const [data, error] = useFetch(fetchResource, "POST", fetchReqBody, false, setIsLoadingVisivel);

    /* QUANDO O FETCH RETORNAR DADOS */
    useEffect(() => {
      setResource(null)
      // um JSON.parse(null) vai retornar uma string "null", precisamos verificar isso também
      if(data !== null && data !== "null"){
        let json_usuario = JSON.parse(data);

        secureLocalStorage.setItem('dados', data);
        secureLocalStorage.setItem('id', json_usuario.id);
        secureLocalStorage.setItem('apelido', json_usuario.apelido)
        secureLocalStorage.setItem('username', json_usuario.credenciais.email);
        secureLocalStorage.setItem('password', json_usuario.credenciais.senha);
        window.location.href = '/'
      }
    }, [data]);

    /* QUANDO O FETCH RETORNAR ERRO */
    useEffect(() => {
      setResource(null)

      // um JSON.parse(null) vai retornar uma string "null", precisamos verificar isso também
      if(error !== null && error !== "null"){
        let errorMessage = JSON.parse(error).errorMessage;

        setToastTipo("Erro");
        setToastTexto(errorMessage)
      }
    }, [error]);
  

  /* ADICIONANDO UM EVENT LISTENER AO BOTAO */
  useEffect(() => {
    const BTN_LOGAR = document.querySelector('#btn_logar');
    const INPUT_EMAIL = document.querySelector('#login_input_email');
    const INPUT_SENHA = document.querySelector('#login_input_senha');
    
    // No caso do usuário ja estar logado, a tela de cadastro/login não será carregada
    // Nesse caso, o botão não vai existir para receber esse eventListener
    // Ainda precisamos dessa tela pois ela faz o redirecionamento para outras telas
    if(BTN_LOGAR !== null){
      BTN_LOGAR.addEventListener('click', (e) => {
      
        setReqBody(
            JSON.stringify(
              {
                email: INPUT_EMAIL.value,
                senha: INPUT_SENHA.value
              }
          )
        )
        setResource("usuarios/login")
      });
    }
    
  
  }, [])
  
  /* VERIFICAÇÃO SE O USUARIO JÁ LOGOU E ESTA COM OS DADOS AUTENTICADOS */
  const localStorageUsername = secureLocalStorage.getItem('username');
	const localStoragePassword = secureLocalStorage.getItem('password');

  if(!localStorageUsername && !localStoragePassword){
    return (
      <Container height="auto" width="auto" flexDirection="column" justifyContent="center" alignItems="center">
        <h5 style={{marginBottom: '1rem'}}> Já sou cadastrado </h5>
        <form className='form_cadastro' onSubmit={(e) => {e.preventDefault()}}>
            <label className="font_h6" htmlFor="login_input_email">Email</label>
            <input className="font_h6" id="login_input_email" type="email" ></input>

            <label className="font_h6" htmlFor="login_input_senha">Senha</label>
            <input className="font_h6" id="login_input_senha" type="password" ></input>

            {/* 
            <div className="useTwoColumns" style={{gridColumn: '1/3'}}>
              <input className='font_h6' id="login_input_manter_logado" type="checkbox"></input>
              <label className='font_h6' htmlFor="login_input_manter_logado">Continuar Conectado</label>
            </div>
            */}

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
  } else {
    return <Navigate to="/home/dashboard"  replace />
  }
}

FormLogin.propTypes = {
  setIsLoadingVisivel:    PropTypes.func.isRequired
}

export default FormLogin