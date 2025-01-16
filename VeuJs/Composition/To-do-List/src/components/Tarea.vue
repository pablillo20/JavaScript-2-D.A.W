<script setup>
defineProps(["titulo", "acabada", "prioridad"]);
defineEmits(["borrado", "completado", "prioridad"]);
</script>

<template>

  <div class="tarea">
    <h1 :class="{ tachado: acabada }">{{ titulo }}</h1>
    <div class="botones">
      <select :value="prioridad" v-on:change="$emit('prioridad', $event.target.value)">
        <option value="1">Baja</option>
        <option value="2">Media</option>
        <option value="3">Alta</option>
      </select>
      <button v-on:click="$emit('completado')">Completar Tarea</button>
      <button v-on:click="$emit('borrado')">Borrar</button>
    </div>
  </div>
  
</template>

<style scoped>
.tachado {
  text-decoration: line-through;
  color: gray;
}
.tarea {
  color: green;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fdfdfd;
  margin: 10px 0;
}

.botones {
  display: flex;
  gap: 10px;
}

button {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  opacity: 0.8;
}
</style>