<template>
  <PokemonPageVue />
</template>

<script>
import PokemonPageVue from './pages/PokemonPage.vue'

export default {
  name: 'App',
  components: {
    PokemonPageVue
  }
}
</script>

<style>

@import url('./assets/fonts/fonts.css');

html, body {
    background-color: #f1f1f1;
    margin: 0px;
}

#app {
  font-family: Pokemon Hollow, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .fade-in {
    animation: fadeIn 0.3s;
    -webkit-animation: fadeIn 0.3s;
    -moz-animation: fadeIn 0.3s;
    -o-animation: fadeIn 0.3s;
    -ms-animation: fadeIn 0.3s;
  }
  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  
  @-moz-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  
  @-webkit-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  
  @-o-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  
  @-ms-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  
</style>
