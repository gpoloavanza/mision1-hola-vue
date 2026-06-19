<template>
    <article>
        <label>
          <!-- Checkbox to toggle the task state -->
          <input 
              type="checkbox" 
              @input="emit('toggleDone', task.id)" 
              :checked="task.state"/>
                  
              <!-- Display the task title -->
            {{ task.title }}
        </label>

        <!-- Button to remove the task -->
        <button @click="emit('removeTask', task.id)">Eliminar</button>
    </article>
</template>

<script setup lang="ts">
import type { Task } from '../types'

// Gets a task from the parent component
defineProps<{
  task: Task
}>()

// Emits events to the parent component
const emit = defineEmits<{
  toggleDone: [id: number]
  removeTask: [id: number]
}>()
</script>

<style scoped>
  label {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    color: #333;
    font-weight: 500;
  }

  input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: goldenrod;
  }

  article {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
  padding: 12px;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  transition: all 0.3s ease;
  }

  article:hover {
  background-color: #f9f9f9;
  border-color: #bbb;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  }

  button {
    background-color: #e74c3c;
    color: black;
    border: none;
    padding: 8px 15px;
    font-size: 14px;
    cursor: pointer;
    border-radius: 5px;
    margin-left: auto;
  }

  button:hover {
    background-color: #c0392b;
  }
</style>