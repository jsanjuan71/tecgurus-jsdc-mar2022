class Carrito{
    items = undefined;

    constructor(){
        let cart = localStorage.getItem("cart");
        if(!cart) { // si el carrito no existe se crea
            cart = JSON.stringify([]);
            localStorage.setItem("cart", cart );

        }
        let cartAsJson = JSON.parse(cart); // se pasa de string a objeto json
        this.items = cartAsJson;
    }

    agregar(sku) {
        const item = items.find(item => item.sku == sku);
        if( item ) {
            const agregado = item.agregar();
            if(agregado.done == true) {
                showDialog("Producto agregado")
            } else {
                showDialog("Producto no agregado porque ", agregado.reason);
            }
            
        } else {
            this.items.push( new Item(sku) )
        }
    }
}