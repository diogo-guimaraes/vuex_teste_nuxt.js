<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        <p>{{user.nome}} </p>
        <label for="nome">Nome</label>
        <input id="nome" name="nome" type="text" v-model="novoUser">
      </h1>
      <div class="links">
        <button 
          @click="incrementClick"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          {{counter}}
        </button >
        <a
          @click="handleClick"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          {{user.nome}}, {{aulasCompletas}}, {{nomeMaiusculo}}
        </a>
         <a
          @click="completarAula"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          {{aulasCompletas}}
        </a>
        <button class="button--grey" @click="handleClick">Alterar Usuário</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  data(){
    return {
      nome: 'diogo',
      novoUser: ''
    }
  },  
  computed: {
    // user(){
    //   return this.$store.state.user
    // },
    // aulasCompletas(){
    //   return this.$store.state.aulasCompletas
    // },
    ...mapState([
      "user", "aulasCompletas", "counter"
    ]),
    nomeMaiusculo(){
      return this.nome.toUpperCase();
    }
  },
  methods: {
     handleClick() {
      // commit é utilizado para ativar a mutação.
      this.$store.commit("changeUser", this.novoUser);
    },
    incrementClick() {
      // commit é utilizado para ativar a mutação.
      this.$store.commit("increment");
    },
    completarAula(){
       this.$store.commit("completarAula");
    }
  },
  created(){

  }

}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
