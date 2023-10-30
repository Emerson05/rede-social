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
                    <img :src="currentUser.avatar" alt="Profile Image" />
                  </v-avatar>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="text-center">
                  <h2>{{ currentUser.name }}</h2>
                  <p>{{ currentUser.title }}</p>
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
                            currentUser.email
                          }}</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon>mdi-phone</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title>{{
                            currentUser.phone
                          }}</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon>mdi-web</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title>{{
                            currentUser.website
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
                  <p>{{ currentUser.about }}</p>

                  <router-link :to="'/post/' + currentUser.userId">
                    Ver Postagens
                  </router-link>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row>
                <v-col>
                  <h2>Habilidades</h2>
                  <v-chip-group>
                    <v-chip
                      v-for="skill in currentUser.skills"
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
      users: [
        {
          userId: 2,
          name: "Ana",
          title: "Profissional Multidisciplinar",
          email: "ana@example.com",
          phone: "+1234567890",
          website: "www.anaprofissional.com",
          about: "Profissional versátil com experiência em várias áreas.",
          skills: ["Gestão de Projetos", "Marketing Digital"],
          avatar: require("../assets/ana.png"),
        },
        {
          userId: 3,
          name: "Junior",
          title: "Engenheiro",
          email: "junioreng@Hotmail.com",
          phone: "+1234567890",
          website: "www.junioreng.com",
          about: "Profissional com experiência em engenharia.",
          skills: ["Engenharia Civil", "Engenharia Elétrica"],
          avatar: require("../assets/jorge.png"),
        },
      ],
      currentUser: null,
    };
  },
  methods: {
    loadUser(userId) {
      this.currentUser = this.users.find((user) => user.userId === userId);
    },
  },
  created() {
    // Carregar o usuário com base na rota
    this.loadUser(this.$route.params.id);
  },
};
</script>
  