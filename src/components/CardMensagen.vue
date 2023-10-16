<template>
  <div>

   
    <v-app-bar app color="#FFC7EA" flat>
      <v-container class="py-2">
        <v-row align="center" justify="center">
          <v-col xs="12" md="6" class="text-center">        
            <v-icon icon color="white" class="mx-1">mdi-comment-quote</v-icon><strong>Publicações</strong>
            
          </v-col>
          <v-col xs="12" md="6" class="text-center">
            <BotaoDelete @deletar-todas-mensagens="deletarTodasMensagens" />
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    
    
    <div v-for="(message, index) in Messages" :key="index" class="message-card">
      <v-card :class= "message.name != 'Eu' ? 'teal' : 'purple'" class="card-with-margin">
        <v-card-subtitle class="font-weight-bold">{{
          message.name
        }}</v-card-subtitle>
        <v-card-text>{{ message.text }}</v-card-text>
        <v-btn @click="editarMensagen(message, index)">Editar</v-btn>
      </v-card>

     

    </div>
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title>Editar Mensagem</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="mensageneditada.text"
            label="Nova Mensagem"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="salvarMensagemEditada">Salvar</v-btn>
          <v-btn @click="cancelEdit">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-app-bar fixed bottom color="#FFC7EA">
      <v-text-field
        v-model="novaMensagen.name"
        solo
        hide-details
        label="Nome"
       
        
      ></v-text-field>
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
</template>
  

<style>
.card-with-margin {
  margin-top: 2em; 
  margin-left: 12vh;
  margin-right: 12vh;
}

strong{
  color: aliceblue;
}


</style>


  <script>
import BotaoDelete from "./BotaoDeletarTodos.vue";


export default {
  name: "MensagenCard",

  components: {
  
    BotaoDelete,

  
  },

  data: () => ({
    Messages: [],
    novaMensagen: {
      name: "",
      text: "",
    },
    mensageneditada: {
      index: null,
      text: "",
    },
    dialog: false,
  }),

  methods: {
    editarMensagen(message, index) {
      this.mensageneditada.index = index;
      this.mensageneditada.text = message.text;
      this.dialog = true;
    },
    salvarMensagemEditada() {
      if (this.mensageneditada.index !== null) {
        this.$set(this.Messages, this.mensageneditada.index, {
          name: this.Messages[this.mensageneditada.index].name,
          text: this.mensageneditada.text,
        });
        this.dialog = false;
      }
    },
    cancelEdit() {
      this.dialog = false;
      this.mensageneditada.index = null;
      this.mensageneditada.text = "";
    },

    deletarTodasMensagens() {
      this.Messages = []; // Limpar a array de mensagens para deletar todos os cards
    },

    adicionarMensagen() {
      if (this.novaMensagen.text && this.novaMensagen.name) {
        const message = {
          name: this.novaMensagen.name,
          text: this.novaMensagen.text,
        };
        this.Messages.push(message);
        this.novaMensagen.name = "";
        this.novaMensagen.text = "";
      } else {
        alert("Por favor, preencha todos os campos.");
      }
    },
  },
};
</script>