//const tinderUser= new Object();// **Singleton Object**//
const tinderUser ={}//**nonSingleton object */
tinderUser.id="12345";
tinderUser.isloggedIn=false;
tinderUser.name="Shobhit Jain";
tinderUser.lastActive="Today";
//console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullName:{
        userfullName:{
            firstName:"Shobhit",
            lastName:"Jain"
        }
    }
}

console.log(regularUser.fullName.userfullName.firstName);

const obj1={
    1:"a",2:"b"}
const obj2={
    3:"a",4:"b"}
const obj3={5:"a",6:"7" }

const obj4=Object.assign({},obj1,obj2,obj3)
console.log(obj4);
const obj5={...obj1,...obj2,...obj3} // Spread operator
console.log(obj5);


