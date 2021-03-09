/* FLAT metoden gör om en nästlad array till en rak array med en nivå*/
//Standard är flat() klarar en nivå av nästling
//men flat() tar ett argument som definierar hur många nivåer vår array har.
//Introducerad i ES2019...
const arr1 = [[1,2,3], [4,5,6], 7, 8];
console.log(arr1.flat());

const arr2 = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arr2.flat(2));

//flatMap kombinerar flat och map i en metod
//VIKTIGT flatMap kan bara hantera en nivå av nästling...
console.log(vehicles);