<template>
  <div class="container mt-5">
    <div class="row mt-5">
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

            <b-button v-b-modal="`modal-${item.name}`" variant="primary" class="mx-2">Comentario</b-button>
            <b-button :href="item.url" variant="primary" target="_blank">Visitar Web</b-button>
          </b-card>
          <div>
         
          <b-modal :id="`modal-${item.name}`" title="BootstrapVue" hide-footer>
            <h4>Comentario para: {{item.name}}</h4>
            <b-form-input v-model="comentario" placeholder="Comentario aquí"></b-form-input>
            <b-button class="mt-4" variant="outline-success" @click="datosComentario(item)">Guardar</b-button>
          </b-modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListaArtistas',
  data() {
    return {
      comentario: ''
    }
  },
  computed: {
    traerLista(){
      return this.$store.getters.envioArtistas;
    }
  },
  methods: {
    datosComentario(item){
      if (this.comentario.length >= 5) {
        let comenObejeto = {
          name: item.name,
          comentario: this.comentario,
          id: item.mbid,
          imgUrl: item.image[2]['#text']
        };
        this.$store.dispatch('GuardaComentario',comenObejeto);
        this.comentario = '';
        this.$router.push(`/articulos/${item.mbid}`);
      }
    }
  },
}
</script>

<style scoped lang="scss">

@import '../../node_modules/bootstrap/scss/bootstrap.scss'; 
</style>
