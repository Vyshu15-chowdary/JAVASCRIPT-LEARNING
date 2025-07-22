 
 
 console.log(x); //x is not defined
 var x=5;
 console.log(x);
 

 console.log(x);
 let x;//error:cannot acess before intialization

 foo();
 function foo(){
    console.log("iam a hoisted function")
 }

 //we an declare var and function at top of scope

 
 var y = "helllo";
 if (y!=="hello"){
    console.warn("x is not equal to hello");

 }
    

 var z = undefined;
 if(z === undefined){
    console.error("z is not defined");
 }
    

 var users = [
    {name:"vyshu",age:23,city:"nellore"},
    {name:"ruchi",age:21,city:"thirupathi"},
    {name:"teju",age:20,city:"sulurpeta"},
    {name:"meghana",age:22,city:"podalakur"}
 ];

 console.table(users);