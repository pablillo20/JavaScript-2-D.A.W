// 1
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.estomago = [];
    }

    comer(comida) {
        if (this.estomago.length < 10) {
            this.estomago.push(comida);
        }
    }

    defecar() {
        this.estomago = [];
    }

    toString() {
        return `${this.nombre}, ${this.edad}`;
    }
}

const persona = new Persona('María', 50);
console.log(persona.toString());
persona.comer('Manzana');
persona.comer('Plátano');
console.log(persona.estomago);
persona.defecar();
console.log(persona.estomago);

// Ejercicio 2

class Car {
    constructor(modelo, kilometrosPorLitro) {
        this.modelo = modelo;
        this.kilometrosPorLitro = kilometrosPorLitro;
        this.tanque = 0;
        this.odometro = 0;
    }


    llenar(litros) {
        this.tanque += litros;
    }

    drive(distancia) {
        const maxDistancia = this.tanque * this.kilometrosPorLitro;

        if (distancia <= maxDistancia) {

            this.odometro += distancia;
            this.tanque -= distancia / this.kilometrosPorLitro;
        } else {
            this.odometro += maxDistancia;
            this.tanque = 0;
            return `¡Me quedé sin combustible a ${this.odometro} kilómetros!`;
        }
    }

    // Método para obtener el estado actual del automóvil
    toString() {
        return `Modelo: ${this.modelo}, Odómetro: ${this.odometro} kilómetros, Combustible: ${this.tanque.toFixed(2)} litros`;
    }
}

// Ejemplo de uso:
const coche = new Car('Toyota Corolla', 15);
coche.llenar(40);
console.log(coche.toString());

coche.drive(200);
console.log(coche.toString());

// Ejercicio 3

class Lambdasian {
    constructor({ nombre, edad, ubicacion }) {
        this.nombre = nombre;
        this.edad = edad;
        this.ubicacion = ubicacion;
    }

    // Método para que la instancia hable
    speak() {
        return `Hola, mi nombre es ${this.nombre}, soy de ${this.ubicacion}.`;
    }
}

// Ejemplo de uso:
const estudiante = new Lambdasian({ nombre: 'Carlos', edad: 25, ubicacion: 'Madrid' });
console.log(estudiante.speak());


// Ejercicio 4

class Lambdasian {
    constructor({ nombre, edad, ubicacion }) {
        this.nombre = nombre;
        this.edad = edad;
        this.ubicacion = ubicacion;
    }

    speak() {
        return `Hola, mi nombre es ${this.nombre}, soy de ${this.ubicacion}.`;
    }
}

class Instructor extends Lambdasian {
    constructor({ nombre, edad, ubicacion, especialidad, favLanguage, catchPhrase }) {
        // Llama al constructor padre (Lambdasian)
        super({ nombre, edad, ubicacion });
        // Inicializa las propiedades específicas del Instructor
        this.especialidad = especialidad;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    // Método demostración
    demostracion(asunto) {
        return `Hoy estamos aprendiendo sobre ${asunto}.`;
    }

    // Método calificación
    calificacion(estudiante, asunto) {
        return `${estudiante.nombre} recibe una puntuación perfecta en ${asunto}.`;
    }
}

// Ejemplo de uso:
const instructor = new Instructor({
    nombre: 'Laura',
    edad: 30,
    ubicacion: 'Barcelona',
    especialidad: 'Redux',
    favLanguage: 'JavaScript',
    catchPhrase: '¡No te olvides de los amigos!'
});

// Llamando a los métodos
console.log(instructor.speak());
console.log(instructor.demostracion('React'));

// Ejemplo de un objeto estudiante
const estudiante = { nombre: 'Carlos' };
console.log(instructor.calificacion(estudiante, 'JavaScript'));

// Ejercicio 5

class Lambdasian {
    constructor({ nombre, edad, ubicacion }) {
        this.nombre = nombre;
        this.edad = edad;
        this.ubicacion = ubicacion;
    }

    speak() {
        return `Hola, mi nombre es ${this.nombre}, soy de ${this.ubicacion}.`;
    }
}

class Student extends Lambdasian {
    constructor({ nombre, edad, ubicacion, previousBackground, className, favSubjects }) {
        super({ nombre, edad, ubicacion });
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
    }


    listSubjects() {
        return `Loving ${this.favSubjects.join(', ')}!`;
    }


    PRAssignment(subject) {
        return `${this.nombre} ha enviado un PR para ${subject}.`;
    }


    sprintChallenge(subject) {
        return `${this.nombre} ha comenzado el desafío de sprint en ${subject}.`;
    }
}

// Ejemplo de uso:
const estudiante = new Student({
    nombre: 'Carlos',
    edad: 28,
    ubicacion: 'Ciudad de México',
    previousBackground: 'Marketing',
    className: 'CS132',
    favSubjects: ['HTML', 'CSS', 'JavaScript']
});

// Llamando a los métodos:
console.log(estudiante.speak());
console.log(estudiante.listSubjects());
console.log(estudiante.PRAssignment('JavaScript'));
console.log(estudiante.sprintChallenge('CSS'));

// Ejercicio 6

class Lambdasian {
    constructor({ nombre, edad, ubicacion }) {
        this.nombre = nombre;
        this.edad = edad;
        this.ubicacion = ubicacion;
    }

    speak() {
        return `Hola, mi nombre es ${this.nombre}, soy de ${this.ubicacion}.`;
    }
}

class Instructor extends Lambdasian {
    constructor({ nombre, edad, ubicacion, especialidad, favLanguage, catchPhrase }) {
        super({ nombre, edad, ubicacion });
        this.especialidad = especialidad;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    demostracion(asunto) {
        return `Hoy estamos aprendiendo sobre ${asunto}.`;
    }

    calificacion(estudiante, asunto) {
        return `${estudiante.nombre} recibe una puntuación perfecta en ${asunto}.`;
    }
}

class ProjectManager extends Instructor {
    constructor({ nombre, edad, ubicacion, especialidad, favLanguage, catchPhrase, gradClassName, favInstructor }) {
        super({ nombre, edad, ubicacion, especialidad, favLanguage, catchPhrase });
        this.gradClassName = gradClassName; // Nombre de la clase de graduación
        this.favInstructor = favInstructor; // Instructor favorito
    }


    standUp(canal) {
        return `${this.nombre} anuncia a ${canal}, @${canal} ¡tiempos de espera!`;
    }


    debugsCode(estudiante, asunto) {
        return `${this.nombre} depura el código de ${estudiante.nombre} en ${asunto}.`;
    }
}

// Ejemplo de uso:
const projectManager = new ProjectManager({
    nombre: 'Laura',
    edad: 35,
    ubicacion: 'Barcelona',
    especialidad: 'Redux',
    favLanguage: 'JavaScript',
    catchPhrase: '¡No te olvides de los amigos!',
    gradClassName: 'CS1',
    favInstructor: 'Sean'
});

// Llamando a los métodos
console.log(projectManager.speak());
console.log(projectManager.standUp('frontend'));
console.log(projectManager.debugsCode({ nombre: 'Carlos' }, 'JavaScript'));


// Ejercicio 7

class Lambdasian {
    constructor({ nombre, edad, ubicacion }) {
        this.nombre = nombre;
        this.edad = edad;
        this.ubicacion = ubicacion;
    }

    speak() {
        return `Hola, mi nombre es ${this.nombre}, soy de ${this.ubicacion}.`;
    }
}

class Instructor extends Lambdasian {
    constructor({ nombre, edad, ubicacion, especialidad, favLanguage, catchPhrase }) {
        super({ nombre, edad, ubicacion });
        this.especialidad = especialidad;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    demostracion(asunto) {
        return `Hoy estamos aprendiendo sobre ${asunto}.`;
    }

    calificacion(estudiante, asunto) {
        return `${estudiante.nombre} recibe una puntuación perfecta en ${asunto}.`;
    }

    adjustGrade(estudiante) {
        const adjustment = Math.floor(Math.random() * 11) - 5;
        estudiante.calificacion = Math.max(0, Math.min(100, estudiante.calificacion + adjustment));
        return `${this.nombre} ha ajustado la calificación de ${estudiante.nombre}. Nueva calificación: ${estudiante.calificacion}.`;
    }
}

class Student extends Lambdasian {
    constructor({ nombre, edad, ubicacion, previousBackground, className, favSubjects }) {
        super({ nombre, edad, ubicacion });
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
        this._calificacion = 0;
    }

    get calificacion() {
        return this._calificacion;
    }

    set calificacion(value) {
        if (value >= 0 && value <= 100) {
            this._calificacion = value;
        } else {
            console.log("La calificación debe estar entre 0 y 100.");
        }
    }

    listSubjects() {
        return `Loving ${this.favSubjects.join(', ')}!`;
    }

    PRAssignment(subject) {
        return `${this.nombre} ha enviado un PR para ${subject}.`;
    }

    sprintChallenge(subject) {
        return `${this.nombre} ha comenzado el desafío de sprint en ${subject}.`;
    }

    graduate() {
        if (this.calificacion > 70) {
            return `${this.nombre} está listo para graduarse de Lambda School!`;
        } else {
            return `${this.nombre} necesita volver a calificar sus tareas para aumentar su puntuación.`;
        }
    }
}

class ProjectManager extends Instructor {
    constructor({ nombre, edad, ubicacion, especialidad, favLanguage, catchPhrase, gradClassName, favInstructor }) {
        super({ nombre, edad, ubicacion, especialidad, favLanguage, catchPhrase });
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }

    standUp(canal) {
        return `${this.nombre} anuncia a ${canal}, @${canal} ¡tiempos de espera!`;
    }

    debugsCode(estudiante, asunto) {
        return `${this.nombre} depura el código de ${estudiante.nombre} en ${asunto}.`;
    }
}




