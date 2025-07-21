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

let count =0;
function incrementCount(){
    count--
    console.log(count);
}

setInterval(incrementCount,1000);
