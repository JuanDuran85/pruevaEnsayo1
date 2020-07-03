<template>
  <div class="container">
      <div class="mt-5 pt-5">
        <b-card v-for="(item,index) in traerComentarios" :key="index"
            :title="item.name"
            :img-src="item.imgUrl"
            :img-alt="item.name"
            img-top
            tag="article"
            class="mb-2"
          >
            <b-card-text>
              {{item.comentario}}
            </b-card-text>

            <b-button variant="primary" class="mx-2">Like</b-button>
            <b-button variant="primary" target="_blank">Visitar Web</b-button>
          </b-card>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Articulos',
    data() {
        return {
            mostrarComentario: ''
        }
    },
    computed: {
        traerComentarios(){
           let comentarioSolo = this.$store.getters.envioComentarios.filter(dato=>dato.id === this.$route.params.id);
           return comentarioSolo
        }
    },
}
</script>

<style>

</style>