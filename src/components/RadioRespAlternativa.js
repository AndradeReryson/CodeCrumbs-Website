import React, { useEffect } from 'react'
import './general/Theme.css'
import './RadioRespAlternativa.css'
import { useRef } from 'react'

const RadioRespAlternativa = ({className, texto}) => {
	const refCheckInvisivel = useRef();
	const refLabelCheck = useRef();
	
	const atualizarEstadoLabel = () => {
		let labelCheck = refLabelCheck.current;
		let checkInvisivel = refCheckInvisivel.current

		if(checkInvisivel.checked){
			labelCheck.classList.add("radioMarcado")
			labelCheck.setAttribute('isChecked', true)
		} else {
			labelCheck.classList.remove("radioMarcado")
			labelCheck.setAttribute('isChecked', false)
		}
	}

	const clicarCheckbox = () => {
		let checkInvisivel = refCheckInvisivel.current
		checkInvisivel.click();
	}

  return (
    <>
			<input ref={refCheckInvisivel} className={"checkInvisivel"} type='checkbox' value={texto} onClick={atualizarEstadoLabel}/>
      <span ref={refLabelCheck} className={'labelCheck '+className} onClick={clicarCheckbox} ischecked="false">
				<h5>{texto}</h5>
			</span>
    </>
  )
}

export default RadioRespAlternativa