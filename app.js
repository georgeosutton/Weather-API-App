let tempDesc = document.querySelector(".temperature-description");
let tempDegree = document.querySelector(".temperature-degree");
let Currentlocation = document.querySelector(".location-h1");
let weatherIcon = document.querySelector(".weather-icon");

window.addEventListener("load", () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.APP_WEATHER_API}`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          let { temp } = data.main;

          temp = Math.round(temp - 273.15);
          tempDegree.textContent = temp;

          let name = data.name;
          Currentlocation.textContent = name;

          let { icon, description } = data.weather["0"];

          setIcon(icon);
          setDesciption(description);
        });
    });
  }

  function setIcon(icon) {
    weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    console.log(icon);
  }

  function setDesciption(description) {
    tempDesc.textContent = description.replace(/\w\S*/g, (w) =>
      w.replace(/^\w/, (c) => c.toUpperCase())
    );
  }
});
