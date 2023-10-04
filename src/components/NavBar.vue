<template>
  <v-app-bar app color="#FFC7EA" flat>
    <v-container id="cont" class="py-0 fill-height">
      <v-icon  icon color="white" class="cont">mdi-pyramid</v-icon>
      <div class="mx-4">
        <v-icon  icon color="white" class="mx-1">mdi-comment-quote</v-icon>Publicações
      </div>
    </v-container>
  </v-app-bar>
</template> 

<style>
#cont {
  color: aliceblue;
}

</style>

<script>
export default {
  name: "NavBar",
};
</script>