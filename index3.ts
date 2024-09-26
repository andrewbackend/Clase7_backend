/*
- Sistama de Inventario con Composición

Crea una clase Producto con propiedades como nombre, precio y categoría. Luego, crea 
una clase Inventario que contenga un array de Producto y tenga métodos para añadir 
productos, eliminar productos, y calcular el valor total del inventario.
Implementa un método que ordene los productos por precio

*/

class Producto {
    constructor(public nombre: string, public precio: number, public categoria: string){}
    }
    class Inventario {
        private productos: Producto[] = [];

        agregarProducto(producto: Producto): void {
            this.productos.push(producto);
        }

        eliminarProducto(nombre: string): void {
            this.productos = this.productos.filter(p => p.nombre !== nombre);
        }

        calcularValorTotal(): number {
            return this.productos.reduce((total, producto) => total + producto.precio, 0);
        }
        
        ordernarPorPrecio(): Producto[]{
            return this.productos.sort((a, b) => a.precio - b.precio);
        }

}

    //Ejemplo de uso
    const inventario = new Inventario();
    inventario.agregarProducto(new Producto("Laptop", 1500, "Electrónica"));
    inventario.agregarProducto(new Producto("Teléfono", 800, "Electrónica"));

    console.log("Valor total del inventario: ", inventario.calcularValorTotal());
    console.log("Productos ordenados por precio: ", inventario.ordernarPorPrecio());



