/*
Sistema de Gestión de Empleados con Patrones de Diseño

Implementa un sistema para gestionar empleados utilizando clases.
Crea una clase Empleado con propiedades (nombre, edad y salario) y un método 
calcularBonificacion(). Luego, crea clases derivadas EmpleadoTiempoCompleto y 
EmpleadoTiempoParcial. La bonifcación se calculará de manera diferente en ambas 
clases.

*/
class Empleado{
   constructor(public nombre: string, public edad: number, public salario: number){}

   calcularBonficiacion(): number {
    return 0; //Método a ser sobreescrito
   }
}

class EmpleadoTiempoCompleto extends Empleado {
    calcularBonficiacion(): number {
        return this.salario * 0.1;
    }
}

class EmpleadoTiempoParcial extends Empleado {
    calcularBonficiacion(): number {
        return this.salario * 0.5;
    }
}

const empleado1 = new EmpleadoTiempoCompleto("Arturo", 30, 2000);
const empleado2 = new EmpleadoTiempoParcial("Ana", 25, 1000);

console.log(`${empleado1.nombre} tiene una bonificación de: ${empleado1.calcularBonficiacion()}`);
console.log(`${empleado2.nombre} tiene una bonificación de: ${empleado2.calcularBonficiacion()}`);

