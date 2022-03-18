
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
	console.log(page);
	console.log(window.location);
	//window.location = window.location. + "/" + page + ".html";
}