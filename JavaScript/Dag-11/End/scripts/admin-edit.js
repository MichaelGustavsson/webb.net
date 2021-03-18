'use strict';

const baseUrl = 'https://westcoast-cars-api.azurewebsites.net/api/vehicle/';

const regNoInput = document.querySelector('#regNoInput');
const makeInput = document.querySelector('#makeInput');
const modelInput = document.querySelector('#modelInput');
const modelYearInput = document.querySelector('#modelYearInput');
const mileageInput = document.querySelector('#mileageInput');
const valueInput = document.querySelector('#valueInput');
const imageUrlInput = document.querySelector('#imageUrlInput');
const descriptionInput = document.querySelector('#descriptionInput');
const saveButton = document.querySelector('#save').addEventListener('click', saveClicked);
const cancelButton = document.querySelector('#cancel').addEventListener('click', cancelClicked);

let vehicle = {};
let vehicleId = 0;

const urlParams = new URLSearchParams(location.search);

for (let [key, value] of urlParams) {
  if (key === 'vehicleId') {
    fetchVehicle(value)
      .then(data => {
        const [v] = data;
        vehicle = v;
        updatePage()
      })
      .catch(err => console.log(err));
  }
}

function saveClicked(e){
  e.preventDefault();

  updateVehicle()
    .then(response => {
      location.href = 'administration.html'
    })
    .catch(err => console.log(err));
}

function cancelClicked(e){
  e.preventDefault();
  location.href = 'administration.html';
}

function updatePage() {
  regNoInput.value = vehicle.registrationNumber;
  makeInput.value = vehicle.make;
  modelInput.value = vehicle.model;
  modelYearInput.value = vehicle.modelYear;
  mileageInput.value = vehicle.mileage;
  valueInput.value = vehicle.value;
  imageUrlInput.value = vehicle.imageUrl ?? '';
  descriptionInput.value = vehicle.description ?? '';
}

async function fetchVehicle(id){

  const response = await fetch(`${baseUrl}find?condition=id&value=${id}`);

  if(!response.ok) throw new Error(response.statusText);

  return response.json();
}

async function updateVehicle(){
  vehicle.registrationNumber = regNoInput.value;
  vehicle.make = makeInput.value;
  vehicle.model = modelInput.value;
  vehicle.modelYear = modelYearInput.value;
  vehicle.mileage = mileageInput.value;
  vehicle.value = valueInput.value;
  vehicle.imageUrl = imageUrlInput.value;
  vehicle.description = descriptionInput.value

  const response = await fetch(`${baseUrl}${vehicle.id}`, {
    method: 'PUT',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(vehicle)
  });

  if(!response.ok) throw new Error(response.statusText);

  return response.status;
}
