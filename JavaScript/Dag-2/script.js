'use strict';

/* Decision structures / if and else */

/*
const age = 18;
const hasTheAge = age >= 18;

if(hasTheAge) {
  console.log("Du får köra bil 🚘");
}else {
  console.log("Tyvärr du får inte köra bil, 😔")
}
*/

/* Type conversion and coercion */
//Type conversion är när vi själva konverterar ett värde ifrån en typ till en annan.
//Sträng -> tal, tal -> sträng

//Type coercion när JavaScript automatiskt översätter/konverterar ett värde ifrån
//en typ till en annan.

/* Type Conversion */
/*
const birthYearInput = '1992';

console.log(Number(birthYearInput), birthYearInput);

console.log(Number(birthYearInput) + 10);
console.log(+birthYearInput + 10);

console.log(Number('Michael'));
console.log(typeof NaN);

console.log(String(44), 44);
*/

/* Type Coercion */
//Automatiskt när JavaScript behöver hantera en operation mellan
//två värden av två olika typer.

/*
console.log('Min hund är ' + 6 + ' gammal');
console.log('Min hund är ' + String(6) + ' gammal');

console.log(Number('20') + '10' - 5);
console.log('20' - '10' - 5);
console.log('20' * '2');
console.log('20' / 2);
console.log('20' > '10');

let x = '1' + 1; // '11'
x = x - 1; // '11' -> 11 - 1
console.log(x);

let y = '10' - '2' - 3 + '5';
console.log(y);

const z = prompt("Ange ett värde");
console.log(typeof z, z);
*/

/* Truthy and Falsy */
//Falska värden...
/*
  0,
  '',
  undefined,
  null,
  NaN
*/

//Falsy values
/*
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
*/

//Truthy values
/*
console.log(Boolean(1));
console.log(Boolean('Kalle'));
console.log(Boolean({})); //Ett tomt objekt...
*/

/*
const accountBalance = 0;
if(accountBalance) {
  console.log('Du har fortfarande pengar på banken, var rädd om dem');
}else {
  console.log('Du har inga pengar kvar, tyvärr');
}

let mileage;

if(mileage){
  console.log('Bilen har gått ' + mileage + ' kilometer')
}else {
  console.log('Hoppsan har bilen inte gått något ' + mileage);
}
*/

/* The equality operators == vs. === */
// == (loose) operator JavaScript använder sig av Coercion
// === (strict) operator "- men använder sig inte av Coercion.

/*
const modelYear = '2015';

if(modelYear === 2015){
  console.log('loose comparison', modelYear)
}else {
  console.log('strict comparison', modelYear)
}

const myNumber = Number(prompt('Ange ett nummer'));

//console.log('Du valde nummer ' + myNumber, typeof myNumber);

if(myNumber === 15){
  console.log('Du valde nummer ' + myNumber);
}else if (myNumber === 10) {
  console.log('Du valde nummer ' + myNumber);
}else if(myNumber === 5){
  console.log('Du valde nummer ' + myNumber);
}else {
  console.log('Gillar du inte nummer 5, 10 eller 15');
}

if(myNumber !== 15) console.log('Gillar du inte talet 15?');
*/

/* switch statements */
/*
const day = 'sunday';

switch (day) {
  case 'monday':
    console.log('Måndagsmöte med projektledarna');
    break;
  case 'tuesday':    
  case 'wednesday':
    console.log('Skriver kod');
    break;
  case 'thursday':
    console.log('Möte med utvecklarna');
    break;
  case 'friday':
    console.log('Nu är vi snart lediga😆');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Nu tar vi det lugnt och vilar upp oss');
    break;
  default:
    console.log('Du dagen du valde finns inte ännu');
    break;
}
*/

/* Expressions and Statements */
//Expressions producerar ett värde...
/*
10+5
2021
true && false && !false

//Statements utför någonting...
if(10 < 20){
  const message = '10 är mindre än 20';
  console.log(message);
}
*/

/* The Conditional Operator (Ternary) */
//One-liner if statement...
/*
const time = 23;

// time >= 23 ? console.log('Det är läggdags') : console.log('Du får vara uppe en liten stund till');

const result = time >= 23 ? 'Det är läggdags' : 'Du får vara uppe en liten stund till';

console.log(result);
*/

/* Strict Mode */
//Att tvinga oss att skriva bättre och säkrare kod...
//Deklareras högst upp i JavaScript filen...

/*
const isElectric = true;
let isClimateSmart = false;

if(isElectric) isClimateSmart = true;

if(isClimateSmart) console.log('Du är klimat smart!');

//const private = 'Video';
*/

/* Functions... */
//Är grupperad återanvändar kod/logik...

//Funktioner som inte returnerar något...
function writeToLog(message){
  console.log('Detta kommer ifrån min funktion writeToLog ' + message);
}

// writeToLog('Meddelande 1');
// writeToLog('Meddelande 2');
// writeToLog('Meddelande 3');
// writeToLog('Meddelande 4');
// writeToLog('Meddelande 5');

//Funktioner som returnerar värden...
/*
function findVehicle(registrationNo){
  console.log(registrationNo);
  //Normalt hämtar detta via ett REST API...
  const car = `Bil med registreringsnummer ${registrationNo} Volvo V40`;
  return car;
}

let bil1 = findVehicle('ABC123');
console.log(bil1);
let bil2 = findVehicle('DEF456');
console.log(bil2);
*/

/* Function declarations vs. Function expressions */
/*
//Tack vare 'Hoisting' så fungerar detta...
console.log(calculateVehicleAge(2015));

//Function declaration...
function calculateVehicleAge(modelYear){
  //const age = 2021 - modelYear;
  return 2021 - modelYear;
}

//console.log(calculateVehicleAge(2015));
*/

//Function Expression...
/*
//Går ej att anropa innan funktionen är skapad!!!
//const vehicleAge = calculateVehicleAge2(2018);

//En funktion utan namn.
const fnCalculateVehicleAge = function (modelYear) {
  return 2021 - modelYear;
};

const vehicleAge = fnCalculateVehicleAge2(2018);
console.log(vehicleAge);

*/

/* Arrow function, added in E6 */

//Function Expression with a shorthand syntax...

// const CalculateVehicleAge2 = function (modelYear) {
//   return 2021 - modelYear;
// };

//Arrow function...

/*
const calculateVehicleAge3 = modelYear => 2021 - modelYear;

console.log(calculateVehicleAge3(2017));

// const howLongToRetirement = birthYear => {
//   const age = 2021 - birthYear;
//   const retirement = 67 - age;
//   return retirement
// };

const howLongToRetirement = (birthYear, currentYear, retirementAge) => {
  const age = currentYear - birthYear;
  const retirement = retirementAge - age;
  return retirement;
};

console.log(howLongToRetirement(1984, 2021, 67));
*/
