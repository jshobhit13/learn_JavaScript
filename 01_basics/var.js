const accountId= "Shobhit Jain";
let accountEmail="Shobhit@google.com";
var Password="12345";
accountCity="Delhi";
//accountId="Sho"//not allowed to change cosntant variable
accountEmail="Prateek@google.com";
Password=111311;
accountCity="Jsr";
console.log(accountId);

/*
Prefer not to use var because of the problem with the the block scop and functional scop e, because it changes the original value initiated
*/
console.table([accountEmail,accountId,Password,accountCity]);
