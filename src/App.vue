<template>
    <!-- Receives the new task name from TaskForm -->
    <TaskForm @add-task="addTask"/>

    <!-- Passes tasks and computed totalDone to TaskList -->
    <TaskList :tasks="tasks" :total-done="totalDone" @toggle-done="toggleDone" @remove-task="removeTask"/>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, watch } from 'vue'
import TaskForm from './components/TaskForm.vue'
import TaskList from './components/TaskList.vue'
import type { Task } from './types'

// Reactive array of tasks
const tasks = ref<Task[]>([])

// Load tasks from LocalStorage when the app starts
onMounted(() => {
  const saved = localStorage.getItem('tasks')
  if (saved) {
    tasks.value = JSON.parse(saved)
  }
})

// Save tasks to LocalStorage whenever they change
watch(tasks, (newTasks) => {
  localStorage.setItem('tasks', JSON.stringify(newTasks))
}, { deep: true })

// Computed property: counts completed tasks
const totalDone = computed(() => tasks
    .value
    .reduce((total, task) => task.state ? total + 1 : total, 0))

// Add a new task to the list
function addTask(taskName: string) {
  tasks.value.push({
    id: Date.now(),
    title: taskName,
    state: false
  })
}

// Toggle the "done" state of a task
function toggleDone(id: number) {
  const task = tasks.value.find(task => task.id === id)
  if (task) {
    task.state = !task.state
  }
}

// Remove a task by ID
function removeTask(id: number) {
  const index = tasks.value.findIndex(task => task.id === id)
    if (index !== -1) {
        tasks.value.splice(index, 1)
    }
}
</script>

<style>
    #app {
        font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: black;
        margin-top: 60px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: center;
        width: 100%;
    }

    form button {
    background-color: goldenrod;
    color: black;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    align-self: end;
    }

    button:hover {
    background-color: darkorange;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        height: auto;
        min-height: 180px;
        background-color: #f5f5f5;
        border: 2px solid #ccc;
        border-radius: 10px;
        padding: 20px;
        width: 75%;
        margin: 0 auto 20px auto;
        box-sizing: border-box;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        margin-bottom: 50px;
    }

    .container:hover {
        border-color: goldenrod;
        box-shadow: 0 8px 25px rgba(218, 165, 32, 0.15);
    }

    h1 {
        font-weight: bold;
        text-align: left;
        margin: 0 0 20px 0;
        min-width: 200px;
        height: 40px;
        line-height: 40px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>