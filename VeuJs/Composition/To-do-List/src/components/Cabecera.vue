<script setup>
import {ref} from 'vue';

const emit = defineEmits(["altaRecordatorio"]);
var textoNuevaNota = ref("");

function nuevaNota(){
    emit("altaRecordatorio", textoNuevaNota.value);
    textoNuevaNota.value = "";
}

</script>

<template>

<h1>Cabecera</h1>

<input v-model="textoNuevaNota" placeholder="Añade la nota" @keyup.enter="nuevaNota"/>

</template>

<style scoped>
</style>
