
function stringToDOM(str) {
	var parser = new DOMParser();
	var doc = parser.parseFromString(str, 'text/html');
	return doc.body;
};

function moneyFormat( amount, currency = "MXN" ){
    return `$${amount} ${currency}`;
}

function clicEnElBoton(eventData) {
	console.log(eventData);
	console.log(eventData.dataset);
	console.log(eventData.dataset.id);
}