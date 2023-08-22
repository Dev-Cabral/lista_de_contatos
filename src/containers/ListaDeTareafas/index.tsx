import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tafera'
import { MainContainer, Titulo } from '../../styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, contato, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (itens) => itens.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (contato === 'nome') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.nome === valor
        )
      } else if (contato === 'email') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.email === valor
        )
      }
      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const exibeResultadoFiltrado = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0
        ? `e
      "${termo}"`
        : ''

    if (contato === 'todas') {
      mensagem = `${quantidade} contato(s) encontrada(s)  com: todas ${complementacao}`
    } else {
      mensagem = `${quantidade} contato(s) encontrada(s) como: "${`${contato}=${valor}`}" ${complementacao}`
    }
    return mensagem
  }

  const tarefas = filtraTarefas()
  const mensagem = exibeResultadoFiltrado(tarefas.length)
  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {tarefas.map((t) => (
          <li key={t.nome}>
            <Tarefa
              id={t.id}
              contato={'contato'}
              nome={'contato'}
              email={''}
              telefone={0}
              criterio={''}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeTarefas
