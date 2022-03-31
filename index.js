import ListaProductos from '/models/listaProductos.class.js';

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
const opciones = ["inicio", "productos","carrito"];
const opcionesAdvanced = [ // label es lo que el usuario ve y page el nombre del archivo de la pagina a navegar
    {"label": "Home", "page": "views/home", "controller":null},
    {"label": "productos", "page": "views/productos", "controller":"productos"},
    {"label": "carrito", "page": "views/carrito", "controller":"cart"},
    {"label": "contacto", "page": "views/contacto", "controller":"contacto"},
    {"label": "cuenta", "page": "views/registro", "controller":"user"}
];

for (const opcion of opcionesAdvanced) { // desplegar el menu pero con su label y page configurados
    menu.appendChild(
        stringToDOM(
            `<li class="nav-item" onClick="clickOnMenu(this)" data-page="${opcion.page}" data-controller="${opcion.controller}">
                <a class="nav-link ${window.location.pathname.includes(opcion.page)? "active":""} " href="javascript:()=>false;">${opcion.label}</a>
            </li>`)
    );
}

async function cargarProductos(){
    try {
       const req = new Request( API_BACKEND + "/productos" , {
           "method": "GET",
           "headers": {
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
       } )
    } catch (error) {
        
    }
}

cargarProductos();

//const productos = [];
/*window.productos.agregar( 
    "CURJSDC", 
    "Curso Javascript desde cero",
    229.516,
    10,
    "Inicia en el maravilloso mundo de JS",
    "javascript.png",
    "curso"
);

window.productos.agregar( 
    "CURJAVADC", 
    "Java desde cero",
    199,
    5,
    "Inicia en el maravilloso mundo de Java",
    "java.jpeg",
    "curso"
);

window.productos.agregar( 
    "CURCHSARPDC", 
    "Curso C#  desde cero",
    300,
    3,
    "Inicia en el maravilloso mundo de C#",
    "csharp.jpeg",
    "curso"
);
/*productos.push({
    "sku": "CURJSDC", 
    "nombre": "Curso Javascript desde cero",
    "precio": 229.516,
    "descripcion": "Inicia en el maravilloso mundo de JS",
    "imagen":"javascript.png",
    "existencia": 1
});

window.productos.push({
    "sku": "CURJAVADC",
    "nombre": "Java desde cero",
    "precio": 199,
    "descripcion": "Inicia en el maravilloso mundo de Java",
    "imagen":"java.jpeg",
    "existencia": 0
});

window.productos.push({
    "sku": "CURCHSARPDC",
    "nombre": "Curso C#  desde cero",
    "precio": 300,
    "descripcion": "Inicia en el maravilloso mundo de React native",
    "imagen":"csharp.jpeg",
    "existencia": 1
});

window.productos.push({
    "sku": "CURAWSDC",
    "nombre": "Curso AWS desde cero",
    "precio": 149,
    "descripcion": "Inicia en el maravilloso mundo de React native",
    "imagen":"aws.jpeg",
    "existencia": 1,
    "categoria" : "curso"
});
window.productos.push({
    "sku": "CURAWSDC",
    "nombre": "Jersey somos Gurus",
    "precio": 345,
    "descripcion": "Inicia en el maravilloso mundo de React native",
    "imagen":"aws.jpeg",
    "existencia": 2,
    "categoria" : "suvenir"
});

window.productos.push({
    "sku": "CURNODEJSDC",
    "nombre": "Curso nodejs desde cero",
    "precio": 349,
    "descripcion": "Inicia en el maravilloso mundo de React native ultimo",
    "imagen":"nodejs.png",
    "existencia": 1
});
*/
