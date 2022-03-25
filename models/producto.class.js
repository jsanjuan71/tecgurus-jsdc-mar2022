const api_key = "gfhff-fddf-45-45-4545445";

class Producto {
    #sku = undefined; // variable privada, no se puede ver ni setear fuera de la clase
    nombre = undefined;
    precio = undefined;
    #existencia = undefined;
    descripcion = null;
    imagen = null;
    categoria = 0;

    constructor(sku, nombre, precio, existencia) {
        if(typeof sku === 'undefined')
            console.error("Se requiere un SKU para crear un producto.")
        this.#sku = sku;
        this.nombre = nombre;
        this.precio = precio;
        this.#existencia = existencia;
    }

    obtenerNombre(){
        console.log("Soy el producto ", this.nombre);
        //api_key
    }

    setExistencia(newValue) {
        if( typeof newValue !== "number"
            || newValue.toString().includes(".")
            || newValue < 0
        ) return false; 
        this.#existencia = newValue;
    }

    getExistencia() {
        return this.#existencia;
        /*if(userRol === 1)
            return this.#existencia;
        else null; */
    }

    getSKU = () => this.#sku; // getter para poder acceder al valor de una variable privada

    //setSKU = sku => this.#sku = sku; // setter para poder alterar el valor de una variable privada
}


export {Producto}
//export default Producto;