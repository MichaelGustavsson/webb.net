
const make = document.querySelector('#vehicleMake');

console.log(make.textContent);

make.textContent = "Renault";

document.querySelector('#makeBtn').addEventListener('click', function(){
  console.log('Clicked on button');
  make.textContent = 'Mercedes';
  let input = document.querySelector('#model');
  console.log(input);
  //input.classList.remove('input');
  input.classList.add('input-error');
});

// document.querySelector('#changeBackground').addEventListener('click', () => {
//   document.querySelector('body').style.backgroundColor = '#dddd';
// });

document.querySelector('#changeBackground').addEventListener('click', newBackground);

function newBackground(){
  document.querySelector('body').style.backgroundColor = '#ff0000';
}