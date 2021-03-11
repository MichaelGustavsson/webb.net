
//Weird behaviour of sorting...

const people = ['Michael', 'Bjarne', 'Annika', 'Bosse', 'Trond', 'Björn'];
console.log(people.sort());

//What happens here?
const trans = [3000, -250, 200, 450, -50, 2500, 1000];
console.log(trans.sort());

//The default sort in Javascript sorts only on strings.

//The solution is to implement our own comparer
//We can use a callback function in sort that takes two arguments. Ex:

//return < 0 A comes before B
//return > 0 B comes before A
//Sorting Ascending
trans.sort((a, b) => {
  console.log(a , b);
  if(a > b) return 1;
  if(a < b) return -1
});
console.log(trans);

//Sorting Descending
trans.sort((a, b) => {
  console.log(a , b);
  if(a < b) return 1;
  if(a > b) return -1
});
console.log(trans);

//Improving sort logic...
//Ascending order
trans.sort((a, b) => a - b);
console.log(trans);
//Descending order
trans.sort((a, b) => b - a);
console.log(trans);