

console.log(vehicles);
const vehicle = vehicles.find((car) => car.registrationNo == 'BBB123');
console.log(vehicle);

const index = vehicles.findIndex(car => car.registrationNo == 'BBB123');
console.log(index);

const foundVehicle = vehicles.some(car => car.registrationNo == 'ZC S123');
console.log(foundVehicle);