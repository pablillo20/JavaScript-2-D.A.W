<script setup>
import { computed } from 'vue';

const props = defineProps(["contador"]);
const emit = defineEmits(["borrarCompletadas"]);

const numeroTareasPendientes = computed(() => {
  return props.contador.filter((el) => !el.acabada).length;
});

function borrarTareasCompletadas() {
  emit("borrarCompletadas");
}
</script>

<template>

  <span>
    {{ numeroTareasPendientes }} tareas pendientes
    <button @click="borrarTareasCompletadas">Borrar Tareas Completadas</button>
  </span>

</template>

<style scoped>

span {
  display: flex;
  align-items: center;
  gap: 10px;
}

button {
  padding: 5px 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #a71d2a;
}

</style>
