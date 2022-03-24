class ListaProductos {
    lista = [];

    agregar( sku, nombre, precio, existencia, descripcion, imagen, categoria ) {
        let nvoProducto = new Producto(sku, nombre, precio, existencia, descripcion, imagen, categoria);
        lista.push(nvoProducto)
    }

    obtenerPorSKU(sku){
        let prod = this.lista.find( producto => producto.sku === sku)
        return prod;
    }

    buscar(criterio, valor){
        
    }
}