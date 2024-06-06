import React, { useEffect } from 'react'
import './general/Theme.css'
import './CardCriacaoPergunta.css'
import RadioRespAlternativa from './RadioRespAlternativa'
import { useRef } from 'react'

const CardCriacaoPergunta = ({numero}) => {

	useEffect(() => {
		let listaCheckbox = document.querySelectorAll('.respPergunta'+numero)

		// comportamente do observer, que irá verificar qualquer alteracao em um atributo
		var observer = new MutationObserver(function(mutation) {
			mutation.forEach((mutation) => {
				if(mutation.type === 'attributes'){

					if(mutation.target.getAttribute('isChecked') === "true"){
						listaCheckbox.forEach(label => {

							if(label !== mutation.target && label.getAttribute('isChecked') === "true"){
								label.click();
							}
							
						})
					}
				}
			})
		})

		// definimos que o observer só vai observar mudanças nos labels presentes na listaCheckBox
		listaCheckbox.forEach(elem => {
			observer.observe(elem, {attributes: true})
		})
	}, [])

  return (
    <div className='cardCriacaoPergunta'>
        <h4 className="btnNumeroExcluir" id={"btnExcluirPergunta"+numero}>{numero}</h4>
        <div className='wrapperInputs'>
            <div className='wrapperPergunta'>
                <label className='font_h5'>Pergunta</label>
                <input type="text" className='font_h6 fillSpace' />
            </div>
            
            <div className='wrapperResp01'>
                <RadioRespAlternativa className={"respPergunta"+numero} texto="A" checked={true}/>
                <input className="font_h6 inputResposta" id={"perg0"+numero+"resp01"} placeholder="Resposta"></input>
            </div>

            <div className='wrapperResp02'>
                <RadioRespAlternativa className={"respPergunta"+numero} texto="B" checked={false}/>
                <input className="font_h6 inputResposta" id={"perg0"+numero+"resp02"} placeholder="Resposta"></input>
            </div>

            <div className='wrapperResp03'>
                <RadioRespAlternativa className={"respPergunta"+numero} texto="C" checked={false}/>
                <input className="font_h6 inputResposta" id={"perg0"+numero+"resp03"} placeholder="Resposta"></input>
            </div>

            <div className='wrapperResp04'>
                <RadioRespAlternativa className={"respPergunta"+numero} texto="D" checked={false}/>
                <input className="font_h6 inputResposta" id={"perg0"+numero+"resp04"} placeholder="Resposta"></input>
            </div>
        </div>
    </div>
  )
}

export default CardCriacaoPergunta