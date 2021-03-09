const car = {
  id: 1,
  registrationNo: 'ABC123',
  make: 'Chevrolet',
  model: 'Corvette',
  modelYear: '2015',
  imageName: 'car1',
  mileage: 25000,
  description:
    'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam commodo venenatis rhoncus. '
};

//Använd objekt destructuring för att plocka ut de egenskaper som vi behöver. Jag har skapat egna variabel namn här.
const {registrationNo: regNummer, make: tillverkare, model: modell, modelYear: modelÅr} = car;

//Bygg ihop en sträng av ovanstående variabler
const info = `Registreringsnummer ${regNummer}, Tillverkare ${tillverkare}, modell ${modell}, Årsmodell ${modelÅr}`
//och skriv ut i konsol fönstret...
console.log(info); 
