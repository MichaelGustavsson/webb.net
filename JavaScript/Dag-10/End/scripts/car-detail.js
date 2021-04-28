'use strict';

const heading = document.querySelector('#heading h2');
const image = document.querySelector('#heading img');
const regNo = document.querySelector('#regNo');
const modelYear = document.querySelector('#modelYear');
const mileage = document.querySelector('#mileage');
const description = document.querySelector('#description p');

let vehicleId = 0;

const urlParams = new URLSearchParams(location.search);

for (let [key, value] of urlParams) {
  if (key === 'vehicleId') vehicleId = value;
}

// const vehicle = vehicles.filter(findVehicle)[0];

//const vehicle = vehicles.filter((car) => car.id == vehicleId)[0];
const vehicle = vehicles.find((car) => car.id == vehicleId);

heading.innerText = `${vehicle.make} ${vehicle.model}`;
image.setAttribute('src', `/content/img/${vehicle.imageName}.jpg`);
regNo.innerHTML += ` <span style="font-weight: bold;color: #ff0000;">${vehicle.registrationNo}</span>`;
modelYear.innerText += ` ${vehicle.modelYear}`;
mileage.innerText += ` ${vehicle.mileage}`;

description.innerText = `${vehicle.description}`;
