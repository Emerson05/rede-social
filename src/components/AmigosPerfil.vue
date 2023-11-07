<template>
  <v-app id="profile-page">
    <NavBar />
    <v-divider></v-divider>
    <v-row>
      <v-col>
       
        <v-list dense>
          <v-card>
            <v-card-title class="text-center">Amigos</v-card-title>
            <v-list-item v-for="friend in friends" :key="friend.userId">
              <v-list-item-avatar>
                <v-avatar size="40">
                  <img :src="friend.avatar" alt="Friend Image" />
                </v-avatar>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <router-link
                    :to="{ name: 'perfilAmigo', params: { id: friend.userId } }"
                    >{{ friend.name }}</router-link
                  >
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-list>
      </v-col>
    </v-row>
  </v-app>
</template>
  
  <script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "UserProfile",
  components: {
    NavBar,
  },
  data() {
    return {
      user: {
        userId: 1,
        name: "Nome do Usuário",
      },
      friends: [
        {
          userId: 2,
          name: "Ana",
          avatar: require("../assets/ana.png"),
        },
        {
          userId: 3,
          name: "Junior",
          avatar: require("../assets/jorge.png"),
        },
      ],
    };
  },
};
</script>

  
  