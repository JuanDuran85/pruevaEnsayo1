<template>
  <div>
    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>

<script>
import { conexionApi } from './config/configApi';
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  mounted() {
    conexionApi();
  },
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
/* $primary: #454468;
$secondary: #2bcf26;
$info: #875644;
@import '../node_modules/bootstrap/scss/bootstrap.scss';  */
</style>
