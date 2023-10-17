<template>
  <v-app>
    <v-main>
      <nav-bar/>
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped>

</style>

<script>

import NavBar from "./components/NavBar.vue";

export default {
  components: {

    NavBar

    
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

   
    dialog: false, 
  }),

};
</script>