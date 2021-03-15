
const btn = document.querySelector('#btn');

//Gamla sättet med callbacks.
// const getVehicles1 = function() {

//   const request = new XMLHttpRequest();

//   request.open('GET', 'vehicles.json');

//   //callback variant 1.
//   request.addEventListener('load', function(response){
//     console.log(response);
//     const data = JSON.parse(this.responseText);
//     console.log(data);
//   });
//   request.send();
// };

// const getVehicles2 = function() {

//   const request = new XMLHttpRequest();

//   request.open('GET', 'vehicles.json');
//   //request.responseType = 'json';

//   //callback variant 2.
//   request.onload = function(e){
//     console.log(e);
//     const data = JSON.parse(this.responseText);
//     console.log(data);
//   }
  
//   request.send();
// };


//Promises 1.
//Rekommenderar att använda
const getVehicles3 = function(){
  // const response = fetch('vehicles.json');
  // console.log(response);
  // fetch('vehicles.json').then(response => {
  //   console.log(response);
  //   console.log(response.json().then(data => {
  //     console.log(data);
  //   }));
  // });

  // fetch('vehicles.json')
  //   .then((response) => response.json(),
  //     err => alert(err)) //1. fullfilled, 2. rejected
  //   .then((data) => console.log(data));

  fetch('vehicles.json')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch(err => alert(err));
}

//Promises 2.
//Vi fuskar och skapar ett promise objekt runt en callback funktion.
// const getVehicles4 = function(){

//   return new Promise(function(resolve, reject){
//     const request = new XMLHttpRequest();
//     request.onload = function (e) {
//       resolve(e.target.responseText)
//     };

//     request.open('GET', 'vehicles.json');
//     request.send();
//   });
// }


btn.addEventListener('click', function(){
  getVehicles3();
});
