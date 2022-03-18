const presentacion = document.getElementById("presentacion");

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

fecha.innerHTML = fullDate;

presentacion.innerHTML = finalParagraph;

const menu = document.getElementById("menu");

const opciones= ["Inicio", "Productos","Carrito"];

let menuOps = "<li>"+opciones.join("</li><li>")+"</li>";

let template = '';
for (const opcion of opciones) {
    template += `<li>${opcion}</li>`;
}
menu.innerHTML = template;

menu.innerHTML = "";



for (const opcion of opciones) {
    //let template =  `<li>${opcion}</li>`;
    //let li = document.createElement("li");
    //li.innerHTML = opcion;
    menu.appendChild( stringToDOM(`<li>${opcion}</li>`, true) );
}

menu.appendChild( stringToDOM(`<li>Other</li>`, true) );

//let productos = [];

window.productos = [];

let producto = {
    "sku": "CURJSDC", 
    "nombre": "Curso Javascript desde cero",
    "precio": 229,
    "descripcion": "Inicia en el maravilloso mundo de JS",
    "imagen":"javascript.png",
    "existencia": 1
}

window.productos.push(producto);

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