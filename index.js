//'use strict';

const monthNames = ["Enero", "Febro", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let config = {
    name: "TG Store",
    date: new Date(),
    logo: "./assets/images/logo.jpg",
    menu: [
        { name: "Inicio", href: "#"},
        { name: "Nosotros", href: "#"},
        { name: "Productos", href: "#"},
        { name: "Carrito", href: "#"},
        { name: "Cuenta", href: "#"},
    ],
    presentation: `Mexicanos, al grito de guerra
    El acero aprestad y el bridón
    Y retiemble en sus centros la Tierra
    Al sonoro rugir del cañón
    Y retiemble en sus centros la Tierra
    Al sonoro rugir del cañón`,
};

Object.freeze(config);

document.getElementById('title').innerHTML = config.name;
//document.getElementById('presentation').innerText = config.presentation;
document.getElementById('date').innerHTML = `${config.date.getDate()}/${monthNames[config.date.getMonth()]}/${config.date.getFullYear()}`;
document.getElementById('menu').innerHTML = getMenu(config.menu);
document.getElementById('logo').setAttribute("src", config.logo);