var globalCars = 'Nisse';

const carList = document.querySelector('#carList');
const cars = [
  {
    id: 1,
    registrationNo: 'ABC123',
    make: 'Chevrolet',
    model: 'Corvette',
    modelYear: '2015',
    imageName: 'car1',
    mileage: 25000,
  },
  {
    id: 2,
    registrationNo: 'AAA123',
    make: 'Ford',
    model: 'Mustang',
    modelYear: '2017',
    imageName: 'car2',
    mileage: 48500,
  },
  {
    id: 3,
    registrationNo: 'BBB123',
    make: 'Porsche',
    model: 'Alpine',
    modelYear: '1967',
    imageName: 'car3',
    mileage: 89000,
  },
];

const createDisplay = (car) => {
  carList.insertAdjacentHTML(
    'beforeend',
    `<div>${car.registrationNo}</div><button id="${car.id}">Add</button>`
  );
};

cars.forEach((car) => {
  createDisplay(car);
});

//Hämta in alla knappar/buttons som är skapade via createDisplay
const buttons = document.querySelectorAll('#carList > button');

//Loopa igenom varje knapp och anropa metoden addClickEvent funktionern
buttons.forEach((item) => {
  addClickEvent(item);
});

function addClickEvent(elem) {
  //Koppla på click händelsen för knappen och skicka med eventet (e)
  elem.addEventListener('click', (e) => {
    //e här representerar knappens klick händelse
    //använd target egenskapen för att komma åt själva html elementet för knappen
    //<button id="3">Add</button>
    console.log(e.target);
    //slutligen använd id attributet via target egenskapen
    //och nu har du tag i bilens id och kan använda den för vidare bearbetning.
    console.log(e.target.id);
    globalCars = cars;
    console.log(globalCars);
  });
}
