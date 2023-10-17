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
                    <img src="../assets/jorginho.png" alt="Profile Image">
                  </v-avatar>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="text-center">
                  <h2>{{ userProfile.name }}</h2>
                  <p>{{ userProfile.title }}</p>
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
                          <v-list-item-title>{{ userProfile.email }}</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon>mdi-phone</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title>{{ userProfile.phone }}</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon>mdi-web</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title>{{ userProfile.website }}</v-list-item-title>
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
                  <p>{{ userProfile.about }}</p>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row>
                <v-col>
                  <h2>Habilidades</h2>
                  <v-chip-group>
                    <v-chip v-for="skill in userProfile.skills" :key="skill" label class="ma-2">
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
  name: "ProfilePage",
  data() {
    return {
      userProfile: {
        name: "Jorginho Da Vila",
        title: "Software Developer",
        email: "jorginho@hotmail.com",
        phone: "+1234567890",
        website: "www.jorginhodavila.com",
        about: "Sou um desenvolvedor de software apaixonado, com experiência em desenvolvimento web e forte conhecimento em JavaScript e tecnologias relacionadas.",
        skills: ["JavaScript", "Vue.js", "HTML", "CSS", "Node.js", "SQL"]
      },
    };
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
