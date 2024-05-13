import React from 'react'
import '../components/general/Theme.css'
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
			<Container width="80vw" height="85vh" flexDirection="column" justifyContent="start" padding="5dvh 0 0 0">

				{/* LINHA BANNER - LINGUAGEM + NUMERO EXERCICIO - BOTOES */}
        <Container width="80vw" height="10dvh" flexDirection="row" alignItems="center"> 
          <Container width="30vw" height="10dvh" flexDirection="row" alignItems="center">
            <div className='listaBanner'>
              <img src={Icon_exercicio} alt="..."></img>
              <h4> CSS - #0002 </h4>
            </div>
          </Container>

          <Container width="50vw" height="10dvh" flexDirection="row" alignItems="center" justifyContent="center">
            <div className='listaBannerBotoes'>
							<Link className='link'>
                <Button cor="branco" texto="&larr;"/>
              </Link>
              <Link className='link' to="/home/exercicios">
                <Button cor="azul" texto="Todos os Exercicios"/>
              </Link>
							<Link className='link'>
                <Button cor="branco" texto="&rarr;"/>
              </Link>
            </div>
          </Container>
        </Container>

				{/* LINHA ENUNCIADO */}
				<Container width="80vw" height="5dvh" flexDirection="row" alignItems="center">
					<h6>Mude a cor do texto para vermelho, para todos os elementos &lt;p&gt;</h6>
				</Container>

				{/* WRAPPER DO EXERCICIO */}
        <Container width="80vw" height="65dvh" flexDirection="column" alignItems="center" justifyContent="center">
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
				<Container width="80vw" height="10dvh" flexDirection="row" alignItems="end" justifyContent="start">
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