import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
// ... other firebase imports

export const firebaseApp = initializeApp({
  // your application settings
    apiKey: "AIzaSyDkdSxw7XAUwapssS5PYYoZWUCy9O6Q-Is",
    authDomain: "to-do-list-a10eb.firebaseapp.com",
    projectId: "to-do-list-a10eb",
    storageBucket: "to-do-list-a10eb.firebasestorage.app",
    messagingSenderId: "1002643638723",
    appId: "1:1002643638723:web:21fe68de2c3177b937d576",
    measurementId: "G-4KE1Q4359F"
})

// used for the firestore refs
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const recordatoriosRef = collection(db, 'recordatorios')