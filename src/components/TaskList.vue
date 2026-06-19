<template>
    <div class="container">
        <div class="header">
            <h1>Lista de tareas</h1>

            <!-- Conditional message depending on whether there are tasks -->
            <h3 v-if="!props.tasks.length">Añade tu primera tarea</h3>
            
            <!-- Shows completed tasks count -->
            <h3 v-else>{{ props.totalDone }} / {{ props.tasks.length }} tareas completadas</h3>
        </div>

        <!-- Renders each task using TaskItem component -->
        <TaskItem 
            v-for="task in props.tasks" 
            :key="task.id" 
            :task="task"
            @toggle-done="emits('toggleDone', $event)"
            @remove-task="emits('removeTask', $event)"
        />
    </div>
</template>

<script setup lang="ts">
import type { Task } from '../types'
import TaskItem from './TaskItem.vue'

// Define the props received from the parent component (App.vue)
const props = defineProps<{
  tasks: Task[]
  totalDone: number
}>()

// Events emitted upward to App.vue
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
</style>
