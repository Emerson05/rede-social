<template>
  <v-app id="user-posts">
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="12" md="8">
            <v-sheet rounded="lg" min-height="268">
              <h2>Postagens</h2>
              
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
      userPosts: [   {
        id: 1,
        title: "Minha primeira postagem",
        userId: 1,
        author: "Jorginho",
      },
      {
        id: 2,
        title: "Aventuras na montanha",
        userId: 1,
        author: "Jorginho",
      },

      {
        id: 3,
        title: "Como fazer Lasanha",
        userId: 2,
        author: "Ana",
      },

      {
        id: 4,
        title: "Hoje é o meu aniversario quero bolo ",
        userId: 2,
        author: "Ana",
      },
      { id: 5, title: "Minhas férias na praia", userId: 2, author: "Ana", }, 
      { id: 6, title: "Reunião de negcios importante", userId: 2, author: "Ana", }, 
      { id: 7, title: "Novo projeto de marketing digital", userId: 3, author: "Junior", },
      { id: 8, title: "Construção da nova ponte na cidade", userId: 3, author: "Junior", }
       

      

],

      
    };
  },

 



  created() {
    console.log('Route params:', this.$route.params);
  const userId = parseInt(this.$route.params.id);
  if (!isNaN(userId)) {
    this.user.userId = userId;
    console.log('User ID:', userId);
  } else {
    console.error('Invalid userId');
  }

    
    const posts = [
      {
        id: 1,
        title: "Minha primeira postagem",
        userId: 1,
        author: "Jorginho",
      },
      {
        id: 2,
        title: "Aventuras na montanha",
        userId: 1,
        author: "Jorginho",
      },

      {
        id: 3,
        title: "Minha primeira postagem",
        userId: 2,
        author: "Ana",
      },

      {
        id: 4,
        title: "Hoje é o meu aniversario quero bolo ",
        userId: 2,
        author: "Ana",
      },
      { id: 5, title: "Minhas férias na praia", userId: 2, author: "Ana", }, 
      { id: 6, title: "Reunião de negcios importante", userId: 2, author: "Ana", }, 
      { id: 7, title: "Novo projeto de marketing digital", userId: 3, author: "Junior", },
      { id: 8, title: "Construção da nova ponte na cidade", userId: 3, author: "Junior", }

      



    ];

    

  this.user.userId = userId;




  this.userPosts = posts.filter((post) => post.userId === userId);
  

    this.$root.$emit('userPostsData', this.userPosts);


}


  
};

</script>
