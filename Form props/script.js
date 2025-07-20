//Type of Events
//mouseevents

let button = document.getElementById("button");

button.addEventListener("mousedown",function(){
    console.log("button pressed down");
});

button.addEventListener("mouseup",function(){
    console.log("button released")
});

//eventbubbling

document.querySelectorAll('.item').forEach(item =>{
    item.addEventListener('click',event =>{
        console.log(`clicked ${event.target.textContent}`);
    });
});

//navigation

const childNode = document.getElementById("child");
const parentNode = childNode.parentNode;
console.log(parentNode);

//childnodes

const parent = document.querySelector("div");
const children = parent.childNodes;
console.log(children);

//dom nodes
const newDiv = document.createElement("div");
const newText = document.createTextNode("new text added");

const container =document.getElementById("container");
container.append(newDiv);
container.appendChild(newText);

//for loop

for(i=0;i<10;i++){
    console.log(i);
}

// for__of loop

let array = [1,2,3,4,5]

for(const item of array){
    console.log(item);
}

//for--in loop

let obj = {a:1,b:2,c:3};
for (const key in obj){
    console.log(`key:${key},value:${obj[key]}`);
}

//while loop

var i = 0;

while(i<10){
    console.log(i);
    i++;
}

//do while

var i = 10;
do{
    console.log(i);
    i++;
}while (i<20);

//switch
let day ="sunday";

switch(day){
    case "monday":
        console.log("today is monday");
        break;
    case "tuesday":
        console.log("today is tuesday");
        break;
    case "wednesday":
        console.log("today is wednesday");
        break;
    case "thursday":
        console.log("today is thursday");
        default:
            console.log("Happy weekend");            
}

//function

function greet(){
    console.log("goodmorning friends")
}

greet();

//set of parameters

function Sum  (a,b){
    return a+b;
}
let result = Sum (3,4);

//anonymous function

let myFunction = function(){
    console.log("hello gooogle");
}
myFunction();

setTimeout(function(){
    console.log("hello world")
},5000);

//invoking /calling

function hello(a,b){
   // console.log("succesfully executed");
   console.log( z = a+b);
}
//hello(2,3);
//hello.call(thisValue,2);

//function calling from otherfunction

function outerFunction(){
    console.log("outer function");
    innerFunction();
}

function innerFunction(){
    console.log("inner function")
}

outerFunction();