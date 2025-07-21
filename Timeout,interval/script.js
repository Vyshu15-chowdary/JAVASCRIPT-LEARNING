//set timeout
//after a specific time it execute

/*
function sayHello(){
    console.log("hello vyshnavi");
}
setTimeout(sayHello,2000);
*/

/*
setTimeout(function(){
    console.log("anonymous function as callback")
},2000);
*/

//clearTimeout

const TimeoutId = setTimeout(function(){
    console.log("hello vyshu");
},5000);

clearTimeout(TimeoutId);

//setinterval

/*
let count =0;
 function incrementCount(){
    count--
    console.log(count);
}

setInterval(incrementCount,5000);
*/

// call and apply methods

function otP(name,num){
    console.log(`Hello ${name},you are OTP ${num}`);
}
otP.call(null,"vyshu",5682);

function hello(name,age){
    console.log(`hello ${name},your age is ${age}`);
}
hello.apply(null,["vyshu",23]);

//bind method

let person = {
    firstName : "vyshu",
    lastName : "chowdary",
    getFullName:function(){
        return this.firstName + " "+this.lastName;
    }
};

let getPersonName = person.getFullName.bind(person);
console.log(getPersonName());