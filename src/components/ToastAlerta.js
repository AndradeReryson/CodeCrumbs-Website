import React, { useEffect, useState } from 'react'
import './ToastAlerta.css'
import PropTypes from 'prop-types'
import icon_erro from '../assets/icon_toast_erro.svg'
import icon_sucesso from '../assets/icon_toast_sucesso.svg'
import icon_aviso from '../assets/icon_toast_aviso.svg'
import icon_info from '../assets/icon_toast_informacao.svg'

/**
 * Componente da notificação (toast) usado para expor o status do sistema quando uma ação é feita.
 * 
 * Exemplo de uso:
 * 
 * const ComponentePai = () => {
 * 	
 * 		const [toastTexto, setToastTexto] = useState(null);
 * 		const [toastTipo, setToastTipo] = useState(null);
 *
 *			useEffect(() => {
 *				const BTN_TESTE = document.querySelector('.btnTestarNotify')
 *
 *				BTN_TESTE.addEventListener('click', (e) => {  
 *					setToastTipo("Sucesso")
 *					setToastTexto("TESTANDO... TESTANDO...")
 *				})
 *
 *			}, [])
 *
 * }	
 * 
 * @param {String} toastTexto é o texto da notificação, deve ser um useState no componente pai
 * @param {String} toastTipo é o tipo da notificação (ERRO, SUCESSO, AVISO, INFORMACAO)
 * @param {String} toastTextSetter é a função setter do useState do "toastTexto", serve para que a notificação mude seu proprio texto para null depois de aparecer
 * @param {String} toastTipoSetter é a função setter do useState do "toastTipo", serve para alterar o icone 
 * @returns 
 */
const ToastAlerta = ({toastTexto, toastTipo, toastTextSetter, toastTipoSetter}) => {
	
	/* função pra adicionar delay dentro de outras funções */
	const delay = ms => new Promise(res => setTimeout(res, ms));

	/* ALTERAR ICONE DO TOAST COM BASE NO PROP PASSADO */
	useEffect(() => {
		if(toastTipo != null){
			const IMG_TOAST = document.querySelector(".ToastImagem");
			const DIV_TOAST = document.querySelector(".ToastAlerta");

			switch(toastTipo.toUpperCase()){
				case 'ERRO':
					IMG_TOAST.src = icon_erro;
					DIV_TOAST.classList.remove("tipoErro","tipoSucesso","tipoInfo","tipoAviso");
					DIV_TOAST.classList.add("tipoErro");
					break;
				case 'SUCESSO':
					IMG_TOAST.src = icon_sucesso;
					DIV_TOAST.classList.remove("tipoErro","tipoSucesso","tipoInfo","tipoAviso");
					DIV_TOAST.classList.add("tipoSucesso");
					break;
				case 'AVISO':
					IMG_TOAST.src = icon_aviso;
					DIV_TOAST.classList.remove("tipoErro","tipoSucesso","tipoInfo","tipoAviso");
					DIV_TOAST.classList.add("tipoAviso");
					break;
				case 'INFO':
					IMG_TOAST.src = icon_info;
					DIV_TOAST.classList.remove("tipoErro","tipoSucesso","tipoInfo","tipoAviso");
					DIV_TOAST.classList.add("tipoInfo");
					break;
				default:
					IMG_TOAST.src = icon_info;
					DIV_TOAST.classList.remove("tipoErro","tipoSucesso","tipoInfo","tipoAviso");
					DIV_TOAST.classList.add("tipoInfo");
					break;
			}
		}
	}, [toastTipo])

	/* ADICIONAR CLASSES DE ANIMACAO AO TOAST QUANDO O "toastTexto" FOR ALTERADO e SER != null */
	useEffect(() => {
		if(toastTexto != null){
			const DIV_TOAST = document.querySelector(".ToastAlerta");
			DIV_TOAST.classList.add('fadeInWaitFadeOut');

			let funDelay = async () => {
				await delay(5500);
				DIV_TOAST.classList.remove('fadeInWaitFadeOut');
				toastTextSetter(null); // setamos o texto to toast para null, permitindo que ele possa ser modificado e chamado novamente
			}
			funDelay();
		}
	}, [toastTexto])

  return (
    <div className='ToastAlerta'>
			<div>
				<img className='ToastImagem' src={icon_erro} />
			</div>
			<div>	
				<h6 className='ToastTexto'>{toastTexto}</h6>
			</div>
    </div>
  )
}

ToastAlerta.propTypes = {
	toastTexto:					PropTypes.string, 
	toastTipo:					PropTypes.string,
	toastTextSetter: 		PropTypes.func,
	toastIconSetter:		PropTypes.func
}

export default ToastAlerta