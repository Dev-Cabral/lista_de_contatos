import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, editar } from '../../store/Reducers/tarefas'
import TarefaClass from '../../models/Tarefa'
import { Botao, BotaoSalvar } from '../../styles'

type Props = TarefaClass

const Tarefa = ({ id, nome, email, telefone }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [contato, setContato] = useState(nome)
  const [email1, setEmail1] = useState(email)
  const [telefone1, setTelefone1] = useState(telefone)

  useEffect(() => {
    if (contato.length > 0) {
      setContato(contato)
    } else if (email1.length > 0) {
      setEmail1(email1)
    } else if (telefone1 > 0) {
      setTelefone1(telefone1)
    }
  }, [contato, email1, telefone1])

  function cancelarEdicao() {
    setEstaEditando(false)
    setContato(nome)
  }

  return (
    <S.Card>
      <label htmlFor={contato}>
        <S.Titulo>
          {estaEditando && <em>Editando: </em>}
          {contato}
        </S.Titulo>
      </label>
      <S.Descricao
        disabled={!estaEditando}
        value={contato}
        onChange={(evento) => setContato(evento.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    contato: 'Contato',
                    id,
                    nome: contato,
                    email: email,
                    telefone: telefone,
                    criterio: ''
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
