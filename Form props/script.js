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
