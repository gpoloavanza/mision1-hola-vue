<template>
    <TrainerForm />
    <PokemonCard :image="pokemon.image" :name="pokemon.name" :types="pokemon.types" />
    <!-- v-on directive calling @random from RandomButton.vue -->
    <RandomButton @random="randomPokemon" />
</template>

<script setup lang="ts">
// Importing ref for reactive variables and onMounted
import { ref, onMounted } from 'vue';

// Importing components
import TrainerForm from './components/TrainerForm.vue';
import PokemonCard from './components/PokemonCard.vue';
import RandomButton from './components/RandomButton.vue';
import type { PokemonResponse } from './interfaces/pokemon'

// Importing axios function for API calls
import axios from 'axios';

// Pokemon reactive variable to save image, name and types into PokemonCard
const pokemon = ref({
    image: '',
    name: '',
    types: [] as string[]
})

// Importing API_URL from .env
const API_URL = import.meta.env.VITE_API_URL

// Axios function for getPokemon()
async function getPokemon(id: number) {
    // axios API call through the PokemonResponse interface and the API_URL + id
    const response = await axios.get<PokemonResponse>(`${API_URL}/${id}`)

    // Taking the image and name from the response and saving it into the pokemon reactive variable
    pokemon.value.image = response.data.sprites.front_default
    pokemon.value.name = response.data.name

    // Mapping the types from the response and saving it into the pokemon reactive variable
    const types = response.data.types.map(pokemonType => pokemonType.type.name)
    pokemon.value.types = types
}

// Function to get a random pokemon Id 
async function randomPokemon() {
    const randomId = Math.floor(Math.random() * 1025) + 1
    await getPokemon(randomId)

}

// When the component is mounted, it will execute randomPokemon()
onMounted(() => {
    randomPokemon()
})
</script>