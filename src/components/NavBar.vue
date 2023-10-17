<template>
  <v-app-bar app color="#FFC7EA" flat>
    <v-container>
      <v-btn color="white" class="mr-4">
        <router-link to="/" style="color: black; text-decoration: none">
          Página inicial
        </router-link>
      </v-btn>
      <v-btn color="white" class="mr-4">
        <router-link
          to="/mensagens"
          style="color: black; text-decoration: none"
        >
          Publicações
        </router-link>
      </v-btn>
      <v-btn color="white" class="mr-4">
        <router-link
          to="/perfil"
          style="color: black; text-decoration: none"
        >
        Perfil
      </router-link>
      </v-btn>
    </v-container>
  </v-app-bar>
</template>




<script>
export default {
  name: "NavBar",
};
</script>