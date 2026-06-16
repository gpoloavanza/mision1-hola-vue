<script setup lang="ts">
import { ref } from 'vue'
const userName = ref('usuario')

function changeMessage() {
  userName.value = 'Gabi'
}

</script>

<template>
  <div class="container">
    <h1>Hola, {{ userName }}</h1>
    <button @click="changeMessage">Mostrar nombre</button>
  </div>
</template>

<style scoped>
  h1 {
    font-weight: bold;
    text-align: center;
    min-width: 200px;
    margin: 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
</style>
