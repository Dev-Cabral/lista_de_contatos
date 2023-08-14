import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, editar } from '../../store/Reducers/tarefas'
import TarefaClass from '../../models/Tarefa'
import { Botao, BotaoSalvar } from '../../styles'

type Props = TarefaClass

const Tarefa = ({ contato, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [contato2, setContato2] = useState('')

  useEffect(() => {
    if (contato.length > 0) {
      setContato2(contato)
    }
  }, [contato])

  function cancelarEdicao() {
    setEstaEditando(false)
    setContato2(contato2)
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
        onChange={(evento) => setContato2(evento.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    contato,
                    id,
                    nome: '',
                    email: '',
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
