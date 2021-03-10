
/* 
  MAP TAR EN ARRAY OCH APPLICERAR EN CALLBACK OCH RETURNERAR EN NY
  ARRAY. DVS... Omvandla en array till en annan array
*/

console.log(vehicles);

//The old way...
// const bilar = [];

// for(let car of vehicles){
//   let info = `${car.make} ${car.model}`;
//   bilar.push(info);
// }

// console.log(bilar);

const cars = vehicles.map(function(vehicle) {
  return `${vehicle.id} ${vehicle.make} ${vehicle.model}`;
});

const cars1 = vehicles.map((vehicle) => {
  return `${vehicle.id} ${vehicle.make} ${vehicle.model}`;
});

const cars2 = vehicles.map(vehicle => `${vehicle.id} ${vehicle.make} ${vehicle.model}`);

console.log(cars);
console.log(cars1);
console.log(cars2);