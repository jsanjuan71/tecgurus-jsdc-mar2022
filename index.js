import ListaProductos from '/models/listaProductos.class.js';
import ContactoController from '/controllers/contacto.controller.js';
import ProductoController from '/controllers/productos.controller.js';
import CarritoController from '/controllers/cart.controller.js';
import UserController from '/controllers/user.controller.js';
import AdminController from '/controllers/admin.controller.js';

window.productos = new ListaProductos();

const presentacion = document.getElementById("presentacion");

const IVA = 0.16;

const anthem = `Mexicanos, al grito de guerra
El acero aprestad y el bridón
Y retiemble en sus centros la Tierra
Al sonoro rugir del cañón
Y retiemble en sus centros la Tierra
Al sonoro rugir del cañón`;

let lines = anthem.split("\n");

const finalParagraph = lines.join("<br>");

const fecha = document.getElementById("fecha");

const now = new Date();

const months = ["ene", "feb", "mzo", "apr", "may", "jun", "jul","sep","oct","nov","dic"];

const fullDate = `${now.getDate()}-${months[now.getMonth()]}-${now.getFullYear()}`;

fecha.innerHTML = fullDate; // poner la fecha actual en el pie de página

if(presentacion) // esto solo surte efecto en la portada
    presentacion.innerHTML = finalParagraph;

const menu = document.getElementById("menu"); // obtener el menu

const opcionesAdvanced = [ // label es lo que el usuario ve y page el nombre del archivo de la pagina a navegar
    {"label": "Home", "page": "views/home", "controller":null},
    {"label": "Productos", "page": "views/productos", "controller":"productos"},
    {"label": "Carrito", "page": "views/carrito", "controller":"cart"},
    {"label": "Contacto", "page": "views/contacto", "controller":"contacto"},
    {"label": "Cuenta", "page": "views/registro", "controller":"user"},
    {"label": "Admin", "page": "views/administracion", "controller":"admin"}
];

for (const opcion of opcionesAdvanced) { // desplegar el menu pero con su label y page configurados
    menu.appendChild(
        stringToDOM(
            `<li class="nav-item" onClick="window.clickOnMenu(this)" data-page="${opcion.page}" data-controller="${opcion.controller}">
                <a class="nav-link ${window.location.pathname.includes(opcion.page)? "active":""} " href="javascript:()=>false;">${opcion.label}</a>
            </li>`)
    );
}

async function cargarProductos(){
    try {
       const req = new Request( API_BACKEND + "/productos" , {
           method: "GET",
           headers: {
                "Content-Type": "application/json"
           }
       } );
       const res = await fetch(req);
       const productos = await res.json();
       console.log(productos);
       productos.map( prod => {
            window.productos.agregar(
                prod.sku,
                prod.nombre,
                prod.precio,
                prod.existencia,
                prod.descripcion, 
                prod.imagen,
                prod.categoria
            )
        })
    } catch (error) {
        
    }
}

cargarProductos();

window.clickOnMenu = async function(eventData) {
	const {page, controller} = eventData.dataset;
	const contactoTemplate = await fetch(`/${page}.html`);
	const template = await contactoTemplate.text();
	const mainContainer = document.getElementById("mainContainer");
	mainContainer.innerHTML = template;
	if(controller){
		switch (controller) {
			case "contacto":
				new ContactoController();
				break;
			case "productos":
				new ProductoController();
                break;
            case "cart":
                new CarritoController();
                break;
            case "user":
                new UserController();
                break;
            case "admin":
                new AdminController();
                break;
		}
	}
}