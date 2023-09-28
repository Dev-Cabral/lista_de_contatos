class Contatos {
  contato?: string
  nome: string
  email: string
  telefone?: number
  id: number

  constructor(
    contato: string,
    nome: string,
    email: string,
    telefone: number,
    id: number
  ) {
    this.nome = nome
    this.email = email
    this.telefone = telefone
    this.contato = contato
    this.id = id
  }
}

export default Contatos
