class Producto {
    sku = undefined;
    nombre = undefined;
    precio = undefined;
    existencia = undefined;
    descripcion = null;
    imagen = null;
    categoria = 0;


    constructor(sku, nombre, precio, existencia) {
        if(typeof sku === 'undefined')
            console.error("Se requiere un SKU para crear un producto.")
        this.sku = sku;
        this.nombre = nombre;
        this.precio = precio;
        this.existencia = existencia;
    }

    obtenerNombre(){
        console.log("Soy el producto ", this.nombre);
    }
}

let producto1 = new Producto("A1","curso javascript");

producto1.precio = 100;

//producto1.sku = "dDF"

let producto2 = new Producto("B1", "curso de nodejs");

let p3 = new Producto("");

/*roducto1.obtenerNombre()

producto2.obtenerNombre()

p3.obtenerNombre()

console.log( producto1.toString() )*/


console.log(producto1.sku);

console.log(producto2.sku);

producto2.obtenerNombre()

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