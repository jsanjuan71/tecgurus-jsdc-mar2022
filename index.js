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
    {"label": "Home", "page": "index"},
    {"label": "productos", "page": "views/productos"},
    {"label": "carrito", "page": "views/carrito"},
    {"label": "contacto", "page": "views/contacto"}
];

for (const opcion of opcionesAdvanced) { // desplegar el menu pero con su label y page configurados
    menu.appendChild(
        stringToDOM(
            `<li class="nav-item" onClick="clickOnMenu(this)" data-option="${opcion.page}">
                <a class="nav-link ${window.location.pathname.includes(opcion.page)? "active":""} " href="#">${opcion.label}</a>
            </li>`)
    );
}

window.productos = [];
window.productos.push({
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
    "existencia": 1
});

window.productos.push({
    "sku": "CURNODEJSDC",
    "nombre": "Curso nodejs desde cero",
    "precio": 349,
    "descripcion": "Inicia en el maravilloso mundo de React native ultimo",
    "imagen":"nodejs.png",
    "existencia": 1
});

