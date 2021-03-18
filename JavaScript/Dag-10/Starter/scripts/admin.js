'use strict';

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

const AddVehicle = () => {
  const vehicle = {
    id: 0,
    registrationNo: regNoInput.value,
    make: makeInput.value,
    model: modelInput.value,
    modelYear: modelYearInput.value,
    mileage: mileageInput.value,
    value: valueInput.value,
  };

  vehicles.push(vehicle);

  addVehicleView.style.display = 'none';
  tableView.style.display = 'block';

  createTable(vehicles);
};

const searchVehicle = function () {
  if (searchInput !== null) {
    if (searchInput.value.length === 0) {
      vehicleTable.innerHTML = '';
      createTable(vehicles);
    } else {
      vehicleTable.innerHTML = '';
      const found = vehicles.filter((car) =>
        car.registrationNo
          .toUpperCase()
          .includes(searchInput.value.toUpperCase())
      );
      createTable(found);
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
  AddVehicle();
});

addNewButton.addEventListener('click', (e) => {
  e.preventDefault();

  tableView.style.display = 'none';
  addVehicleView.style.display = 'block';
})

function createTable(vehiclesList){
  vehicleTable.innerHTML = '';
  for (let car of vehiclesList) {
    createRow(car);
  }
}

function createRow(car){
  vehicleTable.insertAdjacentHTML(
    'beforeend',
    `
        <tr>
          <td>${car.id}</td>
          <td>${car.registrationNo}</td>
          <td>${car.make}</td>
          <td>${car.model}</td>
          <td>${car.modelYear}</td>
          <td>${car.mileage}</td>
          <td>${car.value == undefined ? 0 : car.value}</td>
        </tr>
      `
  );
}



createTable(vehicles);
