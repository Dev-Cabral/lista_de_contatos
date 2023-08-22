import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, editar } from '../../store/Reducers/tarefas'
import TarefaClass from '../../models/Tarefa'
import { Botao, BotaoSalvar } from '../../styles'

type Props = TarefaClass

const Tarefa = ({ id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [contato, setContato] = useState('')

  useEffect(() => {
    if (contato.length > 0) {
      setContato(contato)
    }
  }, [contato])

  function cancelarEdicao() {
    setEstaEditando(false)
    setContato(contato)
  }

  return (
    <S.Card>
      <label htmlFor={contato}>
        <input type="checkbox" id={contato} />
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
                    nome: 'Nome',
                    email: 'Email',
                    telefone: 0,
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
