
/* FOREACH LOOP */
//Den tar en callback funktion som argument.
//Callback funktionen anropas av forEach för varje iteration
//Skickar forEach aktuellt element/objekt som argument.
//Skickar även index(positionen) samt hela array objektet.

const arr = [1,2,3,4,5,6,7,8,9];

arr.forEach(function(number, index, a) {
  console.log(`index: ${index} ${number}`);
  console.log(a);

});

// console.log('---------------------------------');

//One-liner...
//arr.forEach((number, index) => console.log(`index: ${index} ${number}`));

//Method body....
// console.log('---------------------------------');
// arr.forEach((number, index) => {
//   console.log(`index: ${index} ${number}`);
// });

// vehicles.forEach(function(car){
//   console.log(car.registrationNo);
// });