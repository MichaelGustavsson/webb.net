'use strict';

const baseUrl = 'https://westcoast-cars-api.azurewebsites.net/api/vehicle/';

const vehicleTable = document.querySelector('#vehicle-list');
const tableView = document.querySelector('#tableView');
const addVehicleView = document.querySelector('#addVehicle-container');
const searchInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('#searchButton');
const saveButton = document.querySelector('#save');
const regNoInput = document.querySelector('#regNoInput');
const makeInput = document.querySelector('#makeInput');
const modelInput = document.querySelector('#modelInput');
const modelYearInput = document.querySelector('#modelYearInput');
const mileageInput = document.querySelector('#mileageInput');
const valueInput = document.querySelector('#valueInput');
const addNewButton = document.querySelector('#addNewVehicle');
const spinner = document.querySelector('#spinner');
const modalDialog = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

async function AddVehicle() {
  const vehicle = {
    registrationNumber: regNoInput.value,
    make: makeInput.value,
    model: modelInput.value,
    modelYear: modelYearInput.value,
    mileage: mileageInput.value,
    value: valueInput.value,
  };

  const response = await fetch(`${baseUrl}`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(vehicle)
  });

  if(!response.ok) throw new Error(response.statusText);

  return response.json();
};

const searchVehicle = function () {
  if(searchInput !== null){
    if(searchInput.value.length === 0){
      loadVehicles()
        .then(data => createTable(data))
        .catch(err => console.log(err));
    }else {
      findVehicle(searchInput.value)
        .then(data => createTable(data))
        .catch(err => console.log(err));
    }
  }
};

searchButton.addEventListener('click', searchVehicle);
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    searchVehicle();
  }
});

saveButton.addEventListener('click', (e) => {
  e.preventDefault();
  AddVehicle()
    .then(data => {

      //TODO: Flytta till en egen funktion...
      addVehicleView.classList.add('hidden');
      tableView.classList.remove('hidden');
      modalDialog.classList.add('hidden');
      overlay.classList.add('hidden');
      regNoInput.value = '';
      makeInput.value = '';
      modelInput.value = '';
      modelYearInput.value = '';
      mileageInput.value = '';
      valueInput.value = '';
      loadVehicles()
      .then(data => createTable(data));
    })
    .catch(err => console.log(err));
});

addNewButton.addEventListener('click', (e) => {
  e.preventDefault();

  addVehicleView.classList.remove('hidden');
  overlay.classList.remove('hidden');
  modalDialog.classList.remove('hidden');
});

function createTable(vehiclesList){
  vehicleTable.innerHTML = '';
  for (let car of vehiclesList) {
    createRow(car);
  }

  const tableRows = document.querySelectorAll('.table-container .delete');

  tableRows.forEach(item => {
    const vehicleId = item.parentNode.parentNode.firstElementChild.firstChild.nodeValue;
    item.addEventListener('click', () => {
      deleteVehicleClicked(vehicleId);
    });
  });
  spinner.classList.add('hidden');
}

function createRow(car){
  vehicleTable.insertAdjacentHTML(
    'beforeend',
    `
      <tr>
        <td>${car.id}</td>
        <td>${car.registrationNumber}</td>
        <td>${car.make}</td>
        <td>${car.model}</td>
        <td>${car.modelYear}</td>
        <td>${car.mileage}</td>
        <td>${car.value == undefined ? 0 : car.value}</td>
        <td><i class="far fa-trash-alt delete"></i></td>
      </tr>
    `
  );
}

function deleteVehicleClicked(vehicleId) {
  console.log(`Delete vehicle ${vehicleId}`);
  removeVehicle(vehicleId)
    .then(response => {
      console.log(response);
      loadVehicles()
      .then(data => createTable(data));
    })
    .catch(err => console.log(err));
}

const quitModal = () => {
  modalDialog.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeModal.addEventListener('click', quitModal);
overlay.addEventListener('click', quitModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modalDialog.classList.contains('hidden')) {
      quitModal();
    }
  }
});

async function removeVehicle(id){
  const response = await fetch(`${baseUrl}${id}`, {
    method: 'DELETE',
    mode: 'cors'
  });

  if(!response.ok) throw new Error(response.statusText);
  
  return response.statusText;
}

async function findVehicle(regNo){
  spinner.classList.remove('hidden');
  const url = `${baseUrl}find?condition=regno&value=${regNo}`;
  const response = await fetch(url);
  if(!response.ok) throw new Error(response.statusText);

  return response.json();
}

async function loadVehicles(){
  spinner.classList.remove('hidden');
  const url = `${baseUrl}list`;
  const response = await fetch(url)

  if(!response.ok){
    throw new Error(response.statusText);
  }

  return response.json();
};

loadVehicles()
.then(data => createTable(data))
.catch(err => console.log(err));
