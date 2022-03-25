import {Producto} from '/models/producto.class.js';
class ListaProductos {
    #lista = [];

    agregar( sku, nombre, precio, existencia, descripcion, imagen, categoria ) {
        let nvoProducto = new Producto(sku, nombre, precio, existencia, descripcion, imagen, categoria);
        this.#lista.push(nvoProducto)
    }

    obtenerPorSKU(sku){
        let prod = this.#lista.find( producto => producto.getSKU() === sku)
        return prod;
    }

    buscar(criterio, valor){
        
    }

    verTodos() {
        return this.#lista;
    }
}

export default ListaProductos;