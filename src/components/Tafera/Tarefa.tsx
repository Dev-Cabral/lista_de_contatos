import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { remover, editar } from '../../store/Reducers/tarefas'
import { Botao, BotaoSalvar } from '../../styles'

export const Tarefa = ({ id, nome, email, telefone }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [contato, setContato] = useState({
    nome: nome,
    email: email,
    telefone: telefone
  })

  const handleChange = (propriedade: string, valor: string) => {
    setContato({
      ...contato,
      [propriedade]: valor
    })
  }

  const handleSalvar = () => {
    dispatch(
      editar({
        contato: JSON.stringify(contato),
        id,
        nome: contato.nome,
        email: contato.email,
        telefone: contato.telefone,
        criterio: ''
      })
    )
    setEstaEditando(false)
  }

  const handleCancelar = () => {
    setEstaEditando(false)
    setContato({
      nome,
      email,
      telefone
    })
  }

  return (
    <S.Card>
      <S.Titulo>
        {estaEditando && <em>Editando: </em>}
        {contato.nome}
      </S.Titulo>
      {estaEditando ? (
        <>
          <div>
            <input
              type="text"
              value={contato.nome}
              onChange={(e) => handleChange('nome', e.target.value)}
            />
            <input
              type="text"
              placeholder="E-mail"
              value={contato.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
            <input
              type="number"
              value={contato.telefone}
              onChange={(e) => handleChange('telefone', e.target.value)}
            />
            <BotaoSalvar onClick={handleSalvar}>Salvar</BotaoSalvar>
            <S.BotaoCancelarRemover onClick={handleCancelar}>
              Remover
            </S.BotaoCancelarRemover>
          </div>
        </>
      ) : (
        <div>
          <div>{contato.email}</div>
          <div>{contato.telefone}</div>
          <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
          <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
            Remover
          </S.BotaoCancelarRemover>
        </div>
      )}
    </S.Card>
  )
}
