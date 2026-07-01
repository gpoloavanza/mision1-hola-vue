<template>
    <button @click="buttonClick">Random</button>
</template>

<script setup lang="ts">
// Defining emits
const emit = defineEmits(['random']
)

// Function to trigger emit
function buttonClick() {
    emit('random')
}
</script>