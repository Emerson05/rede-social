<template>
  <div>
    <v-app-bar app class="custom-navbar" color="#FFC7EA" flat>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="d-sm-none "></v-app-bar-nav-icon>
      <router-link
        v-for="item in items"
        :to="`/${item.toLowerCase()}`"
        :key="item"
        class="custom-link"
      >
        <v-btn class="hide-on-small-screen custom-link">
          {{ item }}
        </v-btn>
      </router-link>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list nav dense class="v-list--dense  ">
        <v-list-item
          v-for="item in items"
          :key="item"
          
        >
          <router-link  :to="`/${item.toLowerCase()}` ">
            <v-btn class="mobile-link">{{ item }}</v-btn>
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<style scoped>
.custom-link {
  margin-left: 20px ;
  text-decoration: none;
 
}

.hide-on-small-screen {
  display: block;
}


@media (max-width: 600px) {
  .hide-on-small-screen {
    display: none;
  }
  .mobile-link{
    color: black;
    background-color: black;
  }
  .v-list--dense{
    color: black;
  }
}
</style>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [ "Perfil", "Publicacoes", "Amigos","Inicio"]
    }
  }
};
</script>
