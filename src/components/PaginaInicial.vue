<template>
  <v-app id="inspire">
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <!-- Seção de postagens -->
          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268">
              <h2>Postagens</h2>
              <!-- Lista de postagens -->
              <v-list>
                <v-list-item-group>
                  <v-list-item v-for="post in posts" :key="post.id">
                    <v-list-item-content>
                      <v-list-item-title>{{ post.title }}</v-list-item-title>
                      <v-list-item-subtitle>{{ post.author }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-sheet>
          </v-col>

          <!-- Seção de feed -->
          <v-col cols="12" sm="8">
            <v-sheet min-height="70vh" rounded="lg">
              <h2>Feed</h2>
              <!-- Lista de posts no feed -->
              <v-list>
                <v-list-item-group>
                  <v-list-item v-for="feedPost in feedPosts" :key="feedPost.id">
                    <v-list-item-content>
                      <v-list-item-title>{{ feedPost.title }}</v-list-item-title>
                      <v-list-item-subtitle>{{ feedPost.author }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-sheet>
          </v-col>

          <!-- Seção de recomendações -->
          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268">
              <h2>Recomendações</h2>
              <!-- Lista de recomendações -->
              <v-list>
                <v-list-item-group>
                  <v-list-item v-for="recomendacao in recomendacoes" :key="recomendacao.id">
                    <v-list-item-content>
                      <v-list-item-title>{{ recomendacao.name }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "PaginaInicial",
  data() {
    return {
      posts: [
        { id: 1, title: "Postagem 1", author: "Jorginho" },
        { id: 2, title: "Postagem 2", author: "Ana" },
        
      ],
      feedPosts: [
        { id: 1, title: "Postagem no Feed 1", author: "Jorginho" },
        { id: 2, title: "Postagem no Feed 2", author: "Ana" },
        
      ],
      recomendacoes: [
        { id: 1, name: "Recomendação 1" },
        { id: 2, name: "Recomendação 2" },
        
      ],
    };
  },
};
</script>

<style scoped>

</style>
