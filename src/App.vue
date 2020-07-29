<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <NumeroMayorVuex />
  </div>
</template>

<script>

import NumeroMayorVuex from './components/NumeroMayorVuex.vue'

export default {
  name: 'App',
  components: {
    NumeroMayorVuex
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
