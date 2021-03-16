const buttonLoadText = document.querySelector('#btnText').addEventListener('click', getText);
const buttonLoadJson = document.querySelector('#btnJson').addEventListener('click', buttonLoadJsonClicked);
const buttonLoadExternal = document.querySelector('#btnExternalData').addEventListener('click', buttonLoadExternalClicked);
const spinner = document.querySelector('#spinner');

const displayView = document.querySelector('#display');

/* async nyckelordet gör att funktionen nu returnerar ett "Promise"*/
//Hämta en lokal textfil...
async function getText() {
  const response = await fetch('data.txt');

  if(!response.ok) throw new Error(response.statusText);

  const data =  await response.text();
  displayView.innerHTML = data;
}

//Hämta lokal json fil...
async function getJson() {
  //Visa spinner...
  spinner.classList.remove('hidden');
  const response = await fetch('vehicles.json');

  if (!response.ok) throw new Error(response.statusText);

  return await response.json();
}

//Hämta externt data...
async function getExternalData() {
  //Visa spinner...
  spinner.classList.remove('hidden');
  const response = await fetch('https://westcoast-cars-api.azurewebsites.net/api/vehicle/list');

  if (!response.ok) throw new Error(response.statusText);

  return await response.json();
}

function buttonLoadJsonClicked() {
  getJson()
    .then(data => {
      let html = '';

      data.forEach(function (vehicle) {
        html += `<div>${vehicle.RegistrationNo} <span>${vehicle.Name}</span></div>`;
      });
      renderHtml(html);

    })
    .catch(err => console.log(err));
}

function buttonLoadExternalClicked() {
  getExternalData()
    .then(data => {
      let html = '';

      data.forEach(function (vehicle) {
        html += `<div>${vehicle.registrationNumber} <span>${vehicle.make} ${vehicle.model}</span></div>`;
      });

      renderHtml(html);
    })
    .catch(err => console.log(err));
}

function renderHtml(html){
  //Göm spinner...
  spinner.classList.add('hidden');
  //Visa html
  displayView.innerHTML = html;
}
