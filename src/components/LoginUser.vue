<template>
  <v-form @submit.prevent="doLogin" class="form-login">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="4">
          <v-card>
            <v-card-title class="text-center">Rede Social Beyond</v-card-title>
            <v-card-text>
              <v-text-field
                v-model="email"
                label="E-mail"
                required
                outlined
                autocomplete="username"
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Senha"
                type="password"
                required
                outlined
                autocomplete="current-password"
              ></v-text-field>
            </v-card-text>
            <v-card-actions class="text-center"> <!-- Adicione a classe "text-center" aqui -->
              <v-btn class="content-center" color="primary" @click="doLogin">Entrar</v-btn><br>
            </v-card-actions>
            <div class="text-center">
              Não tem conta?<br>
              <router-link :to="{ name: 'registerUser' }">Clique aqui para Registrar</router-link>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { auth } from "@/config/firebase";
import {  signInWithEmailAndPassword } from 'firebase/auth';



export default {
  name: "LoginUsuario",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {

    
    async doLogin() {
  try {
    await signInWithEmailAndPassword(auth, this.email, this.password);

    
    if (auth.currentUser) {
      this.$router.push({ name: 'home' });
    } else {
      console.error('Usuario não está logado');
    }
  } catch (error) {
    console.error('Authentication error:', error);
  }
}

  }
};




</script>

<style scoped>
.form-login {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 18pt;
}
.card {
  width: 30%;
  color: var(--darker);
}
.link {
  color: var(--featured);
  text-decoration: none;
}

.registrar{
  margin-bottom: 20px;
  justify-content: center;
  justify-items: center;
}

</style>
