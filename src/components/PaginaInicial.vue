

<template>
  <v-app id="inspire">
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <!-- Seção de postagens -->
          <!-- Seção de feed -->
          <v-col cols="12" sm="8">
            <v-sheet min-height="70vh" rounded="lg">
              <h2>Feed</h2>
              <div v-for="post in feedPosts" :key="post.id">
                <v-list>
                  <v-list-item-group>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>{{ post.author }}</v-list-item-title>
                        <v-list-item-subtitle>{{ post.title }}</v-list-item-subtitle>
                        <p>{{ post.content }}</p>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </div>
            </v-sheet>
          </v-col>

          <!-- Include UserPosts component to display user's posts -->
          <v-col cols="12" sm="4">
            <UserPosts @user-posts-updated="updateFeedPosts" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
import UserPosts from "@/components/PublicacoesUser.vue";
export default {
  name: "PaginaInicial",
  components: {
  UserPosts,
},
  data() {
    return {
      feedPosts: [
      {
        id: 1,
        title: "Minha primeira postagem",
        userId: 1,
        author: "Jorginho",
        content: "E aqui estou eu, dando os primeiros passos no mundo das redes sociais e compartilhando minha primeira postagem. É uma mistura de empolgação e nervosismo, mas estou animado para começar esta jornada de compartilhar minhas ideias, experiências e paixões com todos vocês."
       
      },
      {
        id: 2,
        title: "Aventuras na montanha",
        userId: 1,
        author: "Jorginho",
        content: "Ao longo das próximas semanas, vou compartilhar fotos, histórias e aprendizados das minhas aventuras. Desde trilhas desafiadoras até acampamentos sob um céu estrelado, espero inspirar todos a conectarem-se com a natureza e buscarem aventuras que alimentem a alma."
      },

      {
        id: 3,
        title: "Como fazer Lasanha",
        userId: 2,
        author: "Ana",
        content: "Prepare um molho de carne com cebola, alho e tomate. Em uma tigela, misture ricota, queijo mussarela e parmesão. Monte camadas alternadas de massa, molho de carne e a mistura de queijo em um prato refratário. Cubra com queijo mussarela ralado e asse a 180°C por cerca de 30 minutos. Sirva e aproveite!"
      },

        
      ],
    };
  },
};
</script>

<style scoped>

</style>
