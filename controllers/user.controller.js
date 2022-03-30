
/*
const formularioContainer = document.getElementById("registro");
console.log("formularioContainer", formularioContainer);

document.addEventListener("submit", function(evt){
    evt.stopPropagation();
    evt.preventDefault();
    console.log("this", this);
    
    return false;
})

*/

const CURP_SERVER_API = "https://curp-renapo.p.rapidapi.com/v1/curp";
const CP_SERVER_API = "https://api.copomex.com/query/info_cp";

const formularioContainer = document.getElementById("registro");
const curpInput = document.getElementById("curp_input");
const cpInput = document.getElementById("cp_input");
const col = document.getElementById("col");
const mun = document.getElementById("mun");
const cd = document.getElementById("cd");
const edo = document.getElementById("edo");

formularioContainer.addEventListener("submit", function(eventData){
    eventData.preventDefault();
    console.log(formularioContainer);

} );

cpInput.addEventListener("input", function(eventData){
    if(cpInput.value.length >= 5) {
        const req = new Request( CP_SERVER_API + "/" + cpInput.value +"?token=1525d2e1-2034-43a9-ac5b-273150ee9f26" , {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        } );
        fetch(req)
            .then( response => {
                response.json()
                    .then(data => {
                        console.log("data", data);
                        const primerAsentamiento = data.pop().response;
                        col.value = primerAsentamiento.asentamiento;
                        mun.value = primerAsentamiento.municipio;
                        cd.value = primerAsentamiento.ciudad;
                        edo.value = primerAsentamiento.estado;

                    })
                    .catch( error => {
                        console.error("JSON ERROR", error);
                    })
            })
            .catch( error => {
                console.error("FETCH ERROR", error);
            });
    }
})

curpInput.addEventListener("input", function(eventData){
    
    if(curpInput.value.length >= 18) {
        console.log("input", curpInput.value);
        const req = new Request( CURP_SERVER_API + "/" + curpInput.value , {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-RapidAPI-Host": "curp-renapo.p.rapidapi.com",
                "X-RapidAPI-Key": "db8cd362a0mshb7997be68eb33edp1ea81fjsnf0899768f315"
            }
        } )
        fetch(req)
            .then( response => { 
                //CHUNKS - fragmento
                console.log(response);
                response.json()
                    .then(data => {
                        console.log("data", data);
                    })
                    .catch( error => {
                        console.error("JSON ERROR", error);
                    })
            })
            .catch( error => {
                console.error("FETCH ERROR", error);
            });
    }   
});

