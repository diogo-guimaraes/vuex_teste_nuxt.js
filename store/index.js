export const state = () => ({
   user: {
    id: "",
    nome: "Diogo",
    email: "",
    senha: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: ""
  },
  aulasCompletas: 10,
  counter: 0

})

export const mutations = {
  changeUser(state , payload) {
    state.user.nome = payload.nome
    state.user.senha = payload.senha
  },
  increment(state) {
    state.counter++
  },
  completarAula(state) {
    state.aulasCompletas++
  }
}