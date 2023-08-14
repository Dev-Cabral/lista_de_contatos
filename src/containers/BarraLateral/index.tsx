import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/Reducers/filtro'
import * as S from './styles'

import { Botao, Campo } from '../../styles'

type Props = {
  mostrarFiltro: boolean
}

const BarraLateral = ({ mostrarFiltro }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltro ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar contatos"
              value={termo}
              onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
            />
          </>
        ) : (
          <Botao onClick={() => navigate('/')} type="button">
            Voltar a lista de contatos
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
