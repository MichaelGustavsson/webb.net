
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
  const request = new XMLHttpRequest();

  request.open('GET', 'data.txt');
  request.onload = function(){
    displayView.innerHTML = this.responseText;
  }

  request.send();
}

//Hämta lokal json fil...
function getJson(){
  const request = new XMLHttpRequest();

  request.open('GET', 'vehicles.json');
  request.onload = function() {
    let html = '';
    const data = JSON.parse(request.responseText);

    data.forEach(function(vehicle){
      html += `<div>${vehicle.RegistrationNo} <span>${vehicle.Name}</span></div>`;
    });
    displayView.innerHTML = html;
  };

  request.send();
}

//Hämta externt data...
function getExternalData(){
  spinner.classList.remove('hidden');

  const request = new XMLHttpRequest();

  request.open('GET', 'https://westcoast-cars-api.azurewebsites.net/api/vehicle/list');
  
    request.onload = function () {
    let html = '';
    const data = JSON.parse(request.responseText);

    data.forEach(function (vehicle) {
      html += `<div>${vehicle.registrationNumber} <span>${vehicle.make} ${vehicle.model}</span></div>`;
    });

    spinner.classList.add('hidden');
    displayView.innerHTML = html;
  };

  request.send();
}