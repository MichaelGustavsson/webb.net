'use strict';

let vehicleId = 0;

console.log(location);
console.log(location.search);

const urlParams = new URLSearchParams(location.search);

console.log(urlParams);

for(let [key, value] of urlParams){
  console.log(`${key} : ${value}`);
  if(key === 'vehicleId') vehicleId = value;
}

console.log(vehicleId);

function findVehicle(){

}