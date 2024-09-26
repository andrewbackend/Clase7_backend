//Definición de la clase Persona
class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(): void {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo  ${this.edad} años.`); 
    }
}

// Crear una instancia de la clase Persona 

const persona1 = new  Persona('Andrew', 28);

// Llamar el método saludar

persona1.saludar();


