import { useSelector } from 'react-redux'

import { Tarefa1 } from '../../components/Tafera/Tarefa'
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

    if (contato === 'todas') {
      mensagem = `${quantidade} contato(s) encontrada(s)`
    } else {
      mensagem = `${quantidade} contato(s) encontrada(s) `
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
            <Tarefa1
              id={t.id}
              contato={t.contato}
              nome={t.nome}
              email={t.email}
              telefone={t.telefone}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeTarefas
