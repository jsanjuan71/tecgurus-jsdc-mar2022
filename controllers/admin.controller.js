import {Producto} from '/models/producto.class.js';
class AdminController{
    constructor(){
        this.init();
    }

    init(){
        const AGREGAR_PRODUCTO_SERVICE = API_BACKEND + "/productos";

        const formularioContainer = document.getElementById("nuevo_producto");

        formularioContainer.addEventListener("submit", async function(eventData){
            eventData.preventDefault();
            const inputs = formularioContainer.getElementsByTagName("input");
            var producto = new Producto("-1");
            for (const input of inputs) {
                switch(input.getAttribute("name")) {
                    case "nombre":
                        producto.nombre = input.value;
                        break;
                    case "descripcion":
                        producto.descripcion = input.value;
                    case "precio":
                        producto.precio = input.value;
                        break;
                    case "existencia":
                        producto.setExistencia(input.value);
                        break;
                    case "sku":
                        producto.setSKU( input.value );
                        break;
                        
                }
            }
            const selects = formularioContainer.getElementsByTagName("select");
            for (const select of selects) {
                const name = select.getAttribute("name");
                if(name == "categoria") {
                    producto.categoria = select.value;
                }
            }
            const productoAsObject = producto.toPlainObject();
            const req = new Request(AGREGAR_PRODUCTO_SERVICE, {
                method: "POST",
                body: JSON.stringify(productoAsObject),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const response = await (await fetch( req )).json();

            if(response.done === true) {
                Toastify({
                    text: "Producto agregado correctamente",
                    duration: 3000
                }).showToast();
            } else{
                Toastify({
                    text: response.reason,
                    style: {
                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                    }
                }).showToast();
            }

            // @TODO obtener y cargar el archivo
            
        } );
    }
}

export default AdminController;

// 
