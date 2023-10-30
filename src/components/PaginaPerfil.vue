<template>
  <v-app id="profile-page">
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" md="3">
            <v-sheet rounded="lg">
              <v-row>
                <v-col class="text-center">
                  <v-avatar size="100">
                    <img :src="user.avatar" alt="Profile Image" />
                  </v-avatar>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="text-center">
                  <h2>{{ user.name }}</h2>
                  <p>{{ user.title }}</p>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row>
                <v-col>
                  <v-list dense>
                    <v-list-item-group>
                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon>mdi-email</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title>{{
                            user.email
                          }}</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon>mdi-phone</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title>{{
                            user.phone
                          }}</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon>mdi-web</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title>{{
                            user.website
                          }}</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>

          <v-col cols="12" md="9">
            <v-sheet min-height="70vh" rounded="lg">
              <v-row>
                <v-col>
                  <h2>Sobre</h2>
                  <router-link :to="'/post/' + user.userId">
                    Ver Postagens
                  </router-link>

                  <p>{{ user.about }}</p>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row>
                <v-col>
                  <h2>Habilidades</h2>
                  <v-chip-group>
                    <v-chip
                      v-for="skill in user.skills"
                      :key="skill"
                      label
                      class="ma-2"
                    >
                      {{ skill }}
                    </v-chip>
                  </v-chip-group>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
export default {
  name: "UserProfile",
  data() {
    return {
      user: {
        userId: 1,
        name: "Jorginho",
        title: "A Vida é um jogo",
        email: "jorge@example.com",
        phone: "+1234567890",
        website: "www.jorge-website.com",
        about:
          "Jorge é um indivíduo fascinante que adora explorar o mundo e compartilhar suas experiências.",
        skills: ["Fotografia", "Aventura", "Escrita","Caça"],
        avatar: require("../assets/carasurpeso.png"),
      },
    };
  },
};
</script>
