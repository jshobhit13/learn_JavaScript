const score = 400
const balance= new Number (100)

console.log(balance);

console.log(balance.toString);

console.log(balance.toString().length);
//To Convert to String
console.log(balance.toFixed(2));
//Above tofixed function make the places to be consider after decimal
const otherNumber = 23.89666

console.log(otherNumber.toPrecision(3));

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'));
// !!!!!!!!!!!!!Maths!!!!!!!!
console.log(Math);
console.log(Math.abs(4));
console.log(Math.ceil(4.2));
console.log(Math.round(4.6));
//round function rounds off
const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);

