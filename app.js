let tempDesc = document.querySelector('.temperature-description');
let tempDegree = document.querySelector('.temperature-degree');
let locationTimezone = document.querySelector('.location-timezone');


window.addEventListener('load', ()=>{
let long;
let lat;


if (navigator.geolocation){
     navigator.geolocation.getCurrentPosition(position =>{

long = position.coords.longitude;
lat = position.coords.latitude;

const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=28def05e60bacf29656e604ca4b2be85`;


fetch(api)
     .then(response =>{
         return response.json();
     })
     .then(data =>{
         console.log(data)
         let {temp} = data.main;
         //Set DOM Elements from the API
         temp = Math.round(temp - 273.15);
         tempDegree.textContent = temp;
     });
    });
} 

});





