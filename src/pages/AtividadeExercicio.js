import React from 'react'
import '../components/general/Theme.css'
import '../components/general/DarkTheme.css'
import '../components/general/ContrastTheme.css'
import './ContainerBanner.css'
import './AtividadeExercicio.css'
import Container from '../components/Container'
import Icon_exercicio from '../assets/icon_atv_exercicio.svg'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import InputLacunaExercicio from '../components/InputLacunaExercicio'
import TabSpace from '../components/TabSpace'

const AtividadeExercicio = () => {
  return (
    <div className='atividadeExercicio'>
			<Container className="containerConteudoAtividadeExercicio" width="80vw" height="85vh" flexDirection="column" justifyContent="start" padding="5vh 0 0 0">

				{/* LINHA BANNER - LINGUAGEM + NUMERO EXERCICIO - BOTOES */}
        <Container className="divAtividadeExercBannerBotoes" width="80vw" height="10vh" flexDirection="row" alignItems="center"> 
          <Container width="30vw" height="10vh" flexDirection="row" alignItems="center">
            <div className='listaBanner'>
              <img className="imgIcone" src={Icon_exercicio} alt="..."/>
              <h4> CSS - #0002 </h4>
            </div>
          </Container>

          <Container width="50vw" height="10vh" flexDirection="row" alignItems="center" justifyContent="center">
            <div className='listaBannerBotoesAtvExercicio'>
							<Link className='link'>
                <Button cor="branco" texto="<"/>
              </Link>
              <Link className='link' to="/home/exercicios">
                <Button cor="azul" texto="Todos os Exercicios"/>
              </Link>
							<Link className='link'>
                <Button cor="branco" texto=">"/>
              </Link>
            </div>
          </Container>
        </Container>

				{/* LINHA ENUNCIADO */}
				<Container width="80vw" height="5vh" flexDirection="row" alignItems="center">
					<h6>Mude a cor do texto para vermelho, para todos os elementos &lt;p&gt;</h6>
				</Container>

				{/* WRAPPER DO EXERCICIO */}
        <Container width="80vw" height="65vh" flexDirection="column" alignItems="center" justifyContent="center">
					<div className='codigoRespostaExercicio'>
						<span className='linha'>
							<h6>{"<style>"}</h6>
						</span>

						<span className='linha'>
							<InputLacunaExercicio tamanho={1} />
							<h6>{"{"}</h6>
						</span>

						<span className='linha'>
							<TabSpace numEspacos={4} />
							<InputLacunaExercicio tamanho={5} />
							<h6>: red;</h6>
						</span>

						<span className='linha'>
							<h6>{"}"}</h6>
						</span>
						
						<span className='linha'>
							<h6>{"</style>"}</h6>
						</span>

						<span className='linha'>
							<h6>{"<body>"}</h6>
						</span>

						<span className='linha'>
							<TabSpace numEspacos={4} />
							<h6>{"<p> este é um parágrafo </p>"}</h6>
						</span>

						<span className='linha'>
							<h6>{"</body>"}</h6>
						</span>
					</div>
				</Container>

				{/* BOTOES DO EXER */}
				<Container width="80vw" height="10vh" flexDirection="row" alignItems="end" justifyContent="start">
					<div className='exercicioBotoes'>
						<Button cor="verde" texto="Responder"/>
						<Button cor="branco" texto="Vêr Resposta"/>
					</div>
				</Container>
			</Container>
    </div>
  )
}

export default AtividadeExercicio