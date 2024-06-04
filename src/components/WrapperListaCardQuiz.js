import React, { useEffect } from 'react'

const WrapperListaCardQuiz = ({listaQuizzes, elementoDOM}) => {

	const gerarCards = () => {
		

		
	}

	useEffect(() => {
		listaQuizzes.forEach(card => {
			elementoDOM.appendChild(card);
		})


	}, [listaQuizzes])

  return (
    <>
    </>
  )
}

export default WrapperListaCardQuiz