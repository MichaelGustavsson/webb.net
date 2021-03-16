
const buttonLoadText = document.querySelector('#btnText')
  .addEventListener('click', getText);
const buttonLoadJson = document.querySelector('#btnJson')
  .addEventListener('click', getJson);
const buttonLoadExternal = document.querySelector('#btnExternalData')
  .addEventListener('click', getExternalData)
const spinner = document.querySelector('#spinner');

const displayView = document.querySelector('#display');

//Hämta en lokal textfil...
function getText(){
  fetch('data.txt')
    .then(function(response) {
      if(!response.ok) throw new Error(response.statusText);
      return response.text();
    })
    .then(function(data){
      displayView.innerHTML = data;
    })
    .catch(function(err){
      console.log(err);
    });
}

//Hämta lokal json fil...
function getJson(){
  fetch('vehicles.json')
    .then(function(response) {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    })
    .then(function(data){
      let html = '';
      data.forEach(function(vehicle){
        html += `<div>${vehicle.RegistrationNo} <span>${vehicle.Name}</span></div>`;
      })
      displayView.innerHTML = html;
    })
    .catch(function(err){
      console.log(err);
    });
}

//Hämta externt data...
function getExternalData(){
  spinner.classList.remove('hidden');
  fetch('https://westcoast-cars-api.azurewebsites.net/api/vehicle/list')
    .then(function (response) {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    })
    .then(function (data) {
      let html = '';
      data.forEach(function (vehicle) {
        html += `<div>${vehicle.registrationNumber} <span>${vehicle.make} ${vehicle.model}</span></div>`;
      });
      spinner.classList.add('hidden');
      displayView.innerHTML = html;
    })
    .catch(function (err) {
      spinner.classList.add('hidden');
      console.log(err);
    });
}