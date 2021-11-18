<template>
  <div>
    <h1>Lista de tareas</h1>
    <ul>
      <li v-for="(item, index) in tasks" :key="index">
        {{ item }} <button @click="deleteTask(index)">Eliminar</button>
      </li>
    </ul>
    <label>Agregar Tarea</label>
    <p>
      <input
        type="text"
        name="addTask"
        v-model="task"
        @keypress.enter="addTask"
      />
      <button @click="addTask">Agregar tarea</button>
    </p>
  </div>
</template>

<script>
import useTodo from "@/composables/useTodo";

export default {
  name: "TodoList",

  setup() {
    const { task, tasks, addTask, deleteTask } = useTodo();
    return { task, tasks, addTask, deleteTask };
  },
};
</script>