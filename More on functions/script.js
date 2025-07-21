function greet(name = 'vyshu'){
    console.log(`hello,${name}`);
}

greet('Admin');

//passing arguments

let x = 40;

function addFive(num){ //one parameter
    num += 5; //adding 5 to it
    console.log(num);
}

addFive(x); //passing argument to funct
console.log(x);//the function modifiesthe value to 15
//original value remains unchanged

let arr = [1,2,3];

function addOne(arr){
    arr.push(4);
}
addOne(arr);
console.log(arr);

//passed as argument to other function

let numbers =[1,2,3,4,5];
let double = function(x){
    return x*2;
}
let doubleNumbers = numbers.map(double);
console.log(doubleNumbers);

//returned as a value froma function

let createCounter = function(){
    let count = 0;
    return function(){
        return count++;
    };
};
let counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

//HIGHER ORDER FUNCTIONS

function add(x,y){
    return x+y;
}
function multi(x,y){
    return x*y;
}
function operateOnTwoNumbers(operatorFunc,x,y){
    return operatorFunc(x,y);
}
console.log(operateOnTwoNumbers(add,2,3));

// call back function
function add (x,y){
    return x+y;
}
function operateOnTwoNumbers(x,y,callback){
    return callback(x,y);
}
console.log(operateOnTwoNumbers(5,6,add));