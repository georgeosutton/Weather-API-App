window.addEventListener('load', ()=>{
let long;
let lat;

if (navigator.geolocation){
     navigator.geolocation.getCurrentPosition(position =>{

long = position.coords.longitude;
lat = position.coords.latitude;

const api = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid={b72067057be53cb5c1a6f0ab3416641b}`;


fetch(api)
     .then(response =>{
         return response.json();
     })
     .then(data =>{
         console.log(data)
     
     });
    });
} 

});
