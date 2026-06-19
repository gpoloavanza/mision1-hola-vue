<template>
    <div class="container">
        <h1>Añadir tareas</h1>

        <!-- The form prevents default submit behavior and calls formSubmitted() -->
        <form @submit.prevent="formSubmitted">
            <div class="form-group">
                <label for="taskName">Nueva Tarea</label>

                <!-- v-model binds the input value to the reactive ref 'taskName' -->
                <input 
                    v-model="taskName" 
                    type="text" id="taskName" 
                    placeholder="Nombre de la tarea" />
            </div>
            
            <!-- Button triggers the form submit event -->
            <button>Añadir tarea</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 'ref' is used because it's a primitive value (string).
const taskName = ref('')

// defineEmits declares the events this component can emit, like 'addTask'.
const emit = defineEmits<{
  addTask: [taskName: string]
}>()

// formSubmitted is called when the form is submitted. It emits the 'addTask' event with the task name and resets the input.
function formSubmitted() {
  const trimmedName = taskName.value.trim()
  if (trimmedName) {
  emit('addTask', trimmedName)
  taskName.value = ''
  }
}
</script>

<style scoped>
  .form-group {
    margin-bottom: 20px;
  }

  label {
    display: block;
    font-weight: 600;
    color: #333;
    margin-bottom: 8px;
    font-size: 14px;
    text-align: left;
  }

  input {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    box-sizing: border-box;
    transition: all 0.3s ease;
    font-family: inherit;
  }

  input:hover {
    border-color: #bbb;
  }

  input:focus {
    outline: none;
    border-color: goldenrod;
    box-shadow: 0 0 8px rgba(218, 165, 32, 0.4);
    background-color: #fffbf0;
  }

  input::placeholder {
    color: #bbb;
  }
</style>
