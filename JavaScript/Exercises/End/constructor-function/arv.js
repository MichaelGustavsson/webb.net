'use strict';

/*const Vehicle = function(id, make, model, modelYear) {
  this.id = id;
  this.make = make;
  this.model = model;
  this.modelYear = modelYear;
}

Vehicle.prototype.displayInfo = function() {
  console.log(`${this.make} ${this.model}`);
};

const Car = function(id, make, model, modelYear, registrationNumber, speed) {

  //Super eller base anrop
  Vehicle.call(this, id, make, model, modelYear);
  this.registrationNumber = registrationNumber;
  this.speed = speed;
}

Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.constructor = Car;
Car.prototype.accelerate = function(speed){
  this.speed += speed;
  console.log(`Nu kör vi i hastigheten ${this.speed} km/h`);
}

const fiat = new Car(1, 'Fiat', 'Uno', 2006, 'ABC123', 120);

console.log(fiat);

fiat.accelerate(10);

const Bike = function(id, make, model, modelYear) {
  //Super eller base anrop
  Vehicle.call(this, id, make, model, modelYear);
}

Bike.prototype = Object.create(Car.prototype);
Bike.prototype.constructor = Bike;

const crescent = new Bike(1, 'crescent', 'xyz', 2020);

console.log(crescent);*/

//ARV MED E6.
/*class Vehicle {
  
  constructor(id, make, model, modelYear){
    this.id = id;
    this.make = make;
    this.model = model;
    this._modelYear = modelYear;
  }

  //GETTERS.
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

class Car extends Vehicle {
  constructor(id, make, model, modelYear, regNo, speed) {
    super(id, make, model, modelYear);
    this.regNo = regNo;
    this.speed = speed;
  }

  accelerate(value) {
    this.speed += value;
    console.log(`Nu är hastigheten ${this.speed}`);
  }

  brake() {
    this.speed -= 20;
    console.log(`Nu är hastigheten ${this.speed}`);
  }

  // Shadowing...
  displayInfo() {
    console.log(`${this.make} ${this.model} ${this.regNo}`);
  }

}

const ford = new Car(1, 'Ford', 'Mondeo', 2015, "FFG556", 80);
console.log(ford);
ford.displayInfo();

ford._modelYear = 2018;

console.log(ford);*/

/*const Vehicle = {

  init(id, make){
    this.id = id;
    this.make = make
  },

  displayInfo() {
    console.log(`${this.id} - ${this.make}`);
  }
}

const Car = Object.create(Vehicle);

Car.init = function(id, make, regNo, speed){

  Vehicle.init.call(this, id, make);
  this.regNo = regNo;
  this.speed = speed;

}

const opel = Object.create(Car);

opel.init(1, 'Opel', 'ABC123', 80);

console.log(opel);*/

//Proposal hur man skall implementera äkta privata egenskaper
/*class Account {
  #transactions = [];
  #accountNo = 0;

  constructor(accountNumber, customer){
    this.accountNumber = accountNumber;
    this.customer = customer
  }

  getTransactions(){
    return this.#transactions;
  }

  deposit(value){
    this.#transactions.push(value);
  }

  withDraw(value){
    this.deposit(-value);
  }
}

const account = new Account(1111, 'Michael');
account.deposit(1000);
account.withDraw(250);

console.log(account.getTransactions());*/
