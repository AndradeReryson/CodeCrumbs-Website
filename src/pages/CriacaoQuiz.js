import React from 'react'
import '../components/general/Theme.css'
import '../components/general/ContrastTheme.css'
import './ContainerBanner.css'
import './CriacaoQuiz.css'
import Icon_quiz from '../assets/icon_atv_quiz.svg'
import Button from '../components/Button'
import ButtonVoltar from '../components/ButtonVoltar'
import Container from '../components/Container'
import CardCriacaoPergunta from '../components/CardCriacaoPergunta'
import { useState, useEffect} from 'react'
import ToastAlerta from '../components/ToastAlerta'
import LoadingWheel from '../components/LoadingWheel'
import secureLocalStorage from 'react-secure-storage'
import useFetch from '../hooks/useFetch'

const CriacaoQuiz = () => {
// Controle de estado do elemento <LoadingWheel />
  const [isLoadingVisivel, setIsLoadingVisivel] = useState(false);

  // Controle da notificação, quando for chamada
  const [toastTexto, setToastTexto] = useState(null);
  const [toastTipo, setToastTipo] = useState(null);

  // Lista deos cards "criação de pergunta"
	const [quantPerguntas, setQuantPerguntas] = useState(0);
  const [listaPerguntas, setListaPerguntas] = useState(null);

	const idUsuario = secureLocalStorage.getItem('id');

  const [fetchResource, setResource] = useState(null);
  const [fetchReqBody, setReqBody] = useState(JSON.stringify(null));

  // data e error são objetos JSON retornados do useFetch, se estiverem vazios (padrão) vão retornar uma string "null"
  const [data, error] = useFetch(fetchResource, "POST", fetchReqBody, true, setIsLoadingVisivel);

  /* QUANDO O FETCH RETORNAR DADOS */
  useEffect(() => {
    setResource(null)
    if(data !== null && data !== "null"){
      let json_data = JSON.parse(data);
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

  useEffect(() => {
		let listaCardsPerguntas = [];

		for(let i = 1; i <= 5; i++){
			listaCardsPerguntas.push(
				<CardCriacaoPergunta numero={i} />
			)
		}

		setQuantPerguntas(5)
		setListaPerguntas(listaCardsPerguntas);

		const BTN_ADICIONAR_PERGUNTA = document.querySelector("#btnAdicionarPergunta");
		
  }, [])

  return (
		<>
			<ToastAlerta toastTexto={toastTexto} toastTipo={toastTipo} toastTextSetter={setToastTexto} toastTipoSetter={setToastTipo} />
			<LoadingWheel isLoadingVisivel={isLoadingVisivel} />
			<Container className="containerConteudoCriacaoQuiz" width="80vw" height="140vh" flexDirection="column" justifyContent="start" padding="5vh 0 0 0">
					
					{/* LINHA BANNER - BOTAO VOLTAR */}
					<Container width="80vw" height="10vh" flexDirection="row" alignItems="center">
							<div className='listaBanner'>
							<ButtonVoltar />
							<img className="imgIcone" src={Icon_quiz} alt="..."/>
							<h3> Novo Quiz </h3>
							</div>
					</Container>

					{/* LINHA TITULO + LINGUAGEM */}
					<Container className="divTituloLinguagem" width="80vw" height="10vh" flexDirection="row" alignItems="center" gap="4rem">
							<Container width="60vw" height="5vh" flexDirection="row" alignItems="center" justifyContent="start" gap="1rem">
							<label className='font_h5' htmlFor='input_quiz_titulo'>Titulo</label>
							<input className='font_h6 fillSpace' id='input_quiz_titulo' />
							</Container>

							<Container width="20vw" height="5vh" flexDirection="row" alignItems="center" justifyContent="start" gap="1rem">
							<label className='font_h5' htmlFor='select_linguagem'>Linguagem</label>
							<select className='font_h6 fillSpace' id="select_linguagem">
									<option value="CSS" selected>CSS</option>
									<option value="SQL">SQL</option>
							</select>
							</Container>
					</Container>

					{/* LINHA ORIENTAÇÃO */}
					<Container width="80vw" height="10vh" flexDirection="row" alignItems="center" justifyContent="space-between" gap="4rem">
							<h4>Perguntas</h4>
							<h6 className='criacaoPerguntaDica'>Clique na letra da alternativa para definí-la como correta</h6>
					</Container>

					{/* WRAPPER CARDS DE CRIACAO */}
					<Container width="80vw" height="95vh" flexDirection="column" alignItems="center" justifyContent="start" margin="1rem 0">
							<div className='listaCardCriacaoPergunta'>
								{listaPerguntas}
							</div>
					</Container>

					{/* BOTOES RELACIONADOS A CRIACAO DE CARDS - SALVAR BARALHO */}
					<Container width="80vw" height="15vh" flexDirection="row" alignItems="center" justifyContent="space-between">
							<Button id="btnAdicionarPergunta" cor="branco" texto="Adicionar pergunta" />
							<Button id="btnCriarQuiz" cor="verde" texto="Salvar novo quiz" />
					</Container>

			</Container>
		</>
  )
}

export default CriacaoQuiz