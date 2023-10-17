
<template>
   <v-app id="inspire">
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-app-bar color="teal white--text" class="barrapPubli"> 
              <v-avatar class="mr-2" size="50">
                        <img src="../assets/jorginho.png">
              </v-avatar>
                Jorginho <br> Hoje eu conseguir comprar meu primeiro carro
              </v-app-bar>
            <v-sheet min-height="50vh" rounded="lg"  >
              <div  class="message-card">
               
                <div 
                  v-for="(message, index) in Messages"
                  :key="index"
                  class=" message-card "
                >
                  <v-card 
                    :class="message.name !== 'Eu' ? 'teal' : 'pink accent-1'"
                    outlined class="mx-auto my-8" 
                  >
                    <v-card-subtitle class="white--text">{{
                      message.name
                    }}</v-card-subtitle>
                    <v-card-text class="white--text">{{ message.text }}</v-card-text>
                  </v-card>
                </div>

                <v-app-bar fixed bottom color="#FFC7EA">
                  <v-text-field
                    v-model="novaMensagen.text"
                    solo
                    hide-details
                    label="Mensagem"
                  ></v-text-field>
                  <v-btn @click="adicionarMensagen" icon color="white">
                    <v-icon>mdi-send</v-icon>
                  </v-btn>
                </v-app-bar>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>



<style>
.card-with-margin {
  margin-top: 2em;
  margin-left: 12vh;
  margin-right: 12vh;
}

strong {
  color: aliceblue;
}
</style>
  <script>

export default {
  name: "MensagenCard",

  components: {
    
  },

  data: () => ({
    Messages: [
      { name: "Ana", text: " Parabéns pela conquista do seu novo carro! Que ele te traga muitas aventuras e momentos inesquecíveis. Estou muito feliz por você" },
      { name: "Rafaelo o Grande", text: " Nada como a sensação de dirigir um carro novo! Parabéns pela sua nova conquista. Que cada quilômetro seja repleto de alegria e realizações." },
      

    ],
    novaMensagen: {
      name: "Eu",
      text: "",
    },
  }),

  methods: {
    deletarTodasMensagens() {
      this.Messages = []; // Limpar a array de mensagens para deletar todos os cards
    },

    adicionarMensagen() {
      if (this.novaMensagen.text) {
        const message = {
          name: this.novaMensagen.name,
          text: this.novaMensagen.text,
        };
        this.Messages.push(message);
        this.novaMensagen.name = "Eu";
        this.novaMensagen.text = "";
      } else {
        alert("Por favor, preencha todos os campos.");
      }
    },
  },
};
</script>