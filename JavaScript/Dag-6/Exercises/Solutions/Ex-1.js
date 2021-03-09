
const checkCars = function(carsKnut, carsEva){
  const knutCorrected = carsKnut.filter(car => car >= 2011);
  const evaCorrected = carsEva.filter(car => car >= 2011);
  const cars = knutCorrected.concat(evaCorrected);
  console.log(cars.sort());
}

checkCars([2019, 2014, 2008, 2005, 2012, 2018], [2011, 2009, 2013, 2017]);

