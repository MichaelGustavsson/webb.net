const buttonLoadText = document
  .querySelector('#btnText')
  .addEventListener('click', getText);
const buttonLoadJson = document
  .querySelector('#btnJson')
  .addEventListener('click', getJson);
const buttonLoadExternal = document
  .querySelector('#btnExternalData')
  .addEventListener('click', getExternalData);
const spinner = document.querySelector('#spinner');

const displayView = document.querySelector('#display');

//Hämta en lokal textfil...
function getText() {
  const request = new XMLHttpRequest();

  request.open('GET', 'data.txt');
  request.onload = function () {
    displayView.innerHTML = this.responseText;
  };

  request.send();
}

//Hämta lokal json fil...
function getJson() {
  const request = new XMLHttpRequest();

  request.open('GET', 'vehicles.json');

  console.log('Ready states', request.readyState);

  request.onprogress = function() {
    console.log('Ready state', request.readyState);
  }

  request.onload = function () {
    console.log('Ready state', request.readyState);
    if (this.status === 200) {
      // HTTP Statuses:
      // 200: "OK"
      // 204: "No Content"
      // 400: "Bad Request"
      // 403: "Forbidden"
      // 404: "Not Found"

      // readyState Values
      // 0: request not initialized
      // 1: service connection established
      // 2: request received
      // 3: processing request
      // 4: request finished and response is ready
      let html = '';
      const data = JSON.parse(request.responseText);

      data.forEach(function (vehicle) {
        html += `<div>${vehicle.RegistrationNo} <span>${vehicle.Name}</span></div>`;
      });
      displayView.innerHTML = html;
    }
  };

  request.send();
}

//Hämta externt data...
function getExternalData() {
  spinner.classList.remove('hidden');

  const request = new XMLHttpRequest();

  request.open(
    'GET',
    'https://westcoast-cars-api.azurewebsites.net/api/vehicle/list'
  );

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
