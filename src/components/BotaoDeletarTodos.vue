<template>
  <v-btn  block id="btn-delete" @click="deletarTodasMensagens">
    <v-icon >mdi-delete</v-icon>Apagar</v-btn>
</template>
<style scoped>
.btn-delete {
  width: 50%; 
}
</style>
<script>
export default {
  name: "BotaoDeleteTodos",
  methods: {
    deletarTodasMensagens() {
      this.$emit('deletar-todas-mensagens'); // Emitir o evento para o componente pai
    }
  },
};
</script>