/* 
  DESTRUCTURING, ETT SÄTT ATT PLOCKA ISÄR EN ARRAY ELLER OBJEKT
  OCH TA UT DET SOM ÄR AV INTRESSE.
*/

//Destructuring arrays...
const arr = [1, 2, 3, 4];
//Före ES6...
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

//console.log(a, b, c);

//Med ES6...
//Plocka ut element till variabler.
const [a, b, c, d] = arr;
//console.log(a, b, c);

//Ta första och sista elementen...
let [first, , , last] = arr;
//console.log(first, last);

//Kasta om ordningen...
[first, last] = [last, first];
//console.log(first, last);

//Nästlade listor...
// const nestedArr = [6, 7, [1, 2]];
// console.log(nestedArr);

// const[, i,[, l]] = nestedArr;
// console.log(i, l);

// const [x, y, z] = [3,4]
// console.log(x, y, z);

//Default values...
const [x = 1, y = 2, z = 3] = [3, 4];
//console.log(x, y, z);

//Destructuring objects...
const car = {
  id: 1,
  registrationNo: 'ABC123',
  make: 'Chevrolet',
  model: 'Corvette',
  modelYear: '2015',
  imageName: 'car1',
  mileage: 25000,
  description:
    'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam commodo venenatis rhoncus. Vivamus id lacus id elit tristique vulputate. Donec ut diam vitae ligula mollis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras tempor sed elit nec pretium. In accumsan odio id est vehicula tincidunt. Aliquam tincidunt risus nec tellus auctor, eget gravida purus efficitur.',
};

const { registrationNo: regnummer, make: tillverkare, model, mileage } = car;
//console.log(regnummer, tillverkare, model, mileage);

//console.log(vehicle);
const { Vehicle: myCar } = vehicle;
//console.log(myCar);

//console.log(myCar.Make, myCar.Model, myCar.ModelYear);

const {
  TechnicalDetails: {
    FuelType: { Name: fuelType },
  },
} = myCar;
//console.log(fuelType);

/***************************************************************/
/* SPREAD OPERATORN */

const spreadArray = [5, 6, 7, 8, 9, 10];
//Det inte bra sättet!
const badWay = [1, 2, 3, spreadArray[0], spreadArray[1], spreadArray[2]];
//console.log(badWay);

//Det bästa sättet!
const goodWay = [1, 2, 3, ...spreadArray];
//console.log(goodWay);

const copyOfarr = [...arr];
// console.log(copyOfarr);
// console.log(arr);

const copyOfCar = { ...car };
//console.log(copyOfCar);

/***************************************************************/

/* SETS ÄR LISTOR/ARRAYS/ MED UNIKA VÄRDEN */
//Kan inte innehålla dubbletter.
//E6...

const cars = [
  'Volvo',
  'Kia',
  'Fiat',
  'BMW',
  'Skoda',
  'Kia',
  'Volkswagen',
  'Kia',
  'Fiat',
];

const vehiclesSet = new Set(cars);

//console.log(vehiclesSet);
//Kontrollera storleken på ett Set!!!
//console.log(vehiclesSet.size);

//Kolla om ett specifikt element/objekt finns i listan...
// console.log(vehiclesSet.has('Fiat'));
// console.log(vehiclesSet.has('Porsche'));

//Lägg till nya element/objekt i ett Set...
vehiclesSet.add('Porsche');
vehiclesSet.add('Renault');
vehiclesSet.add('Renault');
vehiclesSet.add('Renault');

//console.log(vehiclesSet);

//Ta bort element/objekt ur ett Set...
vehiclesSet.delete('Fiat');
//console.log(vehiclesSet);

vehiclesSet.clear();
//console.log(vehiclesSet);

//Vad ska vi ha Set till?
//Vi har en array med dubbletter, vi vill kunna skapa en ny array utan
//dubbletterna.

const models = [
  'V40',
  'V60',
  '320i',
  'Ceed',
  'Trafic',
  'Ceed',
  'V60',
  'Ceed',
  'Trafic',
];
//console.log(models);

//Steg 1. Skapa ett set utav vår array.
const uniqueModels = new Set(models);
//console.log(uniqueModels);
//Steg 2. Skapa en ny array med bara de unika modellerna.
const newModels = [...uniqueModels];
//console.log(newModels);

//One liner...
const arrayOfUniqueModels = [...new Set(models)];
//console.log(arrayOfUniqueModels);

/***************************************************************/

/* MAPS */
//Kan liknas vid dictionaries, det vill säga att vi lagrar data med
//nyckel(key) och värden(value) par.

const vehicleUsage = new Map();
vehicleUsage.set('N', 'Normal Use');
vehicleUsage.set('RC', 'Rental Car');
vehicleUsage.set('T', 'Taxi');
vehicleUsage.set('D', 'Driving School');

// console.log(vehicleUsage);
// console.log(vehicleUsage.get('RC'));

console.log(usageList);

const usageMap = new Map(usageList.map((key) => [key.Code, key.Description]));
console.log(usageMap);

console.log(usageMap.get('RC'));

console.log([...usageMap]);
console.log(usageMap.entries());
console.log(usageMap.keys());
console.log(usageMap.values());
console.log([...usageMap.keys()]);
console.log([...usageMap.values()]);

for (let [key, value] of usageMap) {
  console.log(key, value);
}
