function SaymyName() {
  console.log("S");
  console.log("H");
  console.log("0");
  console.log("B");
  console.log("H");
  console.log("I");
  console.log("T");

}
//SaymyName()
//function addone(a, b) // the elements inside parenthesis of a function is called parameters{
  //return a + b;
//}
//const result = addone(34, 50);// the elements inside parenthesis of a function call is called arguments
//console.log(result);

function login(username) {
  if (username === "undefined"){ 
    console.log("Enter a Valid Username");
  } else {
    return `${username} Just Logged In`
  }
}
console.log(login("Shobhit"));

function calculateCartPrice(...num1){// the ... is called rest operator
  return  num1;

}
console.log(calculateCartPrice(200,350,450));
