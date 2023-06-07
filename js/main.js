//LLamada de los ids en html
const coords = {lat: 22.230416, lng: -68.611567};
const mapDiv = document.getElementById("map");
const countryname = document.getElementById("mapa");
const bandera = document.querySelector("src");
const countryName = document.getElementById("countryName");
const nativeName = document.getElementById("nativeName");
const area = document.getElementById("area");
const poblacion = document.getElementById("poblacion");
const capital = document.getElementById("capital");
const currency = document.getElementById("currency");
const languaje = document.getElementById("languaje");
const region = document.getElementById("region");
const region2 = document.getElementById("region2");
const hora = document.getElementById("hora");
const ejemplo = document.getElementById("fla");
const ejemplo2 = document.getElementById("fle");
const escu = document.getElementById("escu");
let marker;
let map;
let autocomplete;
//funcion fija de map
function initMap(){
    map = new google.maps.Map(mapDiv, {
      center: coords,
      zoom: 6,
    });
    marker = new google.maps.Marker({
      position:coords,
      map: map,
    });
  
    initAutoComplete();
}
//funcion para buscar los paises
const todo = () => {
const URL_API = "https://restcountries.com/v3.1/";//url
console.log(countryname)
const allCountries = `https://restcountries.com/v3.1/name/${countryname.value}`;
console.log(allCountries);
const divContainer = document.getElementById("comod");
const mapaName = countryname;

if(countryname.value != ""){

    const createCountry = (data) => {
        //creacion de divs para fotos
        const div = document.createElement("div");
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        //conectando los ids con la data del api
        countryName.innerHTML = `${data.name.common}`;
        nativeName.innerHTML = `${data.name.official}`;
        area.innerHTML = `${data.area}`;
        poblacion.innerHTML = `${data.population}`;
        capital.innerHTML = `${data.capital}`;
        currency.innerHTML = `${data.continents}`;
        languaje.innerHTML = `${data.languages[0]}`;
        region.innerHTML = `${data.region}`;
        region2.innerHTML = `${data.subregion}`;
        hora.innerHTML = `${data.timezones}`;
        //creando nodos hijos
        ejemplo.appendChild(div);
        escu.appendChild(div2);
        ejemplo2.appendChild(div1);
        //implementaicon
        div1.innerHTML = `<img src="${data.flags.png}" class="flag fet" alt="Bandera">`
        div.innerHTML = ` <img src="${data.flags.png}" class="flag fet" alt="Bandera">`
        div2.innerHTML = `<img src="${data.coatOfArms.png}" class="escudo" id="escudo" alt="Escudo de armas">`
        
   
    }
    //funcion buscar en el api
    const getCountry = async () => {
        const response = await fetch(allCountries)
        const data = await response.json();
        createCountry(data[0]);
        console.log(data[0])
    }
    getCountry();
}
//mostrar el contenedor
const abrir = document.getElementById("comod").style.display = 'block';
formulario.reset();
//div1.reset();
}
//funcion autocomplete del map
const  initAutoComplete = ()=>{

    autocomplete = new google.maps.places.Autocomplete(countryname);
    autocomplete.addListener("place_changed", function(){
        center: coords;
        zoom: 6;
        const place = autocomplete.getPlace();
        console.log(place)
        map.setCenter(place.geometry.location);
        marker.setPosition(place.geometry.location);
    })
}

//Gett all de todos los paises
const getAll = async () => {
  try{
    const response = await fetch(`https://restcountries.com/v3.1/all`)
    const data = await response.json();
    console.log(data)
    
  }catch(error){
    console.log(error)
  }

}
getAll();



