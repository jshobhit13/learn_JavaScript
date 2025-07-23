//objects : Both Literal and Constructor
const sym = Symbol("Jain");
const person = {
    name: "Shobhit",
    age: 25,
    [sym]: "Symbol value",//this is symbol sytax
    isStudent: false,
    email: "jshobit8172gmail.com",
    "full name": "Shobhit jain",
}
console.log(person["full name"]); // Accessing property with space in name

person.name = "Shohit Jain"; // Updating property
//Object.freeze(person); // Freezing the object to prevent further modifications
person.name="Shobhit kumar Jain"
//console.log(person.name);
// Definig Symbol
//console.log(person[sym]); // Accessing symbol property
//console.log(person.sym);// this will not access the symbol property, it will return the string "Symbol value"
console.log( sym);
console.log( person[sym]); // Accessing the symbol property again
 // Displaying the symbol itself

console.log(person);// in this symbol sym is refeering to symbol defined above

//FUNCTIONS
person.greet = function() {
    console.log("Hello js user");
}
console.log(person.greet); // return the refernce of the function
console.log(person.greet()); 

//String interpolation:
    
