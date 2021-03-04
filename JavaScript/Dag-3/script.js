'use strict';

/* ARBETA MED ARRAYS */

/*
//Literal syntax
const vehicleManufacturer = [
  'Volvo',
  'Kia',
  'BMW',
  'Renault',
  'Ford',
  'Nissan',
  'Polestar',
  'Tesla'
];

console.log(vehicleManufacturer);

//Inte lika vanlig
const models = new Array('V40', 'v60', 'V90', 'XC40', 'XC60', 'XC90');
console.log(models);

console.log(vehicleManufacturer[3]);
console.log(models[0]);

console.log(vehicleManufacturer.length);
console.log(models.length);
console.log(vehicleManufacturer[vehicleManufacturer.length - 1]);

const length = vehicleManufacturer.push('Volkswagen');
console.log(vehicleManufacturer);
console.log(length);

vehicleManufacturer.unshift('M-B');
console.log(vehicleManufacturer);

const removed = vehicleManufacturer.pop();
console.log(vehicleManufacturer);
console.log(removed);

vehicleManufacturer.shift();
console.log(vehicleManufacturer);

console.log(vehicleManufacturer.indexOf('Ford'));
console.log(vehicleManufacturer.indexOf('Porsche'));

//ES6
console.log(vehicleManufacturer.includes('Nissan'));
console.log(vehicleManufacturer.includes('Volkswagen'));
*/

/*********************************************************************/

/* ARBETA MED OBJEKT */

/*
//Object literal syntax
const bil1 = {
  regNo: 'CER932',
  make: 'Renault',
  model: 'Trafic',
  modelYear: 2012,
  mileage: 78000,
  equipments: ['cruise control', 'navigator', 'parking sensor']
}

console.log(bil1);

//How to access properties in an object...
console.log(bil1.regNo);
console.log(bil1['regNo']);

const customer = {
  firstName: 'Michael',
  lastName: 'Gustavsson',
  email: 'michael.gustavsson@softtech-dev.se',
  mobile: '0702-908717'
}

const key = 'Name';

console.log(customer['first' + key]);
console.log(customer['last' + key]);


var result = prompt('Vad vill veta om bilen? Välj mellan regNo, make, model, modelYear, mileage, equipments');

console.log(result);
console.log(bil1[result]);


//How to dynamically add properties...
bil1.color = 'Black';

console.log(bil1);

console.log(`Bilen har regnummber ${bil1.regNo} och har ${bil1.equipments.length} extra utrustningar och den populäraste är ${bil1.equipments[1]}`);

*/

/*
//Object methods...

const bil1 = {
  regNo: 'CER932',
  make: 'Renault',
  model: 'Trafic',
  modelYear: 2012,
  mileage: 78000,
  equipments: ['cruise control', 'navigator', 'parking sensor'],
  averageMilesPerYear: function (currentYear) { 
    // console.log(this);   
    // return Number.parseInt(this.mileage / (currentYear - this.modelYear));
    this.averageMileage = Number.parseInt(
      this.mileage / (currentYear - this.modelYear)
    );
    return this.averageMileage; 
  }
};

bil1.averageMilesPerYear(2021);

console.log(bil1.averageMileage);
console.log(bil1.averageMileage);
console.log(bil1.averageMileage);
console.log(bil1.averageMileage);
*/

/* LOOPING ARRAYS */

/*
const vehicleManufacturer = [
  'Volvo',
  'Kia',
  'BMW',
  'Renault',
  'Ford',
  'Nissan',
  'Polestar',
  'Tesla'
];

for(let i = 0; i < vehicleManufacturer.length; i++){
  console.log(vehicleManufacturer[i]);
}
console.log('------------------------------------------');

for(let item of vehicleManufacturer){
  if (item == 'Ford') {
    break;
  }
  console.log(item);
}

console.log('------------------------------------------');

vehicleManufacturer.forEach((item) => {  
  console.log(item);
});
*/
/* WHILE LOOPS */

/*
console.log('------------------------------------------');

let i = 0;

while(i <= vehicleManufacturer.length){
  console.log(vehicleManufacturer[i]);
  i++;
}

*/