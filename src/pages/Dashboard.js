import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import '../components/general/Theme.css'
import '../components/general/ContrastTheme.css'
import "./Dashboard.css"
import ButtonDashboard from '../components/ButtonDashboard'
import StatsDashboard from '../components/StatsDashboard'
import ToastAlerta from '../components/ToastAlerta'
import LoadingWheel from '../components/LoadingWheel'
import secureLocalStorage from 'react-secure-storage'
import useFetch from '../hooks/useFetch'

const Dashboard = () => {
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

  useEffect(() => {
    setResource(null)
    if(data !== null && data !== "null"){
      /*
          ESTRUTURA DO JSON RESPOSTA
          {
            "percExerciciosConcluidos": ******,
            "percQuizzesConcluidos":    ******,
            "totalFlashCards":          ******,
            "linguagemFavorita":        ******
          }
      */
      let json_data = JSON.parse(data);

      const H5_EXERC_CONCLUIDOS    = document.querySelector('#statsExercConcluidos');
      const H5_QUIZZES_CONCLUIDOS  = document.querySelector('#statsQuizzesConcluidos');
      const H5_TOTAL_FLASHCARDS    = document.querySelector('#statsTotalFlashcards');
      const H5_LING_FAVORITA       = document.querySelector('#statsLinguagemFavorita');

      H5_EXERC_CONCLUIDOS.textContent     = json_data.percExerciciosConcluidos+"%";
      H5_QUIZZES_CONCLUIDOS.textContent   = json_data.percQuizzesConcluidos+"%";
      H5_TOTAL_FLASHCARDS.textContent     = json_data.totalFlashCards;
      H5_LING_FAVORITA.textContent        = json_data.linguagemFavorita;
    } 
    
  }, [data])

  useEffect(() => {
    setResource(null)
    if(error !== null && error !== "null"){
      setToastTipo("Erro");
      setToastTexto("Erro ao se comunicar com o servidor")
    }
    
  }, [error]);

  // para o fetch acontecer precisamos mudar o resource, portanto:
  useEffect(() => {
    setResource("usuarios/"+idUsuario+"/dashboard");
  }, [])

  return (
    <>
      <ToastAlerta toastTexto={toastTexto} toastTipo={toastTipo} toastTextSetter={setToastTexto} toastTipoSetter={setToastTipo}/>
      <LoadingWheel isLoadingVisivel={isLoadingVisivel}/>
      <Container className="containerConteudoDashboard" width="80vw" height="90vh" flexDirection="row" justifyContent="space-between">
        <Container width="38vw" height="60vh">
          <h3> Atividades </h3>
          <div className="col-atividades">
            <ButtonDashboard link="../exercicios" titulo="Exercicios" descricao="Preencher lacunas" icone="exercicios"/>
            <ButtonDashboard link="../flashcards" titulo="Flash Cards" descricao="Cartões de memória" icone="flashcards"/>
            <ButtonDashboard link="../quizzes" titulo="Quizzes" descricao="Questionários" icone="quizzes"/>
          </div>
        </Container>
        
        <Container width="38vw" height="60vh">
          <h3> Progresso </h3>
          <div className="col-dashboard">
            <StatsDashboard idValor="statsExercConcluidos"    titulo="Exercicios Concluidos"  valor="0%"/>
            <StatsDashboard idValor="statsQuizzesConcluidos"  titulo="Quizzes Concluidos"     valor="0%"/>
            <StatsDashboard idValor="statsTotalFlashcards"    titulo="Total de Flash Cards"   valor="0"/>
            <StatsDashboard idValor="statsLinguagemFavorita"  titulo="Linguagem Favorita"     valor="NULL"/>
          </div>
        </Container>
      </Container>
    </>
  )
}

export default Dashboard