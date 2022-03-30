
const IVA = 0.16;

const cambioDolar = 20.4;

function stringToDOM(str) {
	var parser = new DOMParser();
	var doc = parser.parseFromString(str, 'text/html');
	return doc.body;
};

function moneyFormat( amount, currency = "MXN" ){
    return `$${amount} ${currency}`;
}

function getRowLayout( dataList ) {
	let template = "<tr>";
	for (const cell of dataList) {
		template += `<td>${cell}</td>`;
	}
	template += "</tr>";
	return template;
}

function clickOnMenu(eventData) {
	const page = eventData.dataset.option;
	window.location.replace(`/${page}.html`);
}

function getProductImage(imageName) {
	return `<img width="120px" src="/assets/images/products/${imageName}" />`;
}

function priceFormatted(price) {
	return `$ ${price.toFixed(2)}`;
}

function obtenerAleatorio(){
	return Math.floor(Math.random() * 10) + 1;
}


const divisas = ["MXN","USD","COP"];

const API_DIVISAS = "http://api.exchangeratesapi.io/latest?access_key=de81f58e5a86dbde26fec00de325f9bf";