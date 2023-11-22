let automobili = [
{
    marca: "Fiat",
    modello: "Panda",
    alimentazione: "Benzina"

},

{
    marca: "Ford",
    modello: "Focus",
    alimentazione: "Diesel"

},

{
    marca: "Ferrari",
    modello: "458 Italia",
    alimentazione: "Elettrica"

},

{
    marca: "Alfa Romeo",
    modello: "Giulietta",
    alimentazione: "Ibrida"

},

{
    marca: "Peugeot",
    modello: "208",
    alimentazione: "Gpl"

},

{
    marca: "BMW",
    modello: "Serie 1",
    alimentazione: "Benzina"

},

{
    marca: "BMW",
    modello: "Serie 7",
    alimentazione: "Diesel"

},

{
    marca: "Mercedes-Benz",
    modello: "A1",
    alimentazione: "Elettrica"

},

{
    marca: "Fiat",
    modello: "Tipo",
    alimentazione: "Ibrida"

},

{
    marca: "Pagani",
    modello: "Zonda",
    alimentazione: "GPL"

},

];

console.log(automobili);

let autoBenzina = [];
let autoDiesel = [];
let autoRestanti = [];

automobili.forEach(function(automobile){
    if(automobile.alimentazione == "Benzina"){
        autoBenzina.push(automobile);
        
    }
    else if(automobile.alimentazione == "Diesel"){
        autoDiesel.push(automobile);
        
    }

    else{
        autoRestanti.push(automobile);  
    }
    
});

console.log(autoBenzina);
console.log(autoDiesel);
console.log(autoRestanti);


for(let i = 0; i<autoBenzina.length; i++){
document.getElementById("lista").innerHTML += 
`

<div class="text-center col-6 pt-3 mt-3">
    <ul class="list-group">
    <li class="list-group-item"><strong>Auto a Benzina</strong></li>
    <li class="list-group-item">Marca: ${autoBenzina[i].marca}</li>
    <li class="list-group-item">Modello: ${autoBenzina[i].modello}</li>
    <li class="list-group-item">Alimentazione auto: ${autoBenzina[i].alimentazione}</li>
    </ul>
</div>
`
}

for(let i = 0; i<autoDiesel.length; i++){
    document.getElementById("lista").innerHTML += 
    `
                            
<div class="text-center col-6 pt-3 mt-3">
    <ul class="list-group">
    <li class="list-group-item"><strong>Auto a Diesel</strong></li>
    <li class="list-group-item">Marca: ${autoDiesel[i].marca}</li>
    <li class="list-group-item">Modello: ${autoDiesel[i].modello}</li>
    <li class="list-group-item">Alimentazione auto:  ${autoDiesel[i].alimentazione}</li>
    </ul>
</div>
`
}

for(let i = 0; i<autoRestanti.length; i++){
    document.getElementById("lista").innerHTML += 
    `

<div class="text-center col-6 pt-3 mt-3">
    <ul class="list-group">
    <li class="list-group-item"><strong>Altre Auto</strong></li>
    <li class="list-group-item">Marca: ${autoRestanti[i].marca}</li>
    <li class="list-group-item">Modello: ${autoRestanti[i].modello}</li>
    <li class="list-group-item">Alimentazione auto: ${autoRestanti[i].alimentazione}</li>
    </ul>
</div>
`
}
