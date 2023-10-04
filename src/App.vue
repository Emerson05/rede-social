<template>
  <v-app>
    <v-main>
      <NavBar />
      <CardMensagem />
    </v-main>
  </v-app>
</template>

<style scoped>

</style>

<script>
import NavBar from "./components/NavBar.vue";
import CardMensagem from "./components/CardMensagen.vue";

export default {
  components: {
    NavBar,
    CardMensagem,

    // Register the component to use it in your template
  },
  data: () => ({
    Messages: [],
    novaMensagen: {
      name: "",
      text: "",
    },
    mensageneditada: {
      index: null,
      text: "",
    },

   
    dialog: false, // Indicates whether the edit dialog is open or closed
  }),

};
</script>