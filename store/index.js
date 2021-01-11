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
  CHANGE_USER(state , payload) {
    // console.log(payload.nome)
    state.user.nome = payload.nome
    state.user.senha = payload.senha
  },
  INCREMENT(state) {
    state.counter++
  },
  COMPLETAR_AULA(state) {
    state.aulasCompletas++
  }
}