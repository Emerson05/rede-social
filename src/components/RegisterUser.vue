<template>
  <v-form @submit.prevent="register" class="form-login">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="4">
          <v-card>
            <v-card-title class="text-center">Registrar</v-card-title>
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
              <v-btn color="primary" :disabled="loading" @click="register">
                <template v-if="loading">
                  Registrando...
                  <v-icon class="fa fa-spinner fa-spin"></v-icon>
                </template>
                <template v-else>
                  Registrar
                  <v-icon class="fas fa-user-plus"></v-icon>
                </template>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
  
  
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
</style>
  
<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyARK10x8iaawHfaqmDSVEwy1uC3nJDZjQs",
  authDomain: "redesocial-e2e56.firebaseapp.com",
  projectId: "redesocial-e2e56",
  storageBucket: "redesocial-e2e56.appspot.com",
  messagingSenderId: "922165985209",
  appId: "1:922165985209:web:4929ab920dc0de9ad7c068",
  measurementId: "G-BTG06W7W47"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export default {
  name: "RegistroUsuario",
  data() {
    return {
      email: "",
      password: "",
      loading: false,
    };
  },
  methods: {
    async register() {
      try {
        this.loading = true;
      
        await createUserWithEmailAndPassword(auth, this.email, this.password);
       
        console.log("Usuário registrado com sucesso!");
        this.$router.push({ name: 'login' });
       
        this.email = "";
        this.password = "";
      } catch (error) {
        console.error("Erro ao registrar o usuário:", error.message);
      } finally {
        this.loading = false;
      }
    },
  },
  created() {
    // Check if the user is already authenticated
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is logged in, you can perform actions here
      } else {
        // User is not logged in
      }
    });
  },
};
</script>