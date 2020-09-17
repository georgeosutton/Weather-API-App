window.addEventListener('load', ()=>{
let long;
let lat;

if (navigator.geolocation){
     navigator.geolocation.getCurrentPosition(position =>{

long = position.coords.longitude;
lat = position.coords.latitude;

const api = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid={28def05e60bacf29656e604ca4b2be85}`;


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
