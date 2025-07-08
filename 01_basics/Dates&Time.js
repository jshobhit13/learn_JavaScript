//Dates
const myDate= new Date("01-12-2025");
let myTimeStamp= Date.now();

console.log(myDate); // Prints the date object
//The above will print the time in milliseconds since 1st January 1970
//Comparision is done in milliseconds
//console.log(Math.floor(Date.now()/1000));//Converts milliseconds to seconds
let newdate= new Date();
console.log(newdate);
console.log(newdate.getMonth()); // Returns the month in milliseconds  
console.log(newdate.getFullYear()); // Returns the year
console.log(newdate.getDay());
 // Returns the date 
newdate.toLocaleString('default',{
    weekday: 'long',
    timeZone: 'Asia/Kolkata' 
}); // Converts the date to the local time zone