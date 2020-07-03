<template>
  <div class="about">
    <h1>Adminsitración</h1>
    <b-table striped hover :items="traerComentarios" :fields="fields"></b-table>
  </div>
</template>
<script>
export default {
  name: 'Administracion',
  data() {
    return {
      fields: ['name', 'comentario'],
    }
  },
  computed: {
      traerComentarios(){
        return this.$store.getters.envioComentarios;
    }
  },
}
</script>

<style lang="scss" scoped>
/* $primary: #c24130;
$secondary: #6b1d37;
@import '../../node_modules/bootstrap/scss/bootstrap.scss'; */
</style>