<template>
  <PaginaInicial />
</template>

<script>
import PaginaInicial from "@/components/PaginaInicial.vue";
export default {
  components: { PaginaInicial },
  data: () => ({}),

  created() {
  // Ouça o evento 'userPostsData' emitido pelo componente 'UserPosts'
  this.$root.$on('userPostsData', (userPosts) => {
    this.feedPosts = userPosts;
    console.log("Dados recebidos:", userPosts);
  });
}
};


</script>

