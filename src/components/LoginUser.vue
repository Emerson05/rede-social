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
            <v-card-actions>
              <v-btn color="primary" @click="doLogin">Entrar</v-btn>
              <span class="mt-4"
                >Não tem conta?
                <router-link :to="{ name: 'registerUser' }"
                  >Clique aqui para Registrar</router-link
                ></span
              >
            </v-card-actions>
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
    console.log("Autenticado com sucesso");

    this.$router.push({ name: 'home' });
  } catch (error) {
    console.error("Erro de autenticação:", error);
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
</style>
