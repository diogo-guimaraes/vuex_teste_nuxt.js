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
  changeUser(state) {
    state.user.nome = "Ave"
  },
  increment(state) {
    state.counter++
  }
}