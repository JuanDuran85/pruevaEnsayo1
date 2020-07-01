<template>
  <div>
    <lista-artistas></lista-artistas>
  </div>
</template>

<script>
// @ is an alias to /src
import ListaArtistas from '../components/ListaArtistas.vue';

export default {
  name: 'Artistas',
  components: {
    ListaArtistas
  }
}
</script>
