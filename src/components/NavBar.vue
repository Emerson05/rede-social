<template>
  <v-app-bar app color="#FFC7EA" flat>
    <v-container>
      <v-row align="center" justify="space-between">
        <v-col cols="auto">
          <v-icon icon color="white">mdi-pyramid</v-icon>
        </v-col>
        <v-col cols="auto">
          <v-icon icon color="white">mdi-comment-quote</v-icon>
          <span class="mx-2">Publicações</span>
        </v-col>
        <v-col cols="auto">
          <v-icon color="white">mdi-menu</v-icon>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>




<script>
export default {
  name: "NavBar",
};
</script>