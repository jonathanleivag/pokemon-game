<template>
  <h1 v-if="!pokemon">Cargando....</h1>
  <div v-else>
    <h1>¿Quién es este Pokémon?</h1>
    <PokemonPictureVue :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptionsVue :pokemons="pokemons" @selector="checkAnswer" :toDisable="toDisable" />
    <template v-if="showAswer">
      <h2 class="fade-in"> {{message}} </h2>
      <button @click="next">Siguiente</button>
    </template>
  </div>
</template>

<script>
import PokemonOptionsVue from '../components/PokemonOptions.vue'
import PokemonPictureVue from '../components/PokemonPicture.vue'
import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
    components:{
        PokemonPictureVue,
        PokemonOptionsVue
    },
    data(){
      return {
        pokemons: [],
        pokemon: null,
        showPokemon: false,
        showAswer: false,
        message: null,
        toDisable: false
      }
    },
    methods: {
      async mixPokemonArray(){
        this.pokemons = await getPokemonOptions()
        const pokemonRandom = window.Math.floor(window.Math.random() * 4)
        this.pokemon = this.pokemons[pokemonRandom]
      },
      checkAnswer(pokemonId){
        this.showPokemon = true
        this.showAswer= true
        this.toDisable= true
        if(pokemonId === this.pokemon.id){
          this.message = `Correcto, es ${this.pokemon.name}`
        }else {
          this.message = `Oops, era ${this.pokemon.name}`
        }
      },
       next(){
        this.showPokemon = false
        this.showAswer= false
        this.pokemon = null
        this.toDisable= false
        this.pokemons = []
         this.mixPokemonArray()
       }
    },
    mounted(){
      this.mixPokemonArray()
    }
}
</script>

<style>

</style>