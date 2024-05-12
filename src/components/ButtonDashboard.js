import React from 'react'
import Icon_exercicio from '../assets/icon_atv_exercicio.svg'
import Icon_flashcard from '../assets/icon_atv_flashcards.svg'
import Icon_quiz from '../assets/icon_atv_quiz.svg'
import { useNavigate} from 'react-router-dom'
import './general/Theme.css'
import './ButtonDashboard.css'

const ButtonDashboard = ({titulo, descricao, icone, link}) => {
  const navigate = useNavigate();

  const linkTo = (caminho) => {
    navigate(caminho);
  }

  const getIconeByNome = (icone) => {
    switch(icone){
      case 'exercicios':
        return Icon_exercicio;
      case 'flashcards':
        return Icon_flashcard;
      case 'quizzes':
        return Icon_quiz;
      default:
        return Icon_exercicio;
    }
  }

  return (
    <div className='buttonDashboard' onClick={() => linkTo(link)}>
      <div>
        <h4>{titulo}</h4>
        <h6>{descricao}</h6>
      </div>
      <img src={getIconeByNome(icone)} alt="..." />
      
    </div>
  );
}

export default ButtonDashboard