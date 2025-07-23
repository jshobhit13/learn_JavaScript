const marvel_heroes=["thor","ironman","hulk","captain america","black widow","spiderman"];
const dc_heroes=["superman","batman","flash","green lantern","wonder woman"];

const all= marvel_heroes.concat(dc_heroes);
console.log(all);

const all2= [...marvel_heroes, ...dc_heroes];
console.log(all2);

const another_array=[1,2,3,[4,5,6],7,[8,9]];
const flattened= another_array.flat();
console.log(flattened);

const name= "Shobhit";
console.log(Array.isArray(name))
console.log(Array.from(name)); // converts string to array
// spread operator is used to spread the elements of an array into another array