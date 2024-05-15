import React, { useRef, useEffect } from 'react'
import '../components/general/Theme.css'
import './CriacaoExercicio.css'
import './ContainerBanner.css'
import Icon_exercicio from '../assets/icon_atv_exercicio.svg'
import Button from '../components/Button'
import ButtonVoltar from '../components/ButtonVoltar'
import Container from '../components/Container'
import InputInvisivel from '../components/InputInvisivel'

const CriacaoExercicio = () => {
  const divCodigo = useRef();

  const adicionarListeners = () => {
    let total_inputs = 10;

    for(let i = 0; i < total_inputs-1; i++){
      let input = divCodigo.current.childNodes[i];
      let proximo_input = divCodigo.current.childNodes[i+1]

      input.addEventListener('keydown', (e) => {
        if(e.key === 'Enter'){
          proximo_input.focus()
        }
      })
    }
  }
  
  useEffect(() => {
    adicionarListeners()
  }, [])

  return (
    <Container width="80vw" height="85vh" flexDirection="column" justifyContent="start" padding="5dvh 0 0 0">
      
      {/* LINHA BANNER - BOTAO VOLTAR - TEXTO NOVO EXERCICIO */}
      <Container width="80vw" height="10dvh" flexDirection="row" alignItems="center">
        <div className='listaBanner'>
          <ButtonVoltar />
          <img src={Icon_exercicio} alt="..."></img>
          <h3> Novo Exercicio </h3>
        </div>
      </Container>

      {/* LINHA ENUNCIADO + LINGUAGEM */}
      <Container width="80vw" height="5dvh" flexDirection="row" alignItems="center" gap="4rem">
        <Container width="60vw" height="5dvh" flexDirection="row" alignItems="center" justifyContent="start" gap="1rem">
          <label className='font_h5' htmlFor='input_enunciado'>Enunciado</label>
          <input className='font_h6 fillSpace' id='input_enunciado' />
        </Container>

        <Container width="20vw" height="5dvh" flexDirection="row" alignItems="center" justifyContent="start" gap="1rem">
          <label className='font_h5' htmlFor='select_linguagem'>Linguagem</label>
          <select className='font_h6 fillSpace' id="select_linguagem">
            <option value="CSS" selected>CSS</option>
            <option value="SQL">SQL</option>
          </select>
        </Container>
      </Container>

      {/* WRAPPER DO CODIGO DO EXERCICIO */}
      <Container width="80vw" height="55dvh" flexDirection="column" alignItems="center" justifyContent="center">
        <div ref={divCodigo} className='codigoCriarExercicio'>
          <InputInvisivel id="inputLinha1"/>
          <InputInvisivel id="inputLinha2"/>
          <InputInvisivel id="inputLinha3"/>
          <InputInvisivel id="inputLinha4"/>
          <InputInvisivel id="inputLinha5"/>
          <InputInvisivel id="inputLinha6"/>
          <InputInvisivel id="inputLinha7"/>
          <InputInvisivel id="inputLinha8"/>
          <InputInvisivel id="inputLinha9"/>
          <InputInvisivel id="inputLinha10"/>
        </div>
      </Container>

      {/* BOTOES DO EXER */}
      <Container width="80vw" height="10dvh" flexDirection="row" alignItems="center" justifyContent="space-between">
        <div className='lacunaRespostaBotoes'>
          <Button cor="branco" texto="Adicionar lacuna"/>
          <label className="font_h5" htmlFor='input_resposta'>Resposta</label>
          <input className="font_h6" type='text' />
        </div>
        <div>
          <Button cor="verde" texto="Criar Exercicio" />
        </div>
      </Container>

    </Container>
  )
}

export default CriacaoExercicio