import React from 'react'
import './general/Theme.css'
import './ButtonCorTema.css'
import Icon_tema_claro from '../assets/icon_tema_claro.svg'
import Icon_tema_escuro from '../assets/icon_tema_escuro.svg'
import Icon_tema_contraste from '../assets/icon_tema_contraste.svg'
import { useEffect, useState, useRef } from 'react'

const ButtonCorTema = () => {
	const [corTema, setCorTema] = useState()
	const refIconeTema = useRef()

	/* DETECTA MUDANÇA NA CONST "CorTema"  */
	useEffect(() => {
		if(corTema === "claro"){
			localStorage.setItem('@tema', 'claro')
			document.getElementById('root').classList.remove("altoContraste")
			document.getElementById('root').classList.remove("temaEscuro")
			// alert("CLARO")
		} else if (corTema === "escuro"){
			localStorage.setItem('@tema', 'escuro')
			document.getElementById('root').classList.remove("altoContraste")
			document.getElementById('root').classList.add("temaEscuro")
			// alert("ESCURO")
		} else if (corTema === "contraste"){
			localStorage.setItem('@tema', 'contraste')
			document.getElementById('root').classList.remove("temaEscuro")
			document.getElementById('root').classList.add("altoContraste")
			// alert("CONTRASTE")
		}

	}, [corTema])

	// RODA SOZINHO DEPOIS DA PAGINA CARREGAR, INICIALIZA O TEMA
	useEffect(() => {
		let theme = localStorage.getItem('@tema');

		if(theme === null){
			localStorage.setItem("@tema", "claro");
			theme = localStorage.getItem('@tema');
		} 

		setCorTema(theme)
		mudarIconeButton(theme)
	}, [])

	const mudarIconeButton = (corTema) => {
		switch(corTema){
			case "escuro":
				refIconeTema.current.src = Icon_tema_escuro;
				break;
			case "contraste":
				refIconeTema.current.src = Icon_tema_contraste;
				break;
			case "claro":
				refIconeTema.current.src = Icon_tema_claro;
				break;
			default:
				refIconeTema.current.src = null;
				break;
		}
	}

	const handleCorTema = () => {
		if(corTema === "claro"){
			setCorTema("escuro")
			mudarIconeButton("escuro")
		}

		if(corTema === "escuro"){
			setCorTema("contraste")
			mudarIconeButton("contraste")
		}

		if(corTema === "contraste"){
			setCorTema("claro")
			mudarIconeButton("claro")
		}
	}


  return (
    <div className='buttonCorTema' title='Clique para mudar o tema' onClick={handleCorTema}>
        <img ref={refIconeTema} alt="icone que altera entre um sol, uma lua e uma lua com metade de seu circulo escuro" className='iconeInternoTema'></img>
    </div>
  )
}

export default ButtonCorTema