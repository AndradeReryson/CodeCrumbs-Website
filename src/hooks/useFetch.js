import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import secureLocalStorage from 'react-secure-storage';

/**
 *  Hook que simplifica e reaproveita o código para fazer um Fetch.
 *  Cada vez que o resource (caminho do recurso) é alterado, o hook realiza o fetch com os parametros informados.
 * 
 *  O Componente que chama o useFetch precisa ter tambem o useState "isLoadingWheel" usado pelo componente <LoadingWheel /> 
 * 
 *  Exemplo de Uso:
 * 
 * const ComponentePai = ({setIsLoadingVisivel}) => {
 * 
 * 			const [fetchResource, setResource] = useState(null);
 * 			const [fetchReqBody, setReqBody] = useState(null);
 *		
 * 			const [data, error] = useFetch(fetchResource, "POST", fetchReqBody, false, setIsLoadingVisivel);
 * }
 * 
 * @param {String} resource é o caminho do recurso, sem considerar o caminho base ("http://.../"). Exemplo: "produtos/limpeza"
 * @param {String} reqMethod é o método da requisição (GET, POST, UPDATE, DELETE)
 * @param {Object} reqBody é o corpo que será enviado na requisição, caso haja necessidade
 * @param {Boolean} needAuth diz se esse fetch precisa do header de Autenticação, ele será criado dentro deste Hook, usando localStorage para pegar as credenciais
 * @param {Function} setIsLoadingVisivel é a função setter de um useState o qual deve controlar a visibilidade do componente <LoadingWheel />
 * @returns {Array<Object>} retorna um Array com os dados e erros retornados do fetch: [data, error]
 */
const useFetch = (resource, reqMethod, reqBody, needAuth, setIsLoadingVisivel) => {
	const BASE_URL = "http://localhost:8080/"
 	const [error, setError] = useState(null);
	const [data, setData] = useState(null);
	const username = secureLocalStorage.getItem('username');
	const password = secureLocalStorage.getItem('password');

	/* Variavel que quando alterada vai disparar o fetch */
	const [isFetchCalled, setIsFetchCalled] = useState(false);

	/* AQUI ESTÁ SENDO FEITO O FETCH. Só é disparado quando "isFetchCalled" é alterado para true */
	useEffect(() => {
		if(isFetchCalled === true){
			/* Em caso de multiplos fetchs, precisamos limpar os dados do fetch anterior */
			setError(null);
			setData(null);

			let headers = new Headers();
			headers.append('Content-Type', 'Application/json')
	
			if(needAuth){
				if(username !== null && password !== null){
					headers.append('Authorization', 'Basic '+btoa(username + ":" + password));
				} else {
					throw new Error("Credenciais não informadas")
				}
			}

			let fetchOptions = {}

				if(reqMethod === "GET"){
					fetchOptions = {
						headers: headers
					}
				}

				if(reqMethod === "POST"){
					fetchOptions = {
						method: "POST",
						headers: headers,
						body: reqBody
					}
				}

			
			setIsLoadingVisivel(true);
			fetch(BASE_URL + resource, fetchOptions)
				.then((res) => res.text())
				.then((data) => {
					// se o data tiver retornado um JSON com a chave 'errorCode'
					if(JSON.parse(data).hasOwnProperty('errorCode')){
						let json_error = data === "" ? {} : JSON.parse(data)
						setData(null);
						setError(json_error);
					} else {
						let json = data === "" ? {} : JSON.parse(data)
						setData(json);
						setError(null);
					}
					
				})
				.catch((error) => {
					if(error.name === "AbortError") {
						console.log("Fetch Aborted"); 
						return;
					}
				})
				.finally(() => {
					setIsLoadingVisivel(false);
				});
		}
		
	}, [isFetchCalled]) 

	/* quando for passado um caminho pra API diferente de null, muda o "isFetchCalled" para true */
	useEffect(() => {
		if(resource !== null){
			setIsFetchCalled(true);
		}
	}, [resource])

	/* Ao fim do fetch, se der erro no fetch (error) ou retornar dados (data), vamos setar o "isFetchCalled" para falso denovo */
	useEffect(() => {
		setIsFetchCalled(false);
	}, [data])

	useEffect(() => {
		setIsFetchCalled(false);
	}, [error])

  return [JSON.stringify(data), JSON.stringify(error)]
}

useFetch.propTypes = {
    resource:   					PropTypes.string.isRequired,
    reqMethod:						PropTypes.string.isRequired,
		reqBody: 							PropTypes.object,
		needAuth: 						PropTypes.bool.isRequired,
		setIsLoadingVisivel:	PropTypes.func.isRequired
}

export default useFetch