import React from 'react'
import './Formularios.css'
import './general/Theme.css'

import Container from './Container'
import Button from './Button'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'
import PropTypes from 'prop-types'

/**
 * Formulário de Cadastro.
 */
const FormCadastro = ({setIsLoadingVisivel, toastSetters}) => {

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
        const INPUT_APELIDO     = document.querySelector('#cadastro_input_apelido');
        const INPUT_EMAIL       = document.querySelector('#cadastro_input_email');
        const INPUT_SENHA       = document.querySelector('#cadastro_input_senha');
        const INPUT_CONF_SENHA  = document.querySelector('#cadastro_input_conf_senha');

        INPUT_APELIDO.value = "";
        INPUT_EMAIL.value = "";
        INPUT_SENHA.value = "";
        INPUT_CONF_SENHA.value = "";


        setToastTipo("Sucesso");
        setToastTexto("Cadastro realizado com sucesso, por favor, faça login")
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

  /* ADICIONANDO UM EVENT LISTENER AO BOTAO E A VERIFICACAO DE CAMPOS PRO CADASTRO*/
  useEffect(() => {
    const INPUT_APELIDO     = document.querySelector('#cadastro_input_apelido');
    const INPUT_EMAIL       = document.querySelector('#cadastro_input_email');
    const INPUT_SENHA       = document.querySelector('#cadastro_input_senha');
    const INPUT_CONF_SENHA  = document.querySelector('#cadastro_input_conf_senha');
    const BTN_CADASTRAR     = document.querySelector('#btn_cadastrar');

    const ARRAY_INPUTS = [
      [INPUT_CONF_SENHA, 'confirmar senha'],
      [INPUT_SENHA, 'senha'], 
      [INPUT_EMAIL, 'email'], 
      [INPUT_APELIDO, 'apelido']
    ]

    ARRAY_INPUTS.forEach(input => {
      // desativando barra de espaço no input
      input[0].addEventListener('keypress', (e) => {
        if(e.keyCode === 32 || e.target === document.body){
          e.preventDefault();
        }
      })

      input[0].addEventListener('keydown', (e) => {
        // desativando CTRL+V
        if((e.ctrlKey || e.metaKey) && e.keyCode === 86){
          e.preventDefault();
        }

        // desativando CTRL+X
        if((e.ctrlKey || e.metaKey) && e.keyCode === 88){
          e.preventDefault();
        }

        // desativando CTRL+C
        if((e.ctrlKey || e.metaKey) && e.keyCode === 67){
          e.preventDefault();
        }
      })
    })

    // No caso do usuário ja estar logado, a tela de cadastro/login não será carregada
    // Nesse caso, o botão não vai existir para receber esse eventListener
    // Ainda precisamos dessa tela pois ela faz o redirecionamento para outras telas
    if(BTN_CADASTRAR !== null){
      
      BTN_CADASTRAR.addEventListener('click', (e) => {
        let areCamposValidos = true;
        let msgCampoInvalido = "" 

        // testando se os campos estão vazios
        ARRAY_INPUTS.forEach(input => {
          if(input[0].value === null || input[0].value === ""){
            areCamposValidos = false;
            msgCampoInvalido = 'O campo '+input[1]+" está vazio";
            return;
          }
        })

        // Se os campos não estiverem vazios, teste se o apelido tem no minimo 4 digitos, se o email possui "@" e "." e se a senha tem no minimo 8 digitos
        if(areCamposValidos){
          if(INPUT_APELIDO.value.length < 4){
            areCamposValidos = false;
            msgCampoInvalido = 'O apelido deve ter no mínimo 4 caracters';
          } else if( !/[@]/.test(INPUT_EMAIL.value) || !/[\.]/.test(INPUT_EMAIL.value)){
            areCamposValidos = false;
            msgCampoInvalido = 'O endereço de email é invalido';
          } else if(INPUT_SENHA.value.length < 4){
            areCamposValidos = false;
            msgCampoInvalido = 'a senha deve ter no mínimo 8 caracters';
          } 
        }

        // se os campos não estão vazios e não são
        if(areCamposValidos){
          if(INPUT_SENHA.value !== INPUT_CONF_SENHA.value){
            areCamposValidos = false;
            msgCampoInvalido = 'As senhas não são iguais';
          }
        } 

        if(areCamposValidos){
          setReqBody(
            JSON.stringify(
              {
                apelido: INPUT_APELIDO.value,
                email:   INPUT_EMAIL.value,
                senha:   INPUT_SENHA.value
              }
            )
          )
          setResource('usuarios')
        } else {
          setToastTipo('Erro')
          setToastTexto(msgCampoInvalido)
        }
      })
    }
  }, []);

  return (
    <Container height="auto" width="auto" flexDirection="column" justifyContent="center" alignItems="center">
      <h5 style={{marginBottom: '1rem'}}> Vamos Começar </h5>
      <form className='form_cadastro' onSubmit={(e) => {e.preventDefault()}}>
          <label className="font_h6" htmlFor="cadastro_input_apelido">Apelido</label>
          <input className="font_h6" id="cadastro_input_apelido" type="text" placeholder="Mínimo 4 caracteres" maxLength="20"></input>

          <label className="font_h6" htmlFor="cadastro_input_email">Email</label>
          <input className="font_h6" id="cadastro_input_email" type="email"></input>

          <label className="font_h6" htmlFor="cadastro_input_senha">Senha</label>
          <input className="font_h6" id="cadastro_input_senha" type="password" placeholder="Mínimo 8 caracteres"></input>

          <label className="conf_senha" htmlFor="cadastro_input_conf_senha">Confirmar Senha</label>
          <input className="font_h6" id="cadastro_input_conf_senha" type="password" placeholder="Digite a mesma senha acima"></input>

          <div className="useTwoColumns" style={{gridColumn: '1/3'}}>
            {/* <Link className='link' to="/home/dashboard"> <Button style={{padding: '0'}} cor="azul" texto='Cadastrar'/> </Link> */}
            <Button id="btn_cadastrar" cor={'azul'} texto='cadastrar' />
          </div>
      </form>
    </Container>
    
  )
}

FormCadastro.propTypes = {
  setIsLoadingVisivel:    PropTypes.func.isRequired
}

export default FormCadastro