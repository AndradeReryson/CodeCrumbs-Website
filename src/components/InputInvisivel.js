import React from 'react'
import './InputInvisivel.css'
import './general/Theme.css'
import { useEffect, useRef } from 'react'

const InputInvisivel = ({id}) => {
	const input = useRef();

	useEffect(() => {
		input.current.addEventListener('keydown', (e) => {
			if(e.keyCode === 9){
				e.preventDefault();
				input.current.value += "    ";
			}
			
		})
	}, [])

  return (
    <>
			<input ref={input} id={id} className='inputInvisivel font_h6' type="text" autoComplete="off"/>
    </>
  )
}

export default InputInvisivel