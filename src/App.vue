<template>
  <v-app>
    <v-main>
      <Navbar/>
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped>

</style>

<script>

import Navbar from "./components/NavBar";

export default {
  components: {
    Navbar
 


  },

};
</script>