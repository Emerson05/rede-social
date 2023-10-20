<template>
    <v-app id="profile-page">
      <!-- Resto do seu código de template -->
      <v-divider></v-divider>
      <v-row>
        <v-col>
          <h2>Amigos</h2>
          <v-list dense>
            <v-list-item v-for="friend in friends" :key="friend.userId">
              <v-list-item-avatar>
                <v-avatar size="40">
                  <img :src="friend.avatar" alt="Friend Image" />
                </v-avatar>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <router-link :to="{ name: 'perfilAmigo', params: { id: friend.userId } }">{{ friend.name }}</router-link>
                 

                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-app>
  </template>
  
  <script>
  export default {
    name: "UserProfile",
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
            avatar: require("../assets/ana.png")
            
          },
          {
            userId: 3,
            name: "Junior",
            avatar: require("../assets/jorge.png")
            
          },
          
        ],
      };
    },
  };
  </script>

  
  