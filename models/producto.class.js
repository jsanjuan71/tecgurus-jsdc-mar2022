class Producto {
    #sku = undefined; // variable privada, no se puede ver ni setear fuera de la clase
    nombre = undefined;
    precio = undefined;
    existencia = undefined;
    descripcion = null;
    imagen = null;
    categoria = 0;

    constructor(sku, nombre, precio, existencia) {
        if(typeof sku === 'undefined')
            console.error("Se requiere un SKU para crear un producto.")
        this.#sku = sku;
        this.nombre = nombre;
        this.precio = precio;
        this.existencia = existencia;
    }

    obtenerNombre(){
        console.log("Soy el producto ", this.nombre);
    }

    getSKU = () => this.#sku; // getter para poder acceder al valor de una variable privada

    setSKU = sku => this.#sku = sku; // setter para poder alterar el valor de una variable privada
}

let producto1 = new Producto("A1","curso javascript");

producto1.precio = 100;

//console.log(producto1.#sku); // error al acceder a un atributo privado.

//producto1.#sku = "dDF"; // error tratar de cambiar el valor de una variable privada.

producto1.setSKU("NEWSKU")

console.log( producto1.getSKU() );

let producto2 = new Producto("B1", "curso de nodejs");

let p3 = new Producto("");

console.log(producto1.nombre);

console.log(producto2.nombre);

producto2.obtenerNombre();

/*class Producto {
    sku
    nombre
    precio
    descripcion
    imagen
    existencia
    categoria

    
    constructor(sku, nombre, precio, existencia) {
        

    }

    getImage() {

    }
}


class ListaProductos {
    productos

    agregar(data) {

    }
    obtenerPorSKU(sku){

    }
    buscar(criterio, valor){

    }
}

class Item {
    sku
    cantidad

    calcularSubtotal(){

    }
    agregar() {

    }

    quitar(){

    }
}

class Carrito {
    listaItems

    agregar(sku){

    }

    quitar(sku){

    }
    calcularSubtotal(){

    }
    obtenerTotal(){

    }

} */