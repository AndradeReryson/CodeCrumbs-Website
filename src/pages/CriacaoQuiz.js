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
	const [quantPerguntas, setQuantPerguntas] = useState(null);
  const [listaPerguntas, setListaPerguntas] = useState(null);

	const idUsuario = secureLocalStorage.getItem('id');

	const [divLista, setDivLista] = useState(null);

	// botoes de "adicionar pergunta" e "salvar pergunta"
	const [btnAdicionarPergunta, setBtnAdicionarPergunta] = useState(null);
	const [btnSalvarQuiz, setBtnSalvarQuiz] = useState(null);


  const [fetchResource, setResource] = useState(null);
  const [fetchReqBody, setReqBody] = useState(JSON.stringify(null));

  // data e error são objetos JSON retornados do useFetch, se estiverem vazios (padrão) vão retornar uma string "null"
  const [data, error] = useFetch(fetchResource, "POST", fetchReqBody, true, setIsLoadingVisivel);

  /* QUANDO O FETCH RETORNAR DADOS */
  useEffect(() => {
    setResource(null)
    if(data !== null && data !== "null"){
      let json_data = JSON.parse(data);
			setToastTipo("sucesso")
			setToastTexto("Novo Quiz cadastrado com Sucesso!")
			setTimeout(() => {
				window.location.reload();
			}, 3000)
    } 
  }, [data])

  /* QUANDO O FETCH RETORNAR ERRO */
  useEffect(() => {
    setResource(null)
    if(error !== null && error !== "null"){
      setToastTipo("Erro");
      setToastTexto(error.errorMessage+": Erro ao se comunicar com o servidor")
    }
    
  }, [error]);


	/** */
	useEffect(() => {
		if(listaPerguntas !== null){
			//console.log(listaPerguntas);
			
		}
	}, [listaPerguntas])

	/** Evento do Botão de "Salvar novo Quiz" */
	useEffect(() => {
		if(listaPerguntas !== null){
			const salvarQuizHandler = () => {
				let tituloQuiz = document.querySelector('#input_quiz_titulo').value;
				let linguagemQuiz = document.querySelector('#select_linguagem').value;
				let listaPerguntasQuiz = [];

				/** Verificação se o quiz tem um nome */
				if (tituloQuiz.length <= 0){
					setToastTipo("erro")
					setToastTexto("Dê um nome ao seu quiz")
					return
				} 

				/** Criar um objeto POJO para cada pergunta, e tambem para cada resposta dentro da pergunta */
				let contador = 0;
				let arrayCardsPerguntas = document.querySelectorAll('.cardCriacaoPergunta');
				for (const card of arrayCardsPerguntas){
					contador++;

					let cardPerguntaEnunciado = card.querySelector('.wrapperInputs .wrapperPergunta input').value;
					
					if(cardPerguntaEnunciado.length <= 0 || cardPerguntaEnunciado === " "){
						setToastTipo("erro")
						setToastTexto("Dê um enunciado para todas as perguntas")
						return;
					}

						let cardPerguntaResp01 = {
							texto: card.querySelector('.wrapperInputs .wrapperResp01 .inputResposta').value,
							isCorreta: (card.querySelector('.wrapperInputs .wrapperResp01 .labelCheck').getAttribute("ischecked") === 'true' ? true : false)
						}

						let cardPerguntaResp02 = {
							texto: card.querySelector('.wrapperInputs .wrapperResp02 .inputResposta').value,
							isCorreta: (card.querySelector('.wrapperInputs .wrapperResp02 .labelCheck').getAttribute("ischecked") === 'true' ? true : false)
						}

						let cardPerguntaResp03 = {
							texto: card.querySelector('.wrapperInputs .wrapperResp03 .inputResposta').value,
							isCorreta: (card.querySelector('.wrapperInputs .wrapperResp03 .labelCheck').getAttribute("ischecked") === 'true' ? true : false)
						}

						let cardPerguntaResp04 = {
							texto: card.querySelector('.wrapperInputs .wrapperResp04 .inputResposta').value,
							isCorreta: (card.querySelector('.wrapperInputs .wrapperResp04 .labelCheck').getAttribute("ischecked") === 'true' ? true : false)
						}

					let arrayRespostas = [cardPerguntaResp01, cardPerguntaResp02, cardPerguntaResp03, cardPerguntaResp04];

					/** Objeto pergunta */
					let json_pergunta = {
						enunciado: cardPerguntaEnunciado,
						lista_respostas: arrayRespostas
					}
					
					
					/** Vamos verificar os valores antes de mandar essa pergunta pra lista de perguntas*/
					if(cardPerguntaResp01.texto.length <= 0 ||
							cardPerguntaResp02.texto.length <= 0 ||
							cardPerguntaResp03.texto.length <= 0 ||
							cardPerguntaResp04.texto.length <= 0)
					{
						setToastTipo("erro")
						setToastTexto('Erro na '+(contador)+'ª pergunta\nCampos Vazios')
						return;
					}

					if(cardPerguntaResp01.isCorreta === false &&
							cardPerguntaResp02.isCorreta === false &&
							cardPerguntaResp03.isCorreta === false &&
							cardPerguntaResp04.isCorreta === false)
					{
						setToastTipo("erro")
						setToastTexto('Erro na '+(contador)+'ª pergunta\nNenhuma resposta correta')
						return;
					}
					
					/** Envia o objeto da pergunta para o Array "listaPerguntasQuiz" */
					listaPerguntasQuiz.push(json_pergunta)

				}

				/** Verificamos se há ao menos 5 perguntas adicionadas */
				if(listaPerguntasQuiz.length < 5){
					setToastTipo("erro")
					setToastTexto("Crie pelo menos 5 perguntas para o Quiz")
					return;
				}

				/** Montando o POJO do novo quiz */
				let json_novoQuiz = {
					titulo: tituloQuiz,
					linguagem: linguagemQuiz,
					id_criador: idUsuario,
					lista_perguntas: listaPerguntasQuiz
				} 

				/** Desativando o botão */
				btnSalvarQuiz.style.opacity = '0.5';
				btnSalvarQuiz.style.pointerEvents = 'none';

				setReqBody(JSON.stringify(json_novoQuiz))
				setResource("quizzes")
				
			}

			btnSalvarQuiz.addEventListener("click", salvarQuizHandler);
			return () => btnSalvarQuiz.removeEventListener("click", salvarQuizHandler);
		}
	}, [listaPerguntas]);

	/** Evento do Botão de "Adicionar Pergunta" */
	useEffect(() => {
		if(listaPerguntas !== null){
			if(listaPerguntas.length < 10){
				const clickHandler = () => {
					setListaPerguntas((listaAntiga) => [...listaAntiga, <CardCriacaoPergunta numero={quantPerguntas + 1}/>])
					setQuantPerguntas(quantPerguntas + 1)
				}
	
				btnAdicionarPergunta.addEventListener('click', clickHandler);
				return () => btnAdicionarPergunta.removeEventListener("click", clickHandler);
			} else {
				const clickHandler = () => {
					setToastTipo("INFO")
					setToastTexto("Você atingiu o limite de 10 perguntas")
				}
	
				btnAdicionarPergunta.addEventListener('click', clickHandler);
				return () => btnAdicionarPergunta.removeEventListener("click", clickHandler);
				
			}

			
			
		}

		
	}, [listaPerguntas]);

	/** Evento dos Botões de excluir pergunta */
	useEffect(() => {
		if(listaPerguntas !== null){
			let arrayBotoesExcluir = document.querySelectorAll(".cardCriacaoPergunta .btnExcluir")
			
			const clickHandler = (e) => {
				let numeroCard = parseInt(e.target.getAttribute('data-numero-pergunta'))
				let cardPergunta = e.target.parentNode;

				/** 
				 * 		Aqui a remoção está sendo feita apenas no DOM, pois caso eu remova do Array "ListaPerguntas" 
				 *	o React vai renderizar novamente as perguntas da lista e vai modificar os textos das outras 
				 *	perguntas, pois elas mudaram de posição no Array por conta da remoção;
				 * 
				 * 		Por hora vamos manter assim, mas sabendo que há o Array "ListaPerguntas" com todos os cards já
				 * 	criados, inclusive os que foram apagados. 
				 */
				divLista.removeChild(cardPergunta);
			}

			for(let i = 0; i < arrayBotoesExcluir.length; i++){
				arrayBotoesExcluir[i].addEventListener("click", clickHandler);
			}

			return () => {
			for(let i = 0; i < arrayBotoesExcluir.length; i++){
				arrayBotoesExcluir[i].removeEventListener("click", clickHandler);
			}
		}
		}
		
	}, [listaPerguntas])


	/* USE EFFECT INICIAL */
  useEffect(() => {
		setBtnAdicionarPergunta(document.querySelector("#btnAdicionarPergunta"));
		setBtnSalvarQuiz(document.querySelector("#btnSalvarQuiz"));
		setDivLista(document.querySelector('.listaCardCriacaoPergunta'));
		setListaPerguntas([]);
		setQuantPerguntas(0);
		
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
							<Button id="btnSalvarQuiz" cor="verde" texto="Salvar novo quiz" />
					</Container>

			</Container>
		</>
  )
}

export default CriacaoQuiz