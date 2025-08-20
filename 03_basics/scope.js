let c =300;
var a=300;
const b =300;

if (true) {
    let c = 200;
    var a = 200;
    const b = 200;

    console.log("Inside block:");
    console.log("a:", a); // 200
    console.log("b:", b); // 200
    console.log("c:", c); // 200
}
console.log("Outside block:");

function one(){
    const username = "Shobhit";

    function second(){
        const website = "youtube.com";
        console.log("Username:", username); // Shobhit
        
} 
second();
}
one(); // <-- Add this line to execute the function

if(true){
    const username = "Shobhit";
    if(username === "Shobhhit"){
        const website = "youtube.com";
        console.log("username"+ website); // Shobhit
    }
     console.log("Website:", website);
}