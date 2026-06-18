<template>
    <div class="container">
        <div class="header">
            <h1>Lista de tareas</h1>
            <h3 v-if="!props.tasks.length">Añade tu primera tarea</h3>
            <h3 v-else>{{ props.totalDone }} / {{ props.tasks.length }} tareas completadas</h3>
        </div>

        <article v-for="task in props.tasks" :key="task.id">
            <label>
                <input type="checkbox" @input="emits('toggleDone', task.id)" :checked="task.state"/>
                {{ task.title }}
            </label>
        
        <button @click="emits('removeTask', task.id)">Eliminar</button>
        </article>
    </div>
</template>

<script setup lang="ts">
import type { Task } from '../types'
const props = defineProps<{
  tasks: Task[]
  totalDone: number
}>()

const emits = defineEmits<{
  toggleDone: [id: number]
  removeTask: [id: number]
}>()
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    width: 100%;
  }

  h1 {
    margin: 0;
    flex: 1;
  }

  h3 {
    margin: 0;
    white-space: nowrap;
  }

  label {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 10px;
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
