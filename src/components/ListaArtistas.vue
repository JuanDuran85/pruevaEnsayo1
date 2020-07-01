<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" v-for="(item, index) in traerLista" :key="index">
          <b-card
            :title="item.name"
            :img-src="item.image[2]['#text']"
            :img-alt="item.name"
            img-top
            tag="article"
            class="mb-2"
          >
            <b-card-text>
              {{item.playcount}} <br>
              {{item.listeners}}
            </b-card-text>

            <b-button href="#" variant="primary" class="mx-2">Comentario</b-button>
            <b-button :href="item.url" variant="primary" target="_blank">Visitar Web</b-button>
          </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListaArtistas',
  computed: {
    traerLista(){
      return this.$store.getters.envioArtistas;
    }
  },
}
</script>

<style scoped lang="scss">

</style>
