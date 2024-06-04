import Icon_quiz from '../assets/icon_atv_quiz.svg'
import Container from '../components/Container'
import '../components/general/Theme.css'
import '../components/general/ContrastTheme.css'
import './ContainerBanner.css'
import './ListaQuizzes.css'
import ButtonFiltro from '../components/ButtonFiltro'
import Button from '../components/Button'
import CardQuiz from '../components/CardQuiz'
import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import ToastAlerta from '../components/ToastAlerta'
import LoadingWheel from '../components/LoadingWheel'
import secureLocalStorage from 'react-secure-storage'
import useFetch from '../hooks/useFetch'

const ListaQuizzes = () => {
  // Controle de estado do elemento <LoadingWheel />
  const [isLoadingVisivel, setIsLoadingVisivel] = useState(false);

  // Controle da notificação, quando for chamada
  const [toastTexto, setToastTexto] = useState(null);
  const [toastTipo, setToastTipo] = useState(null);

  const idUsuario = secureLocalStorage.getItem('id');

  const [fetchResource, setResource] = useState(null);
  const [fetchReqBody, setReqBody] = useState(JSON.stringify(null));

  // data e error são objetos JSON retornados do useFetch, se estiverem vazios (padrão) vão retornar uma string "null"
  const [data, error] = useFetch(fetchResource, "GET", fetchReqBody, true, setIsLoadingVisivel);

  // lista de quizzes, estado que será alterado pelo fetch e irá conter os elementos de <CardQuiz />
  const [listaQuizzes, setListaQuizzes] = useState([])

  /* QUANDO O FETCH RETORNAR DADOS */
  useEffect(() => {
    setResource(null)
    if(data !== null && data !== "null"){
      
      let json_lista = JSON.parse(data);
      let lista_cards = []

      json_lista.forEach((obj, index) => {
        lista_cards.push(
          
          <CardQuiz className="link" 
            quiz={obj.id}
            numero={(obj.id) < 10 ? "#000"+(obj.id) : "#00"+(obj.id)}
            titulo={obj.titulo}
            concluido={obj.nota === null ? false : true}
            nota={obj.nota === null ? "--" : obj.nota}

          />
          
        )
      })

      // alterando aqui o DOM já atualiza com base na variavel do useState
      setListaQuizzes(lista_cards)
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
    setResource("quizzes/ref/"+idUsuario+"/pagina/1");
  }, [])

  return (
    <>
      <ToastAlerta toastTexto={toastTexto} toastTipo={toastTipo} toastTextSetter={setToastTexto} toastTipoSetter={setToastTipo} />
      <LoadingWheel isLoadingVisivel={isLoadingVisivel} />
      <div className='listaQuizzes'>
        <Container className="conteudoListaQuizzes" width="80vw" height="30vh" flexDirection="column" justifyContent="start" padding="5vh 0 0 0">

          {/* LINHA BANNER - TITULO - DESC */}
          <Container width="80vw" height="10vh" flexDirection="row" alignItems="center"> 
            <div className='listaBanner'>
              <img className="imgIcone" src={Icon_quiz} alt="..."/>
              <h3> Quizzes </h3>
              <h6> Teste seu conhecimento e prepare-se para provas </h6>
            </div>
          </Container>

          {/* LINHA FILTRO - BTN_BUSCAR */}
          <Container className="divListaQuizzesFiltroBusca" width="80vw" height="10vh" flexDirection="row" alignItems="center" > 
            <Container width="40vw" height="10vh" flexDirection="row" alignItems="center">
              <div className='listaFiltro'>
                <ButtonFiltro className="active" texto="CSS" />
                <ButtonFiltro texto="SQL" />
              </div>
            </Container>

            <Container width="40vw" height="10vh" flexDirection="row" alignItems="center" justifyContent="end" padding="1vh 0 0 0">
                <label htmlFor='txt_pesquisa' className='font_h5'> Pesquisar </label>
                <input id='txt_pesquisa' type='text' className='font_h6'></input>
                <Button cor="amarelo" texto="Buscar"/>
            </Container> 
          </Container>

          {/* LINHA FILTRO MEUS QUIZZES - BTN_CRIAR_QUIZ */}
          <Container className="divListaQuizzesMeusQuizzes" width="80vw" height="10vh" flexDirection="row" alignItems="center"> 
            <Container width="40vw" height="10vh" flexDirection="row" alignItems="center">
              <div className='listaFiltro'>
                <ButtonFiltro className="active" texto="Todos os Quizzes" />
                <ButtonFiltro texto="Meus Quizzes" />
              </div>
            </Container>

            <Container width="40vw" height="10vh" flexDirection="row" alignItems="center" justifyContent="end" padding="1vh 0 0 0">
              <div className='listaBotoesCrud'>
                <Link className='link' to="./novo"><Button cor="verde" texto="Criar Novo Quiz"/></Link>
              </div>
            </Container> 
          </Container>   

        </Container>

        
        {/* LINHA LISTA DE QUIZZES */}
        <Container className="divListaCardsQuiz" width="80vw" height="102vh" flexDirection="row" alignItems="center" justifyContent="center" margin="1rem 0">
          <div className='listaCardQuizzes'>
            <div key="#re202020" className='listaHeader'>
              <h6 className='headerColumnNumero'style={{textAlign: 'center'}}>#</h6>
              <h6 className='headerColumnMark'>{" "}</h6>
              <h6 className='headerColumnTitulo'>Titulo</h6>
              <h6 className='headerColumnNota' style={{textAlign: 'center'}}>Nota</h6>
            </div>
            {listaQuizzes}
          </div>
        </Container>

        {/* LINHA PAGINACAO */}
        <Container width="80vw" height="10vh" flexDirection="row" alignItems="center" justifyContent="space-between" margin="0 0 2rem 0">
            <div className="totalResultados">
              <h6> 16 de 160 </h6>
            </div>

            <div className="paginacaoResultado">
              <Button cor="branco" texto="Primeiro"/>
              <h6> 1 2 3 4 5 ... 10 </h6>
              <Button cor="branco" texto="Ultimo" />
            </div>
          </Container>
      </div>
    </>
  )
}

export default ListaQuizzes