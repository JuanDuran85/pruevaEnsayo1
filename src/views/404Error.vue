<template>
  <div>
      <img :src="imgError" alt="error">
  </div>
</template>

<script>
//import Error404 from '../assets/img/404.png';

export default {
    name: '404Error',
    data() {
        return {
            imgError: require('../assets/img/404.png')
        }
    },
}
</script>

<style>

</style>