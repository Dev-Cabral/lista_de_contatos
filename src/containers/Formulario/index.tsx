import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form } from './styles'
import { cadastrar } from '../../store/Reducers/tarefas'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome: '',
        email: '',
        telefone: 0,
        contato: '',
        criterio: ''
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo contato</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          required
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome Completo:"
        />
        <Campo
          required
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="text"
          placeholder="E-mail:"
        />
        <Campo
          required
          value={telefone}
          onChange={({ target }) => setTelefone(target.value)}
          type="number"
          placeholder="Telefone:"
        />
        <BotaoSalvar type="submit">Agendar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
