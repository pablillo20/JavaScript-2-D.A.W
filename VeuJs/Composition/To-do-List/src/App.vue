<script setup>
import { ref } from 'vue';
import Cabecera from './components/Cabecera.vue';
import Tarea from './components/Tarea.vue';
import ResumenTarea from './components/ResumenTarea.vue';
import Login from './components/Login.vue';
import { useCollection, useFirestore } from 'vuefire';
import { collection, addDoc, query, orderBy, deleteDoc, doc, setDoc } from 'firebase/firestore';

const db = useFirestore();
var user = JSON.parse(localStorage.getItem('usuario')) || '';
var listaRecordatorios = useCollection( query(collection(db, 'recordatorios'), orderBy('prioridad', 'desc')));

function indicarUsuario(usuario){
  localStorage.setItem('usuario',JSON.stringify(usuario));
  user = usuario; 
}

function nuevaNota(texto){
  console.log("recibe");

  let notaNueva = {
    usuario: user,
    titulo:texto,
    prioridad: 1,
    fechaCreacion : 0,
    acabada: false
  }

  addDoc(collection(db, 'recordatorios'), notaNueva).then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
  }).catch((error) => {
    console.error("Error: ", error);
  });

  ordenarTareas();
}

function borrarTarea(pos){

  var tarea = listaRecordatorios.value[pos];
   deleteDoc(doc(db, 'recordatorios', tarea.id)).then(() => {
    tarea.splice(pos,1);
   }).catch((error) => {
    console.error("Error: ", error);
  });
}

function CompletarTarea(pos){
  
 setDoc(doc(db, 'recordatorios', listaRecordatorios.value[pos].id), {
    acabada: !listaRecordatorios.value[pos].acabada
  }, { merge: true });
}

function borrarTareasCompletadas() {
 listaRecordatorios.value.forEach((tarea, pos) => {
   if (tarea.acabada) {
    borrarTarea(pos);
   }
 });
}

function cambiarPrioridad(pos, nuevaPrioridad) {
  setDoc(doc(db, 'recordatorios', listaRecordatorios.value[pos].id), {
    prioridad: parseInt(nuevaPrioridad)
  }, { merge: true });
}

</script>

<template>

  <Login @indicarUsuario="indicarUsuario"></Login>

  <cabecera 
    v-on:alta-recordatorio="nuevaNota"
  ></cabecera>

  <ResumenTarea
    :contador="listaRecordatorios"
    v-on:borrarCompletadas="borrarTareasCompletadas"
  ></ResumenTarea>
  
  <tarea
    v-for="(tarea, posicion) in listaRecordatorios"
    :key="posicion"
    :titulo="tarea.titulo"
    :acabada="tarea.acabada"
    :prioridad="tarea.prioridad"
    v-on:borrado="borrarTarea(posicion)"
    v-on:completado="CompletarTarea(posicion)"
    v-on:prioridad="cambiarPrioridad(posicion, $event)"
  ></tarea>

</template>

<style scoped>


</style>
