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
export default {
  name: "RegistroUsuario",
  data: () => {
    return {
      loading: false,
      email: "",
      password: "",
      registrationPassword: "",
    };
  },
  methods: {
    async register() {
      this.loading = true;
      const { email, password, registrationPassword } = this;

      try {
        if (password === registrationPassword) {
          const res = await this.$firebase
            .auth()
            .createUserWithEmailAndPassword(email, password);

          window.uid = res.user.uid;

          this.$router.push({ name: "home" });
        } else {
          let message = "Senhas diferentes, por favor, tente de novo.";
          this.$root.$emit("Notification::show", {
            message,
            type: "danger",
          });
          this.password = ""; // Limpa o input de senha
          this.registrationPassword = ""; // Limpa o input de senha
        }
      } catch (err) {
        let message = "";

        switch (err.code) {
          case "auth/email-already-in-use":
            message = "O endereço de e-mail já está em uso por outra conta.";
            this.email = ""; // Limpa o input de E-mail
            break;
          case "auth/wrong-password":
            message = "Senha inválida";
            break;
          default:
            message = "Não foi possível criar a conta, tente novamente";
        }

        this.$root.$emit("Notification::show", {
          message,
          type: "danger",
        });
      }

      this.loading = false;
    },
  },
};
</script>
  