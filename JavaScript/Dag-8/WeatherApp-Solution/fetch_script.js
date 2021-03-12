'use strict';

const searchInput = document.querySelector('#city');
const searchButton = document.querySelector('#searchButton');
const weatherView = document.querySelector('#weather-info');

/*****************************************************/
  //Using the fetch api...
/*****************************************************/

const renderWeatherInfo = function (data) {
  //console.log(data);

  weatherView.innerHTML = '';

  const { main, weather } = data;
  const [weatherInfo] = weather;
  const html = `
      <h4>${data.name}</h4>
      <img id="weather-img" src="http://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png" alt="">
      <div><span>Temperatur: </span><span>${main.temp}</span></div>
      <div><span>Känns som: </span><span>${main.feels_like}</span></div>
      <div><span>Luftfuktighet: </span><span>${main.humidity}</span></div>
    `;

  weatherView.insertAdjacentHTML('beforeend', html);
};

const searchWeather = function (city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bd1437c53b15df8bd7e809ef8391d83d&units=metric&lang=sv,se`;
  
  fetch(url).then((response) => response.json())
    .then((data) => renderWeatherInfo(data));
};

searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  const city = searchInput.value;
  searchWeather(city);
});

searchInput.addEventListener('keydown', function(e) {
  if(e.key == 'Enter'){
    searchWeather(this.value);
  }
});