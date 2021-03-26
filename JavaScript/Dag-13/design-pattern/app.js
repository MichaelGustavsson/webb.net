'use strict';

/* CONSTRUCTOR DESIGN PATTERN */
//CONSTRUCTOR FUNCTION
function Vehicle(make, model, modelYear){
  this.make = make;
  this.model = model;
  this.modelYear = modelYear;''
}

Vehicle.prototype.displayInfo = () => {
  return `${this.make} ${this.model} ${this.modelYear}`;
}

////////////////////////////////////////////////////////////////////////////

/* FACTORY DESIGN PATTERN */
function Car(options){
  this.make = options.make || 'Volvo';
  this.model = options.model || 'XC60';
  this.modelYear = options.modelYear || '2020';
}
function Bike(options){
  this.make = options.make || 'Crescent';
  this.model = options.model || 'Mountain X200';
  this.modelYear = options.modelYear || '2019';
}

function VehicleFactory() {}

VehicleFactory.prototype.create = function(options) {
  switch(options.vehicleType) {
    case 'car':
      this.vehicleClass = Car;
      break;
    case 'bike':
      this.vehicleClass = Bike;
      break;
  }

  //Instantiera objektet ifrån rätt klass/typ.
  return new this.vehicleClass(options);
}

//Usage...
const factory = new VehicleFactory();
const car = factory.create({
  vehicleType: 'car',
  make: 'Volvo',
  model: '245GL',
  modelYear: 1982
});

const bike = factory.create({
  vehicleType: 'bike'
});

// console.log(car instanceof Car);
// console.log(car);
// console.log(bike instanceof Bike);
// console.log(bike);

/* SINGLETON PATTERN */
//IIFE Immediatelly Invoked Function Expression.
const singleton = (function(){
  let instance;

  function createInstance() {
    let number = Math.random();

    return {
      getRandomNumber: function() {
        return number;
      }
    }
  }

  return {
    getInstance: function() {
      if(!instance){
        instance = createInstance()
      }
      return instance;
    }
  }
})();

const singleton2 = (function(){
  let instance;

  function createInstance() {
    const object = new Object({
      id: 1,
      value: 'http://localhost:5000/api/vehicles'
    });

    return object;
  }

  return {
    getInstance: function() {
      if(!instance){
        instance = createInstance();
      }
      return instance;
    }
  }
})();

//Usage...
const obj1 = singleton2.getInstance();
const obj2 = singleton2.getInstance();
//console.log(obj1, obj2);

//console.log(obj1 === obj2);
obj2.value = 'XXX';

// console.log(obj1, obj2);


// const objA = singleton.getInstance();
// console.log(objA.getRandomNumber());

// const objB = singleton.getInstance();
// console.log(objB.getRandomNumber());
// const objC = singleton.getInstance();
// console.log(objC.getRandomNumber());
// const objD = singleton.getInstance();
// console.log(objD.getRandomNumber());

///////////////////////////////////////////////////////////////////////////
/* FACADE PATTERN */
const Account = function(accountNumber, customer){
  this.accountNumber = accountNumber;
  this.customer = customer;
};

//Facade...
Account.prototype = {
  applyForLoan: function(amount) {
    let result = 'approved';

    if(!new Credit().checkBalance(amount)){
      result = 'denied'
    }else if(!new Background().check()){
      result = 'denied'
    }

    return `${this.customer} has been ${result} for a ${amount} loan`;
  }
}

const Credit = function() {
  this.checkBalance = function(amount){
    //Complex logic done here....
    return amount < 30000;
  }
}

const Background = function() {
  this.check = function(name){
    //Complex logic done here...
    return true;
  }
}

//Usage...
const loan = new Account(123456, 'Michael');
const result = loan.applyForLoan(35000);
//console.log(result);

/////////////////////////////////////////////////////////////////////////
/* MODULE PATTERN */
const AccountModule = (function(){
  //Private variables
  let balance = 0;
  let accountNumber = 12345;
  let customerName = 'Nisse';

  
  //Public Interface (API)
  return {
    deposit: function(value){
      balance += value;
    },
    withdraw: function(value){
      balance -= value;
    },
    getBalance: function() {
      return balance;
    }
  }
})();

//Usage...
AccountModule.deposit(1000);
AccountModule.withdraw(200);
//console.log(AccountModule.getBalance());

//////////////////////////////////////////////////////////////////////////////
/* REVEALING MODULE PATTERN */
const vehicleModule = (function(){
  //Private variabel
  let vehicles = [];
  
  //Private functions...
  function add(vehicle) {
    vehicles.push(vehicle);
    console.log('Vehicle added...');
  }

  function get(id){
    return vehicles.find( vehicle => {
      return vehicle.id === id;
    });
  }

  //Create the public interface(API)
  return {
    addVehicle: add,
    getVehicle: get
  }

})();

//Usage...
vehicleModule.addVehicle({id: 1, make: 'Volvo', model: 'V40'});
console.log(vehicleModule.getVehicle(1));