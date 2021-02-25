//Deklarerat en variabel firstName och gett den ett värde ('Michael')
//Variabler i JavaScript skall vara camelCase...
/*
let firstName = 'Michael';
let lastName = 'Gustavsson';
let address = 'Gatan 4';

console.log(firstName, lastName, address);
*/

/*false
console.log(typeof false);*/

//Is possible with TypeScript...
//let isActive: Boolean = true;
 /*
let isActive = true;
console.log(typeof isActive);

isActive = 55;
console.log(typeof isActive);

console.log(typeof 'Hello World');

let age;

console.log(age);

age = 30;
console.log(age);
*/
//BUG!!!
/*
let make = null;
console.log(typeof make);
*/
/***************************/

/* var, let , const */

//let is mutable
/*
let age = 30;
console.log(age);

age = 35;
console.log(age);

//const is immutable
const mileage = 1000;
console.log(mileage);
//mileage = 2000;
console.log(mileage);

//Börja alltid med const deklarationer. Anpassa koden med let om det behövs.
const firstName = 'Michael';

//DO NOT EVER USE var ANYMORE!!!
var lastName = 'Gustavsson';
console.log(lastName);
*/

/* JavaScript operators... */
// Basic mathematical operators...
/*const now = 2020;
const ageMalin = now - 1990;
const ageEmma = now - 1992;

console.log(ageMalin, ageEmma, 4 ** 2, 3 + 5);

//Concatenate strings...
const firstName = 'Michael';
const lastName = 'Gustavsson';
const fullName = firstName + ' ' + lastName;
console.log(fullName);

// Assignment operator...
let x = 2 + 5;
console.log(x);

x += 10;
console.log(x);

x -= 5;
console.log(x);

x *= 3;
console.log(x);

x /= 2;
console.log(x);

x++;
console.log(x);

x--;
console.log(x);

// Comparison operators...
console.log(ageMalin > ageEmma);
console.log(ageEmma >= 30);

const isOlderThan = ageEmma >= ageMalin;

// ==, !=, >, <, >=, <=...
*/

/* Operator precedence... */
/*const now = 2020;
const ageMalin = now - 1990;
const ageEmma = now -1992;

console.log(now - 1990 > now - 1992);

let x, y;
x = y = 30 - 10 - 5;
console.log(x, y);
*/
/* String and Template literals... */
/*const firstName = 'Michael';
const occupation = 'Teacher';
const yearsOfTeaching = 1990;
const now = 2021;

const infoBad = "I'm " + firstName + ', and I am a ' + occupation + ' and have been teaching web technologies for ' + (now - yearsOfTeaching) + ' years!';

console.log(infoBad);

//String Interpolation...
const info = `I'm ${firstName} and I am a ${occupation} and have been teaching web technologies for ${(now - yearsOfTeaching)} years!`;

console.log(info);

const html = `<div class="demo">Demo</div>
<p>Lite text</p>
<input type="submit" value="Klicka här!" >
`

console.log(html);
*/