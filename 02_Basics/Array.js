//ARRAYS

const myArray1 = [1, 2, 3, 4, 5]; //Arrays in js can hold any type of data
const myArray2 = ["Hello", 42, true, null, undefined]
//JavaScript array-copy operations create shallow copies: Changes in source or copy affect the latter
// console.log(myArray1[0]);
// console.log(myArray1[1]);
// //ArrayMethod
// myArray1.push(10);
// myArray1.push(20); //Adds an element to the end of the array
// console.log(myArray1);
// myArray1.pop();
// console.log(myArray1); 

myArray1.unshift(0);// Adds an element to the beginning of the array
console.log(myArray1);

myArray1.shift(9);

const newArray = myArray1.join();
console.log(myArray1);
console.log(newArray); // Converts the array to a string
console.log(typeof newArray);

//includes, indexof
console.log(myArray1.includes(9));
console.log(myArray1.indexOf(20)); //Return -1 if not found

//slice, splice
console.log("A",myArray1);

const slicedArray = myArray1.slice(1, 3); // Returns a shallow copy
console.log("B",myArray1);
const splicedArray = myArray1.splice(1,3)
//Include the whole Range
//Manipulates the original Array
console.log("C",myArray1);

