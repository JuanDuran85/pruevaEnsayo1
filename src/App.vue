<template>
  <div id="app">
    <div id="nav" class="bg-primary">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { conexionApi } from './config/configApi';

export default {
  name: 'App',
  mounted() {
    conexionApi();
  },
}
</script>

<style lang="scss">
:root{
--primary: #000000;
}
$body-bg: #000;
$body-color: #111;

@import '../node_modules/bootstrap/scss/bootstrap';
@import '../node_modules/bootstrap-vue/src/index.scss';
</style>
