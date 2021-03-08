const arr = [1,2,3,4,5,6,7,8,9];
//console.log(arr);

/* SLICE en metod som tar inga, 1 eller 2 argument */
//Immutable!!!
//Plocka element/objekt ifrån en array och placera i en ny array... 
//Skapa en kopia i sin helhet
const arr1 = arr.slice();
//

//Ett argument(start).
const arr2 = arr.slice(3);
//console.log(arr2);

//Två argument, var börja vi och var slutar vi...
const arr3 = arr.slice(3, 8);
// console.log(arr3);
// console.log(arr);

//Plocka ifrån slutet på en array.
const arr4 = arr.slice(-2);
//console.log(arr4);

/* SPLICE() förändrar original arrayen */
//Mutable!!!
//console.log(arr);
// const arr5 = arr.splice(4);
// console.log(arr5);
// console.log(arr);

//Oftast för att ta bort ett element eller objekt ifrån en array.
//const arr6 = arr.splice(3,2);
//console.log(arr6);
//console.log(arr);

/* REVERSE */
// console.log(arr);
// const arr7 = arr.reverse();
// console.log(arr7);
// console.log(arr);

/* SORT */
// arr.sort();
console.log(arr);

/* CONCAT */
//Immutable!!!
const arr8 = ['a','b','c','d'];
console.log(arr8);

const arr9 =  arr.concat(arr8);
console.log(arr9);
console.log(arr);

/* JOIN */
const arr10 = arr.join(' ');
console.log(arr10);