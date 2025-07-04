//Stack Memory
/*
Stored in call by value form only a copy is shared
Changes does not effect original value*/
let myName="Shobhit"
let anotherName= myName

anotherName="Shab"
console.log(anotherName);
console.log(myName);

let TestCase = {
    accoutNo:"2563145",
    upi: "shobhit@google.com"

}
upi="Jaiin@google.com"
console.log(upi);
// The Upper Output Print the modified value since it is call by reference in heap memory