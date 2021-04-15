<!-- Html mall, vår layout och design av html -->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- Vue komponent som injeceras här -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<!-- Placerar logik i script elementet --->
<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
};
</script>

<!-- Här skapar vi våra CSS element -->
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
