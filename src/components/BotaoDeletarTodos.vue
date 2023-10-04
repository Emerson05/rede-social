<template>
  <v-btn id="btn-delete" @click="deletarTodasMensagens">
    <v-icon >mdi-delete</v-icon>
    Deletar Publicações
  </v-btn>
</template>


<style>



</style>
<script>
export default {
  name: "BotaoDelete",
  methods: {
    deletarTodasMensagens() {
      this.$emit('deletar-todas-mensagens'); // Emitir o evento para o componente pai
    }
  },
};
</script>