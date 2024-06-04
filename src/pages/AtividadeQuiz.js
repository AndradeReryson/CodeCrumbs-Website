import React from 'react'
import '../components/general/Theme.css'
import '../components/general/ContrastTheme.css'
import './ContainerBanner.css'
import './AtividadeQuiz.css'
import Container from '../components/Container.js'
import Icon_quiz from '../assets/icon_atv_quiz.svg'
import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button.js'
import QuizButtonResposta from '../components/QuizButtonResposta.js'
import QuizNumeroPergunta from '../components/QuizNumeroPergunta.js'
import ToastAlerta from '../components/ToastAlerta'
import LoadingWheel from '../components/LoadingWheel'
import TelaConclusaoAtividade from '../components/TelaConclusaoAtividade.js'
import secureLocalStorage from 'react-secure-storage'
import useFetch from '../hooks/useFetch'

const AtividadeQuiz = () => {
  // Controle de estado do elemento <LoadingWheel />
  const [isLoadingVisivel, setIsLoadingVisivel] = useState(false);

  // Controle da notificação, quando for chamada
  const [toastTexto, setToastTexto] = useState(null);
  const [toastTipo, setToastTipo] = useState(null);

  // Controle da tela de conclusao
  const [isConclusaoVisivel, setConclusaoVisivel] = useState(false);
  const [textoConclusao, setTextoConclusao] = useState("Parabéns")

  const urlCaminho = window.location.pathname;
  const idUsuario = secureLocalStorage.getItem('id');

  const [fetchResource, setResource] = useState(null);
  const [fetchReqBody, setReqBody] = useState(JSON.stringify(null));
  const [fetchMethod, setMethod] = useState("GET");

  // data e error são objetos JSON retornados do useFetch, se estiverem vazios (padrão) vão retornar uma string "null"
  const [data, error] = useFetch(fetchResource, fetchMethod, fetchReqBody, true, setIsLoadingVisivel);
  

  /** DADOS DE REFERENCIA  */
  const [quizTerminou, setQuizTerminou] = useState(null);
  const [totalPerguntas, setTotalPerguntas] = useState(0);
  const [quantAcertos, setQuantAcertos] = useState(0);
  const [perguntaAtual, setPerguntaAtual] = useState(null);


  /** VALORES VINDOS DA API */
  const [tituloQuiz, setTituloQuiz] = useState("")
  const [enunciado, setEnunciado] = useState("");
  const [resposta01, setresposta01] = useState(null);
  const [resposta02, setresposta02] = useState(null);
  const [resposta03, setresposta03] = useState(null);
  const [resposta04, setresposta04] = useState(null);

  const [respostaCerta, setRespostaCerta] = useState(null);

  /** BOTOES DO DOM */
  const [btnResp01, setBtnResp01] = useState(null);
  const [btnResp02, setBtnResp02] = useState(null);
  const [btnResp03, setBtnResp03] = useState(null);
  const [btnResp04, setBtnResp04] = useState(null);

  /* MÉTODOS / EFFECTS */

  /** USEEFFECT DE DETECTAR FIM DO QUIZ */
  useEffect(() => {
    if(quizTerminou !== null){
      let quizNumero = urlCaminho.charAt(urlCaminho.length - 1);
      let nota = ((Math.round(quantAcertos*100 / totalPerguntas) * 100 / 100))

      setConclusaoVisivel(true)
      setTextoConclusao("SUA NOTA: "+nota+"%  ("+quantAcertos+"/"+totalPerguntas+")")
      /**/

      setReqBody(
        JSON.stringify(
          {
            id_usuario: idUsuario,
            id_quiz: quizNumero,
            nota: nota
          }
        )
      )
      setMethod("POST")
      setResource('quizzes/progresso/salvar')
    }
  }, [quizTerminou])

  /** EVENT LISTENER DO BOTAO RESPOSTA 01 */
  useEffect(() => {
    if(respostaCerta !== null){
      btnResp01.classList.remove("respostaCorreta", "respostaIncorreta");
      const clickHandler = (e) => {
        if(!btnResp01.classList.contains("respostaCorreta") && !btnResp01.classList.contains("respostaIncorreta") &&
          !btnResp02.classList.contains("respostaCorreta") && !btnResp02.classList.contains("respostaIncorreta") &&
          !btnResp03.classList.contains("respostaCorreta") && !btnResp03.classList.contains("respostaIncorreta") &&
          !btnResp04.classList.contains("respostaCorreta") && !btnResp04.classList.contains("respostaIncorreta")){
          let h6_texto = e.target.querySelector(".respostaTexto h6").textContent;
          
          if(h6_texto === respostaCerta){
            btnResp01.classList.add("respostaCorreta")
            setQuantAcertos(quantAcertos + 1);
          } else {
            btnResp01.classList.add("respostaIncorreta")
          }
        }
      }
      btnResp01.addEventListener('click', clickHandler);
      return () => btnResp01.removeEventListener("click", clickHandler);
    }
  }, [respostaCerta])

  /** EVENT LISTENER DO BOTAO RESPOSTA 02 */
  useEffect(() => {
    if(respostaCerta !== null){
      btnResp02.classList.remove("respostaCorreta", "respostaIncorreta");
      const clickHandler = (e) => {
        if(!btnResp01.classList.contains("respostaCorreta") && !btnResp01.classList.contains("respostaIncorreta") &&
          !btnResp02.classList.contains("respostaCorreta") && !btnResp02.classList.contains("respostaIncorreta") &&
          !btnResp03.classList.contains("respostaCorreta") && !btnResp03.classList.contains("respostaIncorreta") &&
          !btnResp04.classList.contains("respostaCorreta") && !btnResp04.classList.contains("respostaIncorreta")){
          let h6_texto = e.target.querySelector(".respostaTexto h6").textContent;
          
          if(h6_texto === respostaCerta){
            btnResp02.classList.add("respostaCorreta")
            setQuantAcertos(quantAcertos + 1);
          } else {
            btnResp02.classList.add("respostaIncorreta")
          }
        }
      }
      btnResp02.addEventListener('click', clickHandler);
      return () => btnResp02.removeEventListener("click", clickHandler);
    }
  }, [respostaCerta])

  /** EVENT LISTENER DO BOTAO RESPOSTA 03 */
  useEffect(() => {
    if(respostaCerta !== null){
      btnResp03.classList.remove("respostaCorreta", "respostaIncorreta");
      const clickHandler = (e) => {
        if(!btnResp01.classList.contains("respostaCorreta") && !btnResp01.classList.contains("respostaIncorreta") &&
          !btnResp02.classList.contains("respostaCorreta") && !btnResp02.classList.contains("respostaIncorreta") &&
          !btnResp03.classList.contains("respostaCorreta") && !btnResp03.classList.contains("respostaIncorreta") &&
          !btnResp04.classList.contains("respostaCorreta") && !btnResp04.classList.contains("respostaIncorreta")){
          let h6_texto = e.target.querySelector(".respostaTexto h6").textContent;
          
          if(h6_texto === respostaCerta){
            btnResp03.classList.add("respostaCorreta")
            setQuantAcertos(quantAcertos + 1);
          } else {
            btnResp03.classList.add("respostaIncorreta")
          }
        }
      }
      btnResp03.addEventListener('click', clickHandler);
      return () => btnResp03.removeEventListener("click", clickHandler);
    }
  }, [respostaCerta])

  /** EVENT LISTENER DO BOTAO RESPOSTA 04 */
  useEffect(() => {
    if(respostaCerta !== null){
      btnResp04.classList.remove("respostaCorreta", "respostaIncorreta");
      const clickHandler = (e) => {
        if(!btnResp01.classList.contains("respostaCorreta") && !btnResp01.classList.contains("respostaIncorreta") &&
          !btnResp02.classList.contains("respostaCorreta") && !btnResp02.classList.contains("respostaIncorreta") &&
          !btnResp03.classList.contains("respostaCorreta") && !btnResp03.classList.contains("respostaIncorreta") &&
          !btnResp04.classList.contains("respostaCorreta") && !btnResp04.classList.contains("respostaIncorreta")){
          let h6_texto = e.target.querySelector(".respostaTexto h6").textContent;
          
          if(h6_texto === respostaCerta){
            btnResp04.classList.add("respostaCorreta")
            setQuantAcertos(quantAcertos + 1);
          } else {
            btnResp04.classList.add("respostaIncorreta")
          }
        }
      }
      btnResp04.addEventListener('click', clickHandler);
      return () => btnResp04.removeEventListener("click", clickHandler);
    }
  }, [respostaCerta])

  /** ALTERANDO OS DADOS DO ENUNCIADO E DOS BOTOES RESPOSTA E DO BOTÃO DE "PROXIMA PERGUNTA" */
  useEffect(() => {
    if(perguntaAtual !== null && perguntaAtual !== undefined){

      let json_data = JSON.parse(data);
      console.log(json_data)

      setTituloQuiz(json_data.titulo);
      setEnunciado(json_data.lista_perguntas[perguntaAtual].enunciado);
      setresposta01(json_data.lista_perguntas[perguntaAtual].lista_respostas[0].texto);
      setresposta02(json_data.lista_perguntas[perguntaAtual].lista_respostas[1].texto);
      setresposta03(json_data.lista_perguntas[perguntaAtual].lista_respostas[2].texto);
      setresposta04(json_data.lista_perguntas[perguntaAtual].lista_respostas[3].texto);

      const btnProxima = document.querySelector("#btnProximaPergunta")
      btnProxima.addEventListener('click', (e) => {
        if(perguntaAtual + 1 < totalPerguntas){
          setPerguntaAtual(perguntaAtual + 1)
        } else {
          setQuizTerminou(true)
        }
      })

      function definirRespostaCerta(){
        json_data.lista_perguntas[perguntaAtual].lista_respostas.forEach(resposta => {
          if(resposta.isCorreta){
            setRespostaCerta(resposta.texto);
            return;
          }
        })
      }
      definirRespostaCerta();

    }
  }, [perguntaAtual])

  /* QUANDO O FETCH RETORNAR DADOS */
  useEffect(() => {
    setResource(null)
    if(data !== null && data !== "null"){
      if(fetchMethod === "GET"){
        let json_data = JSON.parse(data);
      
        setTotalPerguntas(json_data.lista_perguntas.length)
        setPerguntaAtual(0)
      } else if (fetchMethod === "POST"){
        console.log("POSTamo caralhouww")
      }
      
    } 
  }, [data])

  /* QUANDO O FETCH RETORNAR ERRO */
  useEffect(() => {
    setResource(null)
    if(error !== null && error !== "null"){
      setToastTipo("Erro");
      setToastTexto("Erro ao se comunicar com o servidor")
    }
    
  }, [error]);

  // para o fetch acontecer precisamos mudar o resource, portanto:
  useEffect(() => {
    let QuizNumero = urlCaminho.charAt(urlCaminho.length - 1);
    setResource("quizzes/"+QuizNumero);

    setBtnResp01(document.querySelector("div.buttonResposta:has(div.respostaTexto h6#resp01)"));
    setBtnResp02(document.querySelector("div.buttonResposta:has(div.respostaTexto h6#resp02)"));
    setBtnResp03(document.querySelector("div.buttonResposta:has(div.respostaTexto h6#resp03)"));
    setBtnResp04(document.querySelector("div.buttonResposta:has(div.respostaTexto h6#resp04)"));

    const btnProxima = document.querySelector("#btnProximaPergunta")
    btnProxima.addEventListener('click', (e) => {
      setPerguntaAtual(perguntaAtual + 1)
    })
  }, [])

  
    
    //console.log(e.target.querySelector("div.respostaTexto h6").innerHTML)
  
  /*
  const gerarNumeros = () => {
    let lista_numeros = [];

    for (let i = 0; i < 5; i++) {
      lista_numeros.push(<QuizNumeroPergunta className={i === 0 ? "respondida" : ""} numero={""+(i+1)} />)
    }

    return lista_numeros;
  }
  */
  return (
    <>
      <ToastAlerta toastTexto={toastTexto} toastTipo={toastTipo} toastTextSetter={setToastTexto} toastTipoSetter={setToastTipo} />
      <LoadingWheel isLoadingVisivel={isLoadingVisivel} />
      <TelaConclusaoAtividade isConclusaoVisivel={isConclusaoVisivel} textoConclusao={textoConclusao}/>
      <div className='atividadeQuiz'>
        <Container className="containerConteudoAtividadeQuiz" width="80vw" height="85vh" flexDirection="column" justifyContent="start" padding="5vh 0 0 0">
          
          {/* LINHA BANNER - TITULO DO QUIZ - BOTOES */}
          <Container className="divAtividadeQuizBannerBotoes" width="80vw" height="10vh" flexDirection="row" alignItems="center"> 
            <Container width="50vw" height="10vh" flexDirection="row" alignItems="center">
              <div className='listaBanner'>
                <img className="imgIcone" src={Icon_quiz} alt="..."/>
                <h4>{tituloQuiz}</h4>
              </div>
            </Container>

            <Container width="30vw" height="10vh" flexDirection="row" alignItems="center" justifyContent="center">
              <div className='listaBannerBotoes'>
                <Link className='link' to="/home/quizzes">
                  <Button cor="azul" texto="Todos os Quizzes"/>
                </Link>
              </div>
            </Container>
            
          </Container>

          {/* WRAPPER DAS PERGUNTAS E RESPOSTAS */}
          <Container className="containerWrapperPerguntasQuiz" width="80vw" height="60vh" flexDirection="column" alignItems="center" justifyContent="center">
            <div className="wrapperPerguntas">
              <div className='linhaPergunta'>
                <h5 id="pergEnunciado">{enunciado}</h5>
              </div>
              <div className='colunaResposta1'>
                <QuizButtonResposta id="resp01" isSelecionado={false} texto={resposta01}/>
              </div>
              <div className='colunaResposta2'>
                <QuizButtonResposta id="resp02" isSelecionado={false} texto={resposta02}/>
              </div>
              <div className='colunaResposta3'>
                <QuizButtonResposta id="resp03" isSelecionado={false} texto={resposta03}/>
              </div>
              <div className='colunaResposta4'>
                <QuizButtonResposta id="resp04" isSelecionado={false} texto={resposta04}/>
              </div>
            </div>
          </Container>

          {/* LINHA NUMERO PERGUNTA - BOTAO PROXIMA PERGUNTA */}
          <Container className="divNumerosPerguntas" width="80vw" height="10vh" flexDirection="row" alignItems="center">
            
            <Container width="60vw" height="10vh" flexDirection="row" alignItems="end" justifyContent="start">
              {/*gerarNumeros()*/}
            </Container>

            <Container width="20vw" height="10vh" flexDirection="row" alignItems="end" justifyContent="end">
              <Button id="btnProximaPergunta" cor="branco" texto="Próxima &#10137;"/>
            </Container>

          </Container>
        </Container>
      </div>
    </>
  )
}

export default AtividadeQuiz