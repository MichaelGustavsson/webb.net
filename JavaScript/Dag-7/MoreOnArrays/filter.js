
/* 
  FILTER ANVÄNDS FÖR ATT SÖKA UT OBJEKT/ELEMENT UR EN ARRAY
  OCH SKAPA EN NY MED RESULTATET 
*/

//The old way...
const cars = [];

for(const car of vehicles){
  if(car.make.toLowerCase() === 'volvo'){
    cars.push(car);
  }
};

console.log(cars);

const foundVehicles1 = vehicles.filter(function(car){
  return car.make.toLowerCase() === 'volvo';
});

const foundVehicles2 = vehicles.filter((car) => {
  return car.make.toLowerCase() === 'volvo';
});

const foundVehicles3 = vehicles.filter((car) => car.make.toLowerCase() === 'volvo');

const foundVehicles4 = vehicles.filter((car) => {
  return car.registrationNo.toLowerCase() === 'zcs123';
});

// console.log(foundVehicles1);
// console.log(foundVehicles2);
// console.log(foundVehicles3);
console.log(foundVehicles4);