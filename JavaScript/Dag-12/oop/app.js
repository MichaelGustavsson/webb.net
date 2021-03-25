'use strict';

//CONSTRUCTOR FUNCTION.
//Funktion...(Konstruktor funktion)
/*const Course = function(courseNumber, days){
  this.courseNumber = courseNumber; //Definierar egenskaper
  this.numberOfDays = days;
  this.teacher = 'Kalle'
}

Course.prototype.save = function() {
  console.log('Sparar kursen');
}

Course.prototype.displayInfo = function() {
  console.log(`${this.courseNumber} ${this.numberOfDays}`);
}

//Objekt instanser
const javascript = new Course('2191', 2);
const typescript = new Course('2324', 3);

javascript.save();
javascript.displayInfo();
typescript.save();
console.log(javascript, typescript);*/

//OBJECT CREATE.

//Vår mall (klass)
/*const Vehicle = {
  
  displayInfo() {
    console.log(`Info om fordon. ${this.regNo} - ${this.modelYear}`);
  },

  init(id, regNo, modelYear){
    console.log(this);
    this.id = id;
    this.regNo = regNo;
    this.modelYear = modelYear
  }
}

const volvo = Object.create(Vehicle);
volvo.init(1, 'ABC123', 2017);
volvo.displayInfo();
//console.log(volvo, volvo.__proto__);

const kia = Object.create(Vehicle);
kia.init(2, 'DEF456', 2019);
kia.displayInfo();
//console.log(kia, kia.__proto__);*/

//E6 KLASSER😆
class Vehicle {
  
  constructor(id, regNo, make, model, modelYear, mileage){
    this.id = id;
    this.regNo = regNo;
    this.make = make;
    this.model = model;
    this._modelYear = modelYear;
    this.mileage = mileage;
  }

  //getters och setters
  //GETTER.
  get vehicleMake() {
    return this.make.toUpperCase();
  }

  get modelYear() {
    return this._modelYear;
  }

  //SETTER.
  set modelYear(value){
    if(value > 2021){
      alert('Vi köper inte framtida bilar');
    }else {
      this._modelYear = value;
    }
  }

  displayInfo() {
    console.log(`${this.make} ${this.model}`);
  }
};

const fiat = new Vehicle(1, 'ABC123', 'fiat', 'UNO', 2002, 150000);
console.log(fiat);
fiat.displayInfo();
fiat.modelYear = 2005;
console.log(fiat.modelYear);
//console.log(fiat.vehicleMake);

const mb = new Vehicle(2, '1234', 'mb', '200', 2012, 250000);
//console.log(mb);
mb.displayInfo();
//console.log(mb.vehicleMake);