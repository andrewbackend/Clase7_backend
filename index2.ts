/*
Define una clase Auto con las propiedades marca, modelo y año.
Define un método en la clase Auto llamado descripción que devuelva un string 
con la descripción del auto.
Crear una instancia de la clase Auto y llamar al método descripción
*/

class Auto {
    marca: string;
    modelo: string;
    año: number;
    
    constructor(marca: string, modelo: string, año: number){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    descripcion(): string{
        return `Auto: ${this.marca} ${this.modelo}, Año: ${this.año}`;
    }


}

//Pruebas
const miAuto = new Auto("Toyota", "Carolla", 2020);
console.log(miAuto.descripcion());
