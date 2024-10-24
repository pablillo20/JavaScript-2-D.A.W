// Clase para el juego Tres en Raya
class TresEnRaya {
    constructor() {
        // Inicializar el tablero como un array de 3x3 lleno de cadenas vacías
        this.tablero = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        this.jugadorActual = 'X';
        this.juegoTerminado = false;
    }


    mostrarTablero() {
        console.clear(); // Limpia la consola antes de mostrar
        console.log('Tablero:');
        for (let fila of this.tablero) {
            console.log(fila.join(' | ')); // Imprime cada fila del tablero
        }
        console.log(`Turno de: ${this.jugadorActual}`); // Indica de quién es el turno
    }

    hacerMovimiento(fila, columna) {
        // Verificar si el juego ha terminado
        if (this.juegoTerminado) {
            console.log('El juego ha terminado. Reinicia para jugar de nuevo.');
            return;
        }

        // Verificar si la casilla está vacía
        if (this.tablero[fila][columna] === '') {
            this.tablero[fila][columna] = this.jugadorActual; // Marcar la casilla con el jugador actual
            this.mostrarTablero(); // Mostrar el tablero después del movimiento

            // Verificar si hay un ganador
            if (this.verificarGanador()) {
                console.log(`¡El jugador ${this.jugadorActual} ha ganado!`);
                this.juegoTerminado = true; // Termina el juego
            } else if (this.verificarEmpate()) {
                console.log('¡Es un empate!');
                this.juegoTerminado = true; // Termina el juego
            } else {
                this.cambiarTurno(); // Cambiar al siguiente jugador
            }
        } else {
            console.log('Casilla ocupada. Elige otra.');
        }
    }


    cambiarTurno() {
        this.jugadorActual = this.jugadorActual === 'X' ? 'O' : 'X';
    }


    verificarGanador() {
        // Comprobar filas
        for (let i = 0; i < 3; i++) {
            if (this.tablero[i][0] === this.tablero[i][1] && this.tablero[i][1] === this.tablero[i][2] && this.tablero[i][0] !== '') {
                return true; // Hay un ganador en fila
            }
        }

        // Comprobar columnas
        for (let i = 0; i < 3; i++) {
            if (this.tablero[0][i] === this.tablero[1][i] && this.tablero[1][i] === this.tablero[2][i] && this.tablero[0][i] !== '') {
                return true; // Hay un ganador en columna
            }
        }

        // Comprobar diagonales
        if (this.tablero[0][0] === this.tablero[1][1] && this.tablero[1][1] === this.tablero[2][2] && this.tablero[0][0] !== '') {
            return true; // Hay un ganador en diagonal
        }
        if (this.tablero[0][2] === this.tablero[1][1] && this.tablero[1][1] === this.tablero[2][0] && this.tablero[0][2] !== '') {
            return true; // Hay un ganador en diagonal
        }

        return false; // No hay ganador
    }


    verificarEmpate() {
        // Verificar si todas las casillas están ocupadas
        return this.tablero.every(fila => fila.every(casilla => casilla !== ''));
    }
}


const juego = new TresEnRaya();
juego.mostrarTablero(); // Mostrar el tablero inicial

// Ejemplo de cómo jugar (puedes hacer llamadas a estos métodos en la consola)
juego.hacerMovimiento(0, 0); // Jugador X
juego.hacerMovimiento(1, 1); // Jugador O
juego.hacerMovimiento(0, 1); // Jugador X
juego.hacerMovimiento(1, 0); // Jugador O
juego.hacerMovimiento(0, 2); // Jugador X (Gana)

