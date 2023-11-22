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