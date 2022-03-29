import Response from '/models/response.class.js';
class Item {
    sku = undefined;
    cantidad = undefined;

    /** Este es un ejemplo de documentación de métodos con JSDoc
     * 
     * @param {string} skuProducto 
     * @param {number} cant 
     * Inicializa un item con el skuProducto indicado
     * Si no se manda la cantidad se dará por hecho que es uno nuevo y será 1
     * Si se manda la cantidad solo se asigna
     * @returns {undefined}
     */
    constructor(skuProducto, cant = 1) { 
        if(typeof skuProducto === 'undefined')
            console.error("Se requiere un SKU para crear un item para el carrito.")
        this.sku = skuProducto;
        this.cantidad = cant;
    }
    /**
     * 
     * @returns {Response}
     */
    agregar() {
        const prod = window.productos.obtenerPorSKU(this.sku);
        if(this.cantidad < prod.getExistencia() ){
            this.cantidad++;
            return new Response(true);
        }
        else return new Response(
            false,
            "Ya no hay suficiente existencia"
        );
    }

    quitar(){
        if(this.cantidad > 0) 
            this.cantidad--;  
    }

    calcularSubtotal() {
        const prod = window.productos.obtenerPorSKU(this.sku);

        return this.cantidad * prod.precio;
    }

    toPlainObject(){
        return {
            "sku": this.sku,
            "cantidad": this.cantidad
        };
    }
}

export default Item