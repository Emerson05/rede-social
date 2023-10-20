<template>
  <v-app id="user-posts">
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="12" md="8">
            <v-sheet rounded="lg" min-height="268">
              <h2>Postagens de {{ user.name }}</h2>
              
              <v-list>
                <v-list-item-group>
                  <v-list-item v-for="post in userPosts" :key="post.id">
                    <v-list-item-content>
                      <v-list-item-title>{{ post.title }}</v-list-item-title>
                      <v-list-item-subtitle>{{ post.author }}</v-list-item-subtitle>
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
  name: "UserPosts",
  data() {
    return {
      user: {
        userId: 1,
        name: "Jorge",
        title: "A Vida",
        email: "jorge@example.com",
        phone: "+1234567890",
        website: "www.jorge-website.com",
        about: "Jorge é um indivíduo fascinante que adora explorar o mundo e compartilhar suas experiências.",
        skills: ["Fotografia", "Aventura", "Escrita"],
        avatar: require("../assets/carasurpeso.png"),
      },
      userPosts: [],
    };
  },
  created() {
    const posts = [
      {
        id: 1,
        title: "Minha primeira postagem",
        userId: 1,
        author: "Jorge",
      },
      {
        id: 2,
        title: "Aventuras na montanha",
        userId: 1,
        author: "Jorge",
      },
      // Adicione mais postagens, se necessário
    ];
    
    // Obtém o id do usuário a partir dos parâmetros da rota
    const userId = parseInt(this.$route.params.id);
    this.user.userId = userId; // Atualiza o userId no objeto user

    // Filtra as postagens com base no id do usuário
    this.userPosts = posts.filter((post) => post.userId === userId);
  },
};
</script>
