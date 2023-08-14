class Tarefa {
  contato: string
  nome: string
  email: string
  telefone: number
  id: number
  criterio?: string

  constructor(
    contato: string,
    nome: string,
    email: string,
    criterio: string,
    telefone: number,
    id: number
  ) {
    this.nome = nome
    this.email = email
    this.telefone = telefone
    this.contato = contato
    this.criterio = criterio
    this.id = id
  }
}

export default Tarefa