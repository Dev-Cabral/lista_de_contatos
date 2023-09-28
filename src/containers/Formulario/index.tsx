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
  const [telefone, setTelefone] = useState(0)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome: nome,
        email: email,
        telefone: telefone
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
          onChange={({ target }) => {
            const telefoneString = target.value
            const telefone = parseInt(telefoneString)
            setTelefone(telefone)
          }}
          type="number"
          placeholder="Telefone:"
        />
        <BotaoSalvar type="submit">Agendar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
