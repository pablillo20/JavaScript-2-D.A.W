const app = Vue.createApp({
    data() {
        return{
            message : "Pruebas con Vue",
            texto : "Este es un texto",
            mostrarTexto : false,
            show : true,
            nombres : ["Juan", "Pedro", "Pablo"],
            contenidodelinput : "Escribe algo",
        }
    },
    methods: {
        btnPulsado(){
            this.nombres.push(this.contenidodelinput);
            this.contenidodelinput = "";
        },
        borrarElemento(pos){
            this.nombres.splice(pos, 1);
        }
        
    }
});

app.mount('#app');