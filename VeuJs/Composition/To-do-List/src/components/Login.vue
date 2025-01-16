<script setup>
import { GoogleAuthProvider } from 'firebase/auth'

import {
  signInWithPopup,
  signOut,
} from 'firebase/auth'

import { useCurrentUser, useFirebaseAuth } from 'vuefire'


const emit = defineEmits(['indicarUsuario'])
const googleAuthProvider = new GoogleAuthProvider()
const user = useCurrentUser()
const auth = useFirebaseAuth()

function inciarSesion(){
    signInWithPopup(auth, googleAuthProvider).then(
        (result)=>{
            console.log("Validacion Correcta");
            emit('indicarUsuario', result.user.email);
        }
    ).catch((reason) => {
        console.error('Failed sign', reason)
    })
}

function cerrarSesion(){
    signOut(auth).then(
        ()=>console.log("se ha cerrado la sesion")
    ).catch(
        (e)=>console.log("se ha producido un error" + e)
    )
}

</script>

<template>
    <div v-if="user">
        <p>Hola {{ user.displayName }}</p>
        <button @click="cerrarSesion">Cerrar Sesion</button>
        
    </div>
    <button v-else @click="inciarSesion">Inciar Sesion</button>


</template>

<style scoped></style>