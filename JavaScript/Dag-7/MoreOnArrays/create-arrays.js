

const a = new Array(7);
console.log(a);

//console.log(a.map(() => 5));
a.fill('Michael')
console.log(a);
a.push('Annika');
console.log(a);

const y = Array.from({length: 7}, () => 'Billie');
console.log(y);

//_ is a throw away variable, which means that we want need it and want use it.
const x = Array.from({length: 5}, (_, index) => index + 1);
console.log(x);